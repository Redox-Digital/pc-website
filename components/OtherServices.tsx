import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import style from '@/styles/components/OtherService.module.scss';

type OtherService = {
  slug: string;
  title: string;
  desc: string;
};

type Props = {
  props: OtherService[];
};

export default function OtherServices({ props }: Props) {
  return (
    <section className={style.otherServices}>
      <h5>Nos autres services</h5>
      <div className={style.otherServicesLine}>
        {props.map((service) => (
          <div
            className={style.otherServiceBlock}
            key={service.slug}
            style={{ backgroundImage: `url(/layouts/bg-${service.slug}.png)` }}
          >
            <div className={style.otherServiceBlock__overlay}></div>
            <div className={style.otherServiceBlock__titles}>
              <div className={style.otherServiceBlock__titles__images}>
                <Image
                  className={style.img__yellow}
                  height="120"
                  width="120"
                  src={`/pictograms/Exports_P&C_Picto_${service.slug}_j.svg`}
                  alt={''}
                />
                <Image
                  className={style.img__white}
                  height="120"
                  width="120"
                  src={`/pictograms/Exports_P&C_Picto_${service.slug}_w.svg`}
                  alt={''}
                />
              </div>
              <h2>{service.title}</h2>
              <small>{service.desc}</small>
            </div>
            <Button to={`/services/${service.slug}`}>En savoir plus</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
