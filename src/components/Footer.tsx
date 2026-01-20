import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const cities = [
    'Minneapolis', 'St. Paul', 'Bloomington', 'Edina', 'Eden Prairie',
    'Plymouth', 'Maple Grove', 'Brooklyn Park', 'Burnsville', 'Eagan'
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="Hennepin Logic"
                className="h-7 w-7"
              />
              Hennepin Logic
            </h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Automated lead response infrastructure for service businesses. 
              Built for teams that want faster responses and cleaner handoffs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-primary-400 flex-shrink-0" />
                <span>Minneapolis, Minnesota</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-primary-400 flex-shrink-0" />
                <a className="hover:text-primary-300 transition-colors" href="tel:16126951337">
                  (612) 695-1337
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-primary-400 flex-shrink-0" />
                <a className="hover:text-primary-300 transition-colors" href="mailto:sales@hennepinlogic.xyz">
                  sales@hennepinlogic.xyz
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="hover:text-primary-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/hennepinlogic-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Schedule Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h4 className="text-white font-semibold mb-4">Twin Cities Service Area</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
            {cities.map((city, index) => (
              <span key={city}>
                {city}
                {index < cities.length - 1 && <span className="ml-4 text-slate-700">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hennepin Logic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
