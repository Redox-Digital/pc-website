import { useState } from 'react';
import Service from '../content/Service';
import style from './ServicesSection.module.scss';

export default function ServicesSection() {
  const [activeBg, setActiveBg] = useState<'particuliers' | 'collectivites' | 'entreprises'>(
    'particuliers'
  );

  const HandleBackground = (slug: 'particuliers' | 'collectivites' | 'entreprises') => {
    setActiveBg(slug);
  };

  return (
    <section className={style.services}>
      <div
        className={`${style.overlay__particuliers} ${
          activeBg === 'particuliers' ? style.overlay__active : ''
        }`}
        style={{ backgroundImage: `url(/layouts/particuliers-hero.webp)` }}
      />
      <div
        className={`${style.overlay__collectivites} ${
          activeBg === 'collectivites' ? style.overlay__active : ''
        }`}
        style={{ backgroundImage: `url(/layouts/collectivites-hero.webp)` }}
      />
      <div
        className={`${style.overlay__entreprises} ${
          activeBg === 'entreprises' ? style.overlay__active : ''
        }`}
        style={{ backgroundImage: `url(/layouts/entreprises-hero.webp)` }}
      />
      <div className={style.overlay} />
      <h2>Nos services</h2>
      <div className={style.services__holder}>
        <div onMouseEnter={() => HandleBackground('particuliers')}>
          <Service slug="particuliers" title={'Particuliers'}>
            Conception et réalisation de projets d’aménagement intérieur et extérieur, décoration
            d’intérieur
          </Service>
        </div>
        <div onMouseEnter={() => HandleBackground('collectivites')}>
          <Service slug="collectivites" title={'Collectivités'}>
            Conception et réalisation de projets d’aménagement extérieur, gestion de projets publics
            pour les communes, écoles, crèches, homes, etc.
          </Service>
        </div>
        <div onMouseEnter={() => HandleBackground('entreprises')}>
          <Service slug="entreprises" title={'Entreprises'}>
            Tôlerie industrielle, fabrication de structures métalliques sur-mesure, mise aux normes
            de structures existantes
          </Service>
        </div>
      </div>
    </section>
  );
}
