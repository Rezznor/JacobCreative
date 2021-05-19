import Link from 'next/link'
import {IconContext} from 'react-icons'
import {FaFacebook, FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa'
import {useContext} from 'react'


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
                                <IconContext.Provider value={{ size: '1.25em', className: 'text-muted'}}>
                                    <a>
                                        <FaFacebook />
                                    </a>
                                </IconContext.Provider>
                            </Link>
                        </li>
                        <li className="">
                            <Link href='https://twitter.com/JacobCreativeCA'>
                                <IconContext.Provider value={{ size: '1.25em', className: 'text-muted'}}>
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </IconContext.Provider>
                            </Link>
                        </li>
                        <li className="">
                            <Link href='https://www.instagram.com/jacobcreativeca/'>
                                <IconContext.Provider value={{ size: '1.25em', className: 'text-muted'}}>
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </IconContext.Provider>
                            </Link>
                        </li>
                    </ul>

                </footer>
            </div>
        </div>

    )
}
