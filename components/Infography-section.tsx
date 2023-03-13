import style from '@/styles/Infography.module.css'
import Image from 'next/image'
import satisfaction from '@/public/award-ico.svg'
import savoirFaire from '@/public/gear-ico.svg'
import passion from '@/public/hands-ico.svg'
import innovation from '@/public/lightbulb-ico.svg'
import qualite from '@/public/stamp-ico.svg'


const Infography = (props) => {
    return (
        <div className={style.infography}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.paragraph}>{props.paragraph}</p>
            <div className={style.line}>
                <div className={style.column}>
                    <Image src={qualite} width="100" height="100" alt="Qualité" />
                    <label htmlFor="Qualité" className={style.label}>{props.label1}</label>
                    <p>Lorem Ipsum</p>
                </div>
                <div className={style.column}>
                    <Image src={innovation} width="100" height="100" alt="Innovation" />
                    <label htmlFor="Innovation" className={style.label}>{props.label2}</label>
                    <p>Lorem Ipsum</p>
                </div>
                <div className={style.column}>
                    <Image src={savoirFaire} width="100" height="100" alt="Savoir-Faire" />
                    <label htmlFor="Savoir-Faire" className={style.label}>{props.label3}</label>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className={style.line}>
                <div className={style.column}>
                    <Image src={passion} width="100" height="100" alt="Passion d'entreprendre" />
                    <label htmlFor="Passion d'entreprendre" className={style.label}>{props.label4}</label>
                    <p>Lorem Ipsum</p>
                </div>
                <div className={style.column}>
                    <Image src={satisfaction} width="100" height="100" alt="Satisfaction client" />
                    <label htmlFor="Satisfaction client" className={style.label}>{props.label5}</label>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
}

export default Infography;