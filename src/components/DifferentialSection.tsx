import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const DifferentialSection = () => (
  <section className="px-6 py-20 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto bg-card border border-primary/20 rounded-2xl p-10 shadow-lg"
    >
      <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
      <h2 className="font-display text-3xl font-bold mb-4">Diferencial</h2>
      <p className="font-body text-muted-foreground text-lg">
        Você só paga depois de ver o projeto pronto!
      </p>
    </motion.div>
  </section>
);

export default DifferentialSection;
