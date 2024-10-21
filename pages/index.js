import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     跳转测试
     <Link href="/">首页</Link>
    <Link href="/about">关于我们</Link>
    </div>
  );
}
