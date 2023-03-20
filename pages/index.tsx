import { Inter } from 'next/font/google'
import styles from '@/styles/layouts/Home.module.scss'
import Head from 'next/head'
import Form from '@/components/Form'
import Header from '@/components/Menu'
import Hero from '@/components/Hero'
import Infography from '@/components/InfographySection'
import TextImageSection from '@/components/TextImageSection'
import ThreeServices from '@/components/ThreeServices'
import Newsletter from '@/components/Newsletter'

const ourValues = [
  {
    slug: 'quality',
    path: '@/public/stamp-ico.svg',
    title: "Qualité",
    desc: "Lorem Ipsum"
  },
  {
    slug: 'innovation',
    path: '@/public/lightbulb-ico.svg',
    title: "Innovation",
    desc: "Lorem Ipsum"
  },
  {
    slug: 'know-how',
    path: '@/public/gear-ico.svg',
    title: "Savoir-Faire",
    desc: "Lorem Ipsum"
  },
  {
    slug: 'entrepreneurship',
    path: '@/public/hands-ico.svg',
    title: "Passion d'entreprendre",
    desc: "Lorem Ipsum"
  },
  {
    slug: 'clients-satisfaction',
    path: '@/public/award-ico.svg',
    title: "Satisfaction client",
    desc: "Lorem Ipsum"
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Paris & Comtesse SA | Accueil</title>
        <meta name="keywords" content="Accueil" />
      </Head>
      <Hero title="Paris & Comtesse SA" home subtitle="CONSTRUCTION MÉTALLIQUE À BOUDRY (NE)" source="/bg-home.svg" />
      <TextImageSection />
      <Infography
        title="Nos valeurs"
        desc="Lorem ipsum dolor sit amet, consectetur adip"
        blocks={ourValues}
      />
      <ThreeServices />
      <TextImageSection />
      <Newsletter />
    </>
  )
}
