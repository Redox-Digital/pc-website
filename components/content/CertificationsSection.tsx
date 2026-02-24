import Button from '../navigation/Button';
import css from './CertifSct.module.scss';
import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.texts}>
          <h3>Qualité & certifications</h3>

          <p>
            Chez PC SA, la qualité de nos ouvrages métalliques repose sur des compétences certifiées
            et un contrôle rigoureux à chaque étape du projet.
          </p>
          <p>
            Notre équipe comprend des soudeurs qualifiés selon la norme{' '}
            <strong className="color-accent-dark">SN EN ISO 9606-1</strong>, garantissant la
            maîtrise des procédés de soudage et le respect des exigences techniques en vigueur.
          </p>
          <p>
            Selon les besoins spécifiques des projets, les travaux de soudage sont réalisés par du
            personnel disposant des qualifications appropriées.
          </p>
          <p>
            Nous veillons au maintien et au renouvellement régulier des certifications afin
            d’assurer un haut niveau de qualité et de sécurité.
          </p>
          {/* <Button>Certifications internationales - OU POINTE LE BOUTON ?</Button> */}
        </div>

        <div className={css.logos}>
          <Image
            alt="Entreprise formatrice"
            title="Entreprise formatrice"
            src="/layouts/entreprise_formatrice.png"
            width={180}
            height={120}
          />
          <Image
            alt="AM Suisse Association patronale Technique agricole, Construction métallique, Maréchalerie"
            title="AM Suisse Association patronale Technique agricole, Construction métallique, Maréchalerie"
            src="/layouts/AM_Suisse_Logo.svg"
            width={180}
            height={120}
          />
          <Image
            alt="Association suisse pour la technique du soudage"
            title="Association suisse pour la technique du soudage"
            src="/layouts/svs-logo.svg"
            width={180}
            height={120}
          />
        </div>
      </div>
    </section>
  );
}
