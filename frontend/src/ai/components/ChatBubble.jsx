import { motion } from "framer-motion";

export const ChatBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-md
          ${
            isUser
              ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-tr-none font-medium"
              : "bg-dark-card/90 border border-white/10 text-slate-200 rounded-tl-none backdrop-blur-md"
          }
        `}
      >
        {/* Texto da Mensagem */}
        <p>{message.text}</p>

        {/* Horário da Mensagem (Opcional - visual discreto) */}
        <span
          className={`block text-[10px] mt-1.5 text-right opacity-60
            ${isUser ? "text-white" : "text-slate-400"}
          `}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
};
