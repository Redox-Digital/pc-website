import style from './ContactForm.module.scss';
import inputStyle from './Inputs.module.scss';

import btn from '@/components/navigation/Button.module.scss';
import Link from 'next/link';
import { FormEventHandler, RefObject, useEffect, useState } from 'react';
import React from 'react';
import TextInput from './TextInput';

const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default function ContactForm() {
  const [status, setStatus] = useState<'sending' | 'success' | 'error' | 'cooldown' | 'captcha'>();

  const [antispam, setAntispam] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setAntispam([getRandomInteger(1, 10), getRandomInteger(1, 10)]);
  }, []);

  const [formInputs, setFormInputs] = useState({
    name: '',
    mail: '',
    phone: '',
    type: 'particulier',
    company: '',
    message: '',
    antispam: '',
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

    // Home made anti-spam
    if (parseInt(formInputs.antispam) !== antispam[0] + antispam[1]) {
      setStatus('captcha');
      return;
    }

    const endpoint = `${process.env.api}/items/formulaires`;

    // Form the request for sending data to the server.
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.bearer}`,
      },
      body: JSON.stringify(formInputs),
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
          antispam: '',
        });
      }
    } catch (error) {
      setStatus('error');
      console.warn('Error: ', error);
    }
  };

  return (
    <>
      <section className={`light ${style.formSection}`}>
        <h2>Formulaire de contact</h2>
        <div className="container">
          <form onSubmit={handleSubmit} id="form">
            <TextInput
              changeHandler={handleChange}
              type={'text'}
              id={'name'}
              min={2}
              max={50}
              value={formInputs.name}
              required
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
              placeholder="+41 32 ..."
              min={10}
              max={18}
              value={formInputs.phone}
              changeHandler={handleChange}
            >
              Téléphone
            </TextInput>

            <label htmlFor="type" className={inputStyle.input}>
              <select id="type" name="type" onChange={handleChange}>
                <option value="particulier">Particulier</option>
                <option value="collectivite">Collectivité</option>
                <option value="entreprise">Entreprise</option>
              </select>
              <span>Type de client</span>
            </label>

            <TextInput
              type={'number'}
              id={'antispam'}
              placeholder="..."
              required
              value={formInputs.antispam}
              changeHandler={handleChange}
              className={
                formInputs.antispam && antispam[0] + antispam[1] !== parseInt(formInputs.antispam)
                  ? style.error
                  : ''
              }
            >
              Anti-Spam{' '}
              <small>
                Combien font {antispam[0]} + {antispam[1]} ?
              </small>
            </TextInput>

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

            <div className={style.form__bottom}>
              <button
                aria-label="Envoyer votre demande"
                type="submit"
                className={`${btn.btn} ${btn.btn__big}`}
              >
                Envoyer
              </button>

              {status === 'success' && (
                <small className={style.status__success}>
                  <i className="fa-solid fa-circle-check"></i> Nous vous remercions pour votre
                  demande, et la traiterons dans les plus brefs délais. Vous avez reçu un e-mail de
                  confirmation.
                </small>
              )}

              {status === 'error' && (
                <small className={style.status__error}>
                  <i className="fa-solid fa-triangle-exclamation"></i> Une erreur est survenue,
                  votre demande n&rsquo;a pas pu être envoyée. Merci de contrôler votre adresse
                  e-mail et de réessayer.
                  <br />
                  Le cas échéant, vous pouvez nous transmettre votre demande à l&rsquo;adresse
                  suivante :{' '}
                  <Link href={'mailto:info@pc-sa.ch'} style={{ color: 'var(--gold)' }}>
                    <span id="mail" />
                  </Link>
                </small>
              )}

              {status === 'sending' && (
                <small className={style.status__sending}>
                  <i className="fa-solid fa-spinner"></i> En cours d&rsquo;envoi...
                </small>
              )}

              {status === 'cooldown' && (
                <small className={style.status__sending}>
                  Afin d&rsquo;éviter le spam, nous vous demandons de patienter quelques instants
                  avant de renvoyer votre demande.
                </small>
              )}

              {status === 'captcha' && (
                <small className={style.status__sending}>
                  Merci de remplir correctement le champ d&apos;anti-spam.
                </small>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
