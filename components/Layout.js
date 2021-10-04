import Head from 'next/head'
import Nav from 'components/Nav'

export const siteTitle = 'Emily Malec Brown personal site and blog.'

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <body>
        <Nav />
        <div className="container max-w-4xl mx-auto p-8 lg:px-0">
          {children}
        </div>
      </body>
    </>
  )
}

export default Layout
