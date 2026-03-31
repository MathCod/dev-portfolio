// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "// FRONTEND",
      items: ["React.js", "JavaScript ES6", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion"]
    },
    {
      title: "// BACKEND",
      items: ["Node.js", "Express", "MongoDB", "APIs REST", "NoSQL"]
    },
    {
      title: "// TOOLS",
      items: ["Git / GitHub", "VS Code", "Figma", "Agile / Scrum", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-syne font-bold mb-20 uppercase italic"
        >
          Compétences<span className="text-neon-purple">_</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-mono text-neon-purple text-xs tracking-[0.3em] mb-8 border-b border-neon-purple/20 pb-2">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((skill) => (
                  <li key={skill} className="group flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-gray-400 group-hover:text-light group-hover:translate-x-2 transition-all duration-300 font-light tracking-wide">
                      {skill}
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