// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import banner from '../assets/Banner-profil.jpg';

const Banner = () => {
  return (
    <div className=''>
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <img 
              src={banner} 
              alt="Banière" 
              className="w-4/6 h-auto pt-10 rounded-[20vh] shadow-xl align-center mx-auto"
            />
          </motion.h1>
    </div>
  );
}

export default Banner;