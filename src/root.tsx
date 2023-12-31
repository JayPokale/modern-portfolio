import { Suspense, createEffect, createSignal } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import NavTop from "./components/NavTop";

export default function Root() {
  return (
    <Html
      lang="en"
      style={{
        "--color-mode": "255 255 255",
        "--color-primary": "143 96 248",
        "--color-secondary": "50 50 50",
      }}
    >
      <Head>
        <Title>Jay Pokale</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="shortcut icon" href="favicon.png"></Link>
      </Head>
      <Body class="max-w-7xl mx-auto">
        <Suspense>
          <ErrorBoundary>
            <NavTop />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
