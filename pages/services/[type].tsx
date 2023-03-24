import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import OtherServices from '@/components/OtherServices';
import Head from 'next/head';
import { useRouter } from 'next/router';
import style from "@/styles/layouts/Services.module.scss";
import btn from "@/styles/components/Button.module.scss";

type Realisation = {
    id: number;
    title: string;
    path: string;
}

type Service = {
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    introDesc: string | JSX.Element;
    services: string[];
    realisations: Realisation[];
    otherSlugs: string[];
}

export default function Service() {
    const router = useRouter();
    const { type } = router.query;

    const servicesStatic: Service[] = [
        {
            slug: "particuliers",
            heroTitle: "Particuliers",
            heroSubtitle: "Laisser libre cours à ses envies",
            introDesc: "Nous sommes convaincus que chaque client est unique, avec des besoins et des demandes spécifiques, c’est pourquoi nous nous efforçons de personnaliser nos services pour répondre à ces besoins individuels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs envies et leurs attentes afin de concevoir des solutions sur-mesure. Cette approche garantit que chaque projet est unique en s’adaptant aux choix esthétiques et contraintes techniques.",
            services: ["escalier", "pergola", "garde-corps", "passerelle", "porte", "agencement décoratif"],
            realisations: [{ id: 0, title: "Exemple de titre", path: "https://picsum.photos/200/300" }, { id: 1, title: "Exemple de titre", path: "https://picsum.photos/200/300" }],
            otherSlugs: ["collectivites", "entreprises"],
        },
        {
            slug: "collectivites",
            heroTitle: "Collectivités",
            heroSubtitle: "Un engagement durable",
            introDesc: "Nous sommes fiers de notre engagement envers la qualité de service pour les collectivités. Nous croyons que chaque collectivité mérite un service de haute qualité et une expérience client satisfaisante. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins à long terme.",
            services: [],
            realisations: [],
            otherSlugs: ["particuliers", "entreprises"],
        },
        {
            slug: "entreprises",
            heroTitle: "Entreprises",
            heroSubtitle: "L'échange et la confiance dans la fierté du travail bien fait",
            introDesc: "Nous sommes spécialisés dans la conception, fabrication et installations de structures métalliques pour les bâtiments commerciaux, industriels et institutionnels. Nous veillons à ce que nos réalisations soient effectuées dans les délais impartis et avec le plus grand soin. Notre approche personnalisée nous permet de créer des relations solides et durables avec nos clients, en leur offrant des services qui répondent à leurs besoins à long terme.",
            services: [],
            realisations: [],
            otherSlugs: ["particuliers", "collectivites"],
        }
    ];

    const service = servicesStatic.find(elt => elt.slug === type) || servicesStatic[0];

    return (
        <>
            <Head>
                <title>Paris & Comtesse SA | Services pour les {service.heroTitle}</title>
                <meta name="keywords" content="Services" />
            </Head>
            <Hero
                title={service.heroTitle}
                subtitle={service.heroSubtitle}
                source={`/layouts/bg-${service.slug}.png`}
            />
            <main className={style.service}>
                <section className={`${style.service__intro} light`}>
                    <div className={style.service__titles}><h5>Pour les {service.heroTitle}</h5>
                        <h2>Services sur-mesure</h2></div>

                    <p>{service.introDesc}</p>

                    <ul className={style.service__list}>
                        {service.services.map((service, i) => (<li key={`service_${i}`}>{service}</li>))}
                    </ul>
                </section>
                <section className={`${style.gallery} light`}>
                    <div className={style.service__titles}>
                        <h5>une image vaut mille mots</h5>
                        <h2>Découvrez nos réalisations</h2>
                    </div>
                    <div className={style.gallery__images}>

                    </div>

                    <button className={`${btn.btn} ${btn.btn__secondary}`} type="button">En voir plus</button>
                </section>
                <ContactCTA />
                <OtherServices />
                <Newsletter />
            </main>
        </>
    );
}