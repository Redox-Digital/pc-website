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
  pdf?: string;

  service: 'construction-metallique' | 'tolerie';
  contentBlocks: {
    blocks: DirectusBlock[];
  };

  nextProject_id?: ProjectApiType;
};

type DirectusImageType = {
  id: string;
  type: string;
  width: number;
  height: number;
  title: string;
};

export type DirectusFileType = {
  id: number;
  description?: string;
  category: string;
  image: DirectusImageType;
};

// DEV UNUSED FOR NOW
export type DirectusGalleryApiType = {
  id: string;
  order?: number;
  directus_files_id: DirectusFileType;
};

export type RealisationApiType = {
  id: number;
  description?: string;
  image: DirectusImageType;
  category: string; // DEV : mettre la liste limitée des catégories
  tags?: string[];
};
