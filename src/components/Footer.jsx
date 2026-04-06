// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <FaGithub />, 
      href: 'https://github.com/MathCod',
      color: '#bc13fe' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/mathias-berger-8b04b43a6/',
      color: '#0077b5'
    },
  ];

  return (
    <footer className="bg-dark border-t border-white/10 pt-5 pb-5 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-xl font-syne font-bold mb-2 uppercase italic">
          <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>réseaux sociaux_</span>
        </h3>

        {/* SECTION LOGOS SOCIAUX ANIMÉS */}
        <div className="flex gap-10 mb-5">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              aria-label={`Visiter mon profil ${social.name}`}
              target="_blank"
              rel="noopener noreferrer"
              // L'animation de soulèvement et de taille
              whileHover={{ y: -8, scale: 1.2 }}
              className="relative group p-4"
            >
              <div className="relative z-10 text-4xl text-gray-400 group-hover:text-neon-purple transition-colors duration-300">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="w-full pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-[12px] text-gray-300 uppercase tracking-widest">
            © {currentYear} — CONSTRUIT AVEC REACT & TAILWIND | MATHIAS BERGER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;