import { ProjectCard } from '../content/ProjectPreview';
import Button from '../navigation/Button';
import css from './LatestProjects.module.scss';
import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
import { ProjectApiType } from '@/constants/types';
import { timestampToString } from '../helpers/DateHelper';

type Props = {
  projects: ProjectApiType[];
};

export default function LatestProjects({ projects }: Props) {
  return (
    <section className={`light ${css.section}`}>
      <SectionTitle title="Nos dernières réalisations" surtitle="Construction métallique" />

      {projects && projects.length > 0 ? (
        <ul className={css.grid}>
          {projects.map((p) => (
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
