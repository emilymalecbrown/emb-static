import Link from 'next/link'

function PostCard({ id, title, date }) {
  return (
    <div className="bg-indigo-100 border-t border-b border-indigo-500 text-indigo-700 px-4 py-3">
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <a>{title}</a>
      </Link>{' '}
      <br />
      <small>
        <div>{date}</div>
      </small>
    </div>
  )
}

export default PostCard
