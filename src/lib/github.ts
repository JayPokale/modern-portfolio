// live from GitHub, re-checked hourly (ISR); falls back to the last known value
export async function githubCount(path: string, field: string, fallback: number) {
  try {
    const res = await fetch(`https://api.github.com/${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const json = (await res.json()) as Record<string, unknown>;
    return typeof json[field] === "number" ? (json[field] as number) : fallback;
  } catch {
    return fallback;
  }
}
