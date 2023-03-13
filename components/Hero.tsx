import Image from 'next/image'
import style from '@/styles/Hero.module.css'


const Hero = (props) => {
    return (
        <div className={style.hero}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.subtitle}>{props.subtitle}</p>
            <Image src={props.source} alt="hero" width={1100} height={620} className="a"/>
        </div>
    );
}

export default Hero;