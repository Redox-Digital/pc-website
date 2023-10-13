import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import { setCookie, getCookie } from '@/components/helpers/CookiesHelper';
import { useEffect, useState } from 'react';
import GAnalytics from '@/components/GAnalytics';
import CookiesPopUp from '@/components/CookiesPopUp';

export default function App({ Component, pageProps }: AppProps) {
  const gKey = 'G-5H18VW1W7E';

  const [cookiePolicy, setCookiePolicy] = useState<boolean | undefined>(undefined);

  // Play once on page load;
  useEffect(() => {
    setCookiePolicy(getCookie('lpd') === 'true' || undefined);
    console.log(getCookie('lpd'));
  }, []);

  useEffect(() => {
    console.log('Cookies: ', cookiePolicy);
  });

  const handleCookiePolicy = (answer: boolean) => {
    setCookiePolicy(answer);
    if (answer) setCookie('lpd', answer ? 'true' : 'false', 60);
  };

  return (
    <>
      {/* Google Tag (gtag.js) */}
      {cookiePolicy === true ? <GAnalytics gKey={gKey} /> : ''}

      {cookiePolicy === undefined && <CookiesPopUp handleCookiePolicy={handleCookiePolicy} />}

      <Layout>
        <Component {...pageProps} handleCookiePolicy={handleCookiePolicy} />
      </Layout>
    </>
  );
}
