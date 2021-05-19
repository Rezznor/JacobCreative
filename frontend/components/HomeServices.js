import Link from 'next/link'
import Image from 'next/image'

export default function HomeServices() {

    const card = 'border border-gray-100 rounded shadow-sm overflow-hidden transform duration-200 ease-linear hover:-translate-y-2.5 hover:shadow-lg'

    return (

        <div>

            <div className='container'>

                <div className='flex text-center'>
                    <h4>We help businesses grow</h4>
                    <p>Start </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-20 md:mb-40'>

                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/uiux.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>UI/UX and Web Design</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/development.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>App and Web Development</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    
                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/maintenance.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>Hosting and Maintenance</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/mobile.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>Responsive and Mobile First</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/analytics.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>SEO and Analytics</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                    <div className={card}>
                        <div className='flex h-1/2 justify-center px-4 py-5'>
                            <img className='w-1/2' src='/svg/services/ecommerce.svg' />
                        </div>
                        <div className='text-center px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>E-Commerce and Content Management</div>
                            <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}