// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { FcApproval, FcBiotech } from "react-icons/fc";
import { VscCode } from 'react-icons/vsc';
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiVite, 
  SiSass,
  SiPostman, 
  SiVercel, 
  SiHtml5,
  SiReactrouter
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
    title: "// FRONTEND",
    items: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Sass", icon: <SiSass className="text-[#a743a9]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#c2530e]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#244cfe]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-light" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#992201]" /> },
      { name: "Responsive Design", icon: <FcBiotech /> },
      { name: "SEO", icon: <FcApproval /> },
    ]
  },
  {
    title: "// BACKEND",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-light" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "NoSQL", icon: <FaDatabase className="text-[#0060f9]" /> },
    ]
  },
  {
    title: "// TOOLS",
    items: [
      { name: "Git", icon: <SiGit className="text-[#F24E1E]" />},
      { name: "GitHub", icon: <SiGithub className="text-light" /> },
      { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-light" /> },
    ]
  }
];

  return (
    <section id="skills" className="py-30 px-6 md:px-20 border-t border-white/5 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-syne font-bold mb-20 uppercase italic"
        >
          <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>Compétences_</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-neon-purple text-2xl tracking-[0.3em] mb-8 border-b border-neon-purple/20 pb-2">
                {cat.title}
              </h2>
              <ul className="space-y-4">
                {cat.items.map((skill) => (
                  <li key={skill.name} className="group flex items-center gap-3">
                    {/* L'icône avec une petite animation au survol */}
                    <span className="text-2xl group-hover:scale-120 group-hover:text-neon-purple transition-all duration-300">
                      {skill.icon}
                    </span>
                    
                    <span className="text-gray-400 group-hover:text-neon-purple group-hover:translate-x-1 transition-all duration-300 font-light tracking-wide text-xl">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;