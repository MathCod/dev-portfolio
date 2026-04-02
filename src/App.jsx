// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Cv from './pages/Cv';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop'; // Petit bonus important

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Le parent avec Navbar/Footer
    children: [
      {
        path: "/",
        element: <Banner />, // Page d'accueil
      },
      {
        path: "/cv",
        element: <Cv />,
      },
      {
        path: "/projets",
        element: <Projects />,
      },
      {
        path: "/competences",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;






// function App() {
// return (
//     <div className="min-h-[300vh]
//      bg-slate-800 text-light selection:bg-neon-purple selection:text-dark"
//      >
//       <Navbar />
//       <main>
//         <section id="home" className="h-300px pt-20">
//           <Banner />
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-10 font-mono text-dimmed uppercase tracking-[0.3em]"
//           >
//           </motion.p>
//         </section>
//         <Cv />
//         <section>
//           <Projects />
//         </section>

//         <section>
//           <Skills />
//         </section>
              
//         <section>
//           <Contact />
//         </section>
//         <Footer />
//       </main>
//     </div>
//   )
// }

// export default App