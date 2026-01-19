import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/p-c_logo_bj.svg';
import DropdownMenu from './DropdownMenu';
import css from './Menu.module.scss';
import burgerCss from './Burger.module.scss';
import Button from './Button';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import { mainNavLinks, NavLinkType } from '@/constants/navigation';

export default function Header() {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [scrollingUp, setScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeBackground = () => {
    if (window.scrollY > 120) {
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
      const displayOnScroll = () => {
        if (typeof window !== 'undefined') {
          if (window.scrollY >= lastScrollY && lastScrollY >= 0) {
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
        className={`${css.menu} ${navbar ? css.menu__scrolling : ''} ${
          menuOpen ? css.menu__open : ''
        } ${scrollingUp ? '' : css.menu__hidden}`}
      >
        <div className={css.mainMenu}>
          <div className={css.mainMenu__container}>
            <Link href="/" className={css.logo} aria-label="Accéder à la page d'accueil">
              <Image src={logo} alt="" height={30} className="logo" />
            </Link>

            <div className={css.menu__links}>
              {mainNavLinks.map((l: NavLinkType) => (
                <>
                  {l.subLinks && l.subLinks.length !== 0 ? (
                    <div key={l.url}>
                      <span>{l.label}</span>

                      <div className={css.sublinks}>
                        {l.subLinks.map((sub) => (
                          <Link key={sub.url} href={sub.url}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : l.btn ? (
                    <Button key={l.url} href={l.url}>
                      {l.label}
                    </Button>
                  ) : (
                    <Link href={l.url} key={l.url}>
                      {l.label}
                    </Link>
                  )}
                </>
              ))}
            </div>
            <Burger toggleMenu={toggleMenu} menuOpen />
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

type BurgerProps = {
  toggleMenu: () => void;
  menuOpen?: boolean;
};

function Burger({ toggleMenu, menuOpen }: BurgerProps) {
  return (
    <button
      className={`${burgerCss.burger} ${menuOpen ? burgerCss.burger__closed : ''}`}
      onClick={toggleMenu}
      aria-label="Ouvrir la navigation mobile"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
