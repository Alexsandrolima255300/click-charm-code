import { motion } from "framer-motion";

const ContactSection = () => (
  <section className="px-6 py-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Contato</h2>
      <p className="font-body text-muted-foreground text-lg mb-8">
        Clique abaixo e fale direto comigo no WhatsApp
      </p>
      <a
        href="https://wa.me/5534991401087?text=Olá%2C%20tenho%20interesse%20em%20um%20site"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
      >
        Chamar no WhatsApp
      </a>
    </motion.div>
  </section>
);

export default ContactSection;
