import Image from 'next/image';
import { useState } from 'react';
import style from './CompanySection.module.scss';
import logo from '@/public/logo/p-c_logo_bj.svg';

type Slide = {
  id: number;
  label: string;
  desc: string | JSX.Element;
  img1: string;
};

type Props = {
  slides: Slide[];
};

export default function CompanySection({ slides }: Props) {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const radioHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSlide(parseInt(evt.target.id, 10));
  };

  return (
    <section className={style.company}>
      <div className={style.company__container}>
        <div className={style.company__titles}>
          <h5>L&rsquo;entreprise</h5>
          <Image src={logo} alt="" className="logo" />
        </div>

        <div className={style.company__content}>
          <div className={style.company__content__nav}>
            {slides.map((slide) => (
              <label
                key={slide.id}
                htmlFor={slide.id.toString()}
                className={selectedSlide === slide.id ? style.checked : ''}
              >
                {slide.label}
                <input
                  type="radio"
                  id={slide.id.toString()}
                  value={slide.label}
                  checked={selectedSlide === slide.id}
                  onChange={radioHandler}
                />
              </label>
            ))}
          </div>
          <div className={style.company__content__slides}>
            {slides.map((slide) => (
              <div
                key={`slide_${slide.id}`}
                className={`${style.slide} ${slide.id === selectedSlide ? '' : style.hide}`}
              >
                <div className={style.slide__text}>{slide.desc}</div>
                <div className={style.slide__images}>
                  <Image src={slide.img1} width="500" height="500" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
