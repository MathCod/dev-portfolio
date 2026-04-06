// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
    .then(() => {
        setStatus('success');
        e.target.reset(); // Vide les champs
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label
                  className="font-mono text-[15px] uppercase tracking-widest text-neon-purple ml-2"
                  htmlFor="from_name"
                  >Votre nom</label>
                <input
                  id="from_name"
                  name="from_name"
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-400 text-white"
                />
            </div>
            <div className="space-y-2">
                <label
                  htmlFor="from_email"
                  className="font-mono text-[15px] uppercase tracking-widest text-neon-purple ml-2"
                  >Votre email</label>
                <input
                  id="from_email"
                  name="from_email"
                  required
                  type="email" 
                  placeholder="john-doe@gmail.com"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-400 text-white"
                />
            </div>
        </div>

        <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-mono text-[15px] uppercase tracking-widest text-neon-purple ml-2"
              >Votre message</label>
            <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Bonjour Mathias, j'aimerais discuter d'un projet..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-400 resize-none text-white"
            ></textarea>
        </div>

        {/* BOUTON DYNAMIQUE SELON LE STATUS */}
        <motion.button
          disabled={status === 'sending'}
          whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
          whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
          className={`w-full py-5 font-syne font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 ${
            status === 'sending' 
              ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
              : 'bg-neon-purple text-white shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.5)]'
          }`}
        >
          {status === 'sending' ? (
            <span>Chargement...</span>
          ) : (
            <>
              <span aria-hidden="true">🚀</span>
              Envoyer le message
            </>
          )}
        </motion.button>

        {/* MESSAGES DE RETOUR */}
        {status === 'success' && (
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-green-400 font-mono text-center text-sm">
            ✓ Message envoyé avec succès !
          </motion.p>
        )}
        {status === 'error' && (
          <p className="text-red-400 font-mono text-center text-sm">
            ✕ Erreur. Réessayez ou contactez-moi par email.
          </p>
        )}
    </form>
  );
};

export default Form;