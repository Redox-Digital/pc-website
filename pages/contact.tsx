import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import Map from '@/components/content/Map';
import Address from '@/components/content/Address';
import TextImageSection from '@/components/layouts/TextImageSection';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nous contacter | Paris & Comtesse SA</title>
        <meta
          name="description"
          content="Notre équipe est à votre disposition pour échanger sur votre projet."
        />
      </Head>
      <Hero
        title="Contact"
        subtitle="Notre équipe est à votre disposition pour échanger sur votre projet"
        imgUrl="/layouts/contact-hero.webp"
      />
      <TextImageSection
        title={'logo'}
        surtitle={'Nos coordonnées'}
        imgPath={'/layouts/contact-address.webp'}
      >
        <Address />
      </TextImageSection>
      <Map />

      <ContactForm />
    </>
  );
}
