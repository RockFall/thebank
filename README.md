# The Bank

> O seu dinheiro fica aqui.

Uma landing page institucional para o The Bank — um banco digital simulado que faz parte do universo Hu. Co. A página apresenta os produtos e serviços do banco com o mesmo acabamento e seriedade de uma grande instituição financeira.

## Sobre

O The Bank é uma experiência simulada de banco digital. A landing page foi construída para transmitir segurança e profissionalismo, explicando com absoluta seriedade conceitos bancários básicos.

**Identidade Visual:**
- Preto (#000000) - Cor principal
- Branco (#FFFFFF) - Background
- Dourado (#C5A961) - Destaques e CTAs

**Tipografia:**
- Playfair Display - Títulos (serifa elegante)
- Inter - Textos e interface (sans-serif)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Fontes:** Google Fonts (Playfair Display, Inter)

## Executando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Estrutura

```
├── app/
│   ├── components/
│   │   └── Header.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       ├── card-black.jpg
│       ├── bank-lobby.jpg
│       ├── customer-service.jpg
│       ├── testimonial-mariana.jpg
│       ├── testimonial-pedro.jpg
│       └── testimonial-camila.jpg
└── ...
```

## Seções da Landing Page

1. **Hero** - "O seu dinheiro fica aqui" com mockup do app
2. **Conta** - Funcionalidades com abas interativas
3. **Saldo** - Destaque visual do saldo
4. **Cartão** - Apresentação do cartão físico
5. **Extrato** - Demonstração de movimentações
6. **Reservas & Investimentos** - Organização financeira
7. **Depoimentos** - Clientes satisfeitos
8. **Parceiros** - Integração com Hu. Co
9. **Ajuda** - Atendimento e FAQ
10. **CTA Final** - Abrir conta

## Deploy

O projeto está preparado para deploy na Vercel:

```bash
npm run build
```

---

**The Bank** — Um banco para o seu dinheiro.

*Ambiente simulado. Sem movimentação de dinheiro real.*
