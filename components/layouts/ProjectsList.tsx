import { ProjectPreviewProps } from '@/constants/types';
import css from './ProjectsList.module.scss';
import ProjectPreview from '../content/ProjectPreview';
import Button from '../navigation/Button';

type Props = {
  projects: ProjectPreviewProps[];
};

export default function ProjectsList({ projects }: Props) {
  // Pagination
  return (
    <div className={css.list}>
      {projects.map((p, key) => (
        <ProjectPreview key={p.id} {...p} inverted={key % 2 === 0} />
      ))}

      <Button>En voir plus</Button>
    </div>
  );
}
