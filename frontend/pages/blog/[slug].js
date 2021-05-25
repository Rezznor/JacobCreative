import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import {useRouter} from 'next/router'

export default function ArticlePage({ art }) {
    
    const router = useRouter()
    
    return (
        <Layout>

            <div>
                <div className='container'>

                    <div>

                        <span>
                            {new Date(art.published_at).toLocaleDateString('en-US')}
                        </span>
                        <h1>{art.title}</h1>
                        <p>Written by: {art.user.username}</p>

                        <ToastContainer />
                        
                        {art.image && (
                            <div>
                                <Image src={art.image.formats.medium.url} width={400} height={200} />
                            </div>
                        )}

                        <h3>Description: </h3>
                        <p>{art.description}</p>

                        <h3>Published: </h3>
                        <p>{new Date(art.published_at).toLocaleDateString('en-US')} at {new Date(art.published_at).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</p>

                        <h3>Body: </h3>
                        <p>{art.body}</p>

                        <Link href='/blog'>
                            <a>{'<'} Go Back</a>
                        </Link>

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export async function getServerSideProps({ query: { slug } }) {

    const res = await fetch(`${API_URL}/articles?slug=${slug}`)
    const articles = await res.json()

    return {
        props: {
            art: articles[0],
        },
    }

}