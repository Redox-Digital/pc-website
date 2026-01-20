import Hero from '@/components/layouts/Hero';
import Newsletter from '@/components/forms/Newsletter';
import OtherServices from '@/components/layouts/OtherServices';
import css from './ServicePage.module.scss';
import { useEffect, useState } from 'react';
import Metadata from '@/components/content/Metadata';
import { useRouter } from 'next/router';
import { staticServices, staticsProjects } from '@/constants/projectSpecifics';
import ContactCTA from '@/components/content/CTAs';
import SectionTitle from '@/components/layouts/SectionTitle';
import { StaticServicePageType } from '@/constants/types';
import ProjectPreview from '@/components/content/ProjectPreview';
import ProjectsList from '@/components/layouts/ProjectsList';

type Props = {
  service: 'construction-metallique' | 'tolerie';
};

export default function ServicePageLayout({ service }: Props) {
  const router = useRouter();

  // Permet de faire le pont entre le nom de la page et de l'objet, et de définir "tolerie" comme page par défaut.
  const getStaticServiceSlug = (): 'constructionMetallique' | 'tolerie' =>
    router.query.service === 'construction-metallique' ? 'constructionMetallique' : 'tolerie';

  const [staticService, setStaticService] = useState<StaticServicePageType>(
    staticServices[getStaticServiceSlug()]
  );

  // Check if slug changes
  useEffect(() => {
    setStaticService(staticServices[getStaticServiceSlug()]);
  }, [router.query.service]);

  return (
    <>
      <Metadata title={staticService.title} description={staticService.subtitle} />
      <Hero
        title={staticService.title}
        subtitle={staticService.subtitle}
        imgUrl={staticService.heroImg}
      />

      <main className={css.service}>
        <section className={`${css.intro} light`}>
          <div className="container">
            <SectionTitle
              title={staticService.intro.title}
              surtitle={staticService.intro.surtitle}
              alignLeft
              className={css.titles}
            />

            <p>{staticService.intro.description}</p>

            <ul className={css.list}>
              {staticService.intro.keywords.map((word, key) => (
                <li key={key}>{word}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${css.projects} light`}>
          <div className="container">
            <SectionTitle
              title="Nos réalisations"
              surtitle={staticService.title}
              className={css.titles}
            />

            {/* DEV: dynamic à implémenter */}
            <ProjectsList projects={staticsProjects} />
          </div>
        </section>

        <section className={`${css.projects} light`}>
          <div className="container">
            <SectionTitle
              title="Découvrez nos réalisations"
              surtitle={'une image vaut mille mots'}
              className={css.titles}
              alignLeft
            />

            <p>Filtres</p>

            <p>Galerie photo (Masonry)</p>

            {/* DEV: à implémenter */}
          </div>
        </section>

        <ContactCTA />

        {/*

        <Gallery
          surtitle={'une image vaut mille mots'}
          title={'Découvrez nos réalisations'}
          slug={service.slug}
        />*/}
      </main>
    </>
  );
}
