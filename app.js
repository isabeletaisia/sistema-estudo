const { useState } = React;

// 7 MATÉRIAS: Matemática, Português, História, Geografia, Ciências, Inglês, Artes
const subjects = [
  {
    id: "matematica",
    name: "Matemática",
    summary: `
A Matemática da apostila trabalha principalmente:

• Números naturais (N = {0, 1, 2, 3, ...})
• Operações fundamentais: adição, subtração, multiplicação e divisão
• Critérios de divisibilidade (por 2, 3, 5, 9, 10 etc.)
• Números primos e compostos
• Fatoração, MDC (máximo divisor comum) e MMC (mínimo múltiplo comum)
• Sistemas de numeração decimal e romano

O objetivo é desenvolver o raciocínio lógico, a noção de quantidade, cálculo mental e a compreensão dos diferentes sistemas de escrever números.
    `.trim(),
    flashcards: [
      {
        front: "O que são números naturais?",
        back: "São os números usados para contar: N = {0, 1, 2, 3, 4, ...}",
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
    ],
  },
  {
    id: "portugues",
    name: "Português",
    summary: `
Em Língua Portuguesa, o foco do Fundamental costuma ser:

• Leitura e interpretação de textos
• Classes de palavras (substantivo, adjetivo, verbo, artigo etc.)
• Ortografia e acentuação
• Pontuação básica
• Concordância nominal e verbal

O objetivo é desenvolver compreensão leitora, produção de textos e uso correto da norma padrão em situações formais de comunicação.
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
    ],
    questions: [
      {
        question: "Em “O menino correu.”, a palavra “menino” é:",
        options: ["Verbo", "Adjetivo", "Substantivo", "Artigo"],
        correctIndex: 2,
        explanation: "“Menino” é um ser, portanto é substantivo.",
      },
      {
        question: "Em “As meninas estudam.”, “As” é:",
        options: ["Preposição", "Artigo definido", "Pronome", "Substantivo"],
        correctIndex: 1,
        explanation: "“As” é artigo definido feminino plural.",
      },
      {
        question: "Qual opção apresenta um verbo?",
        options: ["Feliz", "Casa", "Comer", "Bonito"],
        correctIndex: 2,
        explanation: "“Comer” é ação, logo é um verbo.",
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
        question: "Em “Os livros novos chegaram.”, o sujeito é:",
        options: [
          "Chegaram",
          "Novos",
          "Os livros novos",
          "Livros",
        ],
        correctIndex: 2,
        explanation: "O sujeito completo é “Os livros novos”.",
      },
    ],
  },
  {
    id: "historia",
    name: "História",
    summary: `
Na apostila de História aparecem temas como:

• Expansão Marítima europeia
• Colonização portuguesa, espanhola, francesa, inglesa e holandesa
• Sistema colonial brasileiro
• Ciclos econômicos: açúcar, tabaco, gado etc.
• Bandeirismo e revoltas coloniais
• Segundo Reinado, Abolição da Escravidão
• Proclamação da República e governos militares

O foco é compreender como esses processos históricos moldaram o Brasil e o mundo atual.
    `.trim(),
    flashcards: [
      {
        front: "O que foi a Expansão Marítima?",
        back: "Período em que reinos europeus buscaram novas rotas comerciais por mar.",
      },
      {
        front: "Principal produto do ciclo do açúcar",
        back: "A cana-de-açúcar, cultivada em grandes engenhos, com uso de mão de obra escravizada.",
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
        back: "Conjunto de regras e práticas que mantinham a colônia dependente da metrópole.",
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
          "De dependência da metrópole pela colônia",
          "De ajuda mútua",
          "Sem trocas comerciais",
        ],
        correctIndex: 1,
        explanation: "A metrópole explorava economicamente a colônia.",
      },
    ],
  },
  {
    id: "geografia",
    name: "Geografia",
    summary: `
Na Geografia da apostila aparecem:

• Origem do Universo e formação do Sistema Solar
• Movimentos da Terra (rotação e translação)
• Fusos horários e zonas térmicas
• Escalas cartográficas e leitura de mapas
• Paisagens naturais e modificadas
• Distribuição da população

O estudo ajuda a entender o espaço geográfico e a relação entre sociedade e natureza.
    `.trim(),
    flashcards: [
      {
        front: "Rotação da Terra",
        back: "Movimento em torno do próprio eixo, responsável pela alternância de dia e noite.",
      },
      {
        front: "Translação da Terra",
        back: "Movimento em torno do Sol, responsável pelas estações do ano.",
      },
      {
        front: "Fuso horário",
        back: "Cada faixa de 15° de longitude que corresponde, aproximadamente, a 1 hora.",
      },
      {
        front: "Zona tropical",
        back: "Região próxima à linha do Equador, com temperaturas mais altas na maior parte do ano.",
      },
      {
        front: "Escala cartográfica",
        back: "Relação entre o tamanho no mapa e o tamanho real na superfície terrestre.",
      },
      {
        front: "Paisagem natural x modificada",
        back: "Natural é pouco alterada pelo homem; modificada tem intensa ação humana.",
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
        explanation: "Cada 15° de longitude correspondem, aproximadamente, a 1 hora.",
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
    ],
  },
  {
    id: "ciencias",
    name: "Ciências",
    summary: `
Em Ciências, a apostila aborda:

• Células e níveis de organização dos seres vivos
• Ecossistemas, cadeias alimentares e relações ecológicas
• Órgãos dos sentidos
• Reinos animal e vegetal
• Sistemas do corpo humano (digestório, respiratório, circulatório)
• Noções de Física (força, movimento, calor, ondas) e Química (átomos, substâncias)

O objetivo é compreender o funcionamento do corpo, dos seres vivos e dos fenômenos físicos e químicos do dia a dia.
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
        back: "Responsável pelas trocas gasosas, como entrada de oxigênio e saída de gás carbônico.",
      },
      {
        front: "Átomo",
        back: "Menor partícula de um elemento químico que mantém suas propriedades.",
      },
      {
        front: "Força",
        back: "Grandeza capaz de alterar o estado de movimento ou a forma de um corpo.",
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
    ],
  },
  {
    id: "ingles",
    name: "Inglês",
    summary: `
A parte de Inglês da apostila traz:

• Artigos (a, an, the)
• Tempos verbais básicos: Simple Present, Simple Past, Simple Future
• Frases condicionais simples (if...)
• Numerais (cardinais e ordinais)

O foco é desenvolver vocabulário, compreensão de estruturas simples e leitura de frases em contexto.
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
        explanation: "“Studies every day” indica hábito, típico do Simple Present.",
      },
      {
        question: "Qual é o artigo indefinido correto: “__ apple”?",
        options: ["a", "an", "the", "no"],
        correctIndex: 1,
        explanation: "Usa-se “an” antes de som de vogal (apple).",
      },
      {
        question: "A frase “They played soccer yesterday.” está no:",
        options: ["Simple Present", "Simple Past", "Simple Future", "Present Continuous"],
        correctIndex: 1,
        explanation: "“Played” + “yesterday” indicam ação concluída no passado.",
      },
      {
        question: "Em “the dog”, “the” é:",
        options: ["Artigo indefinido", "Artigo definido", "Pronome", "Preposição"],
        correctIndex: 1,
        explanation: "“The” é artigo definido em inglês.",
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
        explanation: "“Will go” indica futuro simples.",
      },
    ],
  },
  {
    id: "artes",
    name: "Artes",
    summary: `
Na apostila de Artes aparecem:

• História da arte em diferentes períodos (Antiguidade, Idade Média, Idade Moderna)
• Linguagens artísticas: pintura, escultura, música, dança, teatro
• Folclore brasileiro e manifestações culturais
• Importância da arte na expressão de sentimentos e na identidade de um povo

O estudo de Artes amplia a sensibilidade estética e o conhecimento das produções culturais ao longo do tempo.
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
