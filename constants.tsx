
import React from 'react';
import {
  ShieldCheck,
  HeartPulse,
  Activity,
  Eye,
  BellRing,
  Cpu,
  Zap,
  Network,
  Smartphone,
  CheckCircle2,
  TrendingDown,
  Clock,
  Coins,
  Layers,
  HardHat,
  Train,
  Building2,
  ShoppingBag
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'Solutions & IA', href: '#solutions' },
  { label: 'Abonnement', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const BENEFITS = [
  {
    title: 'Réaction en < 1 seconde',
    description: "Détection et alerte instantanée pour minimiser le temps passé au sol, crucial pour les seniors et les blessés de chantier.",
    icon: <Zap className="w-10 h-10 text-[#601344]" />
  },
  {
    title: 'Optimisation des Risques',
    description: "Réduisez les accidents du travail et les complications médicales grâce à une vigilance continue par IA.",
    icon: <ShieldCheck className="w-10 h-10 text-[#601344]" />
  },
  {
    title: 'Multi-Secteurs Connectés',
    description: "Une plateforme unique pour gérer la sécurité de vos cliniques, usines ou espaces commerciaux.",
    icon: <Network className="w-10 h-10 text-[#601344]" />
  }
];

export const FEATURES = [
  {
    title: 'Santé & Domicile',
    description: 'Protection discrète pour seniors : détection de chutes de lit et malaises sans capteurs portés.',
    icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
    image: "/images/images (1).jpg"
  },
  {
    title: 'Industrie & BTP',
    description: 'Vigilance en zone critique : chutes de hauteur, glissades sur chantier et détresse de travailleurs isolés.',
    icon: <HardHat className="w-8 h-8 text-rose-500" />,
    image: "/images/fall_btp.jpg"
  },
  {
    title: 'Espaces Publics',
    description: 'Smart City : détection d\'incidents dans les gares (escalators) et centres commerciaux pour intervention rapide.',
    icon: <Building2 className="w-8 h-8 text-rose-500" />,
    image: "/images/fall_mall.jpg"
  }
];

export const ARCHITECTURE = [
  {
    title: "Analyse Optique Native",
    description: "Utilisation des flux CCTV existants pour une couverture totale sans installation lourde.",
    icon: <Eye className="w-8 h-8" />
  },
  {
    title: "IA Neuronale v4.0",
    description: "Modèles capables de distinguer une chute réelle d'un mouvement normal dans des foules denses.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "Alertes Intelligentes",
    description: "Notifications vers PC Sécurité, mobiles des agents ou centres d'urgence locaux.",
    icon: <Smartphone className="w-8 h-8" />
  }
];

export const TECH_STACK = [
  { brand: "NVIDIA", product: "Inférence Multi-Flux Quadro RTX™" },
  { brand: "Intel", product: "Architecture Edge Core i7/Xeon" },
  { brand: "Dell", product: "Infrastructures certifiées Sécurité" },
  { brand: "Arrow", product: "Partenaire Solutions Intelligentes" }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Surveiller',
    desc: 'Analyse continue des flux vidéo sur tout le périmètre défini.',
    icon: <Eye className="w-10 h-10" />,
    color: 'bg-[#601344]'
  },
  {
    title: 'Détecter',
    desc: 'L\'IA identifie instantanément une posture de chute ou de malaise.',
    icon: <Activity className="w-10 h-10" />,
    color: 'bg-emerald-600'
  },
  {
    title: 'Qualifier',
    desc: 'Validation automatique par pattern neuronal pour éviter les fausses alertes.',
    icon: <ShieldCheck className="w-10 h-10" />,
    color: 'bg-[#0077C8]'
  },
  {
    title: 'Secourir',
    desc: 'Alerte immédiate transmise aux secours avec localisation précise.',
    icon: <BellRing className="w-10 h-10" />,
    color: 'bg-rose-500'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Aman Particulier',
    price: '1000 DZD',
    description: 'Protection pour seniors à domicile. La sécurité essentielle au meilleur prix.',
    features: [
      'Analyse chute 24/7',
      'Alertes Famille via App/SMS',
      'Respect total de l\'intimité',
      'Installation simplifiée'
    ],
    buttonText: 'Sécuriser ma famille',
    plan: 'familial'
  },
  {
    name: 'Aman Business',
    price: '5000 DZD',
    description: 'Solution pour EHPAD, Cliniques et PME Industrielles.',
    features: [
      'Multi-utilisateurs / Staff',
      'Tableau de bord de suivi',
      'Intégration Appel Malade',
      'Analyse zones à risque élevé',
      'Support Prioritaire'
    ],
    buttonText: 'Équiper mon site',
    plan: 'professional',
    popular: true
  },
  {
    name: 'Aman Enterprise',
    price: 'Sur Devis',
    description: 'Grands sites : Gares, Malls, Industries Lourdes, Smart Cities.',
    features: [
      'Flux illimités (Multi-sites)',
      'Intégration VMS Professionnelle',
      'Analyse prédictive de foule',
      'Maintenance sur site 24/7',
      'API personnalisée'
    ],
    buttonText: 'Contacter un expert',
    plan: 'enterprise'
  }
];

export const FAQS = [
  {
    question: "Comment AmanVision détecte-t-il une chute ?",
    answer: "Notre IA analyse les flux vidéo en temps réel pour identifier les points clés du corps humain (squelette numérique). Elle reconnaît instantanément les changements de posture caractéristiques d'une chute, même dans des environnements complexes."
  },
  {
    question: "Quel type de caméras faut-il installer ?",
    answer: "Le système est agnostique : il fonctionne avec la plupart des caméras CCTV existantes (IP, analogiques converties). Aucune installation de capteurs portables sur les personnes n'est nécessaire."
  },
  {
    question: "Est-ce que le système enregistre les visages ou l'identité ?",
    answer: "Non. Pour garantir la vie privée (RGPD), nous ne traitons que les formes et les mouvements (poses). Aucun enregistrement permanent n'est effectué et aucune reconnaissance faciale n'est utilisée."
  },
  {
    question: "Le système fonctionne-t-il dans l'obscurité ?",
    answer: "Oui, à condition que vos caméras disposent d'une vision nocturne infra-rouge. L'IA est entraînée pour interpréter les flux noir et blanc issus des capteurs IR."
  },
  {
    question: "Quel est le délai réel d'une alerte ?",
    answer: "La détection se fait en moins de 0.8 seconde. L'alerte est transmise instantanément via notre plateforme Cloud vers vos mobiles ou PC de sécurité."
  },
  {
    question: "Est-ce adapté aux chantiers BTP ou milieux industriels ?",
    answer: "Absolument. AmanVision ignore les mouvements de machines et d'outils pour se concentrer uniquement sur les postures humaines et les situations de détresse (travailleur isolé, malaise)."
  },
  {
    question: "Que se passe-t-il en cas de coupure de courant ou internet ?",
    answer: "Nous proposons des passerelles Edge-IA locales qui continuent l'analyse même sans internet. Pour le courant, l'utilisation d'un onduleur standard protège le matériel de détection."
  },
  {
    question: "Puis-je l'installer à mon domicile pour un proche ?",
    answer: "Oui, notre offre 'Aman Particulier' est précisément conçue pour les seniors vivant seuls. Elle permet une surveillance bienveillante sans intrusion dans l'intimité."
  },
  {
    question: "Le système peut-il distinguer un animal d'une personne ?",
    answer: "Oui. L'algorithme est entraîné à filtrer les animaux domestiques (chiens, chats) et ne se déclenche que sur la structure bio-mécanique humaine."
  },
  {
    question: "Quelles sont les obligations légales pour l'installation ?",
    answer: "Pour les entreprises, il suffit d'informer les employés et de mettre à jour le registre RGPD. Nous fournissons tous les documents types et la signalétique nécessaire à l'affichage obligatoire."
  }
];
