import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/p-c_logo_bj.svg';
import DropdownMenu from './DropdownMenu';
import style from '@/styles/components/Menu.module.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [scrollingUp, setScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const displayOnScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setScrollingUp(false);
      } else {
        // if scroll up show the navbar
        setScrollingUp(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', displayOnScroll);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', displayOnScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`${style.menu} ${navbar ? style.menu__scrolling : ''} ${
          menuOpen ? style.menu__open : ''
        } ${scrollingUp ? '' : style.menu__hidden}`}
      >
        <div className={style.mainMenu}>
          <div className={style.mainMenu__container}>
            <Link href="/" className={style.logo}>
              <Image src={logo} alt="" height={30} className="logo" />
            </Link>

            <div className={style.menu__links}>
              <Link href="/">Accueil</Link>
              <Link href="#" scroll={false} className={style.submenu}>
                Services
              </Link>
              <DropdownMenu />

              <Link href="/about">À propos</Link>
              <Link href="/careers">Emplois</Link>
              <Button to="/contact" size="small" addClass="btn">
                Contact
              </Button>
            </div>
            <button
              className={`${style.burger} ${menuOpen ? style.burger__closed : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
