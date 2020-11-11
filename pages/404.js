// pages/404.js
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
  return <Layout><h1 className={utilStyles.headingXl} style={{ textAlign: 'center' }}>404 - Page Not Found</h1></Layout>;
}