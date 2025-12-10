'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import Link from 'next/link'

export default function Contato() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Estamos aqui para você"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-gray-700 mb-6">
            Quer participar dos encontros? Tem alguma dúvida? É organizador de prova ou marca
            interessada em parceria? Ou simplesmente quer conhecer melhor o movimento?
          </p>
          <p className="text-gray-700 mb-8">
            Entre em contato conosco! Estamos sempre abertos a conversar com mulheres que
            querem fazer parte da comunidade, organizadores que querem tornar seus eventos
            mais inclusivos, e marcas que compartilham nossos valores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-lg p-8 border-2 border-green-200 text-center"
          >
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-black mb-4">WhatsApp</h3>
            <p className="text-gray-700 mb-6">
              Fale conosco diretamente pelo WhatsApp. Respondemos o mais rápido possível!
            </p>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Abrir WhatsApp
            </Link>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-pink-50 rounded-lg p-8 border-2 border-pink-200 text-center"
          >
            <div className="text-5xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-black mb-4">Instagram</h3>
            <p className="text-gray-700 mb-6">
              Siga-nos no Instagram para ficar por dentro de todos os encontros e novidades!
            </p>
            <Link
              href="https://www.instagram.com/trailgirlsoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              @trailgirlsoficial
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Estamos ansiosos para conhecer você e fazer parte da sua jornada no trail run! 🏃‍♀️
          </p>
        </motion.div>
      </div>
    </div>
  )
}

