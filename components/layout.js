import Head from 'next/head'
import Link from 'next/link'
import theme from '../theme.js'
import { ThemeProvider } from 'theme-ui'
import { Heading, Text } from 'theme-ui'
import Nav from './nav'

const name = 'Emily Malec Brown'
export const siteTitle = 'Personal site and blog.'

export default function Layout ({ children, home }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Emily Malec Brown personal blog.' />
        <meta property='og:image' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Nav />

      <Heading>
        {home ? (
          <>
            <Text>{name}</Text>
          </>
        ) : (
          <>
            <h2>
              <Link href='/'>
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Heading>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </ThemeProvider>
  )
}
