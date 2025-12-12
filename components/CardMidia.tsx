'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Midia } from '@/data/media'

interface CardMidiaProps {
  midia: Midia
  index?: number
}

export default function CardMidia({ midia, index = 0 }: CardMidiaProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const tipoLabels = {
    podcast: 'Podcast',
    reportagem: 'Reportagem',
    video: 'Vídeo',
    outro: 'Mídia',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {midia.imagem && (
        <div className="relative h-48 w-full">
          <Image
            src={midia.imagem}
            alt={midia.titulo}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-trail-pink-100 text-trail-pink-700 text-sm font-semibold rounded-full mb-3">
          {tipoLabels[midia.tipo]}
        </span>
        <h3 className="text-xl font-bold text-black mb-2">{midia.titulo}</h3>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Veículo:</span> {midia.veiculo}
        </p>
        <p className="text-gray-500 text-sm mb-4">{formatDate(midia.data)}</p>
        <Link
          href={midia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-trail-pink-600 font-semibold hover:text-trail-pink-700 transition-colors"
        >
          Ler mais →
        </Link>
      </div>
    </motion.div>
  )
}


