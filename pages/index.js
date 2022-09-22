import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {
  const [career, setCareer] =useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/items/Career").then((res) => {
      setCareer(res.data);
    })
  });

  return (
    <div className={styles.container}>
      <p>Main Page</p>
      <Link href="/post">click</Link>
    </div>
  )
}
