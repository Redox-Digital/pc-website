import Hero from "@/components/Hero";
import InfographySection from "@/components/InfographySection";
import Head from "next/head";
import style from "@/styles/layouts/Careers.module.scss";
import Newsletter from "@/components/Newsletter";
import JobOffer from "@/components/JobOffer";

const ourMotivations = [
  {
    slug: "teamwork",
    path: "./pictograms/stamp-ico.svg",
    title: "Travail en équipe",
    desc: "Combiner les compétences et les forces de chacun pour accomplir les tâches plus efficacement",
  },
  {
    slug: "teamspirit",
    path: "./pictograms/lightbulb-ico.svg",
    title: "Esprit d’équipe",
    desc: "Travailler ensemble vers des objectifs communs, se soutenir et favoriser des relations positives en créant un environnement de travail positif et inspirant",
  },
  {
    slug: "passion",
    path: "./pictograms//gear-ico.svg",
    title: "Passion",
    desc: "Se concentrer sur l’excellence et travailler ensemble pour atteindre des résultats de haute qualité",
  },
  {
    slug: "creativity",
    path: "./pictograms//hands-ico.svg",
    title: "Créativité",
    desc: "Explorer de nouvelles idées, prendre des risques pour résoudre les problèmes et trouver des solutions innovantes",
  },
  {
    slug: "formation",
    path: "./pictograms//award-ico.svg",
    title: "Formation & développement",
    desc: "Acquérir et renforcer des compétences pour se sentir à l’aise et motivé tout en contribuant au développement et réussite de l’entreprise",
  },
];

type Job = {
  title: string;
  desc: string;
  extLink: string;
  pdfLink: string;
}


const openJobs: Job[] = [{
  title: "Chef(fe) de projet - Construction métallique 100%",
  desc: "Si vous êtes intéressé(e) par ce poste, nous attendons avec impatience votre CV et une lettre de motivation à info@pc-sa.ch",
  extLink: "https://www.jobup.ch/",
  pdfLink: "#"
}, {
  title: "Constructeur(trice) métallique ou CAI 100%",
  desc: "Si vous êtes intéressé(e) par ce poste, nous attendons avec impatience votre CV et une lettre de motivation à info@pc-sa.ch",
  extLink: "https://www.jobup.ch/",
  pdfLink: ""
}]


export default function Careers() {

  const displayJobs = (jobs: Job[]) => {
    if (jobs.length > 0) {
      return ((jobs.map((job) => (
        <JobOffer {...job} />
      ))))
    } else {
      return (<h3>Actuellement aucune offre n’est disponible sur notre site.</h3>)
    }
  }

  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Emplois</title>
        <meta name="keywords" content="Emplois" />
      </Head>
      <Hero
        title="Emplois"
        subtitle="Nous rejoindre"
        source="/layouts/bg-careers.svg"
      />
      <main className={style.careers}>
        <section className={`${style.careers__intro} light`}>
          <div className="title">
            <h2>Travaillez chez nous</h2>
          </div>
          <div className="text">
            <p>
              Nous sommes une entreprise dynamique et passionnée, spécialisée
              dans la construction métallique. Nous sommes constamment à la
              recherche de nouveaux talents pour rejoindre notre équipe.
            </p>
            <p>
              Travailler chez nous, c’est avoir l’opportunité de travailler sur
              des projets stimulants et innovants, dans un environnement de
              travail convivial et centré sur l’humain. Nous croyons que notre
              succès est lié à celui de nos employés, c’est pourquoi nous
              proposons des formations et nous engageons également dans la
              formation d’apprentis.
            </p>
          </div>
        </section>
        <InfographySection
          title="Nos motivations"
          desc={
            "Centrées sur le respect, la confiance et la transparence pour nourrir une culture d’équipe solide et unie."
          }
          blocks={ourMotivations}
        ></InfographySection>
        <div
          className={style.careers__imgBanner}
          style={{ backgroundImage: "url(https://picsum.photos/1000/300)" }}
        ></div>
        <section className={style.careers__jobs}>
          <h2>Nos offres d&rsquo;emplois</h2>

          {displayJobs(openJobs)}

        </section>
        <Newsletter />
      </main>
    </>
  );
}
