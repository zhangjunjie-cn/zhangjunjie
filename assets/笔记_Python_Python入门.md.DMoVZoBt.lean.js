import{_ as i,c as p,b as l,a1 as s,Z as a,a as o}from"./chunks/framework.nzW5GSPc.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/Python/Python入门.md","filePath":"笔记/Python/Python入门.md","lastUpdated":1716471346000}'),r={name:"笔记/Python/Python入门.md"};function d(c,e,h,u,b,m){const n=a("NolebaseGitContributors"),t=a("NolebaseGitChangelog");return o(),p("div",null,[e[0]||(e[0]=l(`<h2 id="在linux脚本中使用" tabindex="-1">在Linux脚本中使用#! <a class="header-anchor" href="#在linux脚本中使用" aria-label="Permalink to &quot;在Linux脚本中使用#!&quot;">​</a></h2><p>在Linux中，你可以将Python程序转换为自我可执行的脚本。代码中的第一条语句应该是一个#! 。它必须包含到Python可执行文件的路径。在Linux中，Python安装在/usr/bin目录下，可执行文件的名称是python3。因此，我们将这个语句添加到hello.py文件中。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print (&quot;Hello World&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>您还需要使用chmod +x命令给文件赋予可执行权限</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ chmod +x hello.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，您可以使用以下命令行运行该程序−</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ./hello.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将显示以下输出</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Hello World</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>因此，我们可以使用解释器模式和脚本模式在Python中编写和运行 Hello World 程序。</p>`,10)),s(n),s(t)])}const y=i(r,[["render",d]]);export{g as __pageData,y as default};
