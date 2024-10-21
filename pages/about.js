// pages/about.js
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>关于我们</title>
      </Head>
      <Header />
      <Link href="/">首页</Link>
      <Link href="/about">关于我们</Link>
    </div>
  );
}
