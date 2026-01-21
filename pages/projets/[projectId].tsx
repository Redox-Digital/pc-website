import { useRouter } from 'next/router';
import css from './ProjectPage.module.scss';
import { useEffect, useState } from 'react';
import { ProjectApiType } from '@/constants/types';
import Metadata from '@/components/content/Metadata';
import ProjectHero from '@/components/layouts/ProjectHero';
import { timestampToString } from '@/components/helpers/DateHelper';

export default function ProjectPage() {
  const router = useRouter();

  const [projectApi, setProject] = useState<ProjectApiType>();
  const [projectLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`${process.env.api}/items/projets/${router.query.projectId}`)
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
      </>
    );
  }

  if (projectLoading) {
    return <ProjectHero title={''} description={'Chargement en cours...'} subtitle={``} img={``} />;
  }
}
