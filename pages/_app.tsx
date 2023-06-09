import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';
import Script from 'next/script';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
  const reCaptchaPubKey = '6LepC4glAAAAAMJiuVnhbKoqazkub5Z8ZLvwKtTD';

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5H18VW1W7E" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5H18VW1W7E');`,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
