// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Rocket } from 'lucide-react'; // On utilise Lucide pour la simplicité

const About = () => {
  return (
    <section id="about" className="py-30 px-6 md:px-20 bg-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* PARTIE GAUCHE : TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-8 uppercase italic">
            <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>A propos de moi_</span>
          </h2>

          <div className="space-y-6 font-light text-gray-300 leading-relaxed text-lg">
            <p>
              Passionné par le numérique depuis toujours, j'ai pris le tournant d'une 
              <span className="text-light font-medium"> reconversion professionnelle </span> 
              pour donner vie à mes idées à travers le code. 
            </p>
            <p>
              Ce changement de cap m'a permis de développer une grande adaptabilité et une 
              soif d'apprendre constante. Aujourd'hui, je me spécialise dans l'écosystème 
              <span className="text-neon-purple font-mono"> React.js </span> pour concevoir 
              des interfaces modernes et intuitives.
            </p>
          </div>

          {/* BADGES INFOS */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-lg">
              <MapPin className="text-neon-purple" size={20} />
              <span className="font-mono text-xs uppercase tracking-widest text-light">Landes (40), France</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-lg">
              <Rocket className="text-neon-purple" size={20} />
              <span className="font-mono text-xs uppercase tracking-widest text-light">OpenClassrooms Graduate</span>
            </div>
          </div>
        </motion.div>

        {/* PARTIE DROITE : VISUEL DÉCORATIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Un cadre stylisé qui rappelle le style "Creative Dev" */}
          <div className="aspect-square border-2 border-neon-purple/20 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
            {/* Lueur d'arrière-plan */}
            <div className="absolute inset-0 bg-neon-purple/5 blur-3xl group-hover:bg-neon-purple/10 transition-colors"></div>
            
            <div className="text-center z-10">
              <span className="text-8xl md:text-7xl font-syne font-black text-white/5 absolute -top-2 left-0 select-none">ERROR404//</span>
              <span className="text-8xl md:text-7xl font-syne font-black text-white/5 absolute -bottom-1 right-0 select-none">npm install//</span>

              <p className="text-2xl font-syne font-bold leading-tight">
                "Le code est <br /> un voyage <br /> <span className="text-neon-purple">passionné.</span>"
              </p>
            </div>
            
            {/* Décoration angle */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-purple"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-neon-purple"></div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;