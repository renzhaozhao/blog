---
title: docker使用记录
date: 2020-05-22 10:20:59
---

# 目的

在 docker 里启动一个服务

### 编写服务代码

```js
import Koa from 'koa'

const app = Koa()

app.use(async ctx => {
  ctx.body = 'Hello world'
})

app.listen(3000, () => {
  console.log('listen in 3000')
})
```

### 编写 Dockerfile

```dockerfile
# 拉取镜像
FROM node:11.15-alpine

# 执行命令
RUN node -v \
  && npm -v

# 设定工作目录
WORKDIR /opt

# 复制文件
COPY . /opt

# 执行命令
CMD npm start
```

### 根据 Dockerfile 生成 image

```shell
$ docker build . -t node-server:1.0.0
```

### 创建容器 映射端口

```shell
$ docker run -d -p 3000:3000 -it --name hello-world node-server:1.0.0
```

- -it：这是两个参数，一个是 -i 表示交互式操作，一个是 -t 为终端。
- -d: 后台运行

### 查看所有容器和状态

```shell
$ docker ps -a
```

### 启动容器

```shell
$ docker start 2477af4679e2
```

访问 http://localhost:3000 查看

### 查看运行的容器

```shell
$ docker ps
```

### 进入容器

```shell
$ docker exec -it 2477af4679e2 sh
```
