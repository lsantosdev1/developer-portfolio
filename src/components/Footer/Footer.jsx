import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFilePdf,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. BARRA FLUTUANTE CENTRAL */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-max">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-dark-card/80 backdrop-blur-xl border border-white/10 px-6 md:px-8 py-4 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://github.com/lsantosdev1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <div className="w-px h-4 bg-gray-800" />
          </div>

          <button
            className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-widest cursor-pointer"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <FaFilePdf size={16} className="text-neon-cyan" />
            <span className="hidden xs:inline">Currículo</span>
          </button>
        </motion.div>
      </footer>

      {/* 2. BOTÕES LATERAIS (WhatsApp e Voltar ao Topo) */}
      <div className="fixed bottom-24 md:bottom-8 right-6 md:right-8 flex flex-col gap-4 z-50">
        {/* Voltar ao Topo */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-dark-card p-3 rounded-xl border border-white/10 text-gray-400 hover:text-neon-cyan shadow-lg cursor-pointer"
            >
              <FaArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp - Reposicionado para não colidir com o dock no mobile */}
        <motion.a
          href="https://wa.me/5521993884424"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="bg-dark-card p-4 rounded-2xl border border-neon-cyan/30 neon-glow text-neon-cyan shadow-lg"
        >
          <FaWhatsapp size={24} />
        </motion.a>
      </div>
    </>
  );
};

export default Footer;
