/**
 * ============================================================================
 * PINGOBRAS - Camada de Dados da Loja
 * ----------------------------------------------------------------------------
 * Este arquivo simula uma API de produtos e categorias. Toda a estrutura foi
 * desenhada para que, futuramente, as constantes abaixo possam ser
 * substituídas por chamadas fetch() ao servidor central da Pingobras
 * (https://pingobras-sg.onrender.com/) sem alterar o restante da aplicação.
 *
 * Nenhum dado aqui é renderizado diretamente como HTML: os módulos de
 * renderização (loja.js / produto.js) sempre tratam estes valores como texto
 * puro, evitando injeção de HTML/XSS vinda da "API".
 * ============================================================================
 */

/**
 * @typedef {Object} Product
 * @property {number}   id                 Identificador único do produto.
 * @property {string}   name               Nome comercial do produto.
 * @property {number}   price              Preço atual em BRL.
 * @property {?number}  oldPrice           Preço anterior (para desconto), ou null.
 * @property {string}   brand              Marca/fabricante.
 * @property {string}   model              Modelo/código do fabricante.
 * @property {string}   category           Slug da categoria principal.
 * @property {string}   subcategory        Slug da subcategoria.
 * @property {string}   shortDescription   Descrição curta (usada nos cards).
 * @property {string}   longDescription    Descrição completa (página de detalhes).
 * @property {Object.<string,string>} specs Especificações técnicas chave/valor.
 * @property {string}   warranty           Texto de garantia (ex: "12 meses").
 * @property {'novo'|'seminovo'|'recondicionado'} condition Estado do produto.
 * @property {number}   stock              Quantidade em estoque.
 * @property {number}   weightKg           Peso em quilogramas.
 * @property {string}   dimensions         Dimensões (ex: "45x32x10 cm").
 * @property {string[]} images             URLs/placeholders de imagens.
 * @property {string[]} tags               Palavras-chave para busca.
 * @property {number[]} relatedIds         IDs de produtos relacionados.
 */

/** @type {{slug: string, name: string, icon: string}[]} */
const CATEGORIES = [
  { slug: "computadores", name: "Computadores", icon: "bi-pc-display" },
  { slug: "notebooks", name: "Notebooks", icon: "bi-laptop" },
  { slug: "servidores", name: "Servidores", icon: "bi-hdd-rack" },
  { slug: "storage", name: "Storage", icon: "bi-device-hdd" },
  { slug: "redes", name: "Redes (Switches/Roteadores)", icon: "bi-router" },
  { slug: "rack-datacenter", name: "Rack & Datacenter", icon: "bi-server" },
  { slug: "componentes", name: "Componentes (CPU/GPU/RAM)", icon: "bi-cpu" },
  { slug: "monitores", name: "Monitores", icon: "bi-display" },
  { slug: "perifericos", name: "Periféricos", icon: "bi-keyboard" },
  { slug: "cftv", name: "CFTV & Câmeras", icon: "bi-camera-video" },
  { slug: "nobreak", name: "No-break & Energia", icon: "bi-battery-charging" },
  { slug: "impressoras", name: "Impressoras", icon: "bi-printer" },
];

/** @type {string[]} Marcas disponíveis, usadas nos filtros. */
const BRANDS = [
  "Dell",
  "Lenovo",
  "HP",
  "Intel",
  "AMD",
  "Cisco",
  "Supermicro",
  "Kingston",
  "Seagate",
  "TP-Link",
  "Intelbras",
  "APC",
];

/** @type {Product[]} */
const PRODUCTS = [
  {
    id: 1783272333483,
    name: "Carregador Portátil 20000 Turbo 22.5w Power Bank Premium Universal Rápido Voo Transporte Aéreo Para Samsung iPhone Xiaomi Motorola Celular Smartwatch Tablet Casenn Preto",
    price: 196,
    oldPrice: 96,
    brand: "Supermicro",
    model: "CC1-20000",
    category: "nobreak",
    subcategory: "",
    shortDescription:
      "Carregador Portátil 20000 Turbo 22.5w Power Bank Premium Universal Rápido Voo Transporte Aéreo Para Samsung iPhone Xiaomi Motorola Celular Smartwatch Tablet Casenn Preto",
    longDescription:
      'Este produto possui marca registrada no INPI, protegida pelas leis de Propriedade Intelectual (Lei nº 9.279/96). Todos os direitos de venda são reservados às Loja Casenn e MAANA STORE. A comercialização de produtos sem a devida autorização constitui crime, sujeito a penalidades legais."\n\nCarregador Portátil 20.000mAh com Carregamento Turbo 22,5W - Ideal para Quem Precisa de Energia a Todo Momento!\n\nNão fique na mão na hora de carregar o celular! Este carregador portátil de 20.000mAh é perfeito para quem precisa de energia para o seu dispositivo em qualquer lugar. Com capacidade para carregar seu celular de 4 a 6 vezes, você terá energia para o dia todo, sem se preocupar em encontrar uma tomada!\n\nAlém disso, o carregamento turbo de 22,5W garante que seus dispositivos sejam carregados rapidamente. Ele vem com 2 cabos embutidos: Light ning para iPhone e Tipo C para dispositivos Android, além de uma saída USB para você conectar qualquer cabo adicional.\n\nE para facilitar ainda mais, ele possui um display digital que mostra a porcentagem exata da bateria, permitindo que você saiba sempre o quanto de energia resta!\n\nCaracterísticas:\n\n- Capacidade de 20.000mAh, para carregar de 4 a 6 vezes.\n- Potência de saída de 22,5W (carregamento turbo).\n- 2 cabos embutidos: Tipo Light ning e Tipo C.\n- Saída USB para conectar outros cabos.\n- Display digital para monitoramento da porcentagem de bateria.\n\nPraticidade e rapidez na palma da sua mão. Não deixe de ter esse poderoso aliado sempre por perto!',
    specs: {},
    warranty: "sim",
    condition: "novo",
    stock: 1,
    weightKg: 0.5,
    dimensions: "",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_614937-MLA96889123348_112025-F.webp",
    ],
    tags: [],
    relatedIds: [],
  },
  {
    id: 1001,
    name: "Servidor Dell PowerEdge R440",
    price: 18990.0,
    oldPrice: 21990.0,
    brand: "Dell",
    model: "PowerEdge R440",
    category: "servidores",
    subcategory: "rack",
    shortDescription: "Servidor rack 1U para cargas corporativas críticas.",
    longDescription:
      "O Dell PowerEdge R440 é um servidor rack 1U voltado para empresas que precisam de " +
      "alta disponibilidade e desempenho para bancos de dados, virtualização e aplicações " +
      "corporativas. Suporta processadores Intel Xeon Scalable e configuração redundante de fontes.",
    specs: {
      Processador: "Intel Xeon Silver 4210 (10 núcleos)",
      Memória: "32GB DDR4 ECC (expansível a 512GB)",
      Armazenamento: "2x HD 1TB SAS (hot-swap)",
      Fonte: "Redundante 550W",
      Rede: "2x 1GbE onboard",
    },
    warranty: "12 meses Pingobras + suporte remoto",
    condition: "seminovo",
    stock: 4,
    weightKg: 16.5,
    dimensions: "43 x 68 x 4.3 cm",
    images: [
      "servidor-dell-r440-1",
      "servidor-dell-r440-2",
      "servidor-dell-r440-3",
    ],
    tags: ["servidor", "dell", "rack", "datacenter", "xeon"],
    relatedIds: [1002, 1006],
  },
  {
    id: 1002,
    name: "Servidor Lenovo ThinkSystem SR630",
    price: 22590.0,
    oldPrice: null,
    brand: "Lenovo",
    model: "ThinkSystem SR630",
    category: "servidores",
    subcategory: "rack",
    shortDescription: "Servidor 1U de alta densidade para virtualização.",
    longDescription:
      "Projetado para data centers modernos, o ThinkSystem SR630 entrega desempenho " +
      "equilibrado entre processamento e armazenamento, ideal para clusters de virtualização " +
      "e workloads intensivos em I/O.",
    specs: {
      Processador: "Intel Xeon Gold 5218 (16 núcleos)",
      Memória: "64GB DDR4 ECC",
      Armazenamento: "4x SSD 960GB SATA (hot-swap)",
      Fonte: "Redundante 750W",
      Rede: "4x 1GbE onboard",
    },
    warranty: "12 meses Pingobras",
    condition: "novo",
    stock: 2,
    weightKg: 17.2,
    dimensions: "43 x 71 x 4.3 cm",
    images: ["servidor-lenovo-sr630-1", "servidor-lenovo-sr630-2"],
    tags: ["servidor", "lenovo", "rack", "virtualizacao"],
    relatedIds: [1001, 1006],
  },
  {
    id: 1003,
    name: "Notebook Dell Latitude 5440",
    price: 6790.0,
    oldPrice: 7490.0,
    brand: "Dell",
    model: "Latitude 5440",
    category: "notebooks",
    subcategory: "corporativo",
    shortDescription:
      "Notebook corporativo com Intel Core i5 e leitor biométrico.",
    longDescription:
      "O Latitude 5440 alia robustez e portabilidade para o dia a dia corporativo, com " +
      "leitor de digital, TPM 2.0 e chassi reforçado para uso profissional intenso.",
    specs: {
      Processador: "Intel Core i5 13ª geração",
      Memória: "16GB DDR4",
      Armazenamento: "512GB SSD NVMe",
      Tela: "14'' Full HD IPS",
      Bateria: "Até 10 horas",
    },
    warranty: "12 meses Pingobras",
    condition: "novo",
    stock: 9,
    weightKg: 1.6,
    dimensions: "32 x 22 x 1.9 cm",
    images: ["notebook-dell-latitude-1", "notebook-dell-latitude-2"],
    tags: ["notebook", "dell", "corporativo", "i5"],
    relatedIds: [1004, 1009],
  },
  {
    id: 1004,
    name: "Notebook Lenovo ThinkPad E14",
    price: 5490.0,
    oldPrice: null,
    brand: "Lenovo",
    model: "ThinkPad E14 Gen 5",
    category: "notebooks",
    subcategory: "corporativo",
    shortDescription:
      "Equilíbrio entre performance e mobilidade para escritório.",
    longDescription:
      "O ThinkPad E14 traz o teclado premiado da linha ThinkPad, chassi certificado MIL-STD " +
      "e desempenho consistente para tarefas corporativas e ferramentas de produtividade.",
    specs: {
      Processador: "AMD Ryzen 5 7530U",
      Memória: "16GB DDR4",
      Armazenamento: "256GB SSD NVMe",
      Tela: "14'' Full HD",
      Bateria: "Até 12 horas",
    },
    warranty: "12 meses Pingobras",
    condition: "novo",
    stock: 6,
    weightKg: 1.7,
    dimensions: "32.4 x 22.5 x 1.8 cm",
    images: ["notebook-lenovo-thinkpad-1", "notebook-lenovo-thinkpad-2"],
    tags: ["notebook", "lenovo", "thinkpad", "ryzen"],
    relatedIds: [1003, 1009],
  },
  {
    id: 1005,
    name: "Switch Gerenciável TP-Link 24 Portas",
    price: 2190.0,
    oldPrice: 2590.0,
    brand: "TP-Link",
    model: "T2600G-28TS",
    category: "redes",
    subcategory: "switches",
    shortDescription: "Switch L2 gerenciável com 24 portas Gigabit + 4 SFP.",
    longDescription:
      "Ideal para redes corporativas de médio porte, oferece VLAN, QoS, agregação de " +
      "links e gerenciamento via web, CLI e SNMP.",
    specs: {
      Portas: "24x Gigabit + 4x SFP",
      Gerenciamento: "L2, VLAN, QoS, SNMP",
      Montagem: "Rack 19'' 1U",
      Consumo: "Até 25W",
    },
    warranty: "24 meses fabricante",
    condition: "novo",
    stock: 12,
    weightKg: 3.4,
    dimensions: "44 x 22 x 4.4 cm",
    images: ["switch-tplink-1", "switch-tplink-2"],
    tags: ["switch", "rede", "tp-link", "gerenciavel"],
    relatedIds: [1006, 1008],
  },
  {
    id: 1006,
    name: "Rack Fechado 19'' 12U",
    price: 1690.0,
    oldPrice: null,
    brand: "Intelbras",
    model: "RF 612",
    category: "rack-datacenter",
    subcategory: "racks",
    shortDescription: "Rack fechado com porta em acrílico e organizadores.",
    longDescription:
      "Estrutura em aço com pintura eletrostática, ventilação frontal e traseira, ideal para " +
      "abrigar servidores, switches e patch panels em pequenos datacenters.",
    specs: {
      Altura: "12U",
      Carga: "Até 150kg",
      Material: "Aço SAE 1010",
      Ventilação: "2 coolers 120mm inclusos",
    },
    warranty: "12 meses fabricante",
    condition: "novo",
    stock: 5,
    weightKg: 38,
    dimensions: "60 x 65 x 64 cm",
    images: ["rack-12u-1", "rack-12u-2"],
    tags: ["rack", "datacenter", "intelbras"],
    relatedIds: [1001, 1002, 1005],
  },
  {
    id: 1007,
    name: "Câmera IP CFTV Full HD",
    price: 349.0,
    oldPrice: 429.0,
    brand: "Intelbras",
    model: "VIP 1230 B",
    category: "cftv",
    subcategory: "cameras-ip",
    shortDescription: "Câmera IP bullet Full HD com visão noturna 30m.",
    longDescription:
      "Câmera para monitoramento externo com infravermelho de longo alcance, compressão " +
      "H.265+ e compatibilidade com gravadores NVR Intelbras.",
    specs: {
      Resolução: "2MP Full HD",
      "Visão noturna": "Até 30 metros",
      Proteção: "IP67",
      Compressão: "H.265+",
    },
    warranty: "12 meses fabricante",
    condition: "novo",
    stock: 24,
    weightKg: 0.4,
    dimensions: "18 x 7 x 7 cm",
    images: ["camera-cftv-1", "camera-cftv-2"],
    tags: ["cftv", "camera", "seguranca", "intelbras"],
    relatedIds: [1005, 1006],
  },
  {
    id: 1008,
    name: "No-break Senoidal 1500VA",
    price: 1290.0,
    oldPrice: null,
    brand: "APC",
    model: "Smart-UPS 1500VA",
    category: "nobreak",
    subcategory: "senoidal",
    shortDescription: "No-break senoidal para servidores e racks de rede.",
    longDescription:
      "Fornece energia limpa e estabilizada com autonomia para desligamento seguro de " +
      "servidores e equipamentos de rede em caso de queda de energia.",
    specs: {
      Potência: "1500VA / 1000W",
      Forma_de_onda: "Senoidal pura",
      Autonomia: "Até 15 min (carga média)",
      Saídas: "6 tomadas",
    },
    warranty: "24 meses fabricante",
    condition: "novo",
    stock: 8,
    weightKg: 12,
    dimensions: "43 x 17 x 33 cm",
    images: ["nobreak-apc-1", "nobreak-apc-2"],
    tags: ["nobreak", "energia", "apc", "ups"],
    relatedIds: [1001, 1005, 1006],
  },
  {
    id: 1009,
    name: "Memória Kingston 16GB DDR4 3200MHz",
    price: 259.0,
    oldPrice: 299.0,
    brand: "Kingston",
    model: "KVR32N22S8/16",
    category: "componentes",
    subcategory: "memorias",
    shortDescription: "Pente de memória DDR4 para desktops e workstations.",
    longDescription:
      "Memória DDR4 com alta compatibilidade e estabilidade, indicada para upgrades de " +
      "notebooks, desktops e pequenos servidores.",
    specs: {
      Capacidade: "16GB",
      Frequência: "3200MHz",
      Tipo: "DDR4 Non-ECC",
      Latência: "CL22",
    },
    warranty: "Vitalícia fabricante",
    condition: "novo",
    stock: 40,
    weightKg: 0.03,
    dimensions: "13.3 x 3.2 x 0.7 cm",
    images: ["memoria-kingston-1", "memoria-kingston-2"],
    tags: ["memoria", "ram", "ddr4", "kingston"],
    relatedIds: [1003, 1004],
  },
  {
    id: 1010,
    name: "SSD Seagate 1TB NVMe",
    price: 449.0,
    oldPrice: null,
    brand: "Seagate",
    model: "BarraCuda 510",
    category: "componentes",
    subcategory: "armazenamento",
    shortDescription:
      "SSD NVMe de alta velocidade para upgrade de performance.",
    longDescription:
      "Unidade de estado sólido NVMe com velocidades de leitura de até 3400MB/s, ideal " +
      "para acelerar notebooks, desktops e estações de trabalho.",
    specs: {
      Capacidade: "1TB",
      Interface: "NVMe PCIe Gen3",
      "Leitura seq.": "Até 3400MB/s",
      "Gravação seq.": "Até 3000MB/s",
    },
    warranty: "60 meses fabricante",
    condition: "novo",
    stock: 18,
    weightKg: 0.05,
    dimensions: "8 x 2.2 x 0.2 cm",
    images: ["ssd-seagate-1", "ssd-seagate-2"],
    tags: ["ssd", "nvme", "seagate", "armazenamento"],
    relatedIds: [1003, 1004, 1002],
  },
  {
    id: 1011,
    name: "Monitor Dell 27'' Full HD",
    price: 1190.0,
    oldPrice: 1390.0,
    brand: "Dell",
    model: "E2724HS",
    category: "monitores",
    subcategory: "corporativo",
    shortDescription: "Monitor corporativo 27'' IPS com ajuste de altura.",
    longDescription:
      "Monitor com painel IPS, ajuste de altura e inclinação, indicado para ambientes " +
      "corporativos que exigem conforto visual durante o uso prolongado.",
    specs: {
      Tamanho: "27''",
      Painel: "IPS Full HD",
      "Taxa de atualização": "75Hz",
      Conectividade: "HDMI, DisplayPort, VGA",
    },
    warranty: "36 meses fabricante",
    condition: "novo",
    stock: 14,
    weightKg: 4.2,
    dimensions: "61 x 45 x 20 cm",
    images: ["monitor-dell-1", "monitor-dell-2"],
    tags: ["monitor", "dell", "ips", "corporativo"],
    relatedIds: [1003, 1004],
  },
  {
    id: 1012,
    name: "Roteador Wi-Fi 6 TP-Link AX3000",
    price: 899.0,
    oldPrice: null,
    brand: "TP-Link",
    model: "Archer AX55",
    category: "redes",
    subcategory: "roteadores",
    shortDescription:
      "Roteador Wi-Fi 6 para redes domésticas e pequenos escritórios.",
    longDescription:
      "Entrega velocidades combinadas de até 3000Mbps, suporte a OFDMA e MU-MIMO, " +
      "ideal para ambientes com muitos dispositivos conectados simultaneamente.",
    specs: {
      Padrão: "Wi-Fi 6 (802.11ax)",
      Velocidade: "Até 3000Mbps combinados",
      Portas: "4x Gigabit LAN + 1 WAN",
      Antenas: "4 antenas externas",
    },
    warranty: "24 meses fabricante",
    condition: "novo",
    stock: 20,
    weightKg: 0.6,
    dimensions: "26 x 16 x 5 cm",
    images: ["roteador-tplink-1", "roteador-tplink-2"],
    tags: ["roteador", "wifi", "tp-link", "rede"],
    relatedIds: [1005, 1008],
  },
];

// Congela os dados mockados para impedir mutação acidental em tempo de execução,
// simulando o comportamento imutável de uma resposta de API.
Object.freeze(CATEGORIES);
Object.freeze(BRANDS);
Object.freeze(PRODUCTS);
