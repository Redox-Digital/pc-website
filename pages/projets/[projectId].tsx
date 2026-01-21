import css from './ProjectPage.module.scss';
import { ProjectApiType } from '@/constants/types';
import Metadata from '@/components/content/Metadata';
import ProjectHero from '@/components/layouts/ProjectHero';
import { timestampToString } from '@/components/helpers/DateHelper';
import ProjectPreview from '@/components/content/ProjectPreview';
import Button from '@/components/navigation/Button';
import { buildPage } from '@/components/helpers/PageHelper';
import { GetServerSideProps } from 'next';

type Props = { project: ProjectApiType };

export default function ProjectPage({ project }: Props) {
  const pageContent = buildPage(project.contentBlocks.blocks || []);

  return (
    <>
      <Metadata title={project.title} description={project.shortDescription} />

      <ProjectHero
        title={project.title}
        description={project.shortDescription}
        subtitle={`${timestampToString(project.date, true)} | ${project.location}`}
        img={`${process.env.api}/assets/${project.cover}`}
      />

      <main className={css.project}>
        <div className={css.container}>
          <section className={css.intro}>
            <p>{project.introText}</p>
            {project.pdf && (
              <Button href={`${process.env.api}/assets/${project.pdf}`} blank>
                Fiche technique <i className="fa-regular fa-file-pdf" />
              </Button>
            )}
          </section>

          <article className={css.blocks}>{pageContent}</article>

          <section className={css.nextProjectSct}>
            {project.nextProject_id ? (
              <ProjectPreview
                {...project.nextProject_id}
                inverted
                year={timestampToString(project.nextProject_id.date, true)}
                url={`/projets/${project.nextProject_id.id}`}
                img={`${process.env.api}/assets/${project.nextProject_id.cover}`}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projectId } = context.params as { projectId: string };

  const res = await fetch(
    `${process.env.api}/items/projets/${projectId}?fields=*,nextProject_id.*&filter[status][_eq]=published`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const project = await res.json().then((json) => json.data);

  return {
    props: {
      project,
    },
  };
};
