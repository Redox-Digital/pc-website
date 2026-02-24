import Hero from '@/components/layouts/Hero';
import css from './ServicePage.module.scss';
import { useEffect, useState } from 'react';
import Metadata from '@/components/content/Metadata';
import { staticServices } from '@/constants/projectSpecifics';
import ContactCTA from '@/components/content/CTAs';
import SectionTitle from '@/components/layouts/SectionTitle';
import { ProjectApiType, RealisationApiType, StaticServicePageType } from '@/constants/types';
import ProjectsList from '@/components/layouts/ProjectsList';
import Gallery from '@/components/layouts/gallery/GalleryAPI';
import { GetServerSideProps } from 'next';

type Props = {
  service: string;
  projects: ProjectApiType[];
  realisations: RealisationApiType[];
};

export default function ServicePageLayout({ service, projects, realisations }: Props) {
  // Permet de faire le pont entre le nom de la page et de l'objet, et de définir "tolerie" comme page par défaut.
  const getStaticServiceSlug = (s: string): 'constructionMetallique' | 'tolerie' =>
    s === 'construction-metallique' ? 'constructionMetallique' : 'tolerie';

  const [staticService, setStaticService] = useState<StaticServicePageType>(
    staticServices[getStaticServiceSlug(service)]
  );

  // Met à jour les données statiques en cas de changement d'URL
  useEffect(() => {
    setStaticService(staticServices[getStaticServiceSlug(service)]);
  }, [service]);

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

        {getStaticServiceSlug(service) === 'constructionMetallique' ? (
          <section className={`${css.projects} light`}>
            <div className="container">
              <SectionTitle
                title="Nos réalisations"
                surtitle={staticService.title}
                className={css.titles}
              />

              {projects && projects.length > 0 ? (
                <ProjectsList projects={projects} />
              ) : (
                <i>Aucun projet à afficher.</i>
              )}
            </div>
          </section>
        ) : (
          <>
            <section>
              <h2>Catalogues</h2>
            </section>
            <section>
              <h2>Notre technologie</h2>
              <ul>
                <li>Plieuse CNC Amada</li>
                <li>Cisaille à tôle Amada, épaisseur jusqu’à 10mm</li>
                <li>Encocheuse </li>
                <li>Poinçonneuse </li>
                <li>Rouleuse pour forte épaisseur et gros diamètre</li>
                <li>Rouleuse pour petite épaisseur et petit diamètre</li>
              </ul>
            </section>
          </>
        )}

        <Gallery masonry viewer media={realisations} />

        <ContactCTA />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { service } = context.params as { service: string };

  const projects = await fetch(`${process.env.api}/items/projets?search=${service}`)
    .then((res) => res.json())
    .then((json) => json.data);

  {
    /* DEV: mettre à jour avec search correct */
  }
  const realisations = await fetch(
    `${process.env.api}/items/realisation?search=${service === 'construction-metallique' ? 'entreprise' : 'collectivites'}&fields=*,image.*`
  )
    .then((res) => res.json())
    .then((json) => json.data);

  return {
    props: {
      service,
      projects,
      realisations,
    },
  };
};
