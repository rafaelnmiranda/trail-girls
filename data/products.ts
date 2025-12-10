export interface Produto {
  id: string
  nome: string
  descricao: string
  imagem: string
  preco?: string
  linkWhatsApp: string
}

export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta Trail Girls',
    descricao: 'Camiseta 100% algodão com estampa exclusiva do coletivo. Disponível em vários tamanhos.',
    imagem: '/images/trailgirls/produtos/produto-camiseta.jpg',
    preco: 'R$ 79,90',
    linkWhatsApp: 'https://wa.me/5511999999999?text=Quero%20comprar%20a%20Camiseta%20Trail%20Girls',
  },
  {
    id: '2',
    nome: 'Viseira Trail Girls',
    descricao: 'Viseira esportiva com logo bordado. Proteção UV e ajuste confortável.',
    imagem: '/images/trailgirls/produtos/produto-viseira.jpg',
    preco: 'R$ 45,00',
    linkWhatsApp: 'https://wa.me/5511999999999?text=Quero%20comprar%20a%20Viseira%20Trail%20Girls',
  },
  {
    id: '3',
    nome: 'Bandana Trail Girls',
    descricao: 'Bandana multifuncional em tecido técnico. Perfeita para trilhas e corridas.',
    imagem: '/images/trailgirls/produtos/produto-bandana.jpg',
    preco: 'R$ 35,00',
    linkWhatsApp: 'https://wa.me/5511999999999?text=Quero%20comprar%20a%20Bandana%20Trail%20Girls',
  },
  {
    id: '4',
    nome: 'Regata Trail Girls',
    descricao: 'Regata esportiva em tecido dry-fit. Ideal para treinos e competições.',
    imagem: '/images/trailgirls/produtos/produto-regata.jpg',
    preco: 'R$ 89,90',
    linkWhatsApp: 'https://wa.me/5511999999999?text=Quero%20comprar%20a%20Regata%20Trail%20Girls',
  },
]

