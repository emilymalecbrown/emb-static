import Link from 'next/link'

function PostCard ({ id, title, date }) {
  return (
    <li className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
      <Link href='/posts/[id]' as={`/posts/${id}`}>
        <a>{title}</a>
      </Link>{' '}
      <br />
      <small>
        <div>{date}</div>
      </small>
    </li>
  )
}

export default PostCard
