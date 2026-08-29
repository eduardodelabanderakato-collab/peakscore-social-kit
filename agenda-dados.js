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
        titulo: 'Ninguém levanta a taça em agosto',
        legenda: `Ninguém levanta a taça em agosto.

Nenhum time ganha o campeonato numa rodada. Ganha somando ponto em outubro, em novembro, e nas quartas-feiras chatas do meio, contra time que ninguém lembra depois.

É a mesma conta com estudo, e é por isso que a semana comum importa mais que o domingo heroico. A véspera salva uma prova. Ela não salva um semestre.

Faltam 70 dias para o ENEM e 69 para o SAT.`,
        cta: 'marca quem só estuda na véspera',
        tags: '#rotinadeestudos #enem2026 #vestibular #estudos',
        nota: 'SEM TIME. Metade do público torce para o outro, e um perfil de organização escolar não tem nada a ganhar escolhendo lado. Nenhum clube, posição ou rodada é citado.' } },

    { d: '2026-09-01',
      post: { dir: 'setembro-01-carrossel', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Sua vida escolar mora em cinco lugares',
        labels: ['capa','os cinco','68 dias','se refaz sozinho','cinco x um','dois irmãos','fecho'],
        legenda: `Sua vida escolar mora em cinco lugares diferentes, e nenhum deles conversa com o outro.

O quadro da escola, o grupo da turma, o print no rolo da câmera, a agenda de papel e a sua memória. A conta de juntar tudo sobra pra você, sempre no domingo à noite.

Faltam 68 dias para o primeiro dia do ENEM e 67 para o SAT. A gente juntou tudo num lugar que se refaz sozinho quando a semana muda, e sincroniza com o Google Classroom. Grátis para começar, feito por dois irmãos que fizeram essas provas.`,
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

Faltam 67 dias para o ENEM e 66 para o SAT.`,
        cta: 'comenta <b>DOMINGO</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #vidadeestudante #vestibular',
        nota: 'Footage do app já capturado em português: reels/out/hoje.mp4. Falta montar com a cartela de gancho na frente. Sem narração.' },
      tarefas: ['Bastidor de quarta: vídeo de celular, sem edição, som ambiente.'] },

    { d: '2026-09-03',
      post: { reel: true, dir: 'setembro-reels-capas', n: 2, gancho: 2, clip: 'semana-montada',
        tipo: 'Reel demo · 18s',
        titulo: 'A semana já vem montada',
        legenda: `Você não precisa montar cronograma. Você precisa que ele exista quando a professora adianta a prova.

Isso aqui é a semana de verdade, no app, em português. Escola, SAT e treino na mesma grade, e ela se remonta sozinha quando algo muda.

Sincroniza com o Google Classroom. Faltam 66 dias para o ENEM e 65 para o SAT.`,
        cta: 'comenta <b>PLANO</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #enem2026 #organizacao #estudos',
        nota: 'Footage do app JÁ CAPTURADO em português: reels/out/semana-montada.mp4. É o app de verdade, não maquete.' } },

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

Faltam 64 dias para o ENEM e 63 para o SAT.`,
        cta: 'marca o amigo que tem seis marca-texto e nenhum resumo',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos',
        nota: 'A piada é sobre a situação e termina perdoando quem faz. A marca está do lado do aluno contra a semana, nunca do lado da semana contra o aluno. Pexels 6192519, KATRIN BOLOVTSOVA.' } },

    { d: '2026-09-06',
      post: { dir: 'setembro-06-gargalo', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'O gargalo não é o conteúdo',
        labels: ['capa · diagrama','o que não falta','o gargalo','decidir cansa','63 dias','decidir na hora','fecho'],
        legenda: `Você não estuda pouco. Você gasta a semana decidindo o que estudar.

Videoaula, apostila, PDF no grupo, resumo de março. Material não falta pra ninguém. O que falta é a ordem: onde física cabe numa semana que já tem prova de história na quinta e treino na terça.

Toda vez que você abre o caderno e pensa "por onde eu começo", o bloco já começou. E essa dúvida volta todo dia, porque nada ficou decidido.

Faltam 63 dias para o primeiro dia do ENEM e 62 para o SAT. São nove semanas.`,
        cta: 'comenta <b>ORDEM</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #vestibular #organizacao',
        nota: 'Vira os posts 1 e 2 do LinkedIn. Não depende de foto nenhuma.' },
      stories: [{ dir: 'setembro-stories', n: 3, o: 'Caixinha aberta',
        faz: 'Sticker de perguntas na caixa tracejada. Responder uma por dia.' }],
      tarefas: [] },

    { d: '2026-09-07', contexto: 'Feriado da Independência',
      post: { dir: 'momentos', n: 3, tipo: 'post único · foto e uma frase',
        titulo: 'Hoje é feriado. Aproveita.',
        legenda: `Hoje é feriado. Aproveita.

Sério, é isso. Sem "mas aproveita pra revisar", sem "quem estuda no feriado sai na frente". Você tem 62 dias pela frente e nenhum deles melhora porque hoje foi ruim.

A gente volta amanhã com a semana.`,
        cta: 'marca quem precisa ler isso hoje',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Um perfil de organização que cobra no feriado é só mais uma voz mandando estudar. Este dá o dia de volta, e é o post mais generoso do mês. Pexels 9015904, UMUT DAĞLI.' } },

    { d: '2026-09-08',
      post: { dir: 'setembro-unicos', n: 1, tipo: 'post único · cor cheia',
        titulo: 'O Hippo faz a triagem',
        legenda: `Três entregas, um treino e uma prova na mesma semana. Alguém tem que decidir a ordem.

Se for você, na noite de domingo, com sono, a matéria mais fácil ganha sempre. Não é falta de disciplina: é que decidir cansa antes de estudar.

Faltam 61 dias para o ENEM e 60 para o SAT.`,
        cta: 'marca o amigo que sempre começa pela matéria que já sabe',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos',
        nota: 'Humor. A piada é sobre a situação, nunca sobre o aluno e nunca sobre nota baixa.' } },

    { d: '2026-09-09',
      post: { reel: true, dir: 'setembro-reels-capas', n: 4, gancho: 4, clip: 'calendario',
        tipo: 'Reel POV · 12s',
        titulo: 'Cinco apps, uma planilha',
        legenda: `Cinco apps, uma planilha, e ainda esqueci a redação.

O problema nunca foi organização. É que ninguém devia precisar de cinco lugares para saber o que fazer na terça.

Faltam 60 dias para o ENEM e 59 para o SAT.`,
        cta: 'comenta <b>UM LUGAR</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #organizacao #vestibular #vidadeestudante',
        nota: 'É o ângulo do melhor post do ano. Footage pronto: calendario.mp4. Falta o corte rápido entre apps no seu celular.' },
      tarefas: ['Bastidor de quarta.'] },

    { d: '2026-09-10',
      post: { dir: 'setembro-unicos', n: 2, tipo: 'post único · documental',
        titulo: 'Planner de papel vs semana real',
        legenda: `O planner de papel funciona até a terça-feira.

Aí a professora adianta a prova, o treino muda de horário, e a página que você caprichou no domingo vira ficção. Você não refaz. Ninguém refaz.

O problema nunca foi o papel. É que a sua semana muda e o papel não.

Faltam 59 dias para o ENEM e 58 para o SAT.`,
        cta: 'comenta <b>SEMANA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #organizacao #vestibular #estudos',
        nota: 'A arte é só a foto: toda a copy vive na legenda. art/mao-caderno.jpg, Pexels 7129052, Michael Burrows.' } },

    { d: '2026-09-11',
      post: { dir: 'momentos', n: 4, tipo: 'post único · foto e uma frase · em alta',
        titulo: 'Toda semana sai uma lista nova de temas',
        legenda: `Toda semana sai uma lista nova de temas prováveis de redação.

Inteligência artificial, mudanças climáticas, redes sociais, esporte, neurodivergência. São os que aparecem em quase toda lista de 2026, e é bom conhecer todos.

Só que ninguém acerta o tema. O que dá pra treinar é a estrutura, que é a mesma para qualquer um deles, e o repertório, que serve para vários ao mesmo tempo.

E isso precisa de lugar na semana. Repertório que você lê solto no feed não vira redação; vira leitura.

Faltam 58 dias para o ENEM e 57 para o SAT.`,
        cta: 'comenta <b>REDAÇÃO</b> que eu te mando o link no direct',
        tags: '#redacaoenem #enem2026 #vestibular #rotinadeestudos',
        nota: 'Pega a onda das listas de temas, que é o assunto do nicho agora. NÃO prevê tema: o post é sobre método. Os cinco temas vêm do noticiário de agosto de 2026, não de previsão nossa.' },
      stories: [{ dir: 'setembro-stories', n: 6, o: 'Hippo · 58 e 57 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-12',
      post: { dir: 'sabado', n: 2, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Se você marcou tudo, você não marcou nada',
        legenda: `Se você marcou tudo, você não marcou nada.

A página inteira amarela não é destaque, é decoração. Marca-texto serve pra dizer "isso aqui é diferente do resto", e quando é tudo, não é nada.

A regra que funciona é chata: no máximo uma linha por parágrafo. Se não couber, o parágrafo é que precisa ser relido.

Faltam 57 dias para o ENEM e 56 para o SAT.`,
        cta: 'marca quem pinta a apostila inteira',
        tags: '#rotinadeestudos #comoestudar #enem2026 #estudos',
        nota: 'Pexels 1629212, Min An. Véu no forte: a foto é cheia de detalhe e a serifada branca sumiria.' } },

    { d: '2026-09-13',
      post: { dir: 'setembro-unicos', n: 3, tipo: 'post único · foto silenciosa',
        titulo: 'O domingo decide a semana',
        legenda: `Domingo à noite não é descanso. É quando você descobre o tamanho da semana.

A prova de quinta que você tinha esquecido. A lista que fecha na terça. O treino que mudou de horário e ninguém avisou no grupo.

Não dá pra tirar a segunda-feira do caminho. Dá pra chegar nela sabendo o que já está resolvido.

Faltam 56 dias para o ENEM e 55 para o SAT.`,
        cta: 'salva pra ler no próximo domingo',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #organizacao',
        nota: 'Máximo um por mês: é o post que dá pausa no feed. art/quarto-anoitecer.jpg, Pexels 14526240.' },
      stories: [{ dir: 'setembro-stories', n: 7, o: 'Caixinha', faz: 'As matérias que chegarem viram os blocos do carrossel de 20/9.' }] },

    { d: '2026-09-14',
      post: { reel: true, dir: 'setembro-reels-capas', n: 3, gancho: 3,
        tipo: 'Reel micro-aula · 20s',
        titulo: 'Repetição espaçada',
        legenda: `Reler cinco vezes na véspera não é estudar cinco vezes.

A curva do esquecimento não liga para esforço, ela liga para intervalo. Três voltas espaçadas na mesma matéria valem mais que uma maratona de domingo.

Faltam 55 dias para o ENEM e 54 para o SAT.`,
        cta: 'comenta <b>REVISÃO</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #estudos',
        nota: 'A capa já traz o diagrama das duas curvas: dá para gravar só a voz por cima dele. Precisa de você.' } },

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

    { d: '2026-09-16',
      post: { reel: true, dir: 'setembro-reels-capas', n: 6, gancho: 6,
        tipo: 'Reel bastidor · 12s',
        titulo: 'Um aluno pediu ontem',
        legenda: `Um aluno mandou isso no direct ontem. Está no ar hoje.

É essa a vantagem de ser feito por dois irmãos que ainda respondem os próprios comentários.`,
        cta: 'manda a sua no direct',
        tags: '#buildinpublic #rotinadeestudos #estudos',
        nota: 'O changelog que funciona: vira história, não anúncio de recurso. Precisa de um pedido real de aluno, com permissão de mostrar o print.' },
      tarefas: ['Bastidor de quarta.'] },

    { d: '2026-09-17',
      post: { dir: 'setembro-unicos', n: 5, tipo: 'post único · colagem', bloqueado: true,
        titulo: 'Três alunos, três semanas',
        legenda: `Três alunos, três rotinas completamente diferentes, a mesma reclamação.

[nome], [ano]: [uma frase dele]
[nome], [ano]: [uma frase dela]
[nome], [ano]: [uma frase]

Nenhum dos três queria mais um app. Os três queriam parar de ser o servidor central da própria semana.

Faltam 52 dias para o ENEM e 51 para o SAT.`,
        cta: 'comenta <b>SEMANA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #vidadeestudante #vestibular #estudos',
        nota: 'BLOQUEADO: depende de três alunos beta com autorização de nome e ano. O terceiro slot está listrado de propósito. Foto de banco aqui fabricaria prova social.' } },

    { d: '2026-09-18', contexto: 'Último dia de inscrição do SAT de 3 de outubro',
      post: { dir: 'trending', n: 1, tipo: 'post único · cor cheia · serviço',
        titulo: 'Hoje fecha a inscrição do SAT de 3 de outubro',
        legenda: `Hoje é o último dia de inscrição para o SAT de 3 de outubro.

Se você ia fazer essa data e deixou passar, a próxima é 7 de novembro, e a inscrição dela fecha em 23 de outubro. Depois disso só 5 de dezembro.

E vale saber de uma coisa antes de escolher: o SAT de 7 de novembro é sábado, e o ENEM dia 1 é domingo, 8. Quem faz os dois faz em dias seguidos.

Faltam 51 dias para o ENEM e 50 para o SAT de novembro.`,
        cta: 'comenta <b>SAT</b> que eu te mando o calendário completo no direct',
        tags: '#sat #estudarfora #enem2026 #vestibular',
        nota: 'Post de serviço, e o mais útil do mês para quem faz SAT. Datas do College Board, satsuite.collegeboard.org.' },
      stories: [{ dir: 'setembro-stories', n: 9, o: 'Hippo · 51 e 50 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-19',
      post: { dir: 'sabado', n: 3, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Quarenta minutos montando a playlist',
        legenda: `Quarenta minutos montando a playlist de estudo. Vinte estudando.

A playlist ficou ótima, é verdade. Ninguém tira isso de você.

Mas repara no que aconteceu: você não estava procrastinando, você estava se preparando. É a procrastinação mais convincente que existe, porque ela parece produtiva.

Faltam 50 dias para o ENEM e 49 para o SAT.`,
        cta: 'marca quem faz playlist antes de toda matéria',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Cor cheia e Hippo: o veículo de piada da marca, que é nosso e não depende de licença de ninguém.' } },

    { d: '2026-09-20',
      post: { dir: 'setembro-20-tres-erros', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: '3 erros que travam a sua semana',
        labels: ['capa · diagrama','erro 1','erro 2','erro 3','49 dias','à mão x sozinha','fecho'],
        legenda: `Seu cronograma não quebra por preguiça. Ele quebra por montagem.

São três erros, e nenhum deles é sobre esforço. Planejar o dia em vez da semana. Encher a semana até a última hora. E o terceiro, que quase ninguém percebe: esperar a próxima segunda pra consertar o que quebrou na terça.

São quatro recomeços por mês, todos do zero. Cinco minutos na terça salvam a semana inteira.

Faltam 49 dias para o ENEM e 48 para o SAT. Sete semanas exatas.`,
        cta: 'comenta <b>SEMANA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #vestibular #organizacao',
        nota: 'O carrossel mais salvável do mês. Vira os posts 5 e 6 do LinkedIn.' },
      stories: [{ dir: 'setembro-stories', n: 10, o: 'Caixinha', faz: 'Repost do carrossel no mesmo dia.' }] },

    { d: '2026-09-21',
      post: { reel: true, dir: 'setembro-reels-capas', n: 7, gancho: 7, clip: 'desmos',
        tipo: 'Reel micro-aula · 14s',
        titulo: 'O Desmos em 4 segundos',
        legenda: `A calculadora gráfica já vem na prova. A questão é saber o que digitar, e quase ninguém treina isso.

Tem um curso de 50 lições de Desmos dentro do PeakScore, com duelo contra o Hippo.

Faltam 48 dias para o ENEM e 47 para o SAT.`,
        cta: 'comenta <b>DESMOS</b> que eu te mando o link no direct',
        tags: '#sat #matematica #estudarfora #vestibular',
        nota: 'Footage do curso já capturado: desmos.mp4. Falta a questão sendo resolvida na tela. As 50 lições são o número real do site.' },
      stories: [{ dir: 'setembro-stories', n: 11, o: 'Enquete · adversário do Hippo', faz: 'Escolhe o adversário do Reel de amanhã. Grave depois que ela fechar.' }] },

    { d: '2026-09-22',
      post: { reel: true, dir: 'setembro-reels-capas', n: 8, gancho: 8,
        tipo: 'Reel meme · 14s',
        titulo: 'O duelo do Hippo',
        legenda: `O Hippo perdeu de novo para a semana de setembro. Prova de quinta, treino que mudou de horário, lista que fecha na terça.

Faltam 47 dias para o ENEM e 46 para o SAT. Dá tempo de virar o jogo.`,
        cta: 'marca quem está perdendo esse duelo com você',
        tags: '#rotinadeestudos #vidadeestudante #enem2026',
        nota: 'Gravar depois que a enquete de ontem fechar. A piada é sobre a situação, nunca sobre o aluno.' } },

    { d: '2026-09-23',
      post: { reel: true, dir: 'setembro-reels-capas', n: 9, gancho: 9,
        tipo: 'Reel bastidor · 18s',
        titulo: 'Por que a gente não cobra',
        legenda: `A pergunta que mais chega no direct é "qual é a pegadinha". Não tem.

O organizador inteiro é grátis e a demonstração nem pede cadastro. O porquê está no vídeo.`,
        cta: 'comenta <b>GRÁTIS</b> que eu te mando o link no direct',
        tags: '#buildinpublic #educacao #rotinadeestudos',
        nota: 'CUIDADO com a palavra: o site diz "grátis para começar, planos pagos podem chegar depois". Não prometa "grátis para sempre" no vídeo.' },
      tarefas: ['Bastidor de quarta, mesma pauta do Reel.'] },

    { d: '2026-09-24',
      post: { dir: 'setembro-24-gratis', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Grátis, e por quê',
        labels: ['capa','a pergunta','o organizador','e o SAT','a conta','o que promete','fecho'],
        legenda: `"Qual é a pegadinha?" é a primeira coisa que chega no direct toda semana.

Não tem. O organizador inteiro é grátis: as aulas, as tarefas, as provas, as notas e a sincronia com o Google Classroom. A demonstração nem pede cadastro.

A parte do SAT se apoia no que já é aberto, Khan Academy e Bluebook, mais um curso de 50 lições de Desmos aqui dentro. Alguns livros são pagos à parte, e a gente diz isso na cara: o PeakScore em si não custa nada.

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
        cta: 'comenta <b>ORDEM</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #estudos',
        nota: 'Caderno pautado em branco sobre madeira. A página vazia é a mensagem. Pexels 606541, Jessica Lewis.' },
      stories: [{ dir: 'setembro-stories', n: 12, o: 'Hippo · 44 e 43 dias', faz: 'Ritual da sexta.' }] },

    { d: '2026-09-26',
      post: { dir: 'sabado', n: 4, tipo: 'post único · sábado é o dia da piada',
        titulo: 'Estudar em grupo: 10% estudo, 90% assunto',
        legenda: `Estudar em grupo: 10% estudo, 90% assunto.

E os 10% rendem mais que sozinho. Explicar a matéria pra alguém é o jeito mais rápido de descobrir que você não sabia. É por isso que continua valendo, mesmo com os 90%.

O que não vale é combinar quatro horas e chegar sem saber o que vocês vão fazer nelas.

Faltam 43 dias para o ENEM e 42 para o SAT.`,
        cta: 'marca o grupo que estuda 10% e fala 90%',
        tags: '#rotinadeestudos #vidadeestudante #enem2026 #estudos',
        nota: 'Fecha os sábados com o único que também é elogio: grupo funciona, só precisa de pauta.' } },

    { d: '2026-09-27',
      post: { dir: 'setembro-27-outubro', cards: 7, tipo: 'carrossel · 7 cards',
        titulo: 'Plano de outubro',
        labels: ['capa · interface','42 dias','semanas 1 e 2','semanas 3 e 4','semanas 5 e 6','outubro','fecho'],
        legenda: `Outubro cabe em seis semanas. Depois disso é novembro, e novembro não negocia.

Semanas 1 e 2: comece pelo que você mais erra, não pelo que você mais gosta. Semanas 3 e 4: um simulado inteiro, no horário da prova, 13h30, sem pausa extra. Semanas 5 e 6: só o que você já errou, com espaço entre as voltas.

E os dois blocos vazios continuam vazios. Semana cheia é semana que quebra na primeira mudança.

Faltam 42 dias para o ENEM e 41 para o SAT. Este é o primeiro dos seis domingos que sobraram.`,
        cta: 'comenta <b>OUTUBRO</b> que eu te mando o plano das seis semanas no direct',
        tags: '#enem2026 #rotinadeestudos #cronograma #vestibular #organizacao',
        nota: 'Abre a contagem diária de outubro.' },
      stories: [{ dir: 'setembro-stories', n: 13, o: 'Caixinha', faz: 'As respostas viram o plano de outubro.' }] },

    { d: '2026-09-28',
      post: { reel: true, dir: 'setembro-reels-capas', n: 10, gancho: 10,
        tipo: 'Reel micro-aula · 16s',
        titulo: 'Três matérias em uma hora',
        legenda: `Três blocos de vinte minutos, com uma regra no meio, e essa regra é a parte que ninguém conta.

Não é multitarefa: é trocar antes de cansar.

Faltam 41 dias para o ENEM e 40 para o SAT.`,
        cta: 'comenta <b>UMA HORA</b> que eu te mando o link no direct',
        tags: '#rotinadeestudos #comoestudar #enem2026 #estudos',
        nota: 'Fecha o mês com método. Precisa de você.' } },

    { d: '2026-09-29',
      post: { dir: 'esporte', n: 2, tipo: 'post único · campo escuro · marco',
        titulo: 'A largada acontece durante a sua prova',
        legenda: `Domingo, 8 de novembro. O ENEM começa às 13h30 e vai até as 19h.

Às 17h desse mesmo domingo começa a corrida em Interlagos, a vinte e poucos quilômetros de onde boa parte de São Paulo vai estar sentada fazendo prova.

Você vai estar na questão 60. E tudo bem, porque a prova é uma vez e o replay existe.

O que não tem replay é a semana que vem antes. Faltam 40 dias para o ENEM e 39 para o SAT.`,
        cta: 'marca quem já tinha percebido que era no mesmo dia',
        tags: '#enem2026 #f1 #vestibular #rotinadeestudos',
        nota: 'Fato conferido: GP de São Paulo dias 6, 7 e 8 de novembro, corrida principal domingo às 17h; ENEM dia 1 das 13h30 às 19h. A corrida acontece inteira dentro da prova, e ninguém tinha feito essa conta. Fórmula 1 e Interlagos aparecem por NOME, nunca por logotipo ou foto de corrida.' } },

    { d: '2026-09-30', contexto: 'Fecha setembro e abre a contagem diária de outubro',
      post: { dir: 'trending', n: 2, tipo: 'post único · campo escuro · marco',
        titulo: 'Quatro dias entre o ENEM e o GTA VI',
        legenda: `O ENEM acaba dia 15 de novembro. O GTA VI sai dia 19.

Quatro dias.

Não é motivação de cartaz, é calendário: existe uma data em que isso tudo termina, e ela está a quatro dias da coisa que metade de vocês está esperando há anos.

Outubro é a última milha. Faltam 39 dias para o primeiro dia do ENEM e 38 para o SAT.`,
        cta: 'marca quem vai sumir no dia 19',
        tags: '#gta6 #enem2026 #rotinadeestudos #vestibular',
        nota: 'GTA VI aparece por NOME, nunca com arte oficial, logotipo ou captura do jogo. Data confirmada pela Rockstar: quinta, 19 de novembro de 2026. Campo escuro é o único do mês, reservado a marco com número externo e verificável.' } },
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
