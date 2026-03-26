import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
];

const PortfolioSection = () => (
  <section className="px-6 py-20">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Portfólio</h2>
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`Projeto ${i + 1}`}
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="w-72 md:w-80 h-52 object-cover rounded-xl border border-border"
        />
      ))}
    </div>
  </section>
);

export default PortfolioSection;
