import Button from '../navigation/Button';
import css from './HeroInfoBlock.module.scss';
import Image from 'next/image';

type Props = {
  desktop?: boolean;
};

export default function HeroInfoBlock({ desktop }: Props) {
  return (
    <aside className={`${css.block} ${desktop ? css.desktop : css.mobile}`}>
      <div className={css.content}>
        <div className={css.head}>
          <small>Et si on se rencontrait autrement ?</small>
        </div>
        <div className={css.body}>
          <h2>
            Vous{' '}
            <Image src="/logo/p-c_logo_monogramme_j_nomargin.svg" width={18} height={20} alt="&" />{' '}
            Nous
          </h2>
          <p>– Autour de nouvelles façons de concevoir</p>
        </div>

        <div className={css.foot}>
          <Image
            src="/layouts/sine/pc-os.png"
            width={205}
            height={22}
            alt="Paris & Comtesse | Optimum Swiss Solar"
          />

          <span className={css.badge}>
            Stand <b>84</b>
          </span>
        </div>
      </div>

      <div className={css.imgHolder}>
        <Image src="/layouts/sine/sine-affiche-2026.png" width={140} height={130} alt="" />
      </div>
    </aside>
  );
}
