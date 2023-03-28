import Image from 'next/image';
import style from '@/styles/components/Hero.module.scss';
import Link from 'next/link';
import arrowDown from '/public/pictograms/arrow-down.svg';
import logo from '/public/logo/Exports_P&C – Logo – BJ.svg';

type Props = {
  title: string;
  subtitle: string;
  source: string;
  home?: boolean;
  opacity?: number;
};

const Hero = (props: Props) => {
  const { title, subtitle, source, home, opacity } = props;

  return (
    <>
      <header
        className={`${style.hero} ${home ? style.hero__home : ''}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        <div className={style.hero__overlay} style={{ opacity: opacity || 0.3 }} />
        {home ? (
          <>
            <Image src={logo} alt={''} width="900" />
            {/* Pour optimiser : https://beta.nextjs.org/docs/optimizing/lazy-loading#example-adding-a-custom-loading-component */}
            <video autoPlay muted loop>
              <source src="/layouts/videoBg.mp4" type="video/mp4" />
            </video>
          </>
        ) : (
          <h1 className={style.title}>{title}</h1>
        )}

        <p className={style.subtitle}>{subtitle}</p>
        <Link href="#intro" scroll={false}>
          <Image src={arrowDown} alt={''}></Image>
        </Link>
      </header>
      <span id="intro">{/* Anchor */}</span>
    </>
  );
};

export default Hero;
