import kasaImg from '../assets/Projets/Kasa.webp';
import grimoireImg from '../assets/Projets/Grimoire.webp';
import bookiImg from '../assets/Projets/Booki.webp';
import sophieBluelImg from '../assets/Projets/Sophie.webp';
import ombreluneImg from '../assets/Projets/Ombrelune.webp';

export const projects = [
  {
    id: 1,
    title: "Kasa",
    status: "completed",
    image: kasaImg,
    category: "React / Sass",
    description: "Création d'une plateforme de location immobilière moderne avec React. Développement d'une interface fluide utilisant React Router pour la navigation, gestion de composants réutilisables complexes et intégration d'un design responsive rigoureux via Sass.",
    link: "https://projet-kasa-lilac.vercel.app/",
    github: "https://github.com/MathCod/projet-kasa"
  },
  {
    id: 2,
    title: "Mon Vieux Grimoire",
    status: "completed",
    image: grimoireImg,
    category: "Node.js / Express / MongoDB",
    description: "Développement du Back-End d'un site de notation de livres. Mise en place d'une architecture API REST sécurisée avec Node.js et Express, gestion de base de données NoSQL (MongoDB), et optimisation du traitement des images (Multer/Sharp) pour améliorer les performances.",
    link: "https://mon-vieux-grimoire-hazel.vercel.app/",
    github: "https://github.com/MathCod/mon-vieux-grimoire"
  },
  {
    id: 3,
    title: "Sophie Bluel",
    status: "completed",
    image: sophieBluelImg,
    category: "JavaScript / API",
    description: "Dynamisation du portfolio d'une architecte d'intérieur en JavaScript pur. Interaction avec une API REST pour l'affichage dynamique des travaux, création d'une interface d'administration pour la gestion des médias et développement d'une modale de gestion de contenu interactive.",
    link: "https://portfolio-architecte-sophie-bluel-virid.vercel.app/index.html",
    github: "https://github.com/MathCod/Portfolio-architecte-sophie-bluel"
  },
  {
    id: 4,
    title: "Booki",
    status: "completed",
    image: bookiImg,
    category: "HTML / CSS",
    description: "Intégration de la page d'accueil d'une agence de voyage. Réalisation d'une interface Responsive Design 'Mobile First' en HTML5 et CSS3 pur (Flexbox et Grid), sans framework, en respectant scrupuleusement une maquette Figma haute fidélité.",
    link: "https://mathcod.github.io/Projet-Booki/",
    github: "https://github.com/MathCod/Projet-Booki"
  },
  {
    id: 5,
    title: "La Valée d'Ombrelune",
    status: "progress",
    image: ombreluneImg,
    category: "Projet Personnel - React",
    description: "Conception et développement d'un site vitrine immersif pour un élevage de Bergers Américains Miniatures. Focus sur une expérience utilisateur (UX) élégante, avec une gestion dynamique des portées et des galeries photos, mettant en avant le design et la performance sous React.",
    link: "https://la-vallee-dombrelune.vercel.app/",
    github: "https://github.com/MathCod/la-vallee-dombrelune"
  }
];