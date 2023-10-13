import style from '@/styles/components/MobileMenu.module.scss';
import menu from '@/styles/components/Menu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Socials from './Socials';
import Address from './Address';

type Props = {
  open: boolean;
  toggleMenu: () => void;
};

export default function MobileMenu(props: Props) {
  const { open, toggleMenu } = props;

  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const toggleAllMenus = () => {
    toggleSubMenu();
    toggleMenu();
  };

  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <>
      <nav
        className={`${style.mobileMenu} ${
          open ? style.mobileMenu__open : style.mobileMenu__closed
        }`}
      >
        <div className={style.mobileMenu__links}>
          <Link href="/" onClick={toggleMenu} aria-label="Accéder à la page d'accueil">
            Accueil
          </Link>
          <button aria-label="Afficher nos services" type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <Link href="/about" onClick={toggleMenu} aria-label="Accéder à la page d'à propos">
            À propos
          </Link>
          <Link href="/careers" onClick={toggleMenu} aria-label="Accéder à la page d'emplois">
            Emplois
          </Link>
          <Link href="/contact" onClick={toggleMenu} aria-label="Accéder à la page de contact">
            Contact
          </Link>
        </div>
        <Address />
        <div className={style.mobileMenu__socials}>
          <Socials />
        </div>
      </nav>
      <nav
        className={`${style.mobileSubMenu} ${
          subMenuOpen ? style.mobileSubMenu__open : style.mobileSubMenu__closed
        }`}
      >
        <div className={style.mobileSubMenu__top}>
          <button aria-label="Afficher nos services" type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <button
            aria-label="Ouvrir la navigation mobile"
            className={`${menu.burger} ${open ? menu.burger__closed : ''}`}
            onClick={toggleAllMenus}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={style.mobileSubMenu__body}>
          <Link
            href="/services/particuliers"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/particuliers-thumbnail.webp)' }}
          >
            <div className={style.overlay}></div>
            <h5>Particuliers</h5>
          </Link>
          <Link
            href="/services/collectivites"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/collectivites-thumbnail.webp)' }}
          >
            <div className={style.overlay}></div>
            <h5>Collectivités</h5>
          </Link>
          <Link
            href="/services/entreprises"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/entreprises-thumbnail.webp)' }}
          >
            <div className={style.overlay}></div>
            <h5>Entreprises</h5>
          </Link>
        </div>
      </nav>
    </>
  );
}
