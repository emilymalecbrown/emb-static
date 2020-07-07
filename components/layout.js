import Head from 'next/head'
import Nav from './nav.js'

export const siteTitle = 'Emily Malec Brown personal site and blog.'

export default function Layout ({ children }) {
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
        <Nav />
        <div className='container max-w-4xl mx-auto'>{children}</div>
      </body>
    </>
  )
}
