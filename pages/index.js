import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [career, setCareer] =useState([]);
  useEffect(() => {
    axios.get("/Career").then((res) => {
      setCareer(res.data);
        console.log(career);
    })
  });

  return (
    <div className={styles.container}>
      <p>Main Page</p>
    </div>
  )
}
