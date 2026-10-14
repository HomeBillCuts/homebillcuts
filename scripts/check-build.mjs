// Fails the build if any guide rendered empty (Astro can log a Markdown error and still exit 0).
import { readdirSync, readFileSync, existsSync } from 'node:fs';
const dir = 'src/content/blog';
const bad = [];
for (const f of readdirSync(dir).filter((f) => /\.mdx?$/.test(f))) {
  const src = readFileSync(`${dir}/${f}`, 'utf8');
  if (/^draft:\s*true/m.test(src)) continue;
  const id = f.replace(/\.mdx?$/, '');
  const out = `dist/blog/${id}/index.html`;
  if (!existsSync(out)) { bad.push(`${id}: no output page`); continue; }
  const html = readFileSync(out, 'utf8');
  const m = html.match(/<article class="prose">([\s\S]*?)<p class="disclosure-line">/);
  const body = m ? m[1].replace(/<[^>]+>/g, '') : '';
  if (body.length < 1500) bad.push(`${id}: body only ${body.length} chars (render failed?)`);
}
if (bad.length) { console.error('Guide render check FAILED:\n' + bad.join('\n')); process.exit(1); }
console.log(`Guide render check passed (${readdirSync(dir).length} guides).`);
