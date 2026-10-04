"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true);

  const quickActions = [
    { icon: "⚡", label: "Pix", href: "/pix", color: "bg-emerald-500" },
    { icon: "↗", label: "Transferir", href: "/transferir", color: "bg-blue-500" },
    { icon: "📄", label: "Pagar", href: "/pagar", color: "bg-purple-500" },
    { icon: "💳", label: "Cartão", href: "/cartao", color: "bg-orange-500" },
  ];

  const transactions = [
    { id: 1, type: "income", title: "Salário recebido", subtitle: "Hu. Co", amount: 3500, date: "Hoje, 09:15" },
    { id: 2, type: "expense", title: "Café & Cia", subtitle: "Débito no cartão", amount: -28.5, date: "Ontem, 14:32" },
    { id: 3, type: "expense", title: "Transferência enviada", subtitle: "Para João Pedro", amount: -150, date: "Ontem, 10:00" },
    { id: 4, type: "expense", title: "Netflix", subtitle: "Débito automático", amount: -55.9, date: "02 Out, 08:00" },
    { id: 5, type: "income", title: "Pix recebido", subtitle: "De Maria Silva", amount: 75, date: "01 Out, 19:45" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
            Olá, Rafael
          </h1>
          <p className="text-gray-500 mt-1">
            Bem-vindo ao seu banco
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Última atualização: agora
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-black text-white rounded-2xl p-6 lg:p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-gray-400 text-sm">Saldo disponível</p>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {showBalance ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-4xl lg:text-5xl font-semibold">
              {showBalance ? "R$ 3.340,60" : "R$ ••••••"}
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="w-14 h-14 bg-[#C5A961] rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sub balances */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
          <div>
            <p className="text-gray-400 text-sm mb-1">Investimentos</p>
            <p className="text-xl font-semibold text-[#C5A961]">
              {showBalance ? "R$ 2.500,00" : "R$ ••••••"}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Fatura atual</p>
            <p className="text-xl font-semibold">
              {showBalance ? "R$ 892,40" : "R$ ••••••"}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3 lg:gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all border border-gray-100 group"
          >
            <div className={`w-12 h-12 lg:w-14 lg:h-14 ${action.color} rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <p className="font-medium text-gray-900 text-sm lg:text-base">{action.label}</p>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-lg">Últimas transações</h2>
            <Link href="/extrato" className="text-[#C5A961] text-sm font-medium hover:text-[#A68B4B]">
              Ver extrato
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
                    tx.type === "income" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                  }`}>
                    {tx.type === "income" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{tx.title}</p>
                    <p className="text-sm text-gray-500 truncate">{tx.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${tx.type === "income" ? "text-green-600" : "text-gray-900"}`}>
                      {tx.amount > 0 ? "+" : ""} R$ {Math.abs(tx.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          {/* Card Preview */}
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-8">
              <span className="font-[family-name:var(--font-playfair)] text-lg">The Bank</span>
              <div className="w-10 h-10 bg-[#C5A961] rounded-full opacity-80"></div>
            </div>
            <p className="text-lg tracking-widest mb-4">•••• •••• •••• 4582</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">RAFAEL MENDES</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Validade</p>
                <p className="text-sm">12/28</p>
              </div>
            </div>
          </div>

          {/* Invoice Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Fatura atual</h3>
              <span className="text-xs text-gray-500">Vence em 10/Nov</span>
            </div>
            <p className="text-3xl font-semibold mb-4">R$ 892,40</p>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
              <div className="bg-[#C5A961] h-2 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Limite disponível</span>
              <span className="font-medium">R$ 4.107,60</span>
            </div>
            <Link
              href="/cartao"
              className="mt-4 block w-full text-center py-3 bg-gray-100 rounded-xl font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Ver fatura completa
            </Link>
          </div>

          {/* Investments Preview */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Investimentos</h3>
              <span className="text-xs text-green-600 font-medium">+2,4% este mês</span>
            </div>
            <p className="text-3xl font-semibold mb-4">R$ 2.500,00</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">CDB Liquidez Diária</span>
                <span className="font-medium">R$ 1.500,00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Tesouro Selic</span>
                <span className="font-medium">R$ 1.000,00</span>
              </div>
            </div>
            <Link
              href="/investimentos"
              className="mt-4 block w-full text-center py-3 bg-gray-100 rounded-xl font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Ver investimentos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
