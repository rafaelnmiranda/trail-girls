export interface Midia {
  id: string
  titulo: string
  veiculo: string
  tipo: 'podcast' | 'reportagem' | 'video' | 'outro'
  data: string
  link: string
  imagem?: string
}

export const midia: Midia[] = [
  {
    id: '1',
    titulo: 'Trail Girls: Movimento que empodera mulheres no trail run',
    veiculo: 'Podcast Corrida Livre',
    tipo: 'podcast',
    data: '2024-03-15',
    link: 'https://example.com/podcast-trail-girls',
    imagem: '/images/trailgirls/galeria/grupo-corrida-1.jpg',
  },
  {
    id: '2',
    titulo: 'Primeira pesquisa sobre comportamento feminino no trail run',
    veiculo: 'Revista Trail Running',
    tipo: 'reportagem',
    data: '2024-02-20',
    link: 'https://example.com/reportagem-pesquisa',
    imagem: '/images/trailgirls/pesquisa/pesquisa-cover.jpg',
  },
  {
    id: '3',
    titulo: 'Como o Trail Girls está mudando o cenário do trail run',
    veiculo: 'Blog Corrida & Cia',
    tipo: 'reportagem',
    data: '2024-01-10',
    link: 'https://example.com/reportagem-cenario',
    imagem: '/images/trailgirls/galeria/trilha-montanha-1.jpg',
  },
  {
    id: '4',
    titulo: 'Entrevista com Tamiris Monteiro e Ana Pagiossi',
    veiculo: 'Canal Trail Brasil',
    tipo: 'video',
    data: '2023-12-05',
    link: 'https://example.com/video-entrevista',
    imagem: '/images/trailgirls/galeria/grupo-corrida-2.jpg',
  },
  {
    id: '5',
    titulo: 'Trail Girls: 5 anos de história e impacto',
    veiculo: 'Portal Esportivo',
    tipo: 'reportagem',
    data: '2023-11-18',
    link: 'https://example.com/reportagem-5-anos',
    imagem: '/images/trailgirls/galeria/natureza-1.jpg',
  },
]


