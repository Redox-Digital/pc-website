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
          <Button href={url} blank>
            Voir l&rsquo;annonce
          </Button>
        ) : (
          ''
        )}
        {pdf ? (
          <Button href={`${baseUrl}${pdf}`} blank outline>
            <i className="fa-regular fa-file-pdf" /> Télécharger le pdf
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
