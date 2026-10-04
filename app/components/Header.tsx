"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <span className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-semibold tracking-tight text-black">
              The Bank
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="#conta" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Sua conta
            </Link>
            <Link href="#cartao" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Seu cartão
            </Link>
            <Link href="#dinheiro" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Seu dinheiro
            </Link>
            <Link href="#ajuda" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Ajuda
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="#abrir"
              className="bg-[#C5A961] text-black px-6 py-2.5 text-sm font-semibold hover:bg-[#D4BC7D] transition-colors"
            >
              Abrir conta
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <Link href="#conta" className="block text-base font-medium text-gray-700">
              Sua conta
            </Link>
            <Link href="#cartao" className="block text-base font-medium text-gray-700">
              Seu cartão
            </Link>
            <Link href="#dinheiro" className="block text-base font-medium text-gray-700">
              Seu dinheiro
            </Link>
            <Link href="#ajuda" className="block text-base font-medium text-gray-700">
              Ajuda
            </Link>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link href="#" className="block text-base font-medium text-gray-700">
                Entrar
              </Link>
              <Link
                href="#abrir"
                className="block bg-[#C5A961] text-black text-center px-6 py-3 text-base font-semibold"
              >
                Abrir conta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
