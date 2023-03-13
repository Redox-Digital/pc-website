import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Accueil</title>
        <meta name="keywords" content="Accueil" />
      </Head>
      <Form />
    </>
  )
}
