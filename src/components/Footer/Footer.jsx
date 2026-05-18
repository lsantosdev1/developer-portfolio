import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFilePdf,
  FaArrowUp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: "github",
      icon: <FaGithub size={20} />,
      url: "https://github.com/lsantosdev1",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/1luansantosdev/?skipRedirect=true",
      label: "LinkedIn",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={20} />,
      url: "https://wa.me/5521993884424",
      label: "WhatsApp",
    },
    {
      id: "email",
      icon: <MdEmail size={22} />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=lsantos2152@gmail.com",
      label: "E-mail",
    },
  ];

  return (
    <>
      {/* 1. BARRA FLUTUANTE CENTRAL (DOCK COM TODOS OS MEIOS DE CONTATO) */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-max max-w-2xl">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="bg-dark-card/80 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-3.5 rounded-full flex items-center justify-center gap-3 sm:gap-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          {/* Mapeamento de todas as redes e contatos pedidas */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                title={link.label}
                whileHover={{ scale: 1.18, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 p-2 rounded-full hover:bg-white/5 flex items-center justify-center"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Linha separadora discreta */}
          <div className="w-px h-5 bg-gray-800 self-center mx-1" />

          {/* Botão de Currículo Integrado ao Tema */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-linear-to-r from-neon-cyan/10 to-neon-green/10 border border-neon-cyan/20 text-[10px] font-black text-gray-300 hover:text-white uppercase tracking-widest cursor-pointer hover:border-neon-cyan/5 transition-all duration-300"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <FaFilePdf size={14} className="text-neon-cyan" />
            <span>CV</span>
          </motion.button>
        </motion.div>
      </footer>

      {/* 2. BOTÃO AUXILIAR: VOLTAR AO TOPO (LATERIAL DIREITA) */}
      <div className="fixed bottom-24 sm:bottom-8 right-6 z-50">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-dark-card/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-gray-400 hover:text-neon-cyan shadow-xl cursor-pointer transition-colors duration-300 flex items-center justify-center group"
            >
              <FaArrowUp
                size={18}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Footer;
