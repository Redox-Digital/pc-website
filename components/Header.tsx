import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.svg'
import DropdownMenuItem from './DropdownMenuItem';


const Header = () => {
    return ( 
        <header>
            <Image src={logo} alt="logo" width={150} height={60} />
            <Link href="/">Accueil</Link>
            <Link href="/services">Services ↓</Link>
            <Link href="/about">À propos</Link>
            <Link href="/carreer">Emplois</Link>
            <Link href="/contact" className="btn btn-primary">Contact</Link>
            <DropdownMenuItem />
        </header>
     );
}
 
export default Header;