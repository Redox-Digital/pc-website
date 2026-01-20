import Link from 'next/link';
import css from './ProjectPreview.module.scss';
import Image from 'next/image';
import arrowRight from '@/public/pictograms/arrow-right.svg';
import { ProjectPreviewProps } from '@/constants/types';
import Button from '../navigation/Button';

interface ProjectArticleProps extends ProjectPreviewProps {
  inverted?: boolean;
}

export default function ProjectPreview({
  id,
  title,
  description,
  year,
  location,
  url,
  img,
  inverted,
}: ProjectArticleProps) {
  return (
    <article className={`${css.article} ${inverted && css.inverted}`}>
      <Image src={img} width={600} height={400} alt={`${title} - ${location}, ${year}`} />

      <div className={css.texts}>
        <h3>{title}</h3>
        <small>
          {year} | {location}
        </small>
        {description && <p>{description}</p>}
        <Button href={url} outline>
          Le projet
        </Button>
      </div>
    </article>
  );
}

export function ProjectCard({ id, title, year, location, url, img }: ProjectPreviewProps) {
  return (
    <Link href={url} className={css.card}>
      <Image src={img} width={400} height={280} alt="" />
      <div className={css.body}>
        <h3>{title}</h3>
        <small>
          {year} | {location}
        </small>
        <span className={css.textLink}>
          Le projet
          <Image src={arrowRight} width={18} height={18} alt="" />
        </span>
      </div>
    </Link>
  );
}
