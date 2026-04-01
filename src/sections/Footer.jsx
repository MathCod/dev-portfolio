// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-white/5 pt-10 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : LOGO & STATUS */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-syne font-bold mb-6">
              BERGER<span className="text-neon-purple">_</span>Mathias
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-purple"></span>
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
                Disponible pour de nouveaux projets
              </p>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Développeur Front-end passionné par la création d'expériences numériques 
              uniques et performantes. Basé dans les Landes.
            </p>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div>
            <h4 className="font-mono text-neon-purple text-xs font-bold mb-6 uppercase tracking-[0.2em]">Menu</h4>
            <ul className="space-y-4 font-syne text-sm">
              <li><a href="#home" className="hover:text-neon-purple transition-colors">Accueil</a></li>
              <li><a href="#projects" className="hover:text-neon-purple transition-colors">Projets</a></li>
              <li><a href="#skills" className="hover:text-neon-purple transition-colors">Compétences</a></li>
              <li><a href="#contact" className="hover:text-neon-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLONNE 3 : SOCIALS */}
          <div>
            <h4 className="font-mono text-neon-purple text-xs font-bold mb-6 uppercase tracking-[0.2em]">Social</h4>
            <ul className="space-y-4 font-syne text-sm">
              <li><a href="#" className="hover:text-neon-purple transition-colors italic">GitHub</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors italic">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* LIGNE FINALE : COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            © {currentYear} — CONSTRUIT AVEC REACT & TAILWIND 4
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-neon-purple transition-colors"
          >
            Retour en haut
            <svg 
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;