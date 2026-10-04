"use client";

import { useState } from "react";
import Link from "next/link";

export default function TransferirPage() {
  const [step, setStep] = useState(1);
  const [transferType, setTransferType] = useState<"ted" | "same">("ted");
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [amount, setAmount] = useState("");

  const contacts = [
    { id: 1, name: "João Pedro", bank: "Banco XYZ", agency: "0001", account: "12345-6", initials: "JP" },
    { id: 2, name: "Maria Silva", bank: "Nubank", agency: "0001", account: "98765-4", initials: "MS" },
    { id: 3, name: "Carlos Oliveira", bank: "Itaú", agency: "1234", account: "45678-9", initials: "CO" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Transferir</h1>
          <p className="text-gray-500">TED ou transferência entre contas</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              s <= step ? "bg-[#C5A961] text-black" : "bg-gray-100 text-gray-400"
            }`}>
              {s < step ? "✓" : s}
            </div>
            {s < 3 && (
              <div className={`flex-1 h-0.5 ${s < step ? "bg-[#C5A961]" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        {/* Step 1: Select Type & Contact */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg mb-4">Tipo de transferência</h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTransferType("ted")}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    transferType === "ted"
                      ? "border-[#C5A961] bg-amber-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="font-semibold mb-1">TED</p>
                  <p className="text-sm text-gray-500">Para outros bancos</p>
                </button>
                <button
                  onClick={() => setTransferType("same")}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    transferType === "same"
                      ? "border-[#C5A961] bg-amber-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="font-semibold mb-1">Mesma titularidade</p>
                  <p className="text-sm text-gray-500">Para suas contas</p>
                </button>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-4">Para quem?</h2>
              
              {/* Search */}
              <div className="relative mb-4">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar contato ou digitar dados"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Contacts */}
              <div className="space-y-2">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => setSelectedContact(contact.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                      selectedContact === contact.id
                        ? "bg-amber-50 border-2 border-[#C5A961]"
                        : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600">
                      {contact.initials}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.bank} • Ag. {contact.agency} • Cc. {contact.account}</p>
                    </div>
                    {selectedContact === contact.id && (
                      <div className="w-6 h-6 bg-[#C5A961] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* New Contact */}
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Novo destinatário
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!selectedContact}
              className="w-full bg-[#C5A961] text-black py-4 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </div>
        )}

        {/* Step 2: Amount */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg mb-2">Qual o valor?</h2>
              <p className="text-gray-500 text-sm mb-6">
                Para {contacts.find(c => c.id === selectedContact)?.name}
              </p>

              <div className="text-center py-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-2xl text-gray-400">R$</span>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0,00"
                    className="text-5xl font-semibold bg-transparent outline-none text-center w-48"
                  />
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                Saldo disponível: <span className="font-medium text-gray-900">R$ 3.340,60</span>
              </p>

              {/* Quick Amounts */}
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {[50, 100, 200, 500].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value.toString())}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    R$ {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Voltar
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!amount}
                className="flex-1 bg-[#C5A961] text-black py-4 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center py-4">
              <h2 className="font-semibold text-lg mb-2">Confirmar transferência</h2>
              <p className="text-gray-500 text-sm">Revise os dados antes de confirmar</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Valor</span>
                <span className="font-semibold text-xl">R$ {parseFloat(amount || "0").toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Para</span>
                  <span className="font-medium">{contacts.find(c => c.id === selectedContact)?.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Banco</span>
                  <span>{contacts.find(c => c.id === selectedContact)?.bank}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Agência</span>
                  <span>{contacts.find(c => c.id === selectedContact)?.agency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Conta</span>
                  <span>{contacts.find(c => c.id === selectedContact)?.account}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tipo</span>
                  <span>{transferType === "ted" ? "TED" : "Mesma titularidade"}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Voltar
              </button>
              <button
                onClick={() => alert("Transferência realizada com sucesso!")}
                className="flex-1 bg-[#C5A961] text-black py-4 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
