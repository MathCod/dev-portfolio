// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "// FRONTEND",
      items: ["React.js", "JavaScript", "Tailwind CSS", "Sass", "HTML5 / CSS3", "Framer Motion", "React Router", "Responsive Design", "SEO"]
    },
    {
      title: "// BACKEND",
      items: ["Node.js", "Express", "APIs REST", "MongoDB", "NoSQL"]
    },
    {
      title: "// TOOLS",
      items: ["Git / GitHub", "VS Code", "Figma", "Agile / Scrum", "Vite", "Postman", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-30 px-6 md:px-20 border-t border-white/5 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-syne font-bold mb-20 uppercase italic"
        >
          <span className='bg-linear-to-r from-light to-neon-purple bg-clip-text text-transparent'>Compétences_</span>
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
              <h3 className="font-mono text-neon-purple text-2xl tracking-[0.3em] mb-8 border-b border-neon-purple/20 pb-2">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((skill) => (
                  <li key={skill} className="group flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-gray-300 text-2xl group-hover:text-light group-hover:translate-x-2 transition-all duration-300 font-light tracking-wide">
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