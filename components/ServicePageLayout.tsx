import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import OtherServices from '@/components/OtherServices';
import Head from 'next/head';
import style from '@/styles/layouts/Services.module.scss';
import Gallery from '@/components/Gallery';

// Importing static data (Realisations)
import RealisationsParticuliers from '@/data/particuliers';
import RealisationsEntreprises from '@/data/entreprises';
import RealisationsCollectivites from '@/data/collectivites';
import { useEffect, useState } from 'react';

type Realisation = {
  id: number;
  description: string;
  image?: string;
  category?: 'individual' | 'collectivity' | 'enterprise';
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

type OtherService = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  title: string;
  desc: string;
};

export default function ServicePageLayout(service: Service) {
  return (
    <>
      <Head>
        <title>Pour les {service.heroTitle} | Paris & Comtesse SA</title>
        <meta name="description" content={service.introDesc} />
      </Head>
      <Hero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        imgUrl={`/layouts/${service.slug}-hero.webp`}
        addClass={service.cssClass}
        opacity={service.heroOverlayOpacity}
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
