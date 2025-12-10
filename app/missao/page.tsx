'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'

export default function Missao() {
  return (
    <>
      <Hero
        image="/images/trailgirls/hero/hero-missao.jpg"
        title="Missão, Visão e Valores"
        subtitle="O que nos move e nos guia"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-trail-pink-50 rounded-lg p-8 border-l-4 border-trail-pink-600"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-black mb-4">Missão</h2>
              <p className="text-gray-700">
                Ver mais mulheres no esporte, tornando única a experiência feminina nos eventos
                antes, durante e depois. Criar um espaço seguro e acolhedor onde mulheres possam
                se conectar com a natureza através do trail run.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-8 border-l-4 border-gray-400"
            >
              <div className="text-4xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold text-black mb-4">Visão</h2>
              <p className="text-gray-700">
                Ser a principal referência em empoderamento feminino no trail run, criando uma
                comunidade forte e unida que transforma o cenário esportivo e inspira mulheres
                a descobrirem seu potencial nas trilhas.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-trail-pink-50 rounded-lg p-8 border-l-4 border-trail-pink-600"
            >
              <div className="text-4xl mb-4">💎</div>
              <h2 className="text-2xl font-bold text-black mb-4">Valores</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Empoderamento feminino</li>
                <li>• Comunidade e acolhimento</li>
                <li>• Segurança nas trilhas</li>
                <li>• Conexão com a natureza</li>
                <li>• Igualdade de gênero</li>
                <li>• Participação feminina no esporte</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa Voz"
            subtitle="Ser a voz feminina nos eventos"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 mb-4">
              O Trail Girls acredita que a experiência das mulheres no esporte deve ser única
              e especial. Trabalhamos para garantir que os eventos de trail run sejam espaços
              onde as mulheres se sintam acolhidas, seguras e empoderadas.
            </p>
            <p className="text-gray-700 mb-4">
              Antes dos eventos, oferecemos treinões e encontros que preparam as mulheres
              física e emocionalmente. Durante os eventos, criamos pontos de encontro e
              suporte. Depois, celebramos as conquistas e fortalecemos a comunidade.
            </p>
            <p className="text-gray-700">
              Nossa voz é importante. Através da pesquisa, dos encontros e da comunidade,
              estamos transformando o cenário do trail run para que seja cada vez mais
              inclusivo e acolhedor para as mulheres.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

