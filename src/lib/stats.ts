// Competitive-programming stats, fetched live and re-checked hourly (ISR).
// Each source falls back to the last known values, so a blocked or changed API
// never breaks the build or the page.

const HOUR = 3600;
const UA = "Mozilla/5.0 (compatible; jaypokale.me)";

export type LeetCodeStats = { peak: number; topPercent: number; badge: string };
export type CodeforcesStats = { rating: number; rank: string };

const leetcodeFallback: LeetCodeStats = { peak: 2285, topPercent: 0.95, badge: "Guardian" };
const codeforcesFallback: CodeforcesStats = { rating: 1799, rank: "expert" };

type LeetCodeResponse = {
  data?: {
    userContestRanking?: { topPercentage?: number; badge?: { name?: string } | null } | null;
    userContestRankingHistory?: { attended: boolean; rating: number }[] | null;
  };
};

export async function getLeetCode(): Promise<LeetCodeStats> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": UA,
      },
      body: JSON.stringify({
        query:
          "query($u:String!){userContestRanking(username:$u){topPercentage badge{name}} userContestRankingHistory(username:$u){attended rating}}",
        variables: { u: "jaypokale" },
      }),
      next: { revalidate: HOUR },
    });
    if (!res.ok) return leetcodeFallback;
    const { data } = (await res.json()) as LeetCodeResponse;
    const ratings = (data?.userContestRankingHistory ?? [])
      .filter((c) => c.attended)
      .map((c) => c.rating);
    const top = data?.userContestRanking?.topPercentage;
    if (!ratings.length || top === undefined) return leetcodeFallback;
    return {
      peak: Math.round(Math.max(...ratings)),
      topPercent: top,
      badge: data?.userContestRanking?.badge?.name ?? leetcodeFallback.badge,
    };
  } catch {
    return leetcodeFallback;
  }
}

type CodeforcesResponse = { status: string; result?: { rating?: number; rank?: string }[] };

export async function getCodeforces(): Promise<CodeforcesStats> {
  try {
    const res = await fetch("https://codeforces.com/api/user.info?handles=rdx_panther", {
      headers: { "User-Agent": UA },
      next: { revalidate: HOUR },
    });
    if (!res.ok) return codeforcesFallback;
    const json = (await res.json()) as CodeforcesResponse;
    const user = json.status === "OK" ? json.result?.[0] : undefined;
    return user?.rating && user.rank
      ? { rating: user.rating, rank: user.rank }
      : codeforcesFallback;
  } catch {
    return codeforcesFallback;
  }
}
