import Link from 'next/link';
import css from './ProjectPreview.module.scss';
import Image from 'next/image';
import arrowRight from '@/public/pictograms/arrow-right.svg';

export type ProjectPreviewProps = {
  id: string;
  title: string;
  year: number;
  location: string;
  url: string;
  img: string;
};

export default function ProjectPreview() {
  return null;
}

export function ProjectCard({ id, title, year, location, url, img }: ProjectPreviewProps) {
  return (
    <Link href={url} className={css.card}>
      <Image src={img} width={400} height={280} alt="" />
      <div className={css.body}>
        <h3>{title}</h3>
        <p>
          {year} | {location}
        </p>
        <span className={css.textLink}>
          Le projet
          <Image src={arrowRight} width={18} height={18} alt="" />
        </span>
      </div>
    </Link>
  );
}
