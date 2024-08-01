// src/components/Navbar.tsx
import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Assuming you're using CSS Modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/history">History</Link>
    </nav>
  );
};

export default Navbar;
