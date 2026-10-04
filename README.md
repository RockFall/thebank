# The Bank

> O seu dinheiro fica aqui.

Uma aplicação bancária digital completa, incluindo landing page institucional e plataforma de internet banking. O The Bank faz parte do universo simulado da Hu. Co, oferecendo uma experiência bancária realista com interface profissional inspirada em bancos como Inter e Itaú.

## Visão Geral

O projeto inclui:

- **Landing Page** - Página institucional com apresentação dos produtos
- **Login** - Autenticação com Google, Apple, Microsoft ou email/CPF
- **Dashboard** - Visão geral da conta com saldo, transações e ações rápidas
- **Pix** - Transferências instantâneas, QR Code e gerenciamento de chaves
- **Transferências** - TED e transferências entre contas
- **Pagamentos** - Boletos, QR Codes e agendamentos
- **Cartões** - Cartão físico e virtual, fatura e controles
- **Extrato** - Histórico completo de movimentações
- **Investimentos** - Carteira e produtos disponíveis
- **Configurações** - Perfil e preferências

## Identidade Visual

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto | `#000000` | Cor principal, textos, sidebar |
| Branco | `#FFFFFF` | Backgrounds |
| Dourado | `#C5A961` | Destaques, CTAs, acentos |

**Tipografia:**
- **Playfair Display** - Títulos e marca (serifa elegante)
- **Inter** - Textos e interface (sans-serif)

## Stack Técnica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Fontes:** Google Fonts (Playfair Display, Inter)

## Estrutura do Projeto

```
├── app/
│   ├── (bank)/                    # Plataforma bancária (grupo de rotas)
│   │   ├── layout.tsx             # Layout com sidebar
│   │   ├── dashboard/             # Dashboard principal
│   │   ├── pix/                   # Transferências Pix
│   │   ├── transferir/            # TED e transferências
│   │   ├── pagar/                 # Pagamentos
│   │   ├── cartao/                # Cartões e fatura
│   │   ├── extrato/               # Extrato completo
│   │   ├── investimentos/         # Investimentos
│   │   └── configuracoes/         # Configurações
│   ├── login/                     # Página de login
│   ├── components/
│   │   ├── Header.tsx             # Header da landing
│   │   └── bank/
│   │       ├── Sidebar.tsx        # Navegação lateral
│   │       └── TopBar.tsx         # Barra superior
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                   # Landing page
└── public/
    └── images/                    # Imagens do projeto
```

## Executando Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Ou em porta específica
npm run dev -- -p 3849
```

O site estará disponível em `http://localhost:3000` (ou na porta especificada).

## Fluxo de Uso

1. **Landing Page** (`/`) - Conheça o banco e clique em "Entrar" ou "Abrir conta"
2. **Login** (`/login`) - Entre com Google, Apple, Microsoft ou email/CPF
3. **Dashboard** (`/dashboard`) - Visualize saldo, ações rápidas e transações
4. **Navegação** - Use a sidebar para acessar todas as funcionalidades

## Features

### Landing Page
- Hero com mockup do app e cartão
- Abas interativas para funcionalidades da conta
- Destaque visual do saldo
- Apresentação do cartão com fotografia
- Demonstração do extrato
- Reservas e investimentos
- Depoimentos de clientes
- Parceria com Hu. Co
- FAQ com accordion
- CTA de abertura de conta

### Plataforma Bancária
- **Dashboard**: Saldo com toggle de visibilidade, ações rápidas, transações recentes, preview do cartão e fatura, resumo de investimentos
- **Pix**: Transferir com diferentes tipos de chave, receber via QR Code, gerenciar chaves Pix, contatos recentes
- **Transferir**: Seleção de tipo (TED/mesma titularidade), lista de contatos, fluxo em etapas
- **Pagar**: Código de barras, QR Code, pagamentos agendados
- **Cartão**: Visualização do cartão, mostrar/ocultar dados, bloquear/desbloquear, fatura com categorias
- **Extrato**: Filtros por tipo e período, busca, saldo após cada transação
- **Investimentos**: Carteira atual com rentabilidade, explorar novos produtos
- **Configurações**: Perfil, segurança, notificações

### Responsividade
- Layout otimizado para mobile e desktop
- Sidebar colapsável em mobile
- Grid adaptável
- Touch-friendly em dispositivos móveis

## Deploy

O projeto está preparado para deploy na Vercel:

```bash
npm run build
```

---

**The Bank** — Um banco para o seu dinheiro.

*Ambiente simulado. Sem movimentação de dinheiro real.*
