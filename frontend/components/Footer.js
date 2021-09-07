import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FiPhoneCall, FiMail } from 'react-icons/fi'

export default function Footer() {
    return (
        
        <footer className='bg-jcFooter text-jcTextLight'>
            <div className=''>
                
                <div className='container'>
                    <div className='grid grid-cols-4 gap-y-8 py-12'>
                        
                        <div className=''>
                            <h4 className='font-jcHeading2 font-medium mb-4 text-white'>Company</h4>
                            <ul className='font-jcSubHeading text-base font-normal leading-2 space-y-2'>
                                <li className=''>
                                    <Link href='/about'>
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link href='/services'>
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link href='/blog'>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li className=''>
                                    <Link href='/contact'>
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h4 className='font-jcHeading2 font-medium mb-4 text-white'>Customer</h4>
                            <p className=''>Client support and information <br />coming soon</p>
                        </div>
                        <div className=''>
                            <h4 className='font-jcHeading2 font-medium mb-4 text-white'>Get in touch</h4>
                            <p>Based in New Dundee,<br /> Ontario, Canada</p>
                            <div className='flex '>
                                <FiPhoneCall /> +1 234 567 8910
                            </div>
                            <div className='flex'>
                                <FiMail /> josh@jacobcreative.ca
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='font-jcHeading2 font-medium mb-4 text-white'>Subscribe to our newsletter</h4>
                            <div className='flex'>
                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
                <div className='border-t border-white border-opacity-30'>
                    <div className='container'>
                        <div className='flex justify-between py-12'>
                            <Link href='/'>
                                <a className={`font-bold tracking-normal font-jcLogo text-4xl flex items-center`}>Jacob Creative</a>
                            </Link>
                            
                            <p className=''>&copy; 2021 JacobCreative</p>

                            <ul className="flex space-x-8">
                                <li className="">
                                    <Link href='https://www.facebook.com/JacobCreativeCA'>
                                        <a>
                                            <FaFacebookF />
                                        </a>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href='https://twitter.com/JacobCreativeCA'>
                                        <a>
                                            <FaTwitter />
                                        </a>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href='https://www.instagram.com/jacobcreativeca/'>
                                        <a>
                                            <FaInstagram />
                                        </a>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href='https://www.instagram.com/jacobcreativeca/'>
                                        <a>
                                            <FaLinkedinIn />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}