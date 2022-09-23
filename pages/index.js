import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [dataModel, setData] = useState({ data: [] })

  useEffect(() => {
    axios.get('https://pvik3n4r.directus.app/items/blog').then((res) => {
      setData(res.data);
    })
  });
  
  return (
    <div className={styles.container}>
      <p>Main Page</p>
    
      {dataModel.data.map(({id, title}, index) => {
        return(
          <div key={index}>
            <p>{id}{' '}{title}</p>
          </div>
        );
      })}
    </div>
  )
}
