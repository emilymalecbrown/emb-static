import 'css/tailwind.css'
import 'css/hljs.css'
import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
