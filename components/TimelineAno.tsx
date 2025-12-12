'use client'

import { motion } from 'framer-motion'
import { EdicaoAnterior } from '@/data/events'
import CardEvento from './CardEvento'

interface TimelineAnoProps {
  edicao: EdicaoAnterior
  index: number
}

export default function TimelineAno({ edicao, index }: TimelineAnoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-12"
    >
      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-gray-300" />
        <h3 className="px-6 text-3xl font-bold text-trail-pink-600">{edicao.ano}</h3>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      {edicao.resumo && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center px-4">
            {edicao.resumo}
          </p>
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {edicao.eventos.map((evento, eventIndex) => (
          <CardEvento key={evento.id} evento={evento} index={eventIndex} />
        ))}
      </div>
    </motion.div>
  )
}


