import {parseCookies} from '@/helpers/index'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'

export default function AddArticlePage({ token }) {

    const [values, setValues] = useState({
        title: '',
        description: '',
        body: '',
    })

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if(hasEmptyFields) {
            toast.error('Please fill in all fields')
        }

        const res = await fetch(`${API_URL}/articles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(values)
        })

        if(!res.ok) {
            if(res.status === 403 || res.status === 401) {
                toast.error('No token included')
                return
            }
            toast.error('Something went wrong')
        } else {
            const art = await res.json()
            router.push(`/articles/${art.slug}`)
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target 
        setValues({...values, [name]: value})
    }

    return (
        
        <Layout title='Add Blog Post'>
            <h1>ADD NEW POST</h1>
        </Layout>

    )
}

export async function getServerSideProps({ req }) {
    const {token} = parseCookies(req)

    return {
        props: {
            token
        }
    }
}