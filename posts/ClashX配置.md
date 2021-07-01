---
title: 科学上网神器ClashX配置
date: 2021-06-25 17:20:22
---

# 起因

科学上网大家用的最多的应该是小飞机和 V2RAY，配置起来方便，用起来还挺好用的。不过最近因工作需要，经常要切 vpn 来访问不同的网络，每次切换挺麻烦的。同事给安利了一个神器 ClashX，简单来说可以**根据不用域名来自动匹配对应的 vpn**。

# 准备工作

下载安装，选择配置文件这些就不详细介绍了，网上很多教程，本文主要讲述**配置文件**。

# 情景模拟

现在假设我们需要满足以下需求

- 访问 google（科学上网）
- 使用一个 ss 访问 xx.example1.com
- 使用一个 v2ray 访问 xx.example2.com

# 配置文件结构

示例

```yaml
# 基础配置（一般不需要修改）
mixed-port: 7890
external-controller: 127.0.0.1:9090
allow-lan: false
mode: rule
log-level: warning
# 代理配置
proxies:
  - name: 'vpn1' #名称
    type: ss # 类型ss
    server: 1.1.1.1 # 服务器ip
    port: 8888 # 端口
    cipher: aes-256-cfb # 加密方式
    password: 'mima' # 密码

  - name: 'vpn2'
    type: vmess
    server: xx.example.com
    port: 83
    uuid: 1as23-ad2a-23fs-sdf3-23dfdv3f
    alterId: 0
    cipher: auto
    tls: true
    skip-cert-verify: true
    network: ws
    ws-path: /
    ws-headers:
      Host: xx.example.com # 填你的主机名
# 代理组配置
proxy-groups:
  - name: '自动选择'
    type: url-test
    proxies:
      - 'vpn1'
      - 'vpn2'
    url: 'https://www.google.com/'
    interval: 300

  - name: 'PROXY1'
    type: url-test
    proxies:
      - 'vpn1'
    url: 'https://xx.example1.com/'
    interval: 300

  - name: 'PROXY2'
    type: url-test
    proxies:
      - 'vpn2'
    url: 'https://xx.example2.com/'
    interval: 300
# 匹配规则
rules:
  # xx.example1.com使用PROXY1
  - DOMAIN,xx.example1.com,PROXY1

  # xx.example2.com使用PROXY1
  - DOMAIN,xx.example2.com,PROXY2

  # 使用自动选择
  - DOMAIN-SUFFIX,google.com,自动选择
  - DOMAIN-SUFFIX,facebook.com,自动选择
  - DOMAIN-SUFFIX,twitter.com,自动选择

  # 没匹配到的不用代理，一般放最后
  - GEOIP,CN,DIRECT
  - MATCH,DIRECT
```

基础配置和代理配置就不多说了，前者不需要改，后者从小飞机或 v2ray 把配置贴到对应的位置就好了

### 代理组配置

域名匹配后直接对应的是代理组
**配置项**

- name: 随意字符
- type: url-test 通过指定的 URL 测试并选择延迟最低的节点
- proxies: 选择对应代理，可以一个也可以多个
- url: 测试的 url
- interval: 300

### 匹配规则

结构

```js
${type},${domain},${group}
```

type 可以根据全域名或者域名后缀来设置，也可以通过 IP 设置
DOMAIN: 全域名
DOMAIN-SUFFIX; 域名后缀，相当于 pac 里的\*.域名
