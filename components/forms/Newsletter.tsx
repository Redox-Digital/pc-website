import btn from '@/components/navigation/Button.module.scss';
import style from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <form
      method="post"
      action="https://newsletter.infomaniak.com/external/submit"
      target="_blank"
      className={style.nl}
      style={{ backgroundImage: `url(/layouts/newsletter.webp)` }}
    >
      <div className={style.nl__content}>
        <div className={style.nl__titles}>
          <h3>Recevez nos dernières informations</h3>
          <p>Inscrivez-vous à notre newsletter</p>
        </div>
        <div className={style.nl__input}>
          <input
            type="email"
            name="inf[1]"
            data-inf-meta="1"
            data-inf-error="Merci de renseigner une adresse email"
            required
            placeholder="Email"
          />
          <input
            type="hidden"
            name="key"
            value="eyJpdiI6ImRFbk1LaG1oQVA2MVRcL2VZUFlnQkRUb1kzaFhWcjhFOVwvcm9YKzJZU3g3az0iLCJ2YWx1ZSI6Ik1hak9xcFwvbVpZeGpzanBNVDV5RXZlYm5LWFlOYzBXbVY1b3JWbXY2WUtJPSIsIm1hYyI6IjJkODE5OWZlMzVmNDQzOTNjYWI3Yjg3ZGJjMTUzNzAxNTVjMzI5M2U4NDQwMzI3NGRhOTY4OTA4ZTdhODA4N2QifQ=="
          />
          <input type="hidden" name="webform_id" value="14062" />
          <input
            className={`${btn.btn} ${btn.btn__big} ${btn.btn__black} ${style.submit}`}
            type="submit"
            name=""
            value="S'inscrire"
          />
        </div>
      </div>
      <div className={style.overlay} style={{ opacity: 0.1 }} />
    </form>
  );
}
