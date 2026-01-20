import Image from 'next/image';
import css from './Galleries.module.scss';
import { DirectusFileType } from '@/constants/types';

interface GalleryMediaType extends DirectusFileType {
  src: string;
  onClick: () => void;
  viewer?: boolean;
  className?: string;
  // showImg: (file: DirectusGalleryApiType) => void;
}

export default function SquareImage({
  id,
  description,
  image,
  src,
  viewer,
  onClick,
  className,
}: // showImg,
GalleryMediaType) {
  return (
    <figure
      className={`${css.image} ${css.sqImage} ${viewer || css.readOnly} ${className}`}
      onClick={viewer ? onClick : () => null}
    >
      <Image
        // DEV : static URL
        src={src}
        alt={description || ''}
        width={500}
        height={500}
      />
      {viewer && (
        <figcaption className={css.imageOverlay}>
          <p>{description}</p>
        </figcaption>
      )}
    </figure>
  );
}

export function MasonryImage({
  id,
  image,
  description,
  src,
  viewer,
  onClick,
  className,
}: // showImg,
GalleryMediaType) {
  return (
    <figure
      className={`${css.masonryImage} ${viewer || css.readOnly} ${className}`}
      onClick={viewer ? onClick : () => null}
    >
      <Image src={src} alt={description || ''} width={image.width} height={image.height} />
      {viewer && (
        <figcaption className={css.imageOverlay}>
          <p>{description}</p>
        </figcaption>
      )}
    </figure>
  );
}
