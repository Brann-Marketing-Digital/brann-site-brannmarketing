---
target: homepage brannmarketing
total_score: 21
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/gustavosf/Documents/Produtos Brann Marketing Digital/brann-site-brannmarketing/src/pages/index.astro"
target_fingerprint: "sha256:f4b0e071ff0c05947e1c6c8ecd8a0079d8439022fca9306edffacbd1b8830283"
target_path: /Users/gustavosf/Documents/Produtos Brann Marketing Digital/brann-site-brannmarketing/src/pages/index.astro
timestamp: 2026-11-07T22-56-14Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 21/36 (58%, Acceptable). H10 n/a (marketing page, no task flow).
| # | Heurística | Nota | Problema-chave |
|---|---|---|---|
| 1 | Status do sistema | 2 | Intro de 4s sem indicação de que pode ser pulada; trava o scroll |
| 2 | Linguagem do mundo real | 3 | Português claro; algum jargão ("SEO estrutural", "direção, organização e resultado") |
| 3 | Controle e liberdade | 2 | Intro forçada em todo carregamento |
| 4 | Consistência | 2 | Cards de serviço com hover de link mas sem link; LinkedIn/X em "#"; "Contato" leva ao hero |
| 5 | Prevenção de erros | 3 | Fallback do número de WhatsApp; timeout da intro |
| 6 | Reconhecimento | 2 | Grade de 8 serviços desconectada dos 8 blocos; blocos sem CTA |
| 7 | Flexibilidade | 2 | CTA some no header mobile; sem botão flutuante |
| 8 | Estética minimalista | 2 | ~12.000px no mobile; serviços ditos duas vezes |
| 9 | Recuperação de erros | 3 | Fallback cobre a falha do WhatsApp |
| 10 | Ajuda | n/a | Página de marketing |

## Especificidade: majoritariamente intercambiável
Hero escuro com manchas desfocadas, eyebrow em caixa alta, ícones em círculos, 8 blocos zigue-zague idênticos, "Por que escolher" genérico, CTA "Fale conosco!". Próprios da Brann: intro neon da lâmpada e vídeos reais no hero — nenhum dos dois passa da primeira tela. Detector: fonte limpa (0); navegador: 1 contraste real (CTA banner 4,1:1, CtaBanner.astro:19) e palavras órfãs.

## Problemas prioritários
- [P1] Sem prova (cases, números, logos, depoimentos); "Resultados comprovados" sem evidência; Testimonials/LogoStrip/ComparisonSection não usados; ilustrações 3D genéricas. → shape, bolder
- [P1] Página longa e serviços duplicados (grade + 8 blocos). → distill, layout
- [P1] Mobile perde o CTA depois do hero (Header.astro:40 max-sm:hidden; sem botão fixo; "Contato" aponta pro hero). → adapt
- [P2] Intro bloqueia todo carregamento (Intro.astro:52; até 8s; preload auto). → optimize, harden
- [P2] Falsas affordances e placeholders: cards sem link, LinkedIn/X "#", site.url exemplo.com.br, e-mail/endereço placeholder, sem Open Graph, contraste do CTA 4,1:1. → harden

## Personas
Jordan: hero não diz para quem é; cards não clicáveis; sem "como funciona"/FAQ. Riley: links mortos, Contato volta ao topo, intro repetida. Casey: intro baixa vídeo antes do conteúdo; sem CTA no mobile por ~15 telas.

## Observações menores
Ponto final fora do destaque no H1; ícones do Sobre quase invisíveis; "Produção de vídeos" sem bullets; hover zoom 1,5s/110%; equipe sem bios; 13 h2 sem agrupamento; palavras órfãs (text-wrap: pretty).

## Perguntas
Mostrar um celular 3D ou um feed real de cliente? Por que gastar a intro como bloqueio em vez de usá-la no hero? Para quem exatamente é o site? O que acontece nas primeiras 24h após o clique no WhatsApp?
