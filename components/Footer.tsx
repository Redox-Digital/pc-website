import Image from 'next/image'
import Link from 'next/link';
import logo from '/public/logo.svg';
import style from '@/styles/components/Footer.module.scss'
import Button from './Button';

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
                        <Link href="#" target='_blank'><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="#" target='_blank'><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="#" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className={style.footerBody__bottom}>
                    <div className={style.footerBody__bottom__right}>
                        <Link href="/">Accueil</Link>
                        <div className={style.footer__submenu}>
                            <h5>Services</h5>
                            <Link href="#">Particuliers</Link>
                            <Link href="#">Collectivités</Link>
                            <Link href="#">Entreprises</Link>
                        </div>

                        <Link href="/about">À propos</Link>
                        <Link href="/careers">Emplois</Link>
                    </div>
                    <div className={style.footerBody__bottom__left}>
                        <div className={style.footerBody__bottom__left__elt}>
                            <h5>Téléphone</h5>
                            <p><span id="phone"></span></p>
                        </div>

                        <div className={style.footerBody__bottom__left__elt}>
                            <h5>Adresse</h5>
                            <p>Chem. de la Baconnière 55, 2017 Boudry</p>
                        </div>
                        <div className={style.footerBody__bottom__left__elt}>
                            <h5>Horaires</h5>
                            <p>Lundi au Jeudi:&nbsp;7h00-12h00 / 13h00-17h00<br />Vendredi:&nbsp;&nbsp;&nbsp;&emsp;&emsp;7h00-12h00</p>
                        </div>

                        <Button size="big" to="/contact">Contact</Button>
                    </div>
                </div >
            </div >
            <div className={style.footerBottom}><small>&copy; 2023 Paris & Comtesse SA – Site web réalisé par <Link href="https://redoxdigital.ch" target='_blank'>Redox Digital</Link> & <Link href="https://websauce.ch" target='_blank'>websauce</Link></small></div>
        </footer >
    );
}