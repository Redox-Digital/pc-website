import { ServicePreviewType, StaticServicePageType } from './types';

export const ourValues = [
  {
    slug: 'quality',
    path: '/pictograms/p-c_qualite.svg',
    title: 'Qualité',
    desc: 'Engagement à fournir des produits et services de haute qualité',
  },
  {
    slug: 'innovation',
    path: '/pictograms/p-c_innovation.svg',
    title: 'Innovation',
    desc: 'Encouragement à la créativité et l’exploration de nouvelles idées',
  },
  {
    slug: 'know-how',
    path: '/pictograms/p-c_savoir-faire.svg',
    title: 'Savoir-Faire',
    desc: 'Expertise et expérience de notre équipe',
  },
  {
    slug: 'entrepreneurship',
    path: '/pictograms/p-c_passion-entreprendre.svg',
    title: "Passion d'entreprendre",
    desc: 'Essentiel pour construire une entreprise durable et résiliente',
  },
  {
    slug: 'clients-satisfaction',
    path: '/pictograms/p-c_satisfaction.svg',
    title: 'Satisfaction client',
    desc: 'Comprendre les besoins et être à l’écoute des suggestions',
  },
];

export const servicesPreview: ServicePreviewType[] = [
  {
    title: 'Construction métallique',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam vel leo tempus ultricies. Maecenas suscipit eget augue sagittis vehicula.',
    img: '/layouts/about-1.webp', // DEV changer
    url: '/construction-metallique',
  },
  {
    title: 'Tôlerie',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam vel leo tempus ultricies. Maecenas suscipit eget augue sagittis vehicula.',
    img: '/layouts/about-1.webp', // DEV changer
    url: '/tolerie',
  },
];

export const staticServices: {
  constructionMetallique: StaticServicePageType;
  tolerie: StaticServicePageType;
} = {
  constructionMetallique: {
    title: 'Construction métallique',
    subtitle: 'Laisser libre cours à ses envies',
    heroImg: '/layouts/about-1.webp', // DEV

    intro: {
      surtitle: 'Pour les particuliers',
      title: 'Réalisation sur-mesure',
      description:
        'Nous sommes convaincus que chaque client est unique, avec des besoins et des demandes spécifiques, c’est pourquoi nous nous efforçons de personnaliser nos services pour répondre à ces besoins individuels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs envies et leurs attentes afin de concevoir des solutions sur-mesure. Cette approche garantit que chaque projet est unique en s’adaptant aux choix esthétiques et contraintes techniques.',

      keywords: [
        'Escalier',
        'Avant-toit',
        'Garde-corps',
        'Passerelle',
        'Porte',
        'Agencement décoratif',
      ],
    },
  },
  tolerie: {
    title: 'Tôlerie',
    subtitle: 'Laisser libre cours à ses envies, mais en tôlerie.',
    heroImg: '/layouts/about-1.webp', // DEV

    intro: {
      surtitle: 'Pour les particuliers',
      title: 'Réalisation sur-mesure',
      description:
        'Nous sommes convaincus que chaque client est unique, avec des besoins et des demandes spécifiques, c’est pourquoi nous nous efforçons de personnaliser nos services pour répondre à ces besoins individuels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs envies et leurs attentes afin de concevoir des solutions sur-mesure. Cette approche garantit que chaque projet est unique en s’adaptant aux choix esthétiques et contraintes techniques.',

      keywords: [
        'Escalier',
        'Avant-toit',
        'Garde-corps',
        'Passerelle',
        'Porte',
        'Agencement décoratif',
      ],
    },
  },
};
