import css from '@/styles/components/HeroInfoBlock.module.scss';
import Button from './Button';

type Props = {
  desktop?: boolean;
};

export default function HeroInfoBlock({ desktop }: Props) {
  return (
    <aside className={`${css.block} ${desktop ? css.desktop : css.mobile}`}>
      <p>
        <b>Concours des 60 ans</b>
      </p>
      <small>
        Pour l&rsquo;anniversaire de Paris & Comtesse, nous organisons un concours spécial!
      </small>

      <Button
        variation="black"
        size="small"
        to={'https://www.instagram.com/p/C6ytB_OI8H6?utm_source=website&utm_campaign=concours'}
        blank
      >
        Rendez-vous sur Instagram
      </Button>
    </aside>
  );
}
