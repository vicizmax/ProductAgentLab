import fs from "node:fs";
import path from "node:path";

export type Chunk = {
  id: string;
  source_path: string;
  title: string;
  type: "prd" | "notes" | "ticket" | "other";
  summary: string;
  keywords: string[];
  excerpt: string;
  created_at: string;
};

export function walkFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

export function readText(filePath: string): string {
  const raw = fs.readFileSync(filePath);
  // best-effort: treat as utf-8
  return raw.toString("utf8");
}

export function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

export function writeJson(filePath: string, data: unknown) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

export function appendJsonl(filePath: string, obj: unknown) {
  fs.appendFileSync(filePath, JSON.stringify(obj) + "\n", "utf8");
}

export function simpleTypeFromPath(p: string): Chunk["type"] {
  const lower = p.toLowerCase();
  if (lower.includes("prd") || lower.includes("spec")) return "prd";
  if (lower.includes("notes") || lower.includes("meeting")) return "notes";
  if (lower.includes("ticket") || lower.includes("jira") || lower.includes("issue")) return "ticket";
  return "other";
}

const STOPWORDS = new Set([
  "the","a","an","and","or","but","if","then","than","to","of","in","on","for","with","as","at","by","from",
  "is","are","was","were","be","been","being","it","this","that","these","those","we","you","i","they","them",
  "our","your","their","not","no","yes","can","could","should","would","may","might","will","just","about",
  "into","over","under","across","within","without","via","also"
]);

export function extractKeywords(text: string, max = 12): string[] {
  // super simple keyword extraction: top frequent tokens, filtered
  const tokens = (text.toLowerCase().match(/[a-z0-9][a-z0-9\-]{2,}/g) ?? [])
    .filter(t => !STOPWORDS.has(t))
    .filter(t => t.length <= 24);

  const freq = new Map<string, number>();
  for (const t of tokens) freq.set(t, (freq.get(t) ?? 0) + 1);

  return [...freq.entries()]
    .sort((a,b) => b[1]-a[1])
    .slice(0, max)
    .map(([t]) => t);
}

export function chunkId(sourcePath: string, index: number): string {
  // stable-ish id
  return Buffer.from(`${sourcePath}::${index}`).toString("base64url").slice(0, 16);
}

export function truncate(s: string, n: number): string {
  return s.length <= n ? s : s.slice(0, n) + "…";
}

export function nowIso(): string {
  return new Date().toISOString();
}
