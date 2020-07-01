import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        Hello, I am <strong>Emily</strong>. I am currently employed as software
        engineer at <a href={'https://www.glossier.com/'}>Glossier</a>. I am a
        firm believer that a good developer is a curious person who is motivated
        to build the thing. Gatekeeping in tech makes me sad, and as long as I'm{' '}
        <i>here</i> I'll try to push up against it. I spend most of my time
        replicating patterns I think are cool.
      </section>
      <section>
        <h1>Blog posts</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href='/posts/[id]' as={`/posts/${id}`} key={id}>
                {title}
              </Link>{' '}
              <br />
              <small>
                <div>{date}</div>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
