import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'

export default function LoginPage() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = e => {
        e.preventDefault()
        login({ email, password })
    }
    
    return (
        <Layout title='Admin Login'>
            <div>
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input type="submit" value="Login" className="btn" />

                </form>
            </div>
        </Layout>
    )
}
