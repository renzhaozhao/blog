import React, { FC } from 'react'
import useSWR from 'swr'
import Markdown from 'markdown-it'
import hljs from 'markdown-it-highlightjs'
import { useParams } from 'react-router-dom'
import styles from './styles/post.module.less'
import 'highlightjs/styles/qtcreator_light.css'

const md = new Markdown().use(hljs)

const Post: FC = () => {
  const { id } = useParams()

  const { data, error } = useSWR(`/src/posts/${id}.md`)
  if (error) return <div className="container text-center">failed to load</div>

  if (!data) return <div className={`container ${styles.info}`}>No Data</div>

  return (
    <div className={`container ${styles.post}`}>
      <h1>111sad</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(data),
        }}
      />
    </div>
  )
}

export default Post
