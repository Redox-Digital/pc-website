import style from '@/styles/components/Address.module.scss';
import Link from 'next/link';

export default function Address() {
  return (
    <div className={style.address}>
      <div className={style.address__elt}>
        <h5>Contact</h5>
        <p>
          <Link href={`tel:${process.env.phone}`} target="_blank" aria-label="Nous téléphoner">
            <span id="phone"></span>
          </Link>
        </p>
        <p>
          <Link
            href={`mailto:${process.env.mail}`}
            target="_blank"
            aria-label="Nous contacter par mail"
          >
            <span id="mail"></span>
          </Link>
        </p>
      </div>
      <div className={style.address__elt}>
        <h5>Adresse</h5>
        <p>
          <Link href="https://maps.app.goo.gl/xJE6HVyw3Jr2EYBPA" target="_blank">
            Baconnière 55, 2017 Boudry
          </Link>
        </p>
      </div>
      <div className={style.address__elt}>
        <h5>Horaires</h5>
        <p>
          Lundi au Jeudi
          <br />
          7h00-12h00 / 13h00-17h00
        </p>
        <p>
          Vendredi
          <br />
          7h00-12h00
        </p>
      </div>
    </div>
  );
}
