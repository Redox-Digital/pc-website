import Button from '../navigation/Button';
import css from './CertifSct.module.scss';
import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.texts}>
          <h3>Certifications</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam vel leo tempus
            ultricies. Maecenas suscipit eget augue sagittis vehicula.
          </p>
          <Button>Certifications internationales - OU POINTE LE BOUTON ?</Button>
        </div>

        <div className={css.logos}>
          <Image src="#" width={120} height={120} alt="" />
          <Image src="#" width={120} height={120} alt="" />
        </div>
      </div>
    </section>
  );
}
