import Link from 'next/link'
import Image from 'next/image'
import processImg from '../../public/process1.jpg'

export default function HomeProcess() {
    
    const processIcon = 'relative w-12 h-12 rounded-full text-lg leading-11 text-white border-2 border-jcBlueDark bg-jcBlueDark font-jcHeading2 font-normal text-center'
    
    return (
        <div className='flex w-full bg-gray-100 py-20'>
            
            <div className='container'>
                
                <div className='grid grid-cols-2 gap-4 align-items-center justify-content-center'>
                    <div className=''>
                        <div className=''>
                            <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>The Process</h3>
                        </div>
                        <div className='mb-20'>
                            <h3 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>A brief insight to our process</h3>
                        </div>
                        <div className=''>
                            
                            <div className='flex flex-wrap relative p0'>
                                <div className='flex flex-row flex-wrap relative items-stretch justify-start text-left'>
                                    <div className='relative mr-12 h-36'>
                                        <div className={processIcon}>1</div>
                                        <span className='absolute bottom-5 left-1/2 w-px h-14 bg-gray-400'></span>
                                    </div>
                                    <div className='overflow-hidden flex-1 max-w-full'>
                                        <span className='font-jcHeading2 font-normal mb-1.5'>Title</span>
                                        <p className='w-3/5 font-jcSubHeading text-jcTextLight'>Lorem ipsum amet consectetur do eiusmod tempor incididunt.Lorem ipsum amet consectetur do eiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-wrap relative p0'>
                                <div className='flex flex-row flex-wrap relative items-stretch justify-start text-left'>
                                    <div className='relative mr-12 h-36'>
                                        <div className={processIcon}>2</div>
                                        <span className='absolute bottom-5 left-1/2 w-px h-14 bg-gray-400'></span>
                                    </div>
                                    <div className='overflow-hidden flex-1 max-w-full'>
                                        <span className='font-jcHeading2 font-normal mb-1.5'>Title</span>
                                        <p className='w-3/5 font-jcSubHeading text-jcTextLight'>Lorem ipsum amet consectetur do eiusmod tempor incididunt.Lorem ipsum amet consectetur do eiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-wrap relative p0'>
                                <div className='flex flex-row flex-wrap relative items-stretch justify-start text-left'>
                                    <div className='relative mr-12 h-36'>
                                        <div className={processIcon}>3</div>
                                        <span className='absolute bottom-5 left-1/2 w-px h-14 bg-gray-400'></span>
                                    </div>
                                    <div className='overflow-hidden flex-1 max-w-full'>
                                        <span className='font-jcHeading2 font-normal mb-1.5'>Title</span>
                                        <p className='w-3/5 font-jcSubHeading text-jcTextLight'>Lorem ipsum amet consectetur do eiusmod tempor incididunt.Lorem ipsum amet consectetur do eiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-wrap relative p0'>
                                <div className='flex flex-row flex-wrap relative items-stretch justify-start text-left'>
                                    <div className='relative mr-12 h-36'>
                                        <div className={processIcon}>4</div>
                                    </div>
                                    <div className='overflow-hidden flex-1 max-w-full'>
                                        <span className='font-jcHeading2 font-normal mb-1.5'>Title</span>
                                        <p className='w-3/5 font-jcSubHeading text-jcTextLight'>Lorem ipsum amet consectetur do eiusmod tempor incididunt.Lorem ipsum amet consectetur do eiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div className='relative'>
                        <Image src={processImg} />
                    </div>
                        
                </div>
                
            </div>
            
        </div>
    )
}
