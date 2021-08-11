import Link from 'next/link'
import Image from 'next/image'
import {IconContext} from 'react-icons'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'

export default function Header() {
	const { user, logout } = useContext(AuthContext)
	const [navbar, setNavbar] = useState(false)

	const setActiveNav = () => {
        if(window.scrollY >= 110) {
            setNavbar(true)
        } else if(window.scrollY <= 80) {
            setNavbar(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', setActiveNav)
        
        return () => {
            window.removeEventListener('scroll', setActiveNav)
        }
    })

	return (
		<>
            <nav className={`p-2 mt-0 fixed w-full z-50 top-0 transition duration-500 ease-in-out ${navbar ? 'bg-gray-100' : 'bg-transparent'}` }>
                <div className={`container mx-auto flex justify-between items-center h-12`}> 
                    <Link href='/'>
                        <a className={`font-bold tracking-normal font-jcHeading text-4xl ${navbar ? 'text-gray-900' : 'text-gray-50'}`}> 
                            {/* <Image
                                src='/jacobcreative_logo_light.svg'
                                alt='Jacob Creative Logo'
                                width={50}
                                height={50}
                            />  */}
                            JACOB <span className='font-medium tracking-tight text-2xl'>creative</span>
                            
                        </a>
                    </Link>
                    
                    <ul className={`flex flex-row font-semibold ${navbar ? 'text-gray-900' : 'text-gray-50'}`}>
                        <li className=''>
                            <Link href='/'>
                                <a className=''>Home</a>
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href='/about'>
                                <a className=''>About</a>
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href='#'>
                                <a className=''>Services</a>
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href='/blog'>
                                <a className=''>Blog</a>
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href='#'>
                                <a className=''>Contact</a>
                            </Link>
                        </li>
                        
                        <li className='flex items-center ml-12'>
                            <Link href='https://www.facebook.com/JacobCreativeCA'>
                                <a>
                                    <FaFacebookF />
                                </a>
                            </Link>
                        </li>
                        <li className='flex items-center ml-4'>
                            <Link href='https://twitter.com/JacobCreativeCA'>
                                <a>
                                    <FaTwitter />
                                </a>
                            </Link>
                        </li>
                        <li className='flex items-center ml-4'>
                            <Link href='https://www.instagram.com/jacobcreativeca/'>
                                <a>
                                    <FaInstagram />
                                </a>
                            </Link>
                        </li>

                        {user ? (
                            // If Logged In
                            <>
                                <li>
                                    <Link href='/admin/dashboard'>
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => logout()}>Logout</button>
                                </li>
                            </>
                        ) : (
                            // If Logged Out
                            <></>
                        )}
                    </ul>

                </div>
                
               
                
            </nav>
		</>
	)
}
