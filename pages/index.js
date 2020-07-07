import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home ({ allPostsData }) {
  return (
    <div>
      <div>
        Hello, I am <strong>Emily</strong>. I am currently employed as software
        engineer at <a href={'https://www.glossier.com/'}>Glossier</a>. I don't
        tweet, but I'm coming around to blogging.
      </div>
      <div className='py-4'>
        <h1>Blog posts</h1>
        <div className=''>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <div
                className='max-w-sm w-full lg:max-w-full lg:flex divide-teal-400'
                key={id}
              >
                <li>
                  <Link href='/posts/[id]' as={`/posts/${id}`}>
                    {title}
                  </Link>{' '}
                  <br />
                  <small>
                    <div>{date}</div>
                  </small>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
