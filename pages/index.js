import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { Heading, Text, Link as StyledLink } from 'theme-ui'
import Link from 'next/link'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Text>
          Hello, I’m <strong>Emily Malec Brown</strong>. I’m a software
          engineer.
        </Text>
      </section>
      <section>
        <Heading>Blog</Heading>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <StyledLink>
                <Link href='/posts/[id]' as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>{' '}
              </StyledLink>
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
