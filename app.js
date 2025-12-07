const { useState } = React;

// 7 MATÉRIAS com resumos DIDÁTICOS
const subjects = [
  {
    id: "matematica",
    name: "Matemática",
    summary: `
Matemática é a ciência que estuda números, formas, padrões e relações lógicas.
No Ensino Fundamental, o foco está em construir o raciocínio lógico e a capacidade
de resolver problemas do dia a dia usando operações, divisibilidade, primos e múltiplos.

1) Números Naturais (ℕ)
São os números que usamos para contar: 0, 1, 2, 3, 4, 5...
  • Não existem números naturais negativos.
  • Não existem frações ou decimais em ℕ.
  • Servem para contar objetos, pessoas, dias, etc.

2) Operações fundamentais
  • Adição (+): juntar quantidades.
  • Subtração (−): tirar, comparar diferenças.
  • Multiplicação (×): soma repetida (ex.: 3 × 4 = 4 + 4 + 4 = 12).
  • Divisão (÷): repartir em partes iguais.

3) Divisibilidade
Um número é divisível por outro quando a divisão é exata (resto zero).
Critérios práticos:
  • Por 2: termina em 0, 2, 4, 6 ou 8 (é par).
  • Por 3: a soma dos algarismos é múltiplo de 3 (ex.: 123 → 1+2+3=6, divisível por 3).
  • Por 5: termina em 0 ou 5.
  • Por 9: a soma dos algarismos é múltiplo de 9.
  • Por 10: termina em 0.

4) Números Primos e Compostos
  • Primo: tem exatamente dois divisores (1 e ele mesmo). Ex.: 2, 3, 5, 7, 11, 13...
    → O único primo par é o 2.
  • Composto: tem mais de dois divisores. Ex.: 4, 6, 8, 9, 10...
  • O número 1 não é primo nem composto (convenção matemática).

5) Fatoração em Primos
Decompor um número em fatores primos é escrevê-lo como produto de primos.
Exemplo: 12 = 2 × 2 × 3 = 2² × 3.
Serve de base para calcular MDC e MMC.

6) MDC (Máximo Divisor Comum)
É o maior número que divide dois ou mais números ao mesmo tempo.
  • Usado para: dividir algo em partes iguais sem sobras, simplificar frações.
  • Exemplo: MDC(12, 18) = 6 (o maior divisor comum de 12 e 18).

7) MMC (Mínimo Múltiplo Comum)
É o menor múltiplo comum (diferente de zero) entre dois ou mais números.
  • Usado para: sincronizar eventos que se repetem, somar frações com denominadores diferentes.
  • Exemplo: MMC(4, 6) = 12 (o menor múltiplo que 4 e 6 têm em comum).

8) Sistemas de Numeração
  • Decimal: base 10, usa algarismos de 0 a 9. É o sistema que usamos no dia a dia.
  • Romano: usa letras (I, V, X, L, C, D, M). Exemplo: XIV = 14.
    Regras: se uma letra menor vem antes de uma maior, subtrai (IV = 4); se vem depois, soma (VI = 6).

Resumindo:
A Matemática do Fundamental constrói a base para tudo: álgebra, geometria, estatística.
Dominar operações, divisibilidade, primos, MDC e MMC é essencial para resolver problemas
mais complexos no futuro e entender situações práticas, como dividir contas, calcular descontos,
organizar horários e muito mais.
    `.trim(),
    flashcards: [
      {
        front: "O que são números naturais?",
        back: "São os números usados para contar: ℕ = {0, 1, 2, 3, 4, ...}",
      },
      {
        front: "Critério de divisibilidade por 2",
        back: "Um número é divisível por 2 quando termina em 0, 2, 4, 6 ou 8.",
      },
      {
        front: "Critério de divisibilidade por 3",
        back: "É divisível por 3 quando a soma dos algarismos é múltiplo de 3.",
      },
      {
        front: "O que é um número primo?",
        back: "Número maior que 1 que só tem dois divisores: 1 e ele mesmo.",
      },
      {
        front: "Para que serve o MMC?",
        back: "Para sincronizar repetições, como encontrar um período comum entre dois ciclos.",
      },
      {
        front: "Para que serve o MDC?",
        back: "Para dividir algo em partes iguais, sem sobras, usando o maior divisor possível.",
      },
      {
        front: "Fatoração em primos",
        back: "Decompor um número em produto de primos. Ex.: 12 = 2² × 3.",
      },
      {
        front: "Sistema de numeração romano",
        back: "Usa letras (I, V, X, L, C, D, M). Ex.: XIV = 14.",
      },
      {
        front: "Número composto",
        back: "Número que tem mais de dois divisores. Ex.: 4, 6, 8, 9.",
      },
      {
        front: "Multiplicação como soma repetida",
        back: "3 × 4 significa somar 4 três vezes: 4 + 4 + 4 = 12.",
      },
      {
        front: "Divisão exata",
        back: "Quando o resto é zero. Ex.: 15 ÷ 3 = 5 (resto 0).",
      },
      {
        front: "Critério de divisibilidade por 5",
        back: "Termina em 0 ou 5.",
      },
    ],
    questions: [
      {
        question: "Qual dos números abaixo é um número natural?",
        options: ["-3", "0,5", "0", "-1/2"],
        correctIndex: 2,
        explanation: "Os números naturais são 0, 1, 2, 3... O único natural da lista é 0.",
      },
      {
        question: "Um número termina em 8. Ele é, com certeza:",
        options: [
          "Divisível por 3",
          "Divisível por 5",
          "Divisível por 2",
          "Número primo",
        ],
        correctIndex: 2,
        explanation: "Se termina em 8, é par, portanto divisível por 2.",
      },
      {
        question: "Qual é o menor número primo?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2,
        explanation: "2 é o menor número primo, pois tem apenas dois divisores: 1 e 2.",
      },
      {
        question: "O número 45 é divisível por 3?",
        options: ["Sim, porque 4+5=9", "Não, porque é ímpar", "Não, só por 5", "Não, é primo"],
        correctIndex: 0,
        explanation: "4 + 5 = 9 e 9 é múltiplo de 3, logo 45 é divisível por 3.",
      },
      {
        question: "Para dividir igualmente 24 e 36 em partes inteiras e iguais, usamos:",
        options: ["MMC", "MDC", "Soma simples", "Subtração repetida"],
        correctIndex: 1,
        explanation: "Para dividir em partes iguais, usamos o MDC (máximo divisor comum).",
      },
      {
        question: "12 em algarismos romanos é:",
        options: ["XI", "XII", "X", "XIII"],
        correctIndex: 1,
        explanation: "XII = 10 + 1 + 1 = 12.",
      },
      {
        question: "Qual número é composto?",
        options: ["2", "3", "5", "9"],
        correctIndex: 3,
        explanation: "9 tem divisores 1, 3 e 9, logo é composto.",
      },
      {
        question: "MMC(4, 6) é:",
        options: ["2", "4", "12", "24"],
        correctIndex: 2,
        explanation: "O menor múltiplo comum de 4 e 6 é 12.",
      },
      {
        question: "Fatoração de 18 em primos:",
        options: ["2 × 9", "2 × 3²", "3 × 6", "18 × 1"],
        correctIndex: 1,
        explanation: "18 = 2 × 3 × 3 = 2 × 3².",
      },
      {
        question: "Critério de divisibilidade por 9:",
        options: [
          "Termina em 9",
          "Soma dos algarismos é múltiplo de 9",
          "É ímpar",
          "Termina em 0",
        ],
        correctIndex: 1,
        explanation: "Se a soma dos algarismos é múltiplo de 9, o número é divisível por 9.",
      },
    ],
  },
  {
    id: "portugues",
    name: "Português",
    summary: `
Língua Portuguesa é a disciplina que estuda a nossa língua: como ler, escrever, interpretar
e se comunicar de forma clara e correta. No Fundamental, o foco está em gramática básica,
leitura de textos e produção escrita.

1) Para que serve estudar Português?
  • Ler e entender textos de todos os tipos (notícias, histórias, instruções, poemas).
  • Escrever de forma organizada e correta.
  • Falar bem em situações formais (apresentações, entrevistas).
  • Entender as regras da língua para não cometer erros que prejudicam a comunicação.

2) Classes de palavras (classes gramaticais)
São os "tipos" de palavras que usamos para construir frases. As principais são:

  • Substantivo: nomeia seres, lugares, objetos, sentimentos.
    Ex.: casa, amor, João, Brasil.
  • Artigo: acompanha o substantivo, indicando gênero e número.
    Ex.: o, a, os, as, um, uma.
  • Adjetivo: caracteriza o substantivo, dando qualidade ou estado.
    Ex.: bonito, grande, feliz.
  • Verbo: indica ação, estado ou fenômeno da natureza.
    Ex.: correr, ser, chover.
  • Pronome: substitui ou acompanha o substantivo.
    Ex.: ele, ela, meu, nosso.
  • Preposição: liga palavras, indicando relação.
    Ex.: de, em, para, com.
  • Advérbio: modifica verbo, adjetivo ou outro advérbio, indicando circunstância.
    Ex.: aqui, muito, rapidamente.
  • Conjunção: liga orações ou palavras de mesma função.
    Ex.: e, mas, porque, ou.

3) Estrutura da frase: sujeito e predicado
Toda oração tem duas partes principais:
  • Sujeito: de quem ou do que se fala.
    Ex.: "O menino correu." → Sujeito: O menino.
  • Predicado: o que se diz sobre o sujeito.
    Ex.: "O menino correu." → Predicado: correu.

4) Ortografia e acentuação
  • Ortografia: forma correta de escrever as palavras (ex.: "exceção", não "excessão").
  • Acentuação: marca a sílaba tônica e diferencia palavras.
    Ex.: "avó" (com acento) ≠ "avo" (sem acento, significa "antepassado").

5) Pontuação básica
  • Ponto final (.): encerra uma frase declarativa.
  • Vírgula (,): separa itens de uma lista, isola expressões, organiza ideias.
  • Ponto de interrogação (?): indica pergunta.
  • Ponto de exclamação (!): indica emoção, surpresa, ordem.
  • Dois-pontos (:): introduz uma explicação, lista ou fala.

6) Concordância
  • Nominal: adjetivo concorda com o substantivo em gênero e número.
    Ex.: "menino bonito" / "meninas bonitas".
  • Verbal: verbo concorda com o sujeito em número e pessoa.
    Ex.: "Ele corre" / "Eles correm".

7) Leitura e interpretação de textos
Ler não é só decodificar palavras, é entender:
  • O que o texto diz (informação explícita).
  • O que o texto sugere (informação implícita, nas entrelinhas).
  • A intenção do autor (informar, convencer, emocionar, divertir).

Resumindo:
Dominar Português é essencial para todas as outras matérias e para a vida.
Quem lê bem, escreve bem e fala bem tem mais chances de sucesso na escola,
no trabalho e nas relações sociais. A gramática não é "decoreba": é um conjunto
de regras que organiza a comunicação e evita mal-entendidos.
    `.trim(),
    flashcards: [
      {
        front: "O que é substantivo?",
        back: "É a palavra que nomeia seres, lugares, objetos, sentimentos (ex.: casa, amor).",
      },
      {
        front: "Função do artigo",
        back: "Acompanhar o substantivo, indicando gênero e número (ex.: o, a, os, as).",
      },
      {
        front: "Verbo",
        back: "Palavra que indica ação, estado ou fenômeno da natureza (ex.: correr, ser, chover).",
      },
      {
        front: "Frase com sujeito e predicado",
        back: "Toda oração tem um sujeito (de quem se fala) e um predicado (o que se diz dele).",
      },
      {
        front: "Acentuação",
        back: "Serve para marcar a sílaba tônica e diferenças de sentido (ex.: avó x avo).",
      },
      {
        front: "Pontuação básica",
        back: "Vírgula organiza listas e ideias; ponto final indica término de uma frase.",
      },
      {
        front: "Adjetivo",
        back: "Caracteriza o substantivo. Ex.: bonito, grande, feliz.",
      },
      {
        front: "Pronome",
        back: "Substitui ou acompanha o substantivo. Ex.: ele, meu, nosso.",
      },
      {
        front: "Preposição",
        back: "Liga palavras indicando relação. Ex.: de, em, para, com.",
      },
      {
        front: "Concordância verbal",
        back: "Verbo concorda com o sujeito. Ex.: Ele corre / Eles correm.",
      },
      {
        front: "Concordância nominal",
        back: "Adjetivo concorda com substantivo. Ex.: menino bonito / meninas bonitas.",
      },
      {
        front: "Interpretação de texto",
        back: "Entender o que o texto diz, sugere e qual a intenção do autor.",
      },
    ],
    questions: [
      {
        question: "Em "O menino correu.", a palavra "menino" é:",
        options: ["Verbo", "Adjetivo", "Substantivo", "Artigo"],
        correctIndex: 2,
        explanation: ""Menino" é um ser, portanto é substantivo.",
      },
      {
        question: "Em "As meninas estudam.", "As" é:",
        options: ["Preposição", "Artigo definido", "Pronome", "Substantivo"],
        correctIndex: 1,
        explanation: ""As" é artigo definido feminino plural.",
      },
      {
        question: "Qual opção apresenta um verbo?",
        options: ["Feliz", "Casa", "Comer", "Bonito"],
        correctIndex: 2,
        explanation: ""Comer" é ação, logo é um verbo.",
      },
      {
        question: "A função principal do ponto final é:",
        options: [
          "Marcar surpresa",
          "Indicar pergunta",
          "Separar itens de uma lista",
          "Indicar término de uma frase",
        ],
        correctIndex: 3,
        explanation: "O ponto final fecha uma frase declarativa.",
      },
      {
        question: "Em "Os livros novos chegaram.", o sujeito é:",
        options: [
          "Chegaram",
          "Novos",
          "Os livros novos",
          "Livros",
        ],
        correctIndex: 2,
        explanation: "O sujeito completo é "Os livros novos".",
      },
      {
        question: "Qual palavra é um adjetivo?",
        options: ["Correr", "Bonito", "Mesa", "Ele"],
        correctIndex: 1,
        explanation: ""Bonito" caracteriza, logo é adjetivo.",
      },
      {
        question: "Concordância correta:",
        options: [
          "As menina bonita",
          "Os menino bonito",
          "As meninas bonitas",
          "Os meninas bonitos",
        ],
        correctIndex: 2,
        explanation: "Adjetivo concorda em gênero e número: meninas (fem. plural) → bonitas.",
      },
      {
        question: "Qual é uma preposição?",
        options: ["Correr", "De", "Bonito", "Casa"],
        correctIndex: 1,
        explanation: ""De" liga palavras, é preposição.",
      },
      {
        question: "Em "Ele corre rápido.", "rápido" é:",
        options: ["Substantivo", "Verbo", "Advérbio", "Artigo"],
        correctIndex: 2,
        explanation: ""Rápido" modifica o verbo "corre", logo é advérbio.",
      },
      {
        question: "Vírgula serve para:",
        options: [
          "Terminar frases",
          "Separar itens e organizar ideias",
          "Indicar pergunta",
          "Marcar emoção",
        ],
        correctIndex: 1,
        explanation: "Vírgula separa elementos e organiza a estrutura da frase.",
      },
    ],
  },
  {
    id: "historia",
    name: "História",
    summary: `
História é a ciência que estuda o passado da humanidade: como as sociedades se formaram,
como viviam, o que faziam, quais eram seus conflitos e conquistas. Estudar História é
entender de onde viemos e por que o mundo é como é hoje.

1) Para que serve estudar História?
  • Entender o presente: muitos problemas e conquistas de hoje têm raízes no passado.
  • Não repetir erros: conhecer guerras, injustiças e crises ajuda a evitar que se repitam.
  • Valorizar conquistas: direitos, liberdades e avanços foram conquistados com luta.
  • Formar identidade: conhecer a história do seu povo ajuda a entender quem você é.

2) Expansão Marítima Europeia (séculos XV e XVI)
Por que aconteceu?
  • Busca de novas rotas para as Índias (especiarias eram caras e valiosas).
  • Avanços tecnológicos: bússola, astrolábio, caravelas.
  • Desejo de riquezas, terras e expansão do cristianismo.

Principais navegações:
  • Portugal: contornou a África, chegou às Índias (Vasco da Gama, 1498) e ao Brasil (Cabral, 1500).
  • Espanha: Colombo chegou à América (1492), pensando ser as Índias.

3) Colonização do Brasil
  • Portuguesa (1500–1822): exploração de pau-brasil, depois cana-de-açúcar, ouro, café.
    Sistema de capitanias hereditárias, depois governos-gerais.
  • Francesa: tentativas no Rio de Janeiro (França Antártica) e Maranhão (França Equinocial), expulsas.
  • Holandesa: ocupou o Nordeste (1630–1654), especialmente Pernambuco, para controlar o açúcar.
  • Inglesa e espanhola: não colonizaram o Brasil, mas disputaram outras áreas da América.

4) Sistema Colonial
Relação entre metrópole (país colonizador) e colônia (território dominado):
  • Pacto Colonial: a colônia só podia comerciar com a metrópole.
  • Exploração: a colônia fornecia matérias-primas baratas; a metrópole vendia produtos caros.
  • Mão de obra escravizada: indígenas (no início) e africanos (principalmente).

5) Ciclos Econômicos no Brasil Colonial
  • Pau-brasil (1500–1530): extração da madeira para tingir tecidos na Europa.
  • Açúcar (1530–1700): engenhos no Nordeste, uso massivo de escravizados africanos.
  • Ouro e diamantes (1700–1800): Minas Gerais, Goiás, Mato Grosso. Gerou cidades, impostos pesados.
  • Gado: interior do Nordeste e Sul, fornecia carne, couro e transporte.
  • Tabaco: Bahia, usado também como moeda de troca no tráfico de escravizados.

6) Bandeirismo
Expedições que saíam de São Paulo para o interior:
  • Apresamento: captura de indígenas para escravização.
  • Prospecção: busca de ouro e pedras preciosas.
  • Sertanismo de contrato: combate a quilombos e indígenas rebeldes.
Consequências: expansão territorial, mas também violência e destruição de povos indígenas.

7) Revoltas Coloniais
  • Inconfidência Mineira (1789): elite de Minas Gerais queria independência, revolta contra impostos.
    Líder: Tiradentes (executado).
  • Conjuração Baiana (1798): participação popular, influência de ideias de liberdade e igualdade.
  • Outras: Beckman, Emboabas, Guerra dos Mascates.

8) Segundo Reinado (1840–1889)
  • Imperador: Dom Pedro II.
  • Período de relativa estabilidade, modernização (ferrovias, telégrafo).
  • Guerras: Guerra do Paraguai (1864–1870).
  • Crise: pressão pela abolição da escravidão, insatisfação de militares e republicanos.

9) Abolição da Escravidão
  • Lei Áurea (1888): assinada pela princesa Isabel, aboliu oficialmente a escravidão.
  • Processo longo: Lei do Ventre Livre (1871), Lei dos Sexagenários (1885).
  • Problema: ex-escravizados não receberam terras, educação ou indenização, gerando desigualdade até hoje.

10) Proclamação da República (1889)
  • Golpe militar liderado pelo Marechal Deodoro da Fonseca.
  • Fim da monarquia, início do regime republicano.
  • Causas: crise da monarquia, abolição (que desagradou fazendeiros), influência de ideias republicanas.

11) Governos Militares (1964–1985)
  • Ditadura militar: censura, repressão, tortura, falta de liberdade.
  • Crescimento econômico nos anos 1970 ("milagre econômico"), mas com aumento da dívida e desigualdade.
  • Redemocratização: movimento popular (Diretas Já) pressionou pela volta da democracia.

Resumindo:
A História do Brasil é marcada por exploração colonial, escravidão, lutas por independência
e liberdade, e a construção lenta e difícil de uma sociedade mais justa. Conhecer esse
passado é essencial para entender os desafios do presente e lutar por um futuro melhor.
    `.trim(),
    flashcards: [
      {
        front: "O que foi a Expansão Marítima?",
        back: "Período em que reinos europeus buscaram novas rotas comerciais por mar (séc. XV-XVI).",
      },
      {
        front: "Principal produto do ciclo do açúcar",
        back: "A cana-de-açúcar, cultivada em engenhos, com uso de mão de obra escravizada.",
      },
      {
        front: "Bandeirantes",
        back: "Exploradores que adentravam o interior em busca de riquezas e escravização de indígenas.",
      },
      {
        front: "Abolição da escravidão no Brasil",
        back: "Ocorreu em 1888, com a Lei Áurea, assinada pela princesa Isabel.",
      },
      {
        front: "Proclamação da República",
        back: "Aconteceu em 1889, com a queda da monarquia e início do regime republicano.",
      },
      {
        front: "Sistema colonial",
        back: "Conjunto de regras que mantinham a colônia dependente e explorada pela metrópole.",
      },
      {
        front: "Pacto Colonial",
        back: "A colônia só podia comerciar com a metrópole, gerando lucro para esta.",
      },
      {
        front: "Inconfidência Mineira",
        back: "Revolta de 1789 em Minas Gerais contra impostos. Líder: Tiradentes.",
      },
      {
        front: "Segundo Reinado",
        back: "Governo de Dom Pedro II (1840–1889), período de modernização e estabilidade.",
      },
      {
        front: "Ditadura Militar no Brasil",
        back: "Regime autoritário de 1964 a 1985, com censura e repressão.",
      },
      {
        front: "Ciclo do Ouro",
        back: "Exploração de ouro em Minas Gerais (séc. XVIII), gerou cidades e impostos pesados.",
      },
      {
        front: "Lei Áurea",
        back: "Lei de 1888 que aboliu a escravidão no Brasil.",
      },
    ],
    questions: [
      {
        question: "Um dos objetivos da Expansão Marítima europeia foi:",
        options: [
          "Conhecer novas culturas apenas",
          "Buscar novas rotas comerciais para as Índias",
          "Acabar com o comércio",
          "Fundar a ONU",
        ],
        correctIndex: 1,
        explanation: "Os europeus queriam novas rotas para o comércio de especiarias.",
      },
      {
        question: "O ciclo do açúcar no Brasil colonial usou principalmente:",
        options: [
          "Mão de obra assalariada",
          "Mão de obra escravizada",
          "Robôs",
          "Trabalho voluntário",
        ],
        correctIndex: 1,
        explanation: "A economia açucareira baseava-se na escravidão, especialmente de africanos.",
      },
      {
        question: "A Lei Áurea foi responsável por:",
        options: [
          "Iniciar a colonização",
          "Proibir o tráfico de drogas",
          "Abolir a escravidão no Brasil",
          "Declarar guerra a Portugal",
        ],
        correctIndex: 2,
        explanation: "A Lei Áurea, de 1888, aboliu oficialmente a escravidão no país.",
      },
      {
        question: "A Proclamação da República ocorreu em:",
        options: ["1822", "1888", "1889", "1500"],
        correctIndex: 2,
        explanation: "Em 1889 a monarquia foi derrubada e instaurou-se a República.",
      },
      {
        question: "A relação entre metrópole e colônia no sistema colonial era:",
        options: [
          "De igualdade econômica",
          "De exploração da colônia pela metrópole",
          "De ajuda mútua",
          "Sem trocas comerciais",
        ],
        correctIndex: 1,
        explanation: "A metrópole explorava economicamente a colônia.",
      },
      {
        question: "Tiradentes foi líder de qual revolta?",
        options: [
          "Conjuração Baiana",
          "Inconfidência Mineira",
          "Guerra dos Emboabas",
          "Revolta da Vacina",
        ],
        correctIndex: 1,
        explanation: "Tiradentes liderou a Inconfidência Mineira (1789).",
      },
      {
        question: "O Segundo Reinado foi governado por:",
        options: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca"],
        correctIndex: 1,
        explanation: "Dom Pedro II governou de 1840 a 1889.",
      },
      {
        question: "A Ditadura Militar no Brasil durou de:",
        options: ["1930 a 1945", "1964 a 1985", "1889 a 1930", "1500 a 1822"],
        correctIndex: 1,
        explanation: "O regime militar durou de 1964 a 1985.",
      },
      {
        question: "O ciclo do ouro ocorreu principalmente em:",
        options: ["Bahia", "Minas Gerais", "Amazonas", "Rio Grande do Sul"],
        correctIndex: 1,
        explanation: "Minas Gerais foi o principal centro de extração de ouro no século XVIII.",
      },
      {
        question: "Pacto Colonial significa:",
        options: [
          "Colônia livre para comerciar com qualquer país",
          "Colônia só podia comerciar com a metrópole",
          "Metrópole pagava bem à colônia",
          "Não havia comércio",
        ],
        correctIndex: 1,
        explanation: "O Pacto Colonial obrigava a colônia a comerciar exclusivamente com a metrópole.",
      },
    ],
  },
  {
    id: "geografia",
    name: "Geografia",
    summary: `
Geografia é a ciência que estuda o espaço geográfico: a superfície da Terra, suas paisagens,
a distribuição da população, os recursos naturais e a relação entre sociedade e natureza.

1) Para que serve estudar Geografia?
  • Entender onde estamos: localização, orientação, mapas.
  • Compreender fenômenos naturais: terremotos, vulcões, clima, relevo.
  • Analisar a ação humana: como transformamos e ocupamos o espaço.
  • Pensar em sustentabilidade: uso consciente dos recursos naturais.

2) Origem do Universo e Sistema Solar
  • Big Bang: teoria mais aceita sobre a origem do Universo (há cerca de 13,8 bilhões de anos).
  • Sistema Solar: formado há cerca de 4,6 bilhões de anos, com o Sol no centro e 8 planetas orbitando.
  • Terra: terceiro planeta a partir do Sol, único com condições conhecidas para vida.

3) Movimentos da Terra
  • Rotação: movimento em torno do próprio eixo, dura cerca de 24 horas.
    → Consequência: alternância entre dia e noite.
  • Translação: movimento em torno do Sol, dura cerca de 365 dias.
    → Consequência: estações do ano (primavera, verão, outono, inverno).

4) Fusos Horários
  • A Terra foi dividida em 24 fusos horários (24 horas do dia).
  • Cada fuso corresponde a aproximadamente 15° de longitude.
  • Quando você viaja para leste, adianta o relógio; para oeste, atrasa.
  • Linha Internacional da Data: no Oceano Pacífico, marca a mudança de dia.

5) Zonas Térmicas da Terra
Divididas conforme a incidência de luz solar:
  • Zona Tropical (entre os trópicos de Câncer e Capricórnio): temperaturas altas o ano todo.
  • Zonas Temperadas (entre os trópicos e os círculos polares): estações bem definidas.
  • Zonas Polares (próximas aos polos): temperaturas muito baixas, gelo permanente.

6) Cartografia: leitura de mapas
  • Escala: relação entre o tamanho no mapa e o tamanho real.
    Ex.: escala 1:100.000 significa que 1 cm no mapa = 100.000 cm (1 km) na realidade.
  • Coordenadas geográficas: latitude (paralelos) e longitude (meridianos) localizam qualquer ponto na Terra.
  • Legenda: explica os símbolos usados no mapa.
  • Rosa dos ventos: indica os pontos cardeais (N, S, L, O) e colaterais (NE, NO, SE, SO).

7) Paisagens Naturais e Modificadas
  • Paisagem natural: pouco ou nada alterada pelo ser humano (ex.: floresta amazônica, deserto).
  • Paisagem modificada (ou humanizada): transformada pela ação humana (ex.: cidades, plantações, estradas).

8) População
  • Distribuição desigual: há áreas muito povoadas (cidades, litorais) e áreas vazias (desertos, florestas densas).
  • Fatores que atraem população: clima ameno, água, solo fértil, oportunidades de trabalho.
  • Fatores que afastam: clima extremo, falta de recursos, conflitos.

9) Relação Sociedade-Natureza
  • O ser humano transforma a natureza para sobreviver e se desenvolver.
  • Problemas: desmatamento, poluição, esgotamento de recursos, mudanças climáticas.
  • Soluções: desenvolvimento sustentável, preservação de áreas naturais, uso consciente de recursos.

Resumindo:
Geografia nos ajuda a entender o planeta em que vivemos: sua formação, seus movimentos,
suas paisagens e como nós, seres humanos, nos relacionamos com ele. Estudar Geografia
é essencial para tomar decisões conscientes sobre o uso do espaço e dos recursos naturais,
pensando no presente e no futuro.
    `.trim(),
    flashcards: [
      {
        front: "Rotação da Terra",
        back: "Movimento em torno do próprio eixo (~24h), responsável pela alternância de dia e noite.",
      },
      {
        front: "Translação da Terra",
        back: "Movimento em torno do Sol (~365 dias), responsável pelas estações do ano.",
      },
      {
        front: "Fuso horário",
        back: "Cada faixa de ~15° de longitude que corresponde a 1 hora.",
      },
      {
        front: "Zona tropical",
        back: "Região entre os trópicos, com temperaturas altas na maior parte do ano.",
      },
      {
        front: "Escala cartográfica",
        back: "Relação entre o tamanho no mapa e o tamanho real. Ex.: 1:100.000.",
      },
      {
        front: "Paisagem natural x modificada",
        back: "Natural é pouco alterada; modificada tem intensa ação humana.",
      },
      {
        front: "Big Bang",
        back: "Teoria sobre a origem do Universo, há cerca de 13,8 bilhões de anos.",
      },
      {
        front: "Sistema Solar",
        back: "Sol no centro, 8 planetas orbitando. Terra é o 3º planeta.",
      },
      {
        front: "Coordenadas geográficas",
        back: "Latitude (paralelos) e longitude (meridianos) localizam pontos na Terra.",
      },
      {
        front: "Zonas temperadas",
        back: "Entre trópicos e círculos polares, com estações bem definidas.",
      },
      {
        front: "Zonas polares",
        back: "Próximas aos polos, temperaturas muito baixas, gelo permanente.",
      },
      {
        front: "Rosa dos ventos",
        back: "Indica pontos cardeais (N, S, L, O) e colaterais (NE, NO, SE, SO).",
      },
    ],
    questions: [
      {
        question: "O movimento de rotação da Terra é responsável principalmente por:",
        options: [
          "Estações do ano",
          "Dia e noite",
          "Marés",
          "Formação de montanhas",
        ],
        correctIndex: 1,
        explanation: "A rotação causa a alternância entre dia e noite.",
      },
      {
        question: "O movimento de translação da Terra é:",
        options: [
          "Em torno do próprio eixo",
          "Em torno da Lua",
          "Em torno do Sol",
          "Estacionário",
        ],
        correctIndex: 2,
        explanation: "Translação é o movimento da Terra em torno do Sol.",
      },
      {
        question: "A cada fuso horário, em média, corresponde uma diferença de:",
        options: ["10 minutos", "30 minutos", "1 hora", "12 horas"],
        correctIndex: 2,
        explanation: "Cada ~15° de longitude correspondem a 1 hora.",
      },
      {
        question: "A zona tropical localiza-se:",
        options: [
          "Entre os círculos polares",
          "Entre o Trópico de Câncer e o Trópico de Capricórnio",
          "Apenas no hemisfério norte",
          "Apenas no hemisfério sul",
        ],
        correctIndex: 1,
        explanation: "A zona tropical fica entre os dois trópicos, envolvendo o Equador.",
      },
      {
        question: "Uma paisagem altamente urbanizada é exemplo de:",
        options: [
          "Paisagem exclusivamente natural",
          "Paisagem sem ação humana",
          "Paisagem modificada pelo homem",
          "Paisagem desabitada",
        ],
        correctIndex: 2,
        explanation: "Cidades são paisagens fortemente modificadas pela ação humana.",
      },
      {
        question: "Escala 1:50.000 significa:",
        options: [
          "1 cm no mapa = 50.000 cm na realidade",
          "1 km no mapa = 50 km na realidade",
          "Não tem relação com a realidade",
          "1 m no mapa = 50 m na realidade",
        ],
        correctIndex: 0,
        explanation: "Escala indica a proporção: 1 cm no mapa = 50.000 cm (500 m) no real.",
      },
      {
        question: "A teoria do Big Bang explica:",
        options: [
          "A origem da vida na Terra",
          "A origem do Universo",
          "A formação dos continentes",
          "O movimento das marés",
        ],
        correctIndex: 1,
        explanation: "Big Bang é a teoria sobre a origem do Universo.",
      },
      {
        question: "Quantos planetas tem o Sistema Solar?",
        options: ["7", "8", "9", "10"],
        correctIndex: 1,
        explanation: "O Sistema Solar tem 8 planetas (Plutão foi reclassificado como planeta anão).",
      },
      {
        question: "Latitude e longitude são:",
        options: [
          "Tipos de clima",
          "Coordenadas geográficas",
          "Movimentos da Terra",
          "Tipos de relevo",
        ],
        correctIndex: 1,
        explanation: "Latitude e longitude são coordenadas que localizam pontos na Terra.",
      },
      {
        question: "Zonas polares têm:",
        options: [
          "Temperaturas altas o ano todo",
          "Estações bem definidas",
          "Temperaturas muito baixas e gelo permanente",
          "Clima tropical",
        ],
        correctIndex: 2,
        explanation: "Zonas polares são extremamente frias, com gelo permanente.",
      },
    ],
  },
  {
    id: "ciencias",
    name: "Ciências",
    summary: `
Ciências Naturais (ou apenas Ciências) é a área que estuda a natureza, os seres vivos,
o corpo humano e os fenômenos físicos e químicos. No Fundamental, o foco está em Biologia,
Física e Química básicas, de forma integrada e prática.

1) Para que serve estudar Ciências?
  • Entender como funciona o corpo humano e como cuidar da saúde.
  • Compreender os seres vivos e o meio ambiente.
  • Explicar fenômenos do dia a dia (por que chove, por que objetos caem, como funciona a eletricidade).
  • Desenvolver pensamento científico: observar, questionar, testar hipóteses.

2) Células e Níveis de Organização
  • Célula: menor unidade viva, capaz de realizar funções vitais (nutrição, reprodução, etc.).
    → Tipos: procariontes (sem núcleo, ex.: bactérias) e eucariontes (com núcleo, ex.: células humanas).
  • Níveis de organização (do menor para o maior):
    Célula → Tecido → Órgão → Sistema → Organismo.
    Ex.: células musculares → tecido muscular → coração (órgão) → sistema circulatório → corpo humano.

3) Ecossistemas e Ecologia
  • Ecossistema: conjunto de seres vivos + ambiente físico (água, solo, ar, luz) + interações entre eles.
  • Cadeia alimentar: sequência de quem come quem.
    → Produtores (plantas, algas): produzem seu próprio alimento por fotossíntese.
    → Consumidores (animais): herbívoros, carnívoros, onívoros.
    → Decompositores (fungos, bactérias): decompõem matéria orgânica, reciclando nutrientes.
  • Relações ecológicas: competição, predação, mutualismo, parasitismo, etc.

4) Órgãos dos Sentidos
Captam estímulos do ambiente e enviam informações ao cérebro:
  • Visão (olhos): luz.
  • Audição (ouvidos): som.
  • Olfato (nariz): cheiros.
  • Paladar (língua): sabores.
  • Tato (pele): temperatura, pressão, dor.

5) Reinos dos Seres Vivos
Classificação básica:
  • Reino Animal: seres multicelulares, heterótrofos (não produzem alimento), ex.: mamíferos, aves, peixes.
  • Reino Vegetal (Plantae): seres multicelulares, autótrofos (fotossíntese), ex.: árvores, flores, musgos.
  • Reino Fungi: fungos (cogumelos, leveduras), decompositores.
  • Reino Monera: bactérias (procariontes).
  • Reino Protista: protozoários e algas unicelulares (eucariontes).

6) Sistemas do Corpo Humano
  • Sistema Digestório: transforma alimentos em nutrientes absorvíveis.
    Órgãos: boca, esôfago, estômago, intestinos, fígado, pâncreas.
  • Sistema Respiratório: realiza trocas gasosas (entra O₂, sai CO₂).
    Órgãos: nariz, traqueia, brônquios, pulmões.
  • Sistema Circulatório: transporta sangue, nutrientes, oxigênio e resíduos.
    Órgãos: coração, artérias, veias, capilares.
  • Sistema Nervoso: controla e coordena funções do corpo, processa informações.
    Órgãos: cérebro, medula espinhal, nervos.
  • Sistema Excretor: elimina resíduos (urina, suor).
    Órgãos: rins, bexiga, pele.

7) Noções de Física
  • Força: grandeza capaz de alterar o movimento ou a forma de um corpo.
    Ex.: empurrar, puxar, peso (força da gravidade).
  • Movimento: mudança de posição no tempo. Pode ser uniforme (velocidade constante) ou acelerado.
  • Calor: energia térmica que passa de um corpo mais quente para um mais frio.
    → Temperatura mede o grau de agitação das partículas.
  • Ondas: perturbações que se propagam, transportando energia sem transportar matéria.
    Ex.: ondas sonoras, ondas de luz, ondas na água.
  • Som: onda mecânica que precisa de um meio (ar, água, sólido) para se propagar.

8) Noções de Química
  • Átomo: menor partícula de um elemento químico que mantém suas propriedades.
    Composto por: prótons (+), nêutrons (neutros) e elétrons (−).
  • Substâncias: podem ser simples (um único elemento, ex.: O₂) ou compostas (dois ou mais elementos, ex.: H₂O).
  • Misturas: combinação de duas ou mais substâncias. Podem ser homogêneas (uniforme, ex.: água + sal dissolvido) ou heterogêneas (não uniforme, ex.: água + óleo).
  • Funções químicas básicas: ácidos, bases, sais, óxidos.

Resumindo:
Ciências nos ensina a observar o mundo com curiosidade e método. Entender células, ecossistemas,
o corpo humano, forças, átomos e reações químicas é essencial para cuidar da saúde, do meio
ambiente e para compreender a tecnologia que usamos todos os dias. Ciência não é "decoreba":
é investigação, experimentação e raciocínio lógico aplicado à natureza.
    `.trim(),
    flashcards: [
      {
        front: "Célula",
        back: "Unidade básica estrutural e funcional de todos os seres vivos.",
      },
      {
        front: "Ecossistema",
        back: "Conjunto de seres vivos + ambiente físico e suas interações.",
      },
      {
        front: "Produtores em uma cadeia alimentar",
        back: "Seres que produzem seu próprio alimento, como as plantas (fotossíntese).",
      },
      {
        front: "Sistema respiratório",
        back: "Responsável pelas trocas gasosas: entrada de O₂ e saída de CO₂.",
      },
      {
        front: "Átomo",
        back: "Menor partícula de um elemento químico que mantém suas propriedades.",
      },
      {
        front: "Força",
        back: "Grandeza capaz de alterar o estado de movimento ou a forma de um corpo.",
      },
      {
        front: "Níveis de organização",
        back: "Célula → Tecido → Órgão → Sistema → Organismo.",
      },
      {
        front: "Decompositores",
        back: "Fungos e bactérias que decompõem matéria orgânica, reciclando nutrientes.",
      },
      {
        front: "Sistema circulatório",
        back: "Transporta sangue, nutrientes, oxigênio e resíduos pelo corpo.",
      },
      {
        front: "Som",
        back: "Onda mecânica que precisa de um meio (ar, água, sólido) para se propagar.",
      },
      {
        front: "Substância composta",
        back: "Formada por dois ou mais elementos. Ex.: H₂O (água).",
      },
      {
        front: "Órgãos dos sentidos",
        back: "Olhos, ouvidos, nariz, língua e pele captam estímulos do ambiente.",
      },
    ],
    questions: [
      {
        question: "A menor unidade estrutural dos seres vivos é:",
        options: ["O átomo", "A célula", "O tecido", "O órgão"],
        correctIndex: 1,
        explanation: "A célula é a unidade básica dos seres vivos.",
      },
      {
        question: "Em uma cadeia alimentar, os produtores são:",
        options: ["Animais carnívoros", "Animais herbívoros", "Plantas e algas", "Decompositores"],
        correctIndex: 2,
        explanation: "Plantas e algas produzem seu próprio alimento por fotossíntese.",
      },
      {
        question: "Qual sistema é responsável pela circulação do sangue?",
        options: ["Digestório", "Respiratório", "Nervoso", "Circulatório"],
        correctIndex: 3,
        explanation: "O sistema circulatório transporta sangue, nutrientes e gases pelo corpo.",
      },
      {
        question: "Força é:",
        options: [
          "Apenas empurrar um objeto",
          "Algo que só existe na imaginação",
          "Capaz de alterar o movimento ou a forma de um corpo",
          "Sempre invisível",
        ],
        correctIndex: 2,
        explanation: "Força pode acelerar, parar, deformar ou mudar a direção de um corpo.",
      },
      {
        question: "Os órgãos dos sentidos principais são:",
        options: [
          "Coração, fígado, rins",
          "Olhos, ouvidos, nariz, língua e pele",
          "Pulmões e brônquios",
          "Estômago e intestino",
        ],
        correctIndex: 1,
        explanation: "Olhos, ouvidos, nariz, língua e pele captam estímulos do ambiente.",
      },
      {
        question: "Decompositores são:",
        options: [
          "Plantas",
          "Animais carnívoros",
          "Fungos e bactérias",
          "Apenas algas",
        ],
        correctIndex: 2,
        explanation: "Fungos e bactérias decompõem matéria orgânica, reciclando nutrientes.",
      },
      {
        question: "A sequência correta dos níveis de organização é:",
        options: [
          "Órgão → Célula → Tecido",
          "Célula → Tecido → Órgão → Sistema",
          "Sistema → Órgão → Célula",
          "Tecido → Sistema → Célula",
        ],
        correctIndex: 1,
        explanation: "A ordem é: Célula → Tecido → Órgão → Sistema → Organismo.",
      },
      {
        question: "O sistema digestório é responsável por:",
        options: [
          "Transportar sangue",
          "Transformar alimentos em nutrientes",
          "Eliminar urina",
          "Controlar movimentos",
        ],
        correctIndex: 1,
        explanation: "O sistema digestório transforma alimentos em nutrientes absorvíveis.",
      },
      {
        question: "Som é:",
        options: [
          "Uma onda que não precisa de meio",
          "Uma onda mecânica que precisa de meio",
          "Apenas luz",
          "Energia elétrica",
        ],
        correctIndex: 1,
        explanation: "Som é onda mecânica que precisa de ar, água ou sólido para se propagar.",
      },
      {
        question: "H₂O é exemplo de:",
        options: [
          "Substância simples",
          "Substância composta",
          "Mistura heterogênea",
          "Átomo",
        ],
        correctIndex: 1,
        explanation: "H₂O (água) é substância composta, formada por hidrogênio e oxigênio.",
      },
    ],
  },
  {
    id: "ingles",
    name: "Inglês",
    summary: `
Inglês é a língua mais falada no mundo como segunda língua e a principal língua internacional
para negócios, ciência, tecnologia e cultura. Aprender inglês abre portas para comunicação
global, acesso a conteúdos (filmes, músicas, livros, sites) e oportunidades profissionais.

1) Para que serve estudar Inglês?
  • Comunicação: viajar, fazer amigos, trabalhar em empresas internacionais.
  • Acesso à informação: a maioria dos conteúdos na internet está em inglês.
  • Cultura: entender músicas, filmes, séries e livros no idioma original.
  • Oportunidades: muitas vagas de emprego exigem inglês.

2) Artigos (Articles)
São palavras que acompanham substantivos, indicando se são definidos ou indefinidos.

  • Artigos indefinidos: a / an (um, uma)
    → Usa-se "a" antes de som de consoante: a book, a car, a house.
    → Usa-se "an" antes de som de vogal: an apple, an egg, an hour (o "h" é mudo).
  
  • Artigo definido: the (o, a, os, as)
    → Usa-se quando o substantivo já é conhecido ou específico: the book (o livro específico).

3) Tempos Verbais Básicos

  • Simple Present (Presente Simples)
    Expressa hábitos, rotinas, verdades universais.
    Estrutura: sujeito + verbo (na 3ª pessoa do singular, adiciona -s ou -es).
    Ex.: I study every day. / She studies every day.
    Negativa: I do not (don't) study. / She does not (doesn't) study.
    Interrogativa: Do you study? / Does she study?

  • Simple Past (Passado Simples)
    Expressa ações concluídas no passado.
    Estrutura: sujeito + verbo no passado (regular: -ed; irregular: forma própria).
    Ex.: I played soccer yesterday. / She went to school.
    Negativa: I did not (didn't) play.
    Interrogativa: Did you play?

  • Simple Future (Futuro Simples com "will")
    Expressa ações futuras, decisões espontâneas, previsões.
    Estrutura: sujeito + will + verbo (infinitivo sem "to").
    Ex.: I will travel tomorrow. / She will study tonight.
    Negativa: I will not (won't) travel.
    Interrogativa: Will you travel?

4) Frases Condicionais (Conditional Sentences)
Expressam condição e resultado.

  • Tipo 0 (verdades gerais):
    If + Simple Present, Simple Present.
    Ex.: If you heat water, it boils. (Se você aquece água, ela ferve.)

  • Tipo 1 (condição real no futuro):
    If + Simple Present, will + verbo.
    Ex.: If it rains, I will stay home. (Se chover, eu vou ficar em casa.)

5) Numerais (Numerals)

  • Cardinais: indicam quantidade.
    Ex.: one (1), two (2), three (3), ten (10), twenty (20), one hundred (100).
  
  • Ordinais: indicam ordem.
    Ex.: first (1º), second (2º), third (3º), tenth (10º), twentieth (20º).

6) Dicas para aprender Inglês
  • Pratique todos os dias, mesmo que pouco (15 minutos).
  • Ouça músicas, assista filmes/séries com legendas em inglês.
  • Leia textos simples (notícias, histórias curtas).
  • Fale em voz alta, mesmo sozinho, para treinar pronúncia.
  • Use aplicativos, jogos e flashcards para vocabulário.

Resumindo:
Inglês é uma ferramenta essencial no mundo moderno. Dominar estruturas básicas (artigos,
tempos verbais, condicionais, numerais) e praticar constantemente são os primeiros passos
para se comunicar com confiança e abrir portas para novas oportunidades pessoais e profissionais.
    `.trim(),
    flashcards: [
      {
        front: "Artigos indefinidos em inglês",
        back: "a / an (ex.: a book, an apple).",
      },
      {
        front: "Artigo definido em inglês",
        back: "the (ex.: the book, the house).",
      },
      {
        front: "Simple Present",
        back: "Expressa hábitos e rotinas (ex.: She studies every day).",
      },
      {
        front: "Simple Past",
        back: "Expressa ações concluídas no passado (ex.: They played soccer yesterday).",
      },
      {
        front: "Simple Future (will)",
        back: "Expressa ações futuras (ex.: I will travel tomorrow).",
      },
      {
        front: "Condicional simples (if)",
        back: "Ex.: If it rains, I will stay home.",
      },
      {
        front: "Quando usar 'a' ou 'an'?",
        back: "'a' antes de som de consoante; 'an' antes de som de vogal.",
      },
      {
        front: "Numerais cardinais",
        back: "Indicam quantidade: one, two, three, ten, twenty.",
      },
      {
        front: "Numerais ordinais",
        back: "Indicam ordem: first, second, third, tenth.",
      },
      {
        front: "Negativa no Simple Present (3ª pessoa)",
        back: "She does not (doesn't) study.",
      },
      {
        front: "Interrogativa no Simple Past",
        back: "Did you play?",
      },
      {
        front: "Estrutura do Simple Future",
        back: "Sujeito + will + verbo (infinitivo sem 'to').",
      },
    ],
    questions: [
      {
        question: "Qual frase está no Simple Present?",
        options: [
          "She studied yesterday.",
          "She will study tomorrow.",
          "She studies every day.",
          "She is studying now.",
        ],
        correctIndex: 2,
        explanation: ""Studies every day" indica hábito, típico do Simple Present.",
      },
      {
        question: "Qual é o artigo indefinido correto: "__ apple"?",
        options: ["a", "an", "the", "no"],
        correctIndex: 1,
        explanation: "Usa-se "an" antes de som de vogal (apple).",
      },
      {
        question: "A frase "They played soccer yesterday." está no:",
        options: ["Simple Present", "Simple Past", "Simple Future", "Present Continuous"],
        correctIndex: 1,
        explanation: ""Played" + "yesterday" indicam ação concluída no passado.",
      },
      {
        question: "Em "the dog", "the" é:",
        options: ["Artigo indefinido", "Artigo definido", "Pronome", "Preposição"],
        correctIndex: 1,
        explanation: ""The" é artigo definido em inglês.",
      },
      {
        question: "Qual frase está no futuro (will)?",
        options: [
          "I go to school.",
          "I went to school.",
          "I will go to school.",
          "I am going to school.",
        ],
        correctIndex: 2,
        explanation: ""Will go" indica futuro simples.",
      },
      {
        question: "Condicional tipo 1: "If it rains, I ___ stay home."",
        options: ["stay", "will stay", "stayed", "staying"],
        correctIndex: 1,
        explanation: "Tipo 1: If + Simple Present, will + verbo.",
      },
      {
        question: ""First" é um numeral:",
        options: ["Cardinal", "Ordinal", "Indefinido", "Definido"],
        correctIndex: 1,
        explanation: ""First" indica ordem (1º), logo é ordinal.",
      },
      {
        question: "Negativa de "She studies": ",
        options: [
          "She do not study",
          "She does not study",
          "She not study",
          "She don't study",
        ],
        correctIndex: 1,
        explanation: "3ª pessoa usa 'does not' (doesn't).",
      },
      {
        question: "Interrogativa de "You played": ",
        options: [
          "You played?",
          "Do you played?",
          "Did you play?",
          "Did you played?",
        ],
        correctIndex: 2,
        explanation: "Simple Past interrogativo: Did + sujeito + verbo (infinitivo).",
      },
      {
        question: ""Ten" é um numeral:",
        options: ["Ordinal", "Cardinal", "Indefinido", "Definido"],
        correctIndex: 1,
        explanation: ""Ten" indica quantidade (10), logo é cardinal.",
      },
    ],
  },
  {
    id: "artes",
    name: "Artes",
    summary: `
Artes é a área que estuda como os seres humanos usam formas, cores, sons, movimentos e palavras
para se expressar e se comunicar. Não é só "fazer desenho bonito": é entender como a arte aparece
na história, na cultura e no nosso dia a dia.

1) O que é História da Arte?
História da Arte é o estudo de como a arte foi mudando ao longo do tempo. Cada época cria um
tipo de arte que combina com a forma como as pessoas viviam, com as crenças e com a política daquele período.

– Na Antiguidade:
  • Egito: arte ligada à religião e ao poder dos faraós.  
    Exemplos: pirâmides, estátuas rígidas, pinturas nas tumbas. Tudo tinha função religiosa.
  • Mesopotâmia: palácios, relevos em pedra, selos com desenhos.  
    Menos simetria que no Egito, mas muita decoração e símbolos de poder.
  • Grécia: busca do "corpo perfeito" e da harmonia.  
    Esculturas de atletas e deuses, templos com colunas (como o Partenon).
  • Roma: herda muito da Grécia, usa a arte também para propaganda política.  
    Exemplos: arcos do triunfo, estátuas de imperadores.

– Idade Média:
  • Arte muito ligada à Igreja Católica.
  • Estilo românico: igrejas com aparência "pesada", paredes grossas, poucas janelas, clima de fortaleza.
  • Estilo gótico: igrejas altas, cheias de vitrais, muitas janelas, arcos pontudos.  
    Ideia de aproximar o homem de Deus pela beleza e pela verticalidade das construções.

– Idade Moderna:
  • Barroco: arte cheia de movimento, contrastes de luz e sombra, exagero, emoção.  
    No Brasil aparece em igrejas ricamente decoradas (como em Ouro Preto) e na literatura (Gregório de Matos).
  • Realismo: artistas mostram a realidade como ela é, inclusive miséria, injustiças e problemas sociais.  
    É uma reação ao romantismo, que idealizava demais.
  • Impressionismo: nasce na França; artistas pintam ao ar livre, querendo registrar a luz e o momento.  
    Pinceladas soltas, cores vibrantes, cenas do cotidiano. Ex.: Claude Monet.

2) Linguagens artísticas principais
Quando falamos em "linguagens artísticas", falamos dos meios que o artista usa para se expressar:

  • Pintura: usa cores em uma superfície (tela, parede, papel).  
    Pode ser realista, abstrata, expressionista, etc.
  • Escultura: trabalha o volume em 3D, usando pedra, madeira, metal, argila.
  • Música: organiza sons no tempo (melodia, ritmo, harmonia).
  • Dança: usa o corpo e o movimento para expressar ideias, histórias e emoções.
  • Teatro: mistura texto, atuação, cenário, figurino e iluminação para contar histórias.
  • Outras: cinema, fotografia, quadrinhos, arte digital, grafite, etc.

3) Folclore e cultura popular
Folclore é o conjunto de tradições que um povo transmite de geração em geração:
  • Lendas (Saci, Iara, Curupira, Boto-cor-de-rosa),
  • Festas (Festa Junina, Bumba-meu-boi),
  • Danças (frevo, maracatu, ciranda, catira),
  • Músicas, parlendas, adivinhas, receitas, brincadeiras.

A UNESCO considera o folclore parte da cultura popular e da identidade de um povo.  
Ou seja: quando estudamos folclore, estamos entendendo **quem nós somos** como sociedade.

4) Para que serve estudar Artes?
– Para desenvolver sensibilidade e criatividade;
– Para entender melhor a história e a cultura dos povos;
– Para aprender a se expressar melhor (não só falando e escrevendo, mas com imagens, sons e movimentos);
– Para respeitar diferentes formas de ver o mundo, mesmo quando são diferentes das nossas.

Resumindo:
Artes não é apenas decorar nomes de estilos. É aprender a "ler" imagens, músicas, danças e obras
do passado e do presente, entendendo o que elas comunicam e por que são importantes para a
identidade de um povo.
    `.trim(),
    flashcards: [
      {
        front: "O que é arte?",
        back: "É uma forma de expressão humana que transmite ideias, sentimentos e visões de mundo.",
      },
      {
        front: "Exemplos de linguagens artísticas",
        back: "Pintura, escultura, música, dança, teatro, cinema.",
      },
      {
        front: "Folclore brasileiro",
        back: "Conjunto de lendas, festas, músicas e danças tradicionais (ex.: bumba meu boi).",
      },
      {
        front: "Arte na Antiguidade",
        back: "Inclui obras egípcias, gregas e romanas, ligadas à religião e ao poder.",
      },
      {
        front: "Função social da arte",
        back: "Expressar identidades, criticar a sociedade e registrar fatos históricos.",
      },
      {
        front: "Arte popular",
        back: "Produções ligadas ao cotidiano e às tradições de um povo.",
      },
      {
        front: "Estilo gótico",
        back: "Igrejas altas, vitrais, arcos pontudos, verticalidade (Idade Média).",
      },
      {
        front: "Barroco",
        back: "Arte cheia de movimento, contrastes, emoção (Idade Moderna).",
      },
      {
        front: "Impressionismo",
        back: "Pintura ao ar livre, pinceladas soltas, cores vibrantes. Ex.: Monet.",
      },
      {
        front: "Arte egípcia",
        back: "Ligada à religião e faraós: pirâmides, estátuas rígidas, pinturas em tumbas.",
      },
      {
        front: "Arte grega",
        back: "Busca do corpo perfeito, harmonia, esculturas de atletas e deuses.",
      },
      {
        front: "Lendas do folclore brasileiro",
        back: "Saci, Iara, Curupira, Boto-cor-de-rosa.",
      },
    ],
    questions: [
      {
        question: "Qual das opções NÃO é uma linguagem artística?",
        options: ["Pintura", "Escultura", "Matemática", "Música"],
        correctIndex: 2,
        explanation: "Matemática é ciência; as outras são formas de arte.",
      },
      {
        question: "O folclore brasileiro é formado por:",
        options: [
          "Apenas músicas estrangeiras",
          "Lendas, festas e danças tradicionais",
          "Somente filmes",
          "Apenas literatura clássica",
        ],
        correctIndex: 1,
        explanation: "Folclore inclui lendas, danças, músicas, festas e costumes populares.",
      },
      {
        question: "Uma função importante da arte é:",
        options: [
          "Impedir a expressão de sentimentos",
          "Expressar ideias e emoções",
          "Substituir todas as ciências",
          "Apenas decorar ambientes",
        ],
        correctIndex: 1,
        explanation: "A arte expressa sentimentos, ideias e visões de mundo.",
      },
      {
        question: "Na Antiguidade, muitas obras de arte estavam ligadas:",
        options: [
          "A videogames",
          "À religião e ao poder",
          "A carros e tecnologia",
          "A esportes modernos",
        ],
        correctIndex: 1,
        explanation: "Arte egípcia, grega e romana tinha forte relação com religião e poder.",
      },
      {
        question: "Arte popular está associada:",
        options: [
          "Apenas a artistas famosos",
          "A produções do cotidiano e tradições do povo",
          "Somente à televisão",
          "Exclusivamente à internet",
        ],
        correctIndex: 1,
        explanation: "Arte popular nasce das tradições e do dia a dia da população.",
      },
      {
        question: "Estilo gótico é caracterizado por:",
        options: [
          "Igrejas baixas e escuras",
          "Igrejas altas com vitrais e arcos pontudos",
          "Pinturas abstratas",
          "Esculturas de metal",
        ],
        correctIndex: 1,
        explanation: "Gótico: igrejas altas, vitrais, arcos pontudos, verticalidade.",
      },
      {
        question: "Barroco é um estilo:",
        options: [
          "Simples e minimalista",
          "Cheio de movimento, contrastes e emoção",
          "Apenas de música",
          "Exclusivo da Grécia",
        ],
        correctIndex: 1,
        explanation: "Barroco é marcado por movimento, contrastes de luz/sombra e emoção.",
      },
      {
        question: "Impressionismo é conhecido por:",
        options: [
          "Pinturas realistas e detalhadas",
          "Pinturas ao ar livre com pinceladas soltas",
          "Esculturas de mármore",
          "Arte digital",
        ],
        correctIndex: 1,
        explanation: "Impressionismo: pintura ao ar livre, pinceladas soltas, cores vibrantes.",
      },
      {
        question: "Arte egípcia estava ligada:",
        options: [
          "Apenas ao comércio",
          "À religião e ao poder dos faraós",
          "Ao entretenimento popular",
          "À ciência moderna",
        ],
        correctIndex: 1,
        explanation: "Arte egípcia tinha forte função religiosa e de poder.",
      },
      {
        question: "Qual é uma lenda do folclore brasileiro?",
        options: [
          "Papai Noel",
          "Saci",
          "Drácula",
          "Frankenstein",
        ],
        correctIndex: 1,
        explanation: "Saci é uma lenda tradicional do folclore brasileiro.",
      },
    ],
  },
];

// ---------------------- COMPONENTES DE UI ----------------------

function SubjectButton({ subject, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "p-3 rounded-lg border text-left transition-colors " +
        (isSelected
          ? "bg-emerald-600 border-emerald-300 text-white"
          : "bg-slate-800 border-slate-600 hover:bg-slate-700")
      }
    >
      <div className="font-semibold">{subject.name}</div>
      <div className="text-xs text-slate-300 mt-1">
        Clique para estudar esta matéria
      </div>
    </button>
  );
}

function ModeButton({ label, mode, currentMode, onClick }) {
  const active = mode === currentMode;
  return (
    <button
      onClick={onClick}
      className={
        "px-4 py-2 rounded-full text-sm font-semibold border transition-colors " +
        (active
          ? "bg-emerald-500 border-emerald-200 text-slate-900"
          : "bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700")
      }
    >
      {label}
    </button>
  );
}

function SummaryView({ subject }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-bold mb-3">
        Resumo – {subject.name}
      </h2>
      <p className="whitespace-pre-line text-slate-100 text-sm md:text-base leading-relaxed">
        {subject.summary}
      </p>
    </div>
  );
}

function FlashcardsView({ subject }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const card = subject.flashcards[index];

  function nextCard() {
    setShowBack(false);
    setIndex((prev) => (prev + 1) % subject.flashcards.length);
  }

  function prevCard() {
    setShowBack(false);
    setIndex((prev) =>
      prev === 0 ? subject.flashcards.length - 1 : prev - 1
    );
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 md:p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold">
        Flashcards – {subject.name}
      </h2>
      <div
        className="flex-1 flex items-center justify-center"
      >
        <button
          onClick={() => setShowBack((prev) => !prev)}
          className="w-full max-w-xl h-48 md:h-56 bg-slate-900 rounded-2xl border border-slate-600 flex items-center justify-center text-center px-6 text-lg md:text-xl font-semibold hover:border-emerald-400 transition-colors"
        >
          {showBack ? card.back : card.front}
        </button>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-300">
        <button
          onClick={prevCard}
          className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
        >
          Anterior
        </button>
        <span>
          Cartão {index + 1} de {subject.flashcards.length}
        </span>
        <button
          onClick={nextCard}
          className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
        >
          Próximo
        </button>
      </div>
      <p className="text-xs text-slate-400 text-center">
        Toque no cartão para ver o verso.
      </p>
    </div>
  );
}

function QuizView({ subject }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = subject.questions[index];

  function handleAnswer() {
    if (selected === null) return;
    if (selected === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
    if (index === subject.questions.length - 1) {
      setFinished(true);
    } else {
      setIndex((prev) => prev + 1);
      setSelected(null);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-bold mb-3">
          Quiz – {subject.name}
        </h2>
        <p className="text-lg mb-2">
          Você acertou{" "}
          <span className="font-bold text-emerald-400">
            {score}
          </span>{" "}
          de {subject.questions.length} questões.
        </p>
        <p className="text-sm text-slate-300 mb-4">
          Continue praticando para reforçar ainda mais o conteúdo!
        </p>
        <button
          onClick={restart}
          className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400"
        >
          Refazer quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 md:p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold">
        Quiz – {subject.name}
      </h2>
      <div className="text-sm text-slate-300">
        Questão {index + 1} de {subject.questions.length}
      </div>
      <div className="bg-slate-900 rounded-lg p-4">
        <p className="font-semibold mb-3">{question.question}</p>
        <div className="flex flex-col gap-2">
          {question.options.map((opt, i) => (
            <label
              key={i}
              className={
                "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer border " +
                (selected === i
                  ? "bg-emerald-600 border-emerald-300 text-white"
                  : "bg-slate-800 border-slate-600 hover:bg-slate-700")
              }
            >
              <input
                type="radio"
                name="option"
                className="hidden"
                checked={selected === i}
                onChange={() => setSelected(i)}
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={handleAnswer}
        className="self-end px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400"
      >
        Confirmar resposta
      </button>
    </div>
  );
}

// ---------------------- APP PRINCIPAL ----------------------

function App() {
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [mode, setMode] = useState(null); // "summary" | "flashcards" | "quiz"

  const selectedSubject = subjects.find(
    (s) => s.id === selectedSubjectId
  );

  function selectSubject(id) {
    setSelectedSubjectId(id);
    setMode("summary");
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-2">
          Sistema de Estudo Completo
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          Escolha uma matéria, depois selecione o modo de estudo:
          resumo, flashcards ou quiz.
        </p>
      </header>

      {/* LISTA DE MATÉRIAS */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">
          Matérias disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjects.map((subject) => (
            <SubjectButton
              key={subject.id}
              subject={subject}
              isSelected={subject.id === selectedSubjectId}
              onClick={() => selectSubject(subject.id)}
            />
          ))}
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      {selectedSubject ? (
        <section className="space-y-4">
          {/* Botões de modo */}
          <div className="flex flex-wrap gap-2 mb-2">
            <ModeButton
              label="Resumo"
              mode="summary"
              currentMode={mode}
              onClick={() => setMode("summary")}
            />
            <ModeButton
              label="Flashcards"
              mode="flashcards"
              currentMode={mode}
              onClick={() => setMode("flashcards")}
            />
            <ModeButton
              label="Quiz"
              mode="quiz"
              currentMode={mode}
              onClick={() => setMode("quiz")}
            />
          </div>

          {/* Renderização do modo atual */}
          {mode === "summary" && <SummaryView subject={selectedSubject} />}
          {mode === "flashcards" && (
            <FlashcardsView subject={selectedSubject} />
          )}
          {mode === "quiz" && <QuizView subject={selectedSubject} />}
        </section>
      ) : (
        <p className="text-slate-300 text-sm">
          Selecione uma matéria acima para começar a estudar.
        </p>
      )}
    </div>
  );
}

// Monta o app no #root
ReactDOM.render(<App />, document.getElementById("root"));
