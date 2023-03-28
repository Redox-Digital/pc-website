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
};

const Hero = (props: Props) => {
  const { title, subtitle, source, home } = props;

  return (
    <>
      <header
        className={`${style.hero} ${home ? style.hero__home : ''}`}
        style={{ backgroundImage: `url(${source})` }}
      >
        {home ? (
          <Image src={logo} alt={''} width="900" />
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
