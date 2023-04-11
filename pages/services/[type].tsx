import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import OtherServices from '@/components/OtherServices';
import Head from 'next/head';
import { useRouter } from 'next/router';
import style from '@/styles/layouts/Services.module.scss';
import Gallery from '@/components/Gallery';

// Importing static data (Realisations)
import RealisationsParticuliers from '@/data/particuliers';
import RealisationsEntreprises from '@/data/entreprises';
import RealisationsCollectivites from '@/data/collectivites';

type Realisation = {
  id: number;
  title: string;
};

type Service = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introDesc: string;
  services: string[];
  otherServices: OtherService[];
  realisations: Realisation[];
};

type OtherService = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  title: string;
  desc: string;
};

const otherParticuliers: OtherService = {
  slug: 'particuliers',
  title: 'Particuliers',
  desc: 'Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration d’intérieur',
};

const otherCollectivites: OtherService = {
  slug: 'collectivites',
  title: 'Collectivités',
  desc: 'Conception & réalisation de projets d’aménagement extérieur, gestion de projets publics pour les communes, écoles, crèches, homes, etc.',
};

const otherEntreprises: OtherService = {
  slug: 'entreprises',
  title: 'Entreprises',
  desc: 'Rénovation de structures existantes, fabrication de structures métalliques sur-mesure',
};

const servicesStatic: Service[] = [
  {
    slug: 'particuliers',
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
    otherServices: [otherCollectivites, otherEntreprises],
    realisations: RealisationsParticuliers(),
  },
  {
    slug: 'collectivites',
    heroTitle: 'Collectivités',
    heroSubtitle: 'Un engagement durable',
    introTitle: 'Engagement sur-mesure',
    introDesc:
      'Nous sommes fiers de notre engagement envers la qualité de service pour les collectivités. Nous croyons que chaque demande mérite une prestation de haute qualité et une expérience client satisfaisante. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins.',
    services: [
      'abribus',
      'couvert',
      'porte',
      'grill extérieur',
      'devanture',
      'agencement décoratif',
    ],
    otherServices: [otherParticuliers, otherEntreprises],
    realisations: RealisationsCollectivites(),
  },
  {
    slug: 'entreprises',
    heroTitle: 'Entreprises',
    introTitle: 'Partenariat sur-mesure',
    heroSubtitle: "L'échange et la confiance dans la fierté du travail bien fait",
    introDesc:
      'Nous sommes spécialisés dans la conception, fabrication et installations de structures métalliques pour les bâtiments commerciaux, industriels et institutionnels. Nous veillons à ce que nos réalisations soient effectuées dans les délais impartis et avec le plus grand soin. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services et une flexibilité à long terme.',
    services: [
      'tôlerie',
      'fabrication industrielle',
      'soudage certifié',
      'mise aux normes de structures existantes',
      'agencement décoratif',
    ],
    otherServices: [otherParticuliers, otherCollectivites],
    realisations: RealisationsEntreprises(),
  },
];

export default function Service() {
  const router = useRouter();
  const { type } = router.query;

  const service = servicesStatic.find((elt) => elt.slug === type) || servicesStatic[0];

  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Services pour les {service.heroTitle}</title>
        <meta name="description" content={service.introDesc} />
      </Head>
      <Hero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        source={`/layouts/${service.slug}-hero.jpg`}
      />
      <main className={style.service}>
        <section className={`${style.service__intro} light`}>
          <div className="container">
            <div className={style.service__titles}>
              <h5>Pour les {service.heroTitle}</h5>
              <h2>{service.introTitle}</h2>
            </div>

            <p>{service.introDesc}</p>

            <ul className={style.service__list}>
              {service.services.map((service, i) => (
                <li key={`service_${i}`}>{service}</li>
              ))}
            </ul>
          </div>
        </section>
        <Gallery
          allRealisations={service.realisations}
          surtitle={'une image vaut mille mots'}
          title={'Découvrez nos réalisations'}
          slug={service.slug}
        />
        <ContactCTA />
        <OtherServices props={service.otherServices} />
        <Newsletter />
      </main>
    </>
  );
}
