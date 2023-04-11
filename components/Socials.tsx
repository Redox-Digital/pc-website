import Link from 'next/link';

export default function Socials() {
  return (
    <>
      <Link
        href="https://www.instagram.com/paris_et_comtesse/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre compte Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link
        href="https://www.facebook.com/parisetcomtesse"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre page Facebook"
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/company/paris-comtesse-sa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Accéder à notre page LinkedIn"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
    </>
  );
}
