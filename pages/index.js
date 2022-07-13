import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps () {
  const resp = {
    props: { a: 1 }
  }
  console.log(JSON.stringify(resp))
  return resp
}

export default function Home ({ resp }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here's the getStaticProps data: {resp || 'Null'}</p>
      </section>
    </Layout>
  )
}
