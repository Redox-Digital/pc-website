import Image from 'next/image';
import style from '@/styles/layouts/Services.module.scss';

type Props = {
  path: string;
  title: string;
};

export default function ImageGallery({ path, title }: Props) {
  return (
    <figure className={style.image}>
      <img src={path} alt={title} />
      <figcaption className={style.image__overlay}>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
}
