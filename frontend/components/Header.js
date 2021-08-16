import Link from 'next/link'
import JcLink from '@/components/JcLink'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes} from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'

export default function Header() {
	const { user, logout } = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [activeRoute, setActiveRoute] = useState(false)

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
            <nav className={`p-2 mt-0 fixed flex justify-between w-full z-50 top-0 md:transition md:duration-500 md:ease-in-out ${(navbar || mobileNavOpen) ? 'bg-gray-100 text-gray-900' : 'bg-transparent text-gray-50'}` }>
                <div className={`container mx-auto flex flex-wrap justify-between md:h-12`}> 
                
                    <div className='w-full relative flex justify-between md:w-auto md:static md:justify-start'>
                        <Link href='/'>
                            <a className={`font-bold tracking-normal font-jcHeading text-4xl`}> 
                                {/* <Image
                                    src='/jacobcreative_logo_light.svg'
                                    alt='Jacob Creative Logo'
                                    width={50}
                                    height={50}
                                />  */}
                                JACOB <span className='font-medium tracking-tight text-2xl'>creative</span>
                                
                            </a>
                        </Link>
                        <button className='justify-self-end text-xl leading-none px-3 py-1 rounded md:hidden outline-none focus:outline-none' type='button' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            {mobileNavOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    
                    <div className={`md:flex flex-grow justify-center items-center ${mobileNavOpen ? ' flex' : ' hidden'}`}>
                        
                        {/* TO DO: ADD OPACITY AND COLOR HOVER TO ALL ITEMS */}
                        
                        <ul className='flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-4 list-none font-semibold md:ml-auto'>
                            <li className=''>
                                <JcLink href='/'>
                                    <a className=''>Home</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/about'>
                                    <a className=''>About</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='#'>
                                    <a className=''>Services</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='/blog'>
                                    <a className=''>Blog</a>
                                </JcLink>
                            </li>
                            <li className=''>
                                <JcLink href='#'>
                                    <a className=''>Contact</a>
                                </JcLink>
                            </li>
                            
                            <div className='flex flex-row items-center justify-center'>
                                <li className={`flex items-center mx-4 md:ml-8 lg:ml-12 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://www.facebook.com/JacobCreativeCA'>
                                        <a className=''>
                                            <FaFacebookF />
                                        </a>
                                    </Link>
                                </li>
                                <li className={`flex items-center mx-4 md:ml-4 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://twitter.com/JacobCreativeCA'>
                                        <a className=''>
                                            <FaTwitter />
                                        </a>
                                    </Link>
                                </li>
                                <li className={`flex items-center mx-4 md:ml-4 ${navbar ? ' hover:text-jcBlue' : ''}`}>
                                    <Link href='https://www.instagram.com/jacobcreativeca/'>
                                        <a className=''>
                                            <FaInstagram />
                                        </a>
                                    </Link>
                                </li>
                            </div>

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
                    

                </div>
                
               
                
            </nav>
		</>
	)
}
