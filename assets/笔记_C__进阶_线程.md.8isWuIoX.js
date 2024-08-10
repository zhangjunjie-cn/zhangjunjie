import{_ as n,c as l,a3 as i,L as k,R as a,d as r,b as d,a0 as s,a as o}from"./chunks/framework.DOiCuyYX.js";const f=JSON.parse('{"title":"线程","description":"","frontmatter":{"createTime":"2024/1/25","tag":"C++进阶,面试"},"headers":[],"relativePath":"笔记/C++进阶/线程.md","filePath":"笔记/C++进阶/线程.md","lastUpdated":1716471346000}'),g={name:"笔记/C++进阶/线程.md"},c=a("h1",{id:"线程",tabindex:"-1"},[r("线程 "),a("a",{class:"header-anchor",href:"#线程","aria-label":'Permalink to "线程"'},"​")],-1),E=d(`<ol><li><h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3></li></ol><p>与进程(process)类似，线程(thread)是允许应用程序并发执行多个任务的一种机制。一个进程可以包含多个线程。同一个程序中的所有线程均会独立执行相同程序，且共享同一份全局内存区域，其中包括初始化数据段、未初始化数据段，以及堆内存段。(传统意义上的 UNIX进程只是多线程程序的一个特例，该进程只包含一个线程）。</p><p>进程是 CPU 分配资源的最小单位，线程是操作系统调度执行的最小单位。</p><p>线程是轻量级的进程(LWP:Light Weight Process)，在 Linux 环境下线程的本质仍是进程。</p><p>查看指定进程的 LWP 号: ps -Lf pid</p><h3 id="进程和线程的区别" tabindex="-1">进程和线程的区别 <a class="header-anchor" href="#进程和线程的区别" aria-label="Permalink to &quot;进程和线程的区别&quot;">​</a></h3><p>进程间的信息难以共享。由于除去只读代码段外，父子进程并未共享内存，因此必须采用一些进程间通信方式，在进程间进行信息交换。</p><p>调用 fork0) 来创建进程的代价相对较高，即便利用写时复制技术，仍然需要复制诸如内存页表和文件描述符表之类的多种进程属性，这意味着 fork0) 调用在时间上的开销依然不菲。</p><p>线程之间能够方便、快速地共享信息。只需将数据复制到共享(全局或堆)变量中即可。</p><p>创建线程比创建进程通常要快 10 倍甚至更多。线程间是共享虚拟地址空间的，无需采用写时复制来复制内存，也无需复制页表。</p><blockquote><p>进行时复制虚拟地址空间的，线程是共享一个的。</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/7273090e-a957-41a4-8d4f-f2f909f58d71.png" title="" alt="7273090ea95741a48d4ff2f909f58d71" style="zoom:67%;"><h3 id="线程之间共享和非共享资源" tabindex="-1">线程之间共享和非共享资源 <a class="header-anchor" href="#线程之间共享和非共享资源" aria-label="Permalink to &quot;线程之间共享和非共享资源&quot;">​</a></h3><p>共享资源</p><ul><li><p>进程 ID 和父进程 ID</p></li><li><p>进程组 ID 和会话ID</p></li><li><p>用户ID 和 用户组 ID</p></li><li><p>文件描述符表</p></li><li><p>信号处置</p></li><li><p>文件系统的相关信息:文件权限掩码(umask)、当前工作目录</p></li><li><p>虚拟地址空间(除栈、.text段)</p></li></ul><p>非共享资源</p><ul><li><p>线程 ID</p></li><li><p>信号掩码</p></li><li><p>线程特有数据</p></li><li><p>error 变量</p></li><li><p>实时调度策略和优先级</p></li><li><p>栈，本地变量和函数的调用链接信息</p></li></ul><h3 id="nptl" tabindex="-1">NPTL <a class="header-anchor" href="#nptl" aria-label="Permalink to &quot;NPTL&quot;">​</a></h3><p>当 Linux 最初开发时，在内核中并不能真正支持线程。但是它的确可以通过 clone() 系统调用将进程作为可调度的实体。这个调用创建了调用进程(caling process)的一个拷贝，这个拷贝与调用进程共享相同的地址空间。</p><p>LinuxThreads 项目使用这个调用来完成在用户空间模拟对线程的支持。不幸的是，这种方法有一些缺点，尤其是在信号处理、调度和进程间同步等方面都存在问题。另外，这个线程模型也不符合POSIX的要求。</p><p>要改进 LinuxThreads，需要内核的支持，并且重写线程库，有两个相互竞争的项目开始来满足这些要求。一个包括 IBM 的开发人员的团队开展了NGPT(Next-GenerationPOSIXThreads)项目。同时，Red Hat的一些开发人员开展了 NPTL项目。NGPT在2003年中期被放弃了，把这个领域完全留给了NPTL。</p><p>NPTL，或称为 Native POSIXThread Library，是 Linux 线程的一个新实现，它克服了 LinuxThreads 的缺点，同时也符合 POSIX的需求。与 LinuxThreads 相比，它在性能和稳定性方面都提供了重大的改进。查看当前 pthread 库版本:getconfGNU LIBPTHREAD_VERSION</p><blockquote><p>所以我们使用的线程，是别人开发好了的线程库，所以在使用的时候需要加 <code>-l</code> 去指定库的名字</p><p><code>-l pthread</code>。</p></blockquote><h3 id="_2-线程操作函数" tabindex="-1">2. 线程操作函数 <a class="header-anchor" href="#_2-线程操作函数" aria-label="Permalink to &quot;2. 线程操作函数&quot;">​</a></h3><p>线程属性相关</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pthread_attr_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start_routine)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)，</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> tl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> t2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">retval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">retva1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_detach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_cancel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>线程属性类型</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_attr_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pthread </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attr_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_attr_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_attr_destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_attr_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_attr_getdetachstate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pthread_attr_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">detachstate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_attr_setdetachstate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_attr_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> detachstate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p></p><h3 id="_3-线程同步-重要" tabindex="-1">3.线程同步（重要） <a class="header-anchor" href="#_3-线程同步-重要" aria-label="Permalink to &quot;3.线程同步（重要）&quot;">​</a></h3><p><strong>简介</strong></p><p>线程的主要优势在于，能够通过全局变量来共享信息。不过，这种便捷的共享是有代价的:必须确保多个线程不会同时修改同一变量，或者某一线程不会读取正在由其他线程修改的变量。</p><p><u><code>临界区</code>是指访问某一共享资源的代码片段</u>，并且这段代码的执行应为原子操作，也就是同时访问同一共享资源的其他线程不应终端该片段的执行。</p><p>线程同步 : 即当有一个线程在对内存进行操作时，其他线程都不可以对这个内存地址进行操作，直到该线程完成操作，其他线程才能对该内存地址进行操作，而其他线程则处于等待状态。</p><blockquote><p>为什么要有线程同步？</p><p>一个读数据，一个写数据，会有数据安全的问题。</p></blockquote><p><strong>互斥量</strong> (互斥锁)</p><p>为避免线程更新共享变量时出现问题，可以使用互斥量(mutex是mutualexclusion的缩写)来确保同时仅有一个线程可以访问某项共享资源。可以使用互斥量来保证对任意共享资源的原子访问。</p><p>互斥量有两种状态:已锁定(locked)和未锁定(unlocked)。任何时候，至多只有一个线程可以锁定该互斥量。试图对已经锁定的某一互斥量再次加锁，将可能阻塞线程或者报错失败，具体取决于加锁时使用的方法。一旦线程锁定互斥量，随即成为该互斥量的所有者，只有所有者才能给互斥量解锁。一般情况下，对每一共享资源(可能由多个相关变量组成)会使用不同的互斥量，每一线程在访问同一资源时将采用如下协议:</p><ul><li>针对共享资源锁定互斥量</li><li>访问共享资源</li><li>对互斥量解锁</li></ul><p>如果多个线程试图执行这一块代码(一个临界区)，事实上只有一个线程能够持有该互斥量(其他线程将遭到阻塞)，即同时只有一个线程能够进入这段代码区域，如下图所示:</p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/5c9e0ac0-edb3-4bf7-ac93-3e92122fea92.png" title="" alt="5c9e0ac0edb34bf7ac933e92122fea92" style="zoom:80%;"><h3 id="死锁" tabindex="-1">死锁 <a class="header-anchor" href="#死锁" aria-label="Permalink to &quot;死锁&quot;">​</a></h3><p>有时，一个线程需要同时访问两个或更多不同的共享资源，而每个资源又都由不同的互斥量管理。当超过一个线程加锁同一组互斥量时，就有可能发生死锁。</p><p>两个或两个以上的进程在执行过程中，因争夺共享资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。此时称系统处于死锁状态或系统产生了死锁。</p><p>死锁的几种场景:</p><ul><li><p>忘记释放锁</p></li><li><p>重复加锁</p></li><li><p>多线程多锁，抢占锁资源</p></li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/91c91047-1371-4bd6-9c5c-02089a3eb871.png" title="" alt="91c9104713714bd69c5c02089a3eb871" style="zoom:80%;"><h3 id="生产者消费者模型" tabindex="-1">生产者消费者模型 <a class="header-anchor" href="#生产者消费者模型" aria-label="Permalink to &quot;生产者消费者模型&quot;">​</a></h3><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/1844f06c-79ba-49b5-8e5c-a1f6ea45934d.png" title="" alt="1844f06c79ba49b58e5ca1f6ea45934d" style="zoom:67%;"><h3 id="读写锁" tabindex="-1">读写锁 <a class="header-anchor" href="#读写锁" aria-label="Permalink to &quot;读写锁&quot;">​</a></h3><p>当有一个线程已经持有互斥锁时，互斥锁将所有试图进入临界区的线程都阻塞住。但是考虑一种情形，当前持有互斥锁的线程只是要读访问共享资源，而同时有其它几个线程也想读取这个共享资源，但是由于互斥锁的排它性，所有其它线程都无法获取锁，也就无法读访问共享资源了，但是实际上多个线程同时读访问共享资源并不会导致问题。</p><p>在对数据的读写操作中，更多的是读操作，写操作较少，例如对数据库数据的读写应用。为了满足当前能够允许多个读出，但只允许一个写入的需求，线程提供了读写锁来实现。读写锁的特点:</p><ul><li><p>如果有其它线程读数据，则允许其它线程执行读操作，但不允许写操作。</p></li><li><p>如果有其它线程写数据，则其它线程都不允许读、写操作。</p></li><li><p>写是独占的，写的优先级高。</p></li></ul>`,53);function y(F,u,b,_,m,A){const t=s("ArticleMetadata"),e=s("ClientOnly"),h=s("NolebaseGitContributors"),p=s("NolebaseGitChangelog");return o(),l("div",null,[c,i(e,null,{default:k(()=>[i(t)]),_:1}),E,i(h),i(p)])}const B=n(g,[["render",y]]);export{f as __pageData,B as default};
