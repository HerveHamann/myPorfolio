import Reservia from "./assets/img/Reservia.png";
import Ohmyfood from "./assets/img/Ohmyfood.png";
import GameOn from "./assets/img/GameOn.png";
import Fisheye from "./assets/img/Fisheye.png";
import Lespetitsplats from "./assets/img/Lespetitsplats.png";
import Billed from "./assets/img/Billed.png";
import Learnathome from "./assets/img/Learnathome.png";
import Kasa from "./assets/img/Kasa.png";
import Sportsee from "./assets/img/Sportsee.png";
import Argentbank from "./assets/img/Argentbank.png";
import Hrnet from "./assets/img/Hrnet.png";
import wolf from "./assets/img/wolf.svg";
const Data = [
  {
    id: 0,
    title: "Réservia",
    description: "Site de recherche d'hébergement et d'activité.",
    technologies: "html5, css3, git, github.",
    technique:
      "Intégration des maquettes desktop, tablette et mobile pour réaliser un site responsive. Utilisation de css flexbox.Versionning git & github.",
    image: Reservia,
    siteurl: "https://hervehamann.github.io/HerveHamann_2_20092021/",
    githuburl: "https://github.com/HerveHamann/HerveHamann_2_20092021",
  },
  {
    id: 1,
    title: "Ohmyfood",
    description: "Site 100% mobile répertoriant les menus de restaurants gastronomiques",
    technologies: "html5, css3, sass, git, github.",
    technique:
      "Intégration de la maquette mobile first. Responsive. Utilisation du préprocesseur Sass et ses fonctionnalités avancées pour réaliser les animations du site. Mise en place de structure de navigation entre les pages du site.",
    image: Ohmyfood,
    siteurl: "https://hervehamann.github.io/HerveHamann_3-13102021/",
    githuburl: "https://github.com/HerveHamann/HerveHamann_3-13102021",
  },
  {
    id: 2,
    title: "GameOn",
    description: "Réalisation d'une modale d'inscription pour un site de concours de jeux vidéo",
    technologies: "html5, css3, javascript, git, github.",
    technique: "Implémentation des actions de l'utilisateur en javascript, validation des éléments du formulaire.",
    image: GameOn,
    siteurl: "https://hervehamann.github.io/GameOn-website-FR/starterOnly/index.html",
    githuburl: "https://github.com/HerveHamann/GameOn-website-FR",
  },
  {
    id: 3,
    title: "Fisheye",
    description: "Site web pour une plateforme de photographes",
    technologies: "html5, css3, javascript, git, github.",
    technique:
      "Création complète du front end du site: Fetching de la data des photographes et leurs galeries, Factory patern, développement des fonctionnalités (modale de contact, like des photos, lightbox, tri de la galerie), Mise en place de l'accéssibilité du site (normes WCAG,label aria..)",
    image: Fisheye,
    siteurl: "https://hervehamann.github.io/HerveHamann_6_23112021/",
    githuburl: "https://github.com/HerveHamann/HerveHamann_6_23112021",
  },
  {
    id: 4,
    title: "Les petits plats",
    description: "Site de recherche de recettes de cuisine",
    technologies: "html5, css3, javascript, git, github.",
    technique:
      "Implémentation d'un algorythme de recherche permettant la recherche par titre, ingrédients,appareils, ustensilles,et tags. Deux versions de l'algorythme de recherche ont été crées (boucle for vs filter method ) pour une comparaison de performance à travers une fiche d'investigation de la fonctionnalité. ",
    image: Lespetitsplats,
    siteurl: "https://hervehamann.github.io/HerveHamann_7_21122021/",
    githuburl: "https://github.com/HerveHamann/HerveHamann_7_21122021",
  },
  {
    id: 5,
    title: "Billed",
    description: "Débugging et testing d'une application SaaS RH",
    technologies: " javascript, jest, git, github.",
    technique:
      "Débuffing de 4 bugs signalés, réalisation de tests unitaires et tests d'intégration pour atteindre une couverture globale de 90% du projet. Réalisation d'un plan de test end-to-end. ",
    image: Billed,
    siteurl: "https://hervehamann.github.io/Billed-app-FR-Front/",
    githuburl: "https://github.com/HerveHamann/Billed-app-FR-Front",
  },
  {
    id: 6,
    title: "Learn@home",
    description: "Définition des besoins d'une application de soutient scolaire",
    technologies: "figma, méthodologie agile, git, github.",
    technique:
      "Définition des besoins des utilisateurs via la création de user's stories, diagramme de cas d'usage, tableau Kanban, application de la méthodologie agile, réalisation de la maquette de l'application. ",
    image: Learnathome,
    siteurl: "https://www.figma.com/file/vccaSNrjea4ZZGng4H6Hs6/Learn%40Home?node-id=0%3A1",
    githuburl: "https://trello.com/b/HsUrIFLc/learnhome",
  },
  {
    id: 7,
    title: "Kasa",
    description: "Application de location d'appartement réalisée en React",
    technologies: "html5, css3, javascript, react, git, github.",
    technique:
      "Création des différents composants réutilisables, gestion des états des composants, utilisation de react router pour réaliser la navigation entre les pages",
    image: Kasa,
    siteurl: "https://hervehamann.github.io/kasa/",
    githuburl: "https://github.com/HerveHamann/HerveHamann_11_15032022",
  },

  {
    id: 8,
    title: "SportSee",
    description: "Tableau de bord d'analytics pour sportifs",
    technologies: "html5, css3, javascript, react, recharts.js, git, github.",
    technique:
      "Création des composants graphiques via la librairie recharts, utilisation du hook UseContext pour gérer la state globale et transmettre la data aux composants.Implémentation d'un systeme de switch entre données mockées et données de l'API. Ajout des proptypes aux composants. Rédaction de la documentation.",
    image: Sportsee,
    siteurl: "https://hervehamann.github.io/sportsee/",
    githuburl: "https://github.com/HerveHamann/HamannHerve_12_30032022",
  },
  {
    id: 9,
    title: "ArgentBank",
    description: "Application React permettant la connexion des utilisateurs à leurs données bancaires",
    technologies: "html5, css3, javascript, react,redux tool kit, git, github.",
    technique:
      "Utilisation de redux tool kit pour la gestion globale des données récupérées. Mise en place d'un CRUD pour la connexion (identification par token), réception et modification des données des utilisateurs. Modélisation des routes de l'API via swagger.",
    image: Argentbank,
    siteurl: "N'ayant pas travaillé sur le backend, le site actif n'est pas diponible. ",
    githuburl: "https://github.com/HerveHamann/HamannHerve_13_28042022",
  },
  {
    id: 10,
    title: "HRNet",
    description: "Migration d'une application Saas RH de Jquery vers React",
    technologies: "html5, css3, javascript, react, git, github.",
    technique:
      "Réalisation de l'ensemble des 4 composants react constituants l'application, transformation du composant date-picker en librairie et envoie sur npm pour le réimplanter dans l'application. Réalisation de test de performance Lighthouse pour apprécier le gain de performances.",
    image: Hrnet,
    siteurl: "https://hervehamann.github.io/hrnetdeployment/",
    githuburl: "https://github.com/HerveHamann/hrnet",
    npmpackage: "https://www.npmjs.com/package/datepicker-component-student-final",
  },
  {
    id: 11,
    title: "Piiquante",
    description: "API sécurisée pour une application d'avis gastronomiques",
    technologies: "html5, css3, javascript, node.js, mongodb, mongoose, git, github.",
    technique:
      "Réalisation du back end de l'application permettant la connexion, l'envoi et la récupération de données dont l'envoi d'image. Création et utilisation d'une bese de donnée no-sql via mongoose",
    image: "Image non disponible",
    siteurl: "N'ayant pas travaillé sur le frontend, le site actif n'est pas diponible. ",
    githuburl: "https://github.com/HerveHamann/backend-project",
  },
  {
    id: 12,
    title: "Portfolio",
    description: "Le site sur lequel vous naviguez actuellement!",
    technologies: "html5, css3, javascript, react, git, github.",
    technique:
      "Utilisation de react, les librairies particles.js et locomotive.js pour réaliser ce site de présentation de mes projets",
    image: wolf,
    siteurl: "",
    githuburl: "https://github.com/HerveHamann/myPorfolio",
  },
];
export default Data;
