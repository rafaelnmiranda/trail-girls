'use client'

import SectionTitle from '@/components/SectionTitle'
import CardParceiro from '@/components/CardParceiro'
import { provasParceiras } from '@/data/races'

export default function ProvasParceiras() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Provas Parceiras"
          subtitle="Provas que oferecem cupons de desconto exclusivos para mulheres Trail Girls"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {provasParceiras.map((prova, index) => (
            <CardParceiro key={prova.id} parceiro={prova} index={index} tipo="prova" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Use os cupons de desconto ao se inscrever nas provas parceiras. Os cupons são
            exclusivos para mulheres Trail Girls.
          </p>
        </div>
      </div>
    </div>
  )
}

