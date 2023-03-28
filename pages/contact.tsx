import Head from 'next/head';
import Hero from '@/components/Hero';
import style from '@/styles/components/Form.module.scss';
import ContactForm from '@/components/ContactForm';
import Address from '@/components/Address';
import TextImageSection from '@/components/TextImageSection';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Contact</title>
        <meta name="keywords" content="contact" />
      </Head>
      <Hero
        title="Contact"
        subtitle="Notre équipe est à votre disposition pour échanger sur votre projet"
        source="/layouts/bg-contact.svg"
      />
      <TextImageSection
        title={'logo'}
        surtitle={'Nos coordonnées'}
        imgPath={'https://picsum.photos/200/300'}
      >
        <Address />
      </TextImageSection>
      <section>
        <h2>Carte</h2>
      </section>

      <ContactForm />
    </>
  );
};

export default Contact;
