"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uRadius;
  uniform float uStep;
  uniform float uDpr;
  uniform float uMotion;
  attribute float aBright;
  attribute vec3 aRand;
  attribute vec3 aColor;
  varying float vBright;
  varying float vForce;
  varying float vAngle;
  varying vec3 vColor;
  varying vec3 vTint;

  void main() {
    vec3 pos = position * uScale;

    // idle breathing
    pos.x += sin(uTime * 0.5 + aRand.x * 6.2831) * 1.2 * uScale * uMotion;
    pos.y += cos(uTime * 0.4 + aRand.y * 6.2831) * 1.2 * uScale * uMotion;

    // cursor scatter — radial push plus a tangential swirl
    vec2 d = pos.xy - uMouse;
    float dist = length(d);
    float force = smoothstep(uRadius, 0.0, dist) * uHover * uMotion;
    vec2 dir = normalize(d + 0.0001);
    vec2 tangent = vec2(-dir.y, dir.x);
    pos.xy += dir * force * uRadius * 0.5;
    pos.xy += tangent * force * uRadius * 0.35 * (aRand.x - 0.5) * 2.0;
    pos.z += force * 60.0 * (0.5 + aRand.y);

    // squares spin lazily, then whirl when disturbed
    vAngle = aRand.z * 6.2831
      + uTime * 0.3 * (aRand.x - 0.5) * uMotion
      + force * 6.0 * sign(aRand.y - 0.5);

    vBright = aBright;
    vForce = force;
    vColor = aColor;
    vTint = vec3(
      1.0 + (aRand.x - 0.5) * 0.14,
      1.0 + (aRand.y - 0.5) * 0.14,
      1.0 + (aRand.z - 0.5) * 0.14
    );

    // twinkle
    float tw = 0.85 + 0.3 * sin(uTime * (1.0 + aRand.x * 2.0) + aRand.y * 6.2831) * uMotion;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uStep * uScale * uDpr
      * (0.42 + aBright * 1.0)
      * (1.0 + force * 1.3)
      * tw;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uColorB;
  varying float vBright;
  varying float vForce;
  varying float vAngle;
  varying vec3 vColor;
  varying vec3 vTint;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float c = cos(vAngle);
    float s = sin(vAngle);
    uv = mat2(c, -s, s, c) * uv;

    // square sprite
    float m = max(abs(uv.x), abs(uv.y));
    float alpha = (1.0 - smoothstep(0.32, 0.48, m)) * (0.45 + 0.55 * vBright);
    if (alpha < 0.02) discard;

    // the image's own colors, with a whisper of per-particle jitter;
    // disturbed particles flash the edition's accent ink
    vec3 color = mix(vColor * vTint, uColorB, clamp(vForce * 0.9, 0.0, 1.0));
    gl_FragColor = vec4(color, alpha);
  }
`;

const cssColor = (name: string) => {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return new THREE.Color(v || "#e8e2d4");
};

const ParticlePortrait = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -500, 500);

    const uniforms = {
      uTime: { value: 0 },
      uScale: { value: 1 },
      uMouse: { value: new THREE.Vector2(9999, 9999) },
      uHover: { value: 0 },
      uRadius: { value: 90 },
      uStep: { value: 8 },
      uDpr: { value: Math.min(window.devicePixelRatio, 2) },
      uMotion: { value: reduceMotion ? 0 : 1 },
      uColorA: { value: cssColor("--t-bone") },
      uColorB: { value: cssColor("--accent") },
    };

    let points: THREE.Points | null = null;
    let imgW = 0;
    let imgH = 0;
    let disposed = false;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (disposed) return;
      imgW = img.naturalWidth;
      imgH = img.naturalHeight;

      const off = document.createElement("canvas");
      off.width = imgW;
      off.height = imgH;
      const ctx = off.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, imgW, imgH);

      // mosaic grid, ~12k cells over the subject
      const step = Math.max(2, Math.round(Math.sqrt((imgW * imgH) / 12000)));
      uniforms.uStep.value = step;
      const pos: number[] = [];
      const bright: number[] = [];
      const rand: number[] = [];
      const cols: number[] = [];
      let saturated = 0;

      for (let y = 0; y < imgH; y += step) {
        for (let x = 0; x < imgW; x += step) {
          const i = (y * imgW + x) * 4;
          const a = data[i + 3] / 255;
          if (a < 0.3) continue; // transparent background
          const r = data[i] / 255;
          const g = data[i + 1] / 255;
          const b = data[i + 2] / 255;
          const luma = r * 0.2126 + g * 0.7152 + b * 0.0722;
          if (luma < 0.03) continue; // pure black drops out
          if (Math.max(r, g, b) - Math.min(r, g, b) > 0.1) saturated++;
          pos.push(x - imgW / 2, imgH / 2 - y, 0);
          bright.push(luma);
          cols.push(r, g, b);
          rand.push(Math.random(), Math.random(), Math.random());
        }
      }

      const n = bright.length;
      // grayscale source? colorize on a warm portrait ramp:
      // umber shadows -> skin tan mids -> cream highlights
      if (saturated / Math.max(n, 1) < 0.05) {
        const stops: [number, number, number][] = [
          [0.16, 0.09, 0.06],
          [0.48, 0.26, 0.15],
          [0.8, 0.55, 0.36],
          [0.96, 0.87, 0.72],
        ];
        for (let k = 0; k < n; k++) {
          const t = Math.min(0.999, Math.max(0, bright[k])) * (stops.length - 1);
          const s0 = stops[Math.floor(t)];
          const s1 = stops[Math.ceil(t)];
          const f = t - Math.floor(t);
          cols[k * 3] = s0[0] + (s1[0] - s0[0]) * f;
          cols[k * 3 + 1] = s0[1] + (s1[1] - s0[1]) * f;
          cols[k * 3 + 2] = s0[2] + (s1[2] - s0[2]) * f;
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute("aBright", new THREE.Float32BufferAttribute(bright, 1));
      geo.setAttribute("aColor", new THREE.Float32BufferAttribute(cols, 3));
      geo.setAttribute("aRand", new THREE.Float32BufferAttribute(rand, 3));

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthTest: false,
        blending: THREE.NormalBlending,
      });

      points = new THREE.Points(geo, mat);
      scene.add(points);
      fit();
    };

    const fit = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      if (imgW) {
        const s = Math.min(w / imgW, h / imgH) * 0.94;
        uniforms.uScale.value = s;
        uniforms.uRadius.value = Math.max(70, 130 * s);
      }
    };

    const ro = new ResizeObserver(fit);
    ro.observe(host);
    fit();

    const mouseTarget = new THREE.Vector2(9999, 9999);
    let hoverTarget = 0;
    const onPointer = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      const inside =
        e.clientX >= r.left - 80 &&
        e.clientX <= r.right + 80 &&
        e.clientY >= r.top - 80 &&
        e.clientY <= r.bottom + 80;
      hoverTarget = inside ? 1 : 0;
      if (inside) {
        mouseTarget.set(
          e.clientX - r.left - r.width / 2,
          -(e.clientY - r.top - r.height / 2)
        );
      }
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const onTheme = () => {
      uniforms.uColorA.value = cssColor("--t-bone");
      uniforms.uColorB.value = cssColor("--accent");
    };
    window.addEventListener("jp-theme", onTheme);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.lerp(mouseTarget, 0.12);
      uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * 0.08;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("jp-theme", onTheme);
      points?.geometry.dispose();
      (points?.material as THREE.Material | undefined)?.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [src]);

  return <div ref={hostRef} className={className} aria-hidden />;
};

export default ParticlePortrait;
