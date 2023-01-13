import{_ as n,W as s,X as l,Y as e,Z as a,$ as d,a0 as o,F as r}from"./framework-6f82d902.js";const i={},p=o(`<h1 id="vben-web-端代码生成" tabindex="-1"><a class="header-anchor" href="#vben-web-端代码生成" aria-hidden="true">#</a> Vben Web 端代码生成</h1><blockquote><p>首先确认你安装了以下软件:</p></blockquote><ul><li>simple-admin-tool (goctls) v0.1.1-beta +</li></ul><h2 id="创建-example-代码" tabindex="-1"><a class="header-anchor" href="#创建-example-代码" aria-hidden="true">#</a> 创建 example 代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls frontend vben <span class="token parameter variable">--apiFile</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-api/desc/student.api <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--folderName</span><span class="token operator">=</span>example <span class="token parameter variable">--prefix</span><span class="token operator">=</span>example-api <span class="token parameter variable">--subFolder</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="frontend-vben参数介绍" tabindex="-1"><a class="header-anchor" href="#frontend-vben参数介绍" aria-hidden="true">#</a> <code>frontend vben</code>参数介绍</h3><table><thead><tr><th>参数</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>apiFile</td><td>api文件的绝对路径</td><td>填入api文件的绝对路径，如上面的 student.api</td></tr><tr><td>o</td><td>输出路径</td><td>输入 simple admin backend ui 目录</td></tr><tr><td>folderName</td><td>文件夹名称</td><td>core服务是 sys, 示例项目是 example</td></tr><tr><td>prefix</td><td>请求前缀</td><td>请求前缀用于请求转发，如sys-api, 示例项目为example-api, 需要修改env.development,添加proxy</td></tr><tr><td>subFolder</td><td>子目录</td><td>用于在views下创建子目录，如sys有user,token等子目录</td></tr></tbody></table><blockquote><p>执行命令后会生成下面的代码</p></blockquote><ul><li><code>src/api/example/student.ts src/api/example/model/student.ts</code> API声明和请求代码</li><li><code>src/locales/lang/en/example.ts src/locales/lang/en/example.ts</code> 国际化代码</li><li><code>src/views/example/*</code> 视图代码</li></ul><h3 id="生成代码后还需要做的事" tabindex="-1"><a class="header-anchor" href="#生成代码后还需要做的事" aria-hidden="true">#</a> 生成代码后还需要做的事</h3><ul><li>修改 env.development 和 deploy/default.conf 添加新的服务地址</li><li>修改国际化代码，优化中文翻译</li><li>修改views 中的 *.data.ts 完善中文翻译，行列以及提交表格中的字段名需要自行翻译添加到国际化代码中使用 <code>locales/lang/example.ts</code></li><li>添加api到数据库以及数据库初始化代码</li><li>添加菜单到数据库以及初始化代码</li></ul>`,11),c={href:"https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen",target:"_blank",rel:"noopener noreferrer"};function m(h,u){const t=r("ExternalLinkIcon");return s(),l("div",null,[p,e("blockquote",null,[e("p",null,[a("示例地址 "),e("a",c,[a("https://github.com/suyuan32/simple-admin-backend-ui/tree/example-code-gen"),d(t)])])])])}const x=n(i,[["render",m],["__file","web_codegen.html.vue"]]);export{x as default};
