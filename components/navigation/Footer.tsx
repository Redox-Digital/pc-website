import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo/p-c_logo_bj.svg';
import style from './Footer.module.scss';
import Socials from '../content/Socials';
import Address from '../content/Address';
import Button from './Button';
import React from 'react';
import { mainNavLinks } from '@/constants/navigation';

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
            {mainNavLinks.map((l) => (
              <React.Fragment key={l.url}>
                {l.subLinks ? (
                  <div className={style.footer__submenu}>
                    <h5>{l.label}</h5>
                    {l.subLinks.map((sub) => (
                      <Link key={sub.url} href={sub.url}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={l.url}>{l.label}</Link>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={style.footerBody__bottom__left}>
            <Address />

            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className="container">
          <small>
            &copy; 2026 Paris & Comtesse SA – Site web réalisé par{' '}
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
