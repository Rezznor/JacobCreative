import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactForm() {
    
    const [formData, setFormData] = useState({
        inputName: "",
        inputEmail: "",
        inputPhone:"",
        inputMessage: ""
    })
    
    const { inputName, inputEmail, inputPhone, inputMessage } = formData
    
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
          
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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
        
        inputName.current.value = ''
        inputEmail.current.value = ''
        inputPhone.current.value = ''
        inputMessage.current.value = ''
        toast.success('Success! You are now subscribed!', {
            position: 'bottom-right',
            autoClose: '5000',
            hideProgreeBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        })
        
        Router.push('/contact')
    }
        
    
    const inputStyles = 'w-full h-12 p-4 text-sm placeholder-gray-600 border-gray-400'
    const msgStyles = 'w-full p-4 text-sm placeholder-gray-600 border-gray-400'
    const submitStyles = 'col-start-2 place-self-end w-40 h-10 bg-jcBlueDark text-white text-center hover:bg-jcBlue'
    
    return (
        <div className='flex w-full bg-gray-100 py-16'>
            <div className='container'>
                <div className='text-center w-1/2 m-auto'>
                    <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>Fill out the form and we'll be in touch!</h3>
                    <h2 className='font-jcHeading2 font-bold text-3xl w-4/5 mx-auto'>How can we help you?</h2>
                </div>
                
                <form onSubmit={(e) => handleSubmit(e)}>
                    
                    <div className='grid grid-cols-2 gap-4 w-3/5 mx-auto my-10'>
                        
                        <div className='flex flex-col space-y-4'>
                            <input className={inputStyles} onChange={(e) => onChange(e)} type='text' placeholder='Your name' name='name'  required />
                            <input className={inputStyles} onChange={(e) => onChange(e)} type='email' placeholder='Your email address' name='email'  required />
                            <input className={inputStyles} onChange={(e) => onChange(e)} type='tel' placeholder='Your phone number (optional)' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div className='flex'>
                            <textarea className={msgStyles} onChange={(e) => onChange(e)} placeholder='Your message' type='text' required ></textarea>
                        </div>
                        <button className={submitStyles} type='submit'>Send Message</button>
                        
                    </div>
                    
                </form>
                
            </div>
        </div>
    )
}
