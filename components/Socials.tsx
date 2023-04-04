import Link from 'next/link';

export default function Socials() {
  return (
    <>
      <Link
        href="https://www.instagram.com/paris_et_comtesse/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link
        href="https://www.facebook.com/parisetcomtesse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
    </>
  );
}
