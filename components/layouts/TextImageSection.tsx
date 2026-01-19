import Image from 'next/image';
import style from './TextImageSection.module.scss';
import logo from '/public/logo/p-c_logo_bj.svg';

type Props = {
  title: string;
  surtitle: string;
  children: string | React.ReactNode;
  imgPath: string;
  light?: boolean;
};

export default function TextImageSection({ title, surtitle, children, light, imgPath }: Props) {
  return (
    <section className={`${style.txtImgSection} ${light ? 'light' : ''}`}>
      <div className="container">
        <div className={style.txtImgSection__surtitle}>
          <h5 className={light ? 'color-dark' : ''}>{surtitle}</h5>
        </div>
        <div
          className={style.txtImgSection__image}
          style={{ backgroundImage: `url(${imgPath})` }}
        />
        <div className={style.txtImgSection__content}>
          <h5 className={light ? 'color-dark' : ''}>{surtitle}</h5>
          {title === 'logo' ? (
            <Image src={logo} alt={''} width="900" height="300" />
          ) : (
            <h2 className={`all-caps ${light ? 'color-accent' : ''}`}>{title}</h2>
          )}
          <div className={style.txtImgSection__texts}>{children}</div>
        </div>
      </div>
    </section>
  );
}
