'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
      <Hero
        image="/images/trailgirls/hero/hero-sobre.jpg"
        title="Sobre o Trail Girls"
        subtitle="A história de um movimento que transforma vidas"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              O Trail Girls nasceu em 2019 da paixão de duas mulheres pelo trail run e pela
              vontade de criar um espaço seguro e acolhedor para outras mulheres descobrirem
              e se apaixonarem por esse esporte.
            </p>
            <p className="text-gray-700 mb-4">
              Criado por <strong>Tamiris Monteiro</strong> e <strong>Ana Pagiossi</strong>, o
              movimento começou com encontros em parques e trilhas da região de São Paulo,
              reunindo mulheres de todas as idades e níveis de experiência.
            </p>
            <p className="text-gray-700 mb-4">
              Desde então, o Trail Girls já impactou centenas de mulheres, realizando treinões
              e encontros em diversos locais como Parque Juquery, Pico do Jaraguá, Mairiporã,
              Paraty, Paranapiacaba e muitos outros.
            </p>
            <p className="text-gray-700 mb-4">
              Em 2024, lançamos a primeira pesquisa sobre comportamento feminino no trail run,
              consolidando nosso papel como referência no movimento de igualdade de gênero no
              esporte.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Fundadoras"
            subtitle="As mulheres por trás do movimento"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                nome: 'Tamiris Monteiro',
                bio: 'Co-fundadora do Trail Girls, apaixonada por trail run e empoderamento feminino. Com anos de experiência no esporte, Tamiris dedica-se a criar espaços seguros e acolhedores para mulheres nas trilhas.',
                imagem: '/images/trailgirls/fundadoras/tamiris-monteiro.jpg',
                instagram: 'tamismonteiro',
              },
              {
                nome: 'Ana Pagiossi',
                bio: 'Co-fundadora do Trail Girls, atleta e entusiasta do trail run. Ana acredita no poder transformador do esporte e na importância da comunidade para o desenvolvimento pessoal e coletivo.',
                imagem: '/images/trailgirls/fundadoras/ana-pagiossi.jpg',
                instagram: 'anapagiossi',
              },
            ].map((fundadora, index) => (
              <motion.div
                key={fundadora.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={fundadora.imagem}
                    alt={fundadora.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{fundadora.nome}</h3>
                  <p className="text-gray-700 mb-4">{fundadora.bio}</p>
                  <a
                    href={`https://www.instagram.com/${fundadora.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg"
                    aria-label={`Instagram de ${fundadora.nome}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-medium">@{fundadora.instagram}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">O Movimento</h2>
            <p className="text-gray-700 mb-4">
              O Trail Girls é mais que um grupo de corrida. É um movimento que conecta mulheres
              através do esporte, da natureza e da comunidade. Acreditamos que o trail run
              pode ser uma ferramenta poderosa de empoderamento, bem-estar e transformação.
            </p>
            <p className="text-gray-700 mb-4">
              Nosso trabalho está diretamente ligado à igualdade de gênero no esporte, à
              cidadania e ao bem-estar emocional. Através dos encontros, treinões e da
              pesquisa, buscamos entender e transformar a experiência feminina no trail run.
            </p>
            <p className="text-gray-700">
              Nossa missão é ver mais mulheres no esporte, tornando única a experiência
              feminina nos eventos antes, durante e depois das corridas.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

