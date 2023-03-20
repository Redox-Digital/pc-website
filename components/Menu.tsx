import Image from 'next/image'
import Link from 'next/link';
import logo from '/public/logo.svg'
import DropdownMenuItem from './DropdownMenuItem';
import style from '@/styles/components/Menu.module.scss'
import Button from './Button';


const Header = () => {
    return (
        <>
            <nav className={`${style.menu}`}>
                <div className={style.mainMenu}>
                    <Link href="/"><Image src={logo} alt="logo" height={30} className="logo" /></Link>

                    <div className={style.menu__links}>
                        <Link href="/">Accueil</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/about">À propos</Link>
                        <Link href="/careers">Emplois</Link>
                        <Button to="/contact" size='small'>Contact</Button>
                    </div>
                    <button className={style.burger}>
                        <span className={style.burger__line}></span>
                        <span className={style.burger__line}></span>
                        <span className={style.burger__line}></span>
                    </button></div>
            </nav>
            {/* <DropdownMenuItem /> */}
        </>
    );
}

export default Header;