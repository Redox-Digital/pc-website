import ImageGallery from './ImageGallery';
import Image from 'next/image';
import style from '@/styles/components/Gallery.module.scss';
import btn from '@/styles/components/Button.module.scss';
import { Suspense, useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';

type Realisation = {
  id: number;
  title: string;
};

type Props = {
  allRealisations: Realisation[];
  surtitle: string;
  title: string;
  slug: 'particuliers' | 'collectivites' | 'entreprises';
};

export default function Gallery(props: Props) {
  const { allRealisations, title, surtitle, slug } = props;

  const galleryLength = allRealisations.length;
  const paginationStep = 9;

  const [pagination, setPagination] = useState<number>(paginationStep);
  const [fullImageId, setFullImageId] = useState<number | undefined>();

  const displayedRealisations = allRealisations;

  const keyboardNavigation = (evt: React.KeyboardEvent) => {
    switch (evt.key) {
      case 'Escape':
        hideOverlay();
        break;

      case 'ArrowRight':
        prevImg();
        break;

      case 'ArrowLeft':
        nextImg();
        break;

      default:
        break;
    }
  };

  const increasePagination = () => {
    setPagination(
      pagination + paginationStep <= galleryLength ? pagination + paginationStep : galleryLength
    );
    console.log('page ', pagination, '/ total length: ', galleryLength);
  };

  const showOverlay = (imgId: number) => {
    setFullImageId(imgId);
    console.log('Showing Overlay');
  };

  const hideOverlay = () => {
    setFullImageId(undefined);
    console.log('Hiding Overlay');
  };

  const nextImg = () => {
    if (fullImageId !== undefined && fullImageId >= galleryLength - 1) {
      setFullImageId(0);
    } else if (fullImageId !== undefined) {
      setFullImageId(fullImageId + 1);
    }
    console.log('Next ', fullImageId);
  };

  const prevImg = () => {
    if (fullImageId !== undefined && fullImageId <= 0) {
      setFullImageId(galleryLength - 1);
    } else if (fullImageId !== undefined) {
      setFullImageId(fullImageId - 1);
    }
    console.log('Prev ', fullImageId);
  };

  useEffect(() => {
    fullImageId !== undefined
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [fullImageId]);

  return (
    <section className={`${style.gallery} light`}>
      <div className="container">
        <div className={style.service__titles}>
          <h5>{surtitle}</h5>
          <h2>{title}</h2>
        </div>
        <div className={style.gallery__images}>
          {displayedRealisations
            .map((img) => <ImageGallery key={img.id} slug={slug} {...img} showImg={showOverlay} />)
            .slice(-1 * pagination)
            .reverse()}
        </div>

        {displayedRealisations.find((img) => img.id === fullImageId) ? (
          <div
            className={style.gallery__overlay}
            aria-hidden
            ref={(div) => div?.focus()}
            onKeyDown={(evt) => keyboardNavigation(evt)}
            tabIndex={-1}
          >
            <div className={style.gallery__overlay__drop} onClick={hideOverlay} />
            <figure className={style.image}>
              <i className="fa-solid fa-spinner" />

              <Image
                src={
                  displayedRealisations.find((img) => img.id === fullImageId)
                    ? `/realisations/${slug}/1500px/paris-et-comtesse_${slug}-${fullImageId}.jpg`
                    : ''
                }
                alt={''}
                width={1500}
                height={1500}
              />

              <figcaption className={style.gallery__overlay__img}>
                <small>
                  {displayedRealisations.find((img) => img.id === fullImageId)?.title || ''}
                </small>
              </figcaption>
            </figure>
            <button type="button" onClick={hideOverlay} className={style.btn__close}>
              Fermer
            </button>

            {/* fonctions onClick inversées car les images sont affichées dans l'ordre inverse */}
            <button type="button" onClick={prevImg} className={style.btn__next}>
              <Image src={arrowDown} alt={''}></Image>
            </button>

            <button type="button" onClick={nextImg} className={style.btn__prev}>
              <Image src={arrowDown} alt={''}></Image>
            </button>
          </div>
        ) : (
          ''
        )}

        {pagination < galleryLength && (
          <button
            className={`${btn.btn} ${btn.btn__secondary}`}
            type="button"
            onClick={increasePagination}
          >
            En voir plus
          </button>
        )}
      </div>
    </section>
  );
}
