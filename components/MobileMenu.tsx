import style from '@/styles/components/MobileMenu.module.scss';
import menu from '@/styles/components/Menu.module.scss';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

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

  return (
    <>
      <nav
        className={`${style.mobileMenu} ${
          open ? style.mobileMenu__open : style.mobileMenu__closed
        }`}
      >
        <div className={style.mobileMenu__links}>
          <Link href="/" onClick={toggleMenu}>
            Accueil
          </Link>
          <button type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <Link href="/about" onClick={toggleMenu}>
            À propos
          </Link>
          <Link href="/careers" onClick={toggleMenu}>
            Emplois
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className={style.mobileMenu__contactInfos}>
          <div className={style.mobileMenu__contactInfos__elt}>
            <h5>Téléphone</h5>
            <p>
              <span id="phone"></span>
            </p>
          </div>
          <div className={style.mobileMenu__contactInfos__elt}>
            <h5>Adresse</h5>
            <p>Chem. de la Baconnière 55, 2017 Boudry</p>
          </div>
          <div className={style.mobileMenu__contactInfos__elt}>
            <h5>Horaires</h5>
            <p>
              Lundi au Jeudi:&nbsp;7h00-12h00 / 13h00-17h00
              <br />
              Vendredi:&nbsp;&nbsp;&nbsp;&emsp;&emsp;7h00-12h00
            </p>
          </div>
        </div>
        <div className={style.mobileMenu__socials}>
          <Link href="#" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
      </nav>
      <nav
        className={`${style.mobileSubMenu} ${
          subMenuOpen ? style.mobileSubMenu__open : style.mobileSubMenu__closed
        }`}
      >
        <div className={style.mobileSubMenu__top}>
          <button type="button" onClick={toggleSubMenu}>
            Services
          </button>
          <button
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
            style={{ backgroundImage: 'url(/layouts/bg-particuliers.png)' }}
          >
            Particuliers
          </Link>
          <Link
            href="/services/collectivites"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/bg-collectivites.png)' }}
          >
            Collectivités
          </Link>
          <Link
            href="/services/entreprises"
            onClick={toggleAllMenus}
            style={{ backgroundImage: 'url(/layouts/bg-entreprises.png)' }}
          >
            Entreprises
          </Link>
        </div>
      </nav>
    </>
  );
}
