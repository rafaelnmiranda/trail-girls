'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'

export default function Pesquisa() {
  const insights = [
    {
      titulo: 'Participação Feminina',
      descricao: 'Análise do crescimento da participação feminina no trail run nos últimos anos.',
    },
    {
      titulo: 'Motivações',
      descricao: 'Principais motivações que levam mulheres a praticar trail run.',
    },
    {
      titulo: 'Desafios',
      descricao: 'Principais desafios enfrentados por mulheres no esporte.',
    },
    {
      titulo: 'Comunidade',
      descricao: 'Importância da comunidade e do suporte para mulheres no trail run.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trailgirls/pesquisa/pesquisa-cover.jpg"
            alt="Pesquisa Trail Girls"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Primeira Pesquisa sobre Comportamento Feminino no Trail Run
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Dados e insights que transformam o cenário do esporte
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-gray-700 mb-4">
              Em 2024, o Trail Girls lançou a primeira pesquisa sobre comportamento feminino no
              trail run, consolidando anos de observação e experiência em dados concretos.
            </p>
            <p className="text-gray-700 mb-4">
              Esta pesquisa representa um marco importante no movimento de igualdade de gênero
              no esporte, oferecendo insights valiosos sobre a experiência das mulheres no
              trail run e apontando caminhos para tornar o esporte ainda mais inclusivo e
              acolhedor.
            </p>
            <p className="text-gray-700">
              Através desta pesquisa, buscamos entender melhor as necessidades, desafios e
              motivações das mulheres no trail run, contribuindo para a transformação do
              cenário esportivo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Principais Insights"
            subtitle="Alguns dos temas abordados na pesquisa"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-trail-pink-600"
              >
                <h3 className="text-xl font-bold text-black mb-3">{insight.titulo}</h3>
                <p className="text-gray-700">{insight.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-16 bg-trail-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Baixe a Pesquisa Completa</h2>
            <p className="text-lg text-pink-100 mb-8">
              Acesse o PDF completo com todos os dados, análises e conclusões da pesquisa.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-white text-trail-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              BAIXAR PESQUISA (PDF)
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

