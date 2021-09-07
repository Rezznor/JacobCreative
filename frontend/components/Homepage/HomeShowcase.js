import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from '@/styles/Showcase.module.css';

export default function Showcase() {
    
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-jcBlueDark bg-blend-multiply' style={{backgroundImage: "url(/homepage_bg_2.jpg)" }}>
        <div className='container py-80'>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left'>
                <div className=''>
                    <h2 className='mb-8 text-gray-50 font-jcHeading2 font-bold tracking-tight text-5xl'>
                        We're a web design and development studio &#8212; focusing on
                        bringing small, local businesses to the web in {year}
                    </h2>
                </div>
            </div>
        </div>
    </div>
  );
}
