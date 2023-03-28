import Image from 'next/image';
import style from '@/styles/components/ImageGallery.module.scss';

type Props = {
  path: string;
  title: string;
};

export default function ImageGallery({ path, title }: Props) {
  return (
    <div className={style.image}>
      <img src={path} alt={''} />
      <div className={style.image__overlay}>
        <p>{title}</p>
      </div>
    </div>
  );
}
