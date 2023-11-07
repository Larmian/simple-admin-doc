import{_ as e}from"./jaeger_ui-089ac12d.js";import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as t}from"./app-febb919a.js";const o={},c=t(`<h2 id="go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file" tabindex="-1"><a class="header-anchor" href="#go-zero-supports-jaeger-for-link-tracking-by-default-just-declare-it-in-the-etc-configuration-file" aria-hidden="true">#</a> Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Telemetry</span><span class="token punctuation">:</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api <span class="token comment"># Service name</span>
  <span class="token key atrule">Endpoint</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">4317</span>
  <span class="token key atrule">Sampler</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
  <span class="token key atrule">Batcher</span><span class="token punctuation">:</span> otlpgrpc <span class="token comment"># use grpc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jaeger-local-environment-deployment" tabindex="-1"><a class="header-anchor" href="#jaeger-local-environment-deployment" aria-hidden="true">#</a> Jaeger local environment deployment</h2><p>Open \`simple-admin-core/deploy/docker-compose/jaeger folder, execute</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The local docker was deployed and you can visit <code>http://localhost:16686/</code> locally.</p><blockquote><p>To use ES, please cancel the ES comment in <code>docker-compose.yaml</code>, Jaeger supports multiple backends at the same time, see [Backend Storage](https://www.jaegertracing.io/docs/1.18/deployment /#storage-backends)</p></blockquote><h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h2><figure><img src="`+e+'" alt="Jaeger UI" tabindex="0" loading="lazy"><figcaption>Jaeger UI</figcaption></figure>',9),i=[c];function r(l,p){return n(),s("div",null,i)}const g=a(o,[["render",r],["__file","tracing_analysis.html.vue"]]);export{g as default};
