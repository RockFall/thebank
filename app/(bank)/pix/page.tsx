"use client";

import { useState } from "react";
import Link from "next/link";

export default function PixPage() {
  const [activeTab, setActiveTab] = useState<"transfer" | "receive" | "keys">("transfer");
  const [keyType, setKeyType] = useState<"cpf" | "email" | "phone" | "random">("cpf");
  const [amount, setAmount] = useState("");
  const [pixKey, setPixKey] = useState("");

  const recentContacts = [
    { id: 1, name: "João Pedro", initials: "JP", key: "joao@email.com" },
    { id: 2, name: "Maria Silva", initials: "MS", key: "***.***.789-00" },
    { id: 3, name: "Carlos Oliveira", initials: "CO", key: "(11) *****-4567" },
    { id: 4, name: "Ana Costa", initials: "AC", key: "ana.costa@email.com" },
  ];

  const myKeys = [
    { type: "CPF", value: "***.***.456-78", icon: "📋" },
    { type: "E-mail", value: "rafael.mendes@email.com", icon: "✉️" },
    { type: "Celular", value: "(11) 99999-8888", icon: "📱" },
  ];

  const recentTransactions = [
    { id: 1, type: "sent", name: "João Pedro", amount: 150, date: "Hoje, 14:30" },
    { id: 2, type: "received", name: "Maria Silva", amount: 75, date: "Ontem, 19:45" },
    { id: 3, type: "sent", name: "Café Central", amount: 28.5, date: "Ontem, 10:15" },
  ];

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
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Pix</h1>
          <p className="text-gray-500">Transferências instantâneas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100">
          {[
            { id: "transfer", label: "Transferir" },
            { id: "receive", label: "Receber" },
            { id: "keys", label: "Minhas chaves" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-[#C5A961]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A961]" />
              )}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Transfer Tab */}
          {activeTab === "transfer" && (
            <div className="space-y-6">
              {/* Key Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chave Pix
                </label>
                <div className="flex gap-2 mb-3">
                  {[
                    { id: "cpf", label: "CPF/CNPJ" },
                    { id: "email", label: "E-mail" },
                    { id: "phone", label: "Celular" },
                    { id: "random", label: "Aleatória" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setKeyType(type.id as typeof keyType)}
                      className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                        keyType === type.id
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={pixKey}
                  onChange={(e) => setPixKey(e.target.value)}
                  placeholder={
                    keyType === "cpf" ? "000.000.000-00" :
                    keyType === "email" ? "email@exemplo.com" :
                    keyType === "phone" ? "(00) 00000-0000" :
                    "Cole a chave aleatória"
                  }
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    R$
                  </span>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0,00"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none transition-all text-xl font-semibold"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Saldo disponível: <span className="font-medium text-gray-900">R$ 3.340,60</span>
                </p>
              </div>

              {/* Quick Amounts */}
              <div className="flex gap-2 flex-wrap">
                {[10, 20, 50, 100, 200].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value.toString())}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    R$ {value}
                  </button>
                ))}
              </div>

              <button className="w-full bg-[#C5A961] text-black py-4 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all">
                Continuar
              </button>

              {/* Recent Contacts */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Contatos recentes</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {recentContacts.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setPixKey(contact.key)}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 font-medium">
                        {contact.initials}
                      </div>
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Receive Tab */}
          {activeTab === "receive" && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="w-48 h-48 bg-gray-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">
                  Escaneie o QR Code para receber um Pix
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-xl font-medium">
                  Gerar novo QR Code
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Ou compartilhe uma chave</h3>
                <div className="space-y-2">
                  {myKeys.map((key, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{key.icon}</span>
                        <div>
                          <p className="text-sm text-gray-500">{key.type}</p>
                          <p className="font-medium">{key.value}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Keys Tab */}
          {activeTab === "keys" && (
            <div className="space-y-6">
              <div className="space-y-3">
                {myKeys.map((key, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C5A961] rounded-xl flex items-center justify-center text-lg">
                        {key.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{key.type}</p>
                        <p className="font-medium">{key.value}</p>
                      </div>
                    </div>
                    <button className="text-sm text-red-500 font-medium hover:text-red-600">
                      Excluir
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Cadastrar nova chave
              </button>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="font-medium text-amber-800">Dica</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Você pode ter até 5 chaves Pix cadastradas na sua conta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Pix Transactions */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-semibold text-lg">Pix recentes</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === "received" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                }`}>
                  {tx.type === "received" ? "↓" : "↑"}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{tx.name}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <p className={`font-semibold ${tx.type === "received" ? "text-green-600" : "text-gray-900"}`}>
                  {tx.type === "received" ? "+" : "-"} R$ {tx.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
