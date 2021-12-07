import Layout from '@/components/Layout';
import BaseShowcase from '@/components/BaseShowcase'

export default function AboutPage() {
    return (
        <Layout>
            <BaseShowcase pageTitle="About Jacob Creative" />
            
            <div className='flex w-full bg-white py-20'>
            
                <div className='container'>
                    
                    <div className='grid grid-cols-3'>
                        <div className='flex w-full justify-center'>
                            <div className='h-40 w-40 rounded-full my-auto'>
                                <img src='/test_pic.jpg' alt='Picture of Jacob Creative CEO' className='rounded-full m-auto'/>
                            </div>
                        </div>
                        <div className='w-full my-4 mx-8 col-span-2'>
                            <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>About</h3>
                            <h3 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>A quick introduction</h3>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Jacob Creative is a web development and design studio offering a variety of web development services in Southern Ontario. Jacob Creative started after recognizing a gap in the industry &#8211; a personal connection. Your business deserves to be more than a number on your developers to-do list so we're focused on getting businesses online with a personal connection to our developer where all information is clearly explained &#8211; no more signing contracts where you're confused about what you're paying for! </p>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Jacob Creative is determined to ensure each company feels like a top priority by delivering the online presence you've envisioned.</p>
                            
                            <h3 className='mt-12 mb-2 text-gray-800 font-jcHeading2 font-medium'>Get to know the developer</h3>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Josh Jacob graduated from Wilfrid Laurier University with an Honours degree in Computer Science and a minor in Mathematics in 2020. Josh has been developing websites for 10+ years and has worked on multiple brands and sectors including Chevrolet, Buick, GMC, Cadillac, MasterCard, Real Estate, small businesses and personal branding sites. </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </Layout>
    );
}
