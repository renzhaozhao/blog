import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import styles from './styles/home.module.less'

const Home: FC = () => {
  const { data, error } = useSWR(
    '/vite-react-deploy/src/posts/posts.json',
    url => fetch(url).then(res => res.json())
  )
  if (error) return <div className="container">failed to load</div>

  if (!data) return <div className="container">No Data</div>
  return (
    <div className={`container ${styles.home}`}>
      <ul className={styles.postList}>
        {data.map(post => (
          <li key={post.name}>
            <Link to={`/post/${post.name}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
