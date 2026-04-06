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
    description: "Application de location immobilière avec gestion de routing complexe.",
    link: "https://projet-kasa-lilac.vercel.app/",
    github: "https://github.com/MathCod/projet-kasa"
  },
  {
    id: 2,
    title: "Mon Vieux Grimoire",
    status: "completed",
    image: grimoireImg,
    category: "Node.js / Express",
    description: "Développement d'un back-end sécurisé pour un site de notation de livres.",
    link: "https://mon-vieux-grimoire-hazel.vercel.app/",
    github: "https://github.com/MathCod/mon-vieux-grimoire"
  },
  {
    id: 3,
    title: "Sophie Bluel",
    status: "completed",
    image: sophieBluelImg,
    category: "JavaScript / API",
    description: "Création d'une page dynamique pour une architecte d'intérieur.",
    link: "https://portfolio-architecte-sophie-bluel-virid.vercel.app/index.html",
    github: "https://github.com/MathCod/Portfolio-architecte-sophie-bluel"
  },
  {
    id: 4,
    title: "Booki",
    status: "completed",
    image: bookiImg,
    category: "JavaScript / API",
    description: "Création d'une page dynamique pour une architecte d'intérieur.",
    link: "https://mathcod.github.io/Projet-Booki/",
    github: "https://github.com/MathCod/Projet-Booki"
  },
  {
    id: 5,
    title: "La Valée d'Ombrelune",
    status: "progress",
    image: ombreluneImg,
    category: "JavaScript / API",
    description: "Création d'une page dynamique pour une architecte d'intérieur.",
    link: "https://mathcod.github.io/Projet-Booki/",
    github: "https://github.com/MathCod/Projet-Booki"
  }
];