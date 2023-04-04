import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/p-c_logo_bj.svg';
import style from '@/styles/components/Footer.module.scss';
import Button from './Button';
import Address from './Address';
import Socials from './Socials';

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
          <Link href="https://redoxdigital.ch" target="_blank" rel="noopener noreferrer">
            Redox&nbsp;Digital
          </Link>
        </small>
      </div>
    </footer>
  );
}
