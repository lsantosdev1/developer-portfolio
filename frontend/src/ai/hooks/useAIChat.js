import { useState, useEffect, useRef } from "react";

export const useAIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Olá! Sou o assistente virtual do Luan Santos. 🤖\nEstou aqui para te ajudar a conhecer melhor a trajetória, stacks e projetos dele. No que posso te ajudar hoje?",
      timestamp: new Date(),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    // 1. Cria e adiciona a mensagem do usuário na tela imediatamente
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // 2. REQUISIÇÃO REAL: Faz a chamada HTTP para o seu backend Node.js
      const response = await fetch(
        "https://developer-portfolio-pwnk.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text.trim() }), // Envia a mensagem no padrão esperado pelo backend
        },
      );

      if (!response.ok) {
        throw new Error("Erro na resposta do servidor.");
      }

      const data = await response.json();

      // 3. Cria a mensagem com a resposta real gerada pelo Gemini
      const aiMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: data.response, // Captura a propriedade 'response' retornada pelo Express
        timestamp: new Date(),
      };

      // 4. Renderiza a resposta da IA na tela
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(
        "Ops! Meu cérebro deu um curto-circuito. Pode tentar enviar de novo?",
      );
      console.error("Erro ao conectar com o backend:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: "Histórico limpo! Como posso te ajudar agora? 🤖",
        timestamp: new Date(),
      },
    ]);
  };

  return {
    messages,
    isLoading,
    error,
    chatEndRef,
    sendMessage,
    clearChat,
  };
};
