"use client";

import { useState } from "react";
import Link from "next/link";

export default function CartaoPage() {
  const [activeTab, setActiveTab] = useState<"physical" | "virtual">("physical");
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardLocked, setCardLocked] = useState(false);

  const invoiceItems = [
    { id: 1, title: "Netflix", category: "Streaming", amount: 55.9, date: "03/Out" },
    { id: 2, title: "iFood", category: "Alimentação", amount: 87.4, date: "02/Out" },
    { id: 3, title: "Uber", category: "Transporte", amount: 32.5, date: "01/Out" },
    { id: 4, title: "Amazon", category: "Compras", amount: 299, date: "30/Set" },
    { id: 5, title: "Spotify", category: "Streaming", amount: 21.9, date: "28/Set" },
  ];

  const spendingByCategory = [
    { category: "Alimentação", amount: 456.8, percentage: 35, color: "bg-orange-500" },
    { category: "Transporte", amount: 189.5, percentage: 15, color: "bg-blue-500" },
    { category: "Streaming", amount: 77.8, percentage: 8, color: "bg-purple-500" },
    { category: "Compras", amount: 299, percentage: 25, color: "bg-green-500" },
    { category: "Outros", amount: 169.32, percentage: 17, color: "bg-gray-400" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Cartões</h1>
          <p className="text-gray-500">Gerencie seus cartões e faturas</p>
        </div>
      </div>

      {/* Card Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("physical")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "physical"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Físico
        </button>
        <button
          onClick={() => setActiveTab("virtual")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "virtual"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Virtual
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Card Visual */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 text-white aspect-[1.6/1] relative overflow-hidden">
            {cardLocked && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="font-medium">Cartão bloqueado</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between mb-8">
              <span className="font-[family-name:var(--font-playfair)] text-xl">The Bank</span>
              <div className="w-12 h-12 bg-[#C5A961] rounded-full opacity-80"></div>
            </div>
            
            <p className="text-lg tracking-[0.25em] mb-6">
              {showCardDetails ? "5412 7534 8901 4582" : "•••• •••• •••• 4582"}
            </p>
            
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-1">TITULAR</p>
                <p className="text-sm">RAFAEL MENDES</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">VALIDADE</p>
                <p className="text-sm">{showCardDetails ? "12/28" : "••/••"}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">CVV</p>
                <p className="text-sm">{showCardDetails ? "789" : "•••"}</p>
              </div>
            </div>
          </div>

          {/* Card Actions */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <button
              onClick={() => setShowCardDetails(!showCardDetails)}
              className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              <svg className="w-5 h-5 mx-auto mb-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-xs">{showCardDetails ? "Ocultar" : "Ver dados"}</span>
            </button>
            <button
              onClick={() => setCardLocked(!cardLocked)}
              className={`p-3 border rounded-xl transition-colors text-center ${
                cardLocked
                  ? "bg-red-50 border-red-200 text-red-600"
                  : "bg-white border-gray-200 hover:bg-gray-50 text-gray-600"
              }`}
            >
              <svg className="w-5 h-5 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs">{cardLocked ? "Desbloquear" : "Bloquear"}</span>
            </button>
            <button className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center">
              <svg className="w-5 h-5 mx-auto mb-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs">Ajustes</span>
            </button>
          </div>

          {/* Limit Info */}
          <div className="mt-4 bg-white rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Limite utilizado</span>
              <span className="text-sm font-medium">R$ 892,40 de R$ 5.000,00</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[#C5A961] h-2 rounded-full" style={{ width: "18%" }}></div>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Disponível: <span className="font-semibold text-gray-900">R$ 4.107,60</span>
            </p>
          </div>
        </div>

        {/* Invoice */}
        <div className="lg:col-span-2 space-y-6">
          {/* Invoice Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Fatura atual</p>
                <p className="text-3xl font-semibold">R$ 892,40</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Vencimento</p>
                <p className="font-medium">10 de Novembro</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-[#C5A961] text-black py-3 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all">
                Pagar fatura
              </button>
              <button className="px-4 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Parcelar
              </button>
            </div>
          </div>

          {/* Spending by Category */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold mb-4">Gastos por categoria</h3>
            <div className="space-y-3">
              {spendingByCategory.map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">{item.category}</span>
                    <span className="text-sm font-medium">R$ {item.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice Items */}
          <div className="bg-white rounded-2xl border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold">Lançamentos da fatura</h3>
              <span className="text-sm text-gray-500">{invoiceItems.length} itens</span>
            </div>
            <div className="divide-y divide-gray-50">
              {invoiceItems.map((item) => (
                <div key={item.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <span className="text-lg">💳</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.category} • {item.date}</p>
                    </div>
                    <p className="font-semibold">R$ {item.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
