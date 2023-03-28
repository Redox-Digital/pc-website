import Service from './Service';
import style from '@/styles/components/ServicesSection.module.scss';
import { useState } from 'react';

export default function ServicesSection() {
  const types = ['particuliers', 'collectivites', 'entreprises'];
  const [activeSlide, setSlide] = useState<string>(types[0]);

  const radioHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSlide(evt.target.id);
  };

  const goTo = (id: number): void => {
    setSlide(types[id]);
  };

  return (
    <section
      className={style.services}
      style={{ backgroundImage: `url(./layouts/bg-careers.svg)` }}
    >
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
