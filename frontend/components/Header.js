import Link from 'next/link'
import Image from 'next/image'
import {useContext} from 'react'
import AuthContext from '@/context/AuthContext'

export default function Header() {

    const {user, logout} = useContext(AuthContext)

    return (
        <div>
            <div className='container'>
                <header className='mt-8 mx-8 mb-32 '>

                    <nav className='flex justify-between'>
                        <Link href='/'>
                            <a>
                                <Image src='/jacobcreative_logo_light.svg' alt='Jacob Creative Logo' width={50} height={50} />
                            </a>
                        </Link>
                        
                        <ul className="flex flex-row space-x-4 ">
                            <li className="">
                                <Link href="/">
                                    <a className="">Home</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    <a className="">About</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    <a className="">Services</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/blog">
                                    <a className="">Blog</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="#">
                                    <a className="">Contact</a>
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
                                        <button onClick={() => logout()} >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                // If Logged Out
                                <>
                                    <li>
                                        <Link href='/admin/login'>
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                </>

                            )}

                        </ul>
                    </nav>

                </header>
            </div>
        </div>
    )
}
