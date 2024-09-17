import{_ as k,c as r,R as a,d,a1 as s,L as t,b as c,Z as e,a as g}from"./chunks/framework.nzW5GSPc.js";const f=JSON.parse('{"title":"Linux系统编程2","description":"","frontmatter":{"createTime":"2024/1/25","tag":"C++进阶,面试"},"headers":[],"relativePath":"笔记/C++进阶/Linux系统编程2.md","filePath":"笔记/C++进阶/Linux系统编程2.md","lastUpdated":1716651521000}'),o={name:"笔记/C++进阶/Linux系统编程2.md"};function b(m,i,u,F,y,E){const l=e("ArticleMetadata"),n=e("ClientOnly"),h=e("NolebaseGitContributors"),p=e("NolebaseGitChangelog");return g(),r("div",null,[i[0]||(i[0]=a("h1",{id:"linux系统编程2",tabindex:"-1"},[d("Linux系统编程2 "),a("a",{class:"header-anchor",href:"#linux系统编程2","aria-label":'Permalink to "Linux系统编程2"'},"​")],-1)),s(n,null,{default:t(()=>[s(l)]),_:1}),i[1]||(i[1]=c(`<h2 id="_4-gdb" tabindex="-1">4. GDB <a class="header-anchor" href="#_4-gdb" aria-label="Permalink to &quot;4. GDB&quot;">​</a></h2><ol><li><p>GDB 是由 GNU 软件系统社区提供的调试工具，同 GCC 配套组成了一套完整的开发环境，GDB 是 Linux 和许多类 Unix 系统中的标准开发环境。</p></li><li><p>一般来说，GDB 主要帮助你完成下面四个方面的功能:</p><ul><li><p>启动程序，可以按照自定义的要求随心所欲的运行程序</p></li><li><p>可让被调试的程序在所指定的调置的断点处停住(断点可以是条件表达式)</p></li><li><p>当程序被停住时，可以检查此时程序中所发生的事</p></li><li><p>可以改变程序，将一个 BUG 产生的影响修正从而测试其他 BUG</p></li></ul></li><li><p>通常，在为调试而编译时，我们会()关掉编译器的优化选项(-0)，并打开调试选项(-g)。另外，wa11 在尽量不影响程序行为的情况下选项打开所有 warning，也可以发现许多问题，避免一些不必要的BUG.</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc-g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Wa11</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> program.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> program</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>-g</code> 选项的作用是在可执行文件中加入源代码的信息，比如可执行文件中第几条机器指令对应源代码的第几行，但并不是把整个源文件嵌入到可执行文件中，所以在调试时必须保证 gdb 能找到源文件。</p></li><li><p>GDB命令</p></li></ol><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/ff49b941-3689-4aae-8fcc-15077a51925e.png" style="zoom:67%;"><p>gcc 是专门来编译c++代码的，如果里面引用了c++的一些库，那gcc就不能编译了，需要make 然后 gcc 来执行.o文件</p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/7426c9d4-2477-48d7-9e6e-6e1d47fa1c1f.png" title="" alt="7426c9d4-2477-48d7-9e6e-6e1d47fa1c1f" style="zoom:80%;"><h2 id="_5-静态库和动态库" tabindex="-1">5.静态库和动态库 <a class="header-anchor" href="#_5-静态库和动态库" aria-label="Permalink to &quot;5.静态库和动态库&quot;">​</a></h2><h3 id="_5-1-什么是库" tabindex="-1">5.1 什么是库 <a class="header-anchor" href="#_5-1-什么是库" aria-label="Permalink to &quot;5.1 什么是库&quot;">​</a></h3><ul><li><p>库文件是计算机上的一类文件，可以简单的把库文件看成一种代码仓库，它提供给使用者一些可以直接拿来用的变量、函数或类。</p></li><li><p>库是特殊的一种程序，编写库的程序和编写一般的程序区别不大，只是库不能单独运行。</p></li><li><p>库文件有两种，静态库和动态库(共享库)，区别是:静态库在程序的链接阶段（把多个目标代码，包括静态库代码、启动代码链接成一个可执行程序）被复制到了程序中;动态库在链接阶段没有被复制到程序中，而是程序在运行时由系统动态加载到内存中供程序调用。</p></li><li><p>库的好处:1.代码保密（看不到你的原代码） 2.方便部署和分发</p></li></ul><h3 id="_5-2静态库" tabindex="-1">5.2静态库 <a class="header-anchor" href="#_5-2静态库" aria-label="Permalink to &quot;5.2静态库&quot;">​</a></h3><h4 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Linux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxxx.a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    lib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 前缀（固定）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xxx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 库的名字，自己起</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     .a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 后缀（固定）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">windouws:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxxx.lib</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="静态库的制作" tabindex="-1">静态库的制作 <a class="header-anchor" href="#静态库的制作" aria-label="Permalink to &quot;静态库的制作&quot;">​</a></h4><ol><li><p>gcc 获得.o文件</p></li><li><p>将.o文件打包，使用 ar 工具(archive)</p></li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   //这样就能生成hello.o目标文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rcs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libxxx.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.o</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>r - 将文件插入备存文件中 c - 建立备存文件 s - 索引</strong></p></blockquote><h4 id="_5-2-1命名规则" tabindex="-1">5.2.1命名规则 <a class="header-anchor" href="#_5-2-1命名规则" aria-label="Permalink to &quot;5.2.1命名规则&quot;">​</a></h4><h4 id="_5-2-2分文件项目" tabindex="-1">5.2.2分文件项目： <a class="header-anchor" href="#_5-2-2分文件项目" aria-label="Permalink to &quot;5.2.2分文件项目：&quot;">​</a></h4><ul><li>头文件是函数的声明，源文件是具体函数的实现，main文件是导入头文件用一下。</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/927caa82-0c63-4a47-b1c5-72f769b7b429.png" title="" alt="927caa82-0c63-4a47-b1c5-72f769b7b429" style="zoom:72%;"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/6440a43d-aad8-48ed-a618-1489c01267ee.png" title="" alt="6440a43d-aad8-48ed-a618-1489c01267ee" style="zoom:100%;"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/f64957dc-0843-4b47-a2c5-9c40d282a2f1.png" title="" alt="f64957dc-0843-4b47-a2c5-9c40d282a2f1" style="zoom:80%;"><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> div.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mult.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sub.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //-c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 是编译、汇编源文件，但不进行链接。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 //会把每个文件的.o文件生成</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rcs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libcalc.a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   //所有的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .o文件，生成libcalc.a静态库文件。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/15bec7ae-03ab-451c-a4ed-42aa2ade0067.png" title="" alt="15bec7ae-03ab-451c-a4ed-42aa2ade0067" style="zoom:76%;"><h4 id="_5-2-3-使用静态库文件" tabindex="-1">5.2.3 使用静态库文件 <a class="header-anchor" href="#_5-2-3-使用静态库文件" aria-label="Permalink to &quot;5.2.3 使用静态库文件&quot;">​</a></h4><ul><li>如果别人要使用你这个库，需要头文件 head.h (才知道你有哪些方法)和这个库文件libcalc.a</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/0132dd38-b6ca-4e9f-ad38-eda5e1bef21b.png" title="" alt="0132dd38-b6ca-4e9f-ad38-eda5e1bef21b" style="zoom:80%;"><ul><li><p>如果直接使用，会因找不到 include而报错，因为代码中#include 就是当前目录，需要<code>-I</code> 来指定路径。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../jinclude/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/bbc89353-d6a9-40df-9953-bc3849a5b9da.png" title="" alt="bbc89353-d6a9-40df-9953-bc3849a5b9da" style="zoom:57%;"><ul><li>但也报错了，因为仅找到了 head.h的声明头文件，但是没有找到 具体的实现函数。</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../include/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../lib/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>需要 <code>-o</code> 指定项目名，<code>-I</code> 指定头文件目录，<code>-l</code> 指定项目实现名称，<code>-L</code>指定项目实现路径。</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/01602b2e-a33a-431b-a090-621152788f01.png" title="" alt="01602b2e-a33a-431b-a090-621152788f01" style="zoom:80%;"><h3 id="_5-3动态库" tabindex="-1">5.3动态库 <a class="header-anchor" href="#_5-3动态库" aria-label="Permalink to &quot;5.3动态库&quot;">​</a></h3><p>动态库的制作:</p><ol><li>gcc 得到.0 文件，fpic 得到和位置无关的代码</li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fpic/-fpIc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  b.c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>gcc 得到动态库</li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -shared</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a.o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  b.o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  libcalc.so</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>-o</code> 是指定的生成目标的名称。就生成一个动态库。</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/a9daea0b-0cd5-4d82-9f02-f8828dd6e064.png" title="" alt="a9daea0b-0cd5-4d82-9f02-f8828dd6e064" style="zoom:67%;"><ul><li>目录</li></ul><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/1ed6e4d2-bed9-4aa1-acd1-c8bb06ea8692.png" alt="1ed6e4d2-bed9-4aa1-acd1-c8bb06ea8692" style="zoom:100%;"><ul><li>编译</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/c7d3dea7-c391-49a6-a766-56721b6cb64d.png" title="" alt="c7d3dea7-c391-49a6-a766-56721b6cb64d" style="zoom:61%;"><ul><li>查看缺少的动态库</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/4fc775bd-4776-4eb5-bde4-a7491305468c.png" title="" alt="4fc775bd-4776-4eb5-bde4-a7491305468c" style="zoom:80%;"><ul><li>手动设置动态去绝对路径</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/06e62d29-6601-4dde-89ec-52027e3f5d80.png" title="" alt="06e62d29-6601-4dde-89ec-52027e3f5d80" style="zoom:62%;"><h3 id="_5-4工作原理" tabindex="-1">5.4工作原理 <a class="header-anchor" href="#_5-4工作原理" aria-label="Permalink to &quot;5.4工作原理&quot;">​</a></h3><ul><li><p>静态库:GCC进行链接时，会把静态库中代码打包到可执行程序中（饿汉式加载）</p></li><li><p>动态库:GCC进行链接时，动态库的代码不会被打包到可执行程序中</p></li><li><p>程序启动之后，动态库会被动态加载到内存中（懒加载），通过ldd (list dynamic dependencies) 命令检查动态库依赖关系</p></li><li><p>如何定位共享库文件呢? 当系统加载可执行代码时候，能够知道其所依赖的库的名字，但是还需要知道绝对路径，此时就需要系统的动态载入器来获取该绝对路径。对于 elf格式的可执行程序，是由 ld-inux.so 来完成的，它先后搜索 elf文件的DT_RPATH段 --&gt;环境变量LD_LIBRARY_PATH --&gt;/etc/ld.so.cache 文件列表 --&gt; /ib/，/usr/lib目录找到库文件后将其载入内存。</p></li></ul><blockquote><p>/etc/ 是全局配置环境变量</p><p>/usr/ 是用户级别配置变量</p></blockquote><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LD_LIBRARY  PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$LD_LIBRARY   PATH:/home/nowcoder/Linux/lesson03/04_lib/library/lib</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_5-5区别" tabindex="-1">5.5区别 <a class="header-anchor" href="#_5-5区别" aria-label="Permalink to &quot;5.5区别&quot;">​</a></h3><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/163a2dde-53e9-4717-b7af-bc20e1104ce4.png" alt="163a2dde-53e9-4717-b7af-bc20e1104ce4" style="zoom:67%;"><ul><li>静态库</li></ul><p>在链接阶段就放到应用程序当中了</p><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/33dd9f27-d986-4dfb-84b9-78316b33ea22.png" alt="33dd9f27-d986-4dfb-84b9-78316b33ea22" style="zoom:67%;"><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/fc23de14-bf8e-4cc1-bd24-7941598f8c6a.png" alt="fc23de14-bf8e-4cc1-bd24-7941598f8c6a" style="zoom:80%;"><ul><li>动态库（懒加载）</li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/2417bd49-7a79-4545-9821-c56d34845670.png" title="" alt="2417bd49-7a79-4545-9821-c56d34845670" style="zoom:67%;"><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/1f2c1bb4-7bc2-4fda-9047-956a9fdb066b.png" alt="1f2c1bb4-7bc2-4fda-9047-956a9fdb066b" style="zoom:80%;"><blockquote><p>保存的不是文件，而是库的路径信息。程序运行起来后，才会把加载进来，用到的时候才去。</p><p>热部署快，更新方便。</p></blockquote><h2 id="_6-文件io" tabindex="-1">6. 文件IO <a class="header-anchor" href="#_6-文件io" aria-label="Permalink to &quot;6. 文件IO&quot;">​</a></h2><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/ba63bf4b-e89c-4892-8652-ce87ebcf04d6.png" title="" alt="ba63bf4b-e89c-4892-8652-ce87ebcf04d6" style="zoom:80%;"><h3 id="_6-1标准c库io函数" tabindex="-1">6.1标准C库IO函数 <a class="header-anchor" href="#_6-1标准c库io函数" aria-label="Permalink to &quot;6.1标准C库IO函数&quot;">​</a></h3><blockquote><p>其实用到的就是Linux系统的函数</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/12a9bd67-54a9-431e-b6d4-82f3129095e5.png" title="" alt="12a9bd67-54a9-431e-b6d4-82f3129095e5" style="zoom:80%;"><blockquote><p>*fp 文件指针。通过文件描述符，找到对应的文件。</p><p>通过指针，能操作文件位置。</p><p>通过缓冲区就能找到对应的内存块。</p><p>把缓冲区的内容刷新到文件当中。</p></blockquote><h3 id="_6-2-标准c库io和linux系统io的关系" tabindex="-1">6.2 标准C库IO和Linux系统IO的关系 <a class="header-anchor" href="#_6-2-标准c库io和linux系统io的关系" aria-label="Permalink to &quot;6.2 标准C库IO和Linux系统IO的关系&quot;">​</a></h3><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/e3906e68-7b22-4665-bed1-5de1e575a529.png" title="" alt="e3906e68-7b22-4665-bed1-5de1e575a529" style="zoom:80%;"><ul><li>标准C库里面有缓冲区，然后Linux的api （write\\read） 再从缓冲区里去操作，操作读写。所以操作起来比Linux io的函数效率要高。</li></ul><h3 id="_6-3-虚拟地址空间" tabindex="-1">6.3 虚拟地址空间 <a class="header-anchor" href="#_6-3-虚拟地址空间" aria-label="Permalink to &quot;6.3 虚拟地址空间&quot;">​</a></h3><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/77fb94ad-660f-4bb4-aad1-394bdc904a32.png" title="" alt="77fb94ad-660f-4bb4-aad1-394bdc904a32" style="zoom:67%;"><ul><li><p>当 a.out 运行起来，就是一个进程，进程要分配资源，对于进程来说 ，系统会为他创建虚拟地址空间（虚拟内存空间）。</p></li><li><p>其实 int* 指针的内存地址，其实就是虚拟地址空间来的，并不是真实的物理地址。</p></li><li><p>堆和栈，就是从低到高，和从高到低进行增长的。</p></li><li><p>共享库，就是动态库，环境变量在这里面。</p></li></ul><blockquote><p>有一个静态变量，未初始化在 .bss段，初始化在 .data段。</p><p>堆空间是从低地址到高地址，栈空间是从高地址到低地址。</p></blockquote><h2 id="_6-4-文件描述符" tabindex="-1">6.4 文件描述符 <a class="header-anchor" href="#_6-4-文件描述符" aria-label="Permalink to &quot;6.4 文件描述符&quot;">​</a></h2><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/71f40f28-4991-4b64-8222-f2dee52f6c6e.png" alt="71f40f28-4991-4b64-8222-f2dee52f6c6e" style="zoom:67%;"><ul><li>文件描述符，有一个 PCB 进程控制块，就是一个内存，一个struct 数据结构结构体。Linux中一切皆文件。</li></ul><h3 id="_6-5-linux系统io-函数" tabindex="-1">6.5 Linux系统io 函数 <a class="header-anchor" href="#_6-5-linux系统io-函数" aria-label="Permalink to &quot;6.5 Linux系统io 函数&quot;">​</a></h3><ul><li>Linux系统api，也称系统调用</li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pathname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> flags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //打开一个文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pathname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> flags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mode_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssize_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssize_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">off_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lseek</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">off_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> whence</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pathname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">statbuf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 1stat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pathname, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">statbuf);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>stat 结构体</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stat{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    dev_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   st_dev;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //文件的设备编号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ino_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   st_ino;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 节点</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    穑ode_tst_mode;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//文件的类型和存取的权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    nlink_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st_nlink;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//连到该文件的硬连接数目// 用户I// 组ID//设备文件的设备编号//文件字节数(文件大小)//块大小//块数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    uid_tst_uid;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gid_tst_gid;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dev_tst_rdev;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    off_tst_size;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bksize_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st_blksize;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b1kcnt_t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st_blocks;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_tst_atime;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最后一次访问时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最后一次修改时</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_tst_mtime;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最后一次改变时间(指属性)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">time_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st_ctime;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/011c8fc7-6bc3-42e0-bd31-9b5a147e7953.png" title="" alt="011c8fc7-6bc3-42e0-bd31-9b5a147e7953" style="zoom:67%;"><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,85)),s(n,null,{default:t(()=>[s(l)]),_:1}),i[2]||(i[2]=a("h1",{id:"-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#-1","aria-label":'Permalink to ""'},"​")],-1)),s(n,null,{default:t(()=>[s(l)]),_:1}),s(h),s(p)])}const B=k(o,[["render",b]]);export{f as __pageData,B as default};
