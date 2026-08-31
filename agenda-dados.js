/* A AGENDA · um objeto por dia, e nada fora dele.
 *
 * Esta e a fonte de verdade do que sai em cada dia. A pagina setembro-kit.html
 * so desenha isto. Se um dia precisa mudar, muda aqui.
 *
 * Datas, todas conferidas em 28/08/2026 contra a fonte primaria:
 *   ENEM   · 8 e 15 de novembro, 13h30 · edital do INEP
 *   SAT    · 3/10 (inscricao fecha 18/9) · 7/11 (fecha 23/10) · 5/12 (fecha 20/11)
 *            satsuite.collegeboard.org/sat/dates-deadlines
 *   GTA VI · quinta, 19 de novembro · Rockstar Games
 *
 * FICOU DE FORA de proposito: Rock in Rio (4-13 set). Um perfil de organizacao
 * escolar falando de festival de musica e esticar para parecer atual, e nao
 * muda nada no que o aluno faz. So entra fato externo que vira ACAO: prazo de
 * inscricao, data de prova, e a data do GTA VI, que e a unica que responde
 * "ate quando isso dura".
 *
 * A CONTAGEM E CALCULADA, NAO DIGITADA. `dias()` conta a partir da data do dia,
 * entao nao existe numero errado por descuido: se a data do post muda, os dois
 * numeros mudam junto. Foi assim que a versao anterior deixou passar tres
 * contagens erradas nos roteiros de Reel.
 *
 * A escola e a ancora e o SAT e camada. Por isso todo dia carrega os dois
 * numeros, mas o do ENEM vem primeiro e maior.
 */
window.AGENDA = (() => {
  const ENEM1 = new Date(2026, 10, 8);   // 8 de novembro
  const ENEM2 = new Date(2026, 10, 15);
  const SAT   = new Date(2026, 10, 7);   // 7 de novembro, sabado
  const dias = (de, ate) => Math.round((ate - de) / 86400000);

  const DIAS = [
    { d: '2026-08-28',
      post: { dir: 'momentos', n: 1, tipo: 'post único · foto e uma frase',
        titulo: '"Segunda eu começo."',
        legenda: `"Segunda eu começo."

Você fala isso na sexta e acredita. O problema é que na segunda a semana já chegou montada por outras pessoas: uma prova que ninguém avisou, uma lista que fecha na terça, um treino que mudou de horário no grupo.

Aí não é mais começar. É correr atrás.

Faltam 72 dias para o primeiro dia do ENEM. E o próximo SAT é dia 12 de setembro: faltam 15.`,
        cta: 'comenta <b>SEGUNDA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vestibular #vidadeestudante',
        nota: 'Corredor de escola no fim da tarde, sem ninguém em quadro. Pexels 11757079, Strange Happenings.' },
      stories: [
        { dir: 'hoje-stories', n: 1, o: 'Enquete de sexta',
          faz: 'Sticker de enquete por cima dos dois blocos. As respostas viram a legenda de segunda. É o story que reabre a conversa depois do silêncio.' },
        { dir: 'hoje-stories', n: 2, o: 'Hippo · 72 e 71 dias',
          faz: 'Nada por cima. A partir de hoje toda sexta é o mesmo template e só os números mudam.' },
        { dir: 'hoje-stories', n: 3, o: 'Repost isca',
          faz: 'Depois que o post estiver no ar. Link com utm_medium=story.' },
      ],
      tarefas: [
        'Ajustar o perfil antes de postar: nome, bio e link com utm_source. Está em social/hoje.md e vale mais que o post.',
        'Postar a enquete primeiro, depois o post, depois o repost.',
      ] },

    { d: '2026-08-29', hoje: true,
      post: { dir: 'tipos', cards: 6, tipo: 'carrossel · 6 cards · o mais interativo do mês',
        titulo: 'Que tipo de estudante você é?',
        labels: ['capa · a pergunta','tipo A · o arquiteto','tipo B · o da última hora','tipo C · o colecionador','tipo D · o fantasma','comenta a sua letra'],

        legenda: `Que tipo de estudante você é?

Tem o que monta o cronograma mais bonito do mundo e cumpre até terça. Tem o que estuda na véspera e passa, toda vez. Tem o que salvou oito videoaulas e abriu duas. E tem o que não conta pra ninguém, aparece na prova e vai bem.

Nenhum dos quatro é o errado. Os quatro estão se esforçando, só que o esforço de cada um vai parar num lugar diferente.

O PeakScore não tenta te transformar em outro tipo. Ele junta aulas, tarefas, provas e SAT num cronograma só, que se refaz sozinho quando alguma coisa muda de lugar. Grátis para começar.

Comenta a sua letra. E marca o amigo que é o tipo oposto do seu, você já sabe quem é.

Faltam ${dias(new Date(2026,7,29), ENEM1)} dias para o primeiro dia do ENEM. E o próximo SAT é dia 12 de setembro: faltam ${dias(new Date(2026,7,29), new Date(2026,8,12))}.`,
        cta: 'comenta <b>A</b>, <b>B</b>, <b>C</b> ou <b>D</b> e marca o oposto',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos #vestibular',
        nota: 'O formato que mais gera comentário. Nenhum dos quatro tipos é o burro ou o preguiçoso, e cada um termina com o que ele ganha de verdade: uma tipologia que humilha um tipo perde justamente o leitor que se reconheceu nele. Responda TODOS os comentários nas primeiras duas horas.' },
      stories: [
        { dir: 'hoje-stories', n: 1, o: 'Enquete · cronograma ou véspera',
          faz: 'Sticker de enquete por cima dos dois blocos. É o tipo A contra o tipo B: quem vota já abre o post para achar o seu.' },
        { dir: 'hoje-stories', n: 2, o: 'Hippo · 71 ENEM · 14 SAT',
          faz: 'Nada por cima. A contagem vira ritual: mesmo template, só o número muda.' },
        { dir: 'hoje-stories', n: 3, o: 'Isca do carrossel',
          faz: 'Depois que o post estiver no ar. Link com utm_medium=story.' },
      ],
      tarefas: [
        'Perfil antes de postar: nome, bio e link com utm_source (social/hoje.md).',
        'Ordem: enquete, depois o post, depois a isca.',
        'Trilha: buscar "Tempo Perdido" (Legião Urbana) na biblioteca de áudio. Se não aparecer, é porque não está liberada para conta comercial: usa o áudio em alta do nicho de estudos e NUNCA sobe por fora.',
      ] },

    { d: '2026-08-30',
      post: { dir: 'esporte', n: 1, tipo: 'post único · cor cheia',
        titulo: 'A véspera salva uma prova. Não salva um semestre',
        legenda: `A véspera salva uma prova. Ela não salva um semestre.

Nenhum time ganha o campeonato numa rodada. Ganha somando ponto em outubro, em novembro, e nas quartas-feiras chatas do meio, contra time que ninguém lembra depois.

É a mesma conta com estudo, e é por isso que a semana comum importa mais que o domingo heroico.

Faltam 70 dias para o ENEM e 69 para o SAT de 7 de novembro.`,
        cta: 'marca quem só estuda na véspera',
        tags: '#rotinadeestudos #enem2026 #vestibular #estudos',
        nota: 'SEM TIME. Metade do público torce para o outro, e um perfil de organização escolar não tem nada a ganhar escolhendo lado. Nenhum clube, posição ou rodada é citado. Bônus do dia: Fla x Botafogo E Corinthians x Santos às 16h, o post fala disso sem citar nenhum.' },
      stories: [
        { dir: 'domingo-servico', n: 1, o: 'Unicamp fecha AMANHÃ', faz: 'Primeiro story da manhã. Sem sticker por cima.' },
        { dir: 'domingo-servico', n: 2, o: 'SAT 12/9 · late fecha terça', faz: 'Logo depois do primeiro.' },
        { dir: 'domingo-servico', n: 3, o: 'US Open · 0 brasileiros', faz: 'Tarde. Quiz sticker opcional: "desde que ano o Brasil não fica de fora?" (2018).' },
        { dir: 'domingo-servico', n: 4, o: 'GTA VI · 26min', faz: 'Noite. Countdown sticker opcional para 19/11.' } ] },

    // ── SÉRIE POR TRÁS DO TREINO · estreia ──────────────────────────
    { d: '2026-08-31', contexto: 'Alcaraz estreia no US Open depois de 4 meses parado',
      post: { dir: 'por-tras', n: 1, tipo: 'post único · série Por trás do treino',
        titulo: 'Você não volta no ritmo de antes. Ninguém volta',
        legenda: `Você parou de estudar por duas semanas. Agora abre o caderno na segunda decidido a voltar no ritmo de antes, com três matérias e quatro horas. Na terça você já não abriu.

Não é falta de força de vontade. É que voltar direto no nível de antes não funciona para ninguém, nem para quem faz isso profissionalmente.

Alcaraz ficou quatro meses parado com uma lesão no punho. Hoje ele estreia no US Open defendendo o título. E a volta dele não começou no talento: ele treinou primeiro com o número 123 do mundo, de propósito, para subir a exigência aos poucos. Depois jogou nas duplas, onde a pressão é menor. Só então entrou na chave principal.

Se o número 2 do mundo volta pelo degrau de baixo, você também pode.

No PeakScore o plano recomeça no seu nível de hoje: blocos curtos, revisão do que você já sabia, e só depois matéria nova. O degrau de baixo primeiro.

Faltam 69 dias para o ENEM e 68 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>VOLTA</b> que eu te mando o link no direct',
        tags: '#usopen #rotinadeestudos #enem2026 #vestibular',
        nota: 'Estreia da série. Alcaraz por NOME (fato público esportivo); a foto é de banco, sem rosto, sem logo, sem frame de transmissão. Fontes: CNN Brasil, Puntodebreak, Metrópoles, Brasil Tênis, checadas 29/8. A chave principal do US Open começa 30/8 e ele estreia 31/8.' } },

    { d: '2026-09-01',
      post: { dir: 'setembro-01-carrossel', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Sua vida escolar mora em cinco lugares',
        labels: ['capa','os cinco','68 dias','se refaz sozinho','cinco x um','dois irmãos','fecho'],
        legenda: `Sua vida escolar mora em cinco lugares diferentes, e nenhum deles conversa com os outros.

O quadro da escola, o grupo da turma, o print no rolo da câmera, a agenda de papel e a sua memória. A conta de juntar tudo sobra pra você, sempre no domingo à noite.

Faltam 68 dias para o primeiro dia do ENEM e 67 para o SAT de 7 de novembro. A gente juntou tudo num lugar que se refaz sozinho quando a semana muda, e sincroniza com o Google Classroom. Grátis para começar, feito por dois irmãos que fizeram essas provas.`,
        cta: 'comenta <b>UM LUGAR</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vestibular #organizacao #vidadeestudante',
        nota: 'Card 6 com art/mesa-23h.jpg. Pexels 16026769, Juan José Trujillo Reyes.' },
      stories: [{ dir: 'setembro-stories', n: 4, o: 'Repost isca do carrossel',
        faz: 'Recorte, nunca print do post inteiro. utm_medium=story.' }] },

    { d: '2026-09-02',
      post: { reel: true, dir: 'setembro-reels-capas', n: 1, gancho: 1, clip: 'hoje',
        tipo: 'Reel POV · 11s',
        titulo: 'São 23h de domingo',
        legenda: `São 23h de domingo e você acabou de lembrar da prova de segunda.

Não é falta de organização. É que a informação estava em cinco lugares diferentes e nenhum deles te avisou.

Faltam 67 dias para o ENEM e 66 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>DOMINGO</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vidadeestudante #vestibular',
        nota: 'Footage do app já capturado em português: reels/out/hoje.mp4. Falta montar com a cartela de gancho na frente. Sem narração.' },
      tarefas: ['Bastidor de quarta: vídeo de celular, sem edição, som ambiente.'],
      stories: [
        { dir: 'campanha-stories', n: 2, o: 'Teaser 02 · o print borrado', faz: 'Sem explicação nenhuma. Quem perguntar, responder só "dia 8".' } ] },
    { d: '2026-09-03', contexto: 'Estreia do formato PeakScore Insights',
      post: { dir: 'insights-01', cards: 6, tipo: 'carrossel Insights · 6 cards',
        titulo: 'Como a sua semana se remonta sozinha',
        labels: ['capa','a âncora','o peso 4','as 4 fases','depois da prova','fecho'],
        legenda: `Todo app de organização promete que "se adapta". Quase nenhum conta como.

Aqui está o nosso, sem marketing:

O plano ganha uma âncora. A data em que você começou fica gravada e nunca se move, nem quando você abre o app num aparelho novo. Sem isso o seu começo seria empurrado para hoje toda vez, e o cronograma inteiro sairia do lugar.

O que você arrasta para o topo pesa mais. A ordem dos seus materiais não é enfeite: o primeiro tem 4 vezes mais chance de cair no seu dia, o segundo 2 vezes, o resto 1. Você prioriza arrastando.

São quatro fases. A última se chama Pico: descanso, revisão e execução. É exatamente o que atleta faz na semana da competição, e é o oposto de virar a noite.

E depois da prova o plano não some. Sessões leves seguem até o dia do resultado.

Nada disso você configura. Você informa a data da prova e os dias que estuda.

Faltam 66 dias para o ENEM e 65 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>COMO</b> que eu te mando o link no direct',
        tags: '#organizacao #rotinadeestudos #enem2026 #vestibular',
        nota: 'ESTREIA do registro Insights: campo de cor claro com desenho de traço, sem fundo laranja e sem fundo preto. Tudo que está escrito é o algoritmo de verdade, lido em dashboard.html (buildPersonalizedSchedule, o pool ponderado 4x/2x/1x, as quatro fases, _psPostTestPlan). Mostra sofisticação explicando o mecanismo, nunca dizendo que somos inovadores.' } },
    { d: '2026-09-04',
      post: { dir: 'momentos', n: 2, tipo: 'post único · foto e uma frase',
        titulo: 'A segunda-feira já está marcada',
        legenda: `A segunda-feira já está marcada. Só você que ainda não.

A prova de quinta foi combinada semana passada. A lista fecha na terça desde que foi passada. O treino mudou de horário no grupo, às onze da noite, e ninguém leu.

Nada disso é surpresa. Só chega como surpresa.

Faltam 65 dias para o ENEM e 64 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>SEMANA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vestibular #vidadeestudante',
        nota: 'Amanhecer atravessando o vidro fosco. O laranja é o mesmo da marca, sem tratamento. Pexels 30669567, Halyna Khomyk.' },
      stories: [{ dir: 'setembro-stories', n: 2, o: 'Hippo · 65 e 64 dias',
        faz: 'O ritual da sexta. Só os números mudam.' }] },

    { d: '2026-09-05',
      post: { dir: 'sabado', n: 1, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Comprar caneta nova não é estudar',
        legenda: `Comprar caneta nova não é estudar.

Mas a gente entende. É a única parte da lista que dá pra terminar hoje, e terminar alguma coisa é bom demais.

O problema é que às vezes é a única coisa que a gente termina a semana inteira.

Faltam 64 dias para o ENEM e 63 para o SAT de 7 de novembro.`,
        cta: 'marca o amigo que tem seis marca-textos e nenhum resumo',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos',
        nota: 'A piada é sobre a situação e termina perdoando quem faz. A marca está do lado do aluno contra a semana, nunca do lado da semana contra o aluno. Pexels 6192519, KATRIN BOLOVTSOVA.' } },

    { d: '2026-09-06',
      post: { dir: 'setembro-06-gargalo', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'O gargalo não é o conteúdo',
        labels: ['capa · diagrama','o que não falta','o gargalo','decidir cansa','63 dias','decidir na hora','fecho'],
        legenda: `Você não estuda pouco. Você gasta a semana decidindo o que estudar.

Videoaula, apostila, PDF no grupo, resumo de março. Material não falta pra ninguém. O que falta é a ordem: onde física cabe numa semana que já tem prova de história na quinta e treino na terça.

Toda vez que você abre o caderno e pensa "por onde eu começo", o tempo de estudo já começou a contar. E essa dúvida volta todo dia, porque nada ficou decidido.

Faltam 63 dias para o primeiro dia do ENEM e 62 para o SAT de 7 de novembro. São nove semanas.`,
        cta: 'comenta <b>ORDEM</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #vestibular #organizacao',
        nota: 'Vira os posts 1 e 2 do LinkedIn. Não depende de foto nenhuma.' },
      stories: [
        { dir: 'campanha-stories', n: 5, o: 'Affirmations de véspera', faz: 'Rito de domingo. Sticker "reposta se for você".' },{ dir: 'setembro-stories', n: 3, o: 'Caixinha aberta',
        faz: 'Sticker de perguntas na caixa tracejada. Responder uma por dia.' }],
      tarefas: [] },

    { d: '2026-09-07', contexto: 'Feriado da Independência',
      post: { dir: 'momentos', n: 3, tipo: 'post único · foto e uma frase',
        titulo: 'Hoje é feriado. Aproveita.',
        legenda: `Hoje é feriado. Aproveita.

Sério, é isso. Sem "mas aproveita pra revisar", sem "quem estuda no feriado sai na frente". Você tem 62 dias pela frente e nenhum deles melhora se hoje for ruim.

A gente volta amanhã com a semana.`,
        cta: 'marca quem precisa ler isso hoje',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Um perfil de organização que cobra no feriado é só mais uma voz mandando estudar. Este dá o dia de volta, e é o post mais generoso do mês. Pexels 9015904, UMUT DAĞLI.' },
      stories: [
        { dir: 'campanha-stories', n: 3, o: 'Teaser 03 · véspera', faz: 'À noite, único story do feriado. Countdown sticker para amanhã 17h.' } ] },
    { d: '2026-09-08', contexto: 'DROP 01 · A TURMA · o dia mais importante do mês',
      post: { dir: 'drop01', cards: 6, tipo: 'carrossel DROP · 6 cards',
        titulo: 'DROP 01 · A Turma',
        labels: ['capa','o que é','como funciona','o que não tem','a regra','comenta a escola'],
        legenda: `A gente construiu uma coisa nova, e ela não funciona sozinha. De propósito.

Chama Turma. Alguém da sua sala cria, manda um link no grupo, e quem entra já vê o calendário de provas de vocês, montado. Qualquer um adiciona a prova que o professor marcou, e o cronograma de cada um se remonta em volta dela.

O que ela NÃO tem é o mais importante: sem chat, sem notas, sem ranking. Só o calendário. Suas notas continuam suas, quem criou modera, e sair leva você embora inteiro.

Uma agenda compartilhada com 3 pessoas é enfeite. Com a turma inteira, ninguém mais é pego de surpresa por prova.

As primeiras turmas abrem onde tiver mais gente esperando.

Comenta a sua ESCOLA que a gente te manda o convite dela no direct.

Faltam 61 dias para o ENEM e 60 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#voltaàsaulas #rotinadeestudos #organizacao #enem2026',
        nota: 'O POST DA CAMPANHA. Substituiu o da Champions (trending demovido, GAMEPLAN mudança 4). A feature existe na school-build (db0852a) e o Eduardo precisa fazer o deploy (rules antes do Vercel) ATÉ ESTE DIA, senão o drop anuncia o que ninguém abre. DM: responder com o link ?escola= da pessoa.' },
      stories: [
        { dir: 'campanha-stories', n: 3, o: 'Reprise do teaser 3 de manhã', faz: 'Countdown sticker para 17h.' },
        { dir: 'drop01', n: 1, o: 'Capa do drop às 17h', faz: 'Story apontando para o post. Link com ?escola= geral.' } ] },
    { d: '2026-09-09', contexto: 'US Open em andamento · o descanso como estratégia',
      post: { dir: 'por-tras', n: 3, tipo: 'post único · série Por trás do treino',
        titulo: 'Parar na véspera não é preguiça. É estratégia',
        legenda: `Na véspera da prova você abre matéria nova às onze da noite, porque parar parece preguiça. E aí chega na prova com sono e com um assunto que você viu uma vez só.

O contrário disso tem nome e tem número.

Sinner, número 1 do mundo e campeão de Wimbledon, se retirou do US Open por causa do joelho e remarcou a volta para outubro. Podia ter forçado. Não forçou. E estudos com nadadores, ciclistas e corredores mostram por quê: cortar de 41% a 60% do volume de treino nas duas semanas antes da competição, mantendo a intensidade, melhora o desempenho na hora que importa. Isso se chama taper. A adaptação acontece no descanso, não no esforço.

Semana de prova é isso: menos matéria nova, mais revisão do que você já viu, e dormir.

No PeakScore, quando a prova se aproxima, o plano enxuga o volume sozinho e prioriza revisão. Você não precisa ter a disciplina de parar: o cronograma já reduz por você.

Faltam 60 dias para o ENEM e 59 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#usopen #rotinadeestudos #enem2026 #comoestudar',
        nota: 'Série Por trás do treino ep. 3. CTA migrado para o funil único da campanha (GAMEPLAN mudança 6). Fontes: ESPN/usopen.org (retirada), Bosquet 2007 + PLOS One 2023 (taper).' },
      stories: [{ dir: 'campanha-stories', n: 4, o: 'Como criar a sua turma (passo a passo)', faz: 'Sequência de 3 telas do app mostrando criar turma, copiar link, mandar no grupo. Capturar do app na hora.' }] },

    { d: '2026-09-10', contexto: 'Dia Mundial de Prevenção do Suicídio · Setembro Amarelo',
      post: { dir: 'setembro-unicos', n: 2, tipo: 'post único · documental',
        titulo: 'Planner de papel vs semana real',
        legenda: `O planner de papel funciona até a terça-feira.

Aí a professora adianta a prova, o treino muda de horário, e a página em que você caprichou no domingo vira ficção. Você não refaz. Ninguém refaz.

O problema nunca foi o papel. É que a sua semana muda e o papel não.`,
        cta: '',
        tags: '#rotinadeestudos #organizacao #estudos',
        nota: 'O story do Setembro Amarelo sobe DE MANHÃ, sozinho. Este post documental entra só à tarde, sem CTA de produto. Nenhum outro story comercial hoje. Arte: art/mao-caderno.jpg, Pexels 7129052, Michael Burrows.' },
      stories: [{ dir: 'amarelo', n: 1, o: 'Setembro Amarelo · 188', faz: 'Sobe de manhã, sozinho, sem sticker e sem link. Tema CVV 2026: "Escutar é estar presente". Não responder comentários com marketing; se alguém desabafar, responder em DM com o 188 e indicar um adulto da escola.' }] },

    { d: '2026-09-11',
      post: { dir: 'momentos', n: 4, tipo: 'post único · foto e uma frase · em alta',
        titulo: 'Toda semana sai uma lista nova de temas',
        legenda: `Toda semana sai uma lista nova de temas prováveis de redação.

Inteligência artificial, mudanças climáticas, redes sociais, esporte, neurodivergência. São os que aparecem em quase toda lista de 2026, e é bom conhecer todos.

Só que ninguém acerta o tema. O que dá pra treinar é a estrutura, que é a mesma para qualquer um deles, e o repertório, que serve para vários ao mesmo tempo.

E isso precisa de lugar na semana. Repertório que você lê solto no feed não vira redação; vira leitura.

Faltam 58 dias para o ENEM e 57 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>REDAÇÃO</b> que eu te mando o link no direct',
        tags: '#redacaoenem #enem2026 #vestibular #rotinadeestudos',
        nota: 'Pega a onda das listas de temas, que é o assunto do nicho agora. NÃO prevê tema: o post é sobre método. Os cinco temas vêm do noticiário de agosto de 2026, não de previsão nossa.' },
      stories: [
        { dir: 'campanha-stories', n: 4, o: 'PLACAR DAS ESCOLAS', faz: 'Preencher os números reais do /admin por sticker de texto na hora. Nunca inventar número.' },{ dir: 'setembro-stories', n: 6, o: 'Hippo · 58 e 57 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-12', contexto: 'Hoje é dia de SAT (12/9)',
      post: { reel: true, dir: 'setembro-reels-capas', n: 2, gancho: 2, clip: 'semana-montada',
        tipo: 'Reel demo · 18s',
        titulo: 'A semana já vem montada',
        legenda: `Você não precisa montar cronograma. Você precisa que ele exista quando a professora adianta a prova.

Isso aqui é a semana de verdade, no app, em português. Escola, SAT e treino na mesma grade, e ela se remonta sozinha quando algo muda.

Sincroniza com o Google Classroom. Faltam 57 dias para o ENEM e 56 para o SAT de 7 de novembro.`,
        cta: 'comenta <b>PLANO</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #organizacao #estudos',
        nota: 'Veio de 3/9, que virou a estreia do Insights. Footage do app JÁ CAPTURADO em português: reels/out/semana-montada.mp4. Story de manhã: boa prova para quem faz SAT hoje.' } },
    { d: '2026-09-13',
      post: { dir: 'setembro-unicos', n: 3, tipo: 'post único · foto silenciosa',
        titulo: 'O domingo decide a semana',
        legenda: `Domingo à noite não é descanso. É quando você descobre o tamanho da semana.

A prova de quinta que você tinha esquecido. A lista que fecha na terça. O treino que mudou de horário no aviso que ninguém leu.

Não dá pra tirar a segunda-feira do caminho. Dá pra chegar nela sabendo o que já está resolvido.

Faltam 56 dias para o ENEM e 55 para o SAT.`,
        cta: 'salva pra ler no próximo domingo',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #organizacao',
        nota: 'Máximo um por mês: é o post que dá pausa no feed. art/quarto-anoitecer.jpg, Pexels 14526240.' },
      stories: [
        { dir: 'campanha-stories', n: 5, o: 'Affirmations de véspera', faz: 'Rito de domingo.' },{ dir: 'setembro-stories', n: 7, o: 'Caixinha', faz: 'As matérias que chegarem viram os blocos do carrossel de 20/9.' }] },

    { d: '2026-09-14', contexto: 'Estreia do rito de segunda: o bingo',
      post: { dir: 'bingo', n: 1, tipo: 'post único · bingo 4x4',
        titulo: 'Bingo da semana de provas',
        legenda: `Semana de prova tem roteiro, e todo mundo aqui já decorou.

Pinta as casas que você já viveu, reposta no story, e marca a cartela da sua turma. Quem fizer bingo com a linha do "study guide chegou domingo às 22h" ganha o direito de reclamar no grupo.

E se a sua turma quer parar de viver a casa 7 (pânico às 23h), o Drop 01 existe exatamente para isso: um link e o calendário de provas de vocês fica montado para todo mundo.

Comenta a sua ESCOLA que a gente manda o convite.

Faltam 55 dias para o ENEM e 54 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#semanadeprovas #bingo #rotinadeestudos #vidadeestudante',
        nota: 'Substituiu A Fazenda (trending demovido). Formato documentado que faz aluno marcar colega sem a arte pedir. Postar o template em branco nos destaques.' } },
    { d: '2026-09-15',
      post: { dir: 'setembro-unicos', n: 4, tipo: 'post único · número',
        titulo: '54 dias, e o fim de semana duplo',
        legenda: `54 dias até o primeiro dia do ENEM. E 53 até o SAT.

Faz a conta do calendário: o SAT é sábado, 7 de novembro. O ENEM dia 1 é domingo, 8. Quem faz os dois tem prova em dois dias seguidos, e quase ninguém percebeu isso ainda.

Não dá pra tratar como duas provas separadas que por acaso caem perto. É um fim de semana só, e ele precisa ser planejado agora, não em outubro.

O segundo dia do ENEM é 15 de novembro.`,
        cta: 'comenta <b>NOVEMBRO</b> que eu te mando o plano das duas provas no direct',
        tags: '#enem2026 #sat #estudarfora #vestibular #cronograma',
        nota: 'Números do edital do INEP e do College Board, nunca de uso da plataforma. Este é o post mais útil do mês para quem faz os dois.' },
      stories: [{ dir: 'setembro-stories', n: 8, o: 'Enquete · matéria atrasada', faz: 'Alimenta o post de hoje.' }] },

    { d: '2026-09-16', contexto: 'O rito de quarta: hiperlocal',
      post: { dir: 'americana', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Coisas que só quem estuda em escola americana em SP entende',
        legenda: `Você começa a frase em português e termina in English sem perceber. Todo dezembro explica pra família o que é GPA. E faz vestibular E SAT no mesmo ano, às vezes no mesmo mês.

Se você leu tudo balançando a cabeça, a gente estuda na mesma São Paulo. Este app nasceu dentro de uma escola dessas, feito por quem acorda 5h40 porque o bus atravessa a cidade inteira.

Qual faltou? Comenta junto com a sua ESCOLA: as primeiras turmas estão abrindo por escola agora.

Faltam 53 dias para o ENEM e 52 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> e o item que faltou',
        tags: '#escolaamericana #bilingue #sat #vidadeestudante',
        nota: 'Substituiu "Um aluno pediu isso ontem". Chapel NUNCA na arte; "nasceu dentro de uma escola dessas" é o máximo permitido sem autorização da direção (linha vermelha 9).' } },
    { d: '2026-09-17', contexto: 'Série do treino · prática deliberada',
      post: { dir: 'por-tras', n: 4, tipo: 'post único · série Por trás do treino',
        titulo: 'Três horas estudando não são três horas melhorando',
        legenda: `Você senta três horas, relê a matéria que já entende, e levanta com a sensação de ter estudado. Na prova cai justo aquilo que você pulou porque dava trabalho.

Você já ouviu que são necessárias 10 mil horas para ficar bom em alguma coisa. O estudo original, de 1993, com trinta violinistas, nunca disse isso.

O que separava os melhores não era o total de horas. Era o TIPO de prática: com alvo específico, com correção, refazendo o pedaço ruim. E as 10 mil eram uma média, não um número mínimo. O próprio autor chamou o número de arbitrário depois que ele virou regra popular.

Exemplo vivo desta semana: Coco Gauff estava dando dupla falta demais. Contratou um treinador só para o saque e atacou aquele erro. As duplas faltas dela caíram de 9,8 para 5,3 por jogo.

Não foi mais tempo em quadra. Foi mirar o erro.

No PeakScore o plano do dia pergunta o que você vai melhorar, não só quanto tempo vai sentar.

Faltam 52 dias para o ENEM e 51 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#comoestudar #rotinadeestudos #enem2026 #vestibular',
        nota: 'Série Por trás do treino ep. 4. CTA no funil único. Fontes: Ericsson 1993 + Salon; Royal Society OS; Tennishead/NBC (Gauff).' } },

    { d: '2026-09-18', contexto: 'Último dia de inscrição do SAT de 3 de outubro',
      post: { dir: 'trending', n: 1, tipo: 'post único · cor cheia · serviço',
        titulo: 'Três datas hoje. Só uma não volta',
        legenda: `Hoje você vai lembrar de dois e esquecer o terceiro. E o esquecido é justamente o único que não volta.

Fecha a inscrição do SAT de 3 de outubro. Abre o early access do FC 27, pra quem pagou a edição cara. E o Fonseca estreia na Copa Davis, jogando em casa, no Rio.

Só uma das três não tem segunda chance. Se você ia fazer o SAT de outubro, não deixa hoje passar: a próxima data é 7 de novembro, sábado, VÉSPERA do ENEM. Quem faz os dois faz em dias seguidos.

O FC e o jogo do Fonseca têm replay. O prazo não.

É exatamente o tipo de coisa que o PeakScore não deixa passar: prazo entra no cronograma e a semana se refaz em volta dele, sozinha.

Faltam 51 dias para o ENEM e 50 para o SAT de novembro.`,
        cta: 'comenta <b>SAT</b> que eu te mando o calendário completo no direct',
        tags: '#sat #fc27 #copadavis #enem2026 #vestibular',
        nota: 'Os três fatos verificados em 29/8: College Board (deadline 18/9), EA oficial (early access 18/9), CNN/Lance (Davis 18-19/9, Farmasi Arena, Fonseca convocado). FC 27 e Copa Davis por NOME, sem logo, sem arte oficial.' },
      stories: [
        { dir: 'campanha-stories', n: 4, o: 'PLACAR DAS ESCOLAS', faz: 'Preencher os números reais do /admin por sticker de texto na hora. Nunca inventar número.' },{ dir: 'setembro-stories', n: 9, o: 'Hippo · 51 e 50 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-19',
      post: { dir: 'sabado', n: 3, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Quarenta minutos montando a playlist',
        legenda: `Quarenta minutos montando a playlist de estudo. Vinte estudando.

A playlist ficou ótima, é verdade. Ninguém tira isso de você.

Mas repara no que aconteceu: na sua cabeça você não estava procrastinando, estava se preparando. É a procrastinação mais convincente que existe, porque ela parece produtiva.

Faltam 50 dias para o ENEM e 49 para o SAT.`,
        cta: 'marca quem faz playlist antes de toda matéria',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Cor cheia e Hippo: o veículo de piada da marca, que é nosso e não depende de licença de ninguém.' } },

    { d: '2026-09-20',
      post: { dir: 'setembro-20-tres-erros', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: '3 erros que travam a sua semana',
        labels: ['capa · diagrama','erro 1','erro 2','erro 3','49 dias','à mão x sozinha','fecho'],
        legenda: `Seu cronograma não quebra por preguiça. Ele quebra pelo jeito que foi montado.

São três erros, e nenhum deles é sobre esforço. Planejar o dia em vez da semana. Encher a semana até a última hora. E o terceiro, que quase ninguém percebe: esperar a próxima segunda pra consertar o que quebrou na terça.

Esperar segunda vira quatro recomeços por mês, todos do zero. Cinco minutos na terça salvam a semana inteira.

Faltam 49 dias para o ENEM e 48 para o SAT. Sete semanas exatas.`,
        cta: 'comenta <b>TRES ERROS</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #vestibular #organizacao',
        nota: 'O carrossel mais salvável do mês. Vira os posts 5 e 6 do LinkedIn.' },
      stories: [
        { dir: 'campanha-stories', n: 5, o: 'Affirmations de véspera', faz: 'Rito de domingo. JANELA A de launch night: se a semana de provas da Chapel é a de 21/9, o núcleo dispara nos grupos hoje.' },{ dir: 'setembro-stories', n: 10, o: 'Caixinha', faz: 'Repost do carrossel no mesmo dia.' }] },

    { d: '2026-09-21', contexto: 'Rito de segunda · bingo rodada 2',
      post: { dir: 'bingo', n: 2, tipo: 'post único · bingo 4x4',
        titulo: 'Bingo rodada 2: de novo? De novo',
        legenda: `Segunda rodada, cartela nova. Quatro casas trocadas para quem fez bingo na semana passada não ganhar de graça.

A casa nova mais cruel: "estudou a unidade errada". Se doeu, é porque aconteceu.

Comenta a sua ESCOLA e marca a cartela da turma.

Faltam 48 dias para o ENEM e 47 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#semanadeprovas #bingo #rotinadeestudos #vidadeestudante',
        nota: 'O Reel de repetição espaçada (precisava da voz do Eduardo) sai do caminho crítico e vira estoque.' },
      stories: [{ dir: 'setembro-stories', n: 11, o: 'Enquete · adversário do Hippo', faz: 'Escolhe o adversário do Reel de amanhã. Grave depois que ela fechar.' }] },
    { d: '2026-09-22',
      post: { reel: true, dir: 'setembro-reels-capas', n: 8, gancho: 8,
        tipo: 'Reel meme · 14s',
        titulo: 'O duelo do Hippo',
        legenda: `O Hippo perdeu de novo para a semana de setembro. Prova de quinta, treino que mudou de horário, lista que fecha na terça.

Faltam 47 dias para o ENEM e 46 para o SAT. Dá tempo de virar o jogo.`,
        cta: 'marca quem está perdendo esse duelo junto com você',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Gravar depois que a enquete de ontem fechar. A piada é sobre a situação, nunca sobre o aluno.' } },

    { d: '2026-09-23',
      post: { reel: true, dir: 'setembro-reels-capas', n: 9, gancho: 9,
        tipo: 'Reel bastidor · 18s',
        titulo: 'Por que a gente não cobra',
        legenda: `A pergunta que todo mundo faz é "qual é a pegadinha". Não tem.

O organizador inteiro é grátis e a demonstração nem pede cadastro. O porquê está no vídeo.

Faltam 46 dias para o ENEM e 45 para o SAT.`,
        cta: 'comenta <b>GRÁTIS</b> que eu te mando o link no direct',
        tags: '#buildinpublic #educacao #rotinadeestudos',
        nota: 'CUIDADO com a palavra: o site diz "grátis para começar, planos pagos podem chegar depois". Não prometa "grátis para sempre" no vídeo.' },
      tarefas: ['Bastidor de quarta, mesma pauta do Reel.'] },

    { d: '2026-09-24',
      post: { dir: 'setembro-24-gratis', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Grátis, e por quê',
        labels: ['capa','a pergunta','o organizador','e o SAT','a conta','o que promete','fecho'],
        legenda: `"Qual é a pegadinha?" é a pergunta que todo mundo faz.

Não tem. O organizador inteiro é grátis: as aulas, as tarefas, as provas, as notas e a sincronia com o Google Classroom. A demonstração nem pede cadastro.

A parte do SAT se apoia no que já é aberto, Khan Academy e Bluebook, mais um curso de 50 lições de Desmos aqui dentro. Alguns livros são pagos à parte, e a gente diz isso de cara: o PeakScore em si não custa nada.

Planos pagos podem chegar depois, e está escrito assim no site. O que existe hoje não custa nada.

Faltam 45 dias para o ENEM e 44 para o SAT.`,
        cta: 'comenta <b>GRÁTIS</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vestibular #organizacao #estudos',
        nota: 'Alinhado palavra por palavra com peakscore.com.br. Vira os posts 7 e 8 do LinkedIn.' } },

    { d: '2026-09-25',
      post: { dir: 'momentos', n: 5, tipo: 'post único · foto e uma frase',
        titulo: 'Vinte minutos escolhendo a matéria',
        legenda: `Vinte minutos escolhendo a matéria. Zero minuto estudando.

Você abriu o caderno com tempo de verdade na frente. E gastou o bloco inteiro decidindo por onde começar, porque nada tinha sido decidido antes.

Decidir cansa, e cansa antes mesmo de você começar. É por isso que a matéria mais confortável ganha sempre nessa hora.

Faltam 44 dias para o ENEM e 43 para o SAT.`,
        cta: 'comenta <b>VINTE MINUTOS</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #estudos',
        nota: 'Caderno pautado em branco sobre madeira. A página vazia é a mensagem. Pexels 606541, Jessica Lewis.' },
      stories: [
        { dir: 'campanha-stories', n: 4, o: 'PLACAR DAS ESCOLAS', faz: 'Preencher os números reais do /admin por sticker de texto na hora. Nunca inventar número.' },{ dir: 'setembro-stories', n: 12, o: 'Hippo · 44 e 43 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-26',
      post: { dir: 'sabado', n: 4, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Estudar em grupo: 10% estudo, 90% assunto',
        legenda: `Estudar em grupo: 10% estudo, 90% assunto.

E esses 10% rendem mais do que estudar sozinho. Explicar a matéria pra alguém é o jeito mais rápido de descobrir o que você não sabia. É por isso que continua valendo, mesmo com os 90%.

O que não vale é combinar quatro horas e chegar sem saber o que vocês vão fazer nelas.

Faltam 43 dias para o ENEM e 42 para o SAT.`,
        cta: 'marca o grupo que estuda 10% e fala 90%',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos',
        nota: 'Fecha os sábados com o único que também é elogio: grupo funciona, só precisa de pauta.' } },

    { d: '2026-09-27',
      post: { dir: 'setembro-27-outubro', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Plano de outubro',
        labels: ['capa · interface','42 dias','semanas 1 e 2','semanas 3 e 4','semanas 5 e 6','outubro','fecho'],
        legenda: `Daqui até a prova são seis semanas. Depois disso é a prova, e a prova não negocia.

Semanas 1 e 2: começa pelo que você mais erra, não pelo que você mais gosta. Semanas 3 e 4: um simulado inteiro, no horário da prova, 13h30, sem pausa extra. Semanas 5 e 6: só o que você já errou, com espaço entre as voltas.

E dois blocos ficam vazios de propósito. Semana cheia é semana que quebra na primeira mudança, e é assim que o PeakScore monta a sua: com folga de verdade, porque a semana real muda.

Hoje, aliás, é o exemplo disso: tem gente que sai da prova do ITA e ainda vê o segundo tempo de Ravens x Cowboys no Maracanã. Mesma pessoa, mesmo domingo. Planejou.

Faltam 42 dias para o ENEM e 41 para o SAT. Este é o primeiro dos seis domingos que sobraram.`,
        cta: 'comenta <b>OUTUBRO</b> que eu te mando o plano das seis semanas no direct',
        tags: '#enem2026 #rotinadeestudos #cronograma #vestibular #organizacao',
        nota: 'Abre a contagem diária de outubro. NFL Rio (Ravens x Cowboys, Maracanã, 17h25) e prova do ITA (13h-18h) confirmados em 29/8; por NOME, sem logo de liga ou time.' },
      stories: [
        { dir: 'campanha-stories', n: 5, o: 'Affirmations de véspera', faz: 'Rito de domingo. JANELA B de launch night.' },{ dir: 'setembro-stories', n: 13, o: 'Caixinha', faz: 'As respostas viram o plano de outubro.' }] },

    { d: '2026-09-28', contexto: 'Rito de segunda · bingo rodada final',
      post: { dir: 'bingo', n: 3, tipo: 'post único · bingo 4x4',
        titulo: 'Bingo rodada final: sobreviva',
        legenda: `Última cartela do mês, e setembro não facilitou.

"Grupo mudou de nome pra SOS PROVA" entrou por demanda popular. A casa do meio continua LIVRE porque respeito é bom.

Outubro vem com contagem diária. Comenta a sua ESCOLA e chega junto.

Faltam 41 dias para o ENEM e 40 para o SAT de 7 de novembro.`,
        cta: 'comenta a sua <b>ESCOLA</b> que eu te mando o convite no direct',
        tags: '#semanadeprovas #bingo #rotinadeestudos #vidadeestudante',
        nota: 'O Reel do Desmos vira estoque de outubro (precisa da voz).' } },
    { d: '2026-09-29',
      post: { dir: 'esporte', n: 2, tipo: 'post único · campo escuro · marco',
        titulo: 'A largada acontece durante a sua prova',
        legenda: `Domingo, 8 de novembro. O ENEM começa às 13h30 e vai até as 19h.

Às 14h desse mesmo domingo é a largada em Interlagos, a vinte e poucos quilômetros de onde boa parte de São Paulo vai estar sentada fazendo prova. Bandeira quadriculada, pódio, entrevista: a corrida INTEIRA acontece e termina, e você ainda vai ter duas horas de prova pela frente. E à noite tem a volta da semifinal da Copa do Brasil.

E tudo bem, porque a prova é uma vez e o replay existe.

Quem chega nesse domingo com as semanas montadas assiste ao replay em paz. É para isso que o cronograma do PeakScore existe: para novembro ser só execução.

O que não tem replay é a semana que vem antes. Faltam 40 dias para o ENEM e 39 para o SAT.`,
        cta: 'marca quem já tinha percebido que era no mesmo dia',
        tags: '#enem2026 #f1 #vestibular #rotinadeestudos',
        nota: 'Fato conferido: GP de São Paulo dias 6, 7 e 8 de novembro, corrida principal domingo às 14h de Brasília (17h GMT); ENEM dia 1 das 13h30 às 19h. A corrida acontece inteira dentro da prova, e ninguém tinha feito essa conta. Fórmula 1 e Interlagos aparecem por NOME, nunca por logotipo ou foto de corrida.' } },

    { d: '2026-09-30', contexto: 'Fecha setembro e abre a contagem diária de outubro',
      post: { dir: 'trending', n: 2, tipo: 'post único · campo escuro · marco',
        titulo: 'Quatro dias entre o ENEM e o GTA VI',
        legenda: `A sua recompensa já tem data marcada. E ela é quatro dias depois da última prova.

O ENEM acaba dia 15 de novembro. Dia 19 saem o GTA VI e o novo Jogos Vorazes, Amanhecer na Colheita.

Quatro dias entre a prova e isso tudo.

Não é motivação de cartaz, é calendário: existe uma data em que isso termina, e ela está a quatro dias das coisas que meio mundo espera há anos.

Monta no PeakScore o caminho de trás pra frente: da prova até hoje, semana a semana. O jogo e o filme viram a linha de chegada do cronograma, não a distração dele.

Outubro é a reta final. Faltam 39 dias para o primeiro dia do ENEM e 38 para o SAT.`,
        cta: 'marca quem vai sumir no dia 19',
        tags: '#gta6 #enem2026 #rotinadeestudos #vestibular',
        nota: 'GTA VI e Jogos Vorazes por NOME, nunca com arte oficial, logotipo ou captura. GTA VI 19/11 (Rockstar, reafirmado 7/8); Amanhecer na Colheita 19/11 no Brasil (Rolling Stone + Ingresso, checado 29/8). Campo escuro é reservado a marco com número externo e verificável.' },
      stories: [
        { dir: 'campanha-stories', n: 4, o: 'PLACAR DAS ESCOLAS', faz: 'Preencher os números reais do /admin por sticker de texto na hora. Nunca inventar número.' } ] },
  ];

  // A contagem e calculada, nunca digitada.
  const DOW = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
  const MES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return DIAS.map((dia) => {
    const [y, m, d] = dia.d.split('-').map(Number);
    const data = new Date(y, m - 1, d);
    return { ...dia, data,
      dow: DOW[data.getDay()],
      curto: `${d}/${m}`,
      longo: `${DOW[data.getDay()]}, ${d} de ${MES[m - 1]}`,
      enem: dias(data, ENEM1),
      enem2: dias(data, ENEM2),
      sat: dias(data, SAT) };
  });
})();
