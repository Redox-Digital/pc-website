import Header from './navigation/Menu';
import Script from 'next/script';
import Footer from './navigation/Footer';

type Props = {
  children: string | React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/71157948d4.js" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
