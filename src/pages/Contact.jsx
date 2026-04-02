// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Form from '../components/Form';

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-syne font-extrabold mb-12 uppercase leading-none">
          UN PROJET ?<br />
          <span className="text-neon-purple md:text-4xl">DISCUTONS-EN.</span>
        </h2>

        <div className="flex flex-col items-center gap-8">
          <a 
            href="mailto:mathias.codage@gmail.com" 
            className="text-xl md:text-2xl font-mono hover:text-neon-purple transition-colors border-b border-white/10 pb-2"
          >
            mathias.codage@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-4xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-4xl shadow-2xl backdrop-blur-sm"
      >
        <Form />
      </motion.div>
    </section>
  );
};

export default Contact;