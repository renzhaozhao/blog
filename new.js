/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/*  eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk')
const { readFileSync, writeFile } = require('fs')
const dayjs = require('dayjs')

const filePath = './src/posts/posts.json'

async function create() {
  const name = process.argv[2]
  const postFile = await readFileSync(filePath, 'utf8')
  const posts = JSON.parse(postFile.replace('export default ', ''))

  if (!name) {
    return console.log(
      chalk.bold.red('命令错误，请输入标题 npm run new [title]')
    )
  }

  if (posts.filter(v => v.name === name).length > 0) {
    return console.log(chalk.bold.red(`${name}.md已存在！`))
  }
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  const newPosts = [
    ...posts,
    {
      name,
      date,
    },
  ]
  writeFile(filePath, JSON.stringify(newPosts), err => {
    if (err) throw err
    console.log(chalk.green('Json更新成功'))
  })

  writeFile(
    `./src/posts/${name}.md`,
    `---
title: ${name}
date: ${date}
---
  `,
    err => {
      if (err) throw err
      console.log(chalk.green(`创建 ${name}.md 成功`))
    }
  )
}
create()
