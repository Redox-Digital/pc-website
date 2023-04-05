import ImageGallery from './ImageGallery';
import Image from 'next/image';
import style from '@/styles/components/Gallery.module.scss';
import btn from '@/styles/components/Button.module.scss';
import { useEffect, useState } from 'react';
import arrowDown from '/public/pictograms/arrow-down.svg';

type Realisation = {
  id: number;
  title: string;
};

type Props = {
  realisations: Realisation[];
  surtitle: string;
  title: string;
  slug: 'particuliers' | 'collectivites' | 'entreprises';
};

export default function Gallery(props: Props) {
  const { realisations, title, surtitle, slug } = props;

  const galleryLength = realisations.length;

  const [fullImageId, setFullImageId] = useState<number | undefined>();

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
          {realisations.map((img) => (
            <ImageGallery key={img.id} slug={slug} {...img} showImg={showOverlay} />
          ))}
        </div>

        {realisations.find((img) => img.id === fullImageId) ? (
          <div className={style.gallery__overlay}>
            <div className={style.gallery__overlay__drop} onClick={hideOverlay} />
            <figure className={style.image}>
              <Image
                src={
                  realisations.find((img) => img.id === fullImageId)
                    ? `/realisations/${slug}/${slug}-${fullImageId}.jpg`
                    : ''
                }
                alt={''}
                width={1000}
                height={1000}
              />
              <figcaption className={style.gallery__overlay__img}>
                <small>{realisations.find((img) => img.id === fullImageId)?.title || ''}</small>
              </figcaption>
            </figure>
            <button type="button" onClick={hideOverlay} className={style.btn__close}>
              Fermer
            </button>

            <button type="button" onClick={nextImg} className={style.btn__next}>
              <Image src={arrowDown} alt={''}></Image>
            </button>

            <button type="button" onClick={prevImg} className={style.btn__prev}>
              <Image src={arrowDown} alt={''}></Image>
            </button>
          </div>
        ) : (
          ''
        )}

        <button className={`${btn.btn} ${btn.btn__secondary}`} type="button">
          En voir plus
        </button>
      </div>
    </section>
  );
}
