// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Projects = () => {
  return (
    <section id="projects" className="py-30 px-6 md:px-20 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-syne font-bold mb-20 uppercase italic"
        >
          <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>Projets_</span>
        </motion.h2>
        
        <Card />
        
      </div>
    </section>
  );
};

export default Projects;