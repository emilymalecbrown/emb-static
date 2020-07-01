import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default ({ allPostsData }) =>
  allPostsData.map(({ id, date, title }) => (
    <li key={id}>
      <Link href='/posts/[id]' as={`/posts/${id}`} key={id}>
        <a>{title}</a>
      </Link>{' '}
      <br />
      <small>
        <div>{date}</div>
      </small>
    </li>
  ))

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}
