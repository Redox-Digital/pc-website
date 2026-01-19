import Button from '@/components/navigation/Button';
import style from './404.module.scss';
import Metadata from '@/components/content/Metadata';

export default function NotFoundPage() {
  return (
    <>
      <Metadata title="Page introuvable" description="La page que vous recherchez n'existe pas." />
      <section className={`light ${style.notFoundPage}`}>
        <div className="container">
          <h5>Erreur 404</h5>
          <h2>Page introuvable</h2>
          <p>La page que vous recherchez n&rsquo;existe pas.</p>
          <Button href={'/'}>Retour à l&rsquo;accueil</Button>
        </div>
      </section>
    </>
  );
}
