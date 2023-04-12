import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';
import Script from 'next/script';

const jakarta = localFont({
  src: [
    {
      path: '../styles/assets/fonts/CircularStd-Black.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/assets/fonts/CircularStd-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/assets/fonts/CircularStd-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/assets/fonts/CircularStd-Book.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --jakarta-font: ${jakarta.style.fontFamily};
        }
      `}</style>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5H18VW1W7E" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5H18VW1W7E');`,
        }}
      />
      <Script
        id="credits"
        dangerouslySetInnerHTML={{
          __html: `<!-- Realisation : Redox Digital Sàrl [redoxdigital.ch] & Steve Mettraux [github.com/Smettraux] -->`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
