import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactLink = ({ icon: Icon, title, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group bg-dark-card border border-white/5 p-6 rounded-2xl flex items-center gap-5 hover:border-neon-cyan/50 transition-all duration-300"
  >
    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300 shadow-inner">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
        {title}
      </h4>
      <p className="text-white font-bold tracking-tight group-hover:text-neon-cyan transition-colors">
        {value}
      </p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contato" className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Lado Esquerdo: Chamada */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            VAMOS <br />
            <span className="text-neon-cyan neon-text">CONVERSAR?</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-md leading-relaxed">
            Seja para um novo projeto, uma oportunidade de colaboração ou apenas
            para trocar uma ideia sobre
            <span className="text-white">
              {" "}
              desenvolvimento full stack e sistemas distribuídos
            </span>
            .
          </p>
        </motion.div>

        {/* Lado Direito: Links */}
        <div className="grid grid-cols-1 gap-4">
          <ContactLink
            icon={FaEnvelope}
            title="E-mail"
            value="lsantos2152@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lsantos2152@gmail.com"
            delay={0.1}
          />
          <ContactLink
            icon={FaLinkedin}
            title="LinkedIn"
            value="Luan Santos"
            href="https://linkedin.com/in/1luansantosdev"
            delay={0.2}
          />
          <ContactLink
            icon={FaGithub}
            title="GitHub"
            value="lsantosdev1"
            href="https://github.com/lsantosdev1"
            delay={0.3}
          />
          <ContactLink
            icon={FaWhatsapp}
            title="WhatsApp"
            value="Enviar Mensagem"
            href="https://wa.me/5521993884424"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
