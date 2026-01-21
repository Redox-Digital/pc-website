import Hero from '@/components/layouts/Hero';
import css from './ServicePage.module.scss';
import { useEffect, useState } from 'react';
import Metadata from '@/components/content/Metadata';
import { useRouter } from 'next/router';
import { staticServices } from '@/constants/projectSpecifics';
import ContactCTA from '@/components/content/CTAs';
import SectionTitle from '@/components/layouts/SectionTitle';
import { ProjectApiType, StaticServicePageType } from '@/constants/types';
import ProjectsList from '@/components/layouts/ProjectsList';
import Gallery from '@/components/layouts/gallery/GalleryAPI';

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

  const [projectsApi, setProjects] = useState<ProjectApiType[] | null>(null);
  const [projectsLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`${process.env.api}/items/projets?search=${router.query.service}`)
        .then((res) => res.json())
        .then((projects) => {
          setProjects(projects.data);
        });
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
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

            {projectsApi && !projectsLoading ? (
              <ProjectsList projects={projectsApi} />
            ) : (
              <i>Chargement en cours...</i>
            )}
          </div>
        </section>

        {/* DEV: mettre à jour avec search correct */}
        <Gallery
          masonry
          viewer
          apiUrl={`${process.env.api}/items/realisation?search=${router.query.service === 'construction-metallique' ? 'entreprise' : 'collectivites'}&fields=*,image.*`}
        />

        <ContactCTA />
      </main>
    </>
  );
}
