'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Produto } from '@/data/products'

interface CardProdutoProps {
  produto: Produto
  index?: number
}

export default function CardProduto({ produto, index = 0 }: CardProdutoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{produto.nome}</h3>
        <p className="text-gray-600 mb-4">{produto.descricao}</p>
        {produto.preco && (
          <p className="text-2xl font-bold text-trail-pink-600 mb-4">{produto.preco}</p>
        )}
        <Link
          href={produto.linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-6 py-2 bg-trail-pink-600 text-white font-semibold rounded-lg hover:bg-trail-pink-700 transition-colors"
        >
          COMPRAR PELO WHATSAPP
        </Link>
      </div>
    </motion.div>
  )
}

