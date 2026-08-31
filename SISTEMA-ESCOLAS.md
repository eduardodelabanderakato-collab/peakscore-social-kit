# O SISTEMA ESCOLA-A-ESCOLA · PeakScore
## Escrito 31/08/2026 sobre 6 frentes de pesquisa (149 buscas, fontes em pesquisa-tendencias.md e nos relatórios do workflow)

A meta do Eduardo: 1.000 usuários diários, rápido, começando pela escola
dele (Chapel) e espalhando pelo circuito de elite de SP, "que nem o
Facebook". Este documento é o sistema inteiro. O SISTEMA.md continua
valendo para a fábrica de conteúdo; este é a estratégia que a comanda.

---

## 0. A TESE (a matemática que muda tudo)

1.000 diários NÃO saem de arranhar 23 escolas. Saem de DOMINAR o circuito:

| fato | fonte |
|---|---|
| Saturn: escolas maduras chegam a 80-90% de penetração | Lenny's Newsletter (escrito pelo time) |
| Launch night: 15-25% da escola em 72h | Saturn, Darien/Ridgefield |
| Facebook: >50% de Harvard em ~1 mês ANTES de abrir Yale | The Facebook Effect |
| tbh: 40% de uma escola em 48h (direcional) | Synergy Labs |

Chapel ~650 alunos · SPHSL inteira (Chapel+Graded+St.Paul's+PACA+EAC)
~4.200 · lista completa (21 escolas) ~30-35 mil.

**1.000 DAU = SPHSL saturada (~50-60% de penetração média), ou Chapel
saturada + 3-4 escolas da onda 1-2 em 40%+.** É atingível SEM tocar no
cluster vestibular. A régua de avanço (lei do Facebook): só abre a escola
N+1 quando a escola N passa de 40% de penetração com D30 ≥ 25%. Escola
aberta e abandonada não reabre.

## 1. AS TRÊS LEIS (extraídas dos casos, valem para tudo)

1. **A unidade de crescimento é a escola, nunca o indivíduo.** Medir,
   saturar e comemorar POR ESCOLA.
2. **Escassez legítima transforma aluno em recrutador.** Fila por escola
   ("abrimos com 30 da sua turma") = FOMO honesto + dados de lançamento.
3. **Para menores, confiança de pais e direção é CANAL, não compliance.**
   A Saturn quase morreu por um post de pai; a Gas sangrou por um boato.
   Nenhum bug técnico: só confiança. O /seguranca é arma de marketing.

## 2. AS ONDAS (mapa de contágio, dados do recon)

**Onda 1 · o vestiário da SPHSL (meses 1-3):**
Chapel → fila decide a próxima entre PACA / St. Paul's / Graded / EAC.
Por quê: double round-robin = os alunos se encontram o ano todo.
SEM eventos-ponte no plano (ordem do Eduardo 31/8: "esquece little 8 e
gmun"): o contágio é do placar, do cartão que vaza e do boca a boca.
PACA é a mais dominável (370 alunos); Graded é o troféu (23k IG, The Talon).

**Onda 2 · vizinhos + IB novo (meses 3-6):**
British College e Escola Suíço-Brasileira (VIZINHAS da Chapel na Chácara
Flora: irmãos, caronas), depois St. Francis, St. Nicholas, Beacon,
Concept, Avenues (por último: enorme e com marketing próprio).
Vetor: MUN (BRAMUN/SPMUN) + Little 8.

**Onda 3 · cluster alemão (meses 6-9):**
ESB → Humboldt → Porto Seguro (4.280 alunos, o maior prêmio de volume).
Vetor: Jogos Internacionais Humboldt.

**Onda 4 · cluster vestibular (meses 9-12):**
Entrada por Santo Américo/São Luís (socialmente próximos das famílias do
circuito internacional), só então Band/Dante/Móbile/Vértice (~12k alunos).
EXIGE feature-fit: o app precisa falar "simulado/FUVEST", não só SAT.
Pueri Domus é ponte. Notre Dame (Campinas, confirmado) entra com a EAC.

## 3. A SEQUÊNCIA DE DOMINAÇÃO DE UMA ESCOLA (10 passos, cada um com gatilho)

1. **Instrumentar.** Campo escola (autodeclarado, OPCIONAL) + DAU por
   escola no /admin. *Gatilho: responder "quantos da Chapel abriram ontem?"
   em 1 clique.*
2. **Pré-carregar.** Calendário de provas/feriados da escola no app antes
   do lançamento. *Gatilho: 3 alunos de séries diferentes validam.*
3. **Núcleo de 8-12.** 1-2 por turma, os donos dos grupos de WhatsApp.
   Contrapartida PERMITIDA (ver §6): premium vitalício + título de
   fundador + carta para application. NUNCA dinheiro por indicação.
   *Gatilho: 10 usando diariamente por 1 semana e pedindo features.*
4. **Launch night.** Domingo à noite antes de semana de provas. O núcleo
   posta nos grupos de turma ao mesmo tempo, mensagem de UTILIDADE
   ("o calendário da semana de provas já está no app"), nunca hype.
   *Gatilho: ≥25% do high school em 1 semana.*
5. **Aha em 60 segundos.** Novo usuário conecta o Classroom e vê a semana
   montada. *Gatilho: retenção D7 ≥ 35% da coorte.*
6. **Ritual semanal.** Domingo 19h: a semana remontada + countdown.
   *Gatilho: DAU/WAU ≥ 50% na escola.*
7. **Blindar pais e direção (anti-Saturn).** Verificação real, zero
   localização, /seguranca, 1 conversa proativa com a coordenação usando
   o one-pager. *Gatilho: direção sabe e não objeta.*
8. **Artefato que vaza.** Cartão 9:16 compartilhável: é assim que alunos
   de OUTRAS escolas veem o app. *Gatilho: ≥20 shares orgânicos/semana +
   primeiros cadastros com e-mail de outra escola.*
9. **Fila da escola seguinte.** "Sua escola abre com 30 na fila + o
   calendário de provas de vocês." A demanda vem do placar e do cartão
   que vaza. *Gatilho: escola atual ≥50%, D30 ≥ 25%, próxima com 30+
   na fila e 1 embaixador identificado.*
10. **Industrializar.** Este checklist vira kit; dados pré-carregados
    antes de cada launch night; retro após cada escola.

## 4. AS PEÇAS DE PRODUTO (aprovadas pelo Eduardo em 31/8)

Todas na school-build, deploy só com aprovação explícita dele.
STATUS 31/8: as quatro CONSTRUÍDAS e commitadas (5430d2c + db0852a),
18 suites de teste verdes, smoke de runtime sem erro de console.
1. Campo escola + DAU por escola no /admin. FEITO.
2. Convite de turma por link (spec em SPEC-TURMA.md). FEITO (v1: só
   calendário de provas; sem chat, sem notas, sem descoberta).
3. Cartão compartilhável 9:16 com utm share_card. FEITO.
4. Fila por escola via ?escola= no link de cadastro. FEITO (v1 sem
   coleta de dado novo: a fila é o próprio cadastro, medida no /admin).
+ /seguranca trilingue construída (o one-pager dependia dela).

DUAS PORTAS QUE SÓ O EDUARDO ABRE:
a) Os deltas de privacy e terms (compartilhamento aluno-a-aluno) estão
   nos arquivos MARCADOS COMO RASCUNHO em 3 línguas: aprovar o texto.
b) Deploy: firebase deploy das rules ANTES do deploy do Vercel (ordem
   obrigatória da spec), e o teste de emulador pede Java na máquina.

## 5. CONTEÚDO (o que muda na fábrica)

- **A fórmula dos 4 passos continua** (manchete = verdade do aluno).
- **Pilar novo nº 1: o calendário da escola-alvo.** SAT/AP/IB/Early
  Action para o circuito internacional; ENEM segue para o nacional.
- **Trend-jacking DEMOVIDO de obrigação diária para oportunidade.**
  Event-jacking de prova fica (SAT, semana de provas, Early Action 1/11).
- **Formatos hiperlocais** (fazem aluno marcar colega sem pedir):
  bingo da semana de provas, "coisas que só quem estuda em escola
  americana entende", affirmations, ranking de lugar de estudo.
  NUNCA escrever "marca um amigo" (rebaixado pela Meta).
- **Bastidor SEM ROSTO** (decisão do Eduardo 31/8): mãos, telas, processo.
  Registrado: perde metade da força do modelo Cimed/Karla; compensar com
  frequência e autenticidade lo-fi.
- **Métrica de conteúdo: sends per reach** (o sinal nº 1 do algoritmo
  2026), não likes.
- **Collab posts** com contas estudantis (memes, grêmio, atletas) são a
  tática nº 1 para entrar no feed de uma escola: o post nasce dentro da
  audiência dela.
- **Close Friends "Chapel Insider"** para o núcleo.
- **Pago (opcional):** NUNCA para 13-17 (ECA Digital + sem geo fino).
  Se usar: pais 28-50, raio 5-8km da escola, R$ 30-50/dia, mensagem de
  organização (nunca nota). ~R$ 600 = 15-30 mil impressões hiperlocais.

## 6. AS LINHAS VERMELHAS (não-negociáveis, fontes no relatório legal)

1. Nada de ação de marca DENTRO do campus (ilegal: CONANDA 163 + STF).
2. Nunca cold-DM a menor; nunca pedir que embaixador colete contatos.
3. Anúncio a menor: só idade+localização, e nós optamos por NEM ISSO.
4. Zero perfilamento de aluno para marketing (ECA Digital art. 26, R$ 50 mi).
5. Foto de aluno só com termo escrito do responsável (finalidade+prazo+canal).
6. Perk RECORRENTE a menor por posts = risco de trabalho infantil.
   Modelo seguro: clube/beta com termo dos pais, SEM meta de recrutamento,
   SEM obrigação de postar. Se um dia houver embaixador que posta
   habitualmente: contrato com responsável + "Parceria paga" + alvará.
7. Post de embaixador sempre identificado como publicidade (Guia CONAR 2026).
8. Sem apelo imperativo a menor ("baixa agora ou fica pra trás").
9. Nome/logo/uniforme de escola: nome em texto editorial pode; logo,
   brasão e "parceiro da escola X" só com autorização escrita da direção.
10. Nada prometido além do site ("grátis para começar"; zero promessa de
    nota). Entrada institucional sempre por coordenação, com one-pager,
    /seguranca e o doc de mantenedora (pendência que virou bloqueante).

## 7. MEDIÇÃO (a planilha de segunda ganha 3 linhas)

- **DAU total** e **DAU por escola autodeclarada** (a métrica da meta).
- **Penetração da escola ativa** (DAU escola ÷ corpo discente estimado).
- **Retenção D7/D30 da coorte de launch night.**
- Funil por escola: `utm_content=<escola>` nas DMs desde já; share_card
  como medium próprio. Sem meta inventada no mês 1: linha de base primeiro.

## 8. O QUE A CIMED ENSINA (adaptado, com o veneno removido)

Fica: fundador como canal (na medida do bastidor sem rosto), bastidor
como criativo, release como "drop" com nome, collab com quem o aluno já
ama (grêmio, time), comunidade da escola N+1 ANTES de lançar nela,
velocidade de resposta como vantagem de pequeno, obsessão pela
"prateleira" (o grupo de WhatsApp da turma), pertencimento > utilidade.
Fora: ostentação, espetáculo interno, FOMO acadêmico (vira ansiedade e
fere no-outcome-claims), pressão de conversão sobre menor.

## 9. CRONOGRAMA DA CHAPEL (semana 1, detalhado em chapel-kit.md)

D1 recon interno do IG (contas estudantis, 10 alunos-ponte) · D2 carrossel
hiperlocal · D3 bingo + Add Yours · D4 collab #1 (memes/grêmio) · D5 Close
Friends · D6 utilidade compartilhável (calendário de provas do trimestre)
· D7 medir sends e dobrar. Launch night do app: primeiro domingo antes de
semana de provas APÓS o núcleo validar o passo 2.

## 10. HONESTIDADE FINAL

O que este sistema NÃO promete: viralidade nacional, 1.000 DAU em
semanas, ou crescer sem o produto (o loop de turma É o motor; conteúdo
é o combustível). O que ele promete: um caminho medível, legal e
replicável em que cada escola conquistada torna a próxima mais fácil,
até a bola de neve rolar sozinha. Facebook levou 4 meses para 34 escolas
partindo de UMA bem feita. Passo a passo, como o Eduardo pediu.
