// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              /* On garde ta classe group et tes bordures */
              className="group bg-white/5 border border-white/20 hover:border-neon-purple/50 transition-all duration-500 overflow-hidden flex flex-col h-full rounded-2xl"
            >
              
              {/* 1. CONTENEUR IMAGE (En haut) */}
              <div className="relative aspect-video overflow-hidden border-b border-white/10">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                
                {/* OVERLAY GLASSMORPHISM AU SURVOL */}
                <div className="absolute inset-0 bg-dark/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-neon-purple hover:text-dark transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-neon-purple hover:text-dark transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* 2. CONTENU TEXTE (En bas) */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-neon-purple border border-neon-purple/30 px-2 py-1 uppercase tracking-widest rounded">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-syne font-bold mb-3 text-light group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                {/* TA LIGNE ANIMÉE EN BAS */}
                <div className="h-px w-0 group-hover:w-full bg-neon-purple transition-all duration-700 shadow-[0_0_8px_#bc13fe]"></div>
              </div>
            </motion.div>
          ))}
        </div>
    );
};

export default Card;