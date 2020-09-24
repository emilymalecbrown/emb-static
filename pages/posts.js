import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'

export default ({ allPostsData }) =>
  allPostsData.map(({ id, date, title }) => (
    <h1 key={id} className="prose">
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <a>{title}</a>
      </Link>{' '}
      <br />
      <small>
        <div>{date}</div>
      </small>
    </h1>
  ))

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
