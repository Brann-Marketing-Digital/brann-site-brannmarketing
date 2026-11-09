/**
 * Conteúdo das páginas de serviço (/servicos/<slug>/).
 * Nada de números, prazos, preços ou clientes que não sejam reais.
 */
import fotoRedes from '../assets/servicos/gestao-redes-sociais.jpg';
import fotoSite from '../assets/servicos/criacao-site.jpg';
import fotoIdentidade from '../assets/servicos/identidade-visual.jpg';
import fotoVideos from '../assets/servicos/producao-videos.jpg';
import fotoSeo from '../assets/servicos/seo-estrutural.jpg';
import fotoTrafego from '../assets/servicos/trafego-pago.jpg';
import fotoLeads from '../assets/servicos/captacao-leads.jpg';
import fotoFerramentas from '../assets/servicos/ferramentas-sob-medida.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  /** Nome curto, usado em menus e links. */
  nome: string;
  h1: string;
  seoTitle: string;
  description: string;
  lead: string;
  texto: string[];
  entregas: string[];
  regiaoTitulo: string;
  regiao: string;
  faq: Faq[];
  image: ImageMetadata;
  imageAlt: string;
  whatsapp: string;
}

export const servicos: Servico[] = [
  {
    slug: 'gestao-de-redes-sociais',
    nome: 'Gestão de redes sociais',
    h1: 'Gestão de redes sociais em Tubarão e região',
    seoTitle: 'Gestão de Redes Sociais em Tubarão (SC)',
    description:
      'Gestão de redes sociais para empresas de Tubarão e região: planejamento, criação de posts, artes e vídeos e acompanhamento dos resultados.',
    lead: 'Planejamos, criamos e publicamos o conteúdo da sua marca para você ser visto, lembrado e manter uma presença digital consistente.',
    texto: [
      'Postar de vez em quando não constrói marca. O que faz diferença é ter um plano: saber o que a sua empresa quer que as pessoas pensem dela, para quem está falando e o que cada publicação precisa fazer.',
      'A Brann assume esse trabalho de ponta a ponta. A gente define os temas junto com você, produz as artes e os vídeos, publica e acompanha o que está funcionando, para ajustar o rumo em vez de repetir o que não dá retorno.',
    ],
    entregas: [
      'Planejamento de conteúdo alinhado ao seu posicionamento',
      'Criação de posts, artes e vídeos',
      'Publicação nas redes da sua empresa',
      'Acompanhamento dos resultados',
    ],
    regiaoTitulo: 'Conteúdo com cara de quem é daqui',
    regiao:
      'Em cidades como Tubarão, Capivari de Baixo e Laguna, boa parte dos clientes conhece a empresa pelo nome, pela indicação ou pelo perfil no Instagram antes de entrar em contato. Mostrar a equipe, o dia a dia e os lugares da região aproxima a marca de quem compra dela.',
    faq: [
      {
        q: 'Quais redes sociais a Brann gerencia?',
        a: 'Definimos junto com você as redes em que o seu público realmente está. Para a maioria das empresas locais, o foco costuma ser Instagram e Facebook.',
      },
      {
        q: 'Preciso gravar ou produzir alguma coisa?',
        a: 'A criação de posts, artes e vídeos fica com a Brann. A sua participação é contar o que acontece na empresa e aprovar o conteúdo.',
      },
      {
        q: 'Vocês atendem empresas fora de Tubarão?',
        a: 'Sim. Atendemos Tubarão, Capivari de Baixo, Laguna, Gravatal, Braço do Norte, Criciúma e outras cidades da região, online ou indo até a sua empresa.',
      },
    ],
    image: fotoRedes,
    imageAlt: 'Ilustração 3D de um celular com curtidas, comentários e notificações',
    whatsapp:
      'Olá! Vim pelo site da Brann e quero conversar sobre gestão de redes sociais.',
  },
  {
    slug: 'criacao-de-sites',
    nome: 'Criação de sites',
    h1: 'Criação de sites em Tubarão e região',
    seoTitle: 'Criação de Sites em Tubarão (SC)',
    description:
      'Criação de sites rápidos para empresas de Tubarão e região: layout para celular, estrutura para conversão, WhatsApp direto e prontos para o Google.',
    lead: 'Sites rápidos e bonitos, pensados para transformar visitantes em contatos e prontos para serem encontrados no Google.',
    texto: [
      'Um site bom não é só bonito. Ele abre rápido no celular, explica em poucos segundos o que a sua empresa faz e deixa claro o próximo passo de quem chegou até ali.',
      'A Brann desenha a estrutura pensando em quem vai visitar: o que essa pessoa procura, o que ela precisa ver para confiar e como ela fala com você. O site já sai com o básico de SEO feito, para o Google entender o que você vende e onde atende.',
    ],
    entregas: [
      'Layout que funciona bem no celular',
      'Estrutura pensada para conversão',
      'Botão direto para o seu WhatsApp',
      'Títulos, descrições e dados estruturados para o Google',
    ],
    regiaoTitulo: 'Feito para ser encontrado na sua cidade',
    regiao:
      'Quem procura um serviço em Tubarão costuma digitar o serviço junto com o nome da cidade. Por isso o site precisa dizer com clareza onde a empresa atua e estar alinhado com o Perfil da Empresa no Google. Isso entra no projeto desde o começo.',
    faq: [
      {
        q: 'O site funciona bem no celular?',
        a: 'Sim. O layout é pensado primeiro para o celular, que é por onde a maioria das pessoas chega.',
      },
      {
        q: 'O site já sai pronto para aparecer no Google?',
        a: 'Sim. Títulos, descrições, estrutura de páginas e dados estruturados fazem parte da criação. Para disputar posições mais concorridas, o trabalho continua com o serviço de SEO.',
      },
      {
        q: 'Dá para receber contatos direto no WhatsApp?',
        a: 'Sim. Os botões do site levam direto para o WhatsApp da sua empresa, com uma mensagem já escrita.',
      },
    ],
    image: fotoSite,
    imageAlt: 'Ilustração 3D de uma página de site com imagem, textos e botões',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre a criação de um site.',
  },
  {
    slug: 'identidade-visual',
    nome: 'Identidade visual',
    h1: 'Criação de identidade visual em Tubarão e região',
    seoTitle: 'Identidade Visual em Tubarão (SC)',
    description:
      'Criação de identidade visual e branding para empresas de Tubarão e região: posicionamento claro, marca consistente e reputação sólida.',
    lead: 'Branding é gerir a estratégia da marca com planejamento de longo prazo, para que sua empresa seja percebida do jeito que deseja e cresça de forma inteligente e duradoura.',
    texto: [
      'Identidade visual é mais do que um logo. É o conjunto de cores, letras e formas que faz alguém reconhecer a sua empresa na fachada, no Instagram, no uniforme e no orçamento.',
      'Antes de desenhar, a Brann entende quem é a sua empresa, com quem ela concorre e como ela quer ser lembrada. O desenho vem depois, a serviço dessa decisão.',
    ],
    entregas: [
      'Posicionamento claro no mercado',
      'Identidade visual consistente',
      'Aplicação da marca nos seus canais',
      'Reputação sólida com o seu público',
    ],
    regiaoTitulo: 'Se destacar num mercado em que todo mundo se conhece',
    regiao:
      'Em cidades do porte de Tubarão, a reputação corre rápido e a concorrência costuma estar na mesma avenida. Uma marca coerente faz a empresa parecer tão profissional quanto ela é, e ajuda quando o objetivo é crescer para Criciúma ou outras cidades da região.',
    faq: [
      {
        q: 'Vocês fazem só o logo?',
        a: 'O trabalho parte do posicionamento e vai além do logo, para que a marca funcione em todos os lugares em que aparece.',
      },
      {
        q: 'Minha empresa já tem marca. Dá para atualizar?',
        a: 'Sim. Quando a marca já tem reconhecimento, avaliamos o que vale manter e o que precisa mudar.',
      },
    ],
    image: fotoIdentidade,
    imageAlt: 'Ilustração 3D de uma paleta de tintas, amostras de cores e um lápis',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre identidade visual.',
  },
  {
    slug: 'producao-de-videos',
    nome: 'Produção de vídeos',
    h1: 'Produção de vídeos em Tubarão e região',
    seoTitle: 'Produção de Vídeos em Tubarão (SC)',
    description:
      'Produção de vídeos para empresas de Tubarão e região: roteiro, gravação e edição para fazer sua marca aparecer nas redes sociais.',
    lead: 'Vídeos pensados, gravados e editados para fazer sua marca aparecer ainda mais nas redes sociais.',
    texto: [
      'Vídeo é o formato que mais prende a atenção nas redes, e também o que mais denuncia improviso. Som ruim ou uma ideia confusa fazem a pessoa passar para o próximo em segundos.',
      'A Brann cuida do processo inteiro: pensa a ideia, grava com equipamento próprio e entrega editado no formato certo para cada rede.',
    ],
    entregas: [
      'Ideia e roteiro do vídeo',
      'Gravação com equipamento profissional',
      'Edição no formato de cada rede social',
    ],
    regiaoTitulo: 'Gravamos onde a sua empresa está',
    regiao:
      'Mostrar o lugar real faz diferença: a loja, a obra, a equipe, a cozinha. Por isso a gravação acontece na sua empresa, em Tubarão ou nas cidades vizinhas da região.',
    faq: [
      {
        q: 'Vocês vão até a minha empresa para gravar?',
        a: 'Sim. A gravação acontece no seu negócio, em Tubarão e nas cidades da região que atendemos.',
      },
      {
        q: 'Os vídeos servem para anúncios?',
        a: 'Sim. Os vídeos podem ser pensados para as redes sociais e também para campanhas de tráfego pago.',
      },
    ],
    image: fotoVideos,
    imageAlt: 'Ilustração 3D de uma câmera de vídeo, uma claquete e um botão de play',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre produção de vídeos.',
  },
  {
    slug: 'seo',
    nome: 'SEO',
    h1: 'SEO em Tubarão e região: sua empresa encontrada no Google',
    seoTitle: 'SEO em Tubarão (SC)',
    description:
      'SEO para empresas de Tubarão e região: auditoria técnica, arquitetura de páginas, velocidade e otimização para o Google e para buscas com IA.',
    lead: 'Seu site organizado para ser encontrado no Google: estrutura, velocidade e páginas bem montadas.',
    texto: [
      'SEO é o trabalho de fazer o Google entender o que a sua empresa vende, para quem e em qual cidade. Quando isso está claro, você aparece para quem já está procurando, sem pagar por cada clique.',
      'A Brann começa pela base: auditoria técnica, organização das páginas, títulos, descrições e velocidade. Essa mesma estrutura ajuda a sua empresa a ser citada em respostas de ferramentas de inteligência artificial, como o ChatGPT e as respostas com IA do Google.',
    ],
    entregas: [
      'Auditoria técnica do site',
      'Arquitetura de páginas, títulos e descrições',
      'Velocidade e experiência no celular',
      'Dados estruturados para o Google e para buscas com IA',
    ],
    regiaoTitulo: 'SEO local: aparecer em Tubarão, não no Brasil inteiro',
    regiao:
      'Para a maioria das empresas da região, não adianta disputar o Brasil. O que traz cliente é aparecer quando alguém busca o serviço em Tubarão, Laguna ou Criciúma. Por isso o site, o Perfil da Empresa no Google e as avaliações precisam contar a mesma história.',
    faq: [
      {
        q: 'O que é SEO estrutural?',
        a: 'É a parte de SEO que cuida da construção do site: organização das páginas, títulos, velocidade e dados que os buscadores leem. Sem essa base, o conteúdo tem dificuldade de aparecer.',
      },
      {
        q: 'SEO ajuda a aparecer no ChatGPT e nas respostas com IA?',
        a: 'Ajuda. Essas ferramentas se apoiam em páginas claras, bem estruturadas e confiáveis. Não existe garantia de citação, mas um site organizado aumenta as chances.',
      },
      {
        q: 'SEO garante o primeiro lugar no Google?',
        a: 'Ninguém pode garantir posição, porque quem decide é o Google. O que dá para fazer é construir o site e a presença da empresa do jeito que os buscadores valorizam.',
      },
    ],
    image: fotoSeo,
    imageAlt: 'Ilustração 3D de uma barra de busca com uma lupa sobre o primeiro resultado',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre SEO.',
  },
  {
    slug: 'trafego-pago',
    nome: 'Tráfego pago',
    h1: 'Tráfego pago em Tubarão e região',
    seoTitle: 'Tráfego Pago em Tubarão (SC)',
    description:
      'Gestão de tráfego pago para empresas de Tubarão e região: campanhas no Google Ads e Meta Ads que levam pessoas interessadas até o seu WhatsApp.',
    lead: 'Anúncios no Google e no Meta que levam pessoas interessadas até o seu WhatsApp.',
    texto: [
      'Tráfego pago é o caminho mais rápido para aparecer para quem está pronto para comprar. Também é o jeito mais rápido de gastar dinheiro à toa, se a campanha estiver mal segmentada ou levar para uma página que não convence.',
      'A Brann monta as campanhas no Google Ads e no Meta Ads, define os públicos, faz remarketing para quem já demonstrou interesse e mede as conversões, para você saber o que o investimento trouxe.',
    ],
    entregas: [
      'Campanhas no Google Ads e no Meta Ads',
      'Públicos e remarketing',
      'Medição de conversões e relatórios simples',
    ],
    regiaoTitulo: 'Anunciar só onde a sua empresa atende',
    regiao:
      'Com segmentação por cidade, o seu anúncio aparece para quem está em Tubarão e nas cidades que você realmente atende. Em mercados regionais, isso permite disputar atenção com um investimento menor do que em grandes capitais.',
    faq: [
      {
        q: 'Em quais plataformas vocês anunciam?',
        a: 'Google Ads e Meta Ads, que inclui Facebook e Instagram.',
      },
      {
        q: 'Dá para anunciar só para Tubarão e região?',
        a: 'Sim. As campanhas podem ser limitadas às cidades ou ao raio que a sua empresa atende.',
      },
      {
        q: 'Como eu sei se os anúncios estão dando resultado?',
        a: 'As conversões são medidas e apresentadas em relatórios simples, para você ver quantos contatos as campanhas geraram.',
      },
    ],
    image: fotoTrafego,
    imageAlt: 'Ilustração 3D de uma janela de site com um cursor clicando em um anúncio e um alvo',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre tráfego pago.',
  },
  {
    slug: 'captacao-de-leads',
    nome: 'Captação de leads',
    h1: 'Captação de leads em Tubarão e região',
    seoTitle: 'Captação de Leads em Tubarão (SC)',
    description:
      'Captação de leads para empresas de Tubarão e região: funil de vendas estruturado, formulários inteligentes e automação para nutrir cada contato.',
    lead: 'Atrair visitantes é só o primeiro passo. O resultado acontece quando eles entram em um funil de vendas estruturado e se transformam em leads qualificados.',
    texto: [
      'Muita empresa recebe contatos e perde boa parte deles: a mensagem fica sem resposta, ninguém anota quem pediu orçamento e ninguém volta a falar com quem disse "vou pensar".',
      'A Brann organiza esse caminho. Definimos como o contato chega, como ele é qualificado e o que acontece depois, com automação para que nenhuma oportunidade fique esquecida.',
    ],
    entregas: [
      'Captura e qualificação de leads',
      'Formulários inteligentes e estratégias de conversão',
      'Automação de marketing para nutrir cada contato',
    ],
    regiaoTitulo: 'Para vendas que acontecem no WhatsApp',
    regiao:
      'Na região, boa parte das vendas começa numa conversa de WhatsApp. O funil precisa partir dessa realidade, e não de um modelo pronto pensado para outro tipo de empresa.',
    faq: [
      {
        q: 'O que é um lead?',
        a: 'É uma pessoa que demonstrou interesse e deixou um contato. Um lead qualificado é aquele que tem o perfil e o momento certos para comprar.',
      },
      {
        q: 'Funciona junto com o WhatsApp?',
        a: 'Sim. O funil é desenhado considerando o WhatsApp como um dos principais canais de contato.',
      },
    ],
    image: fotoLeads,
    imageAlt: 'Ilustração 3D de um funil que transforma contatos em um cartão de lead',
    whatsapp: 'Olá! Vim pelo site da Brann e quero conversar sobre captação de leads.',
  },
  {
    slug: 'ferramentas-sob-medida',
    nome: 'Ferramentas sob medida',
    h1: 'Ferramentas digitais sob medida em Tubarão e região',
    seoTitle: 'Sistemas Sob Medida em Tubarão (SC)',
    description:
      'Ferramentas digitais sob medida para empresas de Tubarão e região: plataformas de treinamento, áreas de membros, painéis e sistemas internos.',
    lead: 'Precisa de algo que não existe pronto? A gente desenha e constrói para o seu negócio.',
    texto: [
      'Às vezes a planilha já não dá conta e os sistemas prontos não se encaixam no jeito que a sua empresa trabalha.',
      'Nesses casos, a Brann desenha e constrói a ferramenta a partir do seu processo: uma plataforma de treinamento para a equipe, uma área para os seus clientes ou um painel que reúna as informações que hoje estão espalhadas.',
    ],
    entregas: [
      'Plataforma de vídeos e treinamentos para equipes',
      'Área de membros ou área do cliente',
      'Painéis e sistemas internos',
    ],
    regiaoTitulo: 'Desenvolvimento perto de quem usa',
    regiao:
      'Uma ferramenta boa nasce de entender a operação de perto. Atender empresas de Tubarão e região permite conversar com quem vai usar o sistema no dia a dia e ajustar o que for preciso.',
    faq: [
      {
        q: 'Que tipo de ferramenta vocês constroem?',
        a: 'Plataformas de vídeos e treinamentos, áreas de membros ou do cliente, painéis e sistemas internos. Se a sua necessidade for outra, vale conversar.',
      },
    ],
    image: fotoFerramentas,
    imageAlt: 'Ilustração 3D de peças de quebra-cabeça, uma engrenagem e um painel de gráficos',
    whatsapp:
      'Olá! Vim pelo site da Brann e quero conversar sobre uma ferramenta sob medida.',
  },
];

export const servicoHref = (slug: string) => `/servicos/${slug}/`;
