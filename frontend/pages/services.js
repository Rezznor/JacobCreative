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
                        
                        <h2 className='font-jcHeading2 font-bold text-3xl w-4/5 m-auto'>Let's grow your business together using our suite of services</h2>
                    </div>
                    
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='flex '>
                            <img src='/images/webdev.jpg' />
                        </div>
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>Web Development</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Jacob Creative is proud to offer a wide array of Web Development services ranging from Landing Pages to fully featured Web Applications and everything in-between. Whether you're building a brand new online presence or updating an old one, we're focued on putting the client first every step of the way. From design mockups to technology decisions, we're determined to deliver on your vision in the most efficient and effective way possible.</p>
                            
                        </div>
                        
                    </div>
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>Hosting and Maintenance</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Keep your website up-to-date with our custom and flexible Hosting and Maintenance packages. An up-to-date website leads to customer growth and retention as well as continued growth in search rankings. With our Hosting and Maintenance packages we'll work with you to ensure your website continues to have a meaningful impact on your businesses growth. Our Maintenance packages include Development requests, Technical Support and fixes, Website Updates, Platform and Plugin Updates and much more. </p>
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
                            <p className='text-gray-500 text-base font-jcSubHeading'>Content Management Systems (CMS) are extremely popular applications that can bolster your website by unlocking its full potential. You'll have the power to edit text, images and create new pages by yourself. Whether you want an established CMS in Wordpress or a more custom option, we're ready to put the power in your hands.</p>
                            <p className='text-gray-500 text-base font-jcSubHeading'>eCommerce websites are increasingly more popular by the day with online and mobile shopping becoming the norm. From small businesses to large online retailers, we'll work with you to determine the best solution for your shop. We create beautiful eCommerce websites built on top of popular eCommerce platforms in Woocommerce and Shopify, with a focus on user experience. </p>
                        </div>
                        
                    </div>
                    <div className='grid gap-12 grid-cols-2'>
                        
                        <div className='w-full m-auto'>
                            <h2 className='mb-2 text-gray-800 font-jcHeading2 font-medium'>SEO and Analytics</h2>
                            <p className='text-gray-500 text-base font-jcSubHeading'>Once we've built your dream website, Search Engine Optimization (SEO) is the next step in growing your business online. SEO helps your business appear higher in the search results on popular search engines like Google, Bing, Yahoo, etc. Through customized SEO strategies we'll deliver the results your business deserves and we'll continue to monitor and tweak those strategies as we gain more data about your users. While crafting your SEO strategies, we'll take full advantage of analytic tools such as Google Analytics and other internal tools.</p>
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
