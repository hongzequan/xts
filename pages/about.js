// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Head>
        <title>关于我们</title>
      </Head>
      <Header />
      <main>
        <h1>关于我们</h1>
        <p>这是关于我们的页面。</p>
      </main>
    </div>
  );
}