import Hero from "@/components/Hero";
import Head from "next/head";

const Carreers = () => {
    return (
        <>
            <Head>
                <title>Paris & Comtesse SA | Emplois</title>
                <meta name="keywords" content="Emplois" />
            </Head>
            <Hero title="Emplois" subtitle="Lorem ipsum dolor sit amet" source="/bg-carreers.svg" />
        </>
    );
}

export default Carreers;