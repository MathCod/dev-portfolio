# 🚀 Portfolio - Mathias Berger

<img src="./public/og-image.webp" alt="Aperçu du portfolio" width="100%">

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://dev-portfolio-phi-nine.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Projet de fin d'étude - Parcours Développeur Web (OpenClassrooms)**.  
> Une vitrine numérique moderne, performante et accessible, conçue pour mettre en avant mes compétences en développement Front-end et mes réalisations techniques.

---

## ✨ Aperçu
Le portfolio adopte une esthétique **"Dark & Neon"** (Anthracite / Violet Néon) inspirée des tendances "Creative Dev" de 2024/2025.

- **🎨 Design :** Minimaliste, typographie forte (Syne), et animations fluides.
- **📱 Responsive :** Expérience optimisée du mobile au desktop 4K.
- **⚡ Performance :** Score Lighthouse proche de 100 dans toutes les catégories.

---

## 🛠️ Stack Technique

- **Frontend :** [React 18](https://reactjs.org/) avec [Vite.js](https://vitejs.dev/)
- **Style :** [Tailwind CSS v4](https://tailwindcss.com/) (Mode configuration CSS-first)
- **Animations :** [Framer Motion](https://www.framer.com/motion/)
- **Routing :** [React Router 6.4+](https://reactrouter.com/) (Data API & MainLayout)
- **Icônes :** [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Contact :** [EmailJS](https://www.emailjs.com/) (Gestion de formulaire Serverless)

---

## 🚀 Fonctionnalités Clés

- **Navigation Dynamique :** Utilisation d'un `MainLayout` avec `<Outlet />` pour des transitions de pages instantanées.
- **Grille de Projets :** Affichage dynamique via un fichier de données centralisé, avec effets de survol (glassmorphism) sur desktop et boutons d'actions dédiés sur mobile.
- **Formulaire Interactif :** Validation en temps réel et envoi sécurisé de messages avec retours utilisateurs (succès/erreur).
- **SEO & Accessibilité :** Optimisation sémantique (H1-H3), attributs ARIA, contrastes validés par WAVE et Lighthouse.

---

## 📈 Performance (Lighthouse)

| Performance | Accessibilité | Best Practices | SEO |
| :--- | :--- | :--- | :--- |
| 🟢 100 | 🟢 95 | 🟢 100 | 🟢 100 |

---

## 💻 Installation Locale

1. **Cloner le dépôt**
```bash
git clone https://github.com/MathCod/dev-portfolio
cd dev-portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

**Variables d'environnement**

Créez un fichier .env à la racine et ajoutez vos clés EmailJS :
```
VITE_EMAILJS_SERVICE_ID=votre_id
VITE_EMAILJS_TEMPLATE_ID=votre_id
VITE_EMAILJS_PUBLIC_KEY=votre_cle
```
3. **Lancer le serveur de développement**

```bash
npm install
```

📂 **Structure du Projet**
```
src/
 ├── assets/          # Images optimisées (WebP) et Logo
 ├── components/      # Composants réutilisables (Navbar, Footer, Form...)
 ├── data/            # Fichiers de données (projects.js)
 ├── pages/           # Vues principales (Home, Projects, Contact, CV...)
 └── App.jsx          # Configuration des routes (Data Router)
```
👤 **Contact**
Mathias Berger
📍 Landes (40), France
💼 [LinkedIn](https://www.linkedin.com/in/mathias-berger-8b04b43a6/) | 🐙 [GitHub](https://github.com/MathCod)
📧 mathias.codage@gmail.com

Réalisé dans le cadre de la formation OpenClassrooms.