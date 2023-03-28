import TextInput from './TextInput';
import btn from '@/styles/components/Button.module.scss';
import style from '@/styles/components/ContactForm.module.scss';

export default function ContactForm() {
  return (
    <section className={`light ${style.formSection}`}>
      <h2>Formulaire de contact</h2>
      {/*  <form action="/api/form" method="post">
    // C'est triste mais c'est mieux comme ça :'( */}
      <form action="https://submit-form.com/NW3KnoNd" method="post">
        <TextInput type={'text'} id={'firstName'} required>
          Nom
        </TextInput>

        <TextInput type={'text'} id={'firstName'} required>
          Prénom
        </TextInput>
        <TextInput type={'text'} id={'society'}>
          Société
        </TextInput>
        <TextInput type={'email'} id={'mail'} required>
          E-Mail
        </TextInput>

        <TextInput type={'text'} id={'phone'}>
          Téléphone
        </TextInput>

        <label htmlFor="type" className={style.input}>
          <select id="type" name="type">
            <option value="particulier">Particulier</option>
            <option value="collectivite">Collectivité</option>
            <option value="professionnel">Entreprise</option>
          </select>
          <span>Type de client</span>
        </label>

        <TextInput type={'textarea'} id={'message'} required>
          Message
        </TextInput>

        <button type="submit" className={`${btn.btn} ${btn.btn__big}`}>
          Envoyer
        </button>
      </form>
    </section>
  );
}
