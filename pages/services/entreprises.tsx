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

const entreprisesService: Service = {
  slug: 'entreprises',
  cssClass: css.entreprises,
  heroOverlayOpacity: 0.4,
  heroTitle: 'Entreprises',
  introTitle: 'Partenariat sur-mesure',
  heroSubtitle: "L'échange et la confiance dans la fierté du travail bien fait",
  introDesc:
    'Nous sommes spécialisés dans la conception, fabrication et installation de structures métalliques pour les bâtiments commerciaux, industriels et institutionnels. Nous veillons à ce que nos réalisations soient effectuées dans les délais impartis et avec le plus grand soin. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant une flexibilité et des services de qualité.',
  services: [
    'tôlerie',
    'fabrication industrielle',
    'soudage certifié',
    'mise aux normes de structures existantes',
    'agencement décoratif',
  ],
  otherServices: [otherServices.particuliers, otherServices.collectivites],
};

export default function EntreprisesPage() {
  return <ServicePageLayout {...entreprisesService} />;
}
