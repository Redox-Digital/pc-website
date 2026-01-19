import Link from 'next/link';
import { socialLinks } from '@/constants/navigation';

export default function Socials() {
  return (
    <>
      {socialLinks.map((l) => (
        <Link
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          title={l.label}
          aria-label={l.label}
        >
          <i className={`fa-brands ${l.icon}`} />
        </Link>
      ))}
    </>
  );
}
