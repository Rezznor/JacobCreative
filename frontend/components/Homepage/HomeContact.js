import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function HomeContact() {
    return (
        <div className='flex w-full bg-white py-20 bg-gray-50'>
            
            <div className='container'>
                
                <div className='flex justify-between'>
                    
                    <div className=''>
                        <h2 className=''>Ready to jump start your business?</h2>
                        <Link href='/contact'>
                            <a className=''>Lets Chat</a>
                        </Link>
                    </div>
                    <div className=''>
                        <h4 className=''>Join us on social media</h4>
                        <ul className="flex space-x-8">
                            <li className="">
                                <Link href='https://www.facebook.com/JacobCreativeCA'>
                                    <a>
                                        <FaFacebook />
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
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}
