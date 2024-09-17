import{_ as p,c as r,R as t,d as k,a1 as i,L as o,b as c,Z as a,a as g}from"./chunks/framework.nzW5GSPc.js";const E=JSON.parse('{"title":"win11及win10打印机共享最佳实践！！","description":"","frontmatter":{"createTime":"2024/6/16","tag":"桌面运维，打印机共享","outline":[2,3]},"headers":[],"relativePath":"笔记/计算机网络/桌面运维/普通打印机共享.md","filePath":"笔记/计算机网络/桌面运维/普通打印机共享.md","lastUpdated":1718542768000}'),d={name:"笔记/计算机网络/桌面运维/普通打印机共享.md"};function m(F,s,u,C,y,b){const e=a("ArticleMetadata"),n=a("ClientOnly"),l=a("NolebaseGitContributors"),h=a("NolebaseGitChangelog");return g(),r("div",null,[s[0]||(s[0]=t("h1",{id:"win11及win10打印机共享最佳实践",tabindex:"-1"},[k("win11及win10打印机共享最佳实践！！ "),t("a",{class:"header-anchor",href:"#win11及win10打印机共享最佳实践","aria-label":'Permalink to "win11及win10打印机共享最佳实践！！"'},"​")],-1)),i(n,null,{default:o(()=>[i(e)]),_:1}),s[1]||(s[1]=c(`<h2 id="打印机的【电脑1】" tabindex="-1">打印机的【电脑1】 <a class="header-anchor" href="#打印机的【电脑1】" aria-label="Permalink to &quot;打印机的【电脑1】&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">操作：选中专用网络</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161541959.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：桌面 -&gt;【此电脑】 -&gt; 右键【管理】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132317870.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：【本地用户组】 -&gt; 【用户】 -&gt; 右键【新用户】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161345317.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：【账户】-&gt; test , 【密码】-&gt; ha123 ，勾选【账户永不过期】</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161346780.png"></p></div><details class="details custom-block"><summary>注意：如果你是Windows11，点击展开并执行下面步骤，否就跳过。</summary><p>因为win11没有用户组选项。 在桌面新建一个记事本，输入以下代码，保存。将文件后缀改为 <code>.cmd</code> ，右键选管理员权限执行。 》点击下载文件《</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pushd </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%~dp0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ervicing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ackages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">icrosoft-Windows-GroupPolicy-ClientExtensions-Package~3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.mum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">List.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ervicing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ackages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">icrosoft-Windows-GroupPolicy-ClientTools-Package~3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.mum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">List.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f %%i in (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;findstr /i . List.txt 2^&gt;nul&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dism /online /norestart /add-package:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C:\\Windows\\servicing\\Packages\\%%i&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pause</span></span></code></pre></div><ul><li><code>win + R</code>执行<code>control userpasswords2</code>打开，添加账户guest，提高到管理员权限 <img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161449887.png"></li></ul></details><h2 id="连接打印机的【电脑2】" tabindex="-1">连接打印机的【电脑2】 <a class="header-anchor" href="#连接打印机的【电脑2】" aria-label="Permalink to &quot;连接打印机的【电脑2】&quot;">​</a></h2><details class="details custom-block"><summary>点击查看对方【电脑1】的IP</summary><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161557251.png"></details><div class="note custom-block github-alert"><p class="custom-block-title">操作：打开控制面板，搜索【凭证】-&gt; 添加Windows凭据</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406132321766.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">操作：输入发起打印机电脑的IP，以及账户和密码</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161408294.png"></p></div><details class="details custom-block"><summary>注意：如果要连接win11系统的电脑，请阅读，否就跳过。</summary><ul><li>如果你连接的电脑是上文中提到的win11系统作为发起共享文件的一方，账户Guest 没有设置密码 <img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161456881.png"></li></ul></details><div class="note custom-block github-alert"><p class="custom-block-title">连接发起共享的电脑IP，注意前面加\`双反斜杠\`</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161459076.png"></p></div><div class="note custom-block github-alert"><p class="custom-block-title">选择需要连接的打印机设备，双击连接</p><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/202406161618267.png"></p></div>`,13)),i(l),i(h)])}const w=p(d,[["render",m]]);export{E as __pageData,w as default};
