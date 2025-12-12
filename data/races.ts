export interface ProvaParceira {
  id: string
  nome: string
  local: string
  data: string
  cupom: string
  link: string
  descricao?: string
}

export const provasParceiras: ProvaParceira[] = [
  {
    id: '1',
    nome: 'Trail da Mantiqueira',
    local: 'Campos do Jordão - SP',
    data: '2024-07-15',
    cupom: 'TRAILGIRLS15',
    link: 'https://example.com/trail-mantiqueira',
    descricao: 'Desconto de 15% para mulheres Trail Girls',
  },
  {
    id: '2',
    nome: 'Ultra Trail Serra do Mar',
    local: 'Paranapiacaba - SP',
    data: '2024-08-20',
    cupom: 'TRAILGIRLS20',
    link: 'https://example.com/ultra-trail-serra',
    descricao: 'Desconto de 20% para mulheres Trail Girls',
  },
  {
    id: '3',
    nome: 'Trilha das Cachoeiras',
    local: 'Mairiporã - SP',
    data: '2024-09-10',
    cupom: 'TRAILGIRLS10',
    link: 'https://example.com/trilha-cachoeiras',
    descricao: 'Desconto de 10% para mulheres Trail Girls',
  },
  {
    id: '4',
    nome: 'Trail Running Festival',
    local: 'São Paulo - SP',
    data: '2024-10-05',
    cupom: 'TRAILGIRLS12',
    link: 'https://example.com/trail-festival',
    descricao: 'Desconto de 12% para mulheres Trail Girls',
  },
]


