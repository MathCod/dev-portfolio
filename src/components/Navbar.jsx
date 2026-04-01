import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-8xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-3xl font-syne font-bold tracking-tighter"
        >
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-15 h-15
          object-contain
          hover:scale-110 transition-transform
          border border-white/20 rounded-full"
        />

          {/* D<span className="text-neon-purple">E</span>V */}
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-mono uppercase tracking-widest hover:text-neon-purple transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* MOBILE MENU BTN */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-neon-purple">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-transparent border-b border-white/5 px-6 pb-6 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-syne hover:text-neon-purple"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;