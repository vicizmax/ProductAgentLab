import "dotenv/config";

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest";

type MessageResponse = {
  content: Array<{ type: string; text?: string }>;
};

export async function callClaude(system: string, user: string): Promise<string> {
  if (!API_KEY) {
    throw new Error("Missing ANTHROPIC_API_KEY in .env");
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 900,
      temperature: 0.2,
      system,
      messages: [{ role: "user", content: user }]
    })
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${t}`);
  }

  const data = (await res.json()) as MessageResponse;
  const text = data.content?.map(c => c.text ?? "").join("").trim();
  return text || "";
}
