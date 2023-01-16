---
order: 5
title: '快捷命令'
---


# 快捷命令

我们提供了许多快捷命令在 makefile 中， 只需在根目录执行即可

#### **注意：需要系统支持make命令，建议linux**

```shell
# 编译 docker image, 需要设置环境变量 DOCKER_USERNAME VERSION 
make docker  

# 发布 docker 需要设置环境变量 DOCKER_USERNAME VERSION DOCKER_PASSWORD
make publish-docker

# 根据 api/desc 生成 api代码并更新 swagger
make gen-api

# 根据 rpc/core.proto 生成代码
make gen-rpc

# 生成 ent 代码
make gen-ent

# 生成 swagger
make gen-swagger

# 启动 swagger 服务
make serve-swagger

# 本地查看 doc
make doc

# 生成 CRUD 代码 ( 你需要设置model name 和 group name)
make gen-rpc-ent-logic model={modelName} group={groupName}
```

## 环境变量

| 环境变量            | 介绍                         |
|-----------------|----------------------------|
| VERSION         | 版本号                        |
| DOCKER_USERNAME | docker 仓库用户名               |
| DOCKER_PASSWORD | docker 仓库密码                |
| REPO            | docker 仓库地址， 官网为 docker.io |

> 若要发布镜像需要 export 上述环境变量
