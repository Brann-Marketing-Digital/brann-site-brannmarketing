/**
 * Dados da Brann em um só lugar.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** Número só com dígitos, com DDI e DDD (ex.: o Brasil começa com 55). */
const whatsappNumber = '5548998410334';
const whatsappMessage = 'Olá! Vim pelo site da Brann e gostaria de conversar.';
/** Link do WhatsApp com uma mensagem já escrita. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
const whatsappUrl = whatsappLink(whatsappMessage);

export interface ClientLogo {
  name: string;
  /** Caminho em public/, ex.: '/clientes/padaria.svg'. Sem ele, mostra o nome. */
  src?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Resultado medido, ex.: '+38% de pedidos em 3 meses'. */
  result?: string;
}

export const site = {
  name: 'Brann Marketing Digital',
  tagline: 'Presença digital com posicionamento e resultado.',
  description:
    'Agência de marketing digital em Tubarão (SC): redes sociais, sites, identidade visual, vídeos, SEO e tráfego pago para empresas de Tubarão e região.',
  url: 'https://brannmarketing.com.br',
  locale: 'pt-BR',

  contact: {
    whatsapp: whatsappUrl,
    whatsappDisplay: '+55 48 99841-0334',
  },

  cta: {
    label: 'Chamar no WhatsApp',
    href: whatsappUrl,
  },

  nav: [
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Equipe', href: '/#equipe' },
    { label: 'Contato', href: '/#contato' },
  ] satisfies NavLink[],

  social: [
    { label: 'WhatsApp', href: whatsappUrl, icon: 'simple-icons:whatsapp' },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/brannmarketing/',
      icon: 'simple-icons:instagram',
    },
  ] satisfies SocialLink[],

  footerColumns: [
    {
      title: 'Serviços',
      links: [
        { label: 'Gestão de redes sociais', href: '/servicos/gestao-de-redes-sociais/' },
        { label: 'Criação de site', href: '/servicos/criacao-de-sites/' },
        { label: 'Criação de identidade visual', href: '/servicos/identidade-visual/' },
        { label: 'Produção de vídeos', href: '/servicos/producao-de-videos/' },
        { label: 'SEO estrutural', href: '/servicos/seo/' },
        { label: 'Tráfego pago', href: '/servicos/trafego-pago/' },
        { label: 'Captação de leads', href: '/servicos/captacao-de-leads/' },
        { label: 'Ferramentas digitais sob medida', href: '/servicos/ferramentas-sob-medida/' },
      ],
    },
    {
      title: 'Onde atendemos',
      links: [
        { label: 'Capivari de Baixo', href: '/atendimento/capivari-de-baixo/' },
        { label: 'Laguna', href: '/atendimento/laguna/' },
        { label: 'Gravatal', href: '/atendimento/gravatal/' },
        { label: 'Braço do Norte', href: '/atendimento/braco-do-norte/' },
        { label: 'Criciúma', href: '/atendimento/criciuma/' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', href: '/#sobre' },
        { label: 'Equipe', href: '/#equipe' },
        { label: 'Contato', href: '/#contato' },
      ],
    },
  ] satisfies FooterColumn[],

  /**
   * Prova social. Cada bloco só aparece no site quando a lista tiver itens.
   * Use apenas clientes, números e depoimentos reais e autorizados.
   */
  proof: {
    clients: [] as ClientLogo[],
    testimonials: [] as Testimonial[],
  },

  legalLinks: [
    { label: 'Política de privacidade', href: '/politica-de-privacidade/' },
    { label: 'Cookies', href: '/politica-de-privacidade/#cookies' },
  ] satisfies NavLink[],
} as const;

export type Site = typeof site;
