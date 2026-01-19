import { ProjectPreviewProps } from '@/components/content/ProjectPreview';

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

export type ServicePreviewType = {
  title: string;
  desc: string;
  img: string;
  url: string;
};

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

export const staticsProjects: ProjectPreviewProps[] = [
  {
    id: 'fadsfadsfasdf',
    title: 'Barrières & fenêtres pour un immeuble de 5 étages',
    year: 2026,
    location: 'Gorgier',
    url: '#', // DEV
    img: '/layouts/about-1.webp', // DEV
  },
  {
    id: 'gssthsths',
    title: 'Titre du projet',
    year: 2025,
    location: 'Neuchâtel',
    url: '#', // DEV
    img: '/layouts/about-1.webp', // DEV
  },
  {
    id: 'arherhhergad',
    title: 'Titre du projet',
    year: 2024,
    location: 'Boudry',
    url: '#', // DEV
    img: '/layouts/about-1.webp', // DEV
  },
];
