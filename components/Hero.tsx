import Image from 'next/image';
import style from '@/styles/components/Hero.module.scss';
import Link from 'next/link';
import arrowDown from '/public/pictograms/arrow-down.svg';
import logo from '/public/logo/p-c_logo_bj.svg';
// uniquement pour les 60 ans
//import logo from '/public/logo/60ans_PC_bj.svg';
import IntroVideo from './IntroVideo';
import { useEffect, useState } from 'react';
import HeroInfoBlock from './HeroInfoBlock';

type Props = {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  imgUrl: string;
  home?: boolean;
  opacity?: number;
  addClass?: string;
};

const Hero = ({ title, subtitle, imgUrl, home, opacity, addClass }: Props) => {
  return (
    <>
      <header className={`${style.hero} ${home ? style.hero__home : ''} ${addClass}`}>
        {home ? (
          <IntroVideo
            videoUrl="/layouts/PC-Video_BG-V1-1080-LowBitrate.mp4"
            mobileUrl="/layouts/PC_SiteWebMobileBG_720_Low_V5.mp4"
            imgUrl={imgUrl}
          />
        ) : (
          <Image src={imgUrl} alt={''} fill />
        )}
        <div className={style.hero__overlay} style={{ opacity: opacity || 0.5 }} />
        <div className={style.hero__content}>
          {home ? (
            <>
              <Image src={logo} alt={''} width="1200" priority />
              {/* <Image src={logo} className={style.anniversary} alt={''} width="700" priority /> */}

              {/* Pour optimiser : https://beta.nextjs.org/docs/optimizing/lazy-loading#example-adding-a-custom-loading-component */}
            </>
          ) : (
            <h1 className={style.title}>{title}</h1>
          )}

          {home ? (
            <h1 className={style.subtitle}>{subtitle}</h1>
          ) : (
            <p className={style.subtitle}>{subtitle}</p>
          )}

          {home && (
            <Link href="#intro" scroll={false} aria-hidden>
              <Image src={arrowDown} alt={''}></Image>
            </Link>
          )}
        </div>
        {/* home && <HeroInfoBlock desktop /> */}
      </header>
      <span id="intro">{/* Anchor */}</span>

      {/* home && (
        <div className="container">
          <HeroInfoBlock />
        </div>
      )*/}
    </>
  );
};

export default Hero;
