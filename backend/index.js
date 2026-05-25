import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateAIResponse } from "./src/services/aiService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Habilita o CORS para o React conseguir fazer as requisições sem bloqueio de segurança
app.use(cors());
app.use(express.json());

// Rota POST que o Front-end vai chamar enviando a mensagem do usuário
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "A mensagem é obrigatória." });
  }

  try {
    const aiReply = await generateAIResponse(message);
    return res.json({ response: aiReply });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
});
