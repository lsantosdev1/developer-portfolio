import React from "react";
import { motion } from "framer-motion";
import {
  FaUserAstronaut,
  FaCode,
  FaLayerGroup,
  FaTerminal,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto px-6 py-28 relative scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* 1. TEXTO PRINCIPAL (6 colunas) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-[10px] font-black uppercase tracking-widest">
            <FaUserAstronaut /> Sobre Mim
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            TRANSFORMANDO IDEIAS EM <br />
            <span className="text-neon-cyan neon-text">SISTEMAS REAIS</span>
          </h2>

          <p className="text-gray-400 leading-relaxed font-medium text-lg">
            Estudante de{" "}
            <span className="text-white font-bold">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e desenvolvedor{" "}
            <span className="text-neon-cyan font-bold">Full Stack</span>.
            Especializado em criar{" "}
            <span className="text-white font-bold">interfaces modernas</span>{" "}
            com React e{" "}
            <span className="text-white font-bold">APIs robustas</span> em
            Node.js.
          </p>

          <p className="text-gray-400 leading-relaxed font-medium text-lg">
            Hoje, projeto soluções de ponta a ponta: transito entre o front-end
            moderno e o back-end robusto, sempre de olho na infraestrutura
            através de clusters{" "}
            <span className="text-neon-green font-bold">Docker Swarm</span> e
            monitoramento de rede com{" "}
            <span className="text-white font-bold">Wireshark</span>.
          </p>

          <p className="text-gray-400 leading-relaxed font-medium text-lg">
            Minha experiência com{" "}
            <span className="text-white font-bold">atendimento ao cliente</span>{" "}
            me proporcionou uma comunicação clara e foco total na{" "}
            <span className="text-neon-cyan font-bold">
              resolução de problemas
            </span>
            , unindo o rigor técnico à empatia com o usuário final.
          </p>
        </motion.div>

        {/* 2. BENTO GRID DE HABILIDADES (5 colunas) */}
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {/* Card: Mobile Stack */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 bg-dark-card p-6 rounded-3xl border border-white/5 flex flex-col gap-4 shadow-xl"
          >
            <FaCode className="text-neon-cyan text-2xl" />
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">
              Full Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="tag-tech">Java</span>
              <span className="tag-tech">Kotlin</span>
              <span className="tag-tech">Firebase</span>
            </div>
          </motion.div>

          {/* Card: Backend */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-dark-card p-6 rounded-3xl border border-white/5 flex flex-col gap-4 shadow-xl"
          >
            <FaTerminal className="text-neon-green text-xl" />
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Backend
            </h4>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold">Node.js</span>
              <span className="text-xs font-bold text-gray-600">MongoDb</span>
            </div>
          </motion.div>

          {/* Card: Infrastructure */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-dark-card p-6 rounded-3xl border border-white/5 flex flex-col gap-4 shadow-xl"
          >
            <FaLayerGroup className="text-white text-xl" />
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Infra
            </h4>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold">Docker</span>
              <span className="text-xs font-bold text-gray-600">Wireshark</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
