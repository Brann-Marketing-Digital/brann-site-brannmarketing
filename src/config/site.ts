/**
 * Dados do cliente em um só lugar.
 * Tudo aqui é placeholder: substitua antes de publicar.
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
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

export const site = {
  name: 'Brann Marketing Digital',
  tagline: 'Presença digital com posicionamento e resultado.',
  description:
    'Agência de marketing digital: redes sociais, criação de sites, identidade visual e produção de vídeos, com estratégia e resultado.',
  url: 'https://exemplo.com.br',
  locale: 'pt-BR',

  contact: {
    email: '[email@empresa.com.br]',
    phone: '[(00) 00000-0000]',
    whatsapp: whatsappUrl,
    whatsappDisplay: '+55 48 99841-0334',
    address: '[Endereço da empresa]',
  },

  cta: {
    label: 'Fale conosco',
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
    { label: 'LinkedIn', href: '#', icon: 'simple-icons:linkedin' },
    { label: 'X', href: '#', icon: 'simple-icons:x' },
  ] satisfies SocialLink[],

  footerColumns: [
    {
      title: 'Serviços',
      links: [
        { label: 'Gestão de redes sociais', href: '/#servicos' },
        { label: 'Criação de site', href: '/#servicos' },
        { label: 'Criação de identidade visual', href: '/#servicos' },
        { label: 'Produção de vídeos', href: '/#servicos' },
        { label: 'SEO estrutural', href: '/#servicos' },
        { label: 'Tráfego pago', href: '/#servicos' },
        { label: 'Captação de leads', href: '/#servicos' },
        { label: 'Ferramentas digitais sob medida', href: '/#servicos' },
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

  legalLinks: [
    { label: 'Política de privacidade', href: '/politica-de-privacidade/' },
    { label: 'Cookies', href: '/politica-de-privacidade/#cookies' },
  ] satisfies NavLink[],
} as const;

export type Site = typeof site;
