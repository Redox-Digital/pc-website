import style from '@/styles/components/JobOffer.module.scss';
import Button from './Button';
import Link from 'next/link';

type Job = {
  title: string;
  url?: string;
  pdf?: string;
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
          <Button ariaLabel="Ouvrir l'offre d'emploi sur un site externe" to={url} blank>
            Voir l&rsquo;annonce
          </Button>
        ) : (
          ''
        )}
        {pdf ? (
          <Button
            to={`${baseUrl}${pdf}`}
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
