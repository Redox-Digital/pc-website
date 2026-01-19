import ServicePageLayout from '@/components/layouts/ServicePageLayout';
import css from '@/components/layouts/ServicePageLayout.module.scss';

type OtherService = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  title: string;
  desc: string;
};

type Service = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  cssClass?: string;
  heroOverlayOpacity?: number;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introDesc: string;
  services: string[];
  otherServices: OtherService[];
};

const otherServices: {
  particuliers: OtherService;
  collectivites: OtherService;
  entreprises: OtherService;
} = {
  particuliers: {
    slug: 'particuliers',
    title: 'Particuliers',
    desc: 'Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration d’intérieur',
  },
  collectivites: {
    slug: 'collectivites',
    title: 'Collectivités',
    desc: 'Conception & réalisation de projets d’aménagement extérieur, gestion de projets publics pour les communes, écoles, crèches, homes, etc.',
  },
  entreprises: {
    slug: 'entreprises',
    title: 'Entreprises',
    desc: 'Rénovation de structures existantes, fabrication de structures métalliques sur-mesure',
  },
};

const particuliersService: Service = {
  slug: 'particuliers',
  cssClass: css.particuliers,
  heroOverlayOpacity: 0.3,
  heroTitle: 'Particuliers',
  heroSubtitle: 'Laisser libre cours à ses envies',
  introTitle: 'Réalisation sur-mesure',
  introDesc:
    'Nous sommes convaincus que chaque client est unique, avec des besoins et des demandes spécifiques, c’est pourquoi nous nous efforçons de personnaliser nos services pour répondre à ces besoins individuels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs envies et leurs attentes afin de concevoir des solutions sur-mesure. Cette approche garantit que chaque projet est unique en s’adaptant aux choix esthétiques et contraintes techniques.',
  services: [
    'escalier',
    'avant-toit',
    'garde-corps',
    'passerelle',
    'porte',
    'agencement décoratif',
  ],
  otherServices: [otherServices.collectivites, otherServices.entreprises],
};

export default function ParticuliersPage() {
  return <ServicePageLayout {...particuliersService} />;
}
