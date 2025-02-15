---

home: true
icon: home
title: 主页
heroImage: /logo.svg
heroText: Simple Admin
tagline: Simple Admin是一个基于Go Zero开发面向中大型项目的分布式微服务后端管理系统脚手架，提供丰富的后台管理功能，支持k8s快速部署，助力快速开发高并发微服务集群，适合学习和商用
actions:

- text: 快速开始 💡
  link: /zh/guide/basic-config/env_setting
  type: primary

- text: 文档
  link: /zh/guide/

- text: GitHub
  link: https://github.com/suyuan32/simple-admin-core

- text: Gitee
  link: https://gitee.com/hopefire/simple-admin-core


highlights:
  - header: 丰富的功能
    features:
      - title: 完善的后台管理功能
        icon: fa-solid fa-wrench
        details: 提供丰富的后台管理功能
        link: http://101.132.124.135:8080/

      - title: 强大的生成工具
        icon: fa-solid fa-screwdriver-wrench
        details: Simple Admin Tool 提供强大的代码生成功能，快速生成三端 CRUD 代码
        link: /zh/guide/basic-config/simple-admin-tools

      - title: 内置校验器
        icon: fa-solid fa-eye
        details: 内置校验器实现数据快速校验
        link: /zh/guide/feature/validator

      - title: 统一的错误处理
        icon: fa-solid fa-circle-exclamation
        details: 提供多种错误信息处理，且支持国际化翻译错误信息
        link: /zh/guide/feature/error_handling

      - title: 国际化支持
        icon: fa-solid fa-earth-americas
        details: 生成工具支持生成 i18n 代码，快速提供国际化支持
        link: /zh/guide/feature/i18n

      - title: K8s 支持
        icon: fa-solid fa-cloud
        details: 项目提供 K8s 快速部署脚本，实现项目快速上云
        link: /zh/guide/basic-config/k8s/k8s-deploy

      - title: 服务注册发现
        icon: fa-solid fa-magnifying-glass
        details: 基于 K8s Endpoints 实现服务注册发现
        link: /zh/guide/basic-config/k8s/k8s-deploy

      - title: 第三方登陆管理
        icon: fa-solid fa-building-lock
        details: 支持第三方登陆管理
        link: /zh/guide/feature/oauth

  - header: 优势
    features:
      - title: Github star 
        icon: star
        details: 1.1 k
      
      - title: 公司应用
        icon: house
        details: 50 +

      - title: 私人生产项目
        icon: folder
        details: 300 +
      
      - title: 官方模块
        icon: box
        details: 10 +

footer: MIT 协议 版权所有 © 2022-present Ryan SU
