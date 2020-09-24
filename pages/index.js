import { getSortedPostsData } from 'lib/posts'
import PostCard from 'components/PostCard'

export default function Home({ allPostsData }) {
  const renderRecentPosts = () =>
    allPostsData.map(({ id, date, title }) => (
      <PostCard id={id} date={date} title={title} key={id} />
    ))

  return (
    <div className="max-w-full mb-16 prose">
      <p>Hi, I'm Emily. 👋</p>
      <p>
        I am currently employed as software engineer at{' '}
        <a className="underline" href={'https://www.glossier.com/'}>
          Glossier, Inc
        </a>{' '}
        and sometimes I build stuff for fun. I don't tweet, but I'm coming
        around to blogging.
      </p>
      <hr className="my-8" />
      <h2 className="text-lg my-4">Recent blog posts</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {renderRecentPosts()}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
