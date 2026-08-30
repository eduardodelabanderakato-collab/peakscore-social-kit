# As três regras da assinatura PeakScore

Escritas em 30/08/2026, depois do teste dos três candidatos e da correção do
Eduardo: **a assinatura é o sistema, o Hippo é pontuação.**

A referência de nível é a marca da Claude, e a lição que ela ensina é
restrição. O mascote deles (Clawd, o caranguejo laranja em pixel art) quase
não aparece, e a própria Anthropic nunca explicou o personagem. Nos
carrosséis deles não tem mascote nenhum: o que identifica é o campo de cor,
o desenho de traço e a tipografia. É a raridade que dá força ao personagem.

O que reconhece uma marca antes de ler o nome é o que aparece em 100% das
peças. Aqui isso é tipografia, cor e ritmo de layout. Não é o mascote.

---

## O diagnóstico, medido

| problema | medida |
|---|---|
| tamanhos de manchete | **dez** diferentes no mesmo mês (148, 140, 116, 112, 104, 96, 88, 84, 78, mais o que o autofit inventa) |
| âncoras de logo | **duas** brigando: 80px no `.pad`, 52/60px no `.chip.abs` |
| tamanhos de Hippo | **três**: 150px, 300px, 560px |
| poses de Hippo | **onze** em 21 usos: quase nenhuma se repete |

Nada disso aparece num quadro isolado. Aparece no perfil, que é onde a
pessoa decide se já viu essa marca antes.

---

## Regra 1 · Quatro degraus de manchete, e só quatro

```
DISPLAY    132px   número de marco, manchete curta de impacto
CAPA       104px   capa de carrossel
MANCHETE    88px   o padrão de toda peça
LONGA       72px   quando a frase não cabe em 88
```

Começou com três degraus e o render provou que era grosso demais: a capa
saltava de 112 para 132 e voltava a quebrar com órfã na terceira linha.
Quatro degraus continua sendo regra, e é escala de verdade.

O autofit não encolhe mais de forma contínua: ele **desce a escada**.
Abaixo de 72 a frase é longa demais e o problema é da copy, não da arte. Um sistema com dez tamanhos não tem escala, tem improviso, e o
olho percebe isso mesmo sem saber nomear.

Corpo de texto e etiqueta ficam como estão: já são um tamanho só.

## Regra 2 · Uma âncora: 80px

Logo, etiqueta, manchete, rodapé e assinatura partem todos da mesma margem
de 80px. Em story, 80px nas laterais e a área segura do Instagram em cima e
embaixo (250px e 300px), que já existe.

Hoje o logo do carrossel está a 80px e o do story a 52/60px. São oito
pixels de diferença que ninguém enxerga sozinhos, mas que fazem o grid
"tremer" quando as peças aparecem juntas no perfil.

## Regra 3 · O Hippo: duas escalas, um canto, quatro poses

**Frequência:** rara, e continua rara. Ele NÃO vai em toda peça. Aparece
quando a peça tem emoção, no máximo duas vezes por semana.

**Escala:** duas, nunca uma terceira.
- `150px` quando acompanha o texto
- `300px` quando ele é o assunto (fechamento de carrossel, marco)

**Posição:** canto inferior direito, sempre.

**Elenco de quatro, com função:**

| pose | quando |
|---|---|
| `focused` | método, rotina, cronograma. O padrão. |
| `worried` | prazo apertado, inscrição fechando |
| `cheering` | fechamento, meta batida, fim de ciclo |
| `thinking` | pergunta ao leitor, enquete |

As outras catorze poses continuam no acervo para uso pontual, mas fora do
uso semanal: pose que aparece uma vez por mês não constrói memória.

**Onde ele nunca entra:** Setembro Amarelo e qualquer pauta sensível; card
que fala de erro do aluno (o Hippo nunca aponta o dedo); em cima do rosto de
uma foto.

---

## O que NÃO muda

Playfair Display na manchete, laranja ferrugem #C2540A onde o produto fala,
creme #F7F4EF de fundo, foto documental escura, o logo tile preto. Tudo isso
já funciona e já é reconhecível. Estas três regras existem só para que essas
escolhas se repitam igual, peça após peça, que é o que transforma estilo em
assinatura.
