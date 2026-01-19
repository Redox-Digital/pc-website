import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import Infography from '@/components/content/InfographySection';
import Newsletter from '@/components/forms/Newsletter';
import CompanySection from '@/components/layouts/CompanySection';
import HistorySection from '@/components/layouts/HistorySection';

const ourValues = [
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

const companySlides = [
  {
    id: 0,
    label: 'Qui sommes-nous ?',
    desc: (
      <>
        <p>
          De par ses plus de 60 ans d’expérience dans le domaine de la construction métallique,
          Paris & Comtesse SA est reconnu pour son savoir-faire.
        </p>
        <p>
          Avec une équipe qualifiée et soudée, soucieuse de la qualité, nous réalisons des pièces
          dans les règles de l’art afin de répondre précisément à chaque demande et satisfaire notre
          clientèle.
        </p>
      </>
    ),
    img1: '/layouts/about-company-team.webp',
  },
  {
    id: 1,
    label: 'Que faisons-nous ?',
    desc: (
      <>
        <p>
          Notre entreprise est spécialisée dans la conception, la fabrication et l’installation de
          structures métalliques. Nous offrons une gamme complète de services pour les particuliers,
          les collectivités et les entreprises qui répond aux attentes et comble les besoins
          spécifiques de chacun. Nous disposons d’une équipe de professionnels qualifiés qui
          utilisent des matériaux de haute qualité pour garantir la durabilité et la résistance des
          structures que nous construisons.
        </p>
        <p>
          Notre équipe vous propose un accompagnement personnalisé, de la mise au point de vos plans
          jusqu’à la mise en oeuvre sur le terrain. Nous vous conseillons aussi sur les meilleures
          possibilités de concrétiser vos projets dans le respect de vos exigences.
        </p>
        <p>
          Nous sommes fiers de notre histoire et de notre expérience dans le domaine de la
          construction métallique ainsi que notre engagement envers l’innovation et la qualité.
        </p>
      </>
    ),
    img1: '/layouts/about-company-2.webp',
  },
  {
    id: 2,
    label: 'Pourquoi le faisons-nous ?',
    desc: (
      <>
        <p>
          Pour répondre efficacement aux besoins et demandes simples comme complexes du marché et
          offrir aux clients des solutions sur mesure en développant de nouveaux produits innovants.
        </p>
        <p>
          Nous accordons une grande importance à la satisfaction de nos clients, ce qui implique à
          notre niveau un esprit d’équipe travaillant en parfaite coordination. La réussite de notre
          entreprise provient d’une équipe compétente et soudée, soucieuse de la qualité.
        </p>
        <p>
          L’ensemble de notre personnel est qualifié et possède une forte expérience dans chaque
          domaine. Nous nous engageons également dans la formation d’apprentis.
        </p>
      </>
    ),
    img1: '/layouts/about-company-3.webp',
  },
];

const historySlides = [
  {
    year: 2022,
    title: 'Transmission',
    desc: (
      <p>
        À partir du 1er novembre 2022, M. Tony Perret passe le témoin à M. Jean Mesquita un
        professionnel de la construction métallique depuis de nombreuses années. L’équipe du bureau
        technique et de l’atelier reste inchangée.
      </p>
    ),
    img: '/layouts/about-jean.webp',
  },
  {
    year: 2006,
    title: 'Transformation',
    desc: (
      <p>
        M. Tony Perret qui a par ailleurs fait son apprentissage dans la société reprend la
        direction. Transformation de la société en SA.
      </p>
    ),
    img: '/layouts/about-tony.webp',
  },
  {
    year: 1970,
    title: 'Fondation',
    desc: <p>Inscription au registre du Commerce</p>,
    img: '/layouts/about-1.webp',
  },
  {
    year: 1964,
    title: 'Création',
    desc: (
      <p>
        Création de la société Paris & Comtesse par M. Albert{' '}
        <span style={{ color: 'var(--accent-dark)' }}>Paris</span> et son beau-frère Jean-Pierre{' '}
        <span style={{ color: 'var(--accent-dark)' }}>Comtesse</span> dans un local à Bevaix.
      </p>
    ),
    img: '/layouts/about-2.webp',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>À propos | Paris & Comtesse SA</title>
        <meta
          name="description"
          content="Avec plus de 60 ans d'expérience dans le domaine de la construction métallique, Paris & Comtesse SA est reconnu pour son savoir-faire."
        />
      </Head>
      <Hero
        title="À propos"
        subtitle="Découvrez notre histoire et notre engagement envers la qualité et le savoir-faire"
        imgUrl="/layouts/about-hero.webp"
      />

      <main className="about">
        <CompanySection slides={companySlides} />
        <Infography
          title="Nos valeurs"
          desc="Nous sommes fiers de vous présenter les valeurs fondamentales qui guident notre entreprise."
          blocks={ourValues}
        />
        <HistorySection slides={historySlides} />

        <Newsletter />
      </main>
    </>
  );
}
