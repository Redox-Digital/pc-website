import css from './Home.module.scss';
import Hero, { HomeHero } from '@/components/layouts/Hero';
import Infography from '@/components/content/InfographySection';
import TextImageSection from '@/components/layouts/TextImageSection';
import Button from '@/components/navigation/Button';
import ServicesSection from '@/components/content/ServicesSection';
import { ourValues } from '@/constants/projectSpecifics';
import ContactCTA, { GoogleMyBusinessCTA, JobCTA } from '@/components/content/CTAs';
import Metadata from '@/components/content/Metadata';
import LatestProjects from '@/components/layouts/LatestProjects';
import { ProjectApiType } from '@/constants/types';

type Props = {
  projects: ProjectApiType[];
};

export default function Home({ projects }: Props) {
  const [pageTitle, pageDesc] = [
    'Construction métallique à Neuchâtel',
    "Depuis plus de 60 ans, l'entreprise Paris & Comtesse SA conçoit, fabrique et installe des structures métalliques sur mesure, répondant aux exigences et besoins spécifiques de ses clients.",
  ];

  return (
    <>
      <Metadata description={pageDesc} />
      <HomeHero
        title={pageTitle}
        subtitle={
          <>
            Depuis plus de 60 ans, l&apos;entreprise <em>Paris & Comtesse SA</em> conçoit, fabrique
            et installe des structures métalliques sur mesure, répondant aux exigences et besoins
            spécifiques de ses clients.
          </>
        }
        imgUrl="/layouts/home-hero.webp"
      />
      <main className="home">
        <LatestProjects projects={projects} />

        <ServicesSection />

        <ContactCTA />

        <TextImageSection
          title={'Notre équipe'}
          surtitle={'Soudés depuis 60 ans'}
          imgPath="/layouts/home-sur-mesure.webp"
        >
          <>
            <p>
              De par ses plus de 60 ans d’expérience dans le domaine de la construction métallique,
              Paris & Comtesse SA est reconnu pour son savoir-faire.
            </p>
            <p>
              Avec une équipe qualifiée et soudée, soucieuse de la qualité, nous réalisons des
              pièces dans les règles de l’art afin de répondre précisément à chaque demande et
              satisfaire notre clientèle.
            </p>
            <Button href={'/entreprise'}>Découvrez notre entreprise</Button>
          </>
        </TextImageSection>

        <h3>Section certifications</h3>

        <Infography
          title="Nos valeurs"
          desc="Nous sommes fiers de vous présenter les valeurs fondamentales qui guident notre entreprise."
          blocks={ourValues}
        />

        <JobCTA />

        <TextImageSection
          title={'Le métal'}
          surtitle={'Un choix éco-responsable'}
          imgPath="/layouts/home-metal.webp"
          light
        >
          <>
            <p>
              Le métal est un matériau très prisé pour sa solidité, sa durabilité et sa résistance.
            </p>
            <p>
              Reçu sous forme de feuilles ou de bobines, l&rsquo;acier est mécaniquement découpé,
              plié, cintré. Il est également travaillé de différentes manières pour obtenir la forme
              finale souhaitée.
            </p>
            <p>
              La main de l&rsquo;homme reste essentielle pour travailler le métal avec précision et
              créer des pièces uniques et personnalisées.
            </p>
          </>
        </TextImageSection>

        <GoogleMyBusinessCTA />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const projects = await fetch(
    `${process.env.api}/items/projets?sort=-date&filter[highlighted][_eq]=true&limit=3`
  )
    .then((res) => res.json())
    .then((json) => json.data);

  return {
    props: {
      projects,
    },
  };
};
