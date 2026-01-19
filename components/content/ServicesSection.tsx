import css from './ServicesSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ServicePreviewType, servicesPreview } from '@/constants/projectSpecifics';
import SectionTitle from '../layouts/SectionTitle';
import arrowRight from '@/public/pictograms/arrow-right.svg';

export default function ServicesSection() {
  return (
    <section className={css.services}>
      <SectionTitle title="Nos services">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam vel leo tempus
        ultricies. Maecenas suscipit eget augue sagittis vehicula.
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
