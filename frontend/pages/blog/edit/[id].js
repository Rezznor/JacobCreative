import moment from 'moment'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'
import {API_URL} from '@/config/index'
import {parseCookies} from '@/helpers/index'

export default function EditArticlePage({ art, token }) {

    const [values, setValues] = useState({
        title: art.title,
        description: art.description,
        body: art.body,
        date: art.published_at,
    })

    const [imagePreview, setImagePreview] = useState(
        art.image ? art.image.formats.thumbnail.url : null
    )

    const [showModal, setShowModal] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')

        if(hasEmptyFields) {
            toast.error('Please fill in all fields')
        }

        const res = await fetch(`${API_URL}/articles/${art.id}`, {
            method: 'PUT',
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

    const imageUploaded = async (e) => {
        const res = await fetch(`${API_URL}/articles/${art.id}`)
        const data = await res.json()

        setImagePreview(data.image.formats.thumbnail.url)
        setShowModal(false)
    }

    return (

        <Layout title='Edit Blog Post'>

            <div>
                <div className='container'>

                    <h1>Edit Article Page</h1>

                    <ToastContainer />

                    <form onSubmit={handleSubmit}>

                        <div className='grid'>
                            <div>
                                <label htmlFor='title'>Article Title</label>
                                <input type='text' id='title' name='title' value={values.title} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor='author'>Author</label>
                            </div>
                            <div>
                                <label htmlFor='date'>Date</label>
                                <input type='date' name='date' id='date' value={moment(values.data).format('yyyy-MM-DD')} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='description'>Article Short Description</label>
                            <textarea type='text' name='description' id='description' value={values.description} onChange={handleInputChange}></textarea>
                        </div>

                        <div>
                            <label htmlFor='body'>Article Body</label>
                            <textarea type='text' name='body' id='body' value={values.body} onChange={handleInputChange}></textarea>
                        </div>

                    <input type="submit" value="Update Article" />
                    </form>

                </div>
            </div>

        </Layout>

    )

}

export async function getServerSideProps({ params: {id}, req }) {

    const {token} = parseCookies(req)
    const res = await fetch(`${API_URL}/articles/${id}`)
    const art = await res.json()

    return {
        props: {
            art,
            token,
        },
    }
}