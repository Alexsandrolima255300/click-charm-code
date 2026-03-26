import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import cardapioBurguer from "@/assets/cardapio-burguer.jpg";

const portfolioItems = [
  {
    src: cardapioBurguer,
    title: "Cardápio Burguer",
    category: "Cardápio",
    link: "/cardapio-burguer",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    title: "Cardápio Restaurante",
    category: "Cardápio",
    link: "/cardapio-restaurante",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    title: "Cardápio Gourmet",
    category: "Cardápio",
    link: "/cardapio-gourmet",
  },
  {
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    title: "Post Instagram",
    category: "Social Media",
  },
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    title: "Site Profissional",
    category: "Website",
    link: "/sites",
  },
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState<typeof portfolioItems[0] | null>(null);
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Portfólio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-xl overflow-hidden border border-border cursor-pointer"
            onClick={() => {
              if ('link' in item && item.link) {
                navigate(item.link as string);
              } else {
                setSelected(item);
              }
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
              <span className="text-xs font-body uppercase tracking-widest text-primary">{item.category}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-display font-semibold px-5 py-2 rounded-lg text-sm hover:brightness-110 transition-all">
                Ver mais
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl p-2 bg-card border-border">
          {selected && (
            <div>
              <img
                src={typeof selected.src === "string" && selected.src.startsWith("http") ? selected.src.replace("w=600", "w=1200") : selected.src}
                alt={selected.title}
                className="w-full rounded-lg object-cover max-h-[60vh]"
              />
              <div className="p-4">
                <span className="text-xs font-body uppercase tracking-widest text-primary">{selected.category}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{selected.title}</h3>
                {selected.category === "Cardápio" && (
                  <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Gostou desse cardápio? Entre em contato e peça o seu personalizado!
                    </p>
                    <a
                      href="https://wa.me/5534991401087?text=Ol%C3%A1,%20tenho%20interesse%20no%20seu%20servi%C3%A7o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition-all"
                    >
                      Falar com o desenvolvedor
                    </a>
                  </div>
                )}
                {selected.category === "Social Media" && (
                  <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Entre em contato com o desenvolvedor de posts e fale sua ideia!
                    </p>
                    <a
                      href="https://wa.me/5534991401087?text=Ol%C3%A1,%20tenho%20interesse%20no%20seu%20servi%C3%A7o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition-all"
                    >
                      Falar com o desenvolvedor
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
