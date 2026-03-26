import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="px-6 py-20 text-center max-w-3xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-4xl font-bold mb-6"
    >
      Sobre Mim
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="font-body text-muted-foreground text-lg leading-relaxed"
    >
      Eu crio sites, posts e cardápios digitais profissionais para o seu negócio crescer.
    </motion.p>
  </section>
);

export default AboutSection;
