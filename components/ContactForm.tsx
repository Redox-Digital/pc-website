import style from '@/styles/components/ContactForm.module.scss';
import btn from '@/styles/components/Button.module.scss';
import Link from 'next/link';
import { FormEventHandler, useState } from 'react';
import TextInput from './TextInput';
import Head from 'next/head';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'sending' | 'success' | 'error' | 'cooldown'>();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const reCaptchaPubKey = '6LepC4glAAAAAMJiuVnhbKoqazkub5Z8ZLvwKtTD';

  const [formInputs, setFormInputs] = useState({
    name: '',
    mail: '',
    phone: '',
    type: 'particulier',
    company: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormInputs((prevValues) => {
      return {
        ...prevValues,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setStatus('sending');

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setStatus('error');
      return;
    }

    const data = new FormData();

    const key = await executeRecaptcha('enquiryFormSubmit').then(
      (gReCaptchaToken) => gReCaptchaToken
    );

    // Get data from the form.P

    Object.entries(formInputs).forEach((input) => {
      const [key, value] = input;
      data.append(key, value);
    });

    const endpoint = 'https://email.redoxdigital.ch';

    // Form the request for sending data to the server.
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'key': 'PCSA',
        'gRecaptchaToken': key,
      },
      body: data,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        setStatus('error');
      } else {
        setStatus('success');
        setFormInputs({
          name: '',
          mail: '',
          phone: '',
          type: 'particulier',
          company: '',
          message: '',
        });
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
        <form onSubmit={handleSubmit} id="form">
          <TextInput
            changeHandler={handleChange}
            type={'text'}
            id={'name'}
            required
            min={2}
            max={50}
            value={formInputs.name}
          >
            Prénom Nom
          </TextInput>

          <TextInput
            changeHandler={handleChange}
            type={'text'}
            id={'company'}
            min={2}
            max={50}
            value={formInputs.company}
          >
            Société
          </TextInput>

          <TextInput
            changeHandler={handleChange}
            type={'email'}
            id={'mail'}
            required
            value={formInputs.mail}
          >
            E-Mail
          </TextInput>

          <TextInput
            type={'text'}
            id={'phone'}
            placeholder="+41 123 ..."
            min={10}
            max={18}
            value={formInputs.phone}
            changeHandler={handleChange}
          >
            Téléphone
          </TextInput>

          <label htmlFor="type" className={style.input}>
            <select id="type" name="type" onChange={handleChange}>
              <option value="particulier">Particulier</option>
              <option value="collectivite">Collectivité</option>
              <option value="entreprise">Entreprise</option>
            </select>
            <span>Type de client</span>
          </label>

          <TextInput
            type={'textarea'}
            id={'message'}
            required
            errorMsg="Merci de nous indiquer la raison de votre prise de contact."
            value={formInputs.message}
            changeHandler={handleChange}
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
              demande n&rsquo;a pas pu être envoyée. Merci de réessayer.
              <br />
              Le cas échéant, vous pouvez nous transmettre votre demande à l&rsquo;adresse suivante
              :{' '}
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
