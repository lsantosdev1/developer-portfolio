import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes, FaTrashAlt } from "react-icons/fa";
import { ChatBubble } from "./ChatBubble";

export const ChatWindow = ({ chatProps, onClose }) => {
  const { messages, isLoading, error, chatEndRef, sendMessage, clearChat } =
    chatProps;
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    sendMessage(inputText);
    setInputText(""); // Limpa o campo após enviar
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] bg-dark-card/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col overflow-hidden z-50 text-white font-sans"
    >
      {/* 1. CABEÇALHO DO CHAT */}
      <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h3 className="font-bold text-sm">Assistente IA</h3>
            <p className="text-[11px] text-slate-400">Online agora</p>
          </div>
        </div>

        {/* Botões de Ação do Topo */}
        <div className="flex items-center gap-3">
          <button
            onClick={clearChat}
            title="Limpar conversa"
            className="text-slate-400 hover:text-red-400 transition-colors text-xs"
          >
            <FaTrashAlt />
          </button>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* 2. ÁREA DE MENSAGENS (COM ROLAGEM) */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-black/10">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {/* Indicador de que a IA está digitando... */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-dark-card/90 border border-white/10 text-slate-400 max-w-[80px] rounded-tl-none text-xs"
          >
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
          </motion.div>
        )}

        {/* Feedback de Erro */}
        {error && (
          <p className="text-center text-xs text-red-400 bg-red-500/10 py-2 rounded-xl border border-red-500/20 my-2">
            {error}
          </p>
        )}

        {/* Ponto de ancoragem para o scroll automático */}
        <div ref={chatEndRef} />
      </div>

      {/* 3. FORMULÁRIO DE INPUT */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Pergunte sobre as tecnologias ou projetos do Luan..."
          disabled={isLoading}
          className="flex-1 bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-slate-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-90 disabled:opacity-30 disabled:hover:opacity-30 transition-all text-xs"
        >
          <FaPaperPlane />
        </button>
      </form>
    </motion.div>
  );
};
