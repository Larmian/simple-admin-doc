---
order: 2
title: "API 初始化代码"
---

## API 初始化代码生成

::: warning
goctls v1.5.2 +
:::

### `goctls extra init_code`

```shell
goctls extra init_code --model_name=StudentInfo --target=core --output=D:\projects\simple-workspace\simple-admin-core\rpc\internal\logic\base\init_database_api_data.go
```

| 参数名称   | 必须 | 默认值 | 介绍                                                                                |
| ---------- | ---- | ------ | ----------------------------------------------------------------------------------- |
| model_name | 是   |        | 模型名称，schema 中内部 struct 名称，如 example 中的 Student                        |
| target     | 是   |        | 目前支持 core, 意思是生成 core 项目中的 api 初始化信息                              |
| output     | 否   |        | 若为空则会输出至命令行，自行复制，或者设置为 `init_database_api_data.go` 的绝对路径 |

> 运行 `goctls extra init_code -h` 查看更多

```shell
生成初始化代码

用法：
  goctl extra init_code [选项]

选项：
  -h, --help                显示帮助信息
  -m, --model_name string   模型名称，应该采用驼峰命名法，例如 StudentInfo
  -o, --output string       输出路径，仅支持 core 生成，例如 ./rpc/internal/logic/base/init_database_api_data.go
  -t, --target string       目标类型，现在仅支持 core
```

### console 生成效果

```text
$ goctls extra init_code --model_name=StudentInfo --target=core
// STUDENTINFO

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/create").
        SetDescription("apiDesc.createStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/update").
        SetDescription("apiDesc.updateStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/delete").
        SetDescription("apiDesc.deleteStudentInfo").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info/list").
        SetDescription("apiDesc.getStudentInfoList").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

    apis = append(apis, l.svcCtx.DB.API.Create().
        SetPath("/student_info").
        SetDescription("apiDesc.getStudentInfoById").
        SetAPIGroup("student_info").
        SetMethod("POST"),
    )

```
