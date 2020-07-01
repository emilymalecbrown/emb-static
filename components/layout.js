import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav.js'

export const siteTitle = 'Emily Malec Brown personal site and blog.'

export default function Layout ({ children, home }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Emily Malec Brown personal blog.' />
        <meta property='og:image' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Nav />

      <body className='container'>{children}</body>
      {!home && (
        <div>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}
