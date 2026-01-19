import style from './Infography.module.scss';
import Image from 'next/image';

type Block = {
  slug: string;
  path: string;
  title: string;
  desc: string;
};

type Props = {
  title: string;
  desc: string;
  blocks: Block[];
};

export default function InfographySection(props: Props) {
  const { title, desc, blocks } = props;

  return (
    <section className={`${style.infography} light`}>
      <div className={style.infography__titles}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className={style.infography__blocks}>
        {blocks.map((block) => (
          <div className={style.infography__block} key={block.slug}>
            <Image src={block.path} width="90" height="90" alt={block.title} />
            <p>{block.title}</p>
            <small>{block.desc}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
