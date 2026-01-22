import css from './Galleries.module.scss';
import btnCss from '@/components/navigation/Button.module.scss';
import { useEffect, useRef, useState } from 'react';
import Overlay from './GalleryOverlay';
import SquareImage, { MasonryImage } from './GalleryImage';
import { DirectusFileType, RealisationApiType } from '@/constants/types';
import SectionTitle from '../SectionTitle';

type Props = {
  masonry?: boolean;
  viewer?: boolean;
  pagination?: number;
  media: RealisationApiType[];
};

export default function Gallery({ masonry, viewer, pagination, media }: Props) {
  // ### GET MEDIA FROM API ###
  const [displayedMedia, setDisplayedMedia] = useState<RealisationApiType[]>(media);

  // ### IMAGE FULL-SIZE VIEWER ###
  const [fullImage, setFullImage] = useState<RealisationApiType>();
  const toggleOverlay = (file?: RealisationApiType) => setFullImage(file);

  const nextImg = () => {
    if (fullImage) {
      if (displayedMedia.indexOf(fullImage) + 1 < displayedMedia.length)
        setFullImage(displayedMedia[displayedMedia.indexOf(fullImage) + 1]);
      else setFullImage(displayedMedia[0]);
    }
  };

  const prevImg = () => {
    if (fullImage) {
      if (displayedMedia.indexOf(fullImage) - 1 < 0)
        setFullImage(displayedMedia[displayedMedia.length - 1]);
      else setFullImage(displayedMedia[displayedMedia.indexOf(fullImage) - 1]);
    }
  };

  useEffect(() => {
    fullImage !== undefined
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [fullImage]);

  const staticFilters: { slug: string; label: string }[] = [
    { slug: 'filtre-1', label: 'Filtre 1' },
    { slug: 'filtre-2', label: 'Filtre 2' },
    { slug: 'filtre-3', label: 'Filtre 3' },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('');

  useEffect(() => {
    if (activeFilter) {
      setDisplayedMedia(media.filter((m) => m.tags?.includes(activeFilter)));
    } else {
      setDisplayedMedia(media);
    }
  }, [activeFilter, media]);

  return (
    <section className={`${css.gallery} light`}>
      <div className="container">
        <SectionTitle
          title="Découvrez nos réalisations"
          surtitle={'Une image vaut mille mots'}
          alignLeft
          className={css.titles}
        />

        <div className={css.filters}>
          <button
            type="reset"
            className={`${css.tag} ${activeFilter === '' && css.active}`}
            onClick={() => setActiveFilter('')}
          >
            Tous
          </button>
          {staticFilters.map((f) => (
            <label key={f.slug} className={`${css.tag} ${activeFilter === f.slug && css.active}`}>
              <input
                type="radio"
                name="filter"
                id={f.slug}
                checked={activeFilter === f.slug}
                onClick={() => setActiveFilter(f.slug)}
              />
              <span>{f.label}</span>
            </label>
          ))}
        </div>

        {displayedMedia && displayedMedia.length > 0 ? (
          masonry ? (
            <MasonryGallery
              media={displayedMedia}
              viewer={viewer}
              breakpoints={{ default: 2, 900: 3, 1200: 4 }}
              toggleOverlay={toggleOverlay}
            />
          ) : (
            <SquareGallery
              media={displayedMedia}
              toggleOverlay={toggleOverlay}
              viewer={viewer}
              pagination={pagination}
            />
          )
        ) : (
          <p>
            <i>Aucun projet ne correspond à vos filtres.</i>
          </p>
        )}

        {!media && <p>Un problème est survenu. Impossible de charger les réalisations.</p>}

        {/* OVERLAY */}
        {fullImage && viewer ? (
          <Overlay
            fullImage={fullImage}
            toggleOverlay={toggleOverlay}
            prevImg={prevImg}
            nextImg={nextImg}
            invertBtns={!masonry}
          />
        ) : (
          ''
        )}
        {/* .OVERLAY */}
      </div>
    </section>
  );
}

type SquareGalleryProps = {
  media: DirectusFileType[];
  viewer?: boolean;
  pagination?: number;
  toggleOverlay: (file?: DirectusFileType) => void;
};

function SquareGallery({ media, viewer, pagination = 0, toggleOverlay }: SquareGalleryProps) {
  const displayedMedia = media;
  const [nbDisplayedItem, setNbDisplayedItem] = useState<number>(pagination);

  const increasePagination = () => {
    setNbDisplayedItem(
      nbDisplayedItem + pagination < media.length ? nbDisplayedItem + pagination : media.length
    );
  };

  console.log(media);

  return (
    <>
      <div className={css.galleryImages}>
        {displayedMedia &&
          displayedMedia
            .map((medium) => (
              <SquareImage
                key={medium.id}
                src={`${process.env.api}/assets/${medium.image.id}`} // DEV : img size + cover
                {...medium}
                onClick={() => toggleOverlay(medium)}
                viewer={viewer}
              />
            ))
            .slice(-1 * nbDisplayedItem)
            .reverse()}
      </div>
      {nbDisplayedItem !== 0 && nbDisplayedItem < media.length ? (
        <button className={`${btnCss.btn}`} type="button" onClick={increasePagination}>
          En voir plus
        </button>
      ) : (
        ''
      )}
    </>
  );
}

type MasonryGalleryProps = {
  media: RealisationApiType[];
  viewer?: boolean;
  breakpoints?: BreakpointsType;
  toggleOverlay: (file?: RealisationApiType) => void;
};

/**
 * No pagination for now
 */
function MasonryGallery({
  media,
  viewer,
  breakpoints = { default: 1, 500: 2, 900: 3, 1200: 4 },
  toggleOverlay,
}: MasonryGalleryProps) {
  // DEV : static value
  const columnCount = useResponsiveColumns(breakpoints);

  const columns = createMasonryColumns(media, columnCount);

  return (
    <div className={css.masonryGrid}>
      {columns.map((col, colIndex) => (
        <div key={colIndex} className={css.masonryCol}>
          {col.map((medium) => (
            <MasonryImage
              key={medium.id}
              src={`${process.env.api}/assets/${medium.image.id}?width=400`}
              {...medium}
              onClick={() => toggleOverlay(medium)}
              viewer={viewer}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function createMasonryColumns(media: RealisationApiType[], colCount: number) {
  // Initialize N empty columns
  const columns: RealisationApiType[][] = Array.from({ length: colCount }, () => []);
  const columnHeights = Array(colCount).fill(0);

  for (const item of media) {
    // Find the column with the smallest accumulated height
    const targetColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

    // Push this item into the "best" column
    columns[targetColumnIndex].push(item);

    // Increase that column’s height by the media height
    columnHeights[targetColumnIndex] += item.image.height;
  }

  return columns;
}

type BreakpointsType = {
  [width: number]: number; // e.g. 1024: 3
} & {
  default: number;
};

function useResponsiveColumns(breakpoints: BreakpointsType, debounceDelay = 150) {
  const [columns, setColumns] = useState<number>(breakpoints.default);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR safety

    const handleResize = () => {
      // Clear any previous queued updates
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Debounce
      timeoutRef.current = setTimeout(() => {
        // Use RAF for smoothness
        window.requestAnimationFrame(() => {
          const width = window.innerWidth;

          let col = breakpoints.default;

          const sorted = Object.keys(breakpoints)
            .filter((bp) => bp !== 'default')
            .map(Number)
            .sort((a, b) => a - b);

          for (const bp of sorted) {
            if (width >= bp) col = breakpoints[bp];
          }

          setColumns(col);
        });
      }, debounceDelay);
    };

    // Run once on mount
    handleResize();

    // Listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [breakpoints, debounceDelay]);

  return columns;
}
