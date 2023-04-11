import styles from '@/styles/layouts/Home.module.scss';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Infography from '@/components/InfographySection';
import TextImageSection from '@/components/TextImageSection';
import Newsletter from '@/components/Newsletter';
import Button from '@/components/Button';
import ServicesSection from '@/components/ServicesSection';
import Script from 'next/script';

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

const structuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Organization',
  'url': 'https://www.pc-sa.ch',
  'name': 'Paris & Comtesse SA',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Chemin de la Baconnière 55',
    'addressLocality': 'Boudry',
    'addressRegion': 'NE',
    'postalCode': '2017',
    'addressCountry': 'CH',
  },
  'logo': 'https:///www.pc-sa.ch/logo/p-c_logo_slogan_nj.svg',
  'telephone': '+41 32 846 14 30',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Accueil</title>
        <meta
          name="keywords"
          content="construction métallique, construction métallique Neuchâtel, Neuchâtel"
        />
        <meta
          name="description"
          content="Paris & Comtesse SA, construction métallique à Boudry (NE). Notre entreprise conçoit des ouvrages sur-mesure permettant une personnalisation complète pour répondre aux besoins spécifiques de nos clients."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Hero
        title="Paris & Comtesse SA"
        home
        subtitle="CONSTRUCTION MÉTALLIQUE À BOUDRY (NE)"
        source="./layouts/home-hero.jpg"
      />
      <main className="home">
        <TextImageSection
          title={'sur-mesure'}
          surtitle={'Un engagement'}
          imgPath="./layouts/home-sur-mesure.jpg"
        >
          <>
            <p>
              Notre entreprise conçoit des ouvrages sur-mesure permettant une personnalisation
              complète pour répondre aux besoins spécifiques de nos clients.
            </p>
            <p>
              Chaque projet est étudié de la conception par notre bureau technique à la fabrication
              avec soin et savoir-faire dans notre atelier et à la pose par nos collaborateurs
              qualifiés.
            </p>
            <p>
              Les ouvrages sont conçus et fabriqués avec une attention particulière aux détails et à
              la qualité afin de garantir une longue durée de vie.
            </p>
            <Button ariaLabel="Accéder à la page d'À propos" to={'/about'}>
              En savoir plus
            </Button>
          </>
        </TextImageSection>
        <Infography
          title="Nos valeurs"
          desc="Nous sommes fiers de vous présenter les valeurs fondamentales qui guident notre entreprise."
          blocks={ourValues}
        />
        <ServicesSection />
        <TextImageSection
          title={'Le métal'}
          surtitle={'Un choix éco-responsable'}
          imgPath="./layouts/home-metal.jpg"
          light
        >
          <>
            <p>
              Le métal est un matériau très prisé pour sa solidité, sa durabilité et sa résistance à
              la corrosion.
            </p>
            <p>
              Reçu sous forme de feuilles ou de bobines, l&rsquo;acier est mécaniquement découpé,
              plié, cintré. Il est également travaillé de différentes manières pour obtenir la forme
              finale souhaitée.
            </p>
            <p>
              La main de l&rsquo;homme reste essentielle pour travailler le métal avec précision et
              créer des pièces uniques et personnalisées.
            </p>
            <Button ariaLabel="Accéder à la page d'À propos" to={'/about'}>
              En savoir plus
            </Button>
          </>
        </TextImageSection>
        <Newsletter />
      </main>
    </>
  );
}
