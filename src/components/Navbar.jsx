import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'CV', to: '/cv' },
    { name: 'Projets', to: '/projets' },
    { name: 'Compétences', to: '/competences' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/50 font-bold backdrop-blur-md border-b border-white/20">
      <div className="max-w-8xl mx-auto px-6 h-20 flex justify-between items-center">

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-3xl font-syne font-bold tracking-tighter"
        >
          <img 
            src={Logo}
              width="500" 
              height="500" 
            alt="Berger Mathias - Portfolio Accueil" 
            className="w-15 h-15 object-contain hover:scale-110 transition-transform border border-white/20 rounded-full"
          />
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  `text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-neon-purple' : 'text-light hover:text-neon-purple'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* MOBILE MENU BTN */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}
          className="text-neon-purple"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-900 border-b border-white/5 px-6 pb-6 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.to} 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `text-lg font-syne ${isActive ? 'text-neon-purple' : 'text-light hover:text-neon-purple'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;