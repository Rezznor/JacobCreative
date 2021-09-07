import Image from 'next/image'
import Link from 'next/link'

export default function HomeTeam() {
    return (
        
        <div className='flex w-full bg-white py-20'>
            
            <div className='container'>
                
                
                <div className='text-center w-1/2 m-auto'>
                    <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>About Us</h3>
                </div>
                
                <div className='flex '>
                    <div className='flex w-full justify-center'>
                        <div className='h-40 w-40 rounded-full my-auto'>
                            <Image src='/test_pic.jpg' alt='Picture of Jacob Creative CEO' height='160' width='160' className='rounded-full m-auto'/>
                        </div>
                    </div>
                    <div className='flex w-full my-4 mx-8'>
                        <h3 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>Lorem ipsum dolor sit amet</h3>
                        <p className='text-gray-500 text-base font-jcSubHeading'>Sapien et ligula ullamcorper malesuada proin libero. Arcu ac tortor dignissim convallis aenean et. Neque convallis a cras semper auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Amet mauris commodo quis imperdiet. Ullamcorper malesuada proin libero nunc. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}
