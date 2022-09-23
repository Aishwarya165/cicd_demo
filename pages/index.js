import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [udata, setData] = useState([])

  useEffect(() => {
    axios.get('https://pvik3n4r.directus.app/items/blog').then((res) => {
      setData(res.udata);
      console.log(udata);
    })
  });

  const inputObject = {
    "userList":
    [{
      "name": "Bob",
      "age": 28
    },{
      "name": "Tom",
      "age": 45
    },{
      "name": "Alice",
      "age": 32
    }]
  };
  // console.log(data);
  // console.log(inputObject);
  const arr=[
    {
      "name":"ajith",
      "age":12
    },
    {
      "name":"ajith",
      "age":12
    },
    {
      "name":"ajith",
      "age":12
    }
  ];
  // console.log(arr);
  // const output = blog.data.map(blog => blog.name);


  return (
    <div className={styles.container}>
      <p>Main Page</p>
      
      {inputObject.userList.map(({name, age}, index) => {
        return(
          <div key={index}>
            <p>{name}{' '}{age}</p>
          </div>
        );
      })}

      {data.map(({id, title}, index) => {
        return(
          <div key={index}>
            <p>{id}{' '}{title}</p>
          </div>
        );
      })}
    </div>
  )
}
