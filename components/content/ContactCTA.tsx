import style from './ContactCTA.module.scss';
import Button from '../navigation/Button';

export default function ContactCTA() {
  return (
    <section
      className={`${style.contactCTA} light`}
      style={{ backgroundImage: 'url(/layouts/cta-bg.webp)' }}
    >
      <div className={style.contactCTA__overlay} />
      <div className={style.container}>
        <h3>Un projet en tête ?</h3>
        <p>N&rsquo;hésitez pas à nous contacter pour discuter de vos projets</p>
        <Button href="/contact" ariaLabel="Vers le formulaire de contact">
          Contact
        </Button>
      </div>
    </section>
  );
}
