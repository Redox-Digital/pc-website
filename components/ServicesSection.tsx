import Service from './Service';
import style from '@/styles/components/ServicesSection.module.scss';

export default function ServicesSection() {
  const types = ['particuliers', 'collectivites', 'entreprises'];

  return (
    <section
      className={style.services}
      style={{ backgroundImage: `url(./layouts/entreprises-hero.jpg)` }}
    >
      <div className={style.overlay} />
      <h2>Nos services</h2>
      <div className={style.services__holder}>
        <Service slug="particuliers" title={'Particuliers'}>
          Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration
          d’intérieur
        </Service>
        <Service slug="collectivites" title={'Collectivités'}>
          Conception et réalisation de projets d’aménagement extérieur, gestion de projets publics
          pour les communes, écoles, crèches, homes, etc.
        </Service>
        <Service slug="entreprises" title={'Entreprises'}>
          Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes de
          structures existantes
        </Service>
      </div>
    </section>
  );
}
