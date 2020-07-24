import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head'

export default function Post ({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='mb-8 prose mx-auto'>
        <h1 className=''>{postData.title}</h1>
        {postData.draft && (
          <div className='inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
            Draft
          </div>
        )}
        <div className='text-gray-600'>{postData.date}</div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
