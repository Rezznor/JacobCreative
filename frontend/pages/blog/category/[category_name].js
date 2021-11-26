import Link from 'next/link'
import Layout from '@/components/Layout'
import BaseShowcase from '@/components/BaseShowcase'
import CategoryBlogPosts from '@/components/BlogPage/CategoryBlogPosts'
import CategoryList from '@/components/BlogPage/CategoryList'
import {API_URL} from '@/config/index'

export default function CategoryBlogPage({ category_articles, allCategories }) {
    
    return (
        <Layout>
            <BaseShowcase pageTitle={`Posts in ${category_articles[0].name}`} />
            
            <div className="flex flex-wrap place-items-center">
            
                <div className='container'>
            
                    <div className='flex justify-between'>
                        <div className='w-3/4 mr-10'>
                            <h1 className='text-5xl border-b-4 p-5 font-bold'>
                                Posts in {category_articles[0].name}
                            </h1>
                            
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {category_articles[0].articles.map((art, index) => (
                                    <CategoryBlogPosts key={index} art={art} />
                                ))}
                            </div>
                        </div>
                        
                        <div className='w-1/4'>
                            <CategoryList categories={allCategories} />
                        </div>
                    </div>
            
                </div>
            </div>
            
        </Layout>
    )
    
}

export async function getServerSideProps({ query: { category_name } }) {
    
    //Fetch all Categories
    const allCategoriesRes = await fetch(`${API_URL}/categories`)
    const allCategories = await allCategoriesRes.json()
    
    // Fetch Categories
    const categoriesRes = await fetch(`${API_URL}/categories?slug=${category_name}`)
    const category_articles = await categoriesRes.json()

    return {
        props: {category_articles, allCategories}
    }
}