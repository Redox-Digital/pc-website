import { ProjectApiType, ProjectPreviewProps } from '@/constants/types';
import css from './ProjectsList.module.scss';
import ProjectPreview from '../content/ProjectPreview';
import Button from '../navigation/Button';
import { timestampToString } from '../helpers/DateHelper';

type Props = {
  projects: ProjectApiType[];
};

export default function ProjectsList({ projects }: Props) {
  // Pagination
  return (
    <div className={css.list}>
      {projects.map((p, key) => (
        <ProjectPreview
          key={p.id}
          inverted={key % 2 === 0}
          {...p}
          year={timestampToString(p.date, true)}
          url={`/projets/${p.id}`}
          img={`${process.env.api}/assets/${p.cover}`} // DEV : ajouter tailles de l'image
        />
      ))}

      {/* DEV : à implémenter plus tard : PAGINATION 
      <Button>En voir plus</Button> */}
    </div>
  );
}
