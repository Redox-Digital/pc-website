export type ServicePreviewType = {
  title: string;
  desc: string;
  img: string;
  url: string;
};

export type ProjectPreviewProps = {
  id: number;
  title: string;
  description?: string;
  year: string;
  location: string;
  url: string;
  img: string;
};

export type StaticServicePageType = {
  title: string;
  subtitle: string;
  heroImg: string;

  intro: {
    surtitle: string;
    title: string;
    description: string;

    keywords: string[];
  };
};

export type DirectusBlock = {
  id: string;
  // DEV : manque Quoteblock
  type: 'image' | 'header' | 'paragraph' | 'embed';
  data: any;
};

export type ProjectApiType = {
  id: number;
  title: string;
  cover: string;
  location: string;
  date: string;
  shortDescription: string;
  introText: string;
  pdf: string;

  service: 'construction-metallique' | 'tolerie';
  contentBlocks: {
    blocks: DirectusBlock[];
  };
};
