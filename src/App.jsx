// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
return (
    <div className="min-h-[300vh]
     bg-dark text-light selection:bg-neon-purple selection:text-dark"
     >
      <Navbar />
      <main>
        <section id="home" className="h-screen flex flex-col items-center justify-center p-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-syne font-extrabold text-center leading-none"
          >

            DEV-WEB <br /> 
            <span className="text-neon-purple">FULL-STACK</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 font-mono text-dimmed uppercase tracking-[0.3em]"
          >
          </motion.p>
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App