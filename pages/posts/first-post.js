import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost () {
  return (
    <Layout>
      <Head>
        <title>My first blog post</title>
      </Head>
      <div>
        <h1>First Post</h1>
      </div>
    </Layout>
  )
}
