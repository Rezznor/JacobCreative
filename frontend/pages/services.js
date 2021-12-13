import Layout from '@/components/Layout';
import BaseShowcase from '@/components/BaseShowcase'
import HomeContact from '@/components/Homepage/HomeContact'

export default function ServicesPage() {
    return (
        <Layout>
            <BaseShowcase pageTitle="Services Page" />
            
            <div className='flex w-full bg-white py-20'>
            
                <div className='container'>
                    
                    <div className='text-center w-1/2 mx-auto mb-20'>
                        <h3 className='font-jcHeading2 font-medium text-base mt-4 mb-8 text-jcBlue'>Services</h3>
                        <h2 className='font-jcHeading2 font-bold text-3xl w-4/5 m-auto'>Let's grow your business together using our suite of services</h2>
                    </div>
                    
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='flex '>
                            <img src='/images/webdev.jpg' />
                        </div>
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>Web Development</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Non curabitur gravida arcu ac tortor dignissim. Gravida quis blandit turpis cursus in hac habitasse platea. Tempus imperdiet nulla malesuada pellentesque. Justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam sem fringilla ut morbi tincidunt. Nunc consequat interdum varius sit amet. Quis blandit turpis cursus in hac habitasse platea.</p>
                        </div>
                        
                    </div>
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>Hosting and Maintenance</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Non curabitur gravida arcu ac tortor dignissim. Gravida quis blandit turpis cursus in hac habitasse platea. Tempus imperdiet nulla malesuada pellentesque. Justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam sem fringilla ut morbi tincidunt. Nunc consequat interdum varius sit amet. Quis blandit turpis cursus in hac habitasse platea.</p>
                        </div>
                        <div className='flex'>
                            <img src='/images/hosting.jpg' />
                        </div>
                        
                    </div>
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='flex'>
                            <img src='/images/ecommerce.jpg' />
                        </div>
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>CMS and eCommerce</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Non curabitur gravida arcu ac tortor dignissim. Gravida quis blandit turpis cursus in hac habitasse platea. Tempus imperdiet nulla malesuada pellentesque. Justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam sem fringilla ut morbi tincidunt. Nunc consequat interdum varius sit amet. Quis blandit turpis cursus in hac habitasse platea.</p>
                        </div>
                        
                    </div>
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>SEO and Analytics</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Non curabitur gravida arcu ac tortor dignissim. Gravida quis blandit turpis cursus in hac habitasse platea. Tempus imperdiet nulla malesuada pellentesque. Justo nec ultrices dui sapien eget mi proin. Vitae congue eu consequat ac. Consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam sem fringilla ut morbi tincidunt. Nunc consequat interdum varius sit amet. Quis blandit turpis cursus in hac habitasse platea.</p>
                        </div>
                        <div className='flex '>
                            <img src='/images/seo.jpg' />
                        </div>
                        
                    </div>
                    
                </div>
            
            </div>
            <HomeContact />
        </Layout>
    );
}
