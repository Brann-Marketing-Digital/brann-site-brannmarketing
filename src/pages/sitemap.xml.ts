import type { APIRoute } from 'astro';
import { servicos, servicoHref } from '../data/servicos';
import { cidades, cidadeHref } from '../data/cidades';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '/',
    ...servicos.map((s) => servicoHref(s.slug)),
    ...cidades.map((c) => cidadeHref(c.slug)),
    '/politica-de-privacidade/',
  ];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
