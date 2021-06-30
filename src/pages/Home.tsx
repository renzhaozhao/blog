import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import posts from '@/posts'
import styles from './styles/home.module.less'

const Home: FC = () => (
  <div className={`container ${styles.home}`}>
    <ul className={styles.postList}>
      {posts.map(post => (
        <li key={post.name}>
          <Link to={`/post/${post.name}`}>{post.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Home
