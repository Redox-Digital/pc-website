import style from '@/styles/components/Infography.module.scss'
import Image from 'next/image'

type Block = {
    slug: string;
    path: string;
    title: string;
    desc: string;
}

type Props = {
    title: string;
    desc: string;
    blocks: Block[];
}


export default function InfographySection(props: Props) {
    const { title, desc, blocks } = props;

    return (
        <section className={style.infography}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.paragraph}>{desc}</p>
            <div className={style.line}>
                {blocks.map((block) => (
                    <div className={style.column}>
                        <Image src={block.path} width="100" height="100" alt={block.title} />
                        <p>{block.title}</p>
                        <small>{block.desc}</small>
                    </div>
                ))}
            </div>
        </section>
    );
}