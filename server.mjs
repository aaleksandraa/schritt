import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import serverEntry from "./dist/server/server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "dist", "client");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function sendNodeResponse(nodeResponse, webResponse) {
  nodeResponse.statusCode = webResponse.status;
  webResponse.headers.forEach((value, key) => {
    nodeResponse.setHeader(key, value);
  });

  if (!webResponse.body) {
    nodeResponse.end();
    return;
  }

  const reader = webResponse.body.getReader();
  const pump = () =>
    reader.read().then(({ done, value }) => {
      if (done) {
        nodeResponse.end();
        return;
      }
      nodeResponse.write(Buffer.from(value), pump);
    });
  pump().catch((error) => {
    console.error(error);
    nodeResponse.end();
  });
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

async function serveStatic(url, response) {
  const pathname = decodeURIComponent(url.pathname);
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(clientDir, safePath);

  if (!filePath.startsWith(clientDir)) return false;

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) return false;

    const ext = path.extname(filePath).toLowerCase();
    response.statusCode = 200;
    response.setHeader("content-type", contentTypes[ext] || "application/octet-stream");
    response.setHeader("content-length", fileStat.size);
    createReadStream(filePath).pipe(response);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (request, response) => {
  try {
    const host = request.headers.host || `127.0.0.1:${port}`;
    const url = new URL(request.url || "/", `http://${host}`);

    if (await serveStatic(url, response)) return;

    const body =
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await readRequestBody(request);

    const webRequest = new Request(url, {
      method: request.method,
      headers: new Headers(request.headers),
      body,
    });

    const webResponse = await serverEntry.fetch(webRequest, {}, {});
    sendNodeResponse(response, webResponse);
  } catch (error) {
    console.error(error);
    const errorHtml = await readFile(path.join(clientDir, "500.html"), "utf8").catch(
      () => "Internal Server Error",
    );
    response.statusCode = 500;
    response.setHeader("content-type", "text/html; charset=utf-8");
    response.end(errorHtml);
  }
});

server.listen(port, () => {
  console.log(`SCHRITT KW server listening on port ${port}`);
});
