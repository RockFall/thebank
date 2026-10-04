"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

type AccountTab = "receber" | "guardar" | "transferir" | "pagar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<AccountTab>("receber");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accountTabs: Record<AccountTab, { title: string; description: string }> = {
    receber: {
      title: "Receber",
      description: "Alguém envia dinheiro. Você recebe.",
    },
    guardar: {
      title: "Guardar",
      description: "O dinheiro continua na conta enquanto você não o usa.",
    },
    transferir: {
      title: "Transferir",
      description: "Escolha quanto e para quem.",
    },
    pagar: {
      title: "Pagar",
      description: "Uma coisa custa dinheiro. Você paga por ela.",
    },
  };

  const faqs = [
    {
      question: "Como recebo meu pagamento da Hu. Co?",
      answer: "Vincule sua conta. Os pagamentos gerados pelo seu trabalho na Hu. Co aparecerão no The Bank.",
    },
    {
      question: "Posso abrir o aplicativo só para olhar o saldo?",
      answer: "Pode. Você não precisa movimentar o dinheiro toda vez que entrar.",
    },
    {
      question: "Onde vejo o que paguei?",
      answer: "No extrato. É uma das coisas para as quais ele serve.",
    },
    {
      question: "Posso bloquear meu cartão?",
      answer: "Sim. Depois de bloqueado, ele deixa de autorizar novas compras.",
    },
    {
      question: "O dinheiro é real?",
      answer: "Não. O The Bank faz parte de uma experiência simulada integrada à Hu. Co. Saldos, pagamentos e investimentos existem dentro desse ambiente.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
                O seu dinheiro<br />
                <span className="text-[#C5A961]">fica aqui.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Uma conta para receber, guardar e usar o dinheiro que você ganhou.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#abrir"
                  className="bg-[#C5A961] text-black px-8 py-4 text-base font-semibold hover:bg-[#D4BC7D] transition-colors text-center"
                >
                  Abrir minha conta
                </Link>
                <Link
                  href="#conta"
                  className="border border-black text-black px-8 py-4 text-base font-semibold hover:bg-black hover:text-white transition-colors text-center"
                >
                  Conhecer o banco
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-72 lg:w-80">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-white px-6 py-8">
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold">The Bank</span>
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-1">Saldo disponível</p>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-3xl font-semibold">R$ 3.500,00</span>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                          { icon: "→", label: "Transferir" },
                          { icon: "⊞", label: "Pagar" },
                          { icon: "☰", label: "Extrato" },
                        ].map((action) => (
                          <div key={action.label} className="text-center">
                            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-lg mb-2 border border-gray-100">
                              {action.icon}
                            </div>
                            <span className="text-xs text-gray-600">{action.label}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-gray-500 mb-3">Transações recentes</p>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-green-800">Salário recebido – Hu. Co</p>
                            <p className="text-xs text-green-600">Há um dia</p>
                          </div>
                          <span className="text-green-700 font-semibold">R$ 3.500,00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card floating */}
                <div className="absolute -right-8 lg:-right-16 top-1/2 transform -translate-y-1/2 rotate-12">
                  <div className="w-48 lg:w-56 h-28 lg:h-36 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl shadow-2xl p-4 lg:p-5">
                    <div className="flex justify-between items-start">
                      <span className="font-[family-name:var(--font-playfair)] text-white text-sm lg:text-base font-medium">The Bank</span>
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#C5A961] rounded-full opacity-80"></div>
                    </div>
                    <div className="mt-auto absolute bottom-4 lg:bottom-5 left-4 lg:left-5">
                      <p className="text-white/60 text-xs">RAFAEL MENDES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-20 text-sm">
            The Bank. Um banco para o seu dinheiro.
          </p>
        </div>
      </section>

      {/* Account Section */}
      <section id="conta" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
              Uma conta.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Algumas coisas que você pode fazer com ela.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-0">
              {(Object.keys(accountTabs) as AccountTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left p-6 border-l-4 transition-all ${
                    activeTab === tab
                      ? "border-[#C5A961] bg-white"
                      : "border-transparent hover:border-gray-200 hover:bg-white/50"
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${activeTab === tab ? "text-black" : "text-gray-400"}`}>
                    {accountTabs[tab].title}
                  </h3>
                  <p className={`${activeTab === tab ? "text-gray-600" : "text-gray-400"}`}>
                    {accountTabs[tab].description}
                  </p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:sticky lg:top-32">
              <div className="bg-gray-50 rounded-xl p-6">
                {activeTab === "receber" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-sm text-gray-500">Pagamento recebido</span>
                      <span className="text-sm text-green-600">Concluído</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Transferência recebida</p>
                        <p className="text-sm text-gray-500">De: Maria Silva</p>
                      </div>
                      <span className="text-green-600 font-semibold">+ R$ 150,00</span>
                    </div>
                  </div>
                )}

                {activeTab === "guardar" && (
                  <div className="space-y-4">
                    <div className="text-center py-6">
                      <p className="text-sm text-gray-500 mb-2">Saldo total</p>
                      <p className="text-3xl font-semibold">R$ 3.500,00</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Reserva de emergência</p>
                          <p className="text-sm text-gray-500">Guardado separadamente</p>
                        </div>
                        <span className="font-semibold">R$ 1.200,00</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "transferir" && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <label className="block text-sm text-gray-500">Para quem</label>
                      <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="font-medium">João Pedro</p>
                          <p className="text-sm text-gray-500">Banco XYZ • ****1234</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm text-gray-500">Valor</label>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <span className="text-2xl font-semibold">R$ 250,00</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#C5A961] text-black py-3 font-semibold">
                      Transferir
                    </button>
                  </div>
                )}

                {activeTab === "pagar" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <span className="text-sm text-gray-500">Confirmar pagamento</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Estabelecimento</span>
                        <span className="font-medium">Café Central</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Valor</span>
                        <span className="font-medium">R$ 28,50</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#C5A961] text-black py-3 font-semibold">
                      Confirmar pagamento
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balance Highlight */}
      <section id="dinheiro" className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-8">
            Saiba exatamente quanto<br />
            dinheiro você tem aqui.
          </h2>
          <p className="text-6xl lg:text-8xl font-semibold text-[#C5A961] mb-8">
            R$ 3.500,00
          </p>
          <p className="text-xl text-gray-400 mb-4">
            Neste exemplo, esta quantidade.
          </p>
          <p className="text-gray-500 max-w-md mx-auto">
            O que entra aumenta o saldo. O que sai diminui.
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section id="cartao" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/card-black.jpg"
                  alt="Cartão The Bank, visto de frente"
                  width={600}
                  height={450}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <p className="text-xs text-gray-400 mt-4 text-center">
                  Cartão The Bank, visto de frente.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Um cartão.<br />
                <span className="text-[#C5A961]">Para pagar com cartão.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Use o cartão The Bank nas compras disponíveis dentro da plataforma. O valor aparece no seu histórico depois.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Seu nome", description: "Para identificar de quem é." },
                  { title: "Um número", description: "Para identificar qual cartão é." },
                  { title: "Bloqueio pelo aplicativo", description: "Para quando você não quiser que ele seja usado." },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#C5A961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-block mt-10 border border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Conhecer meu próximo cartão
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Seu dinheiro entrou.<br />
                Seu dinheiro saiu.<br />
                <span className="text-[#C5A961]">Está tudo registrado.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Consulte pagamentos, transferências e recebimentos. Filtre por data, procure uma movimentação e veja os detalhes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-semibold">Extrato</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { description: "Salário recebido · Hu. Co", value: "+ R$ 3.500,00", positive: true },
                  { description: "Compra realizada", value: "− R$ 120,00", positive: false },
                  { description: "Transferência enviada", value: "− R$ 250,00", positive: false },
                ].map((item, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <span className="text-gray-700">{item.description}</span>
                    <span className={item.positive ? "text-green-600 font-semibold" : "text-gray-900 font-semibold"}>
                      {item.value}
                    </span>
                  </div>
                ))}
                <div className="p-6 bg-gray-50 flex items-center justify-between">
                  <span className="font-medium">Saldo após as movimentações</span>
                  <span className="font-semibold text-lg">R$ 3.130,00</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-12">
            Agora você sabe por que o número mudou.
          </p>
        </div>
      </section>

      {/* Reserves & Investments */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
              Dinheiro que você separou<br />
              <span className="text-[#C5A961]">do outro dinheiro.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crie reservas para objetivos diferentes e acompanhe seus investimentos no mesmo lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Para depois", value: "R$ 500,00", color: "bg-blue-50 border-blue-200" },
              { name: "Para uma compra", value: "R$ 1.200,00", color: "bg-green-50 border-green-200" },
              { name: "Ainda não decidi", value: "R$ 800,00", color: "bg-amber-50 border-amber-200" },
            ].map((reserve) => (
              <div key={reserve.name} className={`${reserve.color} border rounded-xl p-6`}>
                <h3 className="font-semibold mb-2">{reserve.name}</h3>
                <p className="text-2xl font-semibold mb-4">{reserve.value}</p>
                <button className="text-sm font-medium text-gray-600 hover:text-black">
                  + Adicionar
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-6">
              Investimentos
            </h3>
            <p className="text-gray-400 mb-8">
              Antes de colocar, veja onde você está colocando.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "CDB Liquidez Diária", rate: "100% CDI", risk: "Baixo", period: "Qualquer momento" },
                { name: "Tesouro Selic", rate: "Selic + 0,02%", risk: "Baixo", period: "Até 2029" },
                { name: "Fundo Multimercado", rate: "CDI + 2%", risk: "Médio", period: "12 meses" },
              ].map((investment) => (
                <div key={investment.name} className="bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold mb-3">{investment.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rendimento</span>
                      <span className="text-[#C5A961]">{investment.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Risco</span>
                      <span>{investment.risk}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prazo</span>
                      <span>{investment.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold text-center mb-4">
            Pessoas que abriram uma conta.
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            E usaram.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Recebi meu salário na sexta. No sábado, ele ainda estava lá.",
                name: "Mariana",
                role: "Trabalha na Hu. Co",
                image: "/images/testimonial-mariana.jpg",
              },
              {
                quote: "Enviei R$ 50. A outra pessoa recebeu R$ 50.",
                name: "Pedro",
                role: "Cliente The Bank",
                image: "/images/testimonial-pedro.jpg",
              },
              {
                quote: "Entrei para consultar meu saldo. Era esse mesmo.",
                name: "Camila",
                role: "Cliente The Bank",
                image: "/images/testimonial-camila.jpg",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <blockquote className="text-xl mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners (Hu.Co) */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-[#C5A961] mb-4 uppercase tracking-wider">Parceiros</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Seu dinheiro também<br />
                pode vir daqui.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Trabalha na Hu. Co? Você pode receber seu salário diretamente no The Bank.
              </p>
              <Link
                href="https://huco.com"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-[#C5A961] transition-colors"
              >
                Entender como receber
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Hu.Co</span>
                  </div>
                  <div>
                    <p className="font-semibold">Pagamento recebido</p>
                    <p className="text-sm text-gray-500">Há 1 dia</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">De:</span>
                    <span className="font-medium">Hu. Co</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Para:</span>
                    <span className="font-medium">Você</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Referente a:</span>
                    <span className="font-medium">Trabalho realizado</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-100">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium text-green-600">Está na sua conta.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="ajuda" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Você pergunta.<br />
                <span className="text-[#C5A961]">Alguém do banco responde.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Encontre ajuda para usar sua conta, entender uma movimentação ou resolver um problema.
              </p>
              <Link
                href="#"
                className="inline-block bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors"
              >
                Preciso falar sobre uma coisa
              </Link>

              <div className="mt-12">
                <Image
                  src="/images/customer-service.jpg"
                  alt="Atendimento The Bank"
                  width={600}
                  height={340}
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Perguntas frequentes</h3>
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="abrir" className="py-24 lg:py-32 bg-[#C5A961]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-semibold mb-6 text-black">
            Tenha uma conta aqui.
          </h2>
          <p className="text-xl text-black/70 mb-10">
            Depois de abrir, você já terá uma conta.
          </p>
          <Link
            href="#"
            className="inline-block bg-black text-white px-10 py-5 text-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Abrir minha conta
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Conta</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="#" className="hover:text-black">Abrir conta</Link></li>
                <li><Link href="#" className="hover:text-black">Como funciona</Link></li>
                <li><Link href="#" className="hover:text-black">Tarifas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Cartão</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="#" className="hover:text-black">Solicitar cartão</Link></li>
                <li><Link href="#" className="hover:text-black">Benefícios</Link></li>
                <li><Link href="#" className="hover:text-black">Segunda via</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ajuda</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="#" className="hover:text-black">Central de ajuda</Link></li>
                <li><Link href="#" className="hover:text-black">Fale conosco</Link></li>
                <li><Link href="#" className="hover:text-black">Segurança</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="#" className="hover:text-black">O banco</Link></li>
                <li><Link href="#" className="hover:text-black">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-black">Imprensa</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">The Bank</span>
              <p className="text-gray-500 text-sm">
                The Bank. Você está no site do banco.
              </p>
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">
              Ambiente simulado. Sem movimentação de dinheiro real.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
