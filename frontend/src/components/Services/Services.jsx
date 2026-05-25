import React from "react";
import { motion } from "framer-motion";
import { FaMobile, FaLaptopCode, FaServer, FaCogs } from "react-icons/fa";

const ServiceCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-dark-card border border-white/5 p-8 rounded-3xl group hover:border-neon-cyan/50 transition-all duration-500 relative overflow-hidden"
  >
    {/* Efeito de brilho no fundo do card ao passar o mouse */}
    <div className="absolute -inset-px bg-linear-to-r from-neon-cyan/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

    <div className="relative z-10">
      <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500 shadow-inner">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-black uppercase tracking-tighter mb-4">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const Servicos = () => {
  const servicos = [
    {
      title: "Desenvolvimento Mobile",
      description:
        "Criação de aplicativos nativos de alta performance para Android com integração em tempo real e foco na melhor experiência do usuário.",
      icon: FaMobile,
      delay: 0.1,
    },
    {
      title: "Sistemas Full Stack",
      description:
        "Desenvolvimento de plataformas web completas, desde interfaces modernas e responsivas até back-ends robustos e escaláveis.",
      icon: FaLaptopCode,
      delay: 0.2,
    },
    {
      title: "Infraestrutura & DevOps",
      description:
        "Configuração de servidores, orquestração de containers com Docker e monitoramento de redes para garantir estabilidade e segurança.",
      icon: FaServer,
      delay: 0.3,
    },
    {
      title: "Consultoria Técnica",
      description:
        "Análise de arquitetura de software e otimização de sistemas existentes para melhorar a performance e reduzir custos operacionais.",
      icon: FaCogs,
      delay: 0.4,
    },
  ];

  return (
    <section
      id="servicos"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">
          O que eu <span className="text-neon-cyan neon-text">entrego.</span>
        </h2>
        <div className="h-1 w-20 bg-neon-cyan"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicos.map((s, index) => (
          <ServiceCard key={index} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Servicos;
