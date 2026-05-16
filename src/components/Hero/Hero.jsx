import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* 
        Container de conteúdo:
        - z-10 para ficar acima do grid de fundo
        - flex-col com gap-6 para controlar o espaçamento entre elementos como no exemplo
        - py-32 para definir a altura ideal de respiro
      */}
      <div className="relative z-10 max-w-6xl mx-auto py-32 text-center flex flex-col items-center gap-6">
        {/* Agrupamento de Títulos */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight"
          >
            Luan Santos
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-black tracking-tighter text-neon-cyan uppercase animate-shine"
          >
            Full Stack Developer
          </motion.h2>
        </div>

        {/* Descrição de Apoio - max-w-xl para manter a proporção compacta */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl text-gray-400 text-lg leading-relaxed font-medium"
        >
          Projetando o amanhã com código limpo, performance extrema e foco na
          experiência do usuário. <br className="hidden md:block" />
          Com foco em <span className="text-white font-bold">performance</span>,
          escalabilidade e arquitetura limpa.
        </motion.p>

        {/* Ações (CTAs) - mt-2 para dar um leve respiro extra como no exemplo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <a
            href="#projetos"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-10 py-4 rounded-full border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all w-full sm:w-auto text-center"
          >
            Entre em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
