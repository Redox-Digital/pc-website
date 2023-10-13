import Image from 'next/image';
import Button from './Button';
import style from '@/styles/components/Service.module.scss';
import btn from '@/styles/components/Button.module.scss';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

type Props = {
  title: string;
  slug: string;
  children: string | JSX.Element;
};

export default function Service({ title, children, slug }: Props) {
  return (
    <Link id={slug} href={`/services/${slug}`} className={style.service}>
      <div className={style.service__title}>
        <div className={style.service__images}>
          <Image
            className={`${style.img} ${style.img__placeholder}`}
            height="120"
            width="120"
            src={`/pictograms/p-c_${slug}_j.svg`}
            alt={''}
          />
          <Image
            className={`${style.img} ${style.img__yellow}`}
            height="120"
            width="120"
            src={`/pictograms/p-c_${slug}_j.svg`}
            alt={''}
          />
          <Image
            className={`${style.img} ${style.img__white}`}
            height="120"
            width="120"
            src={`/pictograms/p-c_${slug}_w.svg`}
            alt={''}
          />
        </div>

        <h5>{title}</h5>
      </div>
      <small>{children}</small>
      <div className={`${btn.btn} ${btn.btn__secondary}`} aria-hidden>
        En savoir plus
      </div>
    </Link>
  );
}
