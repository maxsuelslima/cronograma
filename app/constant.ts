export type ListaSubConteudos = {
        titulo: string;
        subConteudos: Array<string>;
      }
export type Disciplinas = {
  titulo: string;
  conteudos: Array<
    ListaSubConteudos
    | string
  >;
};
export type TopicosEstudados = {
  nome: string;
  dataTermino: string;
}
export type Conhecimento = Record<string, Disciplinas>;
export type Conhecimentos = {
  gerais: Record<string, Disciplinas>;
  oficial: Record<string, Disciplinas>;
  praca: Record<string, Disciplinas>;
};

export const disciplinas: Conhecimentos = {
  gerais: {
    "lingua-portuguesa": {
      titulo: "LÍNGUA PORTUGUESA",
      conteudos: [
        "Compreensão e interpretação de textos de gêneros variados.",
        "Reconhecimento de tipos e gêneros textuais.",
        "Domínio da ortografia oficial.",
        {
          titulo: "Domínio dos mecanismos de coesão textual.",
          subConteudos: [
            "Emprego de elementos de referenciação, substituição e repetição, de conectores e de outros elementos de sequenciação textual.",
          ],
        },
        {
          titulo: "Domínio da estrutura morfossintática do período.",
          subConteudos: [
            "Emprego das classes de palavras.",
            "Relações de coordenação entre orações e entre termos da oração.",
            "Relações de subordinação entre orações e entre termos da oração.",
            "Emprego dos sinais de pontuação.",
            "Concordância verbal e nominal.",
            "Regência verbal e nominal.",
            "Emprego do sinal indicativo de crase.",
            "Colocação dos pronomes átonos.",
          ],
        },
        {
          titulo: "Reescrita de frases e parágrafos do texto.",
          subConteudos: [
            "Significação das palavras.",
            "Substituição de palavras ou de trechos de texto.",
            "Reorganização da estrutura de orações e de períodos do texto.",
            "Reescrita de textos de diferentes gêneros e níveis de formalidade.",
          ],
        },
      ],
    },
    "lingua-inglesa": {
      titulo: "LÍNGUA INGLESA",
      conteudos: [
        "Compreensão de textos em língua inglesa.",
        "Itens gramaticais relevantes para a compreensão dos conteúdos semânticos.",
      ],
    },
    informatica: {
      titulo: "NOÇÕES DE INFORMÁTICA",
      conteudos: [
        "Noções de sistema operacional (ambientes Linux e Windows).",
        "Edição de textos, planilhas e apresentações (ambientes Microsoft Office e BrOffice).",
        {
          titulo: "Redes de computadores.",
          subConteudos: [
            "Conceitos básicos, ferramentas, aplicativos e procedimentos de Internet e intranet.",
            "Programas de navegação (Microsoft Edge, Mozilla Firefox e Google Chrome).",
            "Programas de correio eletrônico (Outlook Express e Mozilla Thunderbird).",
            "Sítios de busca e pesquisa na Internet.",
            "Grupos de discussão.",
            "Redes sociais.",
            "Computação na nuvem (cloud computing).",
          ],
        },
        "Conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas.",
        {
          titulo: "Segurança da informação.",
          subConteudos: [
            "Procedimentos de segurança.",
            "Noções de vírus, worms e pragas virtuais.",
            "Aplicativos para segurança (antivírus, firewall, anti-spyware etc.).",
            "Procedimentos de backup.",
            "Armazenamento de dados na nuvem (cloud storage).",
          ],
        },
      ],
    },
    matematica: {
      titulo: "MATEMÁTICA",
      conteudos: [
        "Álgebra linear.",
        "Conjunto numérico: operações com números inteiros, fracionários e decimais.",
        "Proporções e divisão proporcional.",
        "Regras de três simples e composta.",
        "Porcentagem.",
        "Juros simples e compostos; capitalização e descontos.",
        "Taxas de juros: nominal, efetiva, equivalente, proporcional, real e aparente.",
      ],
    },
    "raciocinio-logico-analitico": {
      titulo: "RACIOCÍNIO LÓGICO-ANALÍTICO",
      conteudos: [
        {
          titulo: "Lógica sentencial (ou proposicional).",
          subConteudos: [
            "Proposições simples e compostas",
            "Tabelas verdade.",
            "Equivalências.",
          ],
        },
        "Estrutura lógica de relações arbitrárias entre pessoas, lugares, objetos ou eventos fictícios; dedução de novas informações das relações fornecidas e avaliação das condições usadas para estabelecer a estrutura daquelas relações.",
        "Compreensão e análise da lógica de uma situação, utilizando as funções intelectuais: raciocínio verbal, raciocínio matemático, raciocínio sequencial, reconhecimento de padrões, orientação espacial e temporal, formação de conceitos, discriminação de elementos; compreensão de dados apresentados em gráficos e tabelas.",
        {
          titulo: "Problemas de lógica e raciocínio.",
          subConteudos: ["Problemas de contagem e noções de probabilidade."],
        },
        "Falácias.",
        "Noções de estatística: média, moda, mediana e desvio-padrão.",
      ],
    },
    "legislacao-cbm-al": {
      titulo: "LEGISLAÇÃO CBM-AL",
      conteudos: [
        "Lei Estadual nº 5.346/1992 (dispõe sobre o Estatuto dos Policiais Militares do Estado de Alagoas e dá outras providências) e suas alterações.",
        "Decreto estadual nº 37.042/1996 (Regulamento Disciplinar da Polícia Militar de Alagoas).",
        "Lei Estadual nº 6.514/2004 (dispõe sobre os critérios e as condições que asseguram aos Oficiais e Praças da ativa da Polícia Militar e do Corpo de Bombeiros Militar do Estado de Alagoas o acesso na hierarquia militar e adota outras providências) e suas alterações.",
        "Lei Estadual nº 6.544/2004 (dispõe sobre os critérios e as condições que asseguram aos Soldados, Cabos e Subtenentes da ativa da Polícia Militar e do Corpo de Bombeiros Militar do Estado de Alagoas o acesso na hierarquia militar e adota outras providências) e suas alterações.",
        "Lei Federal nº 14.751/2023",
      ],
    },
    "cidania-direitos-humanos": {
      titulo: "CIDADANIA E DIREITOS HUMANOS",
      conteudos: [
        "Ética e moral.",
        "Ética, princípios e valores.",
        "Ética e democracia: exercício da cidadania.",
        "Ética e função pública.",
        "Ética no setor público.",
        {
          titulo: "Teoria geral dos direitos humanos.",
          subConteudos: [
            "Conceito, terminologia, estrutura normativa, fundamentação.",
          ],
        },
        "Afirmação histórica dos direitos humanos.",
        "Direitos humanos e responsabilidade do Estado.",
      ],
    },
    atualidades: {
      titulo: "ATUALIDADES (SOMENTE PARA A PROVA DISCURSIVA)",
      conteudos: [
        "Tópicos relevantes e atuais de diversas áreas, tais como segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia.",
      ],
    },
  },
  oficial: {
    fisica: {
      titulo: "FÍSICA",
      conteudos: [
        {
          titulo: "História e evolução das ideias da física.",
          subConteudos: [
            "Cosmologia antiga.",
            "A física de Aristóteles.",
            "Origens da mecânica.",
            "Surgimento da teoria da relatividade e da teoria quântica.",
          ],
        },
        {
          titulo: "Mecânica.",
          subConteudos: [
            "Cinemática escalar e cinemática vetorial.",
            "Movimento circular.",
            "Leis de Newton e suas aplicações.",
            "Trabalho.",
            "Potência.",
            "Energia: conservação e suas transformações, impulso.",
            "Quantidade de movimento e conservação da quantidade de movimento.",
            "Gravitação universal.",
            "Estática dos corpos rígidos.",
            "Estática dos fluidos.",
            "Princípios de Pascal, Arquimedes e Stevin.",
          ],
        },
        {
          titulo: "Termodinâmica.",
          subConteudos: [
            "Calor e temperatura.",
            "Temperatura e dilatação térmica.",
            "Calor específico.",
            "Trocas de calor.",
            "Mudanças de fase e diagramas de fases.",
            "Propagação do calor.",
            "Teoria cinética dos gases.",
            "Energia interna.",
            "Lei de Joule.",
            "Transformações gasosas.",
            "Leis da termodinâmica; entropia e entalpia.",
            "Máquinas térmicas.",
            "Ciclo de Carnot.",
          ],
        },
        {
          titulo: "Eletromagnetismo.",
          subConteudos: [
            "Noções de eletricidade.",
            "Campo elétrico.",
            "Lei de Gauss.",
            "Potencial elétrico.",
            "Corrente elétrica.",
            "Potência elétrica e resistores.",
            "Circuitos elétricos.",
            "Campo magnético.",
            "Lei de Ampère.",
            "Lei de Faraday.",
            "Propriedades elétricas e magnéticas dos materiais.",
            "Equações de Maxwell.",
            "Radiação.",
          ],
        },
        {
          titulo: "Ondulatória.",
          subConteudos: [
            "Movimento harmônico simples.",
            "Oscilações livres, amortecidas e forçadas.",
            "Ondas.",
            "Ondas sonoras e eletromagnéticas.",
            "Frequências naturais e ressonância.",
            "Óptica geométrica; reflexão e refração da luz.",
            "Instrumentos ópticos: características e aplicações.",
            "Óptica física: interferência, difração e polarização.",
          ],
        },
        {
          titulo: "Física moderna.",
          subConteudos: [
            "Noções de relatividade especial.",
            "Transformação de Lorentz.",
            "Equivalência massa-energia.",
            "Natureza ondulatória-corpuscular da matéria.",
            "Teoria quântica da matéria e da radiação.",
            "Modelo do átomo de hidrogênio.",
            "Núcleo atômico.",
            "Energia nuclear.",
          ],
        },
      ],
    },
    quimica: {
      titulo: "QUÍMICA",
      conteudos: [
        {
          titulo: "O mundo e suas transformações.",
          subConteudos: ["História e importância da química."],
        },
        {
          titulo: "Teoria atômico-molecular.",
          subConteudos: [
            "Modelos atômicos (Dalton, Thomson, Rutherford e Bohr) e evolução dos conceitos de átomo.",
            "Os trabalhos de Faraday.",
            "Leis ponderais.",
            "Leis volumétricas de Gay-Lussac.",
            "Lei de Avogadro.",
            "Conceitos decorrentes da teoria atômico-molecular: unidade de massa atômica (u), quantidade de matéria, massa molar, volume molar.",
            "Fórmulas químicas.",
            "Cálculos estequiométricos.",
          ],
        },
        {
          titulo: "Classificação periódica dos elementos químicos.",
          subConteudos: [
            "Tabela periódica: histórico e evolução.",
            "Classificação dos elementos em metais, não metais, semimetais e gases nobres.",
            "Configuração eletrônica dos elementos ao longo da tabela periódica.",
            "Propriedades periódicas e aperiódicas.",
          ],
        },
        {
          titulo: "Radioatividade.",
          subConteudos: [
            "Natureza das emissões radioativas.",
            "Leis da radioatividade.",
            "Cinética da desintegração radioativa.",
            "Fenômenos de fissão nuclear e fusão nuclear.",
            "Riscos e aplicações das reações nucleares.",
          ],
        },
        {
          titulo: "Interações químicas.",
          subConteudos: [
            "Ligações iônica, covalente e metálica.",
            "Forças intermoleculares.",
            "Geometria molecular.",
            "Relação entre estrutura e propriedade das substâncias químicas.",
          ],
        },
        {
          titulo: "Matéria e mudança de estado.",
          subConteudos: [
            "Sólidos, líquidos, gases e outros estados da matéria (ideais e reais).",
            "Características e propriedades de gases, líquidos e sólidos.",
            "Ligações químicas nos sólidos, líquidos e gases.",
            "Métodos de separação de misturas.",
          ],
        },
        {
          titulo: "Funções químicas inorgânicas.",
          subConteudos: [
            "Ácidos, bases, sais e óxidos: conceito, propriedades e nomenclatura.",
            "Hidretos, carbetos e nitretos: conceito, propriedades e nomenclatura.",
            "Principais reações envolvendo compostos inorgânicos.",
            "Balanceamento de equações químicas.",
          ],
        },
        {
          titulo: "Misturas e soluções.",
          subConteudos: [
            "Relações de proporcionalidade entre solutos e solvente.",
            "Grandezas-padrão e unidades-padrão (SI) e sua relação com outras grandezas e unidades.",
            "Solubilidade.",
            "Propriedades coligativas.",
          ],
        },
        {
          titulo: "Gases.",
          subConteudos: [
            "Teoria cinética.",
            "Leis dos gases.",
            "Densidade dos gases.",
            "Difusão e efusão dos gases.",
            "Misturas gasosas.",
          ],
        },
        {
          titulo: "Termoquímica.",
          subConteudos: [
            "Energia e calor.",
            "Reações exotérmicas e endotérmicas.",
            "Entalpia, entropia e energia livre.",
            "Espontaneidade de uma reação.",
            "Entalpias de formação e de combustão das substâncias.",
            "Calor de reação em pressão constante e em volume constante.",
            "Lei de Hess.",
          ],
        },
        {
          titulo: "Cinética química.",
          subConteudos: [
            "Velocidades e mecanismos de reação.",
            "Equação de velocidade, teoria das colisões e complexo ativado.",
            "Influência da energia, da concentração, da pressão e dos catalisadores na velocidade das reações químicas.",
          ],
        },
        {
          titulo: "Equilíbrio químico.",
          subConteudos: [
            "Equilíbrio iônico em soluções aquosas, constante de equilíbrio.",
            "Equilíbrio ácido-base, hidrólise de sais, solução tampão, conceitos de Ka, Kb, Kh, pH, pOH e graus de dissociação e de hidrólise.",
            "Equilíbrio de precipitação, conceito de Kps.",
            "Deslocamento do equilíbrio.",
            "Lei da diluição de Ostwald.",
            "Efeito do íon comum.",
            "Lei da ação das massas.",
          ],
        },
        {
          titulo: "Eletroquímica.",
          subConteudos: [
            "Potenciais de redução e potenciais-padrão de redução.",
            "Espontaneidade de uma reação de oxirredução.",
            "Pilhas e acumuladores.",
            "Eletrólise.",
          ],
        },
        {
          titulo: "Química orgânica.",
          subConteudos: [
            "Propriedades fundamentais do átomo de carbono, hibridação, estados de oxidação do carbono, ligações σ e π, geometria molecular, classificação do átomo de carbono na cadeia carbônica, notação e nomenclatura dos principais radicais orgânicos.",
            "Notação, nomenclatura e propriedades físicas e químicas de hidrocarbonetos, haletos orgânicos, álcoois, fenóis, éteres, cetonas, aldeídos, ácidos carboxílicos, ésteres, anidridos, haletos de ácido, aminas, amidas, nitrilas, isonitrilas e nitrocompostos.",
            "Reatividade dos compostos orgânicos, reações de redução, oxidação, combustão, adição e substituição.",
            "Glicídeos, lipídeos, aminoácidos, proteínas, ácidos nucleicos.",
            "Tecnologias associadas à química orgânica: petroquímica, polímeros sintéticos, aditivos em alimentos, agroquímica, drogas, medicamentos e biotecnologia.",
          ],
        },
      ],
    },
    biologia: {
      titulo: "BIOLOGIA",
      conteudos: [
        "Seres vivos: classificação dos seres vivos.",
        {
          titulo: "Célula.",
          subConteudos: [
            "Célula procariota e eucariota.",
            "Componentes morfológicos das células.",
            "Funções das estruturas celulares.",
          ],
        },
        {
          titulo: "Anatomia e fisiologia humanas.",
          subConteudos: [
            "Fisiologia.",
            "Posição anatômica.",
            "Divisões do corpo humano.",
            "Quadrantes abdominais (órgãos).",
            "Sistema tegumentar: pele, pelos, unhas.",
            "Sistema muscular.",
            "Sistema esquelético: funções, divisão anatômica do esqueleto, ossos, crânio, coluna vertebral, articulações.",
            "Sistema respiratório: função, respiração, órgãos componentes, mecanismo da respiração.",
            "Sistema cardiovascular: principais funções, sangue, coração, movimentos cardíacos, pulso, vasos sanguíneos, circulação sanguínea.",
            "Sistema geniturinário: sistema urinário, sistema genital masculino, sistema genital feminino.",
            "Sistema digestório.",
            "Sistema nervoso: função, divisão, meninges, sistema nervoso central, sistema nervoso periférico, sistema nervoso visceral, sistema nervoso somático.",
          ],
        },
        "Tecidos animais: características estruturais e funcionais.",
        "Evolução dos seres vivos.",
        {
          titulo: "Reino vegetal.",
          subConteudos: [
            "Funções vitais das plantas.",
            "Briófitas, pteridófitas, gimnospermas e angiospermas.",
          ],
        },
        {
          titulo: "Reino Animal.",
          subConteudos: [
            "Características gerais, reprodução, nutrição, locomoção e coordenação.",
            "Poríferos.",
            "Cnidários.",
            "Artrópodes.",
            "Moluscos.",
            "Equinodermos.",
            "Nematelmintos.",
            "Platelmintos.",
            "Anelídeos.",
            "Cordados.",
          ],
        },
        {
          titulo: "Saúde, higiene e saneamento básico.",
          subConteudos: [
            "Princípios básicos de saúde.",
            "Doenças adquiridas transmissíveis.",
            "Defesas do organismo: imunidades passiva e ativa.",
          ],
        },
        {
          titulo: "Ecologia.",
          subConteudos: [
            "Relações tróficas entre os seres vivos.",
            "Biomas.",
            "Ciclos biogeoquímicos.",
            "Conservação e preservação da natureza, ação antrópica, poluição e biocidas, ecossistemas e espécies ameaçadas de extinção (principalmente no Brasil).",
          ],
        },
      ],
    },
    "direito-administrativo": {
      titulo: "NOÇÕES DE DIREITO ADMINISTRATIVO",
      conteudos: [
        {
          titulo: "Noções de organização administrativa.",
          subConteudos: [
            "Autarquias, fundações, empresas públicas e sociedades de economia mista.",
          ],
        },
        {
          titulo: "Ato administrativo.",
          subConteudos: [
            "Conceito, requisitos, atributos, classificação e espécies.",
          ],
        },
        {
          titulo: "Agentes públicos.",
          subConteudos: [
            "Disposições constitucionais aplicáveis.",
            "Disposições doutrinárias.",
            "Cargo, emprego e função pública.",
          ],
        },
        {
          titulo: "Poderes administrativos.",
          subConteudos: [
            "Hierárquico, disciplinar, regulamentar e de polícia.",
            "Uso e abuso do poder.",
          ],
        },
        {
          titulo: "Licitação.",
          subConteudos: [
            "Princípios.",
            "Contratação direta: dispensa e inexigibilidade.",
            "Modalidades.",
            "Tipos.",
            "Procedimento.",
          ],
        },
        {
          titulo: "Controle da administração pública.",
          subConteudos: [
            "Controle exercido pela administração pública.",
            "Controle judicial.",
            "Controle legislativo.",
          ],
        },
        {
          titulo: "Responsabilidade civil do Estado.",
          subConteudos: [
            "Responsabilidade civil do Estado no direito brasileiro.",
            "Requisitos para a demonstração da responsabilidade do Estado.",
            "Causas excludentes e atenuantes da responsabilidade do Estado.",
          ],
        },
        {
          titulo: "Regime jurídico-administrativo.",
          subConteudos: [
            "Conceito.",
            "Princípios expressos e implícitos da administração pública.",
          ],
        },
      ],
    },
    "direito-constitucional": {
      titulo: "NOÇÕES DE DIREITO CONSTITUCIONAL",
      conteudos: [
        {
          titulo: "Constituição.",
          subConteudos: ["Conceito, classificações, princípios fundamentais."],
        },
        {
          titulo: "Direitos e garantias fundamentais.",
          subConteudos: [
            "Direitos e deveres individuais e coletivos, direitos sociais, nacionalidade, cidadania, direitos políticos, partidos políticos.",
          ],
        },
        {
          titulo: "Organização político-administrativa.",
          subConteudos: [
            "União, estados, Distrito Federal, municípios e territórios.",
          ],
        },
        {
          titulo: "Administração pública.",
          subConteudos: [
            "Disposições gerais, servidores públicos e militares dos estados, do Distrito Federal e dos territórios.",
          ],
        },
        {
          titulo: "Defesa do Estado e das instituições democráticas.",
          subConteudos: ["Segurança pública.", "Organização da segurança pública."],
        },
        {
          titulo: "Estado de defesa e estado de sítio.",
          subConteudos: ["Papel e competências das forças armadas."],
        },
        {
          titulo: "Sistema de segurança pública.",
          subConteudos: [
            "Militares dos estados, do Distrito Federal e dos territórios.",
          ],
        },
      ],
    },
  },
  praca: {
    fisica: {
      titulo: "FÍSICA",
      conteudos: [
        {
          titulo: "Vetores.",
          subConteudos: [
            "Sistema de forças.",
            "Composição de forças: forças de mesma direção e sentido, forças de mesma direção e sentidos diferentes.",
            "Duas forças concorrentes.",
            "Representação gráfica.",
            "Binário.",
          ],
        },
        {
          titulo: "Mecânica.",
          subConteudos: [
            "Noções de movimento.",
            "Movimento retilíneo: velocidade, movimento uniformemente variado, aceleração.",
            "Movimento em duas dimensões: movimento de projéteis e movimento circular uniforme.",
            "Leis de Newton.",
            "Leis da gravitação universal.",
            "Leis de Kepler.",
            "Rotação da Terra.",
            "Trabalho, potência, rendimento, energia: mecânica, cinética, energia potencial e energia mecânica.",
            "Conservação de energia mecânica.",
          ],
        },
        {
          titulo: "Densidade e pressão.",
          subConteudos: [
            "Princípio de Pascal, Lei de Stevin, Princípio de Arquimedes.",
          ],
        },
        {
          titulo: "Termodinâmica.",
          subConteudos: [
            "Temperatura e equilíbrio térmico.",
            "Energia térmica e calor; calor sensível e calor latente.",
            "Trocas de calor.",
            "Dilatação térmica dos sólidos.",
            "Dilatação anômala da água.",
            "Processos de propagação do calor.",
          ],
        },
        {
          titulo: "Óptica geométrica.",
          subConteudos: ["Mecanismos físicos da visão e defeitos visuais."],
        },
        {
          titulo: "Som.",
          subConteudos: [
            "Qualidades fisiológicas do som.",
            "Natureza e propagação do som.",
          ],
        },
        {
          titulo: "Eletricidade e magnetismo.",
          subConteudos: [
            "Lei de Coulomb.",
            "Corrente elétrica.",
            "Circuitos elétricos.",
            "Efeito Joule.",
            "Efeitos fisiológicos das correntes elétricas.",
            "Campo magnético.",
            "Ímãs.",
          ],
        },
        {
          titulo: "Aplicações.",
          subConteudos: [
            "Efeito fotoelétrico.",
            "Efeito estufa.",
            "Brisas litorâneas.",
            "Relâmpagos e trovões.",
          ],
        },
        "Princípios básicos da emissão de radioatividade, radiações ionizantes e decaimento radioativo.",
      ],
    },
    quimica: {
      titulo: "QUÍMICA",
      conteudos: [
        {
          titulo: "Estrutura do átomo.",
          subConteudos: [
            "Estrutura atômica.",
            "Partículas fundamentais do átomo.",
            "Número atômico e massa atômica.",
            "Massa molecular.",
            "Número de Avogadro, mol, massa molecular, volume molecular.",
          ],
        },
        {
          titulo: "Classificação periódica dos elementos químicos.",
          subConteudos: [
            "Elemento químico.",
            "Configuração eletrônica.",
            "Tabela periódica atual e sua estrutura.",
            "Lei periódica.",
            "Principais subgrupos de elementos químicos.",
          ],
        },
        {
          titulo: "Ligação química.",
          subConteudos: [
            "Ligação iônica.",
            "Ligação covalente.",
            "Fórmula eletrônica (estrutural de Lewis), iônica, molecular e estrutural das substâncias.",
            "Número de oxidação.",
          ],
        },
        {
          titulo: "Funções de química inorgânica.",
          subConteudos: [
            "Reações de neutralização, dupla troca, simples troca, redução, oxidação.",
            "Ácidos, bases, sais, óxidos: conceitos, classificação, nomenclatura e propriedades gerais.",
          ],
        },
        {
          titulo: "Reação química.",
          subConteudos: [
            "Conceito de reação, equação química, reagente e produto.",
            "Balanceamento de equação química.",
            "Soluções, concentração das soluções (grama/litro e mol/litro).",
          ],
        },
        {
          titulo: "Química do carbono.",
          subConteudos: [
            "Propriedades do átomo do carbono.",
            "Estrutura de compostos orgânicos, cadeias carbônicas.",
            "Classificação do átomo de carbono na cadeia carbônica.",
            "Classificação de cadeia carbônica.",
            "Funções orgânicas: Notação, nomenclatura e propriedades físicas e químicas de hidrocarboneto, álcool, éter, fenol, cetonas, aldeídos, ácidos carboxílicos, amina e amida (contendo de 1 a 8 carbonos).",
            "Reatividade dos compostos orgânicos.",
            "Reações de redução, oxidação e combustão.",
            "Identificação e nomenclatura IUPAC das funções orgânicas.",
          ],
        },
      ],
    },
    biologia: {
      titulo: "BIOLOGIA",
      conteudos: [
        "Seres vivos: classificação dos seres vivos.",
        {
          titulo: "Célula.",
          subConteudos: [
            "Célula procariota e eucariota.",
            "Componentes morfológicos das células.",
            "Funções das estruturas celulares.",
          ],
        },
        {
          titulo: "Anatomia e fisiologia humanas.",
          subConteudos: [
            "Fisiologia.",
            "Posição anatômica.",
            "Divisões do corpo humano.",
            "Quadrantes abdominais (órgãos).",
            "Sistema tegumentar: pele, pelos, unhas.",
            "Sistema muscular.",
            "Sistema esquelético: funções, divisão anatômica do esqueleto, ossos, crânio, coluna vertebral, articulações.",
            "Sistema respiratório: função, respiração, órgãos componentes, mecanismo da respiração.",
            "Sistema cardiovascular: principais funções, sangue, coração, movimentos cardíacos, pulso, vasos sanguíneos, circulação sanguínea.",
            "Sistema geniturinário: sistema urinário, sistema genital masculino, sistema genital feminino.",
            "Sistema digestório.",
            "Sistema nervoso: função, divisão, meninges, sistema nervoso central, sistema nervoso periférico, sistema nervoso visceral, sistema nervoso somático.",
          ],
        },
        "Tecidos animais: características estruturais e funcionais.",
        "Evolução dos seres vivos.",
        {
          titulo: "Reino vegetal.",
          subConteudos: [
            "Funções vitais das plantas.",
            "Briófitas, pteridófitas, gimnospermas e angiospermas.",
          ],
        },
        {
          titulo: "Reino Animal.",
          subConteudos: [
            "Características gerais, reprodução, nutrição, locomoção e coordenação.",
            "Poríferos.",
            "Cnidários.",
            "Artrópodes.",
            "Moluscos.",
            "Equinodermos.",
            "Nematelmintos.",
            "Platelmintos.",
            "Anelídeos.",
            "Cordados.",
          ],
        },
        {
          titulo: "Saúde, higiene e saneamento básico.",
          subConteudos: [
            "Princípios básicos de saúde.",
            "Doenças adquiridas transmissíveis: viroses (transmissão e profilaxia) — AIDS, dengue, poliomielite, raiva e sarampo; infecções bacterianas (transmissão e profilaxia) — tuberculose, sífilis, meningite meningocócica, cólera, tétano e leptospirose; protozoonoses (transmissão e profilaxia) — amebíase, malária e doença de Chagas; verminoses (ciclo de vida e profilaxia) — ascaridíase, teníase, cisticercose, esquistossomose e ancilostomose.",
            "Defesas do organismo: imunidade passiva e imunidade ativa.",
          ],
        },
        {
          titulo: "Ecologia.",
          subConteudos: [
            "Relações tróficas entre os seres vivos.",
            "Biomas.",
            "Ciclos biogeoquímicos.",
            "Conservação e preservação da natureza, ação antrópica, poluição e biocidas, ecossistemas e espécies ameaçadas de extinção (principalmente no Brasil).",
          ],
        },
      ],
    },
    "mecânica-geral": {
      titulo: "MECÂNICA GERAL",
      conteudos: [
        {
          titulo: "Motor de combustão interna.",
          subConteudos: [
            "Conceito.",
            "Ciclo de funcionamento (4 tempos).",
            "Tipos de motores.",
            "Ciclo Otto.",
            "Ciclo Diesel.",
          ],
        },
        {
          titulo: "Sistema de transmissão.",
          subConteudos: ["Função.", "Componentes."],
        },
        {
          titulo: "Sistema de freios.",
          subConteudos: ["Função.", "Tipos.", "Princípio físico."],
        },
        {
          titulo: "Sistema de suspensão.",
          subConteudos: ["Função.", "Componentes."],
        },
        {
          titulo: "Sistema elétrico.",
          subConteudos: ["Função.", "Componentes."],
        },
        {
          titulo: "Sistema de arrefecimento.",
          subConteudos: ["Função.", "Componentes."],
        },
        {
          titulo: "Sistema de alimentação.",
          subConteudos: ["Função.", "Componentes."],
        },
      ],
    },
  },
};

export const topicosEstudados: TopicosEstudados[] = [];



export default disciplinas;
