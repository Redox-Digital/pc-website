import style from '@/styles/components/ContactForm.module.scss';
import Link from 'next/link';
import { FormEventHandler } from 'react';

export default function ContactForm() {
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = { ...event.target };

    console.log(data);

    // API endpoint where we send form data.
    const endpoint = 'https://email.redoxdigital.ch';

    // Form the request for sending data to the server.
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      mode: 'no-cors',
      // Body of the request is the JSON data we created above.
      body: data,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Response: ${result.data}`);
  };

  return (
    <section className={`light ${style.formSection}`}>
      <h2>Formulaire de contact</h2>
      {/*  <form action="/api/form" method="post">
    // C'est triste mais c'est mieux comme ça :'( */}
      <div className="container">
        <p>
          Notre formulaire de contact est en maintenance.
          <br />
          En cas de demande urgente, merci de nous contacter à l&rsquo;adresse suivante :{' '}
          <Link href={'mailto:info@pc-sa.ch'} style={{ color: 'var(--accent)' }}>
            <span id="mail" />
          </Link>
        </p>
        {/* 
        <form onSubmit={handleSubmit}>
          <TextInput type={'text'} id={'name'} required>
            Prénom Nom
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

          <button
            aria-label="Envoyer votre demande"
            type="submit"
            className={`${btn.btn} ${btn.btn__big}`}
          >
            Envoyer
          </button>

        </form>   */}
      </div>
    </section>
  );
}
