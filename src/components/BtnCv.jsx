const BtnCv = () => {
  return (
    <a 
        href="./CV.pdf"
        download="CV_Mathias_Berger.pdf"
        target="_blank"
        rel="noreferrer"
        className="group relative inline-flex items-center gap-4 px-10 py-5 border-2 rounded-lg
        border-neon-purple text-neon-purple font-mono font-bold uppercase tracking-widest overflow-hidden transition-colors duration-300 hover:text-dark"
        >

        <div 
            className="absolute top-0 left-0 h-full w-0 bg-neon-purple transition-all duration-500 ease-out group-hover:w-full"
        />
        
        <span className="relative z-10">
            Télécharger mon CV
        </span>
        
        <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="relative z-10 group-hover:translate-y-1 transition-transform duration-300"
            >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        </a>
    );
};

export default BtnCv;