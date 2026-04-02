// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Cv from './sections/Cv';
import Footer from './sections/Footer';
import Banner from './components/Banner';

function App() {
return (
    <div className="min-h-[300vh]
     bg-slate-800 text-light selection:bg-neon-purple selection:text-dark"
     >
      <Navbar />
      <main>
        <section id="home" className="h-300px pt-20">
          <Banner />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 font-mono text-dimmed uppercase tracking-[0.3em]"
          >
          </motion.p>
        </section>
        <Cv />
        <section>
          <Projects />
        </section>

        <section>
          <Skills />
        </section>
              
        <section>
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App