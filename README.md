Markdown

# 💻 Modern Full-Stack Developer Portfolio & AI Assistant

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat&logo=nodedotjs)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Framework-Express.js-000000?style=flat&logo=express)](https://expressjs.com)
[![Gemini AI](https://img.shields.io/badge/AI_Integration-Gemini_2.5_Flash-blue?style=flat&logo=googlegemini)](https://deepmind.google/technologies/gemini/)

Este é o repositório do meu portfólio profissional de engenharia de software, agora reestruturado como um ecossistema **Full-Stack**. O projeto une uma interface moderna de alta performance com um assistente virtual inteligente integrado para responder dúvidas sobre minha carreira em tempo real.

---

## 🚀 Engenharia e Stack Técnica

O ecossistema está dividido de forma modular em duas frentes principais:

### 🎨 Front-end (`/frontend`)

- **React.js & Vite:** Interface reativa, modular e com build ultrarrápido.
- **Tailwind CSS:** Layout fluido, responsivo e estilização utilitária de alta fidelidade.
- **Framer Motion:** Micro-interações e animações físicas fluidas baseadas no scroll.

### ⚙️ Back-end (`/backend`)

- **Node.js & Express:** API REST estável estruturada para gerenciar as requisições do chat.
- **Google Generative AI SDK:** Integração nativa com o modelo **Gemini 2.5 Flash**, alimentado com dados contextuais customizados (Z2-Bot).
- **CORS & Dotenv:** Gerenciamento seguro de variáveis de ambiente e permissões de requisições.

---

## 📂 Estrutura do Repositório

```text
📁 Portfolio/
├── 📁 backend/          # API Node.js, rotas do Express e serviço do Gemini AI
│   ├── 📁 src/services/ # Lógica de integração com a SDK do Google
│   └── index.js         # Ponto de entrada do servidor backend
└── 📁 frontend/         # Aplicação React, componentes de UI e hooks customizados
    ├── 📁 src/ai/       # Estrutura do chat (hooks e componentes visuais do robô)
    └── src/components/  # Seções do portfólio (Hero, Projects, Skills)
🛠️ Destaques do Assistente de IA (Z2-Bot)
Contexto Blindado: A IA foi instruída com dados precisos sobre minhas stacks principais (React, Node.js, Java) e meus projetos reais (Barbearia, HamburgueriaZ2, Cluster Docker Swarm).

Consumo Seguro: Chamadas HTTP assíncronas via fetch isolando as chaves de API com segurança no servidor backend, protegendo contra exposição de credenciais no cliente.


---


```
