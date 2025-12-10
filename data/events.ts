export interface Evento {
  id: string
  nome: string
  local: string
  data: string
  descricao: string
  imagem: string
  linkInscricao?: string
}

export const proximosEncontros: Evento[] = [
  {
    id: '1',
    nome: 'Treino Parque Juquery',
    local: 'Parque Juquery, Franco da Rocha - SP',
    data: '2024-04-15',
    descricao: 'Treino matinal com percurso de 5km e 10km. Encontro às 7h no portão principal.',
    imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
    linkInscricao: 'https://wa.me/5511999999999?text=Quero%20me%20inscrever%20no%20treino%20do%20Parque%20Juquery',
  },
  {
    id: '2',
    nome: 'Trilha Pico do Jaraguá',
    local: 'Pico do Jaraguá, São Paulo - SP',
    data: '2024-05-20',
    descricao: 'Subida ao pico com vista panorâmica. Dificuldade média. Início às 6h30.',
    imagem: '/images/trailgirls/encontros/encontro-jaragua.jpg',
    linkInscricao: 'https://wa.me/5511999999999?text=Quero%20me%20inscrever%20na%20trilha%20do%20Pico%20do%20Jaraguá',
  },
  {
    id: '3',
    nome: 'Encontro Mairiporã',
    local: 'Mairiporã - SP',
    data: '2024-06-10',
    descricao: 'Trilha pela serra com cachoeiras. Percurso de 8km. Saída às 6h.',
    imagem: '/images/trailgirls/encontros/encontro-mairipora.jpg',
    linkInscricao: 'https://wa.me/5511999999999?text=Quero%20me%20inscrever%20no%20encontro%20de%20Mairiporã',
  },
]

export interface EdicaoAnterior {
  ano: number
  eventos: Evento[]
}

export const edicoesAnteriores: EdicaoAnterior[] = [
  {
    ano: 2024,
    eventos: [
      {
        id: 'e2024-1',
        nome: 'Treino Parque Juquery',
        local: 'Parque Juquery, Franco da Rocha - SP',
        data: '2024-03-10',
        descricao: 'Encontro com mais de 50 mulheres. Percurso de 5km e 10km.',
        imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
      },
      {
        id: 'e2024-2',
        nome: 'Trilha Paranapiacaba',
        local: 'Paranapiacaba - SP',
        data: '2024-02-18',
        descricao: 'Trilha histórica pela vila ferroviária. Percurso de 12km.',
        imagem: '/images/trailgirls/encontros/encontro-paranapiacaba.jpg',
      },
    ],
  },
  {
    ano: 2023,
    eventos: [
      {
        id: 'e2023-1',
        nome: 'Encontro Paraty',
        local: 'Paraty - RJ',
        data: '2023-11-05',
        descricao: 'Trilha pela Mata Atlântica com vista para o mar. Um dos maiores encontros do ano.',
        imagem: '/images/trailgirls/encontros/encontro-paraty.jpg',
      },
      {
        id: 'e2023-2',
        nome: 'Treino Pico do Jaraguá',
        local: 'Pico do Jaraguá, São Paulo - SP',
        data: '2023-09-15',
        descricao: 'Subida ao pico com mais de 40 participantes.',
        imagem: '/images/trailgirls/encontros/encontro-jaragua.jpg',
      },
      {
        id: 'e2023-3',
        nome: 'Trilha Mairiporã',
        local: 'Mairiporã - SP',
        data: '2023-07-22',
        descricao: 'Trilha pela serra com parada em cachoeira.',
        imagem: '/images/trailgirls/encontros/encontro-mairipora.jpg',
      },
    ],
  },
  {
    ano: 2022,
    eventos: [
      {
        id: 'e2022-1',
        nome: 'Encontro Parque Juquery',
        local: 'Parque Juquery, Franco da Rocha - SP',
        data: '2022-10-08',
        descricao: 'Retomada dos encontros presenciais pós-pandemia.',
        imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
      },
    ],
  },
  {
    ano: 2021,
    eventos: [
      {
        id: 'e2021-1',
        nome: 'Encontros Online',
        local: 'Online',
        data: '2021 - Durante todo o ano',
        descricao: 'Durante a pandemia, mantivemos a comunidade ativa com encontros virtuais e desafios.',
        imagem: '/images/trailgirls/galeria/grupo-corrida-1.jpg',
      },
    ],
  },
  {
    ano: 2020,
    eventos: [
      {
        id: 'e2020-1',
        nome: 'Encontros Pré-Pandemia',
        local: 'Vários locais',
        data: '2020 - Primeiro semestre',
        descricao: 'Continuamos os encontros até março de 2020, quando adaptamos para o formato online.',
        imagem: '/images/trailgirls/galeria/grupo-corrida-2.jpg',
      },
    ],
  },
  {
    ano: 2019,
    eventos: [
      {
        id: 'e2019-1',
        nome: 'Primeiro Encontro',
        local: 'Parque Juquery, Franco da Rocha - SP',
        data: '2019-05-12',
        descricao: 'O primeiro encontro do Trail Girls, marcando o início do movimento.',
        imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
      },
    ],
  },
]

