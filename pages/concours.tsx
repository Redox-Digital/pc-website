import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import css from './Concours.module.scss';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function Concours() {
  return (
    <>
      <Head>
        <title>Concours 60 ans | Paris & Comtesse SA</title>
        <meta
          name="description"
          content="Formulaire d’inscription & conditions de participations"
        />
      </Head>
      <Hero
        title="Concours"
        subtitle="Formulaire d’inscription & conditions de participations"
        imgUrl="/layouts/contact-hero.webp"
      />
      <TextImageSection
        title={'Jardinière'}
        surtitle={'À gagner'}
        imgPath={'/layouts/contact-address.webp'}
      >
        <>
          <p>
            Pour célébrer les 60 ans de Paris & Comtesse SA, nous lançons un concours exclusif avec
            à la clé, une de nos nouvelles créations en construction métallique : une jardinière en
            [matériau] !
          </p>
          <p>Données techniques : </p>
          <ul>
            <li>Dimensions : 115x27x70 cm</li>
            <li>Couleur : gris anthracite</li>
            <li>Poids : 14 kg</li>
          </ul>
          <Button href={'#formulaire'} icon="fa-solid fa-caret-down">
            Participer
          </Button>
        </>
      </TextImageSection>

      <ContactForm />

      <section id="conditions-de-participations" className={`white ${css.conditions}`}>
        <div className="container">
          <h2>Condition générales de participation</h2>
          <p>
            La participation à des concours ou jeux en ligne, ainsi qu’à des tirages au sort, est
            proposée via le site web de Paris & Comtesse (pc-sa.ch), ou ses réseaux sociaux :
          </p>
          <ul>
            <li>
              Instagram :{' '}
              <Link href={'https://www.instagram.com/parisetcomtesse/'} target="_blank">
                @parisetcomtesse
              </Link>
            </li>
            <li>
              Facebook :{' '}
              <Link href={'https://www.facebook.com/parisetcomtesse'} target="_blank">
                Paris & Comtesse SA
              </Link>
            </li>
            <li>
              LinkedIn :{' '}
              <Link href={'https://www.linkedin.com/company/paris-comtesse-sa'} target="_blank">
                Paris & Comtesse SA
              </Link>
            </li>
          </ul>
          <p>
            Paris & Comtesse SA n&rsquo;est pas responsable d&rsquo;éventuelles arnaques organisées
            en parallèle d&rsquo;un concours officiel. Nous ne communiquons que par mail, au travers
            d&rsquo;adresses mail issues du nom de domaine « @pc-sa.ch ».
          </p>
          <p>
            En cas de non-respect des conditions de participation au concours, Paris & Comtesse SA
            se réserve le droit d&rsquo;annuler le concours à tout moment, ou de réitérer son tirage
            au sort.
          </p>
          <h2>Concours du 08.05.2024 - Jardinière</h2>
          <p>Pour qu’une participation soit valide, l’utilisateur doit :</p>
          <ul>
            <li>
              Être abonné au compte Instagram{' '}
              <Link href={'https://www.instagram.com/parisetcomtesse/'} target="_blank">
                @parisetcomtesse
              </Link>
            </li>
            <li>Avoir « liké » la publication</li>
            <li>Avoir posté un commentaire mentionnant 2 autres comptes</li>
            <li>
              S’être inscrit au formulaire suivante :{' '}
              <Link href="https://pc-sa.ch/concours">pc-sa.ch/concours</Link>
            </li>
            <li>
              Être domicilié en Suisse et/ou pouvoir recevoir la livraison du prix à une adresse
              postale suisse. (Possible de remplacer par : Pouvoir venir récupérer le prix à notre
              atelier situé à CH-XXXX Boudry)
            </li>
            <li>Ne pas être employé.e par Paris & Comtesse SA</li>
          </ul>

          <h2>Protection des données</h2>
          <p>
            Dans le contexte d’un concours, une série de données personnelles sont récoltées par le
            formulaire et utilisées dans le cadre du concours en question, pour établir des
            statistiques de participation et, selon les cas de figure, pour la publication des
            résultats du concours. L’existence d’une telle publication est mentionnée par écrit dans
            le contexte du concours en question.
          </p>
          <p>
            Un utilisateur du site web, en participant au concours, consent à ce que ses données
            personnelles soient utilisées pour lui transmettre, par la suite, des offres de produits
            et de prestations. En particulier, l’utilisateur reconnaît que sa participation au
            concours signifie qu’il accepte que ses données personnelles puissent être utilisées
            pour lui envoyer de la publicité [par la poste, par téléphone, par courriel ou par
            SMS/WhatsApp]. L’utilisation des données personnelles d’un participant à un concours
            s’étend aux partenaires qui parrainent les prix du concours en question, si un
            partenariat est indiqué.
          </p>
        </div>
      </section>
    </>
  );
}
