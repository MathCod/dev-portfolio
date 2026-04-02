// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-30 px-6 md:px-20 bg-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-syne font-extrabold mb-12 uppercase leading-none">
            UN PROJET ?<br />
            <span className="text-neon-purple md:text-4xl">DISCUTONS-EN.</span>
          </h2>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:mathias.codage@gmail.com" 
              className="text-xl md:text-2xl font-mono hover:text-cyan-400 transition-colors border-b border-white/10 pb-2"
            >
              mathias.codage@gmail.com
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;