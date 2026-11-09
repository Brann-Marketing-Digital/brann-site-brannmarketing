/** Dados estruturados (JSON-LD) do site. */
import { site } from '../config/site';
import { servicos, servicoHref, type Faq } from './servicos';
import { areaAtendida } from './cidades';

const url = (path: string) => new URL(path, site.url).toString();

export const orgId = url('/#organizacao');

const city = (name: string) => ({
  '@type': 'City',
  name,
  containedInPlace: { '@type': 'State', name: 'Santa Catarina' },
});

/**
 * A empresa atende sem receber clientes no local: só cidade e estado no
 * endereço, nunca a rua. Mantenha nome e telefone iguais aos do Perfil da
 * Empresa no Google.
 */
export const organizacao = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': orgId,
  name: site.name,
  description: site.description,
  url: url('/'),
  logo: url('/favicon.png'),
  image: url('/og.png'),
  telephone: '+55-48-99841-0334',
  foundingDate: '2021',
  founder: [
    { '@type': 'Person', name: 'Guilherme Viana' },
    { '@type': 'Person', name: 'João Duarte' },
    { '@type': 'Person', name: 'Gustavo Sorato' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tubarão',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  areaServed: areaAtendida.map(city),
  sameAs: site.social
    .filter((item) => item.label !== 'WhatsApp')
    .map((item) => item.href),
  knowsAbout: servicos.map((s) => s.nome),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de marketing digital',
    itemListElement: servicos.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.nome,
        url: url(servicoHref(s.slug)),
      },
    })),
  },
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': url('/#site'),
  url: url('/'),
  name: site.name,
  inLanguage: 'pt-BR',
  publisher: { '@id': orgId },
};

export const breadcrumb = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: url(item.href),
  })),
});

export const faqPage = (faq: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

export const servico = (opts: {
  name: string;
  description: string;
  href: string;
  cidades: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: url(opts.href),
  provider: { '@id': orgId },
  areaServed: opts.cidades.map(city),
});
