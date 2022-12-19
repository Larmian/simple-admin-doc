---
title: 项目简介
icon: book
author: Ryan SU
---


<div align="center">
<img src="https://i.postimg.cc/nh8mVKkf/logo.png" width="300px" height="300px"/>
<h1>Simple Admin</h1>
</div>

---
[![Go-Zero](https://img.shields.io/badge/Go--Zero-v1.4.1-brightgreen.svg)](https://go-zero.dev/)
[![Vben Admin](https://img.shields.io/badge/Vben%20Admin-v2.8.0-yellow.svg)](https://vvbin.cn/doc-next/)
[![Ent](https://img.shields.io/badge/Ent-v0.11.0-blue.svg)](https://entgo.io/)
[![Casbin](https://img.shields.io/badge/Casbin-v2.52.1-orange.svg)](https://github.com/casbin/casbin)
[![Release](https://img.shields.io/badge/Release-v0.1.4-green.svg)](https://github.com/suyuan32/simple-admin-core/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![SimpleAdmin](https://dcbadge.vercel.app/api/server/NDED5p2hJk)](https://discord.gg/NDED5p2hJk)
![QQ群](https://img.shields.io/badge/QQ%E7%BE%A4-801043319-blue)

## 简介

Simple Admin 是一个开箱即用的分布式微服务后端管理系统，基于go-zero开发，提供丰富的功能如服务发现，权限管理等。
该框架可以帮助您快速开发具有RPC服务的后台管理系统。

#### [Gorm 版本点此](https://github.com/suyuan32/simple-admin-core/tree/gorm)
#### [Ent 中文文档](https://suyuan32.github.io/ent-chinese-doc/#/zh-cn/getting-started)

## 特性

- **最新技术栈**：使用 ent, casbin, kafka 等前沿技术开发
- **完全支持go-swagger**: 直接在api文件内编写注释即可直接生成swagger文档
- **统一的错误处理**: 整个系统拥有国际化的统一错误处理
- **国际化**：内置完善的国际化方案
- **服务注册发现**: 完善的服务注册发现机制，原生支持K8s
- **权限**: 内置完善的动态路由权限生成方案, 集成RBAC权限控制
- **其他**: 流量控制， ES服务

## 当前进度

- [x] 登录注册
- [x] 菜单管理
- [x] 角色管理
- [x] 角色权限
- [x] 用户管理
- [x] 操作日志
- [x] 服务注册发现
- [x] 字典功能
- [x] 三方登录管理
- [x] 全面支持 K8s
- [x] 服务监控
- [x] 日志收集
- [x] JWT黑名单
- [x] 定时任务
- [x] 消息队列
- [x] Ent
- [x] 后端 CRUD 代码生成

## 预览

### 在线预览
[在线预览](http://101.132.124.135/#/dashboard)
账号 admin
密码 simple-admin
#### 只读，不可修改和注册

![pic](https://i.postimg.cc/qqPNR02x/register-zh-cn.png)
![pic](https://i.postimg.cc/PxczkCr6/dashboard-zh-cn.png)

[更多预览](https://suyuan32.github.io/simple-admin-core/#/simple-admin/zh-cn/docs/screenshot)


## 文档

[文档](https://suyuan32.github.io/simple-admin-core/)

或者直接本地运行
```shell
cd docs
docsify serve .
```

- go-zero
  [Document](https://go-zero.dev/)
- ant-design-vue [Document](https://antdv.com/components/overview)

## 准备

- [Golang](http://go.dev/) and [git](https://git-scm.com/) - Go 语言
- [Ent](https://entgo.io/docs/getting-started) - Ent
- [Mysql](https://www.mysql.com/) - Mysql数据库
- [GORM](https://gorm.io/) - GORM 数据库ORM组件
- [Casbin](https://casbin.org/) - 权限管理
- [Go-swagger](https://goswagger.io/) - Go-swagger 文档生成调试

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/suyuan32/simple-admin-core.git
```

- 安装依赖

```bash
cd simple-admin-core/

go mod tidy
```
- 编辑配置文件 api/etc/core.yaml  rpc/etc/core.yaml
-
- 运行

```bash
# run core api
cd api 
go run core.go -f etc/core.yaml

# run core rpc
cd rpc
go run core.go -f etc/core.yaml
```

- 打包


```bash
go build -o core core.go
```


## 更新日志

[CHANGELOG](./CHANGELOG.md)

## 项目地址

- [Simple-Admin-ui](https://github.com/suyuan32/Simple-Admin-ui)
- [Simple-Admin](https://github.com/suyuan32/Simple-Admin)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/suyuan32/Simple-Admin/issues/new/choose) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 交流群
> QQ 801043319

>[Discord](https://discord.gg/NDED5p2hJk)

## Stars

[![Star History Chart](https://api.star-history.com/svg?repos=suyuan32/simple-admin-core&type=Date)](https://github.com/suyuan32/simple-admin-core)

## 维护者

[@Ryan Su](https://github.com/suyuan32)

## License

[MIT © Ryan-2022](./LICENSE)
