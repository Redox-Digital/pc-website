import ServicePageLayout from '@/components/ServicePageLayout';
import css from '@/styles/layouts/Services.module.scss';

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

const collectivitesService: Service = {
  slug: 'collectivites',
  cssClass: css.collectivites,
  heroOverlayOpacity: 0.3,
  heroTitle: 'Collectivités',
  heroSubtitle: 'Un engagement durable',
  introTitle: 'Engagement sur-mesure',
  introDesc:
    'Nous sommes fiers de notre engagement pour les collectivités. Nous croyons que chaque demande mérite une prestation de haute qualité et une expérience client satisfaisante. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins.',
  services: ['abribus', 'couvert', 'porte', 'grill extérieur', 'devanture', 'agencement décoratif'],
  otherServices: [otherServices.particuliers, otherServices.entreprises],
};

export default function CollectivitesPage() {
  return <ServicePageLayout {...collectivitesService} />;
}
