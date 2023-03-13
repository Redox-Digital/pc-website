import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Infography from '@/components/Infography-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Accueil</title>
        <meta name="keywords" content="Accueil" />
      </Head>
      <Hero title="Paris & Comtesse SA" subtitle="CONSTRUCTION MÉTALLIQUE À BOUDRY (NE)" source="/bg-home.svg" />
      <Infography title="Nos valeurs" paragraph="Lorem ipsum dolor sit amet, consectetur adip" 
        label1="Qualité" 
        label2="Innovation" 
        label3="Savoir-Faire" 
        label4="Passion d'entreprendre" 
        label5="Satisfaction client" 
      />
    </>
  )
}
