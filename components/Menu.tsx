import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.svg';
import DropdownMenuItem from './DropdownMenuItem';
import style from '@/styles/components/Menu.module.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <nav className={`${style.menu} ${navbar ? 'bg-dark' : ''}`}>
        <div className={style.mainMenu}>
          <Link href="/">
            <Image src={logo} alt="logo" height={30} className="logo" />
          </Link>

          <div className={style.menu__links}>
            <Link href="/">Accueil</Link>
            <Link href="#" scroll={false} className={style.submenu}>
              Services
            </Link>
            <DropdownMenuItem />

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
      </nav>
      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
