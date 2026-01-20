import css from './MobileMenu.module.scss';
import menu from './Menu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Address from '../content/Address';
import Socials from '../content/Socials';
import { mainNavLinks, NavLinkType } from '@/constants/navigation';
import Button from './Button';

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
      <nav className={`${css.mobileMenu} ${open ? css.mobileMenu__open : css.mobileMenu__closed}`}>
        <div className={css.mobileMenu__links}>
          {mainNavLinks.map((l: NavLinkType) => (
            <>
              {l.subLinks && l.subLinks.length !== 0 ? (
                l.subLinks.map((sub) => (
                  <Link key={sub.url} href={sub.url} onClick={toggleMenu}>
                    {sub.label}
                  </Link>
                ))
              ) : (
                <Link href={l.url} key={l.url} onClick={toggleMenu}>
                  {l.label}
                </Link>
              )}
            </>
          ))}
        </div>
        <Address />
        <div className={css.mobileMenu__socials}>
          <Socials />
        </div>
      </nav>
    </>
  );
}
