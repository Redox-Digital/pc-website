import Link from 'next/link';
import style from '@/styles/components/Menu.module.scss';

export default function DropdownMenu() {
  return (
    <div className={style.submenu__content}>
      <Link
        href="/services/particuliers"
        style={{ backgroundImage: 'url(/layouts/particuliers-thumbnail.webp)' }}
      >
        <div className={style.overlay}></div>
        <h5>Particuliers</h5>
        <p aria-hidden>
          Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration
          d&rsquo;intérieur
        </p>
      </Link>
      <Link
        href="/services/collectivites"
        style={{ backgroundImage: 'url(/layouts/collectivites-thumbnail.webp)' }}
      >
        <div className={style.overlay}></div>
        <h5>Collectivités</h5>
        <p aria-hidden>
          Conception et réalisation de projets d’aménagement extérieur, gestion de projets publics
          pour les communes, écoles, crèches, homes, etc.
        </p>
      </Link>
      <Link
        href="/services/entreprises"
        style={{ backgroundImage: 'url(/layouts/entreprises-thumbnail.webp)' }}
      >
        <div className={style.overlay}></div>
        <h5>Entreprises</h5>
        <p aria-hidden>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </p>
      </Link>
    </div>
  );
}
