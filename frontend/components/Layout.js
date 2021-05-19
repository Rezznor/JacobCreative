import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'
import {useRouter} from 'next/router'


export default function Layout({ title, keywords, description, children}) {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />
            
            <div>{children}</div>
            

            <Footer />

        </div>
    )
}

Layout.defaultProps = {
    title: 'Jacob Creative | Web Design & Development Studio',
    description: 'Welcome to Jacob Creative! Web Design and Development Studio',
    keywords: 'web development, web design, studio, creative'
}