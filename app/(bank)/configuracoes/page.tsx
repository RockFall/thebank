"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConfiguracoesPage() {
  const [notifications, setNotifications] = useState({
    transactions: true,
    promotions: false,
    security: true,
  });

  const menuItems = [
    {
      title: "Perfil",
      items: [
        { icon: "👤", label: "Dados pessoais", description: "Nome, CPF, data de nascimento" },
        { icon: "📍", label: "Endereço", description: "Atualizar endereço cadastrado" },
        { icon: "📞", label: "Contatos", description: "Telefone e e-mail" },
      ],
    },
    {
      title: "Conta",
      items: [
        { icon: "🏦", label: "Dados bancários", description: "Agência e conta" },
        { icon: "🔐", label: "Segurança", description: "Senha, biometria, dispositivos" },
        { icon: "📱", label: "Chaves Pix", description: "Gerenciar suas chaves" },
      ],
    },
    {
      title: "Preferências",
      items: [
        { icon: "🔔", label: "Notificações", description: "Push, e-mail e SMS" },
        { icon: "🌙", label: "Aparência", description: "Tema claro ou escuro" },
        { icon: "🌐", label: "Idioma", description: "Português (Brasil)" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Configurações</h1>
          <p className="text-gray-500">Gerencie sua conta e preferências</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#C5A961] rounded-full flex items-center justify-center text-black font-semibold text-xl">
            RM
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">Rafael Mendes</h2>
            <p className="text-gray-500">rafael.mendes@email.com</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Sections */}
      {menuItems.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-medium text-gray-500 mb-3 px-1">{section.title}</h3>
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
            {section.items.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Quick Toggles */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3 px-1">Notificações rápidas</h3>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Transações</p>
              <p className="text-sm text-gray-500">Receber alertas de movimentações</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, transactions: !notifications.transactions })}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.transactions ? "bg-[#C5A961]" : "bg-gray-200"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                notifications.transactions ? "translate-x-6" : "translate-x-0.5"
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Promoções</p>
              <p className="text-sm text-gray-500">Ofertas e novidades do banco</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, promotions: !notifications.promotions })}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.promotions ? "bg-[#C5A961]" : "bg-gray-200"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                notifications.promotions ? "translate-x-6" : "translate-x-0.5"
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">Segurança</p>
              <p className="text-sm text-gray-500">Alertas de acesso e segurança</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, security: !notifications.security })}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications.security ? "bg-[#C5A961]" : "bg-gray-200"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                notifications.security ? "translate-x-6" : "translate-x-0.5"
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3 px-1">Outras ações</h3>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left">
            <span className="text-2xl">📄</span>
            <div className="flex-1">
              <p className="font-medium">Termos e políticas</p>
              <p className="text-sm text-gray-500">Leia nossos termos de uso</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
          <Link
            href="/"
            className="w-full flex items-center gap-4 p-4 hover:bg-red-50 transition-colors text-left text-red-600"
          >
            <span className="text-2xl">🚪</span>
            <div className="flex-1">
              <p className="font-medium">Sair da conta</p>
              <p className="text-sm text-red-400">Encerrar sessão atual</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Version */}
      <p className="text-center text-sm text-gray-400 pb-8">
        The Bank App • Versão 1.0.0<br />
        Ambiente simulado
      </p>
    </div>
  );
}
