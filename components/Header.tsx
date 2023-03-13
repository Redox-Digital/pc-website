import Image from 'next/image'
import Link from 'next/link';
import logo from '/public/logo.svg'
import DropdownMenuItem from './DropdownMenuItem';


const Header = () => {
    return (
        <>
            <nav>
                <Image src={logo} alt="logo" width={150} height={60} className="logo"/>
                <Link href="/">Accueil</Link>
                <Link href="/services">Services ↓</Link>
                <Link href="/about">À propos</Link>
                <Link href="/carreers">Emplois</Link>
                <Link href="/contact" className="btn btn-primary">Contact</Link>
            </nav>
            <DropdownMenuItem />
        </>
    );
}

export default Header;