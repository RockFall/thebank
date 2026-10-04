"use client";

import { useState } from "react";
import Link from "next/link";

export default function InvestimentosPage() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "explore">("portfolio");

  const portfolio = [
    { id: 1, name: "CDB Liquidez Diária", type: "Renda Fixa", invested: 1500, current: 1523.45, yield: 1.56, risk: "Baixo" },
    { id: 2, name: "Tesouro Selic 2029", type: "Tesouro Direto", invested: 1000, current: 1018.32, yield: 1.83, risk: "Baixo" },
  ];

  const availableInvestments = [
    { id: 1, name: "CDB 120% CDI", type: "Renda Fixa", minValue: 100, yield: "120% CDI", term: "2 anos", risk: "Baixo" },
    { id: 2, name: "LCI 95% CDI", type: "Renda Fixa", minValue: 500, yield: "95% CDI", term: "1 ano", risk: "Baixo" },
    { id: 3, name: "Tesouro IPCA+ 2035", type: "Tesouro Direto", minValue: 30, yield: "IPCA + 6,2%", term: "2035", risk: "Baixo" },
    { id: 4, name: "Fundo Multimercado", type: "Fundos", minValue: 1000, yield: "CDI + 2%", term: "Resgate em D+30", risk: "Médio" },
  ];

  const totalInvested = portfolio.reduce((sum, inv) => sum + inv.invested, 0);
  const totalCurrent = portfolio.reduce((sum, inv) => sum + inv.current, 0);
  const totalYield = ((totalCurrent - totalInvested) / totalInvested * 100);

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
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Investimentos</h1>
          <p className="text-gray-500">Acompanhe e invista seu dinheiro</p>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 lg:p-8 text-white">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Patrimônio total</p>
            <p className="text-3xl lg:text-4xl font-semibold">
              R$ {totalCurrent.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Total investido</p>
            <p className="text-xl font-semibold">
              R$ {totalInvested.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Rentabilidade total</p>
            <p className="text-xl font-semibold text-green-400">
              +{totalYield.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("portfolio")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "portfolio"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Minha carteira
        </button>
        <button
          onClick={() => setActiveTab("explore")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "explore"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Explorar
        </button>
      </div>

      {/* Portfolio Tab */}
      {activeTab === "portfolio" && (
        <div className="space-y-4">
          {portfolio.map((investment) => (
            <div key={investment.id} className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{investment.name}</h3>
                  <p className="text-sm text-gray-500">{investment.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  investment.risk === "Baixo" ? "bg-green-100 text-green-700" :
                  investment.risk === "Médio" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  Risco {investment.risk}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Valor investido</p>
                  <p className="font-semibold">R$ {investment.invested.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Valor atual</p>
                  <p className="font-semibold">R$ {investment.current.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Rentabilidade</p>
                  <p className="font-semibold text-green-600">+{investment.yield}%</p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-[#C5A961] text-black py-3 rounded-xl font-medium hover:bg-[#D4BC7D] transition-colors">
                  Investir mais
                </button>
                <button className="flex-1 border border-gray-200 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Resgatar
                </button>
              </div>
            </div>
          ))}

          {/* Empty state hint */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex gap-3">
              <span className="text-xl">💡</span>
              <div>
                <p className="font-medium text-amber-800">Diversifique sua carteira</p>
                <p className="text-sm text-amber-700 mt-1">
                  Você tem R$ 3.340,60 disponíveis na conta. Que tal investir uma parte?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explore Tab */}
      {activeTab === "explore" && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Todos", "Renda Fixa", "Tesouro Direto", "Fundos", "Ações"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-300 whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Available Investments */}
          <div className="grid md:grid-cols-2 gap-4">
            {availableInvestments.map((investment) => (
              <div key={investment.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{investment.name}</h3>
                    <p className="text-sm text-gray-500">{investment.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    investment.risk === "Baixo" ? "bg-green-100 text-green-700" :
                    investment.risk === "Médio" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {investment.risk}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Rentabilidade</span>
                    <span className="font-medium text-green-600">{investment.yield}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Prazo</span>
                    <span>{investment.term}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mínimo</span>
                    <span>R$ {investment.minValue}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  Investir
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
