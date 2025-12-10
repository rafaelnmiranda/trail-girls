'use client'

import SectionTitle from '@/components/SectionTitle'
import CardParceiro from '@/components/CardParceiro'
import { marcasParceiras } from '@/data/brands'

export default function MarcasParceiras() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Marcas Parceiras"
          subtitle="Marcas que oferecem benefícios exclusivos para a comunidade Trail Girls"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marcasParceiras.map((marca, index) => (
            <CardParceiro key={marca.id} parceiro={marca} index={index} tipo="marca" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            As marcas parceiras oferecem descontos e benefícios exclusivos para mulheres Trail
            Girls. Use os cupons ao fazer suas compras.
          </p>
        </div>
      </div>
    </div>
  )
}

