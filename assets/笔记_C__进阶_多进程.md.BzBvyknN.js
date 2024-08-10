import{_ as p,c as s,a3 as e,L as l,R as o,d as n,b as d,a0 as a,a as h}from"./chunks/framework.DOiCuyYX.js";const j=JSON.parse('{"title":"多进程","description":"","frontmatter":{"createTime":"2024/1/25","tag":"C++进阶,面试"},"headers":[],"relativePath":"笔记/C++进阶/多进程.md","filePath":"笔记/C++进阶/多进程.md","lastUpdated":1716471346000}'),u={name:"笔记/C++进阶/多进程.md"},b=o("h1",{id:"多进程",tabindex:"-1"},[n("多进程 "),o("a",{class:"header-anchor",href:"#多进程","aria-label":'Permalink to "多进程"'},"​")],-1),m=d(`<h2 id="_1-基本概念" tabindex="-1">1. 基本概念 <a class="header-anchor" href="#_1-基本概念" aria-label="Permalink to &quot;1. 基本概念&quot;">​</a></h2><h3 id="程序" tabindex="-1">程序 <a class="header-anchor" href="#程序" aria-label="Permalink to &quot;程序&quot;">​</a></h3><p>程序是包含一系列信息的文件，这些信息描述了如何在运行时创建一个进程:</p><ul><li><p>二进制格式标识:每个程序文件都包含用于描述可执行文件格式的元信息。内核利用此信息来解释文件中的其他信息。(ELF可执行连接格式)</p></li><li><p>机器语言指令 : 对程序算法进行编码。</p></li><li><p>程序入口地址 : 标识程序开始执行时的起始指令位置。</p></li><li><p>数据 : 程序文件包含的变量初始值和程序使用的字面量值(比如字符串)。</p></li><li><p>符号表及重定位表 : 描述程序中函数和变量的位置及名称。这些表格有多重用途，其中包括调试和运行时的符号解析(动态链接)。</p></li><li><p>共享库和动态链接信息 : 程序文件所包含的一些字段，列出了程序运行时需要使用的共享库，以及加载共享库的动态连接器的路径名。</p></li><li><p>其他信息 : 程序文件还包含许多其他信息，用以描述如何创建进程。</p></li></ul><h3 id="进程" tabindex="-1">进程 <a class="header-anchor" href="#进程" aria-label="Permalink to &quot;进程&quot;">​</a></h3><ul><li><p>进程是正在运行的程序的实例。是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。</p></li><li><p>告它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元。</p></li><li><p>可以用一个程序来创建多个进程，进程是由内核定义的抽象实体，并为该实体分配用以执行程序的各项系统资源。</p></li><li><p>从内核的角度看，进程由用户内存空间和一系列内核数据结构组成，其中用户内存空间包含了程序代码及代码所使用的变量，而内核数据结构则用于维护进程状态信息。记录在内核数据结构中的信息包括许多与进程相关的标识号(IDs)、虚拟内存表、打开文件的描述符表、信号传递及处理的有关信息、进程资源使用及限制、当前工作目录和大量的其他信息。</p></li><li><p>对于一个单 CPU 系统来说，程序同时处于运行状态只是一种宏观上的念，他们虽然都已经开始运行，但就微观而言，任意时刻，CPU上运行的程序只有一个。</p></li><li><p>在多道程序设计模型中，多个进程轮流使用 CPU。而当下常见CPU 为纳秒级，1秒可以执行大约10 亿条指令。由于人眼的反应速度是毫秒级，所以看似同时在运行。</p></li></ul><h3 id="单道多道程序设计" tabindex="-1">单道多道程序设计 <a class="header-anchor" href="#单道多道程序设计" aria-label="Permalink to &quot;单道多道程序设计&quot;">​</a></h3><ul><li><p>单道程序，即在计算机内存中只允许一个的程序运行。</p></li><li><p>多道程序设计技术是在计算机内存中同时存放几道相互独立的程序，使它们在管理程序控制下，相互穿插运行，两个或两个以上程序在计算机系统中同处于开始到结束之间的状态,这些程序共享计算机系统资源。引入多道程序设计技术的根本目的是为了提高 CPU 的利用率。</p></li><li><p>对于一个单 CPU 系统来说，程序同时处干运行状态只是一种宏观上的概念，他们虽然都已经开始运行，但就微观而言，任意时刻，CPU上运行的程序只有一个。</p></li><li><p>在多道程序设计模型中，多个进程轮流使用CPU。而当下常见CPU为纳秒级，1秒可以执行大约10 亿条指令。由于人眼的反应速度是毫秒级，所以看似同时在运行。</p></li></ul><blockquote><p>一个cpu只能运行一个程序，电脑多个程序运行，其实是多个进程之间执行快速的切换。</p><p>多核cpu就能同时执行多个程序。</p></blockquote><h3 id="并行和并发" tabindex="-1">并行和并发 <a class="header-anchor" href="#并行和并发" aria-label="Permalink to &quot;并行和并发&quot;">​</a></h3><ul><li>并行(parallel):指在同一时刻，有多条指令在多个处理器上同时执行,</li></ul><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/b11c38bb-5c81-47e8-85fd-ab977faaf5ec.png?msec=1706184120546" alt="b11c38bb5c8147e885fdab977faaf5ec" style="zoom:67%;"><ul><li>并发(concurrency):指在同一时刻只能有一条指令执行，但多个进程指令被快速的轮换执行，使得在宏观上具有多个进程同时执行的效果，但在微观上并不是同时执行的，只是把时间分成若干段，使多个进程快速交替的执行。</li></ul><p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/670c918f-9c11-4a96-a4a8-6b0b21c8c717.png?msec=1706184120550" alt="670c918f9c114a96a4a86b0b21c8c717"></p><h3 id="进程控制块-pcb" tabindex="-1">进程控制块（PCB） <a class="header-anchor" href="#进程控制块-pcb" aria-label="Permalink to &quot;进程控制块（PCB）&quot;">​</a></h3><blockquote><p>在内核区。控制进程的相关信息。</p></blockquote><p>为了管理进程，内核必须对每个进程所做的事情进行清楚的描述。内核为每个进程分配一个PCB(ProcessingControl Block)进程控制块，维护进程相关的信息，Linux 内核的进程控制块是 task_struct 结构体。</p><p>在 /usr/src/linux-headers-xxx/include/linux/sched.h 文件中可以査看 struct task_struct 结构体定义。其内部成员有很多，我们只需要掌握以下部分即</p><ul><li><p>进程id : 系统中每个进程有唯一的id，用 pidt类型表示，其实就是一个非负整数</p></li><li><p>进程的状态 : 有就绪、运行、挂起、停止等状态</p></li><li><p>进程切换时需要保存和恢复的一些CPU寄存器</p></li><li><p>描述虚拟地址空间的信息</p></li><li><p>描述控制终端的信息</p></li><li><p>当前工作目录(Current Working Directory)</p></li><li><p>umask 掩码</p></li><li><p>文件描述符表，包含很多指向 file 结构体的指针</p></li><li><p>和信号相关的信息</p></li><li><p>用户 id 和组 id</p></li><li><p>会话（Session）和进程组</p></li><li><p>进程可以使用的资源上限(Resource Limit)</p></li></ul><h2 id="_2-进程的状态" tabindex="-1">2.进程的状态 <a class="header-anchor" href="#_2-进程的状态" aria-label="Permalink to &quot;2.进程的状态&quot;">​</a></h2><p>进程状态反映进程执行过程的变化。这些状态随着进程的执行和外界条件的变化而转换。在三态模型中，进程状态分为三个基本状态，即就绪态，运行态，阻塞态。在五态模型中，进程分为新建态、就绪态，运行态，阻塞态，终止态。</p><ul><li><p>运行态 : 进程占有处理器正在运行</p></li><li><p>就绪态 : 进程具备运行条件，等待系统分配处理器以便运行。当进程已分配到除CPU以外的所有必要资源后只要再获得CPU，便可立即执行。在一个系统中处于就绪状态的进程可能有多个，通常将它们排成一个队列，称为就绪队列</p></li><li><p>阻寨态 : 又称为等待(wait)态或睡眠(sleep)态，指进程不具备运行条件，正在等待某个事件的完成</p></li></ul><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/d774a8a2-4093-4766-9b25-3040f0c6ed93.png?msec=1706184120551" title="" alt="d774a8a2409347669b253040f0c6ed93" style="zoom:80%;"><blockquote><p>cpu没有拿到时间片，就是就绪态，当一个程序取得了时间片，就是取得了执行权。</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/65ce2566-4b4d-4b29-a661-86a561de1abb.png?msec=1706184120551" title="" alt="65ce25664b4d4b29a66186a561de1abb" style="zoom:67%;"><ul><li><p>新建态 : 进程刚被创建时的状态，尚未进入就绪队列</p></li><li><p>终止态 : 进程完成任务到达正常结束点，或出现无法克服的错误而异常终止，或被操作系统及有终止权的进程所终止时所处的状态。进入终止态的进程以后不再执行，但依然保留在操作系统中等待善后。一旦其他进程完成了对终止态进程的信息抽取之后，操作系统将删除该进程。</p></li></ul><h2 id="_3-进程相关指令" tabindex="-1">3.进程相关指令 <a class="header-anchor" href="#_3-进程相关指令" aria-label="Permalink to &quot;3.进程相关指令&quot;">​</a></h2><p><strong>查看进程</strong> ps aux /ajx a:显示终端上的所有进程，包括其他用户的进程 u:显示进程的详细信息 x:显示没有控制终端的进程 j:列出与作业控制相关的信息</p><p>STAT参数意义：</p><h3 id="杀死进程-kill名并不是去杀死一个进程-而是给进程发送某个信号" tabindex="-1">杀死进程 (kill名并不是去杀死一个进程，而是给进程发送某个信号) <a class="header-anchor" href="#杀死进程-kill名并不是去杀死一个进程-而是给进程发送某个信号" aria-label="Permalink to &quot;杀死进程 (kill名并不是去杀死一个进程，而是给进程发送某个信号)&quot;">​</a></h3><pre><code>kill [-signal] pid
kill -l 列出所有信号(信号是进程间通信的方式)
kill -SIGKILL 进程ID
kill -9 进程ID
killall name 根据进程名杀死选程
</code></pre><h2 id="_4-进程号相关函数" tabindex="-1">4.进程号相关函数 <a class="header-anchor" href="#_4-进程号相关函数" aria-label="Permalink to &quot;4.进程号相关函数&quot;">​</a></h2><ul><li><p>每个进程都由进程号来标识，其类型为 pid_t(整型)，进程号的范围:0~32767。进程号总是唯一的，但可以重用。当一个进程终止后，其进程号就可以再次使用。</p></li><li><p>任何进程(除 init 进程)都是由另一个进程创建，该进程称为被创建进程的父进程，对应的进程号称为父进程号(PPID)</p></li><li><p>进程组是一个或多个进程的集合。他们之间相互关联，进程组可以接收同一终端的各种信号，关联的进程有一个进程组号(PGID)。默认情况下，当前的进程号会当做当前的进程组号。</p></li></ul><p>进程号和进程组相关函数: pid_t getpid(void); //获取当前进程的id pid_t getppid(void); //获取当前父进程的id pid_t getpgid(pid_t pid); //获取当前进程的组id</p><h2 id="_5-进程创建" tabindex="-1">5.进程创建 <a class="header-anchor" href="#_5-进程创建" aria-label="Permalink to &quot;5.进程创建&quot;">​</a></h2><p>系统允许一个进程创建新进程，新进程即为子进程，子进程还可以创建新的子进程，形成进程树结构模型。 #include &lt;sys/types.h&gt; #include &lt;unistd.h&gt; pid_t fork(void);</p><p>返回值:    成功 : 子进程中返回0，父进程中返回子进程ID    失败 : 返回-1失败的两个主要原因:    当前系统的进程数已经达到了系统规定的上限，这时errno 的值被设置为 EAGAIN</p><p>系统内存不足，这时 errno 的值被设置为 ENOMEM</p><h3 id="父子进程虚拟地址空间" tabindex="-1">父子进程虚拟地址空间 <a class="header-anchor" href="#父子进程虚拟地址空间" aria-label="Permalink to &quot;父子进程虚拟地址空间&quot;">​</a></h3><table><thead><tr><th><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/a8f025d2-af07-4083-b9ec-9994c61a4eb1.png" title="" alt="a8f025d2af074083b9ec9994c61a4eb1" style="zoom:200%;"></th><th>实际上，更准确来说，Linux 的 fork() 使用是通过写时拷贝(copy-on-write)实现。写时拷贝是一种可以推迟甚至避免拷贝数据的技术。内核此时并不复制整个进程的地址空间，而是让父子进程共享同一个地址空间。只用在需要写入的时候才会复制地址空间，从而使各个进行拥有各自的地址空间。也就是说，资源的复制是在需要写入的时候才会进行，在此之前，只有以只读方式共享。<br><br><br><br>注意:fork之后父子进程共享文件，fork产生的子进程与父进程相同的文件文件描述符指向相同的文件表，引用计数增加，共享文件偏移指针。</th></tr></thead></table><blockquote><p><code>写</code>数据的时候，他会<code>fork </code>复制一份数据，创建一个子进程（返回值大于0 就是子进程），建立新地址。<code>读</code>的时候是<code>共享</code>同一片空间。</p></blockquote><h2 id="_6-excec函数族介绍" tabindex="-1">6.excec函数族介绍 <a class="header-anchor" href="#_6-excec函数族介绍" aria-label="Permalink to &quot;6.excec函数族介绍&quot;">​</a></h2><p>exec 函数族的作用是根据指定的文件名找到可执行文件，并用它来取代调用进程的内容，换句话说，就是在调用进程内部执行一个可执行文件。</p><p>exec 函数族的函数执行成功后不会返回，因为调用进程的实体，包括代码段，数据段和堆栈等都已经被新的内容取代，只留下进程 ID等一些表面上的信息仍保持原样，颇有些神似“三十六计”中的&quot;金蝉脱壳&quot;。看上去还是旧的躯壳，却已经注入了新的灵魂。只有调用失败了，它们才会返回-1，从原程序的调用点接着往下执行。</p><h2 id="_7-进程控制" tabindex="-1">7.进程控制 <a class="header-anchor" href="#_7-进程控制" aria-label="Permalink to &quot;7.进程控制&quot;">​</a></h2><pre><code>#include &lt;stdlib.h&gt;
void exit(int status);    //标准c库的api
#include &lt;unistd.h&gt;
void _exit(int status);    //linux的api
</code></pre><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/c8d24bc0-e62d-40f8-8654-53c8a345042b.png?msec=1706184120554" title="" alt="c8d24bc0e62d40f8865453c8a345042b" style="zoom:80%;"><h3 id="孤儿进程" tabindex="-1">孤儿进程 <a class="header-anchor" href="#孤儿进程" aria-label="Permalink to &quot;孤儿进程&quot;">​</a></h3><p>父进程运行结束，但子进程还在运行(未运行结束)，这样的子进程就称为孤儿进程(0rphan Process)每当出现一个孤儿进程的时候，内核就把孤儿进程的父进程设置为init ，而 init 进程会循环地 wait() （调用wait结束资源）它的已经退出的子进程。这样，当一个孤儿进程凄凉地结束了其生命周期的时候，init 进程就会代表党和政府出面处理它的一切善后工作。因此孤儿进程并不会有什么危害。</p><blockquote><p>孤儿进程完后，他的爸爸会编程init 进程，父进程号为1，父进程会结束子进程的资源。</p><p>用户区自己的数据可以自己释放，但内核区的数据，需要父进程对其进行释放。</p><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/9f59e7b7-7129-453d-aa88-5b41d6904c6b.png" alt="9f59e7b77129453daa885b41d6904c6b" style="zoom:67%;"></blockquote><h3 id="僵尸进程" tabindex="-1">僵尸进程 <a class="header-anchor" href="#僵尸进程" aria-label="Permalink to &quot;僵尸进程&quot;">​</a></h3><p>每个进程结束之后,都会释放自己地址空间中的用户区数据，内核区的 PCB 没有办法自己释放掉，需要父进程去释放。进程终止时，父进程尚未回收，子进程残留资源(PCB)存放于内核中，变成僵尸(Zombie)进程，僵尸进程不能被 kill -9 杀死，这样就会导致一个问题，如果父进程不调用 wait0) 或 waitpid0) 的话，那么保留的那段信息就不会释放，其进程号就会一直被占用，但是系统所能使用的进程号是有限的，如果大量的产生僵尸进程将因为没有可用的进程号而导致系统不能产生新的进程，此即为僵尸进程的危害，应当避免。</p><h3 id="进程回收" tabindex="-1">进程回收 <a class="header-anchor" href="#进程回收" aria-label="Permalink to &quot;进程回收&quot;">​</a></h3><p>在每个进程退出的时候，内核释放该进程所有的资源、包括打开的文件、占用的内存等。但是仍然为其保留一定的信息，这些信息主要主要指进程控制块PCB的信息(包括进程号、退出状态、运行时间等)。</p><p>父进程可以通过调用 wait 或 waitpid 得到它的退出状态同时彻底清除掉这个进程。</p><p>wait()和 waitpid0) 函数的功能一样，区别在于，wait0)函数会阻塞，waitpid()可以设置不阻塞，waitpid()还可以指定等待哪个子进程结束。</p><p>注意:-次 wait 或 waitpid 调用只能清理一个子进程，清理多个子进程应使用循环。</p><h2 id="_8-进程间通信" tabindex="-1">8. 进程间通信 <a class="header-anchor" href="#_8-进程间通信" aria-label="Permalink to &quot;8. 进程间通信&quot;">​</a></h2><h3 id="进程间通讯概念" tabindex="-1">进程间通讯概念 <a class="header-anchor" href="#进程间通讯概念" aria-label="Permalink to &quot;进程间通讯概念&quot;">​</a></h3><p>进程是一个独立的资源分配单元，不同进程(这里所说的进程通常指的是用户进程)之间的资源是独立的，没有关联，不能在一个进程中直接访问另一个进程的资源。但是，进程不是孤立的，不同的进程需要进行信息的交互和状态的传递等，因此需要进程间通信(IPC:InterProcesses communication ).</p><p>进程间通信的目的:</p><ul><li><p>数据传输:一个进程需要将它的数据发送给另一个进程。</p></li><li><p>通知事件:一个进程需要向另一个或一组进程发送消息，通知它(它们)发生了某种事件(如进程终止时要通知父进程)。</p></li><li><p>资源共享:多个进程之间共享同样的资源。为了做到这一点，需要内核提供互斥和同步机制。</p></li><li><p>进程控制:有些进程希望完全控制另一个进程的执行(如 Debug进程)，此时控制进程希望能够拦截另一个进程的所有陷入和异常，并能够及时知道它的状态改变。</p></li></ul><p>Linux进程间通信的方式</p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/2c3a93ea-072f-4335-bc1d-16ecafc8567a.png" title="" alt="2c3a93ea072f4335bc1d16ecafc8567a" style="zoom:80%;"><blockquote><p>socket 是网络通信的。</p></blockquote><h3 id="匿名管道-管道" tabindex="-1">匿名管道（管道） <a class="header-anchor" href="#匿名管道-管道" aria-label="Permalink to &quot;匿名管道（管道）&quot;">​</a></h3><p>管道也叫无名(匿名)管道，它是是 UNI 系统 IPC(进程间通信)的最古老形式，所有的 UNX 系统都支持这种通信机制。统计一个目录中文件的数目命令:ls|wc -l，为了执行该命令，shell 创建了两个进程来分别执行|s 和 wc。</p><blockquote><p>| 管道符，把执行ls 生成的内容，把数据交给 wc -l，去进行一个统计。</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/417dd249-b374-4245-bd66-f278711bbf8a.png" title="" alt="417dd249b3744245bd66f278711bbf8a" style="zoom:80%;"><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/6102af89-0070-4bbf-9593-55ca1a7d1c12.png" alt="6102af8900704bbf959355ca1a7d1c12" style="zoom:80%;"><h3 id="管道的特点" tabindex="-1">管道的特点 <a class="header-anchor" href="#管道的特点" aria-label="Permalink to &quot;管道的特点&quot;">​</a></h3><ul><li><p>管道其实是一个在内核内存中维护的<code>缓冲区</code>，这个缓冲区的存储能力是有限的，不同的操作系统大小不一定相同。</p></li><li><p>管道拥有文件的特质:读操作、写操作，匿名管道没有文件实体，有名管道有文件实体，但不存储数据。可以按照操作文件的方式对管道进行操作。</p></li><li><p>一个管道是一个字节流，使用管道时不存在消息或者消息边界的概念，从管道读取数据的进程可以读取任意大小的数据块，而不管写入进程写入管道的数据块的大小是多少。</p></li><li><p>通过管道传递的数据是顺序的，从管道中读取出来的字节的顺序和它们被写入管道的顺序是完全一样的。</p></li><li><p>在管道中的数据的传递方向是单向的，一端用于写入，一端用于读取，管道是半双工的。</p></li><li><p>从管道读数据是一次性操作，数据一旦被读走，它就从管道中被抛弃，释放空间以便写更多的数据，在管道中无法使用 lseek0 来随机的访问数据。</p></li><li><p>匿名管道只能在具有公共祖先的进程(父进程与子进程，或者两个兄弟进程，具有亲缘关系)之间使用。</p></li></ul><blockquote><p>单工，独木桥</p><p>双工，两车道</p><p>半双工，两边通过一个管道，作为桥梁</p></blockquote><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/395f8f87-6043-48df-8ca9-c00d189613af.png" title="" alt="395f8f87604348df8ca9c00d189613af" style="zoom:80%;"><h3 id="内存映射" tabindex="-1">内存映射 <a class="header-anchor" href="#内存映射" aria-label="Permalink to &quot;内存映射&quot;">​</a></h3><p>内存映射(Memory-mapped l/0)是将磁盘文件的数据映射到内存，用户通过修改内存就能修改磁盘文件。</p><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/659ef785-9d0a-409a-9459-0a633699b00d.png" alt="659ef7859d0a409a94590a633699b00d" style="zoom:80%;"><h3 id="信号" tabindex="-1">信号 <a class="header-anchor" href="#信号" aria-label="Permalink to &quot;信号&quot;">​</a></h3><p>信号是 Linux 进程间通信的最古老的方式之一，是事件发生时对进程的通知机制，有时也称之为软件中断，它是在软件层次上对中断机制的一种模拟，是一种异步通信的方式。信号可以导致一个正在运行的进程被另一个正在运行的异步进程中断，转而处理某一个突发事件。</p><p>发往进程的诸多信号，通常都是源于内核。引发内核为进程产生信号的各类事件如下:</p><ul><li><p>对于前台进程，用户可以通过输入特殊的终端字符来给它发送信号。比如输入Ctr1+C通常会给进程发送一个中断信号。</p></li><li><p>硬件发生异常，即硬件检测到一个错误条件并通知内核，随即再由内核发送相应信号给相关进程。比如执行一条异常的机器语言指令，诸如被0除，或者引用了无法访问的内存区域。</p></li><li><p>系统状态变化，比如 alarm 定时器到期将引起 SIGALRM 信号，进程执行的 CPU 时间超限，或者该进程的某个子进程退出。</p></li><li><p>运行 kill 命令或调用 kill 函数。</p></li></ul><p>使用信号的两个主要目的是 :</p><ul><li><p>让进程知道已经发生了一个特定的事情。</p></li><li><p>强迫进程执行它自己代码中的信号处理程序。</p></li></ul><p>信号的特点:</p><ul><li><p>简单</p></li><li><p>不能携带大量信息</p></li><li><p>满足某个特定条件才发送</p></li><li><p>优先级比较高</p></li></ul><p>查看系统定义的信号列表:kil -l前 31 个信号为常规信号，其余为实时信号</p><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/16abd3a9-eeab-475d-a10d-4599285c927f.png" alt="16abd3a9eeab475da10d4599285c927f" style="zoom:67%;"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/7d5706ee-dda4-4908-9996-49ac947da04c.png" title="" alt="7d5706eedda44908999649ac947da04c" style="zoom:80%;"><h4 id="信号的-5-种默认处理动作" tabindex="-1">信号的 5 种默认处理动作 <a class="header-anchor" href="#信号的-5-种默认处理动作" aria-label="Permalink to &quot;信号的 5 种默认处理动作&quot;">​</a></h4><p>查看信号的详细信息:man7signal信号的 5 中默认处理动作</p><ul><li><p>Term 终止进程</p></li><li><p>lgn 当前进程忽略掉这个信号</p></li><li><p>Core终止进程，并生成一个Core文件</p></li><li><p>Stop 暂停当前进程</p></li><li><p>Cont 继续执行当前被暂停的进程</p></li></ul><p>信号的几种状态 : <code>产生、未决、递达</code></p><p>SIGKILL 和 SIGSTOP 信号不能被捕捉、阻塞或者忽略，只能执行默认动作。</p><h3 id="信号相关的函数-重要" tabindex="-1">信号相关的函数（重要） <a class="header-anchor" href="#信号相关的函数-重要" aria-label="Permalink to &quot;信号相关的函数（重要）&quot;">​</a></h3><pre><code>int ki11(pid_t pid, int sig);
int raise(int sig);
void abort(void);
unsigned int alarm(unsigned int seconds);
int setitimer(int which, const struct itimerval *new_val, struct itimerval &quot;old_value);
</code></pre><h4 id="信号捕获函数" tabindex="-1">信号捕获函数 <a class="header-anchor" href="#信号捕获函数" aria-label="Permalink to &quot;信号捕获函数&quot;">​</a></h4><pre><code>sighandler_t signal(int signum, sighandler_t handler);
int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
</code></pre><h4 id="信号集" tabindex="-1">信号集 <a class="header-anchor" href="#信号集" aria-label="Permalink to &quot;信号集&quot;">​</a></h4><p>许多信号相关的系统调用都需要能表示一组不同的信号，多个信号可使用一个称之为信号集的数据结构来表示，系统数据类型为 sigset_t。</p><p>在 PCB 中有两个非常重要的信号集。一个称之为“阻塞信号集”，另一个称之为“未决信号集”。这两个信号集都是内核使用位图机制来实现的。但操作系统不允许我们直接对这两个信号集进行位操作。而需自定义另外一个集合，借助信号集操作函数来对 PCB 中的这两个信号集进行修改。</p><p>信号的“未决”是一种状态，指的是从信号的产生到信号被处理前的这一段时间,</p><p>信号的“阻塞”是一个开关动作，指的是阻止信号被处理，但不是阻止信号产生。信号的阻塞就是让系统暂时保留信号留待以后发送。由于另外有办法让系统忽路信号，所以一般情况下信号的阻塞口早新时的，只是暂时的，只是为了防止信号打断敏感的操作。</p><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/1b0287d1-9f6d-463a-95fc-3d21316b0031.png" title="" alt="1b0287d19f6d463a95fc3d21316b0031" style="zoom:67%;"><h4 id="信号集相关操作函数" tabindex="-1">信号集相关操作函数： <a class="header-anchor" href="#信号集相关操作函数" aria-label="Permalink to &quot;信号集相关操作函数：&quot;">​</a></h4><pre><code>int sigemptyset(sigset_t *set);    //信号集全部置为0
int sigfi11set(sigset_t *set);    //信号集全部置为1
int sigaddset(sigset_t *set,int signum);    //指定信号置为1
int sigdelset(sigset_t*set, int signum);    //删除一个信号，置为0
int sigismember(const sigset_t*set, int signum);
int sigprocmask(int how, const sigset_t*set, sigset_t *oldset);
int sigpending(sigset_t*set);
</code></pre><h4 id="内核实现信号捕捉的过程" tabindex="-1">内核实现信号捕捉的过程 <a class="header-anchor" href="#内核实现信号捕捉的过程" aria-label="Permalink to &quot;内核实现信号捕捉的过程&quot;">​</a></h4><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/bd6b1513-8cee-478f-a430-0264431c936b.png" title="" alt="bd6b15138cee478fa4300264431c936b" style="zoom:80%;"><h4 id="sigchild信号" tabindex="-1">SIGCHILD信号 <a class="header-anchor" href="#sigchild信号" aria-label="Permalink to &quot;SIGCHILD信号&quot;">​</a></h4><p>SIGCHLD信号产生的条件</p><ul><li><p>子进程终止时</p></li><li><p>子进程接收到 SIGSTOP 信号停止时</p></li><li><p>子进程处在停止态，接受到SIGCONT后唤醒时以上三种条件都会给父进程发送 SIGCHLD 信号，父进程默认会忽略该信号</p></li></ul><h3 id="共享内存" tabindex="-1">共享内存 <a class="header-anchor" href="#共享内存" aria-label="Permalink to &quot;共享内存&quot;">​</a></h3><p>共享内存允许两个或者多个进程共享物理内存的同一块区域(通常被称为段)。由于一个共享内存段会称为一个进程用户空间的一部分，因此这种 IPC机制无需内核介入。所有需要做的就是让一个进程将数据复制进共享内存中，并且这部分数据会对其他所有共享同一个段的进程可用。</p><p>与管道等要求发送进程将数据从用户空间的缓冲区复制进内核内存和接收进程将数据从内核内存复制进用户空间的缓冲区的做法相比，这种 IPC技术的速度更快。</p><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/818ecf32-eab3-4988-b7b0-651d83329256.png" alt="" style="zoom:67%;"><blockquote><p>返回一个指针，就是内存地址，</p></blockquote><h4 id="使用步骤" tabindex="-1">使用步骤 <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤&quot;">​</a></h4><ul><li><p>调用 shmget() 创建一个新共享内存段或取得一个既有共享内存段的标识符 (即由其他进程创建的共享内存段)。这个调用将返回后续调用中需要用到的共享内存标识符。</p></li><li><p>使用 shmat() 来附上共享内存段，即使该段成为调用进程的虚拟内存的一部分。此刻在程序中可以像对待其他可用内存那样对待这个共享内存段。为引用这块共享内存，程序需要使用由shmat()</p></li><li><p>调用返回的 addr 值，它是一个指向进程的虚拟地址空间中该共享内存段的起点的指针。</p></li><li><p>调用 shmdt() 来分离共享内存段。在这个调用之后，进程就无法再引用这块共享内存了。这一步是可选的，并且在进程终止时会自动完成这一步。</p></li><li><p>调用 shmctl() 来删除共享内存段。只有当当前所有附加内存段的进程都与之分离之后内存段才会销毁。只有一个进程需要执行这一步。</p></li></ul><blockquote><ol><li><p>在物理内存中开辟一段空间（共享内存段），</p></li><li><p>假如有两个进程要通信了，进程与空间相关联，</p></li><li><p>对共享内存进行通信，</p></li><li><p>通信完释放共享内存数据。</p></li></ol></blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>共享内存比内存映射更优秀。</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h4 id="举个例子" tabindex="-1">举个例子： <a class="header-anchor" href="#举个例子" aria-label="Permalink to &quot;举个例子：&quot;">​</a></h4><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/2a59567b-1d32-4909-8310-5f08e700c876.png" title="" alt="2a59567b1d32490983105f08e700c876" style="zoom:80%;"><ul><li>访问了非法的内存</li></ul><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/6e566ceb-8240-4034-8e87-30c4ef41b6a1.png" alt="6e566ceb824040348e8730c4ef41b6a1" style="zoom:80%;"><h4 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h4><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/61681daf-d22f-45d2-82c5-c6d7fdc5de5a.png" title="" alt="61681dafd22f45d282c5c6d7fdc5de5a" style="zoom:80%;"><img src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/db39193d-bbd4-45a0-a08b-9b6816ce1f31.png" title="" alt="db39193dbbd445a0a08b9b6816ce1f31" style="zoom:80%;"><img title="" src="https://gitee.com/zhangjunjiee/article-images/raw/master/images/b6f1a12e-1729-4269-a669-9782d824fcb2.png" alt="b6f1a12e17294269a6699782d824fcb2" style="zoom:53%;"><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,128);function g(f,q,k,_,P,x){const i=a("ArticleMetadata"),t=a("ClientOnly"),c=a("NolebaseGitContributors"),r=a("NolebaseGitChangelog");return h(),s("div",null,[b,e(t,null,{default:l(()=>[e(i)]),_:1}),m,e(t,null,{default:l(()=>[e(i)]),_:1}),e(c),e(r)])}const w=p(u,[["render",g]]);export{j as __pageData,w as default};
