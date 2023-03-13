import Head from "next/head";
import Hero from "@/components/Hero";

const About = () => {
    return (
        <>
            <Head>
                <title>Paris & Comtesse SA | À propos</title>
                <meta name="keywords" content="À propos" />
            </Head>
            <Hero title="À propos" subtitle="Lorem ipsum dolor sit amet" source="/bg-about.svg" />
        </>
    );
}

export default About;



