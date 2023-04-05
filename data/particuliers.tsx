type Realisation = {
  id: number;
  title: string;
};

export default function Realisations(): Realisation[] {
  return [
    { id: 0, title: 'Exemple de titre' },
    { id: 1, title: 'Exemple de titre' },
    { id: 2, title: 'Exemple de titre' },
    { id: 3, title: 'Exemple de titre' },
    { id: 4, title: 'Exemple de titre' },
  ];
}
