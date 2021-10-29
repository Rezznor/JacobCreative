import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function MailchimpSubscribe() {
    
    const inputEl = useRef(null);
    const [message, setMessage] = useState('')

    const subscribe = async (e) => {
        e.preventDefault()
        
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        
        const { error } = await res.json()
        
        if(error) {
            toast.error('An error has occurred.', {
                position: 'bottom-right',
                autoClose: '5000',
                hideProgreeBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            })
            
            return
        }
        
        inputEl.current.value = ''
        toast.success('Success! We\'ll get back to you soon!', {
            position: 'bottom-right',
            autoClose: '5000',
            hideProgreeBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        })
        
    }
    
    return (
        <form onSubmit={subscribe} className='relative text-gray-700'>
            <input id="email-input" name="email" placeholder="Email Address" ref={inputEl} required type="email" className='w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline' />
            <button type="submit" className='absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-jcBlueDark rounded-r-lg hover:bg-jcBlue'>{'Subscribe'}</button>
        </form>
    )
}
