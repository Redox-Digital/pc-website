import css from '@/pages/projets/ProjectPage.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  subtitle: string;
  img: string;
};

export default function ProjectHero({ title, description, subtitle, img }: Props) {
  return (
    <header className={css.hero}>
      <div className="container">
        <div className={css.texts}>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>{subtitle}</small>
        </div>

        {/* Ajouter une animation pour l'écran de chargememnt du projet. */}

        <Image src={img} alt="" width={600} height={400} />
      </div>
    </header>
  );
}
