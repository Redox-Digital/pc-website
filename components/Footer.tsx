import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/p-c_logo_bj.svg';
import style from '@/styles/components/Footer.module.scss';
import Button from './Button';
import Address from './Address';

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
        </div>
        <div className={style.footerBody__bottom}>
          <div className={style.footerBody__bottom__right}>
            <Link href="/">Accueil</Link>
            <div className={style.footer__submenu}>
              <h5>Services</h5>
              <Link href="/services/particuliers">Particuliers</Link>
              <Link href="/services/collectivites">Collectivités</Link>
              <Link href="/services/entreprises">Entreprises</Link>
            </div>

            <Link href="/about">À propos</Link>
            <Link href="/careers">Emplois</Link>
          </div>
          <div className={style.footerBody__bottom__left}>
            <Address />

            <Button size="big" to="/contact">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <small>
          &copy; 2023 Paris & Comtesse SA – Site web réalisé par{' '}
          <Link href="https://redoxdigital.ch" target="_blank">
            Redox&nbsp;Digital
          </Link>
          , avec{' '}
          <Link href="https://redoxdigital.ch" target="_blank">
            S. Mettraux
          </Link>
        </small>
      </div>
    </footer>
  );
}
