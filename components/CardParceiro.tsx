'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProvaParceira } from '@/data/races'
import { MarcaParceira } from '@/data/brands'

interface CardParceiroProps {
  parceiro: ProvaParceira | MarcaParceira
  index?: number
  tipo?: 'prova' | 'marca'
}

export default function CardParceiro({ parceiro, index = 0, tipo = 'prova' }: CardParceiroProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const isProva = tipo === 'prova' && 'data' in parceiro

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-trail-pink-600"
    >
      <h3 className="text-xl font-bold text-black mb-2">{parceiro.nome}</h3>
      {isProva && (
        <>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Local:</span> {parceiro.local}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Data:</span> {formatDate(parceiro.data)}
          </p>
        </>
      )}
      {!isProva && 'descricao' in parceiro && (
        <p className="text-gray-600 mb-4">{parceiro.descricao}</p>
      )}
      {isProva && 'descricao' in parceiro && parceiro.descricao && (
        <p className="text-gray-600 mb-2">{parceiro.descricao}</p>
      )}
      {parceiro.cupom && (
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Cupom de desconto:</p>
          <p className="text-2xl font-bold text-trail-pink-600">{parceiro.cupom}</p>
        </div>
      )}
      <Link
        href={parceiro.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-trail-pink-600 font-semibold hover:text-trail-pink-700 transition-colors"
      >
        Saiba mais →
      </Link>
    </motion.div>
  )
}

