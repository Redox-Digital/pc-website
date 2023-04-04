import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../public/layouts/img-placeholder.png';
import style from '@/styles/components/Menu.module.scss';

export default function DropdownMenu() {
  return (
    <div className={style.submenu__content}>
      <Link
        href="/services/particuliers"
        style={{ backgroundImage: 'url(/layouts/particuliers-hero.jpg)' }}
      >
        {' '}
        <div className={style.overlay}></div>
        <h5>Particuliers</h5>
        <p>
          Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration
          d&rsquo;intérieur
        </p>
      </Link>
      <Link
        href="/services/collectivites"
        style={{ backgroundImage: 'url(/layouts/collectivites-hero.jpg)' }}
      >
        <div className={style.overlay}></div>
        <h5>Collectivités</h5>
        <p>
          Conception et réalisation de projets d’aménagement extérieur, gestion de projets publics
          pour les communes, écoles, crèches, homes, etc.
        </p>
      </Link>
      <Link
        href="/services/entreprises"
        style={{ backgroundImage: 'url(/layouts/entreprises-hero.jpg)' }}
      >
        {' '}
        <div className={style.overlay}></div>
        <h5>Entreprises</h5>
        <p>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </p>
      </Link>
    </div>
  );
}
