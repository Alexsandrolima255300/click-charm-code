import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import salonRoger from "@/assets/salon-roger.jpg";

const sites = [
  {
    title: "Roger Studio Hair",
    desc: "Site profissional para barbearia/salão de beleza.",
    url: "https://gamma.app/docs/Roger-Studio-Hair-98vqsnp73tn3j9c",
    img: salonRoger,
  },
  {
    title: "Vinicius Churrasqueiro",
    desc: "Site profissional para churrasqueiro.",
    url: "https://gamma.app/docs/Vinicius-Churrasqueiro-kzwdhpxf7z5tviv",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  },
];

const SitesPortfolio = () => (
  <div className="min-h-screen bg-background text-foreground font-body">
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-display text-sm">
        <ArrowLeft size={16} /> Voltar
      </Link>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Sites Criados</h1>
      <p className="text-muted-foreground mb-10 max-w-xl">Confira alguns dos sites profissionais que já desenvolvi para meus clientes.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sites.map((site, i) => (
          <motion.a
            key={site.title}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors shadow-lg block"
          >
            <img src={site.img} alt={site.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl font-semibold mb-1 flex items-center gap-2">
                {site.title}
                <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-muted-foreground text-sm">{site.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default SitesPortfolio;
