import Image from "next/image";
import { useState } from "react";
import style from "@/styles/components/HistorySection.module.scss";

type Slide = {
    year: number;
    title: string;
    desc: string | JSX.Element;
    img: string;
}

type Props = {
    slides: Slide[];
}

export default function HistorySection({ slides }: Props) {
    const [selectedSlide, setSelectedSlide] = useState<number>(2022);

    const radioHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSlide(parseInt(evt.target.id, 10));
    };

    return (<section className={style.history}>
        <div className={style.history__titles}>
            <h2>Notre histoire</h2>
        </div>

        <div className={style.history__content}>
            <div className={style.history__content__timeline} />
            <div className={style.history__content__nav}>
                {slides.map((slide) => (
                    <label key={slide.year} htmlFor={slide.year.toString()}
                        className={`${selectedSlide === slide.year ? style.checked : ""} ${selectedSlide > slide.year ? style.hidden : ""}`}>
                        {slide.title}
                        <input type="radio" id={slide.year.toString()} value={slide.year} checked={selectedSlide === slide.year} onChange={radioHandler} />
                    </label>
                ))}
            </div>
            <div className={style.history__content__slides}>
                {slides.map((slide) => (
                    <div key={`slide_${slide.year}`} className={`${style.slide} ${selectedSlide === slide.year ? '' : style.hide}`}>
                        <div className={style.slide__img} style={{ backgroundImage: `url(${slide.img})` }}>
                        </div>

                        <div className={style.slide__texts}>
                            <h3>{slide.year}</h3>
                            <h5>{slide.title}</h5>
                            {slide.desc}
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.history__content__nav}>
                {slides.map((slide) => (
                    <label key={slide.year} htmlFor={slide.year.toString()}
                        className={`${selectedSlide === slide.year ? style.checked : ""} ${selectedSlide < slide.year ? style.hidden : ""}`}>
                        {slide.title}
                        <input type="radio" id={slide.year.toString()} value={slide.year} checked={selectedSlide === slide.year} onChange={radioHandler} />
                    </label>
                ))}
            </div>
        </div>
    </section>)
}