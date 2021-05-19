import {parseCookies} from '@/helpers/index'
import Layout from '@/components/Layout'
import DashboardPost from '@/components/DashboardPost'
import {API_URL} from '@/config/index'
import {useRouter} from 'next/router'
import { toast } from 'react-toastify'

export default function DashboardPage({ articles, token }) {
    
    const router = useRouter()

    const deletePost = async (id) => {
        if(confirm('Are you sure?')) {
            const res = await fetch(`${API_URL}/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()

            if(!res.ok) {
                toast.error(data.message)
            } else {
                router.reload()
            }
        }
    }
    
    return (
        <Layout title='User Dashboard'>
            <div>
                <h1>Dashboard</h1>
                <h3>My Posts</h3>

                {console.log(articles)}
                {articles.map((art) => (
                    <DashboardPost key={art.id} art={art} handleDelete={deletePost} />
                ))}
                
            </div>
        </Layout>
    )
}

export async function getServerSideProps({req}) {

    const {token} = parseCookies(req)
    const res = await fetch(`${API_URL}/articles/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const articles = await res.json()

    return {
        props: {
            articles,
            token
        }
    }

}
