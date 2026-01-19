'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary-600">
              Hennepin Logic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://calendly.com/hennepinlogic-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-slate-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-slate-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://calendly.com/hennepinlogic-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
