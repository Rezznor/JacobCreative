import Layout from '@/components/Layout'
import BlogItem from '@/components/BlogItem'
import BlogPost from '@/components/BlogPage/BlogPost'
import Pagination from '@/components/Pagination'
import BaseShowcase from '@/components/BaseShowcase'
import {API_URL, PER_PAGE} from '@/config/index'

export default function BlogPage({ articles, page, total }) {
    return (
        
        <Layout>
            <BaseShowcase pageTitle="Blog" />

            

            <div className='py-16'>
                <div className='container'>
                    {articles.length === 0 && 
                        <>
                            <div className="flex flex-wrap place-items-center my-48">
                                <div className='container'>
                                    <h2 className='font-jcHeading2 font-bold text-3xl w-4/5 m-auto'>We're crafting some wonderful content for you. Come back soon to check it out!</h2>
                                </div>
                            </div>
                        </>
                    }
                    <div className='grid grid-cols-3 gap-4'>
                        
                        {articles.map(art => (
                                <BlogPost key={art.id} art={art} />
                        ))}
                    </div>
                </div>
            </div>

            <Pagination page={page} total={total} />

        </Layout>

    )
}

export async function getServerSideProps({ query: { page = 1 } }) {

    // Calculate start page
    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // Fetch total/count 
    const totalRes = await fetch(`${API_URL}/articles/count`)
    const total = await totalRes.json()

    // Fetch Articles
    const articleRes = await fetch(`${API_URL}/articles`)
    const articles = await articleRes.json()

    return {
        props: {articles, page: +page, total}
    }
}