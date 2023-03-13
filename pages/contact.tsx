import Head from "next/head";
import Form from "@/components/Form"

const Contact = () => {
    return (
        <>
            <Head>
                <title>Paris & Comtesse SA | Contact</title>
                <meta name="keywords" content="contact" />
            </Head>
            <div>
                <h1>Contact</h1>
                <Form />
            </div>
        </>
    );
}

export default Contact;