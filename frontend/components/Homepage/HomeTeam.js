import Image from 'next/image'
import Link from 'next/link'

export default function HomeTeam() {
    return (
        
        <div className='flex w-full bg-white py-20'>
            
            <div className='container'>
                
                <div className='grid grid-cols-3'>
                    <div className='flex w-full justify-center'>
                        <div className='h-40 w-40 rounded-full my-auto'>
                            <Image src='/test_pic.jpg' alt='Picture of Jacob Creative CEO' height='160' width='160' className='rounded-full m-auto'/>
                        </div>
                    </div>
                    <div className='w-full my-4 mx-8 col-span-2'>
                        <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>About</h3>
                        <h3 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>A quick introduction</h3>
                        <p className='text-gray-500 text-base font-jcSubHeading'>Jacob Creative is a web development and design studio offering a variety of web development services in Southern Ontario. Jacob Creative started after recognizing a gap in the industry &#8211; a personal connection. Your business deserves to be more than a number on your developers todo list so we're focused on getting businesses online with a personal connection to our developer where all information is clearly explained &#8211; no more signing contracts where you're confused about what you're paying for! Jacob Creative is determined to ensure each company feels like a top priority by delivering the online presence you've envisioned.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}
