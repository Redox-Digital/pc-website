import Head from 'next/head';
import Hero from '@/components/Hero';
import Infography from '@/components/InfographySection';
import Newsletter from '@/components/Newsletter';
import CompanySection from '@/components/CompanySection';
import HistorySection from '@/components/HistorySection';

const ourValues = [
  {
    slug: 'quality',
    path: '/pictograms/Exports_P&C – Picto – Qualité.svg',
    title: 'Qualité',
    desc: 'Engagement à fournir des produits et services de haute qualité',
  },
  {
    slug: 'innovation',
    path: '/pictograms/Exports_P&C – Picto – Innovation.svg',
    title: 'Innovation',
    desc: 'Encouragement à la créativité et l’exploration de nouvelles idées',
  },
  {
    slug: 'know-how',
    path: '/pictograms/Exports_P&C – Picto – Savoir-faire.svg',
    title: 'Savoir-Faire',
    desc: 'Expertise et expérience de notre équipe',
  },
  {
    slug: 'entrepreneurship',
    path: '/pictograms/Exports_P&C – Picto – Passion entreprendre.svg',
    title: "Passion d'entreprendre",
    desc: 'Essentiel pour construire une entreprise durable et résiliente',
  },
  {
    slug: 'clients-satisfaction',
    path: '/pictograms/Exports_P&C – Picto – Satisfaction.svg',
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
          Avec plus de 50 ans d’expérience dans le domaine de la construction métallique, Paris &
          Comtesse SA est reconnu pour son savoir-faire.
        </p>
        <p>
          Avec une équipe qualifiée et soudée, soucieuse de la qualité, nous réalisons des pièces
          dans les règles de l’art afin de répondre précisément à chaque demande et satisfaire notre
          clientèle.
        </p>
      </>
    ),
    img1: 'https://picsum.photos/200/300',
    img2: 'https://picsum.photos/300/200',
  },
  {
    id: 1,
    label: 'Que faisons-nous ?',
    desc: (
      <>
        <p>
          Notre entreprise est spécialisée dans la conception, la fabrication et l’installation de
          structures métalliques. Nous offrons une gamme complète de services pour les particuliers,
          les collectivités et les entreprises qui répondent aux attentes et comble les besoins
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
    img1: 'https://picsum.photos/340/200',
    img2: 'https://picsum.photos/220/300',
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
    img1: 'https://picsum.photos/240/300',
    img2: 'https://picsum.photos/320/200',
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
    img: 'https://picsum.photos/200/300',
  },
  {
    year: 2006,
    title: 'Titre 1',
    desc: (
      <p>
        1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex, nisi, consectetur
        quia nam porro explicabo necessitatibus expedita, velit recusandae quibusdam quisquam! Porro
        consequatur est accusamus itaque excepturi quo optio!
      </p>
    ),
    img: 'https://picsum.photos/200/300',
  },
  {
    year: 1970,
    title: 'Titre 2',
    desc: (
      <p>
        2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex, nisi, consectetur
        quia nam porro explicabo necessitatibus expedita, velit recusandae quibusdam quisquam! Porro
        consequatur est accusamus itaque excepturi quo optio!
      </p>
    ),
    img: 'https://picsum.photos/200/300',
  },
  {
    year: 1964,
    title: 'Titre 3',
    desc: (
      <p>
        3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex, nisi, consectetur
        quia nam porro explicabo necessitatibus expedita, velit recusandae quibusdam quisquam! Porro
        consequatur est accusamus itaque excepturi quo optio!
      </p>
    ),
    img: 'https://picsum.photos/200/300',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | À propos</title>
        <meta name="keywords" content="À propos" />
      </Head>
      <Hero
        title="À propos"
        subtitle="Découvrez notre histoire et notre engagement envers la qualité et le savoir-faire"
        source="/layouts/bg-about.svg"
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
