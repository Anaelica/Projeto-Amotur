
export type Localidade = 'icaraí' | 'moitas' | 'caetanos' | 'flecheiras';

export type PointsType =
  | 'pousadas'
  | 'hotel'
  | 'casas'
  | 'villas'
  | 'agencia'
  | 'bar'
  | 'restaurantes'
  | 'pizzaria'
  | 'sorveteria'
  | 'supermercado'
  | 'acai'
  | 'sanduiches'
  | 'comercios'
  | 'lojas'
  | 'kitesurf'
  | 'windsurf'
  | 'servicos'
  | 'correspondenciaBancaria'
  // | 'postoDeGasolina'
  | 'mecanico'
  | 'farmacia'
  | 'igreja'
  | 'barraca'
  | 'lagoa'
  | 'praia'
  | 'praça'
  | 'rio'
  | 'clube'  
  | 'museu'  
  | 'trilha'
  | 'escola'
  | 'camping'
  | 'hamburgueria'
  | 'centroCultural'
  | 'atracaoNatural'
  | 'riacho';


export type Point = {
  id: number;
  name: string;
  position: [number, number];
  image: string;
  description: string;
  type: PointsType;
  localidade: Localidade;
};

export const points: Point[] = [
  {
  id: 1,
  name: 'Lagoa de Flecheiras',
  position: [-3.0638845404382, -39.65316221787964],
  image: '/fotos-points/flecheiras.jpeg',
  description: 'Lagoa ideal para banho e prática de esportes aquáticos em Flecheiras.',
  type: 'lagoa',
  localidade: 'flecheiras'
},
{
  id: 2,
  name: 'Praia de Caetanos',
  position: [-3.0762421357947867, -39.56096517555089],
  image: '/fotos-points/praia-de-caetanos.png',
  description: 'Praia com ventos fortes, ideal para prática de kitesurf.',
  type: 'praia',
  localidade: 'caetanos'
},
{
  id: 3,
  name: 'Croa dos Ventos',
  position: [-3.0631882862891424, -39.650086317879705],
  image: '/fotos-points/croa-dos-ventos (1).png',
  description: 'Túnel natural de vegetação à beira do rio Aracatiaçu.',
  type: 'atracaoNatural',
  localidade: 'moitas'
  //Lagoa de flexeiras, Icaraí de - Icaraí, Amontada - CE, 62500-000 = endereço
},
{
  id: 4,
  name: 'Barraca O Paraíso',
  position: [-3.0646988896517935, -39.65121284558944],
  image: '/fotos-points/barraca-o-paraiso.png',
  description: 'Lagoa das Flexeiras - Icaraí, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'flecheiras'
},
{
  id: 5,
  name: 'Barraca Do Marcelo',
  position: [-3.065180996659276, -39.652800713254116],
  image: '/fotos-points/barraca-do-marcelo.png',
  description: 'lagoa de Freixerinha, Icaraí de, Amontada - CE',
  type: 'bar',
  localidade: 'flecheiras'
},
// {
//   id: 6,
//   name: 'Praça de Moitas',
//   position: [-3.0064364718754844, -39.68807159089327],
//   image: '',
//   description: 'Praça central com ponto de Wi-Fi grátis.',
//   type: 'praça',
//   localidade: 'moitas'
// },
{
  id: 7,
  name: 'Duna do Pôr-do-Sol',
  position: [-3.024042605163356, -39.67210628904428],
  image: '/fotos-points/duna-por-do-sol.png',
  description: 'Duna famosa pelo pôr do sol sobre o rio e o mar.',
  type: 'atracaoNatural',
  localidade: 'icaraí'
},
{
  id: 8,
  name: 'Umami Restaurant',
  position: [ -3.02890, -39.64926],
  image: '/fotos-points/umami-residense.png',
  description: 'Rua Noé Praciano - Icaraí, Amontada - CE, 62500-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 9,
  name: 'Canoé Brasil',
  position: [-3.002526771265445, -39.698506190893255],
  image: '/fotos-points/canoé-brasil.png',
  description: 'Pousada tradicional em Moitas.',
  type: 'pousadas',
  localidade: 'moitas'
},
// {
//   id: 10,
//   name: 'Lagoa Sabiaguaba',
//   position: [-3.7716429674652314, -38.43632506020533],
//   image: '',
//   description: 'Lagoa em Caetanos de Cima com vegetação ao redor.',
//   type: 'lagoa',
//   localidade: 'caetanos'
// },
{
  id: 11,
  name: 'Restaurante Sabores de Minas',
  position: [-3.02798, -39.64644],
  image: '',
  description: 'R. Jose Ribamar dos Santos Rodrigues - Icaraí, Amontada - CE, 62500-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 12,
  name: 'Aima Ateliê',
  position: [-3.0281972560291153, -39.647555192066974],
  image: '',
  description: 'R. Aderbal Praciano Sampaio - Centro, Amontada - CE, 62545-000',
  type: 'lojas',
  localidade: 'icaraí'
},
// {
//   id: 13,
//   name: 'TMM Papelaria e Descartáveis',
//   position: [-3.02746, -39.64674],
//   image: '',
//   description: 'Icaraí de Amontada - R. José Severiano do, R. José Severo Couto Garcês, 470, Amontada - CE, 62540-000',
//   type: 'lojas',
//   localidade: 'icaraí'
// },
// {
//   id: 14,
//   name: 'Center Comercial',
//   position: [ -3.02819, -39.64727],
//   image: '',
//   description: 'Icarai - R. Aderbal Praciano Sampaio, 585 - In, Amontada - CE, 62545-000',
//   type: 'supermercado',
//   localidade: 'icaraí'
// },
{
  id: 15,
  name: 'Chico Dina Pousada',
  position: [-3.029096399335322, -39.64966549153014],
  image: '',
  description: 'Icarai de amontada - R. Francisco Gonçalves de Souza - Alto alegre, Amontada - CE, 62540-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 16,
  name: 'Supermercado O Daniel',
  position: [-3.028941888267424, -39.65243575272238],
  image: '',
  description: 'R. Aderbal Praciano Sampaio - Icaraí, Amontada - CE, 62500-000',
  type: 'supermercado',
  localidade: 'icaraí'
},
{
  id: 17,
  name: "Casa'Lex",
  position: [-3.027369108828206, -39.65117281787987],
  image: '',
  description: 'R. Aderbal Praciano Sampaio, s/n - Icaraí, Amontada - CE, 62540-000',
  type: 'casas',
  localidade: 'icaraí'
},
{
  id: 18,
  name: 'Farmácia Mais Saúde',
  position: [-3.029535080642018, -39.652805948073535],
  image: '',
  description: 'R. Aderbal Praciano Sampaio, 87 - Icaraí, Amontada - CE, 62540-000',
  type: 'farmacia',
  localidade: 'icaraí'
},
// {
//   id: 19,
//   name: 'Posto de Combustível Dois João',
//   position: [-3.0301860175868893, -39.65345260908393],
//   image: '',
//   description: 'R. Aderbal Praciano Sampaio, 195 - Icaraí, Amontada - CE, 62545-000',
//   type: 'postoDeGasolina',
//   localidade: 'icaraí'
// },
// {
//   id: 20,
//   name: 'Posto Icaraí',
//   position: [-3.0333050840609705, -39.65366556790519],
//   image: '',
//   description: 'Icaraí, Amontada - CE',
//   type: 'postoDegasolina',
//   localidade: 'icaraí'
// },
{
  id: 21,
  name: 'Hotel Icaraí Beach ',
  position: [-3.033420844137152, -39.65358362269443],
  image: '',
  description: 'Tv. Raimundo Carneiro de Sousa, SN - Icaraí, Amontada - CE, 62545-000',
  type: 'hotel',
  localidade: 'icaraí'
},
{
  id: 22,
  name: 'E.E.B Maria Alves Sobrinha',
  position: [-3.0339790629367633, -39.65423702190843],
  image: '',
  description: 'Icaraí, Amontada - CE, 62500-000',
  type: 'escola',
  localidade: 'icaraí'
},
{
  id: 23,
  name: 'Pousada Vila Icaraí',
  position: [-3.0252009581124084, -39.643071435071114],
  image: '',
  description: 'Icaraí de Amontada - R. Joaquim Alves Parente, 702 - Icaraí, Amontada - CE, 62540-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 24,
  name: 'POUSADA CAFÉ ZAPATA',
  position: [-3.0247831165423906, -39.64539959239028],
  image: '',
  description: 'R. Joaquim Alves Parente, 94 - Centro, Amontada - CE, 62540-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 25,
  name: 'Terrasa Solar Hotel',
  position: [-3.028079471527844, -39.64203066421114],
  image: '',
  description: 'R. Pedro Carneiro Sobrinho, 100 - Icarai de amontada, Amontada - CE, 62545-000',
  type: 'hotel',
  localidade: 'icaraí'
},
// {
//   id: 26,
//   name: 'Brisa Bistrô',
//   position: [ -3.02487, -39.64617],
//   image: '',
//   description: 'R. Joaquim Alves Parente, 2 - 204, Amontada - CE, 62540-000',
//   type: 'restaurantes',
//   localidade: 'icaraí'
// },
{
  id: 27,
  name: 'Icaraizinho Turismo',
  position: [-3.0254411352484603, -39.64609929795627],
  image: '',
  description: 'R. Luís Alves Parente, 23 - Icaraí, Amontada - CE, 62540-000',
  type: 'agencia',
  localidade: 'icaraí'
},
{
  id: 28,
  name: 'Pousada País Tropical',
  position: [-3.0249069647548272, -39.6547530435677],
  image: '',
  description: 'Hospedagem familiar com vista para o mar.',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 29,
  name: 'Kaito Japanese Food',
  position: [-3.0236872356058617, -39.64208641787963],
  image: '',
  description: 'R. Joaquim Alves Parente - Centro, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 30,
  name: 'Casa Janjão',
  position: [-3.024337833005822, -39.65663370438651],
  image: '',
  description: 'Hospedagem próxima ao Club de Mar.',
  type: 'clube',
  localidade: 'icaraí'
},
{
  id: 31,
  name: 'Restaurante e Pousada Hibisco',
  position: [-3.0232372517418606, -39.64427510033635],
  image: '',
  description: 'R. Valdemar Carneiro Lima, 119 - praia de, Amontada - CE, 62545-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 32,
  name: 'ZIN Restaurante',
  position: [-3.024843819214495, -39.64564286390657],
  image: '',
  description: 'Icaraí de Amontada - R. Joaquim Alves Parente, 94 - Centro, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 33,
  name: 'Restaurante Praia Azul',
  position: [-3.0246630775167778, -39.64572845041341],
  image: '',
  description: 'R. Joaquim Alves Parente, 2-204 - Icaraí, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 34,
  name: 'Makena Hotel',
  position: [-3.0238702493920253, -39.64408693857087],
  image: '',
  description: 'R. Joaquim Alves Parente - In, Amontada - CE, 62545-000',
  type: 'hotel',
  localidade: 'icaraí'
},
{
  id: 35,
  name: 'Villa Ekôa',
  position: [-3.0224502882924438, -39.64140170438669],
  image: '',
  description: 'BR. SDO 77 - Icaraí, Amontada - CE, 62540-000',
  type: 'casas',
  localidade: 'icaraí'
},
{
  id: 36,
  name: 'Pousada Brisa Del Mar',
  position: [-3.0260533500846143, -39.65553624856447],
  image: '',
  description: 'Pousada confortável próxima à praia.',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 37,
  name: 'Pousada Jardim do Vento',
  position: [-3.021164618148881, -39.641863044316295],
  image: '',
  description: 'R. Rita Praciano, 00 - Icaraí, Amontada - CE, 62500-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 38,
  name: 'Pousada Villa Siriguela',
  position: [-3.0227456832702972, -39.64181427700302],
  image: '',
  description: 'R. Rita Praciano, 479 - Icaraí, Amontada - CE, 62500-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 39,
  name: 'Rio Aracatiaçu',
  position: [-3.111, -39.332],
  image: '',
  description: 'Rio navegável com passeios de canoa e belas margens.',
  type: 'rio',
  localidade: 'moitas'
},
// {
//   id: 40,
//   name: 'SPA Essencia Brasileira',
//   position: [-3.023287066923181, -39.64129382446374],
//   image: '',
//   description: 'R. SDO 77, S.N - Icaraí, Amontada - CE, 62540-000',
//   type: 'spa',
//   localidade: 'icaraí'
// },
{
  id: 41,
  name: 'The Spot - Beachfront Sports Pousada',
  position: [-3.0205461160141533, -39.642405981968686],
  image: '',
  description: 'Praia dos Navegantes - Icaraí, Amontada - CE, 62540-000',
  type: 'hotel',
  localidade: 'icaraí'
},
{
  id: 42,
  name: 'Casa de Pedra - Icaraizinho',
  position: [-3.0205361726426556, -39.64265481663271],
  image: '',
  description: 'R. Rita Praciano - Icaraí, Amontada - CE, 62545-000',
  type: 'casas',
  localidade: 'icaraí'
},
// {
//   id: 43,
//   name: 'Petiscaria Da Villa RestôBar',
//   position: [-3.0250276636596367, -39.646574852417224],
//   image: '',
//   description: 'J. Severo do - R. José Severo Couto Garcês - Icaraí, Amontada - CE, 62540-000',
//   type: 'petiscaria',
//   localidade: 'icaraí'
// },
{
  id: 44,
  name: 'Igreja Matriz de Nossa Senhora dos Navegantes',
  position: [-3.0247038494293, -39.6468322294904],
  image: '',
  description: 'Praça Noé Praciano - Icaraí, Amontada - CE.',
  type: 'igreja',
  localidade: 'icaraí'
},
{
  id: 45,
  name: 'Laje do Brilho',    
  position: [-3.0242552590122953, -39.64662101934973],
  image: '',
  description: 'R. Amarilo Alves de Lima, 45 - In, Amontada - CE, 62545-000',
  type: 'bar',
  localidade: 'icaraí'
},
{
  id: 46,
  name: 'Adocica Bistrô',
  position: [-3.0242967054312198, -39.646688843322266],
  image: '',
  description: 'Praça dos Navegantes,307 loja2 Icaraí de Amontada, Amontada - CE, 62545-000 .',
  type: 'hamburgueria',
  localidade: 'icaraí'
},
{
  id: 47,
  name: 'Nordestina restô',
  position: [-3.0242926618782278, -39.646477273019876],
  image: '',
  description: 'Icaraí de Amontada - Rua Noé Praciano - Icaraí, Amontada - CE, 62545-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 48,
  name: 'Farmácia',
  position: [-3.0245878412116998, -39.647206127690936],
  image: '',
  description: 'R. João de Castro, 2-156 - Icaraí, Amontada - CE, 62540-000',
  type: 'farmacia',
  localidade: 'icaraí'
},
{
  id: 49,
  name: 'Pousada e Restaurante Junduh Brasil',
  position: [-3.0244655377563148, -39.647597500871974],
  image: '',
  description: 'R. João de Castro, sn - Icaraí, Amontada - CE, 62540-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 50,
  name: 'Arte na Brasa',
  position: [-3.024416744827571, -39.647710491899886],
  image: '',
  description: 'R. João de Castro - Icaraí, Amontada - CE, 62545-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 51,
  name: 'Maria Pitanga',
  position: [-3.024347621508097, -39.647754263198976],
  image: '',
  description: 'R. João de Castro, 1-155 - Icaraí, Amontada - CE, 62540-000',
  type: 'sorveteria',
  localidade: 'icaraí'
},
{
  id: 52,
  name: 'Arte Paulistana Restaurante e Pizzaria',
  position: [-3.0243964144399453, -39.64792934839537],
  image: '',
  description: 'R. João de Castro, 131 - Centro, Amontada - CE, 62545-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 53,
  name: 'Sorveteria Artesanal Casa de Pedra',
  position: [-3.024535677587541, -39.64804844704641],
  image: '',
  description: 'R. João de Castro, 2-156 - Icaraí, Amontada - CE, 62540-000',
  type: 'sorveteria',
  localidade: 'icaraí'
},
{
  id: 54,
  name: 'Chico Dina Restaurante',
  position: [-3.024164647994066, -39.64815838426276],
  image: '',
  description: 'R. João de Castro, 1-155 - Icaraí, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 55,
  name: 'San Paolo Gelato - Icaraí de Amontada',
  position: [-3.0244879011819736, -39.64827035737412],
  image: '',
  description: 'R. João de Castro - Icaraí, Amontada - CE, 62540-000',
  type: 'sorveteria',
  localidade: 'icaraí'
},
{
  id: 56,
  name: 'LA JUANITA ICARAIZINHO',
  position: [-3.0245183967607034, -39.64840574302016],
  image: '',
  description: 'R. João de Castro, s/n - Icarai de Amontada, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 57,
  name: 'Sunset Bar Icaraizinho - Restaurante e Pizzaria',
  position: [-3.024374051013841, -39.648461729565526],
  image: '',
  description: 'Sunset Bar Icaraizinho - Restaurante e Pizzaria',
  type: 'restaurantes',
  localidade: 'icaraí'
},
// {
//   id: 58,
//   name: 'Las Marias Icaraizinho',
//   position: [-3.0245417767070193, -39.648504482931315],
//   image: '',
//   description: 'R. João de Castro - Icaraí, Amontada - CE, 62540-000.',
//   type: 'cafe',
//   localidade: 'icaraí'
// },
{
  id: 59,
  name: 'Casa Caiada Icaraí',
  position: [-3.0245956522261626, -39.648630707142665],
  image: '',
  description: 'Centro Próximo ao mercadinho Shesman - R. Francisco Gonçalves de Souza, S/N - Centro, Amontada - CE, 62540-000',
  type: 'casas',
  localidade: 'icaraí'
},
{
  id: 60,
  name: 'Restaurante Blue Beach Icaraizinho',
  position: [-3.0243710014572502, -39.64870399863091],
  image: '',
  description: 'R. Francisco Gonçalves de Souza, 56 - Icaraí, Amontada - CE, 62540-000',
  type: 'restaurantes',
  localidade: 'icaraí'
},
{
  id: 61,
  name: 'Pousada A Casinha',  
  position: [-3.0245173802430867, -39.64875489549033],
  image: '',
  description: 'R. Francisco Gonçalves de Souza - Icaraí, Amontada - CE, 62540-000',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 62,
  name: 'Encanto do Sol Hospedagem',
  position: [-3.024602767859021, -39.64878237979441],
  image: '',
  description: 'R. Francisco Gonçalves de Souza, 407 - Icaraí, Amontada - CE, 62540-000.',
  type: 'pousadas',
  localidade: 'icaraí'
},
{
  id: 63,
  name: 'Maré Icaraizinho',
  position: [-3.0247308492724656, -39.64868363989132],
  image: '',
  description: 'R. Francisco Gonçalves de Souza, 408 - Icaraí, Amontada - CE, 62540-000',
  type: 'lojas',
  localidade: 'icaraí'
},
{
  id: 64,
  name: 'Icaraizinho Beach',
  position: [-3.024189962537932, -39.648326258469595],
  image: '',
  description: 'Icaraizinho de Amontada - R. João de Castro - Icaraí, Amontada - CE, 62545-000',
  type: 'atracaoNatural',
  localidade: 'icaraí'
},
{
  id: 65,
  name: 'De Praia Brasil',
  position: [-3.0242155181683894, -39.647151386302326],
  image: '',
  description: 'Praça Navegantes, s/n - Centro, Amontada - CE, 62540-000',
  type: 'hotel',
  localidade: 'icaraí'
},
{
  id: 66,
  name: 'Vila Torem Hotel',
  position: [-3.024083093512013, -39.64676286424085],
  image: '',
  description: 'Praça Navegantes, 80-112 - S/n - Icaraí, Amontada - CE, 62545-000',
  type: 'hotel',
  localidade: 'icaraí'
},
// {
//   id: 67,
//   name: 'Icaraizinhotur.oficial',
//   position: [-3.02367884971843, -39.64649531909011],
//   image: '',
//   description: 'R. João de Castro - Centro, Amontada - CE, 60743-000, Amontada - CE, 60743-000',
//   type: 'agencia',
//   localidade: 'icaraí'
// },
{
  id: 68,
  name: 'Ilha das Ostras',
  position: [-3.0229692910376613, -39.698849302537471],
  image: '',
  description: 'Unnamed Road - Moitas, Amontada - CE, 62500-000',
  type: 'restaurantes',
  localidade: 'moitas'
},
// {
//   id: 69,
//   name: 'Lagoa das Cobras',
//   position: [-3.0186471598386198, -39.702936290893305],
//   image: '',
//   description: 'Ponto Turistico',
//   type: 'atracaoNatural',
//   localidade: 'moitas'
// },
// {
//   id: 70,
//   name: 'Cabana Por Do Sol',
//   position: [-3.016450798011041, -39.70437395479516],
//   image: '',
//   description: 'Moitas, Amontada - CE, 62500-000',
//   type: 'restaurantes',
//   localidade: 'moitas'
// },
// {
//   id: 71,
//   name: 'Túnel do Rio Aracatiaçu',
//   position: [-3.015090122857019, -39.708644031649705],
//   image: '',
//   description: 'Moitas, Amontada - CE, 62500-000',
//   type: 'atracaoNatural',
//   localidade: 'caetanos'
// },
// {
//   id: 72,
//   name: '@moitasencantos',
//   position: [-3.005509526032531, -39.706020909726114],
//   image: '',
//   description: 'PvR. Prof. João Manoel Pereira - Moitas, Amontada - CE, 62543-000',
//   type: 'agencia',
//   localidade: 'moitas'
// },
// {
//   id: 73,
//   name: 'Pousada Laculá',
//   position: [-3.001091028812027, -39.69871965356211],
//   image: '',
//   description: 'R. Beira Mar - Praia de, Amontada - CE, 62540-000',
//   type: 'pousadas',
//   localidade: 'moitas'
// },
// {
//   id: 74,
//   name: 'Restaurante Dona Jô',
//   position: [-3.0013690284165873, -39.698742651655834],
//   image: '',
//   description: 'Rua Raimundo nonato Cipriano - Moitas, Amontada - CE, 62540-000',
//   type: 'restaurantes',
//   localidade: 'moitas'
// },
// {
//   id: 75,
//   name: 'Trilha do Vento Forte',
//   position: [-3.0014371138200544, -39.69892332580956],
//   image: '',
//   description: 'R. Raimundo Nonato, 1-103 - Moitas, Amontada - CE, 62540-000',
//   type: 'igreja',
//   localidade: 'moitas'
// },
// {
//   id: 76,
//   name: 'Casa Velha', 
//   position: [-3.001331233436963, -39.697043901435855],
//   image: '',
//   description: 'R. Francisco Cândido, 58 - 120, Amontada - CE, 62540-000',
//   type: 'pousadas',
//   localidade: 'moitas'
// },
// {
//   id: 77,
//   name: 'Pousada Caravelas Praia de Moitas - CE',
//   position: [-3.0007757574371534, -39.697235200296056],
//   image: '',
//   description: 'Praia de Moitas - Moitas, Amontada - CE, 62540-000',
//   type: 'pousadas',
//   localidade: 'moitas'
// },
// {
//   id: 78,
//   name: 'Casa das Rendas',
//   position: [-3.001148073219105, -39.69762948500284],
//   image: '',
//   description: 'R. Euríco Miguel dos Santos, 40 - Moitas, Amontada - CE, 62540-000',
//   type: 'casas',
//   localidade: 'moitas'
// },
// {
//   id: 79,
//   name: 'Comida no Alpendre',
//   position: [-3.0045511574952126, -39.69704330438653],
//   image: '',
//   description: 'R. Prof. João Manoel Pereira - Moitas, Amontada - CE, 62540-000',
//   type: 'restaurantes',
//   localidade: 'moitas'
// },
// {
//   id: 80,
//   name: 'Conexão Bahia',
//   position: [-2.999416478167884, -39.695509817478815],
//   image: '',
//   description: 'R. Beira Mar - Moitas, Amontada - CE, 62543-000',
//   type: 'restaurantes',
//   localidade: 'moitas'
// },
// {
//   id: 81,
//   name: 'Praia de Moitas Ceará',
//   position: [-2.999791472936107, -39.6967865489119],
//   image: '',
//   description: 'Praia de - Moitas, Amontada - CE, 62500-000',
//   type: 'praia',
//   localidade: 'moitas'
// },
// {
//   id: 82,
//   name: 'Collina Beach - Pousada no Ceará',
//   position: [-2.999791472936107, -39.6967865489119],
//   image: '',
//   description: 'R. Beira Mar - Praia de, Amontada - CE, 62543-000',
//   type: 'pousadas',
//   localidade: 'moitas'
// },
// {
//   id: 83,
//   name: 'Villa Pukara',
//   position: [-2.9997892860441615, -39.69599847370195],
//   image: '',
//   description: 'R. Beira Mar, sn - Moitas, Amontada - CE, 62540-000',
//   type: 'casas',
//   localidade: 'moitas'
// },
{
  id: 84,
  name: 'Barraca do Tio Cle',
  position: [-3.0010316309977974, -39.708029433222144],
  image: '/fotos-points/tio-cle.png',
  description: 'R. Beira Mar - Moitas, Amontada - CE, 62500-000',
  type: 'restaurantes',
  localidade: 'moitas'
},
// {
//   id: 84,
//   name: 'Foz do Rio Aracatiaçu',
//   position: [-3.0010316309977974, -39.708029433222144],
//   image: '',
//   description: 'Unnamed Road, Amontada - CE, 62500-000',
//   type: 'atracaoNatural',
//   localidade: 'moitas'
// },
{
  id: 84,
  name: 'Encontro do rio com o mar - praia de moitas',
  position: [-3.001685192259162, -39.708490773151745],
  image: '',
  description: 'Moitas, Amontada - CE, 62500-000',
  type: 'atracaoNatural',
  localidade: 'moitas'
},
];