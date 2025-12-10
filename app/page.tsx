'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import CardEvento from '@/components/CardEvento'
import { proximosEncontros } from '@/data/events'
import { produtos } from '@/data/products'
import { stats } from '@/data/stats'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const proximoEncontro = proximosEncontros[0]
  const produtosDestaque = produtos.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <Hero
        image="/images/trailgirls/hero/hero-home.jpg"
        title="Uma experiência esportiva de conexão com a natureza feita especialmente para mulheres."
        subtitle="Trail Girls é um movimento de empoderamento feminino no trail run, criando comunidade, segurança e conexão com a natureza desde 2019."
        ctaPrimary={{
          text: 'Ver agenda de encontros',
          href: '/agenda',
        }}
        ctaSecondary={{
          text: 'Conhecer o coletivo',
          href: '/sobre',
        }}
      />

      {/* Próximo Encontro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Próximo Encontro"
            subtitle="Junte-se a nós no próximo treino"
          />
          <div className="max-w-2xl mx-auto">
            <CardEvento evento={proximoEncontro} />
          </div>
        </div>
      </section>

      {/* Por que Trail Girls existe? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por que Trail Girls existe?"
            subtitle="Nossos pilares fundamentais"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Empoderamento',
                description: 'Fortalecendo mulheres através do esporte e da comunidade.',
                icon: '💪',
              },
              {
                title: 'Segurança',
                description: 'Criando um ambiente seguro e acolhedor nas trilhas.',
                icon: '🛡️',
              },
              {
                title: 'Comunidade',
                description: 'Conectando mulheres que compartilham a paixão pelo trail run.',
                icon: '👥',
              },
              {
                title: 'Natureza',
                description: 'Celebrando a conexão com a natureza e o meio ambiente.',
                icon: '🌲',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-16 bg-trail-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Números"
            subtitle="O impacto do Trail Girls em números"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Anos de Projeto', value: stats.anosAtivos },
              { label: 'Mulheres Impactadas', value: stats.mulheresImpactadas },
              { label: 'Encontros Realizados', value: stats.encontrosRealizados },
              { label: 'Cidades Visitadas', value: stats.cidadesVisitadas },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}+</div>
                <div className="text-sm md:text-base text-pink-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pesquisa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src="/images/trailgirls/pesquisa/pesquisa-cover.jpg"
                alt="Pesquisa Trail Girls"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Primeira Pesquisa</h3>
                  <p className="mb-4">Sobre comportamento feminino no trail run</p>
                  <Link
                    href="/pesquisa"
                    className="inline-block px-6 py-2 bg-trail-pink-600 text-white font-semibold rounded-lg hover:bg-trail-pink-700 transition-colors"
                  >
                    Ver Pesquisa
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Produtos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src="/images/trailgirls/galeria/grupo-corrida-1.jpg"
                alt="Produtos Trail Girls"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Produtos Trail Girls</h3>
                  <p className="mb-4">Camisetas, viseiras, bandanas e mais</p>
                  <Link
                    href="/produtos"
                    className="inline-block px-6 py-2 bg-trail-pink-600 text-white font-semibold rounded-lg hover:bg-trail-pink-700 transition-colors"
                  >
                    Ver Produtos
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

