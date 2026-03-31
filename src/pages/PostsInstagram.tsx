import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import post1 from "@/assets/post-instagram-1.jpg";
import post2 from "@/assets/post-instagram-2.jpg";
import post3 from "@/assets/post-instagram-3.jpg";
import post4 from "@/assets/post-instagram-4.jpg";

const posts = [
  { src: post1, title: "Post Restaurante" },
  { src: post2, title: "Post Barbearia" },
  { src: post3, title: "Post Academia" },
  { src: post4, title: "Post Loja de Roupas" },
];

const PostsInstagram = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Posts para Instagram
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-12 text-lg"
        >
          Confira alguns exemplos de posts que podemos criar para o seu negócio
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <img
                src={post.src}
                alt={post.title}
                loading="lazy"
                width={768}
                height={768}
                className="w-full aspect-square object-cover"
              />
              <div className="p-3 text-center">
                <span className="font-display text-sm font-semibold">{post.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-xl bg-muted/50 border border-border"
        >
          <h2 className="font-display text-2xl font-bold mb-3">
            Nos conte sua ideia, vamos fazer ela virar realidade!
          </h2>
          <p className="text-muted-foreground mb-6">
            Criamos posts personalizados para o seu negócio bombar nas redes sociais.
          </p>
          <a
            href="https://wa.me/5534991401087?text=Ol%C3%A1,%20tenho%20interesse%20no%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
          >
            Falar com o responsável
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PostsInstagram;
