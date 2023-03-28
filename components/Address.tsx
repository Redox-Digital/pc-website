import style from '@/styles/components/Address.module.scss';

export default function Address() {
  return (
    <div className={style.address}>
      <div className={style.address__elt}>
        <h5>Téléphone</h5>
        <p>
          <span id="phone"></span>
        </p>
      </div>
      <div className={style.address__elt}>
        <h5>Adresse</h5>
        <p>Chem. de la Baconnière 55, 2017 Boudry</p>
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
