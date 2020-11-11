import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Jason. I'm a software engineer that enjoys all things tech! Here's just a simple blog to show of some next.js and other cool things.</p>
        <p>
          (This is a sample website I built using the {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  );
}