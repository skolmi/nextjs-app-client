import Head from 'next/head'
import Layout from '../components/layout';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Skolmi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}