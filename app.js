const { useState, useEffect } = React;

const studyData = {
    matematica: {
        name: 'Matemática',
        icon: '🔢',
        color: 'blue',
        summary: `
            <h3 class="text-xl font-bold mb-3">Números Naturais e Operações</h3>
            <p class="mb-2"><strong>Números Naturais (ℕ):</strong> São os números inteiros não-negativos: 0, 1, 2, 3, 4, 5...</p>
            <p class="mb-4">Usados para contar e ordenar objetos.</p>
            
            <h4 class="font-bold mb-2">Divisão</h4>
            <p class="mb-2">Na divisão, temos: <strong>Dividendo = Divisor × Quociente + Resto</strong></p>
            <p class="mb-4">Exemplo: 17 ÷ 5 = 3 (quociente) com resto 2, pois 17 = 5 × 3 + 2</p>
            
            <h4 class="font-bold mb-2">Regras de Divisibilidade</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Por 2:</strong> Número par (termina em 0, 2, 4, 6, 8)</li>
                <li><strong>Por 3:</strong> Soma dos algarismos é divisível por 3</li>
                <li><strong>Por 5:</strong> Termina em 0 ou 5</li>
                <li><strong>Por 10:</strong> Termina em 0</li>
            </ul>
            
            <h4 class="font-bold mb-2">Números Primos</h4>
            <p class="mb-2">São números maiores que 1 que têm apenas dois divisores: 1 e ele mesmo.</p>
            <p class="mb-4">Exemplos: 2, 3, 5, 7, 11, 13, 17, 19, 23...</p>
            
            <h4 class="font-bold mb-2">MDC e MMC</h4>
            <p class="mb-2"><strong>MDC (Máximo Divisor Comum):</strong> Maior número que divide dois ou mais números.</p>
            <p class="mb-4"><strong>MMC (Mínimo Múltiplo Comum):</strong> Menor número que é múltiplo de dois ou mais números.</p>
        `,
        flashcards: [
            { front: 'O que são números naturais?', back: 'São os números inteiros não-negativos: 0, 1, 2, 3, 4, 5... Usados para contar e ordenar.' },
            { front: 'Qual a fórmula da divisão?', back: 'Dividendo = Divisor × Quociente + Resto' },
            { front: 'Regra de divisibilidade por 2', back: 'O número deve ser par (terminar em 0, 2, 4, 6 ou 8)' },
            { front: 'Regra de divisibilidade por 3', back: 'A soma dos algarismos deve ser divisível por 3' },
            { front: 'O que é um número primo?', back: 'Número maior que 1 que tem apenas dois divisores: 1 e ele mesmo' },
            { front: 'Quais são os primeiros números primos?', back: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29...' },
            { front: 'O que é MDC?', back: 'Máximo Divisor Comum - o maior número que divide dois ou mais números' },
            { front: 'O que é MMC?', back: 'Mínimo Múltiplo Comum - o menor número que é múltiplo de dois ou mais números' },
            { front: 'Regra de divisibilidade por 5', back: 'O número deve terminar em 0 ou 5' },
            { front: 'Regra de divisibilidade por 10', back: 'O número deve terminar em 0' },
            { front: 'O que é fatoração?', back: 'É decompor um número em fatores primos (produto de números primos)' },
            { front: '2 é primo?', back: 'Sim! É o único número primo par.' }
        ],
        quiz: [
            { question: '17 dividido por 5 resulta em quociente e resto:', options: ['3 e 2', '2 e 7', '4 e 1', '3 e 1'], correct: 0 },
            { question: 'Qual número é divisível por 3?', options: ['124', '135', '247', '341'], correct: 1 },
            { question: 'Qual destes é um número primo?', options: ['15', '21', '17', '27'], correct: 2 },
            { question: 'O MDC de 12 e 18 é:', options: ['2', '3', '6', '9'], correct: 2 },
            { question: 'O MMC de 4 e 6 é:', options: ['12', '24', '8', '18'], correct: 0 },
            { question: 'Qual número é divisível por 2 e por 5?', options: ['25', '30', '35', '42'], correct: 1 },
            { question: 'A soma dos algarismos de 243 é:', options: ['7', '8', '9', '10'], correct: 2 },
            { question: 'Quantos números primos existem entre 1 e 10?', options: ['3', '4', '5', '6'], correct: 1 },
            { question: 'A fatoração de 12 em números primos é:', options: ['2 × 6', '3 × 4', '2² × 3', '2 × 3²'], correct: 2 },
            { question: 'Qual é o menor número primo?', options: ['0', '1', '2', '3'], correct: 2 }
        ]
    },
    portugues: {
        name: 'Português',
        icon: '📚',
        color: 'green',
        summary: `
            <h3 class="text-xl font-bold mb-3">Conjuntos</h3>
            <p class="mb-4">Conjunto é uma coleção de objetos, chamados de elementos. Representamos conjuntos com letras maiúsculas.</p>
            
            <h4 class="font-bold mb-2">Formas de Representar Conjuntos</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Enumeração:</strong> A = {1, 2, 3, 4, 5}</li>
                <li><strong>Propriedade:</strong> A = {x | x é número natural menor que 6}</li>
                <li><strong>Diagrama de Venn:</strong> Representação gráfica</li>
            </ul>
            
            <h4 class="font-bold mb-2">Relações</h4>
            <p class="mb-2"><strong>Pertinência (∈):</strong> Indica que um elemento pertence a um conjunto</p>
            <p class="mb-4">Exemplo: 3 ∈ {1, 2, 3, 4}</p>
            
            <h4 class="font-bold mb-2">Conjuntos Importantes</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>ℕ (Naturais):</strong> {0, 1, 2, 3, 4...}</li>
                <li><strong>ℤ (Inteiros):</strong> {...-2, -1, 0, 1, 2...}</li>
                <li><strong>ℚ (Racionais):</strong> Frações e decimais finitos</li>
                <li><strong>ℝ (Reais):</strong> Todos os números da reta</li>
            </ul>
            
            <h4 class="font-bold mb-2">Operações com Conjuntos</h4>
            <p class="mb-2"><strong>União (∪):</strong> Todos os elementos de A ou B</p>
            <p class="mb-2"><strong>Interseção (∩):</strong> Elementos comuns a A e B</p>
            <p class="mb-2"><strong>Diferença (-):</strong> Elementos de A que não estão em B</p>
        `,
        flashcards: [
            { front: 'O que é um conjunto?', back: 'Uma coleção de objetos chamados elementos, representada por letras maiúsculas' },
            { front: 'O que significa o símbolo ∈?', back: 'Pertinência - indica que um elemento pertence a um conjunto' },
            { front: 'O que é o conjunto ℕ?', back: 'Conjunto dos números naturais: {0, 1, 2, 3, 4...}' },
            { front: 'O que é o conjunto ℤ?', back: 'Conjunto dos números inteiros: {...-2, -1, 0, 1, 2...}' },
            { front: 'O que é união de conjuntos?', back: 'Operação (∪) que resulta em todos os elementos de A ou B' },
            { front: 'O que é interseção de conjuntos?', back: 'Operação (∩) que resulta nos elementos comuns a A e B' },
            { front: 'O que é um subconjunto?', back: 'Conjunto A é subconjunto de B (A ⊂ B) se todos elementos de A estão em B' },
            { front: 'O que é conjunto vazio?', back: 'Conjunto sem elementos, representado por ∅ ou {}' },
            { front: 'O que é diferença de conjuntos?', back: 'A - B são os elementos de A que não estão em B' },
            { front: 'Como enumerar um conjunto?', back: 'Listando seus elementos entre chaves: A = {1, 2, 3}' },
            { front: 'O que é o conjunto ℚ?', back: 'Conjunto dos números racionais (frações e decimais finitos)' },
            { front: 'O que é o conjunto ℝ?', back: 'Conjunto dos números reais (todos os números da reta numérica)' }
        ],
        quiz: [
            { question: 'Se A = {1, 2, 3} e B = {3, 4, 5}, qual é A ∪ B?', options: ['{3}', '{1, 2, 3, 4, 5}', '{1, 2, 4, 5}', '{4, 5}'], correct: 1 },
            { question: 'Se A = {1, 2, 3} e B = {2, 3, 4}, qual é A ∩ B?', options: ['{1}', '{4}', '{2, 3}', '{1, 2, 3, 4}'], correct: 2 },
            { question: 'Qual símbolo representa "pertence"?', options: ['⊂', '∪', '∈', '∩'], correct: 2 },
            { question: 'O conjunto dos números naturais é:', options: ['ℤ', 'ℕ', 'ℚ', 'ℝ'], correct: 1 },
            { question: 'Qual é o conjunto vazio?', options: ['{0}', '∅', '{1}', 'ℕ'], correct: 1 },
            { question: 'Se A = {1, 2, 3} e B = {2, 3}, então:', options: ['A ⊂ B', 'B ⊂ A', 'A = B', 'A ∩ B = ∅'], correct: 1 },
            { question: 'A diferença A - B, onde A = {1, 2, 3} e B = {2, 3, 4}, é:', options: ['{1}', '{4}', '{1, 4}', '{2, 3}'], correct: 0 },
            { question: 'Qual conjunto contém números negativos?', options: ['ℕ', 'ℤ', 'Ambos', 'Nenhum'], correct: 1 },
            { question: 'O número -5 pertence a qual conjunto?', options: ['Apenas ℕ', 'Apenas ℤ', 'ℤ e ℝ', 'Apenas ℝ'], correct: 2 },
            { question: 'Quantos elementos tem o conjunto {a, b, c, d}?', options: ['3', '4', '5', '6'], correct: 1 }
        ]
    },
    historia: {
        name: 'História',
        icon: '🏛️',
        color: 'yellow',
        summary: `
            <h3 class="text-xl font-bold mb-3">Expansão Marítima e Colonização</h3>
            
            <h4 class="font-bold mb-2">Expansão Marítima (Séculos XV-XVI)</h4>
            <p class="mb-2">Causas: busca por especiarias, metais preciosos, expansão da fé cristã e novas rotas comerciais.</p>
            <p class="mb-4"><strong>Pioneiros:</strong> Portugal e Espanha lideraram as grandes navegações.</p>
            
            <h4 class="font-bold mb-2">Colonização do Brasil</h4>
            <p class="mb-2"><strong>Portuguesa (1500-1822):</strong> Exploração do pau-brasil, capitanias hereditárias, governo-geral, ciclos econômicos.</p>
            <p class="mb-2"><strong>Sistema Colonial:</strong> Pacto Colonial, monopólio comercial, plantation (monocultura de exportação).</p>
            
            <h4 class="font-bold mb-2">Ciclos Econômicos</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Açúcar (séc. XVI-XVII):</strong> Nordeste, engenhos, mão de obra escrava africana</li>
                <li><strong>Ouro (séc. XVIII):</strong> Minas Gerais, Goiás, Mato Grosso</li>
                <li><strong>Café (séc. XIX):</strong> Vale do Paraíba, São Paulo</li>
            </ul>
            
            <h4 class="font-bold mb-2">Bandeirismo</h4>
            <p class="mb-4">Expedições que expandiram o território brasileiro além do Tratado de Tordesilhas, buscando ouro, pedras preciosas e indígenas para escravizar.</p>
            
            <h4 class="font-bold mb-2">Segundo Reinado (1840-1889)</h4>
            <p class="mb-2">Governo de D. Pedro II: estabilidade política, desenvolvimento econômico, Guerra do Paraguai (1864-1870).</p>
            <p class="mb-4"><strong>Abolição:</strong> Lei Eusébio de Queirós (1850), Lei do Ventre Livre (1871), Lei dos Sexagenários (1885), Lei Áurea (1888).</p>
            
            <h4 class="font-bold mb-2">República</h4>
            <p class="mb-2"><strong>Proclamação (1889):</strong> Golpe militar liderado por Deodoro da Fonseca.</p>
            <p class="mb-2"><strong>Ditadura Militar (1964-1985):</strong> Golpe militar, AI-5, repressão, censura, "milagre econômico".</p>
        `,
        flashcards: [
            { front: 'Quando começou a Expansão Marítima?', back: 'Séculos XV e XVI, liderada por Portugal e Espanha' },
            { front: 'Quais eram os objetivos da Expansão Marítima?', back: 'Buscar especiarias, metais preciosos, expandir a fé cristã e encontrar novas rotas comerciais' },
            { front: 'O que foi o Pacto Colonial?', back: 'Sistema de monopólio comercial onde a colônia só podia comerciar com a metrópole' },
            { front: 'O que foi o ciclo do açúcar?', back: 'Período (séc. XVI-XVII) de produção açucareira no Nordeste com engenhos e escravidão africana' },
            { front: 'O que foi o Bandeirismo?', back: 'Expedições que expandiram o território brasileiro buscando ouro e escravizando indígenas' },
            { front: 'Quando foi o ciclo do ouro?', back: 'Século XVIII, principalmente em Minas Gerais, Goiás e Mato Grosso' },
            { front: 'Quem governou no Segundo Reinado?', back: 'D. Pedro II (1840-1889), período de estabilidade e desenvolvimento' },
            { front: 'O que foi a Lei Áurea?', back: 'Lei de 1888 que aboliu a escravidão no Brasil, assinada pela Princesa Isabel' },
            { front: 'Quando foi proclamada a República?', back: '1889, através de um golpe militar liderado por Deodoro da Fonseca' },
            { front: 'Quando foi a Ditadura Militar?', back: '1964-1985, período de repressão, censura e AI-5' },
            { front: 'O que foi a Guerra do Paraguai?', back: 'Conflito (1864-1870) entre Paraguai e a Tríplice Aliança (Brasil, Argentina, Uruguai)' },
            { front: 'O que eram as Capitanias Hereditárias?', back: 'Sistema de divisão territorial do Brasil colonial em lotes doados a nobres portugueses' }
        ],
        quiz: [
            { question: 'Qual país liderou a Expansão Marítima?', options: ['Inglaterra', 'França', 'Portugal', 'Holanda'], correct: 2 },
            { question: 'O Brasil foi colonizado por:', options: ['Espanha', 'Portugal', 'França', 'Inglaterra'], correct: 1 },
            { question: 'O ciclo do açúcar ocorreu principalmente em:', options: ['Sul', 'Nordeste', 'Norte', 'Centro-Oeste'], correct: 1 },
            { question: 'A Lei Áurea foi assinada em:', options: ['1850', '1871', '1885', '1888'], correct: 3 },
            { question: 'Quem proclamou a República no Brasil?', options: ['D. Pedro I', 'D. Pedro II', 'Deodoro da Fonseca', 'Getúlio Vargas'], correct: 2 },
            { question: 'O ciclo do ouro ocorreu no século:', options: ['XVI', 'XVII', 'XVIII', 'XIX'], correct: 2 },
            { question: 'O Segundo Reinado foi governado por:', options: ['D. Pedro I', 'D. Pedro II', 'D. João VI', 'Princesa Isabel'], correct: 1 },
            { question: 'A Ditadura Militar brasileira durou:', options: ['10 anos', '15 anos', '21 anos', '30 anos'], correct: 2 },
            { question: 'O que eram os Bandeirantes?', options: ['Soldados', 'Exploradores', 'Comerciantes', 'Religiosos'], correct: 1 },
            { question: 'A Guerra do Paraguai ocorreu entre:', options: ['1850-1860', '1864-1870', '1870-1880', '1880-1890'], correct: 1 }
        ]
    },
    geografia: {
        name: 'Geografia',
        icon: '🌍',
        color: 'purple',
        summary: `
            <h3 class="text-xl font-bold mb-3">Geografia Física e Humana</h3>
            
            <h4 class="font-bold mb-2">Sistema Solar</h4>
            <p class="mb-4">Formado pelo Sol e 8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. A Terra é o único planeta com vida conhecida.</p>
            
            <h4 class="font-bold mb-2">Movimentos da Terra</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Rotação:</strong> Movimento em torno do próprio eixo (24h) - causa dia e noite</li>
                <li><strong>Translação:</strong> Movimento ao redor do Sol (365 dias) - causa as estações do ano</li>
            </ul>
            
            <h4 class="font-bold mb-2">Cartografia</h4>
            <p class="mb-2"><strong>Coordenadas Geográficas:</strong> Latitude (paralelos) e Longitude (meridianos)</p>
            <p class="mb-2"><strong>Escalas:</strong> Relação entre distância no mapa e distância real</p>
            <p class="mb-4">Exemplo: Escala 1:100.000 significa que 1 cm no mapa = 100.000 cm (1 km) na realidade</p>
            
            <h4 class="font-bold mb-2">Zonas Térmicas</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Tropical:</strong> Entre os trópicos, clima quente</li>
                <li><strong>Temperada:</strong> Entre trópicos e círculos polares</li>
                <li><strong>Polar:</strong> Próximo aos polos, clima frio</li>
            </ul>
            
            <h4 class="font-bold mb-2">Fusos Horários</h4>
            <p class="mb-4">Terra dividida em 24 fusos de 15° cada. Brasil tem 4 fusos horários.</p>
            
            <h4 class="font-bold mb-2">População</h4>
            <p class="mb-2"><strong>Demografia:</strong> Estudo das populações (crescimento, distribuição, densidade)</p>
            <p class="mb-2"><strong>Migração:</strong> Movimento de pessoas entre regiões ou países</p>
        `,
        flashcards: [
            { front: 'Quantos planetas tem o Sistema Solar?', back: '8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno' },
            { front: 'O que é o movimento de rotação?', back: 'Movimento da Terra em torno do próprio eixo (24h), causando dia e noite' },
            { front: 'O que é o movimento de translação?', back: 'Movimento da Terra ao redor do Sol (365 dias), causando as estações do ano' },
            { front: 'O que são coordenadas geográficas?', back: 'Sistema de localização usando latitude (paralelos) e longitude (meridianos)' },
            { front: 'O que é escala cartográfica?', back: 'Relação entre distância no mapa e distância real no terreno' },
            { front: 'Quais são as zonas térmicas?', back: 'Tropical (quente), Temperada (moderada) e Polar (fria)' },
            { front: 'Quantos fusos horários tem o Brasil?', back: '4 fusos horários' },
            { front: 'O que é demografia?', back: 'Estudo das populações: crescimento, distribuição e densidade' },
            { front: 'O que é migração?', back: 'Movimento de pessoas entre regiões ou países' },
            { front: 'Quantos fusos horários tem a Terra?', back: '24 fusos de 15° cada' },
            { front: 'Onde fica a zona tropical?', back: 'Entre os trópicos de Câncer e Capricórnio' },
            { front: 'O que causa as estações do ano?', back: 'O movimento de translação da Terra ao redor do Sol' }
        ],
        quiz: [
            { question: 'Quantos planetas tem o Sistema Solar?', options: ['7', '8', '9', '10'], correct: 1 },
            { question: 'O movimento de rotação dura:', options: ['12 horas', '24 horas', '365 dias', '30 dias'], correct: 1 },
            { question: 'O movimento de translação causa:', options: ['Dia e noite', 'Marés', 'Estações do ano', 'Eclipses'], correct: 2 },
            { question: 'Quantos fusos horários tem o Brasil?', options: ['2', '3', '4', '5'], correct: 2 },
            { question: 'A linha do Equador representa:', options: ['Latitude 0°', 'Longitude 0°', 'Trópico', 'Meridiano'], correct: 0 },
            { question: 'Qual zona térmica é mais quente?', options: ['Polar', 'Temperada', 'Tropical', 'Todas iguais'], correct: 2 },
            { question: 'Em uma escala 1:50.000, 2 cm no mapa representam:', options: ['500 m', '1 km', '5 km', '10 km'], correct: 1 },
            { question: 'O que é latitude?', options: ['Distância ao Equador', 'Distância ao Meridiano', 'Altitude', 'Temperatura'], correct: 0 },
            { question: 'Quantos graus tem cada fuso horário?', options: ['10°', '15°', '20°', '30°'], correct: 1 },
            { question: 'O estudo das populações é chamado:', options: ['Cartografia', 'Geologia', 'Demografia', 'Topografia'], correct: 2 }
        ]
    },
    ciencias: {
        name: 'Ciências',
        icon: '🔬',
        color: 'red',
        summary: `
            <h3 class="text-xl font-bold mb-3">Biologia e Ciências Naturais</h3>
            
            <h4 class="font-bold mb-2">Células</h4>
            <p class="mb-2">Unidade básica da vida. Tipos:</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Procariontes:</strong> Sem núcleo definido (bactérias)</li>
                <li><strong>Eucariontes:</strong> Com núcleo definido (animais, plantas)</li>
            </ul>
            
            <h4 class="font-bold mb-2">Níveis de Organização</h4>
            <p class="mb-4">Célula → Tecido → Órgão → Sistema → Organismo</p>
            
            <h4 class="font-bold mb-2">Ecologia</h4>
            <p class="mb-2"><strong>Cadeia Alimentar:</strong> Produtor → Consumidor → Decompositor</p>
            <p class="mb-2"><strong>Ecossistema:</strong> Conjunto de seres vivos e ambiente</p>
            <p class="mb-4"><strong>Biomas:</strong> Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal</p>
            
            <h4 class="font-bold mb-2">Sistemas do Corpo Humano</h4>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Digestório:</strong> Digestão e absorção de nutrientes</li>
                <li><strong>Respiratório:</strong> Troca de gases (O₂ e CO₂)</li>
                <li><strong>Circulatório:</strong> Transporte de sangue e nutrientes</li>
                <li><strong>Nervoso:</strong> Coordenação e controle do corpo</li>
            </ul>
            
            <h4 class="font-bold mb-2">Física Básica</h4>
            <p class="mb-2"><strong>Força:</strong> Causa mudança no movimento (F = m × a)</p>
            <p class="mb-2"><strong>Energia:</strong> Capacidade de realizar trabalho</p>
            <p class="mb-4"><strong>Ondas:</strong> Som e luz são ondas que se propagam</p>
            
            <h4 class="font-bold mb-2">Química Básica</h4>
            <p class="mb-2"><strong>Átomo:</strong> Menor partícula da matéria (prótons, nêutrons, elétrons)</p>
            <p class="mb-2"><strong>Substâncias:</strong> Puras (elemento, composto) e Misturas</p>
        `,
        flashcards: [
            { front: 'O que é uma célula?', back: 'Unidade básica da vida, pode ser procarionte (sem núcleo) ou eucarionte (com núcleo)' },
            { front: 'Qual a ordem dos níveis de organização?', back: 'Célula → Tecido → Órgão → Sistema → Organismo' },
            { front: 'O que é cadeia alimentar?', back: 'Sequência: Produtor → Consumidor → Decompositor' },
            { front: 'O que é um ecossistema?', back: 'Conjunto de seres vivos interagindo com o ambiente' },
            { front: 'Quais são os biomas brasileiros?', back: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal' },
            { front: 'Função do sistema digestório?', back: 'Digestão e absorção de nutrientes dos alimentos' },
            { front: 'Função do sistema respiratório?', back: 'Troca de gases: absorve O₂ e elimina CO₂' },
            { front: 'Função do sistema circulatório?', back: 'Transportar sangue, nutrientes e oxigênio pelo corpo' },
            { front: 'O que é força na física?', back: 'Causa mudança no movimento, calculada por F = m × a' },
            { front: 'O que é um átomo?', back: 'Menor partícula da matéria, formado por prótons, nêutrons e elétrons' },
            { front: 'Diferença entre célula animal e vegetal?', back: 'Vegetal tem parede celular e cloroplastos; animal não tem' },
            { front: 'O que são produtores na cadeia alimentar?', back: 'Organismos que produzem seu próprio alimento (plantas, algas)' }
        ],
        quiz: [
            { question: 'Qual tipo de célula tem núcleo definido?', options: ['Procarionte', 'Eucarionte', 'Ambas', 'Nenhuma'], correct: 1 },
            { question: 'Qual a sequência correta dos níveis de organização?', options: ['Órgão-Célula-Tecido', 'Célula-Tecido-Órgão', 'Tecido-Célula-Órgão', 'Sistema-Órgão-Célula'], correct: 1 },
            { question: 'Quem são os produtores na cadeia alimentar?', options: ['Animais', 'Plantas', 'Fungos', 'Bactérias'], correct: 1 },
            { question: 'Quantos biomas tem o Brasil?', options: ['4', '5', '6', '7'], correct: 2 },
            { question: 'Qual sistema faz a troca de gases?', options: ['Digestório', 'Circulatório', 'Respiratório', 'Nervoso'], correct: 2 },
            { question: 'A fórmula da força é:', options: ['F = m × v', 'F = m × a', 'F = m ÷ a', 'F = a ÷ m'], correct: 1 },
            { question: 'O átomo é formado por:', options: ['Apenas prótons', 'Prótons e elétrons', 'Prótons, nêutrons e elétrons', 'Apenas elétrons'], correct: 2 },
            { question: 'Qual sistema transporta sangue?', options: ['Digestório', 'Respiratório', 'Circulatório', 'Nervoso'], correct: 2 },
            { question: 'O que é um ecossistema?', options: ['Apenas plantas', 'Apenas animais', 'Seres vivos + ambiente', 'Apenas o clima'], correct: 2 },
            { question: 'Células vegetais têm:', options: ['Apenas núcleo', 'Parede celular', 'Apenas citoplasma', 'Nenhuma organela'], correct: 1 }
        ]
    },
    ingles: {
        name: 'Inglês',
        icon: '🇬🇧',
        color: 'indigo',
        summary: `
            <h3 class="text-xl font-bold mb-3">English Grammar Basics</h3>
            
            <h4 class="font-bold mb-2">Articles (Artigos)</h4>
            <p class="mb-2"><strong>Definite:</strong> THE (o, a, os, as)</p>
            <p class="mb-4"><strong>Indefinite:</strong> A (antes de consoante), AN (antes de vogal)</p>
            
            <h4 class="font-bold mb-2">Simple Present</h4>
            <p class="mb-2">Ações habituais, verdades universais</p>
            <p class="mb-2"><strong>Affirmative:</strong> I work, He works (adiciona -s na 3ª pessoa)</p>
            <p class="mb-2"><strong>Negative:</strong> I don't work, He doesn't work</p>
            <p class="mb-4"><strong>Interrogative:</strong> Do you work? Does he work?</p>
            
            <h4 class="font-bold mb-2">Simple Past</h4>
            <p class="mb-2">Ações concluídas no passado</p>
            <p class="mb-2"><strong>Regular verbs:</strong> work → worked (adiciona -ed)</p>
            <p class="mb-4"><strong>Irregular verbs:</strong> go → went, see → saw, have → had</p>
            
            <h4 class="font-bold mb-2">Simple Future</h4>
            <p class="mb-2"><strong>Will:</strong> I will work (decisões no momento)</p>
            <p class="mb-4"><strong>Going to:</strong> I am going to work (planos futuros)</p>
            
            <h4 class="font-bold mb-2">Conditional Sentences</h4>
            <p class="mb-2"><strong>Type 1:</strong> If + present, will + verb (situação real)</p>
            <p class="mb-2">Example: If it rains, I will stay home.</p>
            <p class="mb-2"><strong>Type 2:</strong> If + past, would + verb (situação hipotética)</p>
            <p class="mb-2">Example: If I had money, I would travel.</p>
        `,
        flashcards: [
            { front: 'Quando usar A ou AN?', back: 'A antes de consoante (a book), AN antes de vogal (an apple)' },
            { front: 'Quando usar THE?', back: 'Artigo definido, usado para coisas específicas (the book = o livro)' },
            { front: 'Como formar Simple Present na 3ª pessoa?', back: 'Adiciona -s ao verbo: He works, She plays' },
            { front: 'Como formar Simple Past regular?', back: 'Adiciona -ed ao verbo: work → worked, play → played' },
            { front: 'Exemplos de verbos irregulares no passado', back: 'go → went, see → saw, have → had, do → did' },
            { front: 'Diferença entre WILL e GOING TO?', back: 'WILL: decisão no momento; GOING TO: plano futuro' },
            { front: 'Como formar negativa no Simple Present?', back: 'I/You/We/They + don\'t + verb; He/She/It + doesn\'t + verb' },
            { front: 'Como formar interrogativa no Simple Present?', back: 'Do + I/you/we/they + verb? Does + he/she/it + verb?' },
            { front: 'Estrutura da Conditional Type 1', back: 'If + present, will + verb (situação real possível)' },
            { front: 'Estrutura da Conditional Type 2', back: 'If + past, would + verb (situação hipotética)' },
            { front: 'Quando usar Simple Present?', back: 'Ações habituais, rotinas, verdades universais' },
            { front: 'Quando usar Simple Past?', back: 'Ações concluídas no passado, em tempo definido' }
        ],
        quiz: [
            { question: 'Complete: ___ apple a day keeps the doctor away.', options: ['A', 'An', 'The', 'Some'], correct: 1 },
            { question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'went'], correct: 1 },
            { question: 'I ___ a movie yesterday.', options: ['watch', 'watches', 'watched', 'watching'], correct: 2 },
            { question: 'They ___ travel next week.', options: ['will', 'would', 'can', 'must'], correct: 0 },
            { question: 'If it ___, we will stay home.', options: ['rain', 'rains', 'rained', 'raining'], correct: 1 },
            { question: 'He ___ play soccer when he was young.', options: ['use to', 'used to', 'uses to', 'using to'], correct: 1 },
            { question: '___ you speak English?', options: ['Do', 'Does', 'Did', 'Are'], correct: 0 },
            { question: 'She ___ not like coffee.', options: ['do', 'does', 'did', 'is'], correct: 1 },
            { question: 'I ___ going to study tonight.', options: ['am', 'is', 'are', 'be'], correct: 0 },
            { question: 'The past of "go" is:', options: ['goed', 'went', 'gone', 'going'], correct: 1 }
        ]
    }
};

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
            if (data.subject && data.mode) {
                setSelectedSubject(data.subject);
                setMode(data.mode);
            }
        }
    }, []);

    const saveProgress = (subject, studyMode) => {
        localStorage.setItem('studyProgress', JSON.stringify({
            subject,
            mode: studyMode,
            timestamp: new Date().toISOString()
        }));
    };

    const selectSubject = (subject) => {
        setSelectedSubject(subject);
        setMode(null);
        setCurrentCard(0);
        setIsFlipped(false);
        setQuizAnswers([]);
        setShowResults(false);
        saveProgress(subject, null);
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
            setCurrentCard(currentCard + 1);
            setIsFlipped(false);
        }
    };

    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
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

    if (!selectedSubject) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
                        📚 Sistema de Estudo Completo
                    </h1>
                    <p className="text-center text-gray-600 mb-8">Escolha uma matéria para começar</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.keys(studyData).map(key => {
                            const subject = studyData[key];
                            return (
                                <button
                                    key={key}
                                    onClick={() => selectSubject(key)}
                                    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-l-4 border-${subject.color}-500`}
                                >
                                    <div className="text-5xl mb-3">{subject.icon}</div>
                                    <h2 className="text-2xl font-bold text-gray-800">{subject.name}</h2>
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
                        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">{subject.name}</h1>
                        <p className="text-center text-gray-600">Escolha um modo de estudo</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <button
                            onClick={() => selectMode('summary')}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <div className="text-4xl mb-3">📖</div>
                            <h3 className="text-xl font-bold mb-2">Resumo</h3>
                            <p className="text-gray-600">Conteúdo completo e detalhado</p>
                        </button>
                        <button
                            onClick={() => selectMode('flashcards')}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <div className="text-4xl mb-3">🎴</div>
                            <h3 className="text-xl font-bold mb-2">Flashcards</h3>
                            <p className="text-gray-600">{subject.flashcards.length} cartões de estudo</p>
                        </button>
                        <button
                            onClick={() => selectMode('quiz')}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="text-xl font-bold mb-2">Quiz</h3>
                            <p className="text-gray-600">{subject.quiz.length} questões</p>
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
                                <h1 className="text-3xl font-bold text-gray-800">{subject.name}</h1>
                                <p className="text-gray-600">Resumo do Conteúdo</p>
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
                                {subject.icon} {subject.name} - Flashcards
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
                                    disabled={quizAnswers.length !== subject.quiz.length}
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
                                    Você acertou {score} de {subject.quiz.length}!
                                </h3>
                                <p className="text-xl mb-6 text-gray-600">
                                    {score >= subject.quiz.length * 0.7
                                        ? 'Excelente trabalho!'
                                        : 'Continue estudando!'}
                                </p>
                                <div className="space-y-4 mb-6">
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
                                                Sua resposta: {q.options[quizAnswers[qIndex]]}
                                                {quizAnswers[qIndex] !== q.correct && (
                                                    <span className="block text-green-700 mt-1">
                                                        Correto: {q.options[q.correct]}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={resetQuiz}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all"
                                >
                                    Tentar Novamente
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
