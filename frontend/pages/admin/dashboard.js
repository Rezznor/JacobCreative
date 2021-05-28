import {parseCookies} from '@/helpers/index'
import Layout from '@/components/Layout'
import DashboardPost from '@/components/DashboardPost'
import {API_URL} from '@/config/index'
import {useRouter} from 'next/router'
import { toast } from 'react-toastify'
import {useAuth} from '@/context/AuthContext'

export default function DashboardPage({ articles, token }) {
    
    const router = useRouter()
    const {user} = useAuth()

    const deletePost = async (id) => {
        if(confirm('Are you sure?')) {
            const res = await fetch(`${API_URL}/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
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

        <Layout title={user ? user.username + `'s Dashboard` : 'Admin' + `'s Dashboard`}>
            <div>
                <div className='container'>

                {console.log(articles)}

                    <div>
                        <h1>Dashboard</h1>
                        <h3>My Posts</h3>
                        
                        {articles.map((art) => (
                            <DashboardPost key={art.id} art={art} handleDelete={deletePost} />
                        ))}

                    </div>

               </div>
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
