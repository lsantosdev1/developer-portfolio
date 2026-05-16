# 💻 Modern Developer Portfolio

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-black?style=flat&logo=framer)](https://framer.com/motion)
[![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=flat&logo=vite)](https://vite.dev)

Este é o repositório do meu portfólio profissional de engenharia de software. O projeto foi projetado com uma estética **high-tech e industrial**, utilizando uma paleta de cores escuras e detalhes em neon para proporcionar uma experiência visual moderna e fluida, sem comprometer a performance e a acessibilidade.

---

## 🚀 Engenharia e Stack Técnica

O projeto foi construído do zero focando em práticas modernas de desenvolvimento web:

- **React.js & Vite:** Estrutura modular, renderização ágil de componentes e ambiente de build ultrarrápido com Vite.
- **Tailwind CSS:** Estilização utilitária e responsiva avançada, garantindo consistência visual exata de mobile a desktop (layout fluido).
- **Framer Motion:** Animações baseadas em física e micro-interações integradas ao ciclo de vida dos componentes e scroll da página.
- **React Icons:** Centralização e consumo sob demanda de bibliotecas de ícones de mercado (_Font Awesome, Simple Icons, Ionicons_).

---

## 🛠️ Destaques de Implementação (Boas Práticas)

- **Componentização Limpa:** Organização estruturada em `components/` reaproveitáveis (ex: `ProjectCard`), facilitando a manutenção e legibilidade.
- **Evolução de UI Interativa:** Cards de projetos integrados com estados dinâmicos (links ativos para Live Demo, botões customizados para repositórios do GitHub e previews de tela de alta resolução).
- **Matriz de Especialidades Dinâmica:** Seção de habilidades técnicas estruturada através de objetos de dados com injeção de cores em tempo de execução para cada tecnologia específica.
- **Clean Deploy Architecture:** Otimização de assets estruturada na pasta `public/` para evitar reprocessamentos desnecessários do compilador e acelerar o carregamento final.

---

## 📂 Estrutura do Projeto

```text
├── public/               # Assets estáticos (Imagens de Preview dos projetos)
└── src/
    ├── components/       # Componentes globais isolados (Hero, ProjectsGrid, Skills...)
    ├── index.css         # Configurações globais de estilos e variáveis de tema
    ├── App.jsx           # Orquestrador principal das seções do portfólio
    └── main.jsx          # Ponto de entrada do React
```
