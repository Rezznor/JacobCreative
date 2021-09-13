import Layout from '@/components/Layout'
import HomeShowcase from '@/components/Homepage/HomeShowcase'
import HomeServices from '@/components/Homepage/HomeServices'
import HomeProcess from '@/components/Homepage/HomeProcess'
import HomeTeam from '@/components/Homepage/HomeTeam'
import HomeBlog from '@/components/Homepage/HomeBlog'
import HomeContact from '@/components/Homepage/HomeContact'

export default function Home() {
    return (
        <Layout>
            
            <HomeShowcase />
            <HomeServices />
            <HomeTeam />
            <HomeProcess />
            <HomeBlog />
            <HomeContact />
            
        </Layout>
    )
}
