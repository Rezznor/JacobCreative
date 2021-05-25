import {useState} from 'react'
import {API_URL} from '@/config/index'

export default function ImageUpload({ artId, imageUploaded, token }) {

    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('files', image)
        formData.append('ref', 'articles')
        formData.append('refId', artId)
        formData.append('field', 'image')

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        })

        if(res.ok) {
            imageUploaded()
        }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div>
            <div className='container'>

                <div>
                    <h1>Upload Article Image</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="file" onChange={handleFileChange} />
                        </div>

                        <input type="submit" value="Upload" />

                    </form>
                </div>

            </div>
        </div>
    )
}
