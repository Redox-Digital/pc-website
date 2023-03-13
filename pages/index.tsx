import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <Form />

    </>
  )
}
