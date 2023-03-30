import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import OtherServices from '@/components/OtherServices';
import Head from 'next/head';
import { useRouter } from 'next/router';
import style from '@/styles/layouts/Services.module.scss';
import btn from '@/styles/components/Button.module.scss';
import ImageGallery from '@/components/ImageGallery';

type Realisation = {
  id: number;
  title: string;
  path: string;
};

type Service = {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  introDesc: string | JSX.Element;
  services: string[];
  realisations: Realisation[];
  otherServices: OtherService[];
};

type OtherService = {
  slug: string;
  title: string;
  desc: string;
};

const otherParticuliers = {
  slug: 'particuliers',
  title: 'Particuliers',
  desc: 'Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration d’intérieur',
};

const otherCollectivites = {
  slug: 'collectivites',
  title: 'Collectivités',
  desc: 'Conception & réalisation de projets d’aménagement extérieur, gestion de projets publics pour les communes, écoles, crèches, homes, etc.',
};

const otherEntreprises = {
  slug: 'entreprises',
  title: 'Entreprises',
  desc: 'Rénovation de structures existantes, fabrication de structures métalliques sur-mesure',
};

const servicesStatic: Service[] = [
  {
    slug: 'particuliers',
    heroTitle: 'Particuliers',
    heroSubtitle: 'Laisser libre cours à ses envies',
    introDesc:
      'Nous sommes convaincus que chaque client est unique, avec des besoins et des demandes spécifiques, c’est pourquoi nous nous efforçons de personnaliser nos services pour répondre à ces besoins individuels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs envies et leurs attentes afin de concevoir des solutions sur-mesure. Cette approche garantit que chaque projet est unique en s’adaptant aux choix esthétiques et contraintes techniques.',
    services: ['escalier', 'pergola', 'garde-corps', 'passerelle', 'porte', 'agencement décoratif'],
    realisations: [
      {
        id: 0,
        title:
          'Exemple de titre très long ladjfkdasfjladfkjaslfjasfl kjlsak jdsalk fjasld kjasl kads jals',
        path: 'https://picsum.photos/300/500',
      },
      { id: 1, title: 'Exemple de titre', path: 'https://picsum.photos/300/500' },
      { id: 2, title: 'Exemple de titre', path: 'https://picsum.photos/500/300' },
      {
        id: 3,
        title:
          'Exemple de titre très long ladjfkdasfjladfkjaslfjasfl kjlsak jdsalk fjasld kjasl kads jals',
        path: 'https://picsum.photos/500/300',
      },
      { id: 4, title: 'Exemple de titre', path: 'https://picsum.photos/500/300' },
      { id: 5, title: 'Exemple de titre', path: 'https://picsum.photos/500/300' },
      {
        id: 6,
        title:
          'Exemple de titre très long ladjfkdasfjladfkjaslfjasfl kjlsak jdsalk fjasld kjasl kads jals',
        path: 'https://picsum.photos/200/300',
      },
      { id: 7, title: 'Exemple de titre', path: 'https://picsum.photos/300/500' },
      { id: 8, title: 'Exemple de titre', path: 'https://picsum.photos/500/300' },
    ],
    otherServices: [otherCollectivites, otherEntreprises],
  },
  {
    slug: 'collectivites',
    heroTitle: 'Collectivités',
    heroSubtitle: 'Un engagement durable',
    introDesc:
      'Nous sommes fiers de notre engagement envers la qualité de service pour les collectivités. Nous croyons que chaque collectivité mérite un service de haute qualité et une expérience client satisfaisante. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins à long terme.',
    services: [],
    realisations: [],
    otherServices: [otherParticuliers, otherEntreprises],
  },
  {
    slug: 'entreprises',
    heroTitle: 'Entreprises',
    heroSubtitle: "L'échange et la confiance dans la fierté du travail bien fait",
    introDesc:
      'Nous sommes spécialisés dans la conception, fabrication et installations de structures métalliques pour les bâtiments commerciaux, industriels et institutionnels. Nous veillons à ce que nos réalisations soient effectuées dans les délais impartis et avec le plus grand soin. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins à long terme.',
    services: [],
    realisations: [],
    otherServices: [otherParticuliers, otherCollectivites],
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
        <meta name="keywords" content="Services" />
      </Head>
      <Hero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        source={`/layouts/bg-${service.slug}.png`}
      />
      <main className={style.service}>
        <section className={`${style.service__intro} light`}>
          <div className="container">
            <div className={style.service__titles}>
              <h5>Pour les {service.heroTitle}</h5>
              <h2>Services sur-mesure</h2>
            </div>

            <p>{service.introDesc}</p>

            <ul className={style.service__list}>
              {service.services.map((service, i) => (
                <li key={`service_${i}`}>{service}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${style.gallery} light`}>
          <div className="container">
            <div className={style.service__titles}>
              <h5>une image vaut mille mots</h5>
              <h2>Découvrez nos réalisations</h2>
            </div>
            <div className={style.gallery__images}>
              {service.realisations.map((img) => (
                <ImageGallery key={img.id} {...img} />
              ))}
            </div>

            <button className={`${btn.btn} ${btn.btn__secondary}`} type="button">
              En voir plus
            </button>
          </div>
        </section>
        <ContactCTA />
        <OtherServices props={service.otherServices} />
        <Newsletter />
      </main>
    </>
  );
}
