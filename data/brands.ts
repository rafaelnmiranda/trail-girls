export interface MarcaParceira {
  id: string
  nome: string
  descricao: string
  logo?: string
  cupom?: string
  link: string
  categoria?: string
}

export const marcasParceiras: MarcaParceira[] = [
  {
    id: '1',
    nome: 'Marca Esportiva X',
    descricao: 'Desconto especial em equipamentos de trail running para mulheres Trail Girls.',
    cupom: 'TRAILGIRLS10',
    link: 'https://example.com/marca-x',
    categoria: 'Equipamentos',
  },
  {
    id: '2',
    nome: 'Suplementos Trail',
    descricao: 'Suplementos esportivos com desconto exclusivo para a comunidade.',
    cupom: 'TRAILGIRLS15',
    link: 'https://example.com/suplementos',
    categoria: 'Suplementos',
  },
  {
    id: '3',
    nome: 'Nutrição Esportiva Y',
    descricao: 'Produtos de nutrição esportiva com benefícios especiais.',
    link: 'https://example.com/nutricao-y',
    categoria: 'Nutrição',
  },
  {
    id: '4',
    nome: 'App de Treino',
    descricao: 'Aplicativo de treinamento com plano especial para Trail Girls.',
    link: 'https://example.com/app-treino',
    categoria: 'Tecnologia',
  },
]

