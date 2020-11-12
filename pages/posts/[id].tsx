import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

interface PostData {
  title: string;
  date: string;
  contentHtml: string;
}

interface PostProps {
  postData: PostData;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
    /* 
      Note on 'fallback':
      
      Use fallback true if you have a significant amount of pages
      in this case, import { useRouter } from 'next/router' and
      then in the Post function below:
      const router = useRouter();
      if (router.isFallback) { return <div>Loading Componont....</div>}
      else...render post
    */
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({
  postData: { title, date, contentHtml },
}: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}
