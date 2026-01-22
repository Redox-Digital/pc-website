import Hero from '@/components/layouts/Hero';
import InfographySection from '@/components/content/InfographySection';
import style from './Careers.module.scss';
import JobOffer from '@/components/content/JobOffer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Metadata from '@/components/content/Metadata';

const ourMotivations = [
  {
    slug: 'teamwork',
    path: '/pictograms/p-c_teamwork.svg',
    title: 'Travail en équipe',
    desc: 'Combiner les compétences et les forces de chacun, l’union fait la force',
  },
  {
    slug: 'teamspirit',
    path: '/pictograms/p-c_esprit-equipe.svg',
    title: 'Esprit d’équipe',
    desc: 'Travailler ensemble vers des objectifs communs en créant un environnement de travail inspirant',
  },
  {
    slug: 'passion',
    path: '/pictograms/p-c_passion.svg',
    title: 'Passion',
    desc: 'L’étincelle qui allume le feu en nous et pousse à donner le meilleur de soi-même',
  },
  {
    slug: 'creativity',
    path: '/pictograms/p-c_creativite.svg',
    title: 'Créativité',
    desc: 'L’art de voir les choses autrement, explorer de nouvelles idées et créer quelque chose d’unique',
  },
  {
    slug: 'formation',
    path: '/pictograms/p-c_formation.svg',
    title: 'Formation & développement',
    desc: 'Le tremplin qui permet de s’élever, de grandir et de déployer son potentiel',
  },
];

type Job = {
  id: number;
  title: string;
  url: string | null;
  pdf: string | null;
};

export default function Careers() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`${process.env.api}/items/job?filter={"archived": {"_eq": false}}`)
        .then((res) => res.json())
        .then((jobs) => {
          setJobs(jobs.data);
          setLoading(false);
        });
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  }, []);

  const displayJobs = () => {
    if (isLoading) return <p>Chargement...</p>;
    if (!jobs || jobs.length === 0)
      return (
        <p>
          <i>Actuellement aucune offre n&rsquo;est disponible sur notre site.</i>
        </p>
      );

    return jobs.map((job) => (
      <JobOffer key={job.id} job={job} baseUrl={`${process.env.api}/assets/`} />
    ));
  };

  const [pageTitle, pageDesc] = [
    'Emplois',
    'Nous sommes une entreprise dynamique et passionnée, spécialisée dans la construction métallique. Nous sommes constamment à la recherche de nouveaux talents pour rejoindre notre équipe.',
  ];

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc} />
      <Hero title={pageTitle} subtitle="Nous rejoindre" imgUrl="/layouts/careers-hero.webp" />
      <main className={style.careers}>
        <section className={`${style.careers__intro} light`}>
          <div className="container">
            <div className={style.careers__intro__title}>
              <h2>Travailler chez nous</h2>
            </div>
            <div className={style.careers__intro__text}>
              <p>
                Nous sommes une entreprise dynamique et passionnée, spécialisée dans la construction
                métallique. Nous sommes constamment à la recherche de nouveaux talents pour
                rejoindre notre équipe.
              </p>
              <p>
                Travailler chez nous, c&rsquo;est avoir l&rsquo;opportunité de contribuer à des
                projets stimulants et innovants, dans un environnement de travail convivial et
                centré sur l&rsquo;humain. Nous croyons que notre succès est lié à celui de nos
                employés, c&rsquo;est pourquoi nous proposons des formations et nous engageons
                également dans la formation d&rsquo;apprentis.
              </p>
            </div>
          </div>
        </section>
        <section className={style.careers__jobs}>
          <h2>Nos offres d&rsquo;emplois</h2>

          {displayJobs()}

          <div className={style.careers__jobs__spontaneous}>
            <h4>Postulation spontanée</h4>
            <p>
              Nous recherchons ponctuellement de nouveaux talents pour rejoindre notre équipe. Si
              notre entreprise vous intéresse, n&apos;hésitez pas à nous envoyer votre candidature
              spontanée.
            </p>
            <p>
              Envoyez-nous votre dossier de candidature (CV et lettre de motivation) à
              l&apos;adresse suivante :{' '}
              <Link
                href={`mailto:${process.env.mail}`}
                target="_blank"
                aria-label="Nous contacter par mail"
              >
                <span id="mail"></span>
              </Link>
            </p>
          </div>
        </section>
        <div
          className={style.careers__imgBanner}
          style={{ backgroundImage: 'url(/layouts/careers-banner.webp)' }}
        ></div>
        <InfographySection
          title="Nos motivations"
          desc={
            'Centrées sur le respect, la confiance et la transparence pour nourrir une culture d’équipe solide et unie.'
          }
          blocks={ourMotivations}
        ></InfographySection>
      </main>
    </>
  );
}

/*

export const getStaticProps = async () => {
  const res = await fetch('http://pc.redoxdigital.ch/items/job');
  const jobs = await res.json();

  return { props: { jobs } };
};
*/
