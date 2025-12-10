'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  const [logoError, setLogoError] = useState(false)

  if (logoError) {
    return (
      <span className="text-2xl font-bold text-trail-pink-600">
        Trail Girls
      </span>
    )
  }

  return (
    <Image
      src="/images/logo/logo.png"
      alt="Trail Girls"
      width={100}
      height={32}
      className="object-contain"
      onError={() => setLogoError(true)}
    />
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/missao', label: 'Missão' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/provas-parceiras', label: 'Provas Parceiras' },
    { href: '/marcas-parceiras', label: 'Marcas Parceiras' },
    { href: '/pesquisa', label: 'Pesquisa' },
    { href: '/midia', label: 'Mídia' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-24 h-8 flex items-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-trail-pink-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-trail-pink-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-trail-pink-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

