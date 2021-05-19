import Link from 'next/link'

export default function DashboardPost({ art, handleDelete }) {
    return (
        <div>
            <h4>
                <Link href={`/blog/${art.slug}`}>
                    <a>{art.title}</a>
                </Link>
            </h4>

            <Link href={`/blog/edit/${art.id}`}>
                <a>Edit Post</a>
            </Link>

            <a href='#' onClick={() => handleDelete(art.id)}>
                <span>Delete</span>
            </a>

        </div>
    )
}
