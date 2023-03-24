import Image from "next/image";
import { useState } from "react";
import style from "@/styles/components/CompanySection.module.scss";

type Slide = {
    id: number;
    label: string;
    desc: string | JSX.Element;
    img1: string;
    img2?: string;
}

type Props = {
    slides: Slide[];
}

export default function CompanySection({ slides }: Props) {
    const [selectedSlide, setSelectedSlide] = useState<number>(0);

    const radioHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSlide(parseInt(evt.target.id, 10));
    };

    return (<section className={style.company}>
        <div className={style.company__titles}>
            <h5>L'entreprise</h5>
            <h2>Paris & Comtesse sa</h2>
        </div>

        <div className={style.company__content}>
            <div className={style.company__content__nav}>
                {slides.map((slide) => (
                    <label htmlFor={slide.id.toString()} className={selectedSlide === slide.id ? style.checked : ""}>{slide.label}
                        <input type="radio" key={slide.id} id={slide.id.toString()} value={slide.label} checked={selectedSlide === slide.id} onChange={radioHandler} />
                    </label>
                ))}
            </div>
            <div className={style.company__content__slides}>
                {slides.map((slide) => (
                    <div className={`${style.slide} ${slide.id === selectedSlide ? '' : 'd-none'}`}>
                        <div className={style.slide__text}>{slide.desc}</div>
                        <div className={style.slide__images}>
                            <img src={slide.img1} alt="" />
                            <img src={slide.img2} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>)
}