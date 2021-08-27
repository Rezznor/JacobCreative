import Link from 'next/link'
import {FaFacebook, FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return (
        
        <div>
            <div className='container'>
                <footer className='flex justify-between'>

                    <p className={`text-muted`}>
                        2015 - 2020 &copy; JacobCreative
                    </p>

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

                </footer>
            </div>
        </div>

    )
}
