import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../public/layouts/img-placeholder.png';
import style from '@/styles/components/Menu.module.scss';

export default function DropdownMenu() {
  return (
    <div className={style.submenu__content}>
      <Link href="/services/particuliers" style={{ backgroundImage: 'url(/layouts/bg-home.jpg)' }}>
        <h5>Particuliers</h5>
        <p>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </p>
      </Link>
      <Link href="/services/collectivites" style={{ backgroundImage: 'url(/layouts/bg-home.jpg)' }}>
        <h5>Collectivités</h5>
        <p>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </p>
      </Link>
      <Link href="/services/entreprises" style={{ backgroundImage: 'url(/layouts/bg-home.jpg)' }}>
        <h5>Entreprises</h5>
        <p>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </p>
      </Link>
    </div>
  );
  {
    /* 
    <menu className="hidden">
      <Image src={placeholder} alt="vercel" width={150} height={100} />
      <Image src={placeholder} alt="next" width={150} height={100} />
      <Image src={placeholder} alt="logo" width={150} height={100} />
    </menu>
  */
  }
}
