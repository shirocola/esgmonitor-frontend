"use client";

import React from 'react';
import DisplayCarbon from './services/displayCarbon';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to ESG Monitor</h1>
      <DisplayCarbon />
    </main>
  );
};

export default Home;
