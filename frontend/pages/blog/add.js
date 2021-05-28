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
            router.push(`/blog/${art.slug}`)
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target 
        setValues({...values, [name]: value})
    }

    return (
        
        <Layout title='Add New Blog Post'>
            
            <div>
                <div className='container'>

                    <ToastContainer />
                    <h1 className='text-gray-800 text-xl font-bold mb-4'>Add new blog post</h1>
                    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='grid'>
                            <div className='mb-4'>
                                <label htmlFor='title' className='block text-gray-700 text-sm font-bold mb-2'>Post Title</label>
                                <input 
                                    type='text' 
                                    id='title' 
                                    name='title' 
                                    value={values.title} 
                                    onChange={handleInputChange} 
                                    autoComplete="off" 
                                    className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline' 
                                />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='description' className='block text-gray-700 text-sm font-bold mb-2'>Post Excerpt</label>
                                <textarea 
                                    type='text' 
                                    id='description' 
                                    name='description' 
                                    value={values.description} 
                                    onChange={handleInputChange} 
                                    className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                ></textarea>
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='body' className='block text-gray-700 text-sm font-bold mb-2'>Post Body</label>
                            <textarea 
                                type='text' 
                                id='body' 
                                name='body' 
                                value={values.body} 
                                onChange={handleInputChange} 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            ></textarea>
                        </div>
                        <input type="submit" value="Add Post" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
                    </form>

                </div>
            </div>

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