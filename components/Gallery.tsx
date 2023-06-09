import ImageGallery from './ImageGallery';
import Image from 'next/image';
import style from '@/styles/components/Gallery.module.scss';
import btn from '@/styles/components/Button.module.scss';
import { Suspense, useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';

type Realisation = {
  id: number;
  description: string;
  image: string;
  category: 'individual' | 'collectivity' | 'enterprise';
};

type Props = {
  surtitle: string;
  title: string;
  slug: 'particuliers' | 'collectivites' | 'entreprises';
};

export default function Gallery({ title, surtitle, slug }: Props) {
  const [realisationsApi, setRealisations] = useState<Realisation[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const galleryLength = realisationsApi?.length || 0;
  const paginationStep = 9;

  const [pagination, setPagination] = useState<number>(paginationStep);
  const [fullImageId, setFullImageId] = useState<number>();

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`https://pc.redoxdigital.ch/items/realisation?search=${slug}`)
        .then((res) => res.json())
        .then((realisations) => {
          setRealisations(realisations.data);
          setLoading(false);
        });
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  }, [slug]);

  const displayedRealisations = realisationsApi;

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
    console.log('Showing Overlay: ', imgId, 'array position: ');
  };

  const hideOverlay = () => {
    setFullImageId(undefined);
    console.log('Hiding Overlay');
  };

  const nextImg = () => {
    // setFullImageId(realisation.nextId);
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
          {displayedRealisations &&
            displayedRealisations
              .map((realisation) => (
                <ImageGallery
                  key={realisation.id}
                  id={realisation.id}
                  image={realisation.image}
                  description={realisation.description}
                  showImg={showOverlay}
                />
              ))
              .slice(-1 * pagination)
              .reverse()}
        </div>

        {fullImageId && (
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
                  `https://pc.redoxdigital.ch/assets/${
                    displayedRealisations?.find((img) => img.id === fullImageId)?.image
                  }` || ''
                }
                alt={''}
                width={1500}
                height={1500}
              />

              <figcaption className={style.gallery__overlay__img}>
                <small>
                  {displayedRealisations?.find((img) => img.id === fullImageId)?.description || ''}
                </small>
              </figcaption>
            </figure>
            <button type="button" onClick={hideOverlay} className={style.btn__close}>
              Fermer
            </button>

            <button type="button" onClick={prevImg} className={style.btn__next}>
              <Image src={arrowDown} alt={''}></Image>
            </button>

            <button type="button" onClick={nextImg} className={style.btn__prev}>
              <Image src={arrowDown} alt={''}></Image>
            </button>
          </div>
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
