import { ProjectCard } from '../content/ProjectPreview';
import Button from '../navigation/Button';
import css from './LatestProjects.module.scss';
import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
import { ProjectApiType } from '@/constants/types';
import { timestampToString } from '../helpers/DateHelper';

type Props = {
  limit?: number;
};

export default function LatestProjects({ limit }: Props) {
  const [starredProjApi, setProjects] = useState<ProjectApiType[] | null>(null);
  const [projectsLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(
        `${process.env.api}/items/projets?sort=-date&filter[highlighted][_eq]=true&limit=${limit || 3}`
      )
        .then((res) => res.json())
        .then((projects) => {
          setProjects(projects.data);
          setLoading(false);
        });
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  }, [limit]);

  console.log(starredProjApi);

  return (
    <section className={`light ${css.section}`}>
      <SectionTitle title="Nos dernières réalisations" surtitle="Construction métallique" />

      {starredProjApi && !projectsLoading ? (
        <ul className={css.grid}>
          {starredProjApi.map((p) => (
            <li key={p.id}>
              <ProjectCard
                year={timestampToString(p.date, true)}
                url={`/projets/${p.id}`}
                img={`${process.env.api}/assets/${p.cover}`} // DEV : ajouter tailles
                {...p}
              />
            </li>
          ))}
        </ul>
      ) : (
        <i>Chargement en cours...</i>
      )}

      <Button href="/services/construction-metallique">Toutes nos réalisations</Button>
    </section>
  );
}
