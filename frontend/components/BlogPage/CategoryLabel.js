import Link from 'next/link'

export default function CategoryLabel({ categories }) {
    const colorKey = {
        Education: 'yellow',
        SEO: 'blue',
        Hosting: 'purple',
        'Social Media': 'green',
    }
    
    return (

        <div className={`px-2 py-1 bg-${colorKey[categories.name]}-600 text-gray-100 font-bold rounded`}>
            <Link href={`/blog/category/${categories.slug}`}>{categories.name}</Link>
        </div>
    )
    
}