import{_ as p,c,a3 as s,L as h,R as a,d as o,b as r,a0 as i,a as g}from"./chunks/framework.DOiCuyYX.js";const B=JSON.parse('{"title":"局域网文件共享","description":"","frontmatter":{"createTime":"2024/06/16","tag":"文件共享","outline":[2,3]},"headers":[],"relativePath":"笔记/计算机网络/桌面运维/局域网文件共享.md","filePath":"笔记/计算机网络/桌面运维/局域网文件共享.md","lastUpdated":1718542768000}'),k={name:"笔记/计算机网络/桌面运维/局域网文件共享.md"},m=a("h1",{id:"局域网文件共享",tabindex:"-1"},[o("局域网文件共享 "),a("a",{class:"header-anchor",href:"#局域网文件共享","aria-label":'Permalink to "局域网文件共享"'},"​")],-1),d=r(`<div class="warning custom-block"><p class="custom-block-title">注意：</p><p><strong>这是共享给别人文件的主机的设置， 需要连接别人的共享文件，请往下翻！！</strong></p></div><h2 id="【电脑1】创建共享文件" tabindex="-1">【电脑1】创建共享文件 <a class="header-anchor" href="#【电脑1】创建共享文件" aria-label="Permalink to &quot;【电脑1】创建共享文件&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">操作：桌面 -&gt;【此电脑】 -&gt; 右键【管理】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132317870.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：【本地用户组】 -&gt; 【用户】 -&gt; 右键【新用户】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161345317.png"></p></div><details class="details custom-block"><summary>注意：如果你是Windows11，请进行以下操作，否就跳过。</summary><p>因为win11没有用户组选项，要启动它需要执行命令。 <br> 在桌面新建一个记事本，输入以下代码，保存。将文件后缀改为 <code>.cmd</code> ，右键选管理员权限执行。》点击下载文件《</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pushd </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%~dp0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ervicing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ackages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">icrosoft-Windows-GroupPolicy-ClientExtensions-Package~3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.mum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">List.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ervicing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ackages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">icrosoft-Windows-GroupPolicy-ClientTools-Package~3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.mum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">List.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f %%i in (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;findstr /i . List.txt 2^&gt;nul&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dism /online /norestart /add-package:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C:\\Windows\\servicing\\Packages\\%%i&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pause</span></span></code></pre></div><ul><li><code>win + R</code>执行<code>control userpasswords2</code>打开，添加账户guest，提高到管理员权限</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161449887.png"></details><div class="note custom-block github-alert"><p class="custom-block-title">操作：【账户】-&gt; test , 【密码】-&gt; ha123 ，勾选【账户永不过期】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161346780.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：选择需要共享的文件夹</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161359127.png"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161423301.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：输入刚才创建的用户名，添加并修改访问的权限【读取/写入】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161356963.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：【高级共享】 -&gt; 【权限】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161505959.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：【添加】 -&gt; 【高级】 -&gt; 【立即查找】 -&gt; 选中 test 账户</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161435280.png"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161438552.png"></p></div><h2 id="【电脑2】访问共享文件" tabindex="-1">【电脑2】访问共享文件 <a class="header-anchor" href="#【电脑2】访问共享文件" aria-label="Permalink to &quot;【电脑2】访问共享文件&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">注意：</p><p><strong>这是访问别人共享文件的设置！！！</strong></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：打开控制面板，搜索【凭证】-&gt; 添加Windows凭据</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132321766.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：输入发起文件共享的电脑IP，以及账户和密码</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161408294.png"></p></div><details class="details custom-block"><summary>注意：如果要连接win11系统的电脑，请阅读，否就跳过。</summary><p>如果你连接的电脑是上文中提到的win11系统作为发起共享文件的一方，账户Guest 没有设置密码 <img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161456881.png"></p></details><h2 id="创建桌面快捷方式" tabindex="-1">创建桌面快捷方式 <a class="header-anchor" href="#创建桌面快捷方式" aria-label="Permalink to &quot;创建桌面快捷方式&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">连接发起共享的电脑IP，注意前面加\`双反斜杠\`</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161459076.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">查看对方的打印机设备和共享文件夹</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132323863.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">右键创建桌面快捷方式</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132323677.png"></p></div>`,19);function u(F,b,C,y,_,v){const t=i("ArticleMetadata"),e=i("ClientOnly"),l=i("NolebaseGitContributors"),n=i("NolebaseGitChangelog");return g(),c("div",null,[m,s(e,null,{default:h(()=>[s(t)]),_:1}),d,s(l),s(n)])}const j=p(k,[["render",u]]);export{B as __pageData,j as default};
