import styles from '@/styles/layouts/Home.module.scss';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Infography from '@/components/InfographySection';
import TextImageSection from '@/components/TextImageSection';
import Newsletter from '@/components/Newsletter';
import Button from '@/components/Button';
import ServicesSection from '@/components/ServicesSection';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Accueil</title>
        <meta name="keywords" content="Accueil" />
      </Head>
      <Hero
        title="Paris & Comtesse SA"
        home
        subtitle="CONSTRUCTION MÉTALLIQUE À BOUDRY (NE)"
        source="./layouts/bg-home.jpg"
      />
      <main className="home">
        <TextImageSection
          title={'sur-mesure'}
          surtitle={'Un engagement'}
          imgPath="./layouts/img-placeholder.png"
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
            <Button to={'/about'}>En savoir plus</Button>
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
          imgPath="./layouts/metal.jpg"
          light
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
            <Button to={'/about'}>En savoir plus</Button>
          </>
        </TextImageSection>
        <Newsletter />
      </main>
    </>
  );
}
