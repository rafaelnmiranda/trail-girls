'use client'

import SectionTitle from '@/components/SectionTitle'
import CardProduto from '@/components/CardProduto'
import { produtos } from '@/data/products'

export default function Produtos() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Produtos Trail Girls"
          subtitle="Itens exclusivos para você mostrar seu amor pelo trail run"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto, index) => (
            <CardProduto key={produto.id} produto={produto} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Todos os produtos são vendidos através do WhatsApp. Clique em "COMPRAR PELO WHATSAPP"
            em qualquer produto para entrar em contato conosco.
          </p>
        </div>
      </div>
    </div>
  )
}

