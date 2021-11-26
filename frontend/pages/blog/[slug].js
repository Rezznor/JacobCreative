import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import BlogShowcase from '@/components/BlogPage/BlogShowcase'
import CategoryLabel from '@/components/BlogPage/CategoryLabel'
import {API_URL} from '@/config/index'
import {useRouter} from 'next/router'
import marked from 'marked'
import DOMPurify from 'dompurify'

export default function ArticlePage({ art }) {
    
    const router = useRouter()
    const bodyText = marked.parse(art.body)
    
    const colorKey = {
        Education: 'yellow',
        SEO: 'blue',
        Hosting: 'purple',
        'Social Media': 'green',
    }
    
    return (
        <Layout>
            <BlogShowcase pageTitle={art.title} />
            
            <div className='bg-gray-50 py-16'>
                <div className='container'>
                    
                    <Link href='/blog'>
                        <a>{'<'} Go Back</a>
                    </Link>
                    
                    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
                        
                        <div className='flex justify-between items-center mt-4'>
                            <h1 className='text-5xl mb-7'>{art.title}</h1>
                            <div className='flex space-x-4'>
                                <CategoryLabel categories={art.category} />
                            </div>
                        </div>
                        
                        {art.image && (
                            <img src={art.image.formats.large.url} alt='' className='w-full rounded' />
                        )}
                        
                        <div className='flex justify-between items-cetner bg-gray-100 p-2 my-8'>
                            <div className='flex items-center'>
                                <img 
                                    src={art.user.profilepic.url} 
                                    alt='' 
                                    className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' 
                                />
                                <h4>{art.user.username}</h4>
                            </div>
                            <div className='mr-4'>{new Date(art.published_at).toLocaleDateString('en-US')}</div>
                            
                        </div>
                        
                        <div className='blog-text mt-2'>
                            <div dangerouslySetInnerHTML={{__html: marked(bodyText)}}></div>
                        </div>
                       

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