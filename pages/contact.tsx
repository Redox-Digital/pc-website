import Head from "next/head";
import Form from "@/components/Form"
import Hero from "@/components/Hero";
import style from '@/styles/components/Form.module.scss'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Paris & Comtesse SA | Contact</title>
                <meta name="keywords" content="contact" />
            </Head>
            <Hero title="Contact" subtitle="Lorem ipsum dolor sit amet" source="/bg-contact.svg" />
            <div className={style.form}>
                <Form />
            </div>
        </>
    );
}

export default Contact;