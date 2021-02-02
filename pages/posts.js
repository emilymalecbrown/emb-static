import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'

export default ({ allPostsData }) => {
  return (
    <div className="px-6 py-8">
      <div className="container mx-auto">
        <div className="w-full">
          {allPostsData.map(({ id, date, title, preview }) => (
            <div key={id} className="mt-6">
              <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="font-light text-gray-600">{date}</span>
                </div>
                <div className="mt-2">
                  <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                    <a className="text-2xl text-gray-700 font-bold hover:underline">
                      {title}
                    </a>
                  </Link>
                  <p className="mt-2 text-gray-600">{preview}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
