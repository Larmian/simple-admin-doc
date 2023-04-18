---
order: 1
title: "本地开发环境配置"
---

# 本地开发环境配置

## 环境需求

- golang 1.20 +
- **nodejs 18.8.0 +**
- **mysql 8.0.21 +** | MariaDB 10.7 + | Postgres 13 + (**Postgres 14 推荐**)
- redis 7.0 +
- [go-swagger](https://goswagger.io/install.html)
- [Simple Admin Tool](/zh/guide/basic-config/simple-admin-tools.md)

::: info
推荐在 linux 下开发，因为需要用到 make 命令，官方在 `Ubuntu 22.10` 环境下开发. \
**`Windows` 用户建议在 [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) 环境下开发, 你也可以自行配置环境， 参考 [Windows](/zh/guide/FAQ.html#如何配置-windows-环境)**
:::

## 后端部署

### simple admin core

simple admin core 是核心代码，主要负责用户注册鉴权和充当网关的角色以及后台的各类配置。

::: info 默认账号
username: **admin**  
password: **simple-admin**
:::

### 下载代码

```bash
git clone https://github.com/suyuan32/simple-admin-core.git
```

### 本地调试配置

#### API 服务

##### 注意本地测试最好创建 core_dev.yaml 与部署文件 core.yaml 区分开

> 添加 api/etc/core_dev.yaml

```yaml
Name: core.api
Host: 0.0.0.0 # ip可以是0.0.0.0也可以是127.0.0.1,如需其他外部主机访问则需要为 0.0.0.0
Port: 9100
Timeout: 30000

Auth:
  AccessSecret: jS6VKDtsJf3z1n2VKDtsJf3z1n2 # JWT的加密密钥，各个API应保持一致才能解析
  AccessExpire: 259200 # 秒，过期时间

Log:
  ServiceName: coreApiLogger
  Mode: file
  Path: /home/ryan/logs/core/api # log 保存路径，使用filebeat同步
  Level: info
  Compress: false
  KeepDays: 7 # 保存时长（天）
  StackCoolDownMillis: 100

RedisConf:
  Host: 127.0.0.1:6379 # 改成自己的redis地址
  Type: node
  # Pass: xxx  # 也可以设置密码

# 与 k8s 主要是此处服务发现不同
# 核心模块
CoreRpc:
  Endpoints:
    - 127.0.0.1:9101 # 与 Core RPC 地址相同
  Enabled: true # 是否启用

# 定时任务模块
JobRpc:
  Endpoints:
    - 127.0.0.1:9105 # 与 Job RPC 地址相同
  Enabled: false # 是否启用

Captcha:
  KeyLong: 5 # 验证码长度
  ImgWidth: 240 # 验证码图片宽度
  ImgHeight: 80 # 验证码图片高度

DatabaseConf:
  Type: mysql # 支持 mysql, postgres, sqlite3
  Host: "127.0.0.1" # 修改成自己的mysql地址
  Port: 3306
  DBName: simple_admin # 数据库名称
  Username: root # 用户名
  Password: "123456" # 密码
  MaxOpenConn: 100 # 最大连接数
  SSLMode: disable # 是否在 postgresql 中使用 SSL, disable 或 require
# DBPath: /home/data/sqlite.db # Sqlite 数据库文件存放位置，使用 sqlite3时必须设置

# casbin 规则
CasbinConf:
  ModelText: |
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub && keyMatch2(r.obj,p.obj) && r.act == p.act
```

::: warning

> 小型网站直接使用

```yaml
CoreRpc:
  Endpoints:
    - 127.0.0.1:9101 # the same as rpc address
```

> 的方式直连，不需要服务发现，本地调试也是使用直连的方式， Endpoints 可以有多个
> :::

> 添加 rpc/etc/core_dev.yaml

```yaml
Name: core.rpc
ListenOn: 0.0.0.0:9101 # ip可以是0.0.0.0也可以是127.0.0.1,如需其他外部主机访问则需要为 0.0.0.0

DatabaseConf:
  Type: mysql # 支持 mysql, postgres, sqlite3
  Host: "127.0.0.1" # 修改成自己的mysql地址
  Port: 3306
  DBName: simple_admin # 数据库名称
  Username: root # 用户名
  Password: "123456" # 密码
  MaxOpenConn: 100 # 最大连接数
  SSLMode: disable # 是否在 postgresql 中使用 SSL, disable 或 require
# DBPath: /home/data/sqlite.db # Sqlite 数据库文件存放位置，使用 sqlite3时必须设置

# casbin 规则
CasbinConf:
  ModelText: |
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub && keyMatch2(r.obj,p.obj) && r.act == p.act

Log:
  ServiceName: coreRpcLogger
  Mode: file
  Path: /home/ryan/logs/core/rpc # log 保存路径，使用filebeat同步
  Encoding: json
  Level: info
  Compress: false
  KeepDays: 7 # 保存时长（天）
  StackCoolDownMillis: 100

RedisConf:
  Host: 192.168.50.216:6379 # 改成自己的redis地址
  Type: node
  # Pass: xxx  # 也可以设置密码
```

### 配置依赖

```shell
go mod tidy
```

### 运行 rpc 服务

```bash
cd rpc

go run core.go -f etc/core_dev.yaml
```

### 运行 api 服务

```bash
cd api

go run core.go -f etc/core_dev.yaml
```

## 前端配置

### 下载代码

```shell
git clone https://github.com/suyuan32/simple-admin-backend-ui.git
```

### 下载依赖

```shell
pnpm install
```

::: warning
如果下载依赖失败，请升级 pnpm 至最新版
:::

### 运行

```shell
pnpm serve
```

### 编译

```shell
pnpm build
```

### 预览

```shell
# 编译后再预览
pnpm preview

# 直接预览dist文件夹，不重复编译
pnpm preview:dist
```

### 注意 配置后端 API 地址

> .env.development

```text
# Whether to open mock
VITE_USE_MOCK = false

# public path
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [["/sys-api","http://localhost:9100"],["/file-manager","http://localhost:9102"]]

VITE_BUILD_COMPRESS = 'none'

# Delete console
VITE_DROP_CONSOLE = false

# Basic interface address SPA
VITE_GLOB_API_URL=

# File upload address， optional
VITE_GLOB_UPLOAD_URL=/upload

# File store address
VITE_FILE_STORE_URL=http://localhost:8080

# Interface prefix
VITE_GLOB_API_URL_PREFIX=
```

> 主要修改 VITE_PROXY 中的 sys-api 配置， 使用 localhost 或 127.0.0.1 调试本地，也可设置成其他远程 ip, filemanager 访问的是文件服务

## 初始化数据库

::: warning
**_重要:_** 在初始化数据库前必须先创建数据库, 数据库名称和配置文件中的名称相同.

**初始化完成后需要重启 API, 用于刷新 casbin 缓存**
:::

```shell
# 访问前端地址端口
https://address:port/init

# 默认
https://localhost:3100/init
```

进入界面

![pic](/assets/init_zh_cn.png)

> 文件服务初始化是可选的，没有运行文件 api 可以不初始化
