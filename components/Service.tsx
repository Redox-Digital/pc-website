import Image from 'next/image';
import Button from './Button';
import style from '@/styles/components/Service.module.scss';

type Props = {
  title: string;
  slug: string;
  children: string | JSX.Element;
};

export default function Service({ title, children, slug }: Props) {
  return (
    <article id={slug} className={style.service}>
      <div className={style.service__title}>
        <div className={style.service__images}>
          <Image
            className={style.img__yellow}
            height="120"
            width="120"
            src={`/pictograms/Exports_P&C_Picto_${slug}_j.svg`}
            alt={''}
          />
          <Image
            className={style.img__white}
            height="120"
            width="120"
            src={`/pictograms/Exports_P&C_Picto_${slug}_w.svg`}
            alt={''}
          />
        </div>

        <h5>{title}</h5>
      </div>
      <small>{children}</small>
      <Button to={`/services/${slug}`}>En savoir plus</Button>
    </article>
  );
}
