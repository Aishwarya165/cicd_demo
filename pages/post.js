import React from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const post = () => {
  return (
    <div className={styles.container}>
      <p></p>
      <Link href="/">Back</Link>
    </div>
  )
}

export default post