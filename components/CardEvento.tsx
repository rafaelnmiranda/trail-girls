'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Evento } from '@/data/events'

interface CardEventoProps {
  evento: Evento
  index?: number
}

export default function CardEvento({ evento, index = 0 }: CardEventoProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={evento.imagem}
          alt={evento.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{evento.nome}</h3>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Local:</span> {evento.local}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Data:</span> {formatDate(evento.data)}
        </p>
        <p className="text-gray-700 mb-4">{evento.descricao}</p>
        {evento.linkInscricao && (
          <Link
            href={evento.linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-trail-pink-600 text-white font-semibold rounded-lg hover:bg-trail-pink-700 transition-colors"
          >
            SE INSCREVA
          </Link>
        )}
      </div>
    </motion.div>
  )
}

