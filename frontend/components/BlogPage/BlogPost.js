import Link from 'next/link'
import Image from 'next/image'

export default function BlogItem({ art }) {
    return (
        
        <div className="flex flex-wrap place-items-center">
            
            <div className="overflow-hidden shadow-lg rounded-lg h-90 m-auto">
                
                <Image src={art.image ? art.image.formats.thumbnail.url : '/images/process2.jpg'} width={150} height={100} />
                
                <div className="bg-white w-full p-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                        <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                        A comprehensive guide about online education.
                    </p>
                    <p className="text-gray-600 font-light text-md">
                        It is difficult to believe that we have become so used to having instant access to information at...
                        
                    </p>
                    <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            #online
                        </span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            #internet
                        </span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            #education
                        </span>
                    </div>
                    <div className="flex items-center mt-2">
                        <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
            
                        <div className="pl-3">
                            <div className="font-medium">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 text-sm">
                                CTO of Supercars
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
