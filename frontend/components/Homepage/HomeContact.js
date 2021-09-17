import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function HomeContact() {
    return (
        <div className='flex w-full bg-white py-20 bg-gray-50'>
            
            <div className='container'>
                
                <div className='flex justify-between'>
                    
                    <div className=''>
                        <h2 className='font-jcHeading2 font-medium text-2xl text-gray-900 mb-4'>Ready to jump start your business?</h2>
                        <Link href='/contact'>
                            <a className='text-jcBlue text-sm font-jcHeading2 font-medium uppercase border-b-2 border-jcBlue hover:border-gray-900'>Lets Get Started</a>
                        </Link>
                    </div>
                    <div className='grid content-between'>
                        <h4 className='font-jcHeading2 text-sm text-jcTextLight'>Join us on social media</h4>
                        <ul className="flex space-x-8">
                            <li className="hover:text-jcBlue">
                                <Link href='https://www.facebook.com/JacobCreativeCA'>
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </Link>
                            </li>
                            <li className="hover:text-jcBlue">
                                <Link href='https://twitter.com/JacobCreativeCA'>
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </li>
                            <li className="hover:text-jcBlue">
                                <Link href='https://www.instagram.com/jacobcreativeca/'>
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </Link>
                            </li>
                            <li className="hover:text-jcBlue">
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
    )
}
