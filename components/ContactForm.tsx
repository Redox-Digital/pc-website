import style from '@/styles/components/ContactForm.module.scss';
import btn from '@/styles/components/Button.module.scss';
import Link from 'next/link';
import { FormEventHandler, useState } from 'react';
import TextInput from './TextInput';
// import TextInput from './TextInput';

export default function ContactForm() {
  const [status, setStatus] = useState<'sending' | 'success' | 'error'>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setStatus('sending');

    // Get data from the form.
    // Get data from the form.

    const data = new FormData();

    data.append('name', 'michel');
    data.append('mail', 'ruffieux.mikael@gmail.com');

    console.log(Array.from(data));

    const endpoint = 'https://email.redoxdigital.ch';

    // Form the request for sending data to the server.
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'https://email.redoxdigital.ch',
      },
      body: data,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch (error) {
      setStatus('error');
      console.warn('Error: ', error);
    }
  };

  return (
    <section className={`light ${style.formSection}`}>
      <h2>Formulaire de contact</h2>
      <div className="container">
        <p style={{ textAlign: 'center' }}>
          Notre formulaire de contact est en maintenance.
          <br />
          <br />
          En cas de demande urgente, merci de nous contacter à l&rsquo;adresse suivante :{' '}
          <Link href={'mailto:info@pc-sa.ch'} style={{ color: 'var(--accent)' }}>
            <span id="mail" />
          </Link>
        </p>

        <form onSubmit={handleSubmit} id="form">
          <TextInput type={'text'} id={'name'} required min={2} max={50}>
            Prénom Nom
          </TextInput>

          <TextInput type={'text'} id={'company'} min={2} max={50}>
            Société
          </TextInput>

          <TextInput type={'email'} id={'mail'} required>
            E-Mail
          </TextInput>

          <TextInput type={'text'} id={'phone'} placeholder="+41 123 ..." min={10} max={18}>
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

          <TextInput
            type={'textarea'}
            id={'message'}
            required
            errorMsg="Merci de nous indiquer la raison de votre prise de contact."
          >
            Message
          </TextInput>

          <button
            aria-label="Envoyer votre demande"
            type="submit"
            className={`${btn.btn} ${btn.btn__big}`}
          >
            Envoyer
          </button>

          {status === 'success' && (
            <small className={style.status__success}>
              <i className="fa-solid fa-circle-check"></i> Nous vous remercions pour votre demande,
              et la traiterons dans les plus brefs délais.
            </small>
          )}

          {status === 'error' && (
            <small className={style.status__error}>
              <i className="fa-solid fa-triangle-exclamation"></i> Une erreur est survenue, votre
              demande n&rsquo;a pas pu être envoyée.
              <br />
              Vous pouvez nous transmettre votre demande à l&rsquo;adresse suivante :{' '}
              <Link href={'mailto:info@pc-sa.ch'} style={{ color: 'var(--accent)' }}>
                <span id="mail" />
              </Link>
            </small>
          )}

          {status === 'sending' && (
            <small className={style.status__sending}>
              <i className="fa-solid fa-spinner"></i> En cours d&rsquo;envoi...
            </small>
          )}
        </form>
      </div>
    </section>
  );
}
