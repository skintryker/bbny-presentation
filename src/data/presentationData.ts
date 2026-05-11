export const presentationData = {
  hero: {
    title: "Trajetória, Integração e Visão Estratégica 2026",
    subtitle: "Banco do Brasil New York Branch",
    presenter: "Reggie Martins",
  },
  summary: {
    pillars: [
      {
        id: "performance",
        title: "Performance",
        icon: "TrendingUp",
        description: "Evolução da base ativa de investimentos e clientes de setembro de 2022 até abril de 2026.",
      },
      {
        id: "funding",
        title: "Funding",
        icon: "ShieldCheck",
        description: "Gestão do produto Structured Letters of Credit, com expansão do saldo e base de clientes ativos.",
      },
      {
        id: "synergy",
        title: "Sinergia",
        icon: "Users",
        description: "Integração e reeducação comercial com equipes DICOR e CIB no Brasil, gerando canais cross-border.",
      },
      {
        id: "origination",
        title: "Originação Estratégica",
        icon: "Search",
        description: "Projeto Hunter focado em empresas com 'Flavor Brazil' e parcerias com Câmaras de Comércio.",
      },
    ],
  },
  performance: {
    title: "Investimentos",
    description: "Time Deposit e Yankee Certificate of Deposit. Evolução da base ativa de investimentos e clientes em milhões de dólares, consolidando maior visibilidade operacional ao longo do período.",
    chartData: [
      { period: "31/12/2021", investments: 266.6, clients: 21 },
      { period: "30/12/2022", investments: 889.8, clients: 45 },
      { period: "29/12/2023", investments: 930.5, clients: 90 },
      { period: "31/12/2024", investments: 1098.3, clients: 94 },
      { period: "31/12/2025", investments: 612.6, clients: 108 },
      { period: "30/04/2026", investments: 671.6, clients: 116 },
    ],
    note: "Valores em milhões de USD. Dados extraídos do Power BI Banco do Brasil NY Branch.",
  },
  funding: {
    title: "Structured Letters of Credit",
    description: "Gestão ativa de relacionamento com grandes Trading Companies globais, assegurando continuidade operacional e expansão gradual do portfólio.",
    clients: ["Bunge", "CHS", "Olam", "CFSIT"],
    chartData: [
      { date: "30/12/2022", balance: 7.5, clients: 1 },
      { date: "29/12/2023", balance: 552.7, clients: 1 },
      { date: "31/12/2024", balance: 644.6, clients: 3 },
      { date: "31/12/2025", balance: 1445.1, clients: 4 },
      { date: "30/04/2026", balance: 1433.7, clients: 4 },
    ],
    note: "Valores em milhões de USD. Dados extraídos do Power BI Banco do Brasil NY Branch.",
  },
  synergy: {
    title: "Sinergia com BB Brasil",
    description: "A integração com equipes DICOR e CIB fortaleceu a conexão entre Brasil e Nova York, com reuniões estratégicas para reforçar nosso portfólio com foco em Forfait e ampliar o entendimento sobre as soluções BBNY.",
    stats: [
      { label: "Público Alvo", value: 550 },
      { label: "Conversão em Reuniões", value: "50%" },
    ],
    targetAudience: [
      "Gerentes de Relacionamento", "Gerentes Internacionais", 
      "Gerentes de Negócios", "Gerentes Gerais", "Superintendentes"
    ],
  },
  hunter: {
    title: "Projeto Hunter | Expansão Estratégica",
    description: "Originação proativa focada em empresas brasileiras com filiais ou subsidiárias nos EUA, além de empresas americanas com 'Flavor Brazil' (exportadoras e parceiras comerciais do Brasil).",
    chambersDescription: "Rodada de reuniões com câmaras de comércio brasileiras nos EUA e consolidação da presença do BBNY. Mantivemos o membership de New York e expandimos para 3 novas regiões.",
    memberships: [
      { name: "New York", status: "Membro Ativo", coordinates: [74, 40] },
      { name: "Texas", status: "Novo Membership", coordinates: [97, 31] },
      { name: "Minnesota", status: "Novo Membership", coordinates: [93, 46] },
      { name: "Southeast", status: "Novo Membership", coordinates: [84, 33] },
    ],
  },
  hunterExecution: {
    title: "Projeto Hunter | Execução e Resultados",
    missions: [
      {
        region: "Texas & NY Membership",
        activities: [
          "Consolidação de membership estratégico no Texas",
          "Participamos de feiras, coquetéis e reuniões com clientes através da Câmara",
          "Fechamos uma operação de Working Capital com o cliente Tramontina"
        ]
      },
      {
        region: "Southeast (Atlanta)",
        activities: [
          "Visita estratégica a +30 stands brasileiros em feira setorial",
          "Brazilian Outlook: Networking com GM da WEG (Abertura de conta em curso)",
          "Parceria APEX: Inteligência de mercado e mapeamento de eventos"
        ]
      },
      {
        region: "Minnesota & Regional",
        activities: [
          "Reuniões com órgãos governamentais para promoção do Banco do Brasil NY na região",
          "Reuniões online recorrentes com foco em 'Flavor Brazil'",
          "Contatos diretos com empresas indicadas pelas Câmaras"
        ]
      },
      {
        region: "Consulados Brasileiros",
        activities: [
          "Parceria estratégica com Consulados de Houston, Atlanta e NY",
          "Acesso a listas qualificadas: empresas brasileiras nos EUA",
          "Apoio institucional imediato na abertura de novos canais"
        ]
      }
    ]
  },
  planning: {
    title: "Planejamento Estratégico 2026",
    context: "Dez/2025: Alinhamento estratégico com o Corporate BBNY e definição de metas.",
    description: "Conversão de clientes de crédito para soluções DDA e investimentos.",
    funnel: [
      { label: "Clientes Target", value: 154, description: "Base identificada com produtos de crédito ativos" },
      { label: "Sem Interesse ou Sem Retorno", value: 100, description: "Clientes sem perfil ou interesse imediato" },
      { label: "Aguardando Retorno para Agendar Reunião", value: 37, description: "Gerente de relacionamento em contato com o cliente" },
      { label: "Reuniões Realizadas com Clientes", value: 17, description: "Cotações enviadas e/ou DDA em processo de abertura" },
    ],
  },
  caseStudy: {
    title: "Estudo de Caso",
    subtitle: "EXPANSÃO DE PRODUTOS POR CLIENTE",
    statusQuo: "Cliente com produto de crédito apenas.",
    result: "Abertura simultânea de 6 contas correntes.",
    currencies: "Disponibilização de fluxos em Dólar (USD), Euro (EUR) e Libras (GBP).",
    impact: "Após abordagem através do gerente de relacionamento, conseguimos abrir 6 contas correntes, sendo 3 moedas diferentes.",
  },
  nextSteps: {
    title: "Próximos Passos | Visão 2026+",
    steps: [
      {
        id: "01",
        label: "Expansão de Produtos",
        detail: "Maximizar a conversão das reuniões ativas com foco em DDAs e Investimentos."
      },
      {
        id: "02",
        label: "Estreitar Relacionamento com BB Brasil",
        detail: "Consolidar a conexão DICOR/CIB como um motor recorrente de originação para BBNY."
      },
      {
        id: "03",
        label: "Liderança Institucional",
        detail: "Converter parcerias, feiras e eventos promovidos pelas câmaras em volume de novos negócios para o BBNY."
      }
    ],
  }
};
