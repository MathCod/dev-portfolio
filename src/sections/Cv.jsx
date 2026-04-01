// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Cv = () => {
  return (
    <section id="cv" className="py-24 px-6 md:px-20 border-t border-white/5 bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-syne font-bold mb-8 uppercase">
            Mon Parcours<span className="text-neon-purple">_</span>
          </h2>
          
          <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl mx-auto leading-relaxed">
            Vous souhaitez en savoir plus sur mes expériences et ma formation ? 
            Téléchargez mon curriculum vitae complet au format PDF.
          </p>

          {/* LE BOUTON DE TÉLÉCHARGEMENT */}
          <a 
            href="/CV.pdf"
            download="CV_Mathias_Berger.pdf" // Force le téléchargement avec ce nom
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-transparent border-2
            border-neon-purple text-neon-purple font-mono font-bold uppercase
            tracking-widest overflow-hidden transition-all duration-300"
          >
            {/* L'effet de remplissage au hover */}
            <div className="absolute inset-0 w-0 hover:bg-neon-purple transition-all duration-300 group-hover:w-full -z-10"></div>
            
            <span>Télécharger mon CV</span>
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          
          {/* Optionnel : Une petite lueur violette sous le bouton */}
          <div className="mt-4 opacity-20 blur-2xl h-10 w-40 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Cv;