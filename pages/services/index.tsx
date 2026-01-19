import Metadata from '@/components/content/Metadata';
import ServicesSection from '@/components/layouts/ServicesSection';
import Head from 'next/head';

export default function Services() {
  const [pageTitle, pageDesc] = [
    'Services',
    // DEV : description à mettre à jour
    "Avec plus de 60 ans d'expérience dans le domaine de la construction métallique, Paris & Comtesse SA est reconnu pour son savoir-faire.",
  ];
  return (
    <>
      <Metadata title={pageTitle} description={pageDesc} />
      <ServicesSection />
    </>
  );
}
