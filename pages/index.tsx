import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

interface AllPostsData {
  date: string;
  title: string;
  id: string;
}

interface HomeProps {
  allPostsData: AllPostsData[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: HomeProps) {
  const {
    headingMd,
    padding1px,
    headingLg,
    list,
    listItem,
    lightText,
  } = utilStyles;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={headingMd}>
        <p>
          Hi, I'm Jason. I'm a software engineer that enjoys all things tech!
          Here's just a simple blog to show of some next.js and other cool
          things.
        </p>
        <p>
          (This is a sample website I built using the{' '}
          <a href='https://nextjs.org/learn'>Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${headingMd} ${padding1px}`}>
        <h2 className={headingLg}>Blog</h2>
        <ul className={list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
