"use client";

import { useState } from "react";
import Link from "next/link";

export default function PagarPage() {
  const [paymentType, setPaymentType] = useState<"barcode" | "qrcode" | "scheduled">("barcode");
  const [barcode, setBarcode] = useState("");

  const scheduledPayments = [
    { id: 1, title: "Netflix", amount: 55.9, dueDate: "10/Nov", status: "pending" },
    { id: 2, title: "Spotify", amount: 21.9, dueDate: "15/Nov", status: "pending" },
    { id: 3, title: "Conta de Luz", amount: 187.45, dueDate: "20/Nov", status: "pending" },
  ];

  const recentPayments = [
    { id: 1, title: "Conta de Água", amount: 95.3, date: "02/Out", status: "paid" },
    { id: 2, title: "Internet", amount: 119.9, date: "01/Out", status: "paid" },
    { id: 3, title: "IPTU - Parcela 9/10", amount: 245, date: "28/Set", status: "paid" },
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
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Pagar</h1>
          <p className="text-gray-500">Boletos, contas e QR Codes</p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { id: "barcode", icon: "📋", label: "Código de barras" },
          { id: "qrcode", icon: "📱", label: "QR Code" },
          { id: "scheduled", icon: "📅", label: "Agendados" },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => setPaymentType(option.id as typeof paymentType)}
            className={`p-4 lg:p-6 rounded-2xl border-2 transition-all text-center ${
              paymentType === option.id
                ? "border-[#C5A961] bg-amber-50"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <span className="text-2xl lg:text-3xl block mb-2">{option.icon}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        {/* Barcode Input */}
        {paymentType === "barcode" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Digite ou cole o código de barras
              </label>
              <input
                type="text"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="00000.00000 00000.000000 00000.000000 0 00000000000000"
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C5A961] focus:border-transparent outline-none transition-all font-mono text-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-gray-400 text-sm">ou</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Escanear código de barras</span>
            </button>

            <button
              disabled={!barcode}
              className="w-full bg-[#C5A961] text-black py-4 rounded-xl font-semibold hover:bg-[#D4BC7D] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </div>
        )}

        {/* QR Code Scanner */}
        {paymentType === "qrcode" && (
          <div className="text-center py-8">
            <div className="w-64 h-64 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border-2 border-white/50 rounded-lg" />
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#C5A961]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#C5A961]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#C5A961]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#C5A961]" />
              <div className="text-white/50 text-sm">Câmera</div>
            </div>
            <p className="text-gray-500 mb-4">
              Posicione o QR Code dentro do quadrado
            </p>
            <button className="text-[#C5A961] font-medium">
              Escolher imagem da galeria
            </button>
          </div>
        )}

        {/* Scheduled Payments */}
        {paymentType === "scheduled" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Próximos pagamentos</h3>
              <div className="space-y-3">
                {scheduledPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{payment.title}</p>
                        <p className="text-sm text-gray-500">Vence em {payment.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">R$ {payment.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                      <button className="text-sm text-[#C5A961] font-medium">Pagar agora</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Agendar novo pagamento
            </button>
          </div>
        )}
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-lg">Pagamentos recentes</h2>
          <Link href="/extrato" className="text-[#C5A961] text-sm font-medium hover:text-[#A68B4B]">
            Ver todos
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{payment.title}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ {payment.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                  <span className="text-xs text-green-600 font-medium">Pago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
