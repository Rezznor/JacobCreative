import Layout from '@/components/Layout'
import BlogItem from '@/components/BlogItem'
import Pagination from '@/components/Pagination'
import BaseShowcase from '@/components/BaseShowcase'
import {API_URL, PER_PAGE} from '@/config/index'

export default function BlogPage({ articles, page, total }) {
    return (
        
        <Layout>
            <BaseShowcase pageTitle="Blog" />
            <h1>Blog Posts</h1>

            {articles.length === 0 && <h3>No events to show</h3>}

            {console.log(articles)}

            {articles.map(art => (
                <BlogItem key={art.id} art={art} />
            ))}

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