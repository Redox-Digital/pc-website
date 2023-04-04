import style from '@/styles/components/JobOffer.module.scss';
import Button from './Button';

type Job = {
  title: string;
  desc: string;
  extLink?: string;
  pdfLink?: string;
};

export default function JobOffer(props: Job) {
  const { title, desc, extLink, pdfLink } = props;
  return (
    <div className={style.job}>
      <div className={style.job__texts}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={style.job__btns}>
        {extLink ? (
          <Button to={extLink} blank>
            Voir l&rsquo;annonce
          </Button>
        ) : (
          ''
        )}
        {pdfLink ? (
          <Button to={pdfLink} blank icon="fa-regular fa-file-pdf" variation="outline">
            Télécharger le pdf
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
