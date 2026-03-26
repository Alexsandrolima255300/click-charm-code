import { motion } from "framer-motion";
import cardapioDigital from "@/assets/cardapio-digital.jpg";

const services = [
  {
    title: "Criação de Sites",
    desc: "Sites rápidos, modernos e feitos para vender.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Posts para Instagram",
    desc: "Design profissional para atrair clientes.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cardápios Digitais",
    desc: "Seu cardápio online acessível por celular.",
    img: cardapioDigital,
  },
];

const ServicesSection = () => (
  <section className="px-6 py-20">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Serviços</h2>
    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="bg-card rounded-xl overflow-hidden w-80 border border-border hover:border-primary/40 transition-colors shadow-lg"
        >
          <img src={s.img} alt={s.title} className="w-full h-44 object-cover" loading="lazy" />
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
            <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
