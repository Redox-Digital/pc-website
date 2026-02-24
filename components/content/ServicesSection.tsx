import css from './ServicesSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { servicesPreview } from '@/constants/projectSpecifics';
import SectionTitle from '../layouts/SectionTitle';
import arrowRight from '@/public/pictograms/arrow-right.svg';
import { ServicePreviewType } from '@/constants/types';

export default function ServicesSection() {
  return (
    <section className={css.services}>
      <SectionTitle title="Nos services">
        Deux expertises au service de vos projets : construction métallique et tôlerie sur mesure.
      </SectionTitle>

      <div className={css.blocks}>
        {servicesPreview.map((s) => (
          <ServiceBlock key={s.url} {...s} />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({ title, img, desc, url }: ServicePreviewType) {
  return (
    <Link href={url} className={css.serviceBlock}>
      <Image src={img} alt={title} width={600} height={500} />
      <div className={css.overlay} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <span className={css.textLink}>
        Découvrir ce service <Image src={arrowRight} width={18} height={18} alt="" />
      </span>
    </Link>
  );
}
