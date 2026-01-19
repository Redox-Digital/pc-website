import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/p-c_logo_bj.svg';
import style from './Footer.module.scss';
import Socials from '../content/Socials';
import Address from '../content/Address';
import Button from './Button';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerBody}>
        <div className={style.footerBody__logo}>
          <Image src={logo} alt="logo" className="logo" />
        </div>
        <div className={style.footerBody__top}>
          <h5>Suivez-nous sur les réseaux sociaux</h5>
          <div className={style.footerBody__top__socials}>
            <Socials />
          </div>
        </div>
        <div className={style.footerBody__bottom}>
          <div className={style.footerBody__bottom__right}>
            <Link aria-label="Accéder à la page d'accueil" href="/">
              Accueil
            </Link>
            <div className={style.footer__submenu}>
              <h5>Services</h5>
              <Link href="/services/particuliers">Particuliers</Link>
              <Link href="/services/collectivites">Collectivités</Link>
              <Link href="/services/entreprises">Entreprises</Link>
            </div>

            <Link href="/a-propos">À propos</Link>
            <Link href="/emplois">Emplois</Link>
          </div>
          <div className={style.footerBody__bottom__left}>
            <Address />

            <Button ariaLabel="Vers le formulaire de contact" size="big" href="/contact">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className="container">
          <small>
            &copy; 2023 Paris & Comtesse SA – Site web réalisé par{' '}
            <Link
              aria-label="Accéder au site de Redox Digital"
              href="https://redoxdigital.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redox&nbsp;Digital
            </Link>
          </small>
          <small>
            <Link href="/confidentialite">Confidentialité & mentions légales</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
