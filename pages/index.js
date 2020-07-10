import { getSortedPostsData } from '../lib/posts'
import PostCard from '../components/PostCard'

export default function Home ({ allPostsData }) {
  const renderRecentPosts = () =>
    allPostsData.map(({ id, date, title }) => (
      <PostCard id={id} date={date} title={title} key={id} />
    ))

  return (
    <>
      <h1>
        Hello, I am <strong>Emily</strong>.{' '}
        <span>
          I am currently employed as software engineer at{' '}
          <a className='underline' href={'https://www.glossier.com/'}>
            Glossier, Inc
          </a>{' '}
          and sometimes I build stuff for fun. I don't tweet, but I'm coming
          around to blogging.
        </span>
      </h1>
      <hr className='my-8' />
      <h2 className='text-lg my-4'>Recent blog posts</h2>
      <ul className='grid grid-cols-3 gap-4'>{renderRecentPosts()}</ul>
    </>
  )
}

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}
