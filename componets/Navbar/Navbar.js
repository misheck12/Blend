import React from 'react';
import Link from 'next/link';
import styles from './styles.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/">
      <a className={styles.brand}>BLend</a>
    </Link>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/books">
          <a>Books</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
      <li className={styles.navItem}>
         <Link href="/about">
            <a>About Blend</a>
         </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
