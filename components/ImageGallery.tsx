import Image from 'next/image';
import style from '@/styles/components/Gallery.module.scss';

type Props = {
  slug: 'particuliers' | 'collectivites' | 'entreprises';
  id: number;
  title: string;
  showImg: (id: number) => void;
};

export default function ImageGallery({ title, id, slug, showImg }: Props) {
  return (
    <figure className={style.image} onClick={() => showImg(id)}>
      <Image
        src={`/realisations/${slug}/${slug}-${id}.jpg`}
        alt={title}
        width={1000}
        height={1000}
      />
      <figcaption className={style.image__overlay}>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
}
