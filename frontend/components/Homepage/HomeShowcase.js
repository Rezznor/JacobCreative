import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
    return (
        <div className='mb-20'>
            <div className='container'>
                <div className={styles.homepage_custom_bg}>

                    <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left'>

                        <div className='md:mr-8 mb-20 md:mb-40'>
                            <h4 className='mb-8'>Hello! We're Jacob Creative</h4>
                            <h2 className='mb-8 font-extrabold tracking-tight text-4xl'>We're a web design and development studio &#8212; focusing on bringing small, local businesses to the web in 2021</h2>
                            <p className='mb-14 text-lg font-semibold leading-relaxed text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <div className='flex flex-row space-x-8'>
                                <Link href='/'>
                                    <a className='flex-1 bg-blue-500 hover:bg-blue-700 text-white text-center font-bold rounded-full grid place-content-center py-4 px-6 w-1/4'>Get started</a>
                                </Link>
                                <Link href='/'>
                                    <a className='flex-1 bg-blue-200 hover:bg-blue-400 text-white text-center font-bold rounded-full grid place-content-center py-4 px-6 w-1/4'>Learn more</a>
                                </Link>
                            </div>
                        </div>

                        <div className='flex md:ml-8 mb-20 md:mb-40 order-first md:order-last content-center'>
                            <img src="/svg/jacobCreative_group.svg" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
