import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [career, setCareer] =useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/items/Career").then((res) => {
      setCareer(res.data);
    })
  });

  return (
    <div className={styles.container}>
      <p>Main Page</p>``
    </div>
  )
}
