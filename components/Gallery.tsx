'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface GalleryProps {
  images: string[]
  alt?: string
}

export default function Gallery({ images, alt = 'Galeria de imagens' }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative h-64 w-full rounded-lg overflow-hidden group cursor-pointer"
        >
          <Image
            src={image}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  )
}

