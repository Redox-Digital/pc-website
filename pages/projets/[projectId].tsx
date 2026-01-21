import { useRouter } from 'next/router';
import css from './ProjectPage.module.scss';
import { useEffect, useState } from 'react';
import { ProjectApiType } from '@/constants/types';
import Metadata from '@/components/content/Metadata';
import ProjectHero from '@/components/layouts/ProjectHero';
import { timestampToString } from '@/components/helpers/DateHelper';
import IntroVideo from '@/components/content/IntroVideo';
import ProjectPreview from '@/components/content/ProjectPreview';
import Button from '@/components/navigation/Button';
import { buildPage } from '@/components/helpers/PageHelper';

export default function ProjectPage() {
  const router = useRouter();

  const [projectApi, setProject] = useState<ProjectApiType>();
  const [projectLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`${process.env.api}/items/projets/${router.query.projectId}?fields=*,nextProject_id.*`)
        .then((res) => res.json())
        .then((project) => {
          setProject(project.data);
        });
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, [router.query.projectId]);

  const pageContent = buildPage(projectApi?.contentBlocks.blocks || []);

  if (projectApi && !projectLoading) {
    return (
      <>
        <Metadata title={projectApi.title} description={projectApi.shortDescription} />

        <ProjectHero
          title={projectApi.title}
          description={projectApi.shortDescription}
          subtitle={`${timestampToString(projectApi.date, true)} | ${projectApi.location}`}
          img={`${process.env.api}/assets/${projectApi.cover}`}
        />

        <main className={css.project}>
          <div className={css.container}>
            <section className={css.intro}>
              <p>{projectApi.introText}</p>
              {/* projectApi.pdf && (
                <Button href={`${process.env.api}/assets/${projectApi.pdf}`} blank>
                  Fiche technique <i className="fa-solid fa-pdf" />
                </Button>
              ) */}

              <Button href={`${process.env.api}/assets/${projectApi.pdf}`} blank>
                Fiche technique <i className="fa-regular fa-file-pdf" />
              </Button>
            </section>

            <article className={css.blocks}>{pageContent}</article>

            <section className={css.nextProjectSct}>
              {projectApi.nextProject_id ? (
                <ProjectPreview
                  {...projectApi.nextProject_id}
                  inverted
                  year={timestampToString(projectApi.nextProject_id.date, true)}
                  url={`/projets/${projectApi.nextProject_id.id}`}
                  img={`${process.env.api}/assets/${projectApi.nextProject_id.cover}`}
                />
              ) : (
                ''
              )}
            </section>
          </div>
        </main>
      </>
    );
  }

  if (projectLoading) {
    return <ProjectHero title={''} description={'Chargement en cours...'} subtitle={``} img={``} />;
  }
}
