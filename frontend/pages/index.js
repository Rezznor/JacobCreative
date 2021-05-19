import Layout from '@/components/Layout'
import Showcase from '@/components/Showcase'
import HomeServices from '@/components/HomeServices'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    
    <Layout>
      
      <Showcase />
      <HomeServices />

    </Layout>

  )
}
