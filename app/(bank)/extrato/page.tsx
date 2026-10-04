"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExtratoPage() {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [period, setPeriod] = useState("current");

  const transactions = [
    { id: 1, type: "income", title: "Salário recebido", subtitle: "Hu. Co", amount: 3500, date: "04 Out", time: "09:15", balance: 3340.6 },
    { id: 2, type: "expense", title: "Café & Cia", subtitle: "Débito no cartão", amount: -28.5, date: "03 Out", time: "14:32", balance: 3312.1 },
    { id: 3, type: "expense", title: "Transferência enviada", subtitle: "Para João Pedro", amount: -150, date: "03 Out", time: "10:00", balance: 3340.6 },
    { id: 4, type: "expense", title: "Netflix", subtitle: "Débito automático", amount: -55.9, date: "02 Out", time: "08:00", balance: 3490.6 },
    { id: 5, type: "income", title: "Pix recebido", subtitle: "De Maria Silva", amount: 75, date: "01 Out", time: "19:45", balance: 3546.5 },
    { id: 6, type: "expense", title: "Supermercado Extra", subtitle: "Débito no cartão", amount: -234.8, date: "01 Out", time: "11:20", balance: 3471.5 },
    { id: 7, type: "expense", title: "Uber", subtitle: "Débito no cartão", amount: -32.5, date: "30 Set", time: "22:15", balance: 3706.3 },
    { id: 8, type: "expense", title: "iFood", subtitle: "Débito no cartão", amount: -67.9, date: "30 Set", time: "20:30", balance: 3738.8 },
    { id: 9, type: "income", title: "Cashback recebido", subtitle: "Programa de pontos", amount: 12.5, date: "29 Set", time: "10:00", balance: 3806.7 },
    { id: 10, type: "expense", title: "Conta de luz", subtitle: "Pagamento de boleto", amount: -187.45, date: "28 Set", time: "09:30", balance: 3794.2 },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "all") return true;
    if (filter === "income") return tx.type === "income";
    return tx.type === "expense";
  });

  const income = transactions.filter(tx => tx.type === "income").reduce((sum, tx) => sum + tx.amount, 0);
  const expenses = transactions.filter(tx => tx.type === "expense").reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Extrato</h1>
          <p className="text-gray-500">Todas as suas movimentações</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 lg:p-6">
          <p className="text-sm text-gray-500 mb-1">Saldo atual</p>
          <p className="text-2xl font-semibold">R$ 3.340,60</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 lg:p-6">
          <p className="text-sm text-gray-500 mb-1">Entradas</p>
          <p className="text-2xl font-semibold text-green-600">+ R$ {income.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="col-span-2 lg:col-span-1 bg-white rounded-2xl border border-gray-100 p-4 lg:p-6">
          <p className="text-sm text-gray-500 mb-1">Saídas</p>
          <p className="text-2xl font-semibold text-red-500">- R$ {expenses.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {[
              { id: "all", label: "Todas" },
              { id: "income", label: "Entradas" },
              { id: "expense", label: "Saídas" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as typeof filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none"
            >
              <option value="current">Outubro 2024</option>
              <option value="september">Setembro 2024</option>
              <option value="august">Agosto 2024</option>
            </select>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nome, valor ou data..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {filteredTransactions.map((tx, index) => {
            const showDate = index === 0 || filteredTransactions[index - 1]?.date !== tx.date;
            
            return (
              <div key={tx.id}>
                {showDate && (
                  <div className="px-4 lg:px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">
                    {tx.date}
                  </div>
                )}
                <div className="p-4 lg:p-6 hover:bg-gray-50 transition-colors cursor-pointer">
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
                      <p className="text-sm text-gray-500 truncate">{tx.subtitle} • {tx.time}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${tx.type === "income" ? "text-green-600" : "text-gray-900"}`}>
                        {tx.amount > 0 ? "+" : ""} R$ {Math.abs(tx.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-gray-400">
                        Saldo: R$ {tx.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full py-3 text-center text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Carregar mais transações
          </button>
        </div>
      </div>
    </div>
  );
}
