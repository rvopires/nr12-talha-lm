/**
 * Conteúdo — NR 11 Operador de Talha Elétrica · padrão TecnoCursos
 * Gerado a partir de "NR 11 - OPERADOR DE TALHA ELÉTRICA - MATERIAL COMPLEMENTAR 29 slide.pptx" (29 slides)
 * e do roteiro HTML do curso (roteiro-nr11-talha-eletrica.html). Somente o que está no material.
 * Lacunas para o responsável técnico estão no resumo final do roteiro.
 *
 * Tipos: cover | content | video | quiz-intro | question | match | sort | fill | finale
 *
 * Vídeos Panda: passar o UUID como 7º argumento de video(...).
 * Fotos: assets/fotos/*.png (a gerar com os prompts do roteiro; sem a imagem, a tela mostra o ícone).
 * Nomes das fotos seguem o roteiro: pNN.k.png (NN = tela do roteiro, k = ordem) e mMpK.png (perguntas).
 *
 * Desafios por módulo (um formato diferente em cada módulo):
 *  M1 NR 11 em Foco           → 4 question (cartões)  · mínimo 3
 *  M2 Par Perfeito            → 1 match (5 pares)
 *  M3 Faça ou Evite           → 1 sort (8 cartões)
 *  M4 Complete a Inspeção     → 4 fill                · mínimo 3
 *  M5 Duelo do Içamento       → 6 question (sim ou não) · mínimo 5
 */
(function () {
  var F = 'assets/fotos/';
  var PANDA = 'https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=';

  function cover(m, title, subtitle) {
    return { id: 'm' + m + '-cover', type: 'cover', title: 'Módulo ' + m + ' — ' + title, subtitle: subtitle,
      transcript: 'Módulo ' + m + ': ' + title + '.', image: F + 'capamodulo' + m + '.png?v=fab1', imageAlt: 'Capa do Módulo ' + m + ': ' + title };
  }
  function video(id, title, dur, scene, brief, body, pandaId) {
    var out = { id: id, type: 'video', kicker: '🎥 Vídeo', title: title, duration: dur, scene: scene, brief: brief, body: body,
      transcript: 'Vídeo: ' + title + '.' };
    if (pandaId) {
      out.embed = PANDA + pandaId;
      out.playerId = 'panda-' + pandaId;
    }
    return out;
  }
  function intro(m, title, count, min, icon, body) {
    return { id: 'm' + m + '-quiz-intro', type: 'quiz-intro', title: 'Desafio — ' + title, count: count, minCorrect: min, icon: icon,
      body: body + ' Mínimo de <strong>' + min + (min === 1 ? ' acerto' : ' acertos') + '</strong> para avançar.',
      transcript: 'Desafio do módulo ' + m + ': ' + title + '.' };
  }
  /* pergunta de 3 cartões; ok = posição da resposta certa (0, 1 ou 2) */
  function q(id, mod, k, question, certa, erradas, ok, explanation, review, imageAlt) {
    var alts = erradas.slice(); alts.splice(ok, 0, certa);
    return { id: id, type: 'question', question: question,
      alternatives: alts.map(function (t, i) { return { id: 'abc'.charAt(i), text: t, correct: i === ok }; }),
      explanation: explanation, review: review, transcript: question,
      image: F + 'm' + mod + 'p' + k + '.png?v=fab1', imageAlt: imageAlt, variant: 'cartoes', confirm: true };
  }
  /* duelo: sim ou não, sem foto */
  function duelo(id, question, sim, explanation, review, k) {
    return { id: id, type: 'question', question: question, image: k ? F + 'm5d' + k + '.png' : undefined, imageAlt: review,
      alternatives: [{ id: 'a', text: 'Sim', correct: sim }, { id: 'b', text: 'Não', correct: !sim }],
      explanation: explanation, review: review, transcript: question, variant: 'confirmar', confirm: true };
  }
  function fill(id, text, extra, review, body) {
    return { id: id, type: 'fill', title: 'Complete a frase', body: body || 'Toque nas palavras de baixo para preencher a lacuna.',
      text: text, extra: extra, review: review, transcript: 'Complete a frase: ' + review + '.' };
  }

  window.QUESTION_SCREEN_SESSION = {
    "meta": { "title": "NR 11 – Operador de talha elétrica", "brand": "TecnoCursos", "musicSrc": "musica/musica_foco.mp3" },
    "modules": [

      /* ================= MÓDULO 1 ================= */
      {
        "id": 1, "title": "Introdução e referências normativas", "meta": "Vídeo + texto · desafio NR 11 em Foco",
        "titleUnlock": { "title": "BASE DA NR 11", "body": "Você conhece a origem da NR 11 e as normas de referência.", "icon": "📘" },
        "screens": [
          cover(1, 'Introdução e referências normativas', 'A origem da NR 11, as normas e referências citadas no treinamento e o checklist como ferramenta de apoio.'),
          video('m1-v-abertura', 'Abertura: a NR 11 e a segurança com equipamentos de içar', '1:00',
            'Galpão com a talha elétrica em operação, movimentação de materiais, a lista do que o aluno vai ver e o checklist.',
            'Cinematográfico realista; cartaz para a lista do curso. Locução calma e direta.',
            'A NR 11 nasceu para implementar ações de segurança nos ambientes e nos equipamentos de içamento e transporte de materiais. O checklist é uma ótima ferramenta para atividades de longa duração.',
            'cebd6a74-6298-42e4-aa99-0266035ee092'),
          {
            "id": "m1-referencias-nrs", "type": "content", "layout": "acordeao", "startAt": 1, "nextLabel": "Próxima norma", "kicker": "📄 Texto", "title": "Referências normativas: as NRs",
            "help": "Toque numa faixa colorida, ou em Próxima norma, para abrir cada norma. Na última, clique em Concluir.",
            "groups": [{ "icon": "📚", "label": "As 5 NRs citadas no treinamento", "items": [
              { "icon": "🦺", "tone": "blue", "title": "NR 06", "text": "Equipamento de Proteção Individual – EPI.", "image": F + 'p2.1.png?v=fab1', "imageAlt": "EPIs organizados sobre uma bancada" },
              { "icon": "📦", "tone": "orange", "title": "NR 11", "text": "Transporte, Movimentação, Armazenagem e Manuseio de Materiais.", "image": F + 'p2.2.png?v=fab1', "imageAlt": "Talha elétrica içando um palete" },
              { "icon": "⚙️", "tone": "purple", "title": "NR 12", "text": "Segurança no Trabalho em Máquinas e Equipamentos.", "image": F + 'p2.3.png?v=fab1', "imageAlt": "Esteira com proteção fixa" },
              { "icon": "🧍", "tone": "teal", "title": "NR 17", "text": "Ergonomia.", "image": F + 'p2.4.png?v=fab1', "imageAlt": "Colaborador com postura ereta ao lado da talha" },
              { "icon": "🪜", "tone": "pink", "title": "NR 35", "text": "Trabalho em Altura.", "image": F + 'p2.5.png?v=fab1', "imageAlt": "Estantes altas de aço vistas de baixo" }
            ] }],
            "transcript": "Referências normativas: NR 06, Equipamento de Proteção Individual. NR 11, Transporte, Movimentação, Armazenagem e Manuseio de Materiais. NR 12, Segurança no Trabalho em Máquinas e Equipamentos. NR 17, Ergonomia. NR 35, Trabalho em Altura."
          },
          {
            "id": "m1-referencias-abnt", "type": "content", "layout": "zonas", "kicker": "📄 Texto", "title": "Referências normativas: ABNT e outras",
            "groups": [{ "icon": "📑", "label": "Mais referências", "items": [
              { "icon": "📑", "tone": "blue", "title": "ABNT NBR", "text": "NBR 10981 – Especificação. NBR 11095 – Método de ensaio. NBR 11327 – Requisitos de utilização. NBR 16324 – Talhas com acionamento manual.", "image": F + 'p2.6.png?v=fab1', "imageAlt": "Talha elétrica e talha manual de corrente lado a lado" },
              { "icon": "❤️", "tone": "orange", "title": "American Heart Association", "text": "Protocolo 2015 Guidelines American Heart Association.", "image": F + 'p2.7.png?v=fab1', "imageAlt": "Estojo de primeiros socorros aberto" },
              { "icon": "🚑", "tone": "teal", "title": "Portaria GM N.2048", "text": "Política Nacional de Atenção as Urgências.", "image": F + 'p2.8.png?v=fab1', "imageAlt": "Ambulância de resgate" }
            ] }],
            "transcript": "Também são referências: as normas ABNT NBR 10981, 11095, 11327 e 16324, sobre talhas de corrente; o Protocolo 2015 Guidelines American Heart Association; e a Portaria GM 2048, Política Nacional de Atenção às Urgências."
          },
          {
            "id": "m1-porque", "type": "content", "layout": "duo", "kicker": "📄 Texto", "title": "Por que existe a NR 11 e o checklist",
            "cards": [
              { "icon": "📜", "thumbs": [F + 'p3.1.png?v=fab1'], "lead": "A NR 11", "title": "Nasceu para a segurança", "body": "Implementar ações de segurança nos ambientes e nos equipamentos de içamento e transporte de materiais." },
              { "icon": "✅", "thumbs": [F + 'p3.2.png?v=fab1'], "lead": "O checklist", "title": "Ferramenta de apoio", "body": "Ótima ferramenta para atividades de longa duração." }
            ],
            "items": [
              { "icon": "⚠️", "title": "Por que os acidentes eram frequentes", "text": "Devido à crescente mecanização industrial e à grande necessidade de movimentações mais eficientes nos ambientes de trabalho." }
            ],
            "transcript": "A NR 11 nasceu para implementar ações de segurança nos ambientes e nos equipamentos de içamento e transporte de materiais. Os acidentes eram frequentes devido à crescente mecanização industrial e à grande necessidade de movimentações mais eficientes. O checklist é uma ótima ferramenta para atividades de longa duração."
          },
          intro(1, 'NR 11 em foco', 4, 3, '📘', '4 perguntas cronometradas sobre a origem da NR 11 e as referências.'),
          q('m1-q1', 1, 1, 'Segundo o treinamento, por que a NR 11 nasceu?',
            'Para implementar ações de segurança nos ambientes e nos equipamentos de içamento e transporte de materiais',
            ['Para criar novas máquinas de içamento', 'Para definir o salário dos operadores'], 2,
            'A NR 11 nasceu para implementar ações de segurança nos ambientes e nos equipamentos de içamento e transporte de materiais.', 'Origem da NR 11',
            'Ilustração neutra: depósito limpo e vazio, com paletes ao fundo'),
          q('m1-q2', 1, 2, 'O que tornava os acidentes frequentes, antes da NR 11?',
            'A crescente mecanização industrial e a grande necessidade de movimentações mais eficientes',
            ['A falta de luz nos depósitos', 'O uso excessivo de EPIs'], 0,
            'Os acidentes eram frequentes devido à crescente mecanização industrial e à grande necessidade de movimentações mais eficientes nos ambientes de trabalho.', 'Causa dos acidentes',
            'Ilustração neutra: pátio de carga e descarga com empilhadeiras e esteiras paradas'),
          q('m1-q3', 1, 3, 'Qual norma trata do Equipamento de Proteção Individual – EPI?',
            'NR 06', ['NR 17', 'NR 35'], 1,
            'A NR 06 trata do Equipamento de Proteção Individual – EPI. A NR 17 trata de Ergonomia e a NR 35, de Trabalho em Altura.', 'Norma de EPI',
            'Ilustração neutra: mesa de segurança do trabalho com pastas fechadas e um capacete'),
          q('m1-q4', 1, 4, 'Segundo o treinamento, qual ferramenta ajuda a não esquecer ou deixar passar uma obrigação em atividades de longa duração?',
            'O checklist', ['Um cronômetro', 'Um rádio comunicador'], 2,
            'O checklist é uma ótima ferramenta para realizar atividades de longa duração.', 'Ferramenta de apoio',
            'Ilustração neutra: bancada com uma prancheta, um capacete e uma caneta')
        ]
      },

      /* ================= MÓDULO 2 ================= */
      {
        "id": 2, "title": "A talha elétrica e os EPIs", "meta": "Vídeo + texto · desafio Par Perfeito",
        "titleUnlock": { "title": "TALHA CONHECIDA", "body": "Você sabe o que a talha elétrica precisa ter e quais EPIs usar.", "icon": "⛓️" },
        "screens": [
          cover(2, 'A talha elétrica e os EPIs', 'O que a talha elétrica precisa ter para operar com segurança e os EPIs do operador.'),
          video('m2-v-comando', 'Requisitos da talha elétrica: comando, cabo e aterramento', '0:40',
            'Detalhes da talha elétrica: botoeira, cabo de comando, aterramento e tambor com as voltas de cabo.',
            'Cinematográfico realista de equipamento, detalhe por detalhe; sem personagem.',
            'O botão de subida exige permanente pressão. O cabo da caixa de comando é sustentado por um cabo ou corrente paralela. A talha é aterrada e mantém duas voltas de cabo no tambor.',
            'c6aa6163-f73f-44a4-9556-dc6c586187aa'),
          {
            "id": "m2-comando", "type": "content", "steps": true, "stepSkin": "equip", "stepLayout": "lado", "stepRatio": 1, "stepUnit": "Regra", "stepNext": "Próxima regra", "stepFinish": "Concluir", "kicker": "📄 Texto", "title": "Comando, cabo e aterramento",
            "items": [
              { "image": F + 'p8.1.png?v=fab1', "imageAlt": "Botoeira com o polegar pressionando um botão", "icon": "🔘", "title": "Botão de subida", "text": "Deve exigir permanente pressão para levantar ou abaixar a carga." },
              { "image": F + 'p8.2.png?v=fab1', "imageAlt": "Cabo da botoeira sustentado por corrente paralela", "icon": "🔌", "title": "Cabo da caixa de comando", "text": "Deve ser sustentado por um cabo ou corrente paralela, que o protege de esforços e danificações." },
              { "image": F + 'p8.3.png?v=fab1', "imageAlt": "Corpo da talha com cabo de aterramento", "icon": "⚡", "title": "Aterramento", "text": "A talha deve ser aterrada, para evitar choque elétrico no operador em caso de falha do circuito." },
              { "image": F + 'p8.4.png?v=fab1', "imageAlt": "Tambor da talha com voltas de cabo de aço", "icon": "🧵", "title": "Duas voltas de cabo", "text": "Um mínimo de duas voltas de cabo deve permanecer no tambor quando o bloco do gancho estiver no piso mais baixo do edifício onde a talha opera." }
            ],
            "transcript": "Comando, cabo e aterramento. O botão de subida deve exigir permanente pressão para levantar ou abaixar a carga. O cabo elétrico da caixa de comando deve ser sustentado por um cabo ou corrente paralela. A talha deve ser aterrada, para evitar choque elétrico no operador em caso de falha do circuito. Um mínimo de duas voltas de cabo deve permanecer no tambor quando o bloco do gancho estiver no piso mais baixo do edifício onde a talha opera."
          },
          video('m2-v-fixacao', 'Requisitos da talha elétrica: capacidade, fixação e limites', '0:55',
            'Capacidade de carga, fixação por travas e manilhas, ganchos com trava, fim de curso, batente no trilho, tambor liso e boas condições de uso.',
            'Cinematográfico realista de equipamento, detalhe por detalhe; sem personagem, exceto a última cena.',
            'A capacidade de carga fica no corpo da talha e no trilho. A talha é presa por travas ou manilhas e tem limite de fim de curso e batente no trilho.',
            '444e0103-cbc4-4fdf-9f92-b98c2808fff4'),
          {
            "id": "m2-fixacao-1", "type": "content", "layout": "lista-foto", "kicker": "📄 Texto", "title": "Capacidade, fixação e limites",
            "help": "Leia cada requisito e clique em Próxima regra para ver a foto. Na última, clique em Concluir.",
            "groups": [{ "icon": "⚖️", "label": "Requisitos da talha", "items": [
              { "icon": "⚖️", "tone": "blue", "title": "Capacidade de carga", "text": "Deve estar claramente posicionada no corpo da talha; o trilho também deve ter assinalada sua capacidade de carga.", "image": F + 'p9.1.png', "imageAlt": "Talha com placa de capacidade no corpo e no trilho" },
              { "icon": "🔗", "tone": "orange", "title": "Presas aos suportes", "text": "As talhas devem estar seguramente presas aos seus suportes por travas ou manilhas.", "image": F + 'p9.2.png', "imageAlt": "Manilha de aço prendendo a talha ao suporte" },
              { "icon": "🪝", "tone": "teal", "title": "Ganchos com trava", "text": "Quando suspensas por ganchos, estes devem ter trava que não permita o escape da talha.", "image": F + 'p9.3.png', "imageAlt": "Gancho de suspensão com a trava fechada" },
              { "icon": "⛔", "tone": "purple", "title": "Fim de curso", "text": "As talhas elétricas devem ter limite de fim de curso que não permita ao cabo de aço sobre-enrolar no tambor e romper-se.", "image": F + 'p9.4.png', "imageAlt": "Tambor com o cabo de aço bem enrolado" },
              { "icon": "🛑", "tone": "pink", "title": "Batente no trilho", "text": "Os trilhos devem ter batente de fim de curso para evitar a queda da talha.", "image": F + 'p9.5.png', "imageAlt": "Ponta do trilho com batente de fim de curso" }
            ] }],
            "transcript": "Capacidade, fixação e limites. A capacidade de carga deve estar no corpo da talha, e o trilho também deve ter assinalada a sua capacidade. As talhas devem estar presas aos suportes por travas ou manilhas. Quando suspensas por ganchos, estes devem ter trava que não permita o escape da talha. As talhas elétricas devem ter limite de fim de curso, e os trilhos devem ter batente de fim de curso para evitar a queda da talha."
          },
          {
            "id": "m2-fixacao-2", "type": "content", "layout": "acordeao", "startAt": 6, "help": "Toque numa faixa colorida, ou em Próxima regra, para abrir cada cuidado. Na última, clique em Concluir.", "kicker": "📄 Texto", "title": "Tambor, condições de uso e cuidados",
            "groups": [{ "icon": "🔩", "label": "Cuidados com a talha", "items": [
              { "icon": "🔩", "tone": "blue", "title": "Tambor sem projeções", "text": "O tambor com entalhe simples para acomodação do cabo deve ser livre de projeções que possam danificar o cabo.", "image": F + 'p9.6.png', "imageAlt": "Tambor liso com o cabo assentado no entalhe" },
              { "icon": "✨", "tone": "teal", "title": "Boas condições de uso", "text": "Só utilizar talhas que apresentem cabos, correntes e componentes em adequadas condições de uso.", "image": F + 'p9.7.png', "imageAlt": "Talha limpa e em bom estado" },
              { "icon": "🖐️", "tone": "orange", "title": "Mãos e dedos", "text": "Manter mãos e dedos distantes de pontos de pinçamento.", "image": F + 'p9.8.png', "imageAlt": "Mãos enluvadas guiando a carga pela lateral" },
              { "icon": "🚫", "tone": "purple", "title": "Sob cargas suspensas", "text": "Não permanecer sob cargas suspensas.", "image": F + 'p9.9.png', "imageAlt": "Carga suspensa com o piso embaixo livre" }
            ] }],
            "transcript": "O tambor com entalhe simples deve ser livre de projeções que possam danificar o cabo. Só utilize talhas com cabos, correntes e componentes em adequadas condições de uso. Mantenha mãos e dedos distantes de pontos de pinçamento. Não permaneça sob cargas suspensas."
          },
          video('m2-v-epis', 'EPIs do operador', '0:30',
            'O operador com os EPIs completos e cada EPI em destaque: capacete, protetor tipo concha, óculos, luvas e sapatos de segurança.',
            'Cinematográfico realista; EPIs em fundo branco limpo e uma cena do operador completo.',
            'Antes de operar, use sempre os seus EPIs: capacete de segurança, protetor tipo concha, óculos de segurança, luvas de proteção e sapatos de segurança.',
            'a06f6f6b-dd3d-43f3-9d2c-792a6fc6a9dd'),
          {
            "id": "m2-epis", "type": "content", "layout": "zonas", "kicker": "📄 Texto", "title": "EPIs do operador",
            "groups": [{ "icon": "🦺", "label": "Use sempre os seus EPIs", "items": [
              { "icon": "⛑️", "tone": "orange", "title": "Capacete de segurança", "text": "", "image": F + 'p10.1.png', "imageAlt": "Capacete de segurança amarelo" },
              { "icon": "🎧", "tone": "blue", "title": "Protetor tipo concha", "text": "", "image": F + 'p10.2.png', "imageAlt": "Protetor auricular tipo concha" },
              { "icon": "🥽", "tone": "teal", "title": "Óculos de segurança", "text": "", "image": F + 'p10.3.png', "imageAlt": "Óculos de segurança transparente" },
              { "icon": "🧤", "tone": "purple", "title": "Luvas de proteção", "text": "", "image": F + 'p10.4.png', "imageAlt": "Par de luvas de proteção" },
              { "icon": "🥾", "tone": "pink", "title": "Sapatos de segurança", "text": "", "image": F + 'p10.5.png', "imageAlt": "Par de botinas de segurança pretas" }
            ] }],
            "transcript": "Equipamentos de proteção individual. Capacete de segurança, protetor tipo concha, óculos de segurança, luvas de proteção e sapatos de segurança. Use sempre os seus EPIs."
          },
          intro(2, 'Par perfeito', 1, 1, '⛓️', 'Ligue cada requisito da talha ao que a norma pede.'),
          {
            "id": "m2-match", "type": "match", "title": "Ligue o requisito ao que a talha deve ter",
            "body": "Toque em um requisito e depois no que o treinamento diz sobre ele.",
            "leftTitle": "Requisito", "rightTitle": "O que o treinamento diz",
            "pairs": [
              { "ex": "Botão de subida da talha", "body": "Requer permanente pressão para levantar ou abaixar a carga" },
              { "ex": "Cabo elétrico da caixa de comando", "body": "Sustentado por um cabo ou corrente paralela" },
              { "ex": "Talha elétrica", "body": "Aterrada, para evitar choque elétrico no operador" },
              { "ex": "Limite de fim de curso", "body": "Não permite ao cabo de aço sobre-enrolar no tambor e romper-se" },
              { "ex": "Batente de fim de curso no trilho", "body": "Evita a queda da talha" }
            ],
            "review": "Requisitos da talha elétrica",
            "transcript": "Ligue cada requisito da talha ao que o treinamento diz sobre ele."
          }
        ]
      },

      /* ================= MÓDULO 3 ================= */
      {
        "id": 3, "title": "O que fazer e o que não fazer", "meta": "Vídeo + texto · desafio Faça ou Evite",
        "titleUnlock": { "title": "OPERADOR ATENTO", "body": "Você sabe o que fazer e o que evitar ao operar a talha.", "icon": "🛡️" },
        "screens": [
          cover(3, 'O que fazer e o que não fazer', 'Ato inseguro e condição insegura, os comportamentos certos, o uso incorreto, a sobrecarga, o foco no trabalho e a carona na carga.'),
          video('m3-v-ato', 'Ato inseguro, condição insegura e o que fazer', '0:55',
            'Os conceitos de ato inseguro e condição insegura, a sequência até a lesão e os quatro comportamentos do "faça".',
            'Cartaz para os conceitos; Pixar 3D para os comportamentos; foto realista para a capacidade.',
            'Ato inseguro, condição insegura e os dois juntos. Depois, o que fazer: inspecionar a talha antes de usar, usar a talha certa para o peso certo, não deixar ninguém sob a carga e subir e descer a carga bem devagar.',
            'e680184a-24e1-4dcd-9cc1-c24f94156871'),
          {
            "id": "m3-ato", "type": "image", "layout": "destaque", "title": "",
            "image": F + 'p15.png', "imageAlt": "Ato inseguro, condição insegura e os dois juntos: um trabalhador em cima de uma cadeira, um piso molhado com fio solto e uma trabalhadora distraída perto da poça",
            "notes": [{ "icon": "⚠️", "tone": "info", "text": "São peças da sequência que leva ao acidente." }],
            "transcript": "Ato inseguro. Condição insegura. E os dois juntos: ato inseguro mais condição insegura."
          },
          {
            "id": "m3-sequencia", "type": "content", "skin": "agents", "banner": F + 'p16.1.png', "bannerAlt": "Sequência de peças: personalidade, falhas humanas, atos e condições inseguras, acidente e lesão",
            "kicker": "📄 Texto", "title": "A sequência do acidente",
            "cards": [
              { "icon": "🧠", "lead": "Peça 1", "title": "Personalidade", "body": "Início da sequência" },
              { "icon": "🙇", "lead": "Peça 2", "title": "Falhas humanas", "body": "Vem depois da personalidade" },
              { "icon": "⚠️", "lead": "Peça 3", "title": "Atos e condições inseguras", "body": "Vêm depois das falhas humanas" },
              { "icon": "💥", "lead": "Peça 4", "title": "Acidente", "body": "Vem depois dos atos e condições inseguras" },
              { "icon": "🩹", "lead": "Peça 5", "title": "Lesão", "body": "Fim da sequência" }
            ],
            "transcript": "A sequência do acidente: personalidade, falhas humanas, atos inseguros e condições inseguras, acidente e lesão."
          },
          {
            "id": "m3-faca", "type": "content", "layout": "quickcards", "qcStyle": "checklist", "kicker": "📄 Texto", "title": "O que fazer",
            "items": [
              { "icon": "🔍", "title": "Inspecione antes de usar", "text": "Sempre inspecione as talhas antes de usar.", "image": F + 'p17.1.png?v=fab1', "imageAlt": "Operador com uma lupa examinando a corrente da talha" },
              { "icon": "⚖️", "title": "Talha certa para o peso certo", "text": "Verificação de capacidade de içamento suportada.", "image": F + 'p17.2.png?v=fab1', "imageAlt": "Operador olhando a placa de capacidade da talha" },
              { "icon": "🚷", "title": "Ninguém sob a carga", "text": "Assegure-se de que não haja ninguém sob a carga.", "image": F + 'p17.3.png?v=fab1', "imageAlt": "Operador conferindo que o espaço sob a carga está livre" },
              { "icon": "🐢", "title": "Suba e desça devagar", "text": "Suba e desça a carga bem devagar.", "image": F + 'p17.4.png?v=fab1', "imageAlt": "Operador elevando devagar uma carga" }
            ],
            "transcript": "O que fazer. Sempre inspecione as talhas antes de usar. Use a talha certa para o peso certo, verificando a capacidade de içamento suportada. Assegure-se de que não haja ninguém sob a carga. Suba e desça a carga bem devagar."
          },
          video('m3-v-incorreto', 'Uso incorreto e sobrecarga', '1:00',
            'Trancos, balanços e pancadas, uso incorreto de lingas, gancho, ângulo de subida e correntes, e as formas de sobrecarregar a talha.',
            'Pixar 3D mostrando sempre o instante antes; uma cena de equipamento em foto realista.',
            'Não sobrecarregue a talha com trancos, balanços e pancadas. Use as lingas corretamente, atenção ao ângulo de subida e às correntes emaranhadas. Se precisar de dois, está com sobrecarga.',
            'd4f11763-e87b-415f-bbdc-f5cf82c05350'),
          {
            "id": "m3-incorreto", "type": "content", "layout": "zonas", "kicker": "📄 Texto", "title": "Não use incorretamente",
            "groups": [{ "icon": "🚫", "label": "Quatro cuidados com a talha", "items": [
              { "icon": "🪢", "tone": "blue", "title": "Use slings (lingas) corretamente", "text": "Use slings (lingas) corretamente.", "image": F + 'p18.1.png?v=fab1', "imageAlt": "Operadora ajustando as lingas em um palete de sacos" },
              { "icon": "🪝", "tone": "orange", "title": "Não use o gancho para levantar a carga", "text": "Não use o gancho para levantar a carga.", "image": F + 'p18.2.png?v=fab1', "imageAlt": "Operador hesitante diante da carga e do gancho" },
              { "icon": "📐", "tone": "teal", "title": "Ângulo de subida", "text": "Atenção ao ângulo de subida.", "image": F + 'p18.3.png?v=fab1', "imageAlt": "Palete pendurado em uma corrente inclinada" },
              { "icon": "🌀", "tone": "purple", "title": "Correntes emaranhadas", "text": "Não use a talha com correntes emaranhadas.", "image": F + 'p18.4.png?v=fab1', "imageAlt": "Corrente da talha emaranhada e torcida" }
            ] }],
            "transcript": "Não use incorretamente. Use slings, as lingas, corretamente. Não use o gancho para levantar a carga. Atenção ao ângulo de subida. Não use a talha com as correntes emaranhadas."
          },
          {
            "id": "m3-sobrecarga", "type": "content", "layout": "lista-foto", "kicker": "📄 Texto", "title": "Não sobrecarregue a talha",
            "help": "Leia cada situação e clique em Próxima regra para ver a foto. Na última, clique em Concluir.",
            "groups": [{ "icon": "⚠️", "label": "Formas de sobrecarregar a talha", "items": [
              { "icon": "💢", "tone": "orange", "title": "Trancos", "text": "Não sobrecarregue a talha com trancos.", "image": F + 'p19.1.png?v=fab1', "imageAlt": "Operador com a carga dando um puxão" },
              { "icon": "↔️", "tone": "blue", "title": "Balanços", "text": "Não sobrecarregue a talha com balanços.", "image": F + 'p19.2.png?v=fab1', "imageAlt": "Carga balançando de lado" },
              { "icon": "🔨", "tone": "teal", "title": "Pancadas", "text": "Não sobrecarregue a talha com pancadas.", "image": F + 'p19.3.png?v=fab1', "imageAlt": "Palete encostando em uma coluna do galpão" },
              { "icon": "🔧", "tone": "purple", "title": "Forçar os componentes", "text": "Não force os componentes da talha.", "image": F + 'p19.4.png?v=fab1', "imageAlt": "Operador forçando o corpo da talha" },
              { "icon": "😮‍💨", "tone": "pink", "title": "Esforço excessivo", "text": "Evite esforço excessivo do operador.", "image": F + 'p19.5.png?v=fab1', "imageAlt": "Operador puxando a corrente com esforço visível" },
              { "icon": "👥", "tone": "gold", "title": "Se precisar de dois", "text": "Se precisar de dois, está com sobrecarga.", "image": F + 'p19.6.png?v=fab1', "imageAlt": "Dois operadores puxando a mesma corrente" }
            ] }],
            "transcript": "Não sobrecarregue a talha. Evite trancos, balanços e pancadas. Não force os componentes da talha. Evite esforço excessivo do operador. Se precisar de dois, está com sobrecarga."
          },
          video('m3-v-foco', 'Foco no trabalho e carona na carga', '0:40',
            'Distração perto da talha, o aviso "Proibido perder o foco", o devaneio e a carona na carga.',
            'Pixar 3D mostrando sempre o instante antes; cartaz para o aviso.',
            'Não brinque nem se distraia quando trabalhar com talhas e pontes rolantes. Proibido perder o foco. Evite sonhar acordado e nunca pegue carona com a carga.',
            '8fd048c4-e72d-4627-974e-0a39d530ac39'),
          {
            "id": "m3-foco", "type": "content", "steps": true, "stepSkin": "equip", "stepLayout": "lado", "stepRatio": 1.5, "stepUnit": "Aviso", "stepNext": "Próximo aviso", "stepFinish": "Concluir",
            "kicker": "📄 Texto", "title": "Foco no trabalho",
            "items": [
              { "image": F + 'p20.1.png?v=fab1', "icon": "🎯", "title": "Não brinque nem se distraia", "text": "Quando trabalhar com talhas e pontes rolantes. Proibido perder o foco." },
              { "image": F + 'p20.2.png?v=fab1', "icon": "🚫", "title": "Não pegue carona com a carga", "text": "Nunca suba na carga." },
              { "image": F + 'p20.3.png?v=fab1', "icon": "💭", "title": "Evite sonhar acordado", "text": "Durante o trabalho, mantenha a atenção na operação." }
            ],
            "transcript": "Foco no trabalho. Não brinque nem se distraia quando trabalhar com talhas e pontes rolantes. Não pegue carona com a carga. Evite sonhar acordado durante o trabalho."
          },
          intro(3, 'Faça ou evite', 1, 1, '🛡️', 'Classifique cada atitude: é o que se deve fazer ou o que não se deve fazer com a talha.'),
          {
            "id": "m3-sort", "type": "sort", "title": "Faça ou não faça?", "body": "Um cartão por vez: escolha o grupo certo.",
            "leftLabel": "Faça", "rightLabel": "Não faça",
            "items": [
              { "text": "Inspecionar a talha antes de usar", "side": "left", "why": "sempre inspecione as talhas antes de usar" },
              { "text": "Usar a talha certa para o peso certo", "side": "left", "why": "verifique a capacidade de içamento suportada" },
              { "text": "Pegar carona com a carga", "side": "right", "why": "não pegue carona com a carga" },
              { "text": "Assegurar-se de que não haja ninguém sob a carga", "side": "left", "why": "ninguém deve ficar sob a carga" },
              { "text": "Distrair-se ou brincar ao trabalhar com talhas", "side": "right", "why": "não brinque nem se distraia" },
              { "text": "Subir e descer a carga bem devagar", "side": "left", "why": "suba e desça a carga bem devagar" },
              { "text": "Forçar os componentes da talha", "side": "right", "why": "forçar os componentes é sobrecarregar" },
              { "text": "Operar a talha se precisar de duas pessoas para movimentar a carga", "side": "right", "why": "se precisar de dois, está com sobrecarga" }
            ],
            "review": "O que fazer e o que não fazer",
            "transcript": "Classifique cada atitude entre o que se deve fazer e o que não se deve fazer com a talha."
          }
        ]
      },

      /* ================= MÓDULO 4 ================= */
      {
        "id": 4, "title": "Inspeção de corrente e gancho", "meta": "Vídeo + texto · desafio Complete a Inspeção",
        "titleUnlock": { "title": "INSPETOR DE TALHA", "body": "Você sabe inspecionar a corrente e o gancho da talha.", "icon": "🔍" },
        "screens": [
          cover(4, 'Inspeção de corrente e gancho', 'Como inspecionar a corrente (sinais de uso, deformação e sinais de perigo) e o gancho (uso, desgaste central, alongamento e o limite de 15 %).'),
          video('m4-v-corrente', 'Inspeção da corrente', '0:50',
            'Inspeção em correntes e ganchos: sinais de uso e deformação, corrente torcida, empenada e os sinais de perigo.',
            'Cinematográfico realista em detalhe; Pixar 3D na abertura; cartaz para os sinais de perigo.',
            'Procure sinais de uso e deformação: a corrente pode estar torcida ou empenada. Fique atento aos sinais anormais e perigosos: fissura, entalhamento e elo alongado.',
            'f42b5041-edf2-466c-9374-9e7d92c52baa'),
          {
            "id": "m4-corrente", "type": "content", "layout": "zonas", "kicker": "📄 Texto", "title": "Sinais na corrente",
            "help": "Clique aqui em cima: primeiro em “Uso e deformação” e depois em “Anormais e perigosos”, para ver todos os sinais.",
            "groups": [
              { "icon": "🔧", "label": "Uso e deformação", "items": [
                { "icon": "🌀", "tone": "blue", "title": "Torcido", "text": "Sinal de uso e deformação.", "image": F + 'p24.1.png', "imageAlt": "Elo de corrente torcido" },
                { "icon": "〰️", "tone": "teal", "title": "Empenado", "text": "Sinal de uso e deformação.", "image": F + 'p24.2.png', "imageAlt": "Elo de corrente empenado" }
              ] },
              { "icon": "⚠️", "label": "Anormais e perigosos", "items": [
                { "icon": "⚡", "tone": "orange", "tag": "Perigoso", "title": "Fissura", "text": "Sinal anormal e perigoso na corrente.", "image": F + 'p24.3.png', "imageAlt": "Elo de corrente com rachadura fina" },
                { "icon": "✂️", "tone": "purple", "tag": "Perigoso", "title": "Entalhamento", "text": "Sinal anormal e perigoso na corrente.", "image": F + 'p24.4.png', "imageAlt": "Elo de corrente com um corte marcado" },
                { "icon": "↕️", "tone": "pink", "tag": "Perigoso", "title": "Elo alongado", "text": "Sinal anormal e perigoso na corrente.", "image": F + 'p24.5.png', "imageAlt": "Elo de corrente esticado" }
              ] }
            ],
            "transcript": "Sinais na corrente. Sinais de uso e deformação: torcido e empenado. Sinais anormais e perigosos: fissura, entalhamento e elo alongado."
          },
          video('m4-v-gancho', 'Uso e inspeção do gancho', '0:40',
            'O gancho com trava de segurança, o uso incorreto e o correto, o desgaste central, o alongamento e o limite de 15 %.',
            'Cinematográfico realista; cartaz para o uso do gancho e para o limite de 15 %.',
            'Confira o uso do gancho: incorreto e correto. Na inspeção, observe o desgaste central e o alongamento. Até 15 % de alargamento do gancho é aceitável.',
            '6eeafcc4-8627-422c-9e36-a1354cb30f93'),
          {
            "id": "m4-gancho", "type": "content", "layout": "quickcards", "qcStyle": "checklist", "kicker": "📄 Texto", "title": "Uso e inspeção do gancho",
            "items": [
              { "icon": "🪝", "title": "Uso do gancho", "text": "Observe a diferença entre o uso incorreto e o uso correto do gancho.", "image": F + 'p25.1.png', "imageAlt": "Gancho de aço de talha com trava de segurança" },
              { "icon": "🔎", "title": "Desgaste central", "text": "Na inspeção do gancho, observe o desgaste central.", "image": F + 'p25.2.png', "imageAlt": "Gancho com marcas de desgaste na região central" },
              { "icon": "↔️", "title": "Alongamento", "text": "Na inspeção do gancho, observe também o alongamento.", "image": F + 'p25.3.png', "imageAlt": "Gancho com o bico esticado" },
              { "icon": "📏", "title": "Até 15 %", "text": "Até 15 % de alargamento do gancho é aceitável.", "image": F + 'p25.4.png', "imageAlt": "Cartaz: até 15 % de alargamento do gancho é aceitável" }
            ],
            "transcript": "Uso e inspeção do gancho. Observe o uso incorreto e o correto. Na inspeção, observe o desgaste central e o alongamento. Até quinze por cento de alargamento do gancho é aceitável."
          },
          intro(4, 'Complete a inspeção', 4, 3, '🔍', 'Complete cada frase com a palavra certa sobre a inspeção da corrente e do gancho.'),
          fill('m4-fill-1', 'Até {{15 %}} de alargamento do gancho é aceitável.', ['5 %', '30 %'], 'Limite de alargamento do gancho'),
          fill('m4-fill-2', 'Fissura, entalhamento e elo alongado são sinais {{de perigo}} na corrente.', ['de uso normal', 'de pintura nova'], 'Sinais de perigo na corrente'),
          fill('m4-fill-3', 'Na inspeção do gancho, observe o desgaste {{central}} e o {{alongamento}}.', ['lateral', 'brilho'], 'Inspeção do gancho', 'Toque nas palavras de baixo para preencher as lacunas, na ordem.'),
          fill('m4-fill-4', 'Na inspeção da corrente, procure sinais de uso e de {{deformação}}, como corrente torcida ou empenada.', ['limpeza', 'lubrificação'], 'Sinais de uso e deformação')
        ]
      },

      /* ================= MÓDULO 5 ================= */
      {
        "id": 5, "title": "Big Bag e passos da operação", "meta": "Vídeo + texto · desafio Duelo do Içamento",
        "titleUnlock": { "title": "OPERADOR SEGURO", "body": "Você sabe içar um Big Bag e os passos e cuidados da operação.", "icon": "🏆" },
        "screens": [
          cover(5, 'Big Bag e passos da operação', 'O içamento de Big Bag com balancim e alças íntegras e os passos e cuidados da operação.'),
          video('m5-v-bigbag', 'Içamento de Big Bag', '0:45',
            'O Big Bag ancorado no balancim, o ajuste e a integridade das alças e o cuidado no manuseio.',
            'Cinematográfico realista; Pixar 3D para a inspeção das alças.',
            'A operação com talha é destinada ao içamento de Big Bag. Os Big Bags são ancorados nos balancins. Observe o perfeito ajuste das alças.',
            'b39220ba-f96d-4c55-b333-eda841be4800'),
          {
            "id": "m5-bigbag", "type": "content", "layout": "duo", "kicker": "📄 Texto", "title": "Big Bag e balancim",
            "cards": [
              { "icon": "📦", "thumbs": [F + 'p29.1.png?v=fab1'], "lead": "Ancoragem", "title": "Ancorado no balancim", "body": "Os Big Bags são ancorados nos balancins." },
              { "icon": "🔗", "thumbs": [F + 'p29.2.png?v=fab1'], "lead": "Alças", "title": "Perfeito ajuste das alças", "body": "Observar o perfeito ajuste das alças." }
            ],
            "items": [
              { "icon": "⚠️", "title": "Integridade das alças", "text": "A constatação de integridade das alças é de suma importância." }
            ],
            "transcript": "Os Big Bags são ancorados nos balancins. Observe o perfeito ajuste das alças. A constatação de integridade das alças é de suma importância."
          },
          video('m5-v-passos', 'Passos da operação e o percurso da manobra', '1:00',
            'Ambientar-se, controles direcionais, características da talha, o percurso da manobra e o fechamento "Pense antes de agir".',
            'Pixar 3D para o passo a passo; foto realista para os controles e a talha; cartaz para o fechamento.',
            'Ambiente-se, verifique os controles direcionais e observe as características da talha. Reflita sobre o percurso, sem obstáculos de enrosco, observe as pessoas por perto e mantenha o foco. Pense antes de agir.',
            '7a198ff7-720c-48be-92a1-20d873fa6c1e'),
          {
            "id": "m5-passos", "type": "content", "steps": true, "stepSkin": "equip", "stepLayout": "lado", "stepRatio": 1.5, "stepUnit": "Passo", "stepNext": "Próximo passo", "stepFinish": "Concluir",
            "kicker": "📄 Texto", "title": "Passos a serem seguidos",
            "items": [
              { "image": F + 'p30.1.png?v=fab1', "icon": "👀", "title": "Ambientar-se", "text": "Ambiente-se no local de trabalho." },
              { "image": F + 'p30.2.png?v=fab1', "icon": "🎛️", "title": "Controles direcionais", "text": "Verificar os controles direcionais da talha." },
              { "image": F + 'p30.3.png?v=fab1', "icon": "⛓️", "title": "Características", "text": "Observar as características da talha." }
            ],
            "transcript": "Passos a serem seguidos: ambiente-se no local de trabalho, verifique os controles direcionais da talha e observe as características da talha."
          },
          {
            "id": "m5-antes", "type": "content", "layout": "quickcards", "qcStyle": "checklist", "kicker": "📄 Texto", "title": "Antes de manobrar",
            "items": [
              { "icon": "🛣️", "title": "Reflita sobre o percurso", "text": "Reflita sobre o percurso necessário para a manobra.", "image": F + 'p31.1.png?v=fab1', "imageAlt": "Operador olhando o trajeto livre à frente" },
              { "icon": "🚧", "title": "Sem obstáculos de enrosco", "text": "Certifique-se que não haja obstáculos “enrosco”.", "image": F + 'p31.2.png?v=fab1', "imageAlt": "Operador conferindo o caminho da carga" },
              { "icon": "👥", "title": "Proximidade de pessoas", "text": "Observe a proximidade de pessoas.", "image": F + 'p31.3.png?v=fab1', "imageAlt": "Operador atento a uma pessoa ao longe" },
              { "icon": "🎯", "title": "Foco na operação", "text": "Foco na operação, sem distrações.", "image": F + 'p31.4.png?v=fab1', "imageAlt": "Operador concentrado na carga" }
            ],
            "transcript": "Segurança com equipamentos de içar. Reflita sobre o percurso necessário para a manobra. Certifique-se de que não haja obstáculos. Observe a proximidade de pessoas. Foco na operação, sem distrações. Pense antes de agir."
          },
          intro(5, 'Duelo do içamento', 6, 5, '🏆', 'Responda sim ou não a cada afirmação sobre o Big Bag e a operação.'),
          duelo('m5-d1', 'Os Big Bags são ancorados nos balancins.', true, 'Os Big Bags são ancorados nos balancins.', 'Big Bag no balancim', 1),
          duelo('m5-d2', 'A integridade das alças do Big Bag é de suma importância.', true, 'A constatação de integridade das alças é de suma importância.', 'Alças do Big Bag', 2),
          duelo('m5-d3', 'Antes de manobrar, é preciso refletir sobre o percurso necessário.', true, 'Reflita sobre o percurso necessário para a manobra.', 'Percurso da manobra', 3),
          duelo('m5-d4', 'Pode manobrar sem se preocupar com a proximidade de pessoas.', false, 'Observe a proximidade de pessoas.', 'Pessoas por perto', 4),
          duelo('m5-d5', 'Durante a operação, distrações são aceitáveis.', false, 'Foco na operação, sem distrações.', 'Foco na operação', 5),
          duelo('m5-d6', 'Não é necessário verificar os controles direcionais da talha.', false, 'Verificar os controles direcionais da talha é um dos passos a serem seguidos.', 'Controles direcionais', 6),
          {
            "id": "m5-finale", "type": "finale", "kicker": "🏆 Conclusão", "eyebrow": "Certificado de conclusão", "title": "Parabéns",
            "image": F + 'capa-parabens.png', "imageAlt": "Capa de parabéns — conclusão do treinamento",
            "body": "Você concluiu o treinamento NR 11 – Operador de talha elétrica.",
            "quote": "Pense antes de agir.",
            "chips": ["NR 11", "Operador de talha elétrica", "TecnoCursos"],
            "transcript": "Parabéns. Você finalizou o NR 11, Operador de talha elétrica."
          }
        ]
      }
    ]
  };
})();
