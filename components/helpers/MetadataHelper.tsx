import {
  ArticleStructuredDataType,
  PageStructuredDataType,
  ServiceStructuredDataType,
  StructureDataType,
} from '@/components/content/Metadata';

// Constants used on every pages.
const defUrl = process.env.domain || 'https://pc-sa.ch';

// DEV: to be customized per project
export const organization = {
  '@type': 'Organization',
  '@id': `${defUrl}/#organization`,
  'url': defUrl,
  'name': 'Paris & Comtesse SA',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Chemin de la Baconnière 55',
    'addressLocality': 'Boudry',
    'addressRegion': 'NE',
    'postalCode': '2017',
    'addressCountry': 'CH',
  },
  'logo': `${defUrl}/logo/p-c_logo_slogan_nj.svg`,
  'image': `${defUrl}/socials/social_thumbnail.jpg`,
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': process.env.phone,
    'email': process.env.mail,
  },
  'sameAs': [
    'https://www.instagram.com/parisetcomtesse/',
    'https://www.facebook.com/parisetcomtesse',
    'https://www.linkedin.com/company/paris-comtesse-sa',
  ],
};

// All services
const allServices = [
  {
    '@type': 'Service',
    'serviceType': 'Stratégie & marketing digital',
    'provider': { '@id': `${defUrl}/#organization` },
    'areaServed': { '@type': 'Place', 'name': 'Switzerland' },
    'description':
      'Gestion stratégique et créative de la présence des marques sur les réseaux sociaux.',
  },
];

// MASTER FUNCTION TO GENERATE STRUCTURED DATA STRING
export const generateStructuredData = ({ page, services, articles }: StructureDataType): string => {
  let graph = [];

  graph.push(organization);
  graph.push(generateBreadcrumbList(page));

  if (services && services.length > 0) {
    graph.push(generateServices(services));
  }

  if (articles && articles.length > 0) {
    graph.push(generateArticle(articles));
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
};

// Object : BreadcrumbList
// DEV : à retravailler pour gérer plus de 2 niveaux
const generateBreadcrumbList = (page: PageStructuredDataType) => {
  if (page.url === defUrl) {
    return {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': { '@id': page.url, 'name': page.title },
        },
      ],
    };
  } else {
    return {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': { '@id': defUrl, 'name': 'Accueil' },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': { '@id': page.url, 'name': page.title },
        },
      ],
    };
  }
};

// Object : Service
const generateServices = (services: ServiceStructuredDataType[]) => {
  return services.map((service) => ({
    '@type': 'Service',
    'serviceType': service.serviceType,
    'provider': { '@id': `${defUrl}/#organization` },
    'areaServed': { '@type': 'Place', 'name': 'Switzerland' },
    'description': service.description,
  }));
};

// Object : Article / CreativeWork
const generateArticle = (articles: ArticleStructuredDataType[]) => {
  return articles.map((article) => ({
    // '@type': ['CreativeWork', 'Article'], // To be used on portfolio type sites
    '@type': 'Article',
    'headline': article.name,
    'url': article.url,
    'image': article.image,
    'description': article.description,
    'creator': { '@id': `${defUrl}/#organization` },
    'author': { '@id': `${defUrl}/#organization` },
    // 'datePublished': article.datePublished,
  }));
};
