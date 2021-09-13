import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons'
import { FaChartLine, FaCode, FaDatabase, FaShoppingCart  } from 'react-icons/fa'
import { FiCode, FiDatabase, FiShoppingBag, FiShoppingCart, FiServer, FiTrendingUp } from 'react-icons/fi'

export default function HomeServices() {

  return (
    <div className='flex w-full bg-gray-100 py-16'>
        <div className='container'>
            <div className='text-center w-1/2 m-auto'>
                <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>Services</h3>
                <h2 className='font-jcHeading2 font-bold text-3xl w-4/5 m-auto'>Let's grow your business together using our suite of services</h2>
            </div>

            <div className='grid grid-cols-4 gap-8 my-24'>
                
                
                <div>
                    <FiCode size={48} className={'flex justify-center w-full text-jcBlue '} />
                    <div className='py-4'>
                        <div className='mb-2 text-center text-gray-800 font-jcHeading2 font-medium'>Web Development</div>
                        <p className='text-gray-500 text-base font-jcSubHeading px-8 text-center'>
                            Creating the right site for you &#8211; From unique personal portfolios to full featured eCommerce shops and everything in-between
                        </p>
                    </div>
                </div>
            
                <div>
                    <FiDatabase size={48} className={'flex justify-center w-full text-jcBlue'} />
                    <div className='py-4'>
                        <div className='mb-2 text-center text-gray-800 font-jcHeading2 font-medium'>Hosting and Maintenance</div>
                        <p className='text-gray-500 text-base font-jcSubHeading px-8 text-center'>
                            Our Hosting and Maintence packages will keep you online and up to date 
                        </p>
                    </div>
                </div>
                
                <div>
                    <FiShoppingBag size={48} className={'flex justify-center w-full text-jcBlue'} />
                    <div className='py-4'>
                        <div className='mb-2 text-center text-gray-800 font-jcHeading2 font-medium'>CMS and eCommerce</div>
                        <p className='text-gray-500 text-base font-jcSubHeading px-8 text-center'>
                            Providing you the freedom to manage and update your content &#8211; Whether that means small content tweaks or adding a new product line 
                        </p>
                    </div>
                </div> 
            
                <div>
                    <FiTrendingUp size={48} className={'flex justify-center w-full text-jcBlue'} />
                    <div className='py-4'>
                        <div className='mb-2 text-center text-gray-800 font-jcHeading2 font-medium'>SEO and Analytics</div>
                        <p className='text-gray-500 text-base font-jcSubHeading px-8 text-center'>
                            Just getting online isn't enough these days. We'll work with you to improve your discoverability through SEO and Analytics 
                        </p>
                    </div>
                </div>    
                
                
            </div>
            
            <div className='flex justify-center w-full'>
                <Link href='/services'>
                    <a className='transform transition duration-300 px-10 py-4 rounded shadow-jc uppercase font-medium font-jcHeading2 text-xs tracking-wider bg-white border-2 border-transparent hover:shadow-jcHover hover:-translate-y-1'>Learn More</a>
                </Link>
                
            </div>
            
        </div>
    </div>
  );
}
