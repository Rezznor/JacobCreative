import Link from 'next/link'
import Image from 'next/image'

export default function BlogItem({ art }) {
    return (
        
        <div className="flex flex-wrap place-items-center">
            
            <div className='container'>
                <Image className='' src={art.image ? art.image.formats.medium.url : '/images/process2.jpg'} layout='responsive' width={234} height={156} />
                
                <div className="bg-white w-full py-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                        <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                        {art.subtitle}
                    </p>
                    <p className="text-gray-600 font-light text-md ">
                        {art.preview}
                    </p>
                    
                    <div className='flex justify-between'>
                        <div className="flex items-center mt-2">
                            <Image className='w-10 h-10 object-cover rounded-full' src={art.user.profilepic.url } width={40} height={40} />
                
                            <div className="pl-3">
                                <div className="font-medium">
                                    {art.user.username}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                {art.category.name}
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
