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
    nome: 'Parque da Cantareira, Núcleo Pedra Grande',
    local: 'Parque da Cantareira, Núcleo Pedra Grande',
    data: '2025-01-01',
    descricao: '',
    imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
    linkInscricao: 'https://sprinta.com.br',
  },
]

export interface EdicaoAnterior {
  ano: number
  resumo: string
  eventos: Evento[]
}

export const edicoesAnteriores: EdicaoAnterior[] = [
  {
    ano: 2025,
    resumo: '',
    eventos: [
      {
        id: 'e2025-1',
        nome: 'Floresta da Tijuca',
        local: 'Floresta da Tijuca, Rio de Janeiro',
        data: '2025-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2025-2',
        nome: 'Joanópolis',
        local: 'Joanópolis, SP',
        data: '2025-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
      {
        id: 'e2025-3',
        nome: 'Prainha Branca',
        local: 'Prainha Branca, Guarujá',
        data: '2025-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2025-4',
        nome: 'Pedra do Om',
        local: 'Pedra do Om, Monteiro Lobato',
        data: '2025-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
    ],
  },
  {
    ano: 2024,
    resumo: 'O ano de 2024, além dos treinos, foi marcado pelo lançamento da primeira pesquisa sobre o comportamento feminino no trail. Divulgada em primeira mão na UTMB by Paraty Brazil, os dados revelam números importantes sobre as mulheres que correm trail run.',
    eventos: [
      {
        id: 'e2024-1',
        nome: 'Pedra Grande de Atibaia',
        local: 'Pedra Grande de Atibaia',
        data: '2024-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2024-2',
        nome: 'Paraty',
        local: 'Paraty, Rio de Janeiro',
        data: '2024-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-paraty.jpg',
      },
      {
        id: 'e2024-3',
        nome: 'Paranapiacaba',
        local: 'Paranapiacaba, São Paulo',
        data: '2024-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-paranapiacaba.jpg',
      },
    ],
  },
  {
    ano: 2023,
    resumo: 'Ano de expandir horizontes! O trabalho junto aos organizadores de eventos fez com que reuníssemos mulheres em diferentes regiões. A maior prova de trail run de 2023, a UTMB by Paraty Brazil, nos convidou para a execução do primeiro treino de mulheres na cidade de Paraty, no Rio de Janeiro.',
    eventos: [
      {
        id: 'e2023-1',
        nome: 'Guarulhos',
        local: 'Guarulhos, São Paulo',
        data: '2023-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2023-2',
        nome: 'São Bento do Sapucaí',
        local: 'São Bento do Sapucaí, São Paulo',
        data: '2023-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
      {
        id: 'e2023-3',
        nome: 'Paraty',
        local: 'Paraty, Rio de Janeiro',
        data: '2023-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-paraty.jpg',
      },
    ],
  },
  {
    ano: 2022,
    resumo: 'Que saudade! Foi um ano cheio de lugares incríveis e novos desafios. Trilhas, cachoeiras, rios e picos de montanhas fizeram parte dos nossos treinos. Pela primeira vez, o Trail Girls expandiu para outro estado.',
    eventos: [
      {
        id: 'e2022-1',
        nome: 'Paranapiacaba',
        local: 'Paranapiacaba, São Paulo',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-paranapiacaba.jpg',
      },
      {
        id: 'e2022-2',
        nome: 'Santa Isabel',
        local: 'Santa Isabel, São Paulo',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2022-3',
        nome: 'Extrema',
        local: 'Extrema, Minas Gerais',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
      {
        id: 'e2022-4',
        nome: 'Pico do Jaraguá',
        local: 'Pico do Jaraguá, São Paulo',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-jaragua.jpg',
      },
      {
        id: 'e2022-5',
        nome: 'Corrida Kids',
        local: 'Parque Ecológico',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2022-6',
        nome: 'Serra da Cantareira',
        local: 'Serra da Cantareira, Mairiporã',
        data: '2022-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-mairipora.jpg',
      },
    ],
  },
  {
    ano: 2021,
    resumo: 'Por causa da pandemia, os encontros presenciais continuaram inviáveis, mas buscamos continuar conectadas e gerando estímulos para que ninguém ficasse sem correr, daí nasceu o Desafio Virtual Trail Girls. Durante o ciclo do desafio virtual, a mulherada treinava e enviava suas atividades pelo grupo de whats. Em novembro retomamos o movimento de maneira presencial, na Cidade de Mairiporã, com um treino desafiador que envolveu 3 distâncias (7km, 14km e 23km) e caminhada.',
    eventos: [
      {
        id: 'e2021-1',
        nome: 'Mairiporã',
        local: 'Mairiporã, São Paulo',
        data: '2021-11-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-mairipora.jpg',
      },
    ],
  },
  {
    ano: 2020,
    resumo: 'Em um ano desafiador, que tivemos que aprender a ficar sem eventos, reduzimos o número de treinos, mas não deixamos de nos conectar. A partir de outubro, seguindo todos os protocolos de segurança, fizemos treinos temáticos e com número de participantes reduzido.',
    eventos: [
      {
        id: 'e2020-1',
        nome: 'Parque Juquery',
        local: 'Parque Juquery',
        data: '2020-02-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
      },
      {
        id: 'e2020-2',
        nome: 'Parque Ecológico Tietê',
        local: 'Parque Ecológico Tietê',
        data: '2020-03-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2020-3',
        nome: 'Guararema',
        local: 'Guararema',
        data: '2020-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
      {
        id: 'e2020-4',
        nome: 'Sabaúna',
        local: 'Sabaúna, Mogi das Cruzes',
        data: '2020-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
    ],
  },
  {
    ano: 2019,
    resumo: 'Os treinos de Trail Girls reuniram mais de 500 mulheres e cada evento deu às participantes a chance de conhecerem novos lugares.',
    eventos: [
      {
        id: 'e2019-1',
        nome: 'Parque Juquery',
        local: 'Parque Juquery, Franco da Rocha',
        data: '2019-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-juquery.jpg',
      },
      {
        id: 'e2019-2',
        nome: 'Pico do Jaraguá',
        local: 'Pico do Jaraguá, São Paulo',
        data: '2019-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-jaragua.jpg',
      },
      {
        id: 'e2019-3',
        nome: 'Pico do Urubu',
        local: 'Pico do Urubu, Mogi das Cruzes',
        data: '2019-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
      {
        id: 'e2019-4',
        nome: 'Fazenda Off Road',
        local: 'Fazenda Off Road, Guarulhos',
        data: '2019-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-2.jpg',
      },
      {
        id: 'e2019-5',
        nome: 'Pedra Grande',
        local: 'Pedra Grande, Atibaia',
        data: '2019-01-01',
        descricao: '',
        imagem: '/images/trailgirls/encontros/encontro-generico-1.jpg',
      },
    ],
  },
]


