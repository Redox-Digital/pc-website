import style from '@/styles/components/ContactCTA.module.scss';
import Button from './Button';

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
        <Button to="/contact" ariaLabel="Vers le formulaire de contact">
          Contact
        </Button>
      </div>
    </section>
  );
}
