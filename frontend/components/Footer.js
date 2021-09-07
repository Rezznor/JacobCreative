import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart} from 'react-icons/fa'
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
                            <p className='mb-4'>Based in New Dundee,<br /> Ontario, Canada</p>
                            <div className='flex '>
                                <FiPhoneCall className='my-auto mr-3 text-white' /> +1 234 567 8910
                            </div>
                            <div className='flex'>
                                <FiMail className='my-auto mr-3 text-white' /> josh@jacobcreative.ca
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
                        <div className='flex justify-between pt-10 pb-6'>
                            <Link href='/'>
                                <a className={`font-jcLogo font-bold tracking-normal text-4xl flex items-center text-white my-auto`}>Jacob Creative</a>
                            </Link>
                            
                            <p className='flex my-auto'>&copy; 2021 JacobCreative. Made with <FaHeart className='text-red-600 mt-1 mx-2' /> in Ontario.</p>

                            <ul className="flex space-x-4 text-white my-auto">
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