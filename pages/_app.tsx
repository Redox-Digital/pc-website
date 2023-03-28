import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

// import localFont from 'next/font/local'

// const circular = localFont({
//   src: [
//     {
//       path: '../styles/assets/fonts/CircularStd-Black.otf',
//       weight: '700',
//       style: 'normal'
//     },
//     {
//       path: '../styles/assets/fonts/CircularStd-Bold.otf',
//       weight: '600',
//       style: 'normal'
//     },
//     {
//       path: '../styles/assets/fonts/CircularStd-Medium.otf',
//       weight: '500',
//       style: 'normal'
//     },
//     {
//       path: '../styles/assets/fonts/CircularStd-Book.otf',
//       weight: '400',
//       style: 'normal'
//     },

//   ],
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <>
    //   <style tsx global>{`
    //     html {
    //       font-family: ${circular.style.fontFamily};
    //     }
    //   `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </>
  )
}