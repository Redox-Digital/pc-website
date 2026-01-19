import Image from 'next/image';
import css from './Hero.module.scss';
import Link from 'next/link';
import arrowDown from '@/public/pictograms/arrow-down.svg';
import logo from '@/public/logo/p-c_logo_bj.svg';
// uniquement pour les 60 ans
//import logo from '/public/logo/60ans_PC_bj.svg';
import IntroVideo from '../content/IntroVideo';
import Button from '../navigation/Button';

type Props = {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  imgUrl: string;
  opacity?: number;
  addClass?: string;
};

export default function Hero({ title, subtitle, imgUrl, opacity, addClass }: Props) {
  return (
    <>
      <header className={`${css.hero} ${addClass}`}>
        <Image src={imgUrl} alt={''} fill />

        <div className={css.hero__overlay} style={{ opacity: opacity || 0.5 }} />
        <div className={css.hero__content}>
          <h1 className={css.title}>{title}</h1>
          <p className={css.subtitle}>{subtitle}</p>
        </div>
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
}

export function HomeHero({ title, subtitle, imgUrl, opacity, addClass }: Props) {
  return (
    <>
      <header className={`${css.hero} ${css.homeHero} ${addClass}`}>
        <IntroVideo
          videoUrl="/layouts/PC-Video_BG-V1-1080-LowBitrate.mp4"
          mobileUrl="/layouts/PC_SiteWebMobileBG_720_Low_V5.mp4"
          imgUrl={imgUrl}
        />
        <div className={css.hero__overlay} style={{ opacity: opacity || 0.5 }} />
        <div className={css.hero__content}>
          <div className={css.texts}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.subtitle}>{subtitle}</p>
          </div>

          <div className={css.btns}>
            <div className={css.ctas}>
              <Button outline secondary href={'/construction-metallique'}>
                Construction métallique
              </Button>
              <Button outline secondary href={'/tolerie'}>
                Tôlerie
              </Button>
            </div>

            <Link href="#intro" scroll={false} aria-hidden className={css.arrow}>
              <Image src={arrowDown} alt={''}></Image>
            </Link>
          </div>
        </div>
        {/* <HeroInfoBlock desktop /> */}
      </header>
      <span id="intro">{/* Anchor */}</span>
      {/* 
        <div className="container">
          <HeroInfoBlock />
        </div>
      */}
    </>
  );
}
