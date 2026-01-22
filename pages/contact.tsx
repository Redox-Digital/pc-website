import Head from 'next/head';
import Hero from '@/components/layouts/Hero';
import Map from '@/components/content/Map';
import Address from '@/components/content/Address';
import TextImageSection from '@/components/layouts/TextImageSection';
import ContactForm from '@/components/forms/ContactForm';
import Metadata from '@/components/content/Metadata';
import { GoogleMyBusinessCTA } from '@/components/content/CTAs';

export default function Contact() {
  const [pageTitle, pageDesc] = [
    'Nous contacter',
    'Notre équipe est à votre disposition pour échanger sur votre projet.',
  ];

  return (
    <>
      <Metadata title={pageTitle} description={pageDesc} />

      <Hero title="Contact" subtitle={pageDesc} imgUrl="/layouts/contact-hero.webp" />

      <TextImageSection
        title={'logo'}
        surtitle={'Nos coordonnées'}
        imgPath={'/layouts/contact-address.webp'}
      >
        <Address />
      </TextImageSection>
      <Map />

      <ContactForm />

      <GoogleMyBusinessCTA />
    </>
  );
}
