import Head from 'next/head'
import Nav from 'components/Nav'

export const siteTitle = 'Emily Malec Brown personal site and blog.'

function Layout ({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Emily Malec Brown personal blog.' />
        <meta property='og:image' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <body>
        <div
          className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 px-4 py-3'
          role='alert'
        >
          <div className='flex'>
            <div className='py-2 h-6 w-6 mr-4'>🚧</div>
            <div>
              <p className='text-md py-2'>Site under construction.</p>
            </div>
          </div>
        </div>
        <Nav />
        <div className='container max-w-4xl mx-auto'>{children}</div>
      </body>
    </>
  )
}

export default Layout
