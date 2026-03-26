import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
}

function getResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("preço") || lower.includes("valor"))
    return "Os valores variam, mas o orçamento é gratuito. Clique no WhatsApp!";
  if (lower.includes("site"))
    return "Criamos sites profissionais e personalizados para seu negócio.";
  if (lower.includes("prazo"))
    return "O prazo médio é de 2 a 5 dias.";
  if (lower.includes("pagamento"))
    return "Você só paga depois de ver o projeto pronto!";
  if (lower.includes("post"))
    return "Criamos posts profissionais para redes sociais que aumentam suas vendas.";
  if (lower.includes("cardápio") || lower.includes("cardapio"))
    return "Fazemos cardápios digitais modernos e fáceis de acessar.";
  return "Clique no WhatsApp para falar comigo.";
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    const botMsg: Message = { sender: "bot", text: getResponse(input) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-3 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between bg-primary px-4 py-3">
              <span className="font-display font-semibold text-primary-foreground">Atendimento 💬</span>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 h-72 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <p className="text-muted-foreground text-sm font-body text-center mt-8">
                  Olá! Como posso ajudar?
                </p>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <span
                    className={`inline-block px-3 py-2 rounded-xl text-sm font-body max-w-[80%] ${
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="flex items-center border-t border-border">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Digite aqui..."
                className="flex-1 bg-transparent px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button onClick={send} className="px-4 text-primary hover:text-primary/80">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatWidget;
