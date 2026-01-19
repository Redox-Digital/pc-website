import css from './CTAs.module.scss';
import Button from '../navigation/Button';
import Image from 'next/image';

export default function ContactCTA() {
  return (
    <section
      className={`${css.contactCTA} light`}
      style={{ backgroundImage: 'url(/layouts/cta-bg.webp)' }}
    >
      <div className={css.contactCTA__overlay} />
      <div className={css.container}>
        <h3>Un projet en tête ?</h3>
        <p>N&rsquo;hésitez pas à nous contacter pour discuter de vos projets</p>
        <Button href="/contact">Contact</Button>
      </div>
    </section>
  );
}

export function JobCTA() {
  return (
    <section className={css.jobCTA}>
      <Image src="/layouts/home-metal.webp" alt="" fill />
      <div className={css.overlay} />

      <div className={css.content}>
        <div className={css.texts}>
          <h3>À la recherche de talents</h3>
          <p>
            Nous sommes souvent à la recherche de nouvelles personnes pour compléter nos équipes.
            Consultez nos offres ouvertes, ou envoyez-nous votre dossier en candidature spontanée.
          </p>
        </div>
        <Button big href={'/emplois'}>
          Nos offres d’emploi
        </Button>
      </div>
    </section>
  );
}

export function GoogleMyBusinessCTA() {
  return (
    <section className={css.gmbCTA}>
      <Image src="/layouts/google-cta.webp" fill alt="" />
      <div className={css.overlay} />

      <div className={css.content}>
        <h3>Votre avis nous importe beaucoup</h3>
        <p>
          Vous avez fait appel à nos services récemment ? Nous prenons vos retours très à coeur, et
          vous serions reconnaissants de nous faire un retour la page Google de
          Paris&nbsp;&&nbsp;Comtesse&nbsp;SA.
        </p>
        <Button
          href={
            'https://www.google.com/search?client=firefox-b-d&hs=X3Bp&sca_esv=b7a1f6a234cb5071&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_xwW8giksuIOHOZANitCYOuea44PyhhvpMWZMNi5ysbQfix9YCV1XGQIxErZx2YsPel4-Kc2UTr1GecAdHc-B2BS69DMR&q=Paris+%26+Comtesse+SA+Avis&sa=X&ved=2ahUKEwjXv42n3JeSAxXP1AIHHbNZIyAQ0bkNegQIHRAH&biw=1512&bih=831&dpr=1&aic=0'
          }
          blank
        >
          Rédiger un avis
        </Button>
      </div>
    </section>
  );
}
