// components/Header.js
import Link from 'next/link';
// import styles from './Header.module.css';
console.log(1)
const Header = () => (
  <header>
    <nav>
      <Link href="/">首页</Link>
      <Link href="/about">关于我们</Link>
    </nav>
  </header>
);

export default Header;