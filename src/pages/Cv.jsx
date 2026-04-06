// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BtnCv from '../components/BtnCv';

const Cv = () => {
  return (
    <section id="cv" className="py-30 px-6 md:px-20 bg-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            >
          <h1 className="text-4xl font-syne font-bold mb-8 uppercase italic">
            <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>Mon Parcours_</span>
          </h1>
          
          <p className="text-gray-200 font-mono text-1xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Vous souhaitez en savoir plus sur mes expériences et ma formation ? 
            Téléchargez mon curriculum vitae complet au format PDF.
          </p>
          <BtnCv />
        </motion.div>

      </div>
    </section>
  );
};

export default Cv;