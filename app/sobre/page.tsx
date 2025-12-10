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
              },
              {
                nome: 'Ana Pagiossi',
                bio: 'Co-fundadora do Trail Girls, atleta e entusiasta do trail run. Ana acredita no poder transformador do esporte e na importância da comunidade para o desenvolvimento pessoal e coletivo.',
                imagem: '/images/trailgirls/fundadoras/ana-pagiossi.jpg',
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
                <div className="relative h-64 w-full">
                  <Image
                    src={fundadora.imagem}
                    alt={fundadora.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{fundadora.nome}</h3>
                  <p className="text-gray-700">{fundadora.bio}</p>
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

