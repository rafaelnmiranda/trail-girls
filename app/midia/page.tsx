'use client'

import SectionTitle from '@/components/SectionTitle'
import CardMidia from '@/components/CardMidia'
import { midia } from '@/data/media'

export default function Midia() {
  const podcasts = midia.filter((m) => m.tipo === 'podcast')
  const reportagens = midia.filter((m) => m.tipo === 'reportagem')
  const videos = midia.filter((m) => m.tipo === 'video')

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mídia e Clipping"
          subtitle="Onde o Trail Girls aparece"
        />

        {/* Podcasts */}
        {podcasts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Podcasts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcasts.map((item, index) => (
                <CardMidia key={item.id} midia={item} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Reportagens */}
        {reportagens.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Reportagens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportagens.map((item, index) => (
                <CardMidia key={item.id} midia={item} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Vídeos */}
        {videos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Vídeos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item, index) => (
                <CardMidia key={item.id} midia={item} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Todas as mídias */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">Todas as Mídias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {midia.map((item, index) => (
              <CardMidia key={item.id} midia={item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

