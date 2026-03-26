import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="font-display text-4xl md:text-6xl font-bold text-center mb-6 leading-tight"
    >
      Criação de Sites{" "}
      <span className="text-primary">Profissionais</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="font-body text-muted-foreground text-lg md:text-xl text-center max-w-xl mb-10"
    >
      Sites modernos, rápidos e que vendem por você
    </motion.p>
    
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      href="https://wa.me/5534991401087"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
    >
      Falar no WhatsApp
    </motion.a>
  </section>
);

export default HeroSection;
