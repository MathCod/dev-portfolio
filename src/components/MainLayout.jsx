import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const MainLayout = () => {
  return (
    /* On garde ton style de fond ici pour qu'il s'applique à tout le site */
    <div className="bg-slate-800 text-light min-h-screen selection:bg-neon-purple selection:text-dark">
      {/* Reset le scroll en haut à chaque changement de page */}
      <ScrollToTop />
      
      <Navbar />
      
      {/* L'Outlet est l'endroit où s'afficheront Banner, Projects, Cv, etc. */}
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;