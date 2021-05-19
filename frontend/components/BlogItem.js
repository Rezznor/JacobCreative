import Link from 'next/link'
import Image from 'next/image'

export default function BlogItem({ art }) {
    return (
        <div>
            <div>
                <h1>Image</h1>
            </div>
            <div>
                <span>{new Date(art.Date).toLocaleDateString('en-US')}</span>
                <h3>{art.title}</h3>
            </div>
            <div>
                <Link href={`/blog/${art.slug}`}>
                    <a>Read More...</a>
                </Link>
            </div>
        </div>
    )
}
