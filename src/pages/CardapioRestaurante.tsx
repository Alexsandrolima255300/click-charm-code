import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import menuRestaurante1 from "@/assets/menu-restaurante-1.jpg";
import menuRestaurante2 from "@/assets/menu-restaurante-2.jpg";
import menuRestaurante3 from "@/assets/menu-restaurante-3.jpg";
import menuRestaurante4 from "@/assets/menu-restaurante-4.jpg";

const menus = [
  { src: menuRestaurante1, title: "Menu Elegante" },
  { src: menuRestaurante2, title: "Cardápio Italiano" },
  { src: menuRestaurante3, title: "Menu Sushi" },
  { src: menuRestaurante4, title: "Cardápio Churrascaria" },
];

const CardapioRestaurante = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-8 max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Cardápios & Menus para Restaurantes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
        >
          Veja alguns dos cardápios e menus que já criamos para restaurantes de diversos estilos.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menus.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-border bg-card"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl bg-muted/50 border border-border text-center"
        >
          <h2 className="font-display text-xl font-bold mb-2">
            Quer um cardápio exclusivo para o seu restaurante?
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato com o designer e crie o menu perfeito para o seu negócio!
          </p>
          <a
            href="https://wa.me/5534991401087?text=Ol%C3%A1,%20tenho%20interesse%20no%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-8 py-4 rounded-lg text-base hover:brightness-110 transition-all"
          >
            Falar com o designer
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CardapioRestaurante;
