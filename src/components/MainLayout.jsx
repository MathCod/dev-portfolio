import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col
    bg-slate-800 text-light selection:bg-neon-purple selection:text-dark">
      <ScrollToTop />
      <Navbar />
      <main className="grow pt-20 bg-slate-900">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;