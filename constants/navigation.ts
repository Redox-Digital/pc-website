export type NavLinkType = {
  url: string;
  label: string;
  icon?: string;
  btn?: boolean;
  subLinks?: NavLinkType[];
};

export const mainNavLinks: NavLinkType[] = [
  {
    url: '/',
    label: 'Accueil',
  },
  {
    url: '/construction-metallique/',
    label: 'Construction métallique',
  },
  {
    url: '/tolerie/',
    label: 'Tôlerie',
  },
  {
    url: '#',
    label: 'Entreprise',
    subLinks: [
      {
        url: '/a-propos/',
        label: 'À propos',
      },
      {
        url: '/emploi/',
        label: 'Emplois',
      },
    ],
  },
  {
    url: '/contact/',
    label: 'Contact',
    btn: true,
  },
];

export const socialLinks: NavLinkType[] = [
  {
    url: 'https://www.instagram.com/parisetcomtesse/',
    label: 'Instagram',
    icon: 'fa-instagram',
  },
  {
    url: 'https://www.facebook.com/parisetcomtesse',
    label: 'Facebook',
    icon: 'fa-facebook',
  },
  {
    url: 'https://www.linkedin.com/company/paris-comtesse-sa',
    label: 'LInkedIn',
    icon: 'fa-linkedin-in',
  },
];
