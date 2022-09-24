import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [blogData, setBlogData] = useState({ data: [] })
  const [careerData, setCareerData] = useState({ data: [] })
  const imageUrl= "https://pvik3n4r.directus.app/assets/"
  useEffect(() => {
    axios.get('https://pvik3n4r.directus.app/items/blog').then((res) => {
      setBlogData(res.data);
    })
  },[]);
  useEffect(() => {
    axios.get('https://pvik3n4r.directus.app/items/career').then((res) => {
      setCareerData(res.data);
    })
  },[]);
  return (
    <div className={styles.container}>

      <p className={styles.title}>Main Page</p>

      <div className={styles.maincontainer}>

        <div className={styles.blog}>
          {careerData.data.map(({id, title, discription}, index) => {
            return(
              <div className={styles.single} key={index}>
                <p>{id}{' '}{title}</p>
                <p dangerouslySetInnerHTML={{__html: discription}}></p>
              </div>
            )
          })}
        </div>

        <div className={styles.career}>
          {blogData.data.map(({id, title, image, content}, index) => {
            return(
              <div className={styles.single} key={index}>
                <p>{id}{' '}{title}</p>
                <img src={process.env.IMAGEURL+{image}} alt/>
                <p dangerouslySetInnerHTML={{__html: content}}></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
