import css from './CookiesPopUp.module.scss';
import btn from '@/components/navigation/Button.module.scss';
import Link from 'next/link';
import Button from '../navigation/Button';

type Props = {
  handleCookiePolicy: (answer: boolean) => void;
};

export default function CookiesPopUp({ handleCookiePolicy }: Props) {
  return (
    <div className={css.popup}>
      <small>
        Acceptez-vous que ce site enregistre des cookies sur votre appareil et partage des
        informations anonymes selon notre{' '}
        <Link href="/confidentialite">déclaration de protection des données</Link> ?
      </small>
      <Button small onClick={() => handleCookiePolicy(true)}>
        J&rsquo;accepte
      </Button>
      <Button small secondary onClick={() => handleCookiePolicy(false)}>
        Je&nbsp;refuse
      </Button>
    </div>
  );
}
