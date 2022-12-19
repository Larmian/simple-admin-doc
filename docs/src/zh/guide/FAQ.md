---
order: 6
title: '常见问题'
---

# FAQ

> Q: 默认账号是什么？

A: 账号: admin   密码: simple-admin

> Q: 注册的账号不能登录?

A: 默认注册成功后的角色是会员，没有登录的权限。你需要修改角色权限或者将用户的角色设置为管理员.

> Q: go-zero 有几种服务注册发现方式？

A： 3 种 [go-zero](https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w)

> Q: 如何处理跨域问题？

A: 修改 api/core.go 

```go
server := rest.MustNewServer(c.RestConf, rest.WithCors("*"))
```

修改 `*` 为自己的域名或IP,默认为`*`，允许所有。
