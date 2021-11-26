import Link from 'next/link'
import Image from 'next/image'

export default function CategoryBlogPosts({ art }) {
    return (
        
        <div className="flex flex-wrap place-items-center">
            
            <div className='container'>
                <Image className='' src={art.image ? art.image.formats.medium.url : '/images/process2.jpg'} layout='responsive' width={234} height={156} />
                
                <div className="bg-white w-full p-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                        <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                        {art.subtitle}
                    </p>
                    <p className="text-gray-600 font-light text-md ">
                        {art.preview}
                    </p>
                   
                </div>
                
            </div>
            
        </div>
        
    )
}
