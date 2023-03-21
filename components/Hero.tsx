import Image from 'next/image'
import style from '@/styles/components/Hero.module.scss'
import Link from 'next/link';

type Props = {
    title: string;
    subtitle: string;
    source: string;
    home?: boolean;
}

const Hero = (props: Props) => {
    const { title, subtitle, source, home } = props;

    return (
        <header className={`${style.hero} ${home ? style.hero__home : ''}`} style={{ backgroundImage: `url(${source})` }}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
            <Link href="#"><i className="fa-solid fa-arrow-down-long"></i></Link>
        </header>
    );
}

export default Hero;