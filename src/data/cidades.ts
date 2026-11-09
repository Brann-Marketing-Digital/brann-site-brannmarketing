/**
 * Cidades atendidas. Tubarão é a base: a home e as páginas de serviço já
 * focam nela, por isso ela não tem página própria aqui (evita páginas
 * competindo entre si). Cada texto precisa ser próprio da cidade; não
 * duplique trocando só o nome.
 */
import type { Faq } from './servicos';

export interface Cidade {
  slug: string;
  nome: string;
  seoTitle: string;
  description: string;
  lead: string;
  contexto: string[];
  prioridades: { servico: string; motivo: string }[];
  faq: Faq[];
}

/** Todas as cidades da área de atendimento, para o schema e os textos. */
export const areaAtendida = [
  'Tubarão',
  'Capivari de Baixo',
  'Laguna',
  'Gravatal',
  'Braço do Norte',
  'Criciúma',
];

export const cidades: Cidade[] = [
  {
    slug: 'capivari-de-baixo',
    nome: 'Capivari de Baixo',
    seoTitle: 'Agência de Marketing em Capivari de Baixo (SC)',
    description:
      'Marketing digital para empresas de Capivari de Baixo (SC): redes sociais, sites, Google e tráfego pago com a Brann, agência vizinha, de Tubarão.',
    lead: 'Para empresas de Capivari de Baixo que querem ser encontradas por quem mora na cidade e também por quem está em Tubarão, logo ao lado.',
    contexto: [
      'Capivari de Baixo e Tubarão funcionam quase como uma cidade só: muita gente mora em uma, trabalha na outra e faz compras nas duas. Quem vende em Capivari disputa cliente com o comércio de Tubarão, mesmo sem perceber.',
      'Por isso o marketing aqui precisa de duas frentes: garantir que a empresa apareça para quem busca na própria cidade e fazer com que ela também seja considerada por quem está do outro lado.',
    ],
    prioridades: [
      {
        servico: 'seo',
        motivo:
          'Deixar claro para o Google que a empresa atende Capivari de Baixo e aparecer nas buscas da vizinhança.',
      },
      {
        servico: 'gestao-de-redes-sociais',
        motivo: 'Manter a marca presente para quem circula entre as duas cidades.',
      },
      {
        servico: 'trafego-pago',
        motivo: 'Anunciar só para Capivari de Baixo e Tubarão, sem desperdiçar verba.',
      },
    ],
    faq: [
      {
        q: 'A Brann atende empresas de Capivari de Baixo?',
        a: 'Sim. Atendemos Capivari de Baixo online e indo até a sua empresa, a partir de Tubarão.',
      },
      {
        q: 'Vale a pena anunciar só em Capivari de Baixo?',
        a: 'Depende do negócio. Para muitas empresas, o melhor é incluir Tubarão na campanha, porque o público das duas cidades se mistura.',
      },
    ],
  },
  {
    slug: 'laguna',
    nome: 'Laguna',
    seoTitle: 'Agência de Marketing em Laguna (SC)',
    description:
      'Marketing digital para empresas de Laguna (SC): redes sociais, vídeos, sites e anúncios para turismo, gastronomia e comércio, com a Brann.',
    lead: 'Para pousadas, restaurantes e comércios de Laguna que precisam encher na temporada e não sumir no resto do ano.',
    contexto: [
      'Laguna vive de um calendário próprio: o movimento cresce no verão e no Carnaval, e o restante do ano depende mais do público local e do turismo cultural do centro histórico.',
      'Isso muda o marketing. Quem decide viajar pesquisa antes, de longe, e escolhe pelo que encontra no Google e no Instagram. O trabalho começa meses antes da temporada e precisa de boas imagens do lugar.',
    ],
    prioridades: [
      {
        servico: 'producao-de-videos',
        motivo: 'Mostrar o lugar, o prato e a experiência para quem ainda está decidindo o destino.',
      },
      {
        servico: 'trafego-pago',
        motivo: 'Alcançar turistas das cidades de origem antes da temporada, e não só quem já chegou.',
      },
      {
        servico: 'criacao-de-sites',
        motivo: 'Ter um canal próprio de reserva e contato pelo WhatsApp.',
      },
    ],
    faq: [
      {
        q: 'Quando começar a divulgar para a temporada em Laguna?',
        a: 'Quanto antes, melhor. Muita gente planeja a viagem com antecedência, então é bom a marca estar presente antes do verão.',
      },
      {
        q: 'A Brann grava vídeos em Laguna?',
        a: 'Sim. Vamos até a sua empresa em Laguna para gravar.',
      },
    ],
  },
  {
    slug: 'gravatal',
    nome: 'Gravatal',
    seoTitle: 'Agência de Marketing em Gravatal (SC)',
    description:
      'Marketing digital para empresas de Gravatal (SC): vídeos, redes sociais, sites e anúncios para hotéis, termas e comércio local, com a Brann.',
    lead: 'Para hotéis, pousadas e negócios de Gravatal que dependem de quem vem de fora atrás das águas termais.',
    contexto: [
      'Gravatal é conhecida pelas águas termais, e boa parte da economia gira em torno de quem vem passar alguns dias na cidade. O cliente de hotelaria, na maioria das vezes, não está aqui quando decide.',
      'Por ser uma cidade pequena, o comércio local tem público mais limitado e costuma se beneficiar de alcançar também as cidades vizinhas, como Tubarão e Braço do Norte.',
    ],
    prioridades: [
      {
        servico: 'producao-de-videos',
        motivo: 'Transmitir a experiência de descanso que motiva a viagem.',
      },
      {
        servico: 'trafego-pago',
        motivo: 'Alcançar famílias e casais das cidades de onde vêm os hóspedes.',
      },
      {
        servico: 'seo',
        motivo: 'Aparecer para quem pesquisa hospedagem e termas na região.',
      },
    ],
    faq: [
      {
        q: 'A Brann atende hotéis e pousadas de Gravatal?',
        a: 'Sim. Atendemos negócios de Gravatal online e indo até o local, a partir de Tubarão.',
      },
    ],
  },
  {
    slug: 'braco-do-norte',
    nome: 'Braço do Norte',
    seoTitle: 'Agência de Marketing em Braço do Norte (SC)',
    description:
      'Marketing digital para empresas de Braço do Norte (SC): identidade visual, sites, redes sociais e geração de contatos, com a Brann.',
    lead: 'Para indústrias, agronegócio e comércio de Braço do Norte que querem ser vistos além do Vale.',
    contexto: [
      'Braço do Norte é referência no Vale pela agroindústria e por um comércio forte, com empresas familiares que cresceram pela reputação construída na região.',
      'O desafio costuma aparecer quando a empresa quer vender para mais longe: quem não conhece a família por trás do negócio julga pelo site, pela marca e pelo que encontra na internet.',
    ],
    prioridades: [
      {
        servico: 'identidade-visual',
        motivo: 'Fazer a marca transmitir o tamanho e a seriedade que a empresa já tem.',
      },
      {
        servico: 'criacao-de-sites',
        motivo: 'Ter um lugar para compradores de fora do Vale conhecerem a empresa.',
      },
      {
        servico: 'captacao-de-leads',
        motivo: 'Organizar os contatos comerciais para que nenhuma oportunidade se perca.',
      },
    ],
    faq: [
      {
        q: 'A Brann trabalha com empresas familiares?',
        a: 'Sim. Atendemos empresas de diferentes portes e segmentos, e o trabalho parte sempre do momento de cada negócio.',
      },
      {
        q: 'A Brann atende em Braço do Norte?',
        a: 'Sim. Atendemos online e indo até a sua empresa, a partir de Tubarão.',
      },
    ],
  },
  {
    slug: 'criciuma',
    nome: 'Criciúma',
    seoTitle: 'Agência de Marketing em Criciúma (SC)',
    description:
      'Marketing digital para empresas de Criciúma (SC): SEO, tráfego pago, captação de leads e sites para se destacar no maior mercado do sul catarinense.',
    lead: 'Para empresas de Criciúma que precisam se destacar no maior mercado do sul catarinense.',
    contexto: [
      'Criciúma é a maior cidade do sul de Santa Catarina, com uma economia diversa que vai da cerâmica e do plástico à confecção, ao comércio e aos serviços.',
      'Mais empresas significam mais concorrência por atenção e por posições no Google. Aparecer aqui pede estratégia: escolher em quais buscas vale competir e medir o que cada canal traz.',
    ],
    prioridades: [
      {
        servico: 'seo',
        motivo: 'Disputar as buscas certas, em vez de tentar aparecer para tudo.',
      },
      {
        servico: 'trafego-pago',
        motivo: 'Gerar contatos enquanto o trabalho orgânico ganha força.',
      },
      {
        servico: 'captacao-de-leads',
        motivo: 'Aproveitar melhor cada contato em um mercado mais competitivo.',
      },
    ],
    faq: [
      {
        q: 'Uma agência de Tubarão consegue atender Criciúma?',
        a: 'Sim. A maior parte do trabalho é digital, e quando é preciso gravar ou fazer uma reunião, vamos até a sua empresa.',
      },
      {
        q: 'Atende indústrias e empresas B2B?',
        a: 'Sim. Atendemos empresas de diferentes segmentos e portes, com estratégia adaptada a quem compra de você.',
      },
    ],
  },
];

export const cidadeHref = (slug: string) => `/atendimento/${slug}/`;
