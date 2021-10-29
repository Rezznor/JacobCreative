import Link from 'next/link'
import JcLink from '@/components/JcLink'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'
//import { useTheme } from 'next-themes'
//import styles from '@/styles/Header.module.css'

export default function Header() {
	const { user, logout } = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    
    // SUPPORT FOR DARK MODE ENABLED. CREATE NEW COMPONENT FOR DARKMODE TOGGLE. ADD COMPONENT TO NAV.
    //const {theme, setTheme} = useTheme()
    
	const getNavScrollY = () => {
        if(window.scrollY >= 110) {
            setNavbar(true)
        } else if(window.scrollY <= 80) {
            setNavbar(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', getNavScrollY)
        
        return () => {
            window.removeEventListener('scroll', getNavScrollY)
        }
    })

	return (
		<>
            <nav className={`p-2 mt-0 fixed flex justify-between w-full z-50 top-0 md:transition md:duration-300 md:ease-in-out ${(navbar || mobileNavOpen) ? 'bg-white text-gray-900 shadow-jcMenuScroll' : 'bg-transparent text-gray-50'}` }>
                <div className={`container mx-auto flex flex-wrap justify-between md:h-12`}> 
                
                    <div className='w-full relative flex justify-between md:w-auto md:static md:justify-start'>
                        <Link href='/'>
                            <a className={`font-bold tracking-normal font-jcLogo text-4xl flex items-center`}>Jacob Creative</a>
                        </Link>
                        <button className='justify-self-end text-xl leading-none px-3 py-1 rounded md:hidden outline-none focus:outline-none' type='button' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            {mobileNavOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    
                    <div className={`md:flex flex-grow justify-center items-center ${mobileNavOpen ? ' flex' : ' hidden'}`}>
                        
                        <ul className='flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-8 list-none font-semibold md:ml-auto'>
                            <li className=''>
                                <JcLink href='/' isScrolling={navbar}>
                                    <a className=''>Home</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/about' isScrolling={navbar}>
                                    <a className=''>About</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/services' isScrolling={navbar}>
                                    <a className=''>Services</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/blog' isScrolling={navbar}>
                                    <a className=''>Blog</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/contact' isScrolling={navbar}>
                                    <a className=''>Contact</a>
                                </JcLink>
                            </li>
                            
                            {user ? (
                                // If Logged In
                                <>
                                    <li>
                                        <JcLink href='/admin/dashboard' isScrolling={navbar}>
                                            <a>Dashboard</a>
                                        </JcLink>
                                    </li>
                                    <li>
                                        <JcLink href='/' isScrolling={navbar} ignored>
                                            <a className='py-1 block relative overflow-hidden' onClick={() => logout()}>Logout</a>
                                        </JcLink>
                                    </li>
                                </>
                            ) : (
                                // If Logged Out
                                <></>
                            )}
                            
                            <div className='flex flex-row items-center justify-center'>
                                <li className={`flex items-center mx-4 md:ml-8 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://www.facebook.com/JacobCreativeCA'>
                                        <a>
                                            <FaFacebookF />
                                        </a>
                                    </Link>
                                </li>
                                <li className={`flex items-center mx-4 md:ml-4 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://twitter.com/JacobCreativeCA'>
                                        <a>
                                            <FaTwitter />
                                        </a>
                                    </Link>
                                </li>
                                <li className={`flex items-center mx-4 md:ml-4 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://www.instagram.com/jacobcreativeca/'>
                                        <a>
                                            <FaInstagram />
                                        </a>
                                    </Link>
                                </li>
                            </div>

                        </ul>
                        
                    </div>
                    
                </div>
                            
            </nav>
		</>
	)
}
