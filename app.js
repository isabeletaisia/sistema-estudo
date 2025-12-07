const { useState, useEffect } = React;

const StudySystem = () => {
  const [selectedSubject, setSelectedSubject] = useState('matematica');
  const [mode, setMode] = useState('menu');
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [progress, setProgress] = useState({});

  const subjects = {
    matematica: {
      name: 'Matemática',
      color: 'bg-blue-500',
      icon: '🔢',
      summary: {
        title: 'Divisibilidade e Números Primos',
        topics: [
          'Divisão: D = d·q + r (0 ≤ r < d)',
          'Número primo: tem apenas 2 divisores (1 e ele mesmo)',
          'MDC: produto dos fatores comuns com MENOR expoente',
          'MMC: produto dos fatores comuns e não-comuns com MAIOR expoente',
          'Número de divisores: (a+1)(b+1)(c+1)... onde a,b,c são os expoentes'
        ]
      },
      flashcards: [
        {
          front: 'O que é MDC?',
          back: 'Máximo Divisor Comum - o MAIOR divisor comum entre dois ou mais números. É o produto dos fatores COMUNS elevados ao MENOR expoente.'
        },
        {
          front: 'O que é MMC?',
          back: 'Mínimo Múltiplo Comum - o MENOR múltiplo comum (≠ 0) entre números. É o produto dos fatores comuns e NÃO-COMUNS elevados ao MAIOR expoente.'
        },
        {
          front: 'Divisibilidade por 6',
          back: 'Um número é divisível por 6 quando é divisível por 2 E por 3 ao mesmo tempo.'
        },
        {
          front: 'Divisibilidade por 11',
          back: 'A diferença entre a soma dos algarismos de ordem ímpar e a de ordem par deve ser divisível por 11.'
        },
        {
          front: 'O que é número primo?',
          back: 'Número natural (≠ 0 e 1) que possui apenas DOIS divisores: 1 e ele mesmo. Ex: 2, 3, 5, 7, 11...'
        }
      ],
      quiz: [
        {
          question: 'Qual o MDC entre 48 e 72?',
          options: ['12', '24', '36', '144'],
          correct: 1,
          explanation: '48 = 2⁴·3 e 72 = 2³·3². MDC = 2³·3 = 8·3 = 24'
        },
        {
          question: 'Quantos divisores tem o número 60?',
          options: ['8', '10', '12', '16'],
          correct: 2,
          explanation: '60 = 2²·3·5. Divisores: (2+1)(1+1)(1+1) = 3·2·2 = 12'
        },
        {
          question: 'O número 2376 é divisível por qual?',
          options: ['3 e 8', '4 e 9', '5 e 6', '7 e 11'],
          correct: 0,
          explanation: 'Soma: 2+3+7+6=18 (÷3✓). Últimos 3: 376÷8=47 (✓)'
        }
      ]
    },
    portugues: {
      name: 'Português',
      color: 'bg-green-500',
      icon: '📝',
      summary: {
        title: 'Análise Sintática',
        topics: [
          'Sujeito: termo que concorda com o verbo',
          'Predicado Verbal: núcleo é um VERBO significativo',
          'Predicado Nominal: núcleo é um NOME + verbo de ligação',
          'Predicado Verbo-Nominal: VERBO significativo + PREDICATIVO',
          'Oração Subordinada: depende de outra (principal)'
        ]
      },
      flashcards: [
        {
          front: 'O que é sujeito?',
          back: 'Termo que estabelece concordância com o verbo. Pode ser simples, composto, indeterminado ou oração sem sujeito.'
        },
        {
          front: 'Predicado Verbal',
          back: 'Predicado cujo núcleo é um VERBO SIGNIFICATIVO (indica ação/processo). Ex: "João CORREU muito."'
        },
        {
          front: 'Predicado Nominal',
          back: 'Predicado cujo núcleo é um NOME (predicativo) ligado ao sujeito por verbo de ligação. Ex: "Maria está FELIZ."'
        },
        {
          front: 'Agente da Passiva',
          back: 'Termo que pratica a ação na voz passiva. Geralmente vem com "por/pelo(a)". Ex: "O bolo foi feito POR MIM."'
        },
        {
          front: 'Vocativo',
          back: 'Termo usado para CHAMAR/INTERPELAR. Separado por vírgula. NÃO pertence à estrutura da oração. Ex: "João, venha aqui!"'
        }
      ],
      quiz: [
        {
          question: 'Em "As crianças brincavam felizes", o predicado é:',
          options: ['Verbal', 'Nominal', 'Verbo-nominal', 'Não há predicado'],
          correct: 2,
          explanation: 'Verbo significativo (brincavam) + predicativo do sujeito (felizes) = Verbo-nominal'
        },
        {
          question: 'Identifique a oração sem sujeito:',
          options: ['Trovejou ontem', 'Ninguém saiu', 'Vendem-se casas', 'Os livros sumiram'],
          correct: 0,
          explanation: 'Verbo impessoal (fenômeno da natureza) = oração sem sujeito'
        },
        {
          question: 'Em "Duvido DE QUE ELE VENHA", a oração destacada é:',
          options: ['Objetiva direta', 'Objetiva indireta', 'Subjetiva', 'Predicativa'],
          correct: 1,
          explanation: 'Complementa verbo transitivo indireto (duvidar DE algo) = Subordinada Substantiva Objetiva Indireta'
        }
      ]
    },
    historia: {
      name: 'História',
      color: 'bg-amber-500',
      icon: '📜',
      summary: {
        title: 'Brasil Colônia e Império',
        topics: [
          'Capitanias (1534): doação de terras, maioria fracassou',
          'Governo-Geral (1548): centralização administrativa',
          'Economia: açúcar (plantation: latifúndio, monocultura, escravidão)',
          'Abolição: Eusébio Queiroz (1850) → Ventre Livre (1871) → Sexagenários (1885) → Áurea (1888)',
          'Ditadura Militar (1964-1985): 5 presidentes, AI-5, repressão, censura'
        ]
      },
      flashcards: [
        {
          front: 'Capitanias Hereditárias (1534)',
          back: 'Sistema de colonização: doação de terras a donatários. Documentos: Carta de Doação (posse) e Foral (direitos/deveres). Maioria fracassou.'
        },
        {
          front: 'Por que as Capitanias falharam?',
          back: 'Falta de recursos, ataques indígenas, dificuldade de comunicação, terras inadequadas, poucos lucros para donatários.'
        },
        {
          front: 'Plantation',
          back: 'Sistema de produção colonial: LATIFÚNDIO + MONOCULTURA + TRABALHO ESCRAVO + produção para exportação.'
        },
        {
          front: 'Leis Abolicionistas',
          back: '1850: Eusébio Queiroz (fim do tráfico) / 1871: Ventre Livre / 1885: Sexagenários / 1888: Áurea (abolição total)'
        },
        {
          front: 'AI-5 (1968)',
          back: 'Ato Institucional mais violento da ditadura: plenos poderes ao presidente, fechamento do Congresso, censura, suspensão de direitos.'
        }
      ],
      quiz: [
        {
          question: 'Qual foi o primeiro sistema de colonização do Brasil?',
          options: ['Governo-Geral', 'Capitanias Hereditárias', 'Vice-Reino', 'Estado do Brasil'],
          correct: 1,
          explanation: 'Capitanias Hereditárias (1534) foi o primeiro sistema, depois veio o Governo-Geral (1548)'
        },
        {
          question: 'O que caracteriza a plantation?',
          options: ['Minifúndio e policultura', 'Trabalho livre e exportação', 'Latifúndio, monocultura e escravidão', 'Pequena propriedade familiar'],
          correct: 2,
          explanation: 'Plantation = Latifúndio + Monocultura + Trabalho Escravo + Exportação'
        },
        {
          question: 'Qual lei aboliu totalmente a escravidão no Brasil?',
          options: ['Eusébio de Queiroz', 'Ventre Livre', 'Sexagenários', 'Lei Áurea'],
          correct: 3,
          explanation: 'Lei Áurea (13/05/1888), assinada pela Princesa Isabel, aboliu totalmente a escravidão'
        }
      ]
    },
    ciencias: {
      name: 'Ciências',
      color: 'bg-purple-500',
      icon: '🔬',
      summary: {
        title: 'Corpo Humano e Ecologia',
        topics: [
          'Célula: menor unidade dos seres vivos (membrana, citoplasma, núcleo)',
          'Organização: Célula → Tecido → Órgão → Sistema → Organismo',
          'Sistema Digestório: transforma alimentos em nutrientes simples',
          'Sistema Respiratório: troca de gases (O₂ entra, CO₂ sai)',
          'Ecologia: Habitat (onde vive) / Nicho (modo de vida) / População / Comunidade / Ecossistema'
        ]
      },
      flashcards: [
        {
          front: 'O que é uma célula?',
          back: 'Menor parte dos seres vivos com forma e função definidas. É a unidade estrutural dos seres vivos.'
        },
        {
          front: 'Níveis de organização',
          back: 'CÉLULAS → TECIDOS → ÓRGÃOS → SISTEMAS → ORGANISMO'
        },
        {
          front: 'Diferença: Habitat vs Nicho',
          back: 'HABITAT: lugar onde vive. NICHO: modo de vida (alimentação, comportamento, relações).'
        },
        {
          front: 'Respiração Celular',
          back: 'Glicose + O₂ → CO₂ + H₂O + ENERGIA (ocorre nas mitocôndrias)'
        },
        {
          front: 'Coração: cavidades',
          back: '4 cavidades: átrio direito, átrio esquerdo, ventrículo direito, ventrículo esquerdo.'
        }
      ],
      quiz: [
        {
          question: 'Qual a sequência correta dos níveis de organização?',
          options: ['Célula→Órgão→Tecido→Sistema', 'Tecido→Célula→Órgão→Sistema', 'Célula→Tecido→Órgão→Sistema', 'Órgão→Tecido→Célula→Sistema'],
          correct: 2,
          explanation: 'Células formam tecidos, tecidos formam órgãos, órgãos formam sistemas'
        },
        {
          question: 'Por onde devemos respirar preferencialmente?',
          options: ['Pela boca', 'Pelo nariz', 'Tanto faz', 'Alternando boca e nariz'],
          correct: 1,
          explanation: 'Pelo nariz: filtra impurezas com pelos e muco, além de aquecer e umidificar o ar'
        },
        {
          question: 'O que é nicho ecológico?',
          options: ['Onde o animal vive', 'Modo de vida da espécie', 'Número de indivíduos', 'Tipo de alimentação'],
          correct: 1,
          explanation: 'Nicho = modo de vida completo: alimentação, comportamento, relações, habitat'
        }
      ]
    },
    geografia: {
      name: 'Geografia',
      color: 'bg-cyan-500',
      icon: '🌍',
      summary: {
        title: 'Coordenadas e Movimentos da Terra',
        topics: [
          'Paralelos (horizontal): latitude (0° no Equador, até 90°N ou 90°S)',
          'Meridianos (vertical): longitude (0° em Greenwich, até 180°L ou 180°O)',
          'Rotação: em torno do eixo (~24h) → dias e noites',
          'Translação: ao redor do Sol (~365 dias) → estações do ano',
          'Zonas térmicas: Tropical (quente), Temperada, Polar (fria)'
        ]
      },
      flashcards: [
        {
          front: 'Paralelos',
          back: 'Linhas HORIZONTAIS imaginárias. Principal: EQUADOR (divide Terra em Hemisfério Norte e Sul). Indicam LATITUDE.'
        },
        {
          front: 'Meridianos',
          back: 'Linhas VERTICAIS imaginárias que ligam os polos. Principal: GREENWICH (divide Terra em Hemisfério Leste e Oeste). Indicam LONGITUDE.'
        },
        {
          front: 'Movimento de Rotação',
          back: 'Terra gira em torno do próprio eixo. Duração: ~24h. Consequência: DIA e NOITE.'
        },
        {
          front: 'Movimento de Translação',
          back: 'Terra gira ao redor do Sol. Duração: ~365 dias. Consequência: ESTAÇÕES DO ANO.'
        },
        {
          front: 'Equinócio',
          back: 'Dias com mesma duração (12h dia/12h noite). Marca início da PRIMAVERA e OUTONO.'
        }
      ],
      quiz: [
        {
          question: 'O que são paralelos?',
          options: ['Linhas verticais', 'Linhas horizontais', 'Linhas diagonais', 'Círculos concêntricos'],
          correct: 1,
          explanation: 'Paralelos são linhas HORIZONTAIS que indicam LATITUDE (ex: Equador)'
        },
        {
          question: 'Qual movimento da Terra causa as estações do ano?',
          options: ['Rotação', 'Translação', 'Precessão', 'Nutação'],
          correct: 1,
          explanation: 'TRANSLAÇÃO (ao redor do Sol) causa as estações devido à inclinação do eixo'
        },
        {
          question: 'Qual a zona térmica mais quente da Terra?',
          options: ['Polar', 'Temperada', 'Tropical', 'Equatorial'],
          correct: 2,
          explanation: 'Zona TROPICAL (entre os trópicos) recebe maior incidência solar'
        }
      ]
    },
    ingles: {
      name: 'Inglês',
      color: 'bg-red-500',
      icon: '🇬🇧',
      summary: {
        title: 'Tempos Verbais e Estruturas',
        topics: [
          'Articles: A (consoante) / AN (vogal) / THE (definido)',
          'Simple Past: ação no passado (added ED aos verbos regulares)',
          'Simple Present: ações habituais (3ª pessoa adiciona S/ES/IES)',
          'Future: WILL + verbo infinitivo',
          'Conditional: IF + presente, WILL (tipo 1) / IF + passado, WOULD (tipo 2)'
        ]
      },
      flashcards: [
        {
          front: 'A vs AN',
          back: 'A: antes de CONSOANTE (a car, a book). AN: antes de VOGAL (an egg, an apple).'
        },
        {
          front: 'THE',
          back: 'Artigo DEFINIDO. Significa "o, a, os, as". Usado para coisas ESPECÍFICAS. Ex: THE book (o livro específico).'
        },
        {
          front: 'Simple Past - uso',
          back: 'Ação em tempo DETERMINADO no passado. Palavras: yesterday, last week, ago, in 1980.'
        },
        {
          front: 'Simple Present - 3ª pessoa',
          back: 'He/She/It: adiciona S, ES (após s,ss,ch,sh,o,x,z) ou IES (consoante+y). Ex: He WORKS, She GOES, It STUDIES.'
        },
        {
          front: 'Future - estrutura',
          back: 'WILL + verbo infinitivo sem TO. Contração: \'ll. Negativa: WILL NOT (WON\'T).'
        }
      ],
      quiz: [
        {
          question: 'Complete: "She _____ to school every day."',
          options: ['go', 'goes', 'going', 'gone'],
          correct: 1,
          explanation: 'Simple Present, 3ª pessoa: adiciona ES após "go" → GOES'
        },
        {
          question: 'Qual a forma negativa de "I watched TV"?',
          options: ['I not watched TV', 'I didn\'t watch TV', 'I don\'t watched TV', 'I wasn\'t watch TV'],
          correct: 1,
          explanation: 'Simple Past negativo: didn\'t + verbo infinitivo (sem ED)'
        },
        {
          question: 'Complete: "If you study hard, you _____ pass."',
          options: ['would', 'will', 'can', 'must'],
          correct: 1,
          explanation: 'First Conditional: IF + presente, WILL + infinitivo'
        }
      ]
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('studyProgress');
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  const saveProgress = (subject, modeType, score) => {
    const newProgress = {
      ...progress,
      [subject]: {
        ...(progress[subject] || {}),
        [modeType]: {
          lastScore: score,
          lastDate: new Date().toISOString(),
          attempts: ((progress[subject]?.[modeType]?.attempts) || 0) + 1
        }
      }
    };
    setProgress(newProgress);
    localStorage.setItem('studyProgress', JSON.stringify(newProgress));
  };

  const currentSubject = subjects[selectedSubject];

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev + 1) % currentSubject.flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev - 1 + currentSubject.flashcards.length) % currentSubject.flashcards.length);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const isCorrect = currentSubject.quiz[questionIndex].correct === answerIndex;
    if (isCorrect && !answeredQuestions.includes(questionIndex)) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, questionIndex]);
  };

  const resetQuiz = () => {
    setScore(0);
    setAnsweredQuestions([]);
  };

  const finishQuiz = () => {
    const finalScore = Math.round((score / currentSubject.quiz.length) * 100);
    saveProgress(selectedSubject, 'quiz', finalScore);
    alert(`Você acertou ${score} de ${currentSubject.quiz.length} questões! (${finalScore}%)`);
  };

  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">📚 Sistema de Estudo Completo</h1>
            <p className="text-gray-600">Escolha uma matéria e um modo de estudo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {Object.entries(subjects).map(([key, subject]) => (
              <button
                key={key}
                onClick={() => setSelectedSubject(key)}
                className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
                  selectedSubject === key
                    ? `${subject.color} text-white`
                    : 'bg-white text-gray-800 hover:shadow-xl'
                }`}
              >
                <div className="text-4xl mb-2">{subject.icon}</div>
                <h3 className="text-xl font-bold">{subject.name}</h3>
                {progress[key] && (
                  <div className="mt-2 text-sm opacity-80">
                    {progress[key].quiz && `Quiz: ${progress[key].quiz.lastScore}%`}
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setMode('summary')}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span className="text-4xl mb-3 block">📖</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resumo</h3>
              <p className="text-gray-600 text-sm">Revisão rápida dos principais conceitos</p>
            </button>

            <button
              onClick={() => {
                setMode('flashcards');
                setCurrentCard(0);
                setShowAnswer(false);
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span className="text-4xl mb-3 block">🧠</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flashcards</h3>
              <p className="text-gray-600 text-sm">
                {currentSubject.flashcards.length} cartões para memorização
              </p>
            </button>

            <button
              onClick={() => {
                setMode('quiz');
                resetQuiz();
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span className="text-4xl mb-3 block">✅</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quiz</h3>
              <p className="text-gray-600 text-sm">
                {currentSubject.quiz.length} questões para praticar
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'summary') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setMode('menu')}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">{currentSubject.icon}</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{currentSubject.name}</h2>
                <p className="text-gray-600">{currentSubject.summary.title}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentSubject.summary.topics.map((topic, index) => (
                <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl font-bold text-gray-300">{index + 1}</span>
                  <p className="text-gray-700 flex-1">{topic}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setMode('flashcards')}
                className={`flex-1 py-3 ${currentSubject.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all`}
              >
                Estudar com Flashcards →
              </button>
              <button
                onClick={() => setMode('quiz')}
                className="flex-1 py-3 bg-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Fazer Quiz →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'flashcards') {
    const card = currentSubject.flashcards[currentCard];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setMode('menu')}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {currentSubject.icon} {currentSubject.name}
              </h2>
              <span className="text-gray-500">
                {currentCard + 1} / {currentSubject.flashcards.length}
              </span>
            </div>

            <div
              onClick={() => setShowAnswer(!showAnswer)}
              className="min-h-[300px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 cursor-pointer flex items-center justify-center text-center transition-all hover:shadow-lg"
            >
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  {showAnswer ? 'RESPOSTA' : 'PERGUNTA'} (clique para virar)
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  {showAnswer ? card.back : card.front}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={prevCard}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
              >
                ← Anterior
              </button>
              <button
                onClick={nextCard}
                className={`flex-1 py-3 ${currentSubject.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2`}
              >
                Próximo →
              </button>
            </div>

            <div className="flex gap-2 justify-center mt-4">
              {currentSubject.flashcards.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentCard ? 'w-8 bg-purple-500' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'quiz') {
    const allAnswered = answeredQuestions.length === currentSubject.quiz.length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setMode('menu')}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {currentSubject.icon} Quiz de {currentSubject.name}
              </h2>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-gray-500">pontos</div>
              </div>
            </div>

            <div className="space-y-6">
              {currentSubject.quiz.map((q, qIndex) => {
                const isAnswered = answeredQuestions.includes(qIndex);
                return (
                  <div key={qIndex} className="border-2 border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {qIndex + 1}. {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => {
                        const isCorrect = q.correct === oIndex;
                        let buttonClass = 'w-full text-left p-3 rounded-lg border-2 transition-all ';
                        
                        if (isAnswered) {
                          if (isCorrect) {
                            buttonClass += 'bg-green-100 border-green-500 text-green-800';
                          } else {
                            buttonClass += 'bg-gray-100 border-gray-300 text-gray-500';
                          }
                        } else {
                          buttonClass += 'border-gray-300 hover:border-blue-500 hover:bg-blue-50';
                        }

                        return (
                          <button
                            key={oIndex}
                            onClick={() => !isAnswered && handleQuizAnswer(qIndex, oIndex)}
                            disabled={isAnswered}
                            className={buttonClass}
                          >
                            {option}
                            {isAnswered && isCorrect && ' ✓'}
                          </button>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Explicação:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {allAnswered && (
              <div className="mt-8 flex gap-3">
                <button
                  onClick={resetQuiz}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  🔄 Refazer Quiz
                </button>
                <button
                  onClick={finishQuiz}
                  className="flex-1 py-3 bg-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  🏆 Ver Resultado Final
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(<StudySystem />);
