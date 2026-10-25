// Renders template.html + content/site.json into dist/index.html. No dependencies; run with `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from "node:fs";

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);

// {{img path css-class}} -> <img> when a photo is set, otherwise the dashed placeholder box
const img = (src, cls) =>
  src ? `<img class="${cls}" src="${esc(src.replace(/^\//, ""))}" alt="" loading="lazy" style="aspect-ratio:4/3;object-fit:cover;width:100%">`
      : `<div class="${cls}"></div>`;

function render(tpl, ctx) {
  tpl = tpl.replace(/\{\{#each ([^\s}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g, (_, key, body) =>
    (get(ctx, key) ?? []).map((item) => render(body, item)).join(""));
  tpl = tpl.replace(/\{\{img ([^\s}]+) ([^\s}]+)\}\}/g, (_, key, cls) => img(get(ctx, key), cls));
  return tpl.replace(/\{\{(\S+?)\}\}/g, (_, key) => esc(get(ctx, key)));
}

const content = JSON.parse(readFileSync("content/site.json", "utf8"));
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", render(readFileSync("template.html", "utf8"), content));
if (existsSync("media")) cpSync("media", "dist/media", { recursive: true });
console.log("Built dist/index.html");
