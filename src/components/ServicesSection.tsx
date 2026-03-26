import { motion } from "framer-motion";
import { Globe, Image, UtensilsCrossed } from "lucide-react";

const services = [
  { icon: Globe, title: "Sites", desc: "Sites completos para empresas e profissionais." },
  { icon: Image, title: "Posts", desc: "Posts para Instagram que chamam atenção." },
  { icon: UtensilsCrossed, title: "Cardápios", desc: "Cardápios digitais modernos." },
];

const ServicesSection = () => (
  <section className="px-6 py-20">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Serviços</h2>
    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="bg-card rounded-xl p-8 w-72 border border-border hover:border-primary/40 transition-colors shadow-lg shadow-background/50"
        >
          <s.icon className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
          <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
