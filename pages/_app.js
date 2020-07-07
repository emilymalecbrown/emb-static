import '../css/tailwind.css'
import '../css/tailwind.css'
import Layout from '../components/Layout'

export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
