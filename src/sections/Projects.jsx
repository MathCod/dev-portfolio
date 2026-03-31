// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-syne font-bold mb-20 uppercase italic"
        >
          Projets<span className="text-neon-purple">_</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 hover:border-neon-purple/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-neon-purple border border-neon-purple/30 px-2 py-1 uppercase">
                  {project.category}
                </span>
                <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                   <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-neon-purple">[ Github ]</a>
                   <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-neon-purple">[ Live ]</a>
                </div>
              </div>
              
              <h3 className="text-2xl font-syne font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm font-light mb-6">{project.description}</p>
              
              <div className="h-px w-0 group-hover:w-full bg-neon-purple transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;