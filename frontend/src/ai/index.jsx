import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";
import { useAIChat } from "./hooks/useAIChat";
import { ChatWindow } from "./components/ChatWindow";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  // Inicializa o nosso hook com toda a lógica de estado da IA
  const chatProps = useAIChat();

  return (
    <>
      {/* 1. JANELA DO CHAT COM ANIMAÇÃO DE SAÍDA (EXIT) */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow chatProps={chatProps} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>

      {/* 2. BOTÃO FLUTUANTE FIXO */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        /* Posicionado de forma fixa acima do index z-50 para flutuar sobre todo o conteúdo */
        className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.5)] transition-shadow duration-300 focus:outline-none"
        title="Fale com meu Assistente IA"
      >
        {/* Ícone dinâmico: Se estiver aberto, mostra um 'X' para fechar. Se fechado, o Robô da IA */}
        <div className="text-xl">{isOpen ? <FaTimes /> : <FaRobot />}</div>
      </motion.button>
    </>
  );
}
