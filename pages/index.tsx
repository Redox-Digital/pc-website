import css from './Home.module.scss';
import Head from 'next/head';
import Hero, { HomeHero } from '@/components/layouts/Hero';
import Infography from '@/components/content/InfographySection';
import TextImageSection from '@/components/layouts/TextImageSection';
import Newsletter from '@/components/forms/Newsletter';
import Button from '@/components/navigation/Button';
import ServicesSection from '@/components/layouts/ServicesSection';
import { ourValues } from '@/constants/projectSpecifics';
import { GoogleMyBusinessCTA, JobCTA } from '@/components/content/CTAs';

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
  'logo': 'https://pc-sa.ch/logo/p-c_logo_slogan_nj.svg',
  'telephone': '+41 32 846 14 30',
};

export default function Home() {
  const [pageTitle, pageDesc] = [
    'Construction métallique à Neuchâtel',
    "Depuis plus de 60 ans, l'entreprise Paris & Comtesse SA conçoit, fabrique et installe des structures métalliques sur mesure, répondant aux exigences et besoins spécifiques de ses clients.",
  ];
  return (
    <>
      <Head>
        <title>Construction métallique à Neuchâtel | Paris & Comtesse SA</title>

        <link rel="canonical" href="https://pc-sa.ch" />

        <meta
          name="keywords"
          content="construction métallique, construction métallique Neuchâtel, Neuchâtel"
        />
        <meta
          name="description"
          content="Notre entreprise conçoit des ouvrages sur-mesure permettant une personnalisation complète pour répondre aux besoins spécifiques de nos clients."
        />
        <meta name="author" content="Redox Digital, Steve Mettraux" />
        <script
          type="txt"
          dangerouslySetInnerHTML={{
            __html: `/* Realisation : Redox Digital Sàrl [redoxdigital.ch] & Steve Mettraux [github.com/Smettraux] */`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <HomeHero
        title={pageTitle}
        subtitle={
          <>
            Depuis plus de 60 ans, l&apos;entreprise <em>Paris & Comtesse SA</em> conçoit, fabrique
            et installe des structures métalliques sur mesure, répondant aux exigences et besoins
            spécifiques de ses clients.
          </>
        }
        imgUrl="/layouts/home-hero.webp"
      />
      <main className="home">
        <TextImageSection
          title={'sur-mesure'}
          surtitle={'Un engagement'}
          imgPath="/layouts/home-sur-mesure.webp"
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
            <Button href={'/a-propos'}>Découvrez notre entreprise</Button>
          </>
        </TextImageSection>

        <Infography
          title="Nos valeurs"
          desc="Nous sommes fiers de vous présenter les valeurs fondamentales qui guident notre entreprise."
          blocks={ourValues}
        />

        {/* <JobCTA /> */}

        <ServicesSection />

        <TextImageSection
          title={'Le métal'}
          surtitle={'Un choix éco-responsable'}
          imgPath="/layouts/home-metal.webp"
          light
        >
          <>
            <p>
              Le métal est un matériau très prisé pour sa solidité, sa durabilité et sa résistance.
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
          </>
        </TextImageSection>

        <GoogleMyBusinessCTA />
      </main>
    </>
  );
}
