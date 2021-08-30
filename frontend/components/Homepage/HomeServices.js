import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons'
import { FaChartLine, FaCode, FaDatabase, FaShoppingCart  } from 'react-icons/fa'

export default function HomeServices() {

  return (
    <div className='flex w-full'>
        <div className='container'>
            <div className='text-center'>
                <h4 className='font-jcHeading font-bold text-3xl my-20'>We help businesses grow</h4>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-8 mb-16'>
                <div>
                    <div className='max-w-sm overflow-hidden'>
                        <FaCode size={48} className={'flex justify-center w-full fill-current text-gray-700'} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center font-jcSubHeading'>Web &amp; App Development</div>
                                <p className='text-gray-600 text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-w-sm overflow-hidden'>
                        <FaDatabase size={48} className={'flex justify-center w-full fill-current text-gray-700'} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center font-jcSubHeading'>Hosting &amp; Maintenance</div>
                                <p className='text-gray-700 text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-w-sm overflow-hidden'>
                        <FaShoppingCart size={48} className={'flex justify-center w-full fill-current text-gray-700'} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center font-jcSubHeading'>CMS &amp; Ecommerce </div>
                                <p className='text-gray-700 text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                        </div>
                    </div>    
                </div>
                <div>
                    <div className='max-w-sm overflow-hidden'>
                        <FaChartLine size={48} className={'flex justify-center w-full fill-current text-gray-700'} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center font-jcSubHeading'>SEO &amp; Analytics</div>
                                <p className='text-gray-700 text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  );
}
