import style from './JobOffer.module.scss';
import Link from 'next/link';
import Button from '../navigation/Button';

type Job = {
  title: string;
  url: string | null;
  pdf: string | null;
};

export default function JobOffer(props: { job: Job; baseUrl: string }) {
  const { title, url, pdf } = props.job;
  const baseUrl = props.baseUrl;

  return (
    <div className={style.job}>
      <div className={style.job__texts}>
        <h3>{title}</h3>
        <p>
          Si vous êtes intéressé(e) par ce poste, nous attendons avec impatience votre CV et une
          lettre de motivation à{' '}
          <Link href={'mailto:info@pc-sa.ch'} target="_blank" rel="noreferrer noopener">
            <span id="mail" />
          </Link>
        </p>
      </div>
      <div className={style.job__btns}>
        {url ? (
          <Button ariaLabel="Ouvrir l'offre d'emploi sur un site externe" href={url} blank>
            Voir l&rsquo;annonce
          </Button>
        ) : (
          ''
        )}
        {pdf ? (
          <Button
            href={`${baseUrl}${pdf}`}
            ariaLabel="Ouvrir le fichier PDF de l'offre d'emploi"
            blank
            icon="fa-regular fa-file-pdf"
            variation="outline"
          >
            Télécharger le pdf
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
