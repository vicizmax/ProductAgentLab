import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const memoryDir = path.resolve("memory");
const indexPath = path.join(memoryDir, "index.json");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url?.startsWith("/?")) {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(`
      <html>
        <body style="font-family: system-ui; padding: 24px; max-width: 900px;">
          <h2>pm-agent-lab</h2>
          <p>Memory index preview.</p>
          <pre style="background:#f6f6f6; padding:12px; border-radius:8px; overflow:auto;">${fs.existsSync(indexPath) ? escapeHtml(fs.readFileSync(indexPath, "utf8").slice(0, 20000)) : "Run: npm run ingest"}</pre>
          <p><code>npm run ask -- "your question"</code></p>
        </body>
      </html>
    `);
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

server.listen(3333, () => {
  console.log("Viewer running at http://localhost:3333");
});
