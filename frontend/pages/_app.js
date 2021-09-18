import {ThemeProvider} from 'next-themes'
import {AuthProvider} from '@/context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    
    <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer />
    </AuthProvider>
    
  )
}

export default MyApp
