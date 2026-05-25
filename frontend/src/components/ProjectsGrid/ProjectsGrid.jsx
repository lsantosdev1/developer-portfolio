import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Sub-componente para cada Card de Projeto
const ProjectCard = ({
  title,
  description,
  tags,
  icon: Icon,
  image,
  githubLink,
  deployLink,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="bg-dark-card rounded-3xl border border-white/5 transition-all duration-500 neon-border-glow group flex flex-col h-full relative overflow-hidden"
  >
    {/* Detalhe de linha neon no topo */}
    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

    {/* Imagem Preview do Sistema */}
    <div className="relative w-full h-44 bg-gray-900 overflow-hidden border-b border-white/5">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-dark-card to-transparent opacity-60"></div>

      {/* Ícone flutuante sobre a imagem */}
      <div className="absolute top-4 right-4 p-2 bg-dark-card/90 rounded-lg text-neon-cyan border border-white/10 shadow-xl z-10">
        <Icon size={18} />
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
        {title}
      </h3>
      <p className="text-white text-sm font-bold leading-relaxed mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="tag-tech">
            {tag}
          </span>
        ))}
      </div>

      {/* Botões de Ação */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 border border-white/5 text-gray-400 text-xs font-bold hover:bg-gray-800 hover:text-white transition-all active:scale-95"
        >
          <FaGithub size={16} />
          GITHUB
        </a>

        {deployLink !== "#" ? (
          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-neon-cyan text-black text-xs font-black hover:bg-[#00f2ff] shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all active:scale-95"
          >
            <FaExternalLinkAlt size={12} />
            LIVE DEMO
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900/50 border border-white/5 text-gray-600 text-xs font-bold cursor-not-allowed">
            EM BREVE
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsGrid = () => {
  return (
    <section
      id="projetos"
      className="max-w-6xl mx-auto px-6 py-24 pb-32 relative scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-2 text-center md:text-left"
      >
        <h2 className="text-5xl md:text-4xl font-black tracking-tighter">
          <span className="text-neon-cyan neon-text">PROJETOS</span>
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          Mobile & Full Stack Development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projeto 1: Barbearia */}
        <ProjectCard
          title="Pride Barbers Dashboard"
          description="Dashboard administrativo Full Stack desenvolvido com arquitetura modular e conceito Multi-Tenant para isolamento de dados. O sistema possui agendamento em tempo real com controle de concorrência, além de uma área restrita protegida por autenticação JWT e criptografia BCrypt. Conta com controle de permissões por nível de usuário (RBAC) e um painel analítico para gestão financeira dos profissionais."
          image="/projects/barbearia.png"
          icon={FaMobileAlt}
          tags={["React", "Node.js", "MongoDB"]}
          githubLink="https://github.com/lsantosdev1/pride-barbers-dashboard"
          deployLink="https://pride-barbers-dashboard.vercel.app/" // Link do seu deploy
        />

        {/* Projeto 2: HamburgueriaZ2 */}
        <ProjectCard
          title="HamburgueriaZ2"
          description="Aplicativo Android nativo desenvolvido em Java voltado para a automação e gestão operacional de pedidos. O sistema utiliza o ecossistema Firebase para autenticação e sincronização de dados em tempo real, integrando um motor de cálculo otimizado para precificação dinâmica e controle de fluxo de caixa, garantindo performance e estabilidade em ambientes mobile"
          image="/projects/hamburgueria.png"
          icon={FaCode}
          tags={["Java", "Android", "Firebase"]}
          githubLink="https://github.com/lsantosdev1/hamburgueriaz2"
          deployLink="#"
        />

        {/* Projeto 3: DevFinder */}
        <ProjectCard
          title="DevFinder"
          description="Aplicação front-end integrada em tempo real à API pública do GitHub para busca e resumo visual de perfis de desenvolvedores. Desenvolvida com React e TypeScript, utiliza gerenciamento de estados síncronos e assíncronos para tratar carregamentos e erros, garantindo uma arquitetura de componentes limpa e UX fluida."
          image="/projects/devfinder.png"
          icon={FaSearch}
          tags={["React", "TypeScript", "Tailwind CSS", "API REST"]}
          githubLink="https://github.com/lsantosdev1/Dev-finder"
          deployLink="https://dev-finder-rosy.vercel.app/"
        />
        {/* Projeto 3: Açaí Landpage */}
        <ProjectCard
          title="Açaí Landpage"
          description="Aplicação interativa de e-commerce e automação de pedidos focada na experiência do usuário (UX/UI). Desenvolvido com React, o projeto conta com gerenciamento dinâmico de estado para a montagem customizada de produtos e controle do carrinho de compras, utilizando animações fluidas para reatividade em tempo real e alta conversão."
          image="/projects/acailt.png"
          icon={FaLaptopCode}
          tags={["JavaScript", "React", "Tailwind CSS", "Framer Motion"]}
          githubLink="https://github.com/lsantosdev1/acaiLT"
          deployLink="https://acai-lt.vercel.app/"
        />
      </div>
    </section>
  );
};

export default ProjectsGrid;
