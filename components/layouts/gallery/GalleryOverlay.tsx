import Image from 'next/image';
import css from './Galleries.module.scss';
import arrowDown from '/public/pictograms/arrow-down.svg';
import { DirectusFileType } from '@/constants/types';

type OverlayProps = {
  fullImage: DirectusFileType;
  invertBtns?: boolean;
  toggleOverlay: () => void;
  prevImg: () => void;
  nextImg: () => void;
};

export default function Overlay({
  fullImage,
  invertBtns,
  toggleOverlay,
  prevImg,
  nextImg,
}: OverlayProps) {
  const keyboardNavigation = (evt: React.KeyboardEvent) => {
    switch (evt.key) {
      case 'Escape':
        toggleOverlay();
        break;

      case 'ArrowRight':
        invertBtns ? prevImg() : nextImg();

        break;

      case 'ArrowLeft':
        invertBtns ? nextImg() : prevImg();
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={css.overlay}
      aria-hidden
      ref={(div) => div?.focus()}
      onKeyDown={(evt) => keyboardNavigation(evt)}
      tabIndex={-1}
    >
      <div className={css.overlayDrop} onClick={() => toggleOverlay()} />
      <figure className={css.overlayImage}>
        <i className="icon-spinner9" />

        <Image
          // DEV : static URL
          // Getting full size media
          src={`${process.env.api}/assets/${fullImage.image.id}` || ''}
          alt={''}
          width={1500}
          height={1500}
        />

        {fullImage.description && (
          <figcaption>
            <small>{fullImage.description}</small>
          </figcaption>
        )}
      </figure>
      <button type="button" onClick={() => toggleOverlay()} className={css.btn__close}>
        Fermer
      </button>

      <button type="button" onClick={invertBtns ? nextImg : prevImg} className={css.btn__left}>
        <Image src={arrowDown} alt={''} />
      </button>

      <button type="button" onClick={invertBtns ? prevImg : nextImg} className={css.btn__right}>
        <Image src={arrowDown} alt={''} />
      </button>
    </div>
  );
}
