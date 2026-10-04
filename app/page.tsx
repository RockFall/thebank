"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

type AccountTab = "receber" | "guardar" | "transferir" | "pagar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<AccountTab>("receber");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleStats(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accountTabs: Record<AccountTab, { title: string; description: string; detail: string }> = {
    receber: {
      title: "Receber",
      description: "Alguém envia dinheiro para você.",
      detail: "O dinheiro chega. Você fica sabendo. Ele aparece no saldo.",
    },
    guardar: {
      title: "Guardar",
      description: "O dinheiro continua aqui.",
      detail: "Enquanto você não usa, ele não vai embora.",
    },
    transferir: {
      title: "Transferir",
      description: "Escolha quanto e para quem.",
      detail: "O dinheiro sai da sua conta. Entra na conta de outra pessoa.",
    },
    pagar: {
      title: "Pagar",
      description: "Algo custa dinheiro.",
      detail: "Você paga. O valor sai do seu saldo. A coisa é sua.",
    },
  };

  const faqs = [
    {
      question: "Como funciona uma conta bancária?",
      answer: "Você coloca dinheiro. O dinheiro fica lá. Você pode tirar quando quiser. Enquanto está lá, você pode ver quanto tem.",
    },
    {
      question: "O que acontece quando eu recebo dinheiro?",
      answer: "O número que mostra seu saldo aumenta. Isso significa que você tem mais dinheiro do que tinha antes.",
    },
    {
      question: "Posso ver meu saldo a qualquer momento?",
      answer: "Sim. O aplicativo mostra. Você pode olhar quantas vezes quiser. O número não muda por você estar olhando.",
    },
    {
      question: "O cartão é de verdade?",
      answer: "É de plástico. Funciona em máquinas de cartão. Quando você usa, o valor é descontado. É assim que cartões funcionam.",
    },
    {
      question: "O dinheiro é real?",
      answer: "Não. O The Bank é um ambiente simulado integrado à Hu. Co. Os valores existem dentro dessa experiência. Você não pode comprar coisas de verdade com ele.",
    },
  ];

  const stats = [
    { value: "3.500", label: "Reais", sublabel: "Valor do salário que aparece nos exemplos" },
    { value: "1", label: "Conta", sublabel: "Quantidade de contas que você pode ter aqui" },
    { value: "24h", label: "Por dia", sublabel: "Tempo que o aplicativo fica disponível" },
    { value: "100%", label: "Do seu dinheiro", sublabel: "Pertence a você" },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Sem taxas escondidas",
      description: "Se tiver taxa, a gente fala. Se não falar, não tem.",
    },
    {
      icon: "📱",
      title: "Aplicativo",
      description: "Um app. Para usar o banco. No celular.",
    },
    {
      icon: "💳",
      title: "Cartão incluso",
      description: "Vem um cartão. Você não precisa pagar por ele. Ele vem.",
    },
    {
      icon: "🔒",
      title: "Segurança",
      description: "Seu dinheiro fica protegido. De pessoas que não são você.",
    },
    {
      icon: "⚡",
      title: "Pix instantâneo",
      description: "O dinheiro chega na hora. Não na hora seguinte. Na hora.",
    },
    {
      icon: "📊",
      title: "Controle total",
      description: "Você vê tudo o que entra e sai. Porque é sua conta.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/hero-abstract.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#C5A961] rounded-full animate-pulse"></span>
              <span className="text-sm text-white/80">O banco que você está vendo agora</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8">
              O seu dinheiro<br />
              <span className="text-[#C5A961]">fica aqui.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              Uma conta bancária. Para guardar dinheiro. No banco.
              Depois de abrir, você terá uma conta. É assim que funciona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="group bg-[#C5A961] text-black px-8 py-4 text-lg font-semibold hover:bg-[#D4BC7D] transition-all inline-flex items-center justify-center gap-2"
              >
                Abrir minha conta
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#como-funciona"
                className="border border-white/30 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all text-center"
              >
                Entender o que é um banco
              </Link>
            </div>
          </div>

          {/* Floating App Preview */}
          <div className="hidden lg:block absolute right-8 xl:right-20 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-72 xl:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl shadow-[#C5A961]/20 border border-white/10">
                  <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                    <div className="px-6 py-8">
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">The Bank</span>
                        <div className="w-8 h-8 bg-[#C5A961] rounded-full"></div>
                      </div>
                      
                      <p className="text-sm text-zinc-500 mb-1">Saldo disponível</p>
                      <p className="text-4xl font-semibold text-white mb-8">R$ 3.500,00</p>

                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {["Pix", "Pagar", "Extrato"].map((action) => (
                          <div key={action} className="text-center">
                            <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-xl mb-2"></div>
                            <span className="text-xs text-zinc-400">{action}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                        <p className="text-sm text-emerald-400">Salário recebido</p>
                        <p className="text-emerald-300 font-semibold">+ R$ 3.500,00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Notification */}
              <div className="absolute -left-16 top-20 bg-white rounded-2xl p-4 shadow-xl animate-bounce-slow max-w-[200px]">
                <p className="text-sm font-medium text-black">Seu pagamento chegou</p>
                <p className="text-xs text-gray-500">Agora mesmo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Role para baixo</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  visibleStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold text-black mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-[#C5A961] mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Como funciona</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-semibold mb-6">
              Um banco.<br />
              <span className="text-gray-400">Para coisas de banco.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Você abre uma conta. Coloca dinheiro. Usa o dinheiro. 
              Isso é tudo. Não inventamos nada novo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Abra sua conta",
                description: "Você preenche seus dados. A gente verifica. Pronto, você tem uma conta. É sua.",
                image: "/images/lifestyle-woman.jpg"
              },
              {
                step: "02", 
                title: "Coloque dinheiro",
                description: "Transferência, Pix, salário. O dinheiro entra. O número do saldo aumenta.",
                image: "/images/app-floating.jpg"
              },
              {
                step: "03",
                title: "Use",
                description: "Pague contas. Transfira. Compre coisas. O dinheiro serve para isso.",
                image: "/images/lifestyle-man.jpg"
              }
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-6xl font-bold text-white/20 font-[family-name:var(--font-playfair)]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Features - Interactive */}
      <section id="conta" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Sua conta</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Uma conta que faz<br />
                <span className="text-gray-400">coisas de conta.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Receber dinheiro. Guardar dinheiro. Enviar dinheiro. 
                São as coisas que contas fazem.
              </p>

              <div className="space-y-2">
                {(Object.keys(accountTabs) as AccountTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left p-5 rounded-xl transition-all ${
                      activeTab === tab
                        ? "bg-black text-white"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{accountTabs[tab].title}</h3>
                        <p className={activeTab === tab ? "text-gray-300" : "text-gray-500"}>
                          {accountTabs[tab].description}
                        </p>
                      </div>
                      <svg className={`w-5 h-5 transition-transform ${activeTab === tab ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold">The Bank</span>
                    <span className="text-sm text-gray-500">Demonstração</span>
                  </div>

                  {activeTab === "receber" && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-emerald-800">Pix recebido</p>
                          <p className="text-sm text-emerald-600">De Maria Silva</p>
                        </div>
                        <span className="text-emerald-700 font-semibold text-lg">+ R$ 150,00</span>
                      </div>
                      <p className="text-center text-gray-500 text-sm">
                        {accountTabs[activeTab].detail}
                      </p>
                    </div>
                  )}

                  {activeTab === "guardar" && (
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <p className="text-sm text-gray-500 mb-2">Saldo guardado</p>
                        <p className="text-5xl font-semibold text-black">R$ 3.500,00</p>
                        <p className="text-sm text-gray-400 mt-2">Continua aqui desde ontem</p>
                      </div>
                      <p className="text-center text-gray-500 text-sm">
                        {accountTabs[activeTab].detail}
                      </p>
                    </div>
                  )}

                  {activeTab === "transferir" && (
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500 mb-2">Para</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                          <div>
                            <p className="font-medium">João Pedro</p>
                            <p className="text-sm text-gray-500">Pix • joao@email.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center py-4">
                        <p className="text-4xl font-semibold">R$ 250,00</p>
                      </div>
                      <button className="w-full bg-[#C5A961] text-black py-3 rounded-xl font-semibold">
                        Enviar dinheiro
                      </button>
                      <p className="text-center text-gray-500 text-sm">
                        {accountTabs[activeTab].detail}
                      </p>
                    </div>
                  )}

                  {activeTab === "pagar" && (
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-500">Conta de Luz</span>
                          <span className="text-sm text-orange-500">Vence amanhã</span>
                        </div>
                        <p className="text-3xl font-semibold">R$ 187,45</p>
                      </div>
                      <button className="w-full bg-[#C5A961] text-black py-3 rounded-xl font-semibold">
                        Pagar conta
                      </button>
                      <p className="text-center text-gray-500 text-sm">
                        {accountTabs[activeTab].detail}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balance Highlight - Dramatic */}
      <section className="py-24 lg:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-abstract.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-6">Seu saldo</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-8">
            Saiba exatamente quanto<br />dinheiro você tem.
          </h2>
          <p className="text-7xl lg:text-9xl font-semibold text-[#C5A961] mb-8 font-[family-name:var(--font-playfair)]">
            R$ 3.500,00
          </p>
          <p className="text-xl text-gray-400 mb-4">
            Neste exemplo, este valor. Na sua conta, o seu valor.
          </p>
          <p className="text-gray-500">
            O que entra, aumenta. O que sai, diminui. Matemática.
          </p>
        </div>
      </section>

      {/* Card Section - Premium */}
      <section id="cartao" className="py-24 lg:py-32 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/card-premium.jpg"
                  alt="Cartão The Bank"
                  width={700}
                  height={400}
                  className="w-full rounded-2xl"
                />
                <p className="text-xs text-zinc-500 mt-4 text-center">
                  Imagem ilustrativa de um cartão. É assim que cartões parecem.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">O cartão</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Um cartão.<br />
                <span className="text-zinc-500">De banco.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Você aproxima ou insere na máquina. A compra é debitada. 
                O cartão é seu. Seu nome está nele.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "Seu nome impresso", description: "Para as pessoas saberem que é seu." },
                  { title: "Um chip", description: "Serve para a máquina ler informações." },
                  { title: "Números", description: "Identificam o cartão. São únicos." },
                  { title: "Função débito e crédito", description: "Duas formas de usar. Você escolhe qual." },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#C5A961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-zinc-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#C5A961] text-black px-8 py-4 font-semibold hover:bg-[#D4BC7D] transition-colors"
              >
                Quero meu cartão
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Vantagens</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
              O que você ganha.<br />
              <span className="text-gray-400">Por ter uma conta.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300">
                <span className="text-4xl mb-6 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Segurança</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Seu dinheiro está<br />
                <span className="text-gray-400">protegido.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Outras pessoas não podem pegar. Só você. 
                Porque é sua conta. Com sua senha.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Senha",
                    description: "Você cria uma. Só você sabe. Se alguém souber, a culpa é sua.",
                  },
                  {
                    title: "Biometria",
                    description: "Sua digital ou seu rosto. Que são seus. Por definição.",
                  },
                  {
                    title: "Notificações",
                    description: "Quando algo acontece, você fica sabendo. Em tempo real.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#C5A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/security-abstract.jpg"
                alt="Segurança"
                width={600}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Style */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Depoimentos</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
              Pessoas que usam.<br />
              <span className="text-gray-400">E continuam usando.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Transferi R$ 100. A pessoa recebeu R$ 100. Não sumiu nada no caminho.",
                name: "Mariana Costa",
                role: "Usa o banco para guardar dinheiro",
                image: "/images/testimonial-mariana.jpg",
              },
              {
                quote: "Olhei meu saldo às 9h. Olhei de novo às 10h. Continuava o mesmo. Ninguém mexeu.",
                name: "Pedro Santos",
                role: "Olha o saldo regularmente",
                image: "/images/testimonial-pedro.jpg",
              },
              {
                quote: "Paguei uma conta. A conta sumiu da lista de contas a pagar. Porque eu paguei.",
                name: "Camila Oliveira",
                role: "Paga contas em dia",
                image: "/images/testimonial-camila.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-xl leading-relaxed text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section - Hu.Co */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Parceiros</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
                Receba seu salário<br />
                <span className="text-gray-400">direto aqui.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Trabalha na Hu. Co? Seu salário pode cair direto na sua conta The Bank.
                Você trabalha lá. O dinheiro vem para cá.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-black font-semibold hover:text-[#C5A961] transition-colors"
              >
                Conhecer a Hu. Co
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">Hu.Co</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Pagamento recebido</p>
                  <p className="text-gray-500">Referente ao trabalho de Outubro</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500">De</span>
                  <span className="font-medium">Hu. Co — Human Company</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500">Para</span>
                  <span className="font-medium">Sua conta The Bank</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500">Valor</span>
                  <span className="font-medium text-emerald-600">R$ 3.500,00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium text-emerald-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Na sua conta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="ajuda" className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C5A961] uppercase tracking-wider mb-4">Dúvidas</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-semibold mb-6">
              Perguntas que<br />
              <span className="text-gray-400">pessoas fazem.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform text-[#C5A961] ${openFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Ainda tem dúvidas?</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Falar com alguém do banco
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-abstract.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-7xl font-semibold mb-8 leading-tight">
            Abra sua conta.<br />
            <span className="text-[#C5A961]">Tenha uma conta.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Depois de abrir, ela será sua. Você poderá usar.
            É para isso que contas servem.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-3 bg-[#C5A961] text-black px-10 py-5 text-lg font-semibold hover:bg-[#D4BC7D] transition-all"
          >
            Quero minha conta
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">The Bank</span>
              <p className="text-zinc-500 mt-4 text-sm leading-relaxed">
                Um banco. Para você guardar seu dinheiro. E usar quando quiser.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-zinc-300">Conta</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><Link href="/login" className="hover:text-white transition-colors">Abrir conta</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Como funciona</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tarifas</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Segurança</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-zinc-300">Cartão</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><Link href="#" className="hover:text-white transition-colors">Solicitar</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Benefícios</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Segunda via</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Bloqueio</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-zinc-300">Ajuda</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><Link href="#" className="hover:text-white transition-colors">Central de ajuda</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Fale conosco</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Ouvidoria</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Denúncias</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-zinc-300">Sobre</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><Link href="#" className="hover:text-white transition-colors">O banco</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Imprensa</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-zinc-500 text-sm text-center lg:text-left">
                The Bank — Um banco. Você está no site dele.
              </p>
              <div className="flex items-center gap-6 text-zinc-500 text-sm">
                <Link href="#" className="hover:text-white transition-colors">Termos</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
                <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-600 mt-8">
              Ambiente simulado. Nenhum dinheiro real está envolvido. O The Bank faz parte de uma experiência integrada à Hu. Co.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
