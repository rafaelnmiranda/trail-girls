'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import CardEvento from '@/components/CardEvento'
import TimelineAno from '@/components/TimelineAno'
import { proximosEncontros, edicoesAnteriores } from '@/data/events'

export default function Agenda() {
  return (
    <div className="min-h-screen bg-white">
      {/* Próximos Encontros */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Próximos Encontros"
            subtitle="Junte-se a nós nos próximos treinões e encontros"
          />
          {proximosEncontros.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximosEncontros.map((evento, index) => (
                <CardEvento key={evento.id} evento={evento} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Em breve divulgaremos os próximos encontros. Fique de olho!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Edições Anteriores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Edições Anteriores"
            subtitle="Nossa história através dos anos"
          />
          <div className="space-y-12">
            {edicoesAnteriores.map((edicao, index) => (
              <TimelineAno key={edicao.ano} edicao={edicao} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

