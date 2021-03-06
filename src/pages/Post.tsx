import React, { FC } from 'react'
import useSWR from 'swr'
import Markdown from 'markdown-it'
import hljs from 'markdown-it-highlightjs'
import { useParams } from 'react-router-dom'
import MdHandle from '@/utils/MdHandle'
import { ROUTE_PATH } from '@/config'
import styles from './styles/post.module.less'
import 'highlightjs/styles/qtcreator_light.css'

const md = new Markdown().use(hljs)

const Post: FC = () => {
  const { id } = useParams()
  const { data, error } = useSWR(
    encodeURI(`${ROUTE_PATH}posts/${decodeURI(id)}.md`),
    url => fetch(url).then(res => res.text())
    // 占位
  )

  if (error) return <div className="container text-center">failed to load</div>

  if (!data) return <div className={`container ${styles.info}`}>No Data</div>
  const mdHandle = new MdHandle(data)

  return (
    <div className={`container ${styles.post}`}>
      <p>{mdHandle.getDate()}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(mdHandle.getContent()),
        }}
      />
    </div>
  )
}

export default Post
