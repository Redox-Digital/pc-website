import Hero from '@/components/Hero';
import InfographySection from '@/components/InfographySection';
import Head from 'next/head';
import style from '@/styles/layouts/Careers.module.scss';
import Newsletter from '@/components/Newsletter';
import JobOffer from '@/components/JobOffer';

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
  url: string;
  pdfLink: string;
};

export default function Careers(props: any) {
  const displayJobs = (jobs: Job[]) => {
    console.log(props);

    if (jobs && jobs.length) {
      return jobs.map((job) => (
        <JobOffer key={job.id} job={job} baseUrl="https://pc.redoxdigital.ch/assets/" />
      ));
    } else {
      return <h3>Actuellement aucune offre n&rsquo;est disponible sur notre site.</h3>;
    }
  };

  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Emplois</title>
        <meta
          name="description"
          content="Nous sommes une entreprise dynamique et passionnée, spécialisée dans la construction métallique. Nous sommes constamment à la recherche de nouveaux talents pour rejoindre notre équipe."
        />
      </Head>
      <Hero title="Emplois" subtitle="Nous rejoindre" source="/layouts/careers-hero.webp" />
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

          {displayJobs(props.jobs.data)}
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

        <Newsletter />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://pc.redoxdigital.ch/items/job');
  const jobs = await res.json();

  return { props: { jobs } };
};
