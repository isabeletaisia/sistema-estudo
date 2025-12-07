const { useState, useEffect } = React;

/*
ESTRUTURA:
- matematica: Números naturais, divisão, divisibilidade, primos, MDC/MMC
- portugues: Língua Portuguesa – ortografia, classes de palavras, tipos de texto, concordância
- historia: Conteúdo da apostila (expansão marítima, colonização, ciclos, 2º Reinado, etc.)
- geografia: Sistema solar, movimentos da Terra, cartografia, zonas térmicas, fusos, população
- ciencias: Células, níveis de organização, ecologia, sistemas, física e química básicas
- ingles: Artigos, Simple Present, Past, Future, condicionais, numerais
- artes: História da arte, antiguidade, Idade Média, Idade Moderna (Barroco, Realismo, Impressionismo), linguagens artísticas, folclore
*/

const studyData = {
  matematica: {
    name: 'Matemática',
    icon: '🔢',
    color: 'blue',
    summary: `
      <h3 class="text-xl font-bold mb-3">Números Naturais e Operações</h3>
      <p class="mb-2"><strong>Números Naturais (ℕ):</strong> 0, 1, 2, 3, 4, 5... usados para contar e ordenar.</p>
      <p class="mb-4">Surgem nas situações do dia a dia: contar pessoas, objetos, dinheiro, etc.</p>

      <h4 class="font-bold mb-2">Divisão</h4>
      <p class="mb-2">Na divisão, vale sempre a relação:</p>
      <p class="mb-4 text-center"><strong>Dividendo = Divisor × Quociente + Resto</strong></p>
      <p class="mb-4">Exemplo: 17 ÷ 5 → 17 = 5 × 3 + 2, logo quociente = 3 e resto = 2.</p>

      <h4 class="font-bold mb-2">Regras de Divisibilidade</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Por 2:</strong> número par (termina em 0, 2, 4, 6 ou 8).</li>
        <li><strong>Por 3:</strong> soma dos algarismos é múltiplo de 3.</li>
        <li><strong>Por 5:</strong> termina em 0 ou 5.</li>
        <li><strong>Por 10:</strong> termina em 0.</li>
      </ul>

      <h4 class="font-bold mb-2">Números Primos</h4>
      <p class="mb-2">Maior que 1 e com apenas dois divisores: 1 e ele mesmo.</p>
      <p class="mb-4">Exemplos: 2, 3, 5, 7, 11, 13, 17, 19...</p>

      <h4 class="font-bold mb-2">Fatoração, MDC e MMC</h4>
      <p class="mb-2"><strong>Fatoração:</strong> escrever um número como produto de fatores primos: 12 = 2² × 3.</p>
      <p class="mb-2"><strong>MDC:</strong> maior divisor comum de dois ou mais números.</p>
      <p class="mb-2"><strong>MMC:</strong> menor múltiplo comum de dois ou mais números.</p>
      <p class="mb-2">Muito usados em problemas com repetição de eventos (MMC) ou divisão em partes iguais (MDC).</p>
    `,
    flashcards: [
      { front: 'O que são números naturais?', back: 'São os números inteiros não negativos: 0, 1, 2, 3, 4, 5... usados para contagem e ordenação.' },
      { front: 'Qual a relação fundamental da divisão?', back: 'Dividendo = Divisor × Quociente + Resto.' },
      { front: 'Regra de divisibilidade por 2', back: 'O número precisa ser par (terminar em 0, 2, 4, 6 ou 8).' },
      { front: 'Regra de divisibilidade por 3', back: 'A soma dos algarismos deve ser divisível por 3.' },
      { front: 'Regra de divisibilidade por 5', back: 'O número deve terminar em 0 ou 5.' },
      { front: 'Regra de divisibilidade por 10', back: 'O número deve terminar em 0.' },
      { front: 'O que é um número primo?', back: 'Número maior que 1 que possui apenas dois divisores: 1 e ele mesmo.' },
      { front: 'Exemplos de números primos até 20', back: '2, 3, 5, 7, 11, 13, 17, 19.' },
      { front: 'O que é fatoração?', back: 'Decompor um número em produto de números primos, como 60 = 2² × 3 × 5.' },
      { front: 'O que é MDC?', back: 'Máximo Divisor Comum, o maior número que divide dois ou mais números.' },
      { front: 'O que é MMC?', back: 'Mínimo Múltiplo Comum, o menor múltiplo comum a dois ou mais números.' },
      { front: '2 é primo?', back: 'Sim. É o único número primo par.' }
    ],
    quiz: [
      { question: '17 ÷ 5 tem quociente e resto iguais a:', options: ['3 e 2', '2 e 3', '4 e 1', '5 e 2'], correct: 0 },
      { question: 'Qual número é divisível por 3?', options: ['124', '222', '145', '101'], correct: 1 },
      { question: 'Qual é um número primo?', options: ['15', '21', '17', '27'], correct: 2 },
      { question: 'Qual é o MDC de 12 e 18?', options: ['2', '3', '4', '6'], correct: 3 },
      { question: 'Qual é o MMC de 4 e 6?', options: ['8', '10', '12', '14'], correct: 2 },
      { question: 'Qual número é divisível por 2 e por 5?', options: ['15', '25', '30', '45'], correct: 2 },
      { question: 'A soma dos algarismos de 243 é:', options: ['6', '7', '8', '9'], correct: 3 },
      { question: 'A fatoração de 12 em primos é:', options: ['2 × 6', '2² × 3', '3 × 4', '2 × 2 × 2'], correct: 1 },
      { question: 'Qual é o menor número primo?', options: ['0', '1', '2', '3'], correct: 2 },
      { question: 'Um número é par quando:', options: ['Termina em 1, 3, 5, 7 ou 9', 'É múltiplo de 3', 'Termina em 0, 2, 4, 6 ou 8', 'É primo'], correct: 2 }
    ]
  },

  portugues: {
    name: 'Português',
    icon: '📚',
    color: 'green',
    summary: `
      <h3 class="text-xl font-bold mb-3">Língua Portuguesa – Noções Gerais</h3>
      <p class="mb-4">
        A língua portuguesa é o instrumento de comunicação que usamos para expressar ideias, sentimentos
        e informações. Estudar português envolve compreender <strong>ortografia</strong>, 
        <strong>classes de palavras</strong>, <strong>tipos de texto</strong> e 
        <strong>concordância</strong>, entre outros conteúdos.
      </p>

      <h4 class="font-bold mb-2">Ortografia</h4>
      <p class="mb-2">Ortografia é o conjunto de regras para escrever corretamente as palavras.</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Emprego correto de letras (s / z / x / ch / g / j etc.).</li>
        <li>Uso de maiúsculas em nomes próprios, inícios de frases, siglas.</li>
        <li>Uso de acentos gráficos (á, é, í, ó, ú, ã, õ, ê, ô, etc.).</li>
      </ul>

      <h4 class="font-bold mb-2">Classes de Palavras</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Substantivo:</strong> nomeia seres, lugares, sentimentos (casa, Brasil, amizade).</li>
        <li><strong>Adjetivo:</strong> indica característica (bonito, alto, feliz).</li>
        <li><strong>Verbo:</strong> indica ação, estado ou fenômeno (correr, ser, chover).</li>
        <li><strong>Advérbio:</strong> modifica verbo, adjetivo ou outro advérbio (rapidamente, muito, aqui).</li>
        <li><strong>Pronome:</strong> substitui ou acompanha o substantivo (eu, você, este).</li>
      </ul>

      <h4 class="font-bold mb-2">Tipos de Texto</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Narrativo:</strong> conta uma história, com personagens, tempo, espaço e enredo.</li>
        <li><strong>Descritivo:</strong> descreve características de pessoas, objetos, lugares.</li>
        <li><strong>Injuntivo/Instrucional:</strong> orienta, dá instruções (receitas, manuais).</li>
        <li><strong>Expositivo:</strong> explica conceitos e ideias de forma clara.</li>
      </ul>

      <h4 class="font-bold mb-2">Concordância Verbal (Noções)</h4>
      <p class="mb-2">
        O verbo deve concordar em número e pessoa com o sujeito da oração.
      </p>
      <p class="mb-1 text-center"><strong>Eu estudo • Nós estudamos</strong></p>
      <p class="mb-4 text-center"><strong>Ele gosta • Eles gostam</strong></p>
    `,
    flashcards: [
      { front: 'O que é ortografia?', back: 'É o conjunto de regras que orientam a escrita correta das palavras.' },
      { front: 'Exemplos de classes de palavras importantes', back: 'Substantivo, adjetivo, verbo, advérbio, pronome.' },
      { front: 'Definição de substantivo', back: 'Palavra que nomeia seres, lugares, objetos, sentimentos, ideias.' },
      { front: 'Definição de adjetivo', back: 'Palavra que indica característica do substantivo (bonito, alto, feliz).' },
      { front: 'Definição de verbo', back: 'Palavra que indica ação, estado ou fenômeno da natureza.' },
      { front: 'Texto narrativo', back: 'Tipo de texto que conta uma história, com personagens, enredo, tempo e espaço.' },
      { front: 'Texto descritivo', back: 'Texto que apresenta características de pessoas, animais, objetos, lugares.' },
      { front: 'Texto injuntivo', back: 'Texto que orienta ou dá instruções, como receitas e manuais.' },
      { front: 'O que é concordância verbal?', back: 'É a relação de número e pessoa entre o verbo e o sujeito.' },
      { front: 'Exemplo de concordância correta', back: '"Os alunos estudam bastante" (sujeito plural, verbo plural).' },
      { front: 'Uso de maiúsculas', back: 'Início de frase, nomes próprios, siglas e títulos importantes.' },
      { front: 'Por que estudar português é importante?', back: 'Para comunicar-se bem, interpretar textos e produzir boas redações.' }
    ],
    quiz: [
      { question: 'Qual opção contém apenas substantivos?', options: ['casa, bonito, correr', 'Brasil, amizade, livro', 'feliz, aqui, ontem', 'eu, tu, ele'], correct: 1 },
      { question: 'Qual classe de palavra indica ação ou estado?', options: ['Substantivo', 'Adjetivo', 'Verbo', 'Advérbio'], correct: 2 },
      { question: 'Que tipo de texto conta uma história?', options: ['Narrativo', 'Descritivo', 'Injuntivo', 'Expositivo'], correct: 0 },
      { question: 'Qual frase está com concordância VERBAL correta?', options: ['Os meninos brinca na rua.', 'Os meninos brincam na rua.', 'O menino brincam na rua.', 'As menina brincam na rua.'], correct: 1 },
      { question: 'Qual é um exemplo de adjetivo?', options: ['mesa', 'Brasil', 'alegre', 'correr'], correct: 2 },
      { question: 'Em qual opção o verbo está no singular?', options: ['Os alunos estudam.', 'As crianças brincam.', 'O aluno estuda.', 'Eles correm.'], correct: 2 },
      { question: 'Qual frase usa corretamente a letra maiúscula?', options: ['o brasil é um país.', 'Brasil é um país.', 'brasil É Um País.', 'BRASIL é Um país.'], correct: 1 },
      { question: 'Qual alternativa NÃO é um tipo de texto?', options: ['Narrativo', 'Descritivo', 'Olfativo', 'Expositivo'], correct: 2 },
      { question: 'Pronome que representa quem fala:', options: ['ele', 'nós', 'eles', 'vocês'], correct: 1 },
      { question: 'Na frase "Ela estuda muito", o sujeito é:', options: ['estuda', 'muito', 'ela', 'estuda muito'], correct: 2 }
    ]
  },

  historia: {
    name: 'História',
    icon: '🏛️',
    color: 'yellow',
    summary: `
      <h3 class="text-xl font-bold mb-3">Expansão Marítima e Colonização</h3>
      <p class="mb-2">
        A partir dos séculos XV e XVI, reinos europeus como Portugal e Espanha 
        iniciaram grandes viagens marítimas em busca de novas rotas comerciais,
        metais preciosos e expansão da fé cristã.
      </p>

      <h4 class="font-bold mb-2">Causas das Grandes Navegações</h4>
      <ul class="list-disc ml-6 mb-4">
        <li>Busca de um caminho marítimo para as Índias.</li>
        <li>Enriquecimento da burguesia comercial.</li>
        <li>Escassez de metais preciosos na Europa.</li>
        <li>Progresso técnico (bússola, astrolábio, caravelas).</li>
      </ul>

      <h4 class="font-bold mb-2">Colonização da América</h4>
      <p class="mb-2">
        Os europeus invadiram territórios americanos, dominaram povos nativos,
        escravizaram populações indígenas e africanas e implantaram o 
        <strong>Sistema Colonial</strong>.
      </p>
      <p class="mb-4">
        Na América portuguesa (Brasil), destacam-se o pau-brasil, o 
        <strong>ciclo do açúcar</strong> e posteriormente o 
        <strong>ciclo do ouro</strong>.
      </p>

      <h4 class="font-bold mb-2">Ciclos Econômicos no Brasil Colônia</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Açúcar:</strong> produção em engenhos, trabalho escravo africano, latifúndio.</li>
        <li><strong>Fumo:</strong> usado como moeda para compra de escravos.</li>
        <li><strong>Gado:</strong> interiorização da colonização, abastecimento interno.</li>
        <li><strong>Ouro:</strong> mineração em Minas Gerais, Goiás e Mato Grosso.</li>
      </ul>

      <h4 class="font-bold mb-2">Segundo Reinado e Abolição</h4>
      <p class="mb-2">
        O Segundo Reinado (1840–1889), com D. Pedro II, teve estabilidade política, 
        crescimento do café e modernização.
      </p>
      <p class="mb-2">
        A escravidão foi abolida em 1888, com a Lei Áurea, após leis graduais como 
        a do Ventre Livre (1871) e a dos Sexagenários (1885).
      </p>

      <h4 class="font-bold mb-2">República e Ditadura Militar</h4>
      <p class="mb-2">Em 1889, foi proclamada a República por Deodoro da Fonseca.</p>
      <p class="mb-4">
        De 1964 a 1985, o Brasil viveu uma <strong>Ditadura Militar</strong>, 
        marcada por censura, repressão política, prisões e desaparecimentos.
      </p>
    `,
    flashcards: [
      { front: 'Principais causas das Grandes Navegações', back: 'Busca de rotas para as Índias, metais preciosos, comércio, fé cristã e fortalecimento dos reis.' },
      { front: 'Países pioneiros na Expansão Marítima', back: 'Portugal e Espanha.' },
      { front: 'O que é Sistema Colonial?', back: 'Conjunto de relações em que a colônia existe para enriquecer a metrópole.' },
      { front: 'Principal produto do ciclo do açúcar', back: 'Açúcar, produzido em engenhos com trabalho escravo.' },
      { front: 'O que foi o ciclo do ouro?', back: 'Período de intensa mineração, principalmente em Minas Gerais, no século XVIII.' },
      { front: 'Quem governou o Segundo Reinado?', back: 'D. Pedro II, entre 1840 e 1889.' },
      { front: 'O que foi a Lei Áurea?', back: 'Lei de 1888 que aboliu oficialmente a escravidão no Brasil.' },
      { front: 'Quem proclamou a República?', back: 'Marechal Deodoro da Fonseca, em 1889.' },
      { front: 'Período da Ditadura Militar no Brasil', back: 'De 1964 a 1985, com forte repressão e censura.' },
      { front: 'O que eram as capitanias hereditárias?', back: 'Grandes faixas de terra doadas a donatários para administrar e colonizar.' },
      { front: 'O que é plantation?', back: 'Sistema baseado em latifúndio, monocultura e trabalho escravo voltado à exportação.' },
      { front: 'Quem foram os bandeirantes?', back: 'Expedicionários que exploravam o interior em busca de índios e metais preciosos.' }
    ],
    quiz: [
      { question: 'Um dos principais objetivos das Grandes Navegações era:', options: ['Encontrar novos esportes', 'Encontrar rotas para as Índias', 'Fugir da Europa', 'Descobrir a Antártida'], correct: 1 },
      { question: 'O Brasil foi colonizado por qual país?', options: ['Espanha', 'França', 'Inglaterra', 'Portugal'], correct: 3 },
      { question: 'O ciclo do açúcar usava principalmente:', options: ['Trabalho assalariado', 'Trabalho escravo africano', 'Trabalho voluntário', 'Robôs'], correct: 1 },
      { question: 'O ciclo do ouro aconteceu principalmente em:', options: ['Bahia', 'Pernambuco', 'Minas Gerais', 'Rio Grande do Sul'], correct: 2 },
      { question: 'A Lei Áurea foi assinada em:', options: ['1808', '1822', '1888', '1964'], correct: 2 },
      { question: 'Quem governou o Brasil no Segundo Reinado?', options: ['D. Pedro I', 'D. Pedro II', 'Getúlio Vargas', 'Juscelino Kubitschek'], correct: 1 },
      { question: 'A Proclamação da República ocorreu em:', options: ['1500', '1822', '1889', '1964'], correct: 2 },
      { question: 'A Ditadura Militar brasileira durou cerca de:', options: ['5 anos', '10 anos', '21 anos', '40 anos'], correct: 2 },
      { question: 'Capitanias hereditárias eram:', options: ['Pequenas cidades', 'Faixas de terra doadas a donatários', 'Navios de guerra', 'Tipos de impostos'], correct: 1 },
      { question: 'Plantation significa:', options: ['Minifúndio, policultura e trabalho livre', 'Latifúndio, monocultura, trabalho escravo e exportação', 'Apenas mineração', 'Apenas pecuária'], correct: 1 }
    ]
  },

  geografia: {
    name: 'Geografia',
    icon: '🌍',
    color: 'purple',
    summary: `
      <h3 class="text-xl font-bold mb-3">Geografia Física e Humana</h3>

      <h4 class="font-bold mb-2">Sistema Solar</h4>
      <p class="mb-2">
        O Sistema Solar é formado pelo Sol e 8 planetas: Mercúrio, Vênus, Terra, Marte, 
        Júpiter, Saturno, Urano e Netuno.
      </p>
      <p class="mb-4">
        A Terra é o único planeta conhecido que possui condições para a vida como a conhecemos.
      </p>

      <h4 class="font-bold mb-2">Movimentos da Terra</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Rotação:</strong> movimento em torno do próprio eixo, com duração aproximada de 24 horas. Causa os dias e as noites.</li>
        <li><strong>Translação:</strong> movimento ao redor do Sol, com duração aproximada de 365 dias. Responsável pelas estações do ano.</li>
      </ul>

      <h4 class="font-bold mb-2">Cartografia e Coordenadas</h4>
      <p class="mb-2">
        A cartografia estuda a representação da superfície terrestre por meio de mapas.
      </p>
      <p class="mb-2">
        <strong>Latitude:</strong> distância em graus em relação à Linha do Equador (0°).<br>
        <strong>Longitude:</strong> distância em graus em relação ao Meridiano de Greenwich (0°).
      </p>
      <p class="mb-4">
        <strong>Escala:</strong> relação entre a distância medida no mapa e a distância real.
      </p>

      <h4 class="font-bold mb-2">Zonas Térmicas</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Tropical:</strong> região próxima à Linha do Equador, clima mais quente.</li>
        <li><strong>Temperada:</strong> climas moderados, entre trópicos e círculos polares.</li>
        <li><strong>Polar:</strong> regiões geladas próximas aos polos.</li>
      </ul>

      <h4 class="font-bold mb-2">Fusos Horários</h4>
      <p class="mb-4">
        A Terra é dividida em 24 fusos horários de 15° cada. O Brasil possui 4 fusos horários
        oficialmente considerados (embora alguns sejam pouco usados).
      </p>

      <h4 class="font-bold mb-2">População</h4>
      <p class="mb-2">
        A <strong>demografia</strong> estuda o tamanho, a distribuição e a dinâmica das populações.
      </p>
      <p class="mb-2">
        <strong>Densidade demográfica:</strong> população total dividida pela área do território.
      </p>
      <p class="mb-2">
        <strong>Migração:</strong> deslocamento de pessoas de um lugar para outro, dentro de um país ou entre países.
      </p>
    `,
    flashcards: [
      { front: 'Quantos planetas tem o Sistema Solar?', back: '8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.' },
      { front: 'O que é rotação da Terra?', back: 'Movimento da Terra em torno do próprio eixo, dura cerca de 24 horas e causa dias e noites.' },
      { front: 'O que é translação da Terra?', back: 'Movimento da Terra ao redor do Sol, dura cerca de 365 dias e causa as estações do ano.' },
      { front: 'O que é latitude?', back: 'Distância em graus em relação à Linha do Equador (0°).' },
      { front: 'O que é longitude?', back: 'Distância em graus em relação ao Meridiano de Greenwich (0°).' },
      { front: 'O que é escala cartográfica?', back: 'Relação entre a distância no mapa e a distância real no terreno.' },
      { front: 'Quais são as zonas térmicas da Terra?', back: 'Zonas Tropical, Temperada e Polar.' },
      { front: 'Quantos fusos horários a Terra possui?', back: '24 fusos horários, cada um com 15° de longitude.' },
      { front: 'Quantos fusos horários tem o Brasil?', back: '4 fusos horários oficiais.' },
      { front: 'O que é demografia?', back: 'Estudo das populações humanas: tamanho, distribuição e evolução.' },
      { front: 'O que é densidade demográfica?', back: 'Relação entre população total e área do território (hab/km²).' },
      { front: 'O que é migração?', back: 'Deslocamento de pessoas de um lugar para outro.' }
    ],
    quiz: [
      { question: 'Quantos planetas fazem parte do Sistema Solar?', options: ['7', '8', '9', '10'], correct: 1 },
      { question: 'O movimento de rotação da Terra causa:', options: ['Estações do ano', 'Dia e noite', 'Fases da Lua', 'Marés'], correct: 1 },
      { question: 'O movimento de translação da Terra causa principalmente:', options: ['Dia e noite', 'Estações do ano', 'Ventos', 'Marés'], correct: 1 },
      { question: 'Latitude é medida em relação a:', options: ['Meridiano de Greenwich', 'Trópico de Câncer', 'Linha do Equador', 'Círculo Polar'], correct: 2 },
      { question: 'Longitude é medida em relação a:', options: ['Linha do Equador', 'Meridiano de Greenwich', 'Trópico de Capricórnio', 'Círculo Polar'], correct: 1 },
      { question: 'Cada fuso horário possui:', options: ['5°', '10°', '15°', '30°'], correct: 2 },
      { question: 'Zona térmica mais quente do planeta:', options: ['Temperada', 'Polar', 'Tropical', 'Glacial'], correct: 2 },
      { question: 'Demografia estuda:', options: ['Solos', 'Rios', 'Populações humanas', 'Montanhas'], correct: 2 },
      { question: 'Densidade demográfica é:', options: ['População/área', 'Área/população', 'Área/rios', 'População/rios'], correct: 0 },
      { question: 'Migração é:', options: ['Clima', 'Relevo', 'Movimento de pessoas', 'Rotação da Terra'], correct: 2 }
    ]
  },

  ciencias: {
    name: 'Ciências',
    icon: '🔬',
    color: 'red',
    summary: `
      <h3 class="text-xl font-bold mb-3">Ciências Naturais</h3>

      <h4 class="font-bold mb-2">Células e Organização do Corpo</h4>
      <p class="mb-2">
        A célula é a menor unidade estrutural e funcional dos seres vivos.
      </p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Procariontes:</strong> sem núcleo organizado (bactérias).</li>
        <li><strong>Eucariontes:</strong> com núcleo definido (animais, plantas, fungos).</li>
      </ul>
      <p class="mb-4">Níveis de organização: Célula → Tecido → Órgão → Sistema → Organismo.</p>

      <h4 class="font-bold mb-2">Ecologia</h4>
      <p class="mb-2">
        Estuda as relações entre os seres vivos e o ambiente.
      </p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Cadeia alimentar:</strong> Produtor → Consumidor → Decompositor.</li>
        <li><strong>Ecossistema:</strong> conjunto de seres vivos (fatores bióticos) e ambiente (fatores abióticos).</li>
        <li><strong>Biomas brasileiros:</strong> Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal.</li>
      </ul>

      <h4 class="font-bold mb-2">Sistemas do Corpo Humano</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Digestório:</strong> digestão e absorção de nutrientes.</li>
        <li><strong>Respiratório:</strong> entrada de oxigênio e saída de gás carbônico.</li>
        <li><strong>Circulatório:</strong> transporte de sangue, gases, nutrientes e resíduos.</li>
        <li><strong>Nervoso:</strong> coordena e controla o funcionamento do corpo.</li>
      </ul>

      <h4 class="font-bold mb-2">Noções de Física</h4>
      <p class="mb-2"><strong>Força:</strong> causa mudanças no movimento ou na forma dos corpos (F = m × a).</p>
      <p class="mb-2"><strong>Energia:</strong> capacidade de realizar trabalho.</p>
      <p class="mb-4"><strong>Ondas:</strong> perturbações que se propagam, como som e luz.</p>

      <h4 class="font-bold mb-2">Noções de Química</h4>
      <p class="mb-2"><strong>Átomo:</strong> menor partícula da matéria com propriedades químicas.</p>
      <p class="mb-2">
        Substâncias podem ser <strong>puras</strong> (um único tipo de substância) ou 
        <strong>misturas</strong> (dois ou mais tipos).
      </p>
    `,
    flashcards: [
      { front: 'O que é célula?', back: 'Menor unidade estrutural e funcional dos seres vivos.' },
      { front: 'Diferença entre célula procarionte e eucarionte', back: 'Procarionte não tem núcleo organizado; eucarionte tem núcleo definido.' },
      { front: 'Níveis de organização do corpo', back: 'Célula → Tecido → Órgão → Sistema → Organismo.' },
      { front: 'O que é ecologia?', back: 'Ramo da biologia que estuda as relações entre os seres vivos e o ambiente.' },
      { front: 'Definição de cadeia alimentar', back: 'Sequência de seres vivos em que um serve de alimento ao outro.' },
      { front: 'Biomas brasileiros principais', back: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal.' },
      { front: 'Função do sistema respiratório', back: 'Realizar as trocas gasosas (O₂ entra, CO₂ sai).' },
      { front: 'Função do sistema circulatório', back: 'Transportar sangue, nutrientes e gases pelo organismo.' },
      { front: 'Fórmula da força na física', back: 'F = m × a (força = massa × aceleração).' },
      { front: 'O que é energia?', back: 'Capacidade de realizar trabalho ou produzir mudanças.' },
      { front: 'O que é átomo?', back: 'Menor partícula da matéria que conserva propriedades químicas.' },
      { front: 'Substância pura x mistura', back: 'Pura: um único tipo de substância; mistura: combinação de duas ou mais.' }
    ],
    quiz: [
      { question: 'A menor unidade dos seres vivos é:', options: ['Tecido', 'Célula', 'Órgão', 'Sistema'], correct: 1 },
      { question: 'Células com núcleo definido são chamadas de:', options: ['Procariontes', 'Eucariontes', 'Neurônios', 'Hemácias'], correct: 1 },
      { question: 'Sequência correta de organização:', options: ['Órgão → Célula → Tecido', 'Célula → Órgão → Tecido', 'Célula → Tecido → Órgão', 'Sistema → Órgão → Tecido'], correct: 2 },
      { question: 'Na cadeia alimentar, produtores são:', options: ['Animais carnívoros', 'Plantas e algas', 'Decompositores', 'Predadores'], correct: 1 },
      { question: 'Bioma com maior floresta tropical do mundo:', options: ['Cerrado', 'Caatinga', 'Amazônia', 'Pampa'], correct: 2 },
      { question: 'Sistema responsável pelas trocas gasosas:', options: ['Digestório', 'Respiratório', 'Circulatório', 'Nervoso'], correct: 1 },
      { question: 'Na fórmula F = m × a, F significa:', options: ['Força', 'Fricção', 'Frequência', 'Fio'], correct: 0 },
      { question: 'Energia é:', options: ['Massa de um corpo', 'Gravidade da Terra', 'Capacidade de realizar trabalho', 'Temperatura do ar'], correct: 2 },
      { question: 'Átomo é:', options: ['Conjunto de células', 'Menor partícula da matéria', 'Tipo de energia', 'Mistura de gases'], correct: 1 },
      { question: 'Mistura é:', options: ['Substância só com um componente', 'União de duas ou mais substâncias', 'Apenas água', 'Apenas gás'], correct: 1 }
    ]
  },

  ingles: {
    name: 'Inglês',
    icon: '🇬🇧',
    color: 'indigo',
    summary: `
      <h3 class="text-xl font-bold mb-3">English – Gramática Básica</h3>

      <h4 class="font-bold mb-2">Artigos (Articles)</h4>
      <p class="mb-2">
        <strong>Definite article:</strong> THE (o, a, os, as).<br>
        <strong>Indefinite articles:</strong> A (antes de som de consoante), AN (antes de som de vogal).
      </p>

      <h4 class="font-bold mb-2">Simple Present</h4>
      <p class="mb-2">Usado para hábitos, rotinas e verdades gerais.</p>
      <p class="mb-2"><strong>Afirmação:</strong> I work, You play, He works (3rd person + s).</p>
      <p class="mb-2"><strong>Negativa:</strong> I don’t work, He doesn’t work.</p>
      <p class="mb-4"><strong>Interrogativa:</strong> Do you work? Does he work?</p>

      <h4 class="font-bold mb-2">Simple Past</h4>
      <p class="mb-2">Ações concluídas no passado.</p>
      <p class="mb-2"><strong>Regulares:</strong> add -ed (work → worked).</p>
      <p class="mb-4"><strong>Irregulares:</strong> go → went, see → saw, have → had.</p>

      <h4 class="font-bold mb-2">Simple Future</h4>
      <p class="mb-2"><strong>Will:</strong> decisões no momento da fala. Ex.: I will study.</p>
      <p class="mb-4"><strong>Going to:</strong> planos futuros. Ex.: I am going to study.</p>

      <h4 class="font-bold mb-2">Conditional Sentences</h4>
      <p class="mb-2"><strong>Type 1:</strong> If + present, will + verb. (Situação real)</p>
      <p class="mb-2">Ex.: If you study, you will pass.</p>
      <p class="mb-2"><strong>Type 2:</strong> If + past, would + verb. (Situação hipotética)</p>
      <p class="mb-2">Ex.: If I had money, I would travel.</p>

      <h4 class="font-bold mb-2">Numerais (Numbers)</h4>
      <p class="mb-2">De 1 a 20: one, two, three, four, five, ... twenty.</p>
      <p class="mb-2">A partir de 21: twenty-one, twenty-two, etc.</p>
    `,
    flashcards: [
      { front: 'Uso de A e AN', back: 'A antes de som de consoante (a book), AN antes de som de vogal (an apple).' },
      { front: 'Uso de THE', back: 'Artigo definido para algo específico (the book = o livro).' },
      { front: 'Simple Present – 3ª pessoa', back: 'Adiciona -s ao verbo: He works, She plays, It rains.' },
      { front: 'Negativa no Simple Present', back: 'I/you/we/they + don’t + verb; he/she/it + doesn’t + verb.' },
      { front: 'Interrogativa no Simple Present', back: 'Do + I/you/we/they + verb? Does + he/she/it + verb?' },
      { front: 'Formação do Simple Past regular', back: 'Verbo + -ed: work → worked, play → played.' },
      { front: 'Verbos irregulares – exemplos', back: 'go → went, see → saw, have → had, do → did.' },
      { front: 'Uso de WILL', back: 'Decisões no momento da fala: I will call you.' },
      { front: 'Uso de GOING TO', back: 'Planos já decididos: I am going to travel.' },
      { front: 'Conditional Type 1 – estrutura', back: 'If + present, will + verb.' },
      { front: 'Conditional Type 2 – estrutura', back: 'If + past, would + verb.' },
      { front: 'Numerais de 1 a 5 em inglês', back: 'one, two, three, four, five.' }
    ],
    quiz: [
      { question: 'Complete: ___ apple a day keeps the doctor away.', options: ['A', 'An', 'The', 'Some'], correct: 1 },
      { question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'went'], correct: 1 },
      { question: 'I ___ a movie yesterday.', options: ['watch', 'watches', 'watched', 'watching'], correct: 2 },
      { question: 'They ___ study tomorrow.', options: ['will', 'would', 'are', 'did'], correct: 0 },
      { question: 'If you study, you ___ pass.', options: ['will', 'would', 'can\'t', 'did'], correct: 0 },
      { question: 'The past of "go" is:', options: ['goed', 'went', 'gone', 'goes'], correct: 1 },
      { question: 'Negative: He ___ like coffee.', options: ['don’t', 'doesn’t', 'didn’t', 'isn’t'], correct: 1 },
      { question: 'Question: ___ you speak English?', options: ['Do', 'Does', 'Did', 'Are'], correct: 0 },
      { question: 'Future plan: I am ___ to travel.', options: ['go', 'goes', 'going', 'went'], correct: 2 },
      { question: 'Type 2: If I had money, I ___ travel.', options: ['will', 'would', 'going to', 'can'], correct: 1 }
    ]
  },

  artes: {
    name: 'Artes',
    icon: '🎨',
    color: 'pink',
    summary: `
      <h3 class="text-xl font-bold mb-3">História da Arte e Linguagens Artísticas</h3>

      <h4 class="font-bold mb-2">História da Arte</h4>
      <p class="mb-2">
        A História da Arte estuda a evolução das expressões artísticas ao longo do tempo,
        como pintura, escultura e arquitetura. Observa estilos, técnicas, temas e contextos
        históricos em que as obras foram produzidas.
      </p>

      <h4 class="font-bold mb-2">Arte na Antiguidade</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Egito:</strong> arte ligada à religião e ao culto aos faraós; uso da simetria, frontalidade e monumentos como pirâmides.</li>
        <li><strong>Mesopotâmia:</strong> desenvolvimento de relevo, escultura e arquitetura com forte caráter decorativo.</li>
        <li><strong>Grécia:</strong> busca do ideal de beleza, proporção e equilíbrio. Templos (como o Partenon) e esculturas realistas.</li>
        <li><strong>Roma:</strong> herda muito da arte grega; desenvolve arquitetura monumental (arcos, aquedutos, anfiteatros).</li>
      </ul>

      <h4 class="font-bold mb-2">Arte na Idade Média</h4>
      <p class="mb-2">
        Fortemente influenciada pela Igreja Católica, com temas religiosos predominantes.
      </p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Estilo Românico:</strong> construções robustas, paredes grossas, poucas janelas e arcos de volta perfeita.</li>
        <li><strong>Estilo Gótico:</strong> construções altas, com vitrais, arcos ogivais e sensação de verticalidade.</li>
      </ul>

      <h4 class="font-bold mb-2">Arte na Idade Moderna</h4>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Barroco:</strong> arte dramática, com contrastes de luz e sombra, emoção e movimento. No Brasil, ligado à religiosidade e à riqueza do ouro.</li>
        <li><strong>Realismo:</strong> representação da realidade social, com temas como pobreza, injustiça e crítica social.</li>
        <li><strong>Impressionismo:</strong> surgido na França no século XIX, valoriza a luz, a cor e as impressões momentâneas da natureza. Pinturas ao ar livre, pinceladas soltas.</li>
      </ul>

      <h4 class="font-bold mb-2">Linguagens Artísticas</h4>
      <p class="mb-2">
        As linguagens artísticas incluem pintura, escultura, arquitetura, música, dança, teatro, literatura e cinema.
      </p>
      <p class="mb-4">
        Cada linguagem possui seus próprios códigos, materiais e formas de expressão, mas todas
        comunicam ideias, sentimentos e visões de mundo.
      </p>

      <h4 class="font-bold mb-2">Folclore</h4>
      <p class="mb-2">
        Folclore é o conjunto de tradições, lendas, danças, festas, músicas, provérbios e costumes 
        de um povo. É transmitido de geração em geração e representa a identidade cultural de uma comunidade.
      </p>
      <p class="mb-2">
        No Brasil, o folclore é riquíssimo: festas juninas, boi-bumbá, frevo, maracatu, lendas como Saci,
        Curupira, Iara, entre muitas outras.
      </p>
    `,
    flashcards: [
      { front: 'O que estuda a História da Arte?', back: 'A evolução das expressões artísticas (pintura, escultura, arquitetura etc.) ao longo do tempo.' },
      { front: 'Característica marcante da arte egípcia', back: 'Ligada à religião e ao culto aos faraós, com uso de simetria e frontalidade.' },
      { front: 'Objetivo da arte grega clássica', back: 'Buscar o ideal de beleza, proporção e equilíbrio do corpo humano.' },
      { front: 'Contribuição da arte romana', back: 'Desenvolvimento da arquitetura monumental, como arcos, anfiteatros e aquedutos.' },
      { front: 'O que caracteriza o estilo românico?', back: 'Construções pesadas, paredes grossas, poucas janelas e arcos de volta perfeita.' },
      { front: 'O que caracteriza o estilo gótico?', back: 'Construções altas, vitrais coloridos, arcos ogivais e sensação de verticalidade.' },
      { front: 'Principais características do Barroco', back: 'Dramatismo, contraste de luz e sombra, emoção e movimento.' },
      { front: 'O que é Realismo na arte?', back: 'Movimento que retrata a realidade social de forma objetiva, muitas vezes com crítica.' },
      { front: 'O que é Impressionismo?', back: 'Movimento que valoriza luz e cor, com pinceladas soltas e cenas ao ar livre.' },
      { front: 'Exemplos de linguagens artísticas', back: 'Pintura, escultura, música, dança, teatro, literatura, cinema.' },
      { front: 'Definição de folclore', back: 'Conjunto de tradições, lendas, danças, festas e costumes transmitidos entre gerações.' },
      { front: 'Exemplos de folclore brasileiro', back: 'Festas juninas, boi-bumbá, frevo, maracatu, Saci, Curupira, Iara.' }
    ],
    quiz: [
      { question: 'A arte egípcia estava fortemente ligada a:', options: ['Esportes', 'Religião e culto aos faraós', 'Ficção científica', 'Humor'], correct: 1 },
      { question: 'A arte grega clássica buscava principalmente:', options: ['Desordem e caos', 'Beleza ideal, proporção e equilíbrio', 'Somente temas religiosos', 'Apenas natureza'], correct: 1 },
      { question: 'Uma característica do estilo românico é:', options: ['Paredes finas e grandes vitrais', 'Paredes grossas e poucas janelas', 'Arranha-céus de vidro', 'Uso de metal e concreto armado'], correct: 1 },
      { question: 'O estilo gótico é marcado por:', options: ['Formas horizontais e simples', 'Torres altas, vitrais e arcos ogivais', 'Esculturas pré-históricas', 'Somente pinturas rupestres'], correct: 1 },
      { question: 'O Barroco é conhecido pelo:', options: ['Equilíbrio simples e racional', 'Uso restrito de cores', 'Dramatismo e contraste de luz e sombra', 'Apenas cenas do cotidiano urbano'], correct: 2 },
      { question: 'O Realismo dá destaque a:', options: ['Temas mitológicos fantasiosos', 'Abstrações sem forma', 'Realidade social e crítica', 'Apenas religião'], correct: 2 },
      { question: 'O Impressionismo surgiu em qual país?', options: ['Itália', 'França', 'Brasil', 'Alemanha'], correct: 1 },
      { question: 'Qual é uma característica do Impressionismo?', options: ['Linhas rígidas e geométricas', 'Pinceladas soltas e foco na luz', 'Esculturas em pedra apenas', 'Uso exclusivo de branco e preto'], correct: 1 },
      { question: 'Folclore é:', options: ['Apenas lendas infantis', 'Conjunto de tradições, lendas, danças e costumes de um povo', 'Só músicas antigas', 'Arte moderna europeia'], correct: 1 },
      { question: 'Exemplo de manifestação folclórica brasileira:', options: ['Ópera italiana', 'Ballet russo', 'Festas juninas', 'Rock inglês'], correct: 2 }
    ]
  }
};

// ------------------- COMPONENTE PRINCIPAL -------------------

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [mode, setMode] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('studyProgress');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.subject && studyData[data.subject]) {
        setSelectedSubject(data.subject);
        setMode(data.mode || null);
      }
    }
  }, []);

  const saveProgress = (subject, studyMode) => {
    localStorage.setItem(
      'studyProgress',
      JSON.stringify({
        subject,
        mode: studyMode,
        timestamp: new Date().toISOString()
      })
    );
  };

  const selectSubject = (subjectKey) => {
    setSelectedSubject(subjectKey);
    setMode(null);
    setCurrentCard(0);
    setIsFlipped(false);
    setQuizAnswers([]);
    setShowResults(false);
    saveProgress(subjectKey, null);
  };

  const selectMode = (studyMode) => {
    setMode(studyMode);
    setCurrentCard(0);
    setIsFlipped(false);
    setQuizAnswers([]);
    setShowResults(false);
    saveProgress(selectedSubject, studyMode);
  };

  const goBack = () => {
    if (mode) {
      setMode(null);
      setCurrentCard(0);
      setIsFlipped(false);
      setQuizAnswers([]);
      setShowResults(false);
    } else {
      setSelectedSubject(null);
    }
  };

  const nextCard = () => {
    const subject = studyData[selectedSubject];
    if (currentCard < subject.flashcards.length - 1) {
      setCurrentCard((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const submitQuiz = () => {
    const subject = studyData[selectedSubject];
    let correctCount = 0;
    subject.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correctCount++;
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  // ------------------- TELAS -------------------

  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
            📚 Sistema de Estudo Completo
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Escolha uma matéria para começar a estudar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.keys(studyData).map((key) => {
              const subject = studyData[key];
              return (
                <button
                  key={key}
                  onClick={() => selectSubject(key)}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-l-4 border-${subject.color}-500`}
                >
                  <div className="text-5xl mb-3">{subject.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {subject.name}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {subject.quiz.length} questões • {subject.flashcards.length} flashcards
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const subject = studyData[selectedSubject];

  if (!mode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
            <div className="text-6xl mb-4 text-center">{subject.icon}</div>
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              {subject.name}
            </h1>
            <p className="text-center text-gray-600">
              Selecione um modo de estudo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => selectMode('summary')}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-xl font-bold mb-2">Resumo</h3>
              <p className="text-gray-600">Leia o conteúdo completo</p>
            </button>
            <button
              onClick={() => selectMode('flashcards')}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-3">🎴</div>
              <h3 className="text-xl font-bold mb-2">Flashcards</h3>
              <p className="text-gray-600">
                {subject.flashcards.length} cartões de revisão
              </p>
            </button>
            <button
              onClick={() => selectMode('quiz')}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Quiz</h3>
              <p className="text-gray-600">
                {subject.quiz.length} questões de prática
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'summary') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">{subject.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {subject.name}
                </h1>
                <p className="text-gray-600">Resumo do conteúdo</p>
              </div>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: subject.summary }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'flashcards') {
    const card = subject.flashcards[currentCard];
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={goBack}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {subject.icon} {subject.name} – Flashcards
              </h2>
              <span className="text-gray-600">
                {currentCard + 1} / {subject.flashcards.length}
              </span>
            </div>
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 min-h-64 flex items-center justify-center cursor-pointer transform transition-all hover:scale-105 shadow-lg"
            >
              <p className="text-white text-xl text-center">
                {isFlipped ? card.back : card.front}
              </p>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Clique no cartão para virar
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevCard}
                disabled={currentCard === 0}
                className="px-6 py-3 bg-gray-200 rounded-lg font-semibold disabled:opacity-50 hover:bg-gray-300 transition-all"
              >
                ← Anterior
              </button>
              <button
                onClick={nextCard}
                disabled={currentCard === subject.flashcards.length - 1}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold disabled:opacity-50 hover:bg-indigo-700 transition-all"
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'quiz') {
    const allAnswered = subject.quiz.every((_, i) => quizAnswers[i] !== undefined);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            ← Voltar
          </button>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {subject.icon} Quiz de {subject.name}
            </h2>

            {!showResults ? (
              <>
                {subject.quiz.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-3 text-gray-800">
                      {qIndex + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label
                          key={oIndex}
                          className="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-indigo-50 transition-all"
                        >
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            checked={quizAnswers[qIndex] === oIndex}
                            onChange={() => handleQuizAnswer(qIndex, oIndex)}
                            className="mr-3"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={submitQuiz}
                  disabled={!allAnswered}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold text-lg disabled:opacity-50 hover:bg-indigo-700 transition-all"
                >
                  Enviar Respostas
                </button>
              </>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {score >= subject.quiz.length * 0.7 ? '🎉' : '📚'}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Você acertou {score} de {subject.quiz.length} questões!
                </h3>
                <p className="text-xl mb-6 text-gray-600">
                  {score >= subject.quiz.length * 0.7
                    ? 'Parabéns! Você foi muito bem!'
                    : 'Continue praticando, você está no caminho certo!'}
                </p>

                <div className="space-y-4 mb-6 text-left">
                  {subject.quiz.map((q, qIndex) => (
                    <div
                      key={qIndex}
                      className={`p-4 rounded-lg ${
                        quizAnswers[qIndex] === q.correct
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      }`}
                    >
                      <p className="font-semibold mb-2">{q.question}</p>
                      <p className="text-sm">
                        Sua resposta:{' '}
                        {quizAnswers[qIndex] !== undefined
                          ? q.options[quizAnswers[qIndex]]
                          : 'não respondida'}
                      </p>
                      {quizAnswers[qIndex] !== q.correct && (
                        <p className="text-sm text-green-700 mt-1">
                          Correta: {q.options[q.correct]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all"
                >
                  Tentar novamente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// Renderização
ReactDOM.render(<App />, document.getElementById('root'));
