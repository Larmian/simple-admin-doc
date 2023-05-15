import{_ as a,X as e,Y as s,a1 as n}from"./framework-3afc3da2.js";const i={},l=n(`<h2 id="makefile-生成" tabindex="-1"><a class="header-anchor" href="#makefile-生成" aria-hidden="true">#</a> Makefile 生成</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls extra makefile <span class="token parameter variable">-n</span> core <span class="token parameter variable">-t</span> rpc <span class="token parameter variable">-s</span> go_zero <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>帮助信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>生成 makefile 文件

Usage:
  goctl extra makefile <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -d, <span class="token parameter variable">--dir</span> string            Makefile 文件所在目录
  -e, <span class="token parameter variable">--ent</span>                   是否使用 Ent
  -h, <span class="token parameter variable">--help</span>                  <span class="token builtin class-name">help</span> <span class="token keyword">for</span> makefile
  -i, <span class="token parameter variable">--i18n</span>                  是否启用 i18n 国际化
  -n, <span class="token parameter variable">--service_name</span> string   服务名称
  -t, <span class="token parameter variable">--service_type</span> string   服务类型，api, single 或者 rpc
  -s, <span class="token parameter variable">--style</span> string          文件命名格式，参见 <span class="token punctuation">[</span>https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function t(c,p){return e(),s("div",null,r)}const o=a(i,[["render",t],["__file","makefile.html.vue"]]);export{o as default};
