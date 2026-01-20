export type ServicePreviewType = {
  title: string;
  desc: string;
  img: string;
  url: string;
};

export type ProjectPreviewProps = {
  id: string;
  title: string;
  description?: string;
  year: number;
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
