import { staticsProjects } from '@/constants/projectSpecifics';
import { ProjectCard } from '../content/ProjectPreview';
import Button from '../navigation/Button';
import css from './LatestProjects.module.scss';
import SectionTitle from './SectionTitle';
export default function LatestProjects() {
  return (
    <section className={`light ${css.section}`}>
      <SectionTitle title="Nos dernières réalisations" surtitle="Construction métallique" />

      <ul className={css.grid}>
        {staticsProjects.map((p) => (
          <li key={p.id}>
            <ProjectCard {...p} />
          </li>
        ))}
      </ul>

      <Button href="/construction-metallique">Toutes nos réalisations</Button>
    </section>
  );
}
