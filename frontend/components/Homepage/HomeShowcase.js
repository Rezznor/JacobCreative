import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from '@/styles/Showcase.module.css';

export default function Showcase() {
    
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-jcBlueDark bg-blend-multiply' style={{backgroundImage: "url(/homepage_bg_2.jpg)" }}>
        <div className='container py-96'>
            <div className='grid grid-cols-1 md:grid-cols-3 text-center md:text-left'>
                <div className='col-span-2'>
                    <h2 className='mb-8 text-gray-50 font-jcHeading2 font-bold tracking-tight text-5xl'>
                        We're a web design and development studio &#8212; focusing on
                        businesses online and increasing their online presence
                    </h2>
                </div>
            </div>
        </div>
    </div>
  );
}
