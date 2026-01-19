import Head from 'next/head';
import { generateStructuredData } from '../helpers/MetadataHelper';
import { usePathname } from 'next/navigation';

// Structured Data Types
export type PageStructuredDataType = {
  url: string;
  title: string;
};

export type ServiceStructuredDataType = {
  serviceType: string;
  description: string;
};

export type ArticleStructuredDataType = {
  name: string;
  url: string;
  image: string;
  description: string;
  // datePublished: string; DEV: no date for now
};

export type StructureDataType = {
  page: PageStructuredDataType;
  services?: ServiceStructuredDataType[];
  articles?: ArticleStructuredDataType[];
};

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
  addStructuredData?: Partial<StructureDataType>;
};

export default function Metadata({
  title,
  description,
  image,
  children,
  addStructuredData,
}: Props) {
  const defaultTitle = 'Construction métallique à Boudry | Paris & Comtesse SA';
  const defaultDesc =
    'Notre entreprise conçoit des ouvrages sur-mesure permettant une personnalisation complète pour répondre aux besoins spécifiques de nos clients.';
  const defaultImage = `${process.env.domain}/socials/social_thumbnail.jpg`;

  const structuredData = generateStructuredData({
    page: { url: `${process.env.domain}${usePathname()}`, title: title || defaultTitle },
    ...addStructuredData,
  });

  return (
    <Head>
      <title>{title ? `${title} | Paris & Comtesse SA` : defaultTitle}</title>

      <meta
        name="keywords"
        content="construction métallique, construction métallique Neuchâtel, Neuchâtel, tôlerie, tôlerie industrielle, serrurerie"
      />
      <meta name="description" content={description || defaultDesc} />
      <meta name="author" content="Redox Digital, Steve Mettraux" />

      <meta property="og:title" content={title ? `${title} | Paris & Comtesse SA` : defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={process.env.domain} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? `${title} | Paris & Comtesse SA` : defaultTitle}
      />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />

      {children}

      <script
        type="txt"
        dangerouslySetInnerHTML={{
          __html: `/* Realisation : Redox Digital Sàrl [redoxdigital.ch] & Steve Mettraux [github.com/Smettraux] */`,
        }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    </Head>
  );
}
