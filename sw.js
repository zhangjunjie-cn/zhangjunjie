if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-683c2783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"56d05caf46123e6c4225ca5581b2baeb"},{url:"assets/app.B--u-mMI.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.DsSDP09E.js",revision:null},{url:"assets/chunks/framework.CoH9Gi6Y.js",revision:null},{url:"assets/chunks/index.BNnYFWcz.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.BvY9_6nW.js",revision:null},{url:"assets/docs_index.md.NZgdSYl2.js",revision:null},{url:"assets/docs_index.md.NZgdSYl2.lean.js",revision:null},{url:"assets/hengan_print.md.BWp1lIg0.js",revision:null},{url:"assets/hengan_print.md.BWp1lIg0.lean.js",revision:null},{url:"assets/hengan_share.md.3IowVXAw.js",revision:null},{url:"assets/hengan_share.md.3IowVXAw.lean.js",revision:null},{url:"assets/image.CPMGMrSV.png",revision:null},{url:"assets/index.md.C3I7qLLi.js",revision:null},{url:"assets/index.md.C3I7qLLi.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/nav_计算机网络_index.md.DTv4ElTp.js",revision:null},{url:"assets/nav_计算机网络_index.md.DTv4ElTp.lean.js",revision:null},{url:"assets/nav_运维_index.md.B0agD4Mv.js",revision:null},{url:"assets/nav_运维_index.md.B0agD4Mv.lean.js",revision:null},{url:"assets/nav.md.Bly8oLIU.js",revision:null},{url:"assets/nav.md.Bly8oLIU.lean.js",revision:null},{url:"assets/style.01m0Ya4G.css",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.swyKi90F.js",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.swyKi90F.lean.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.BdKUGNyV.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.BdKUGNyV.lean.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.CmWpAiFd.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.CmWpAiFd.lean.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.XYzunGLb.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.XYzunGLb.lean.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.2_xxGkYr.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.2_xxGkYr.lean.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.B4nGW6pb.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.B4nGW6pb.lean.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.DdhZ8DrQ.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.DdhZ8DrQ.lean.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.Bc0C7gyy.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.Bc0C7gyy.lean.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.Cm0mKbgN.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.Cm0mKbgN.lean.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.Dhgt_ATj.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.Dhgt_ATj.lean.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.nrQfGXsX.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.nrQfGXsX.lean.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.DYd00gqf.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.DYd00gqf.lean.js",revision:null},{url:"assets/博客_2024_08_08第六版博客发布.md.tWXh1HV4.js",revision:null},{url:"assets/博客_2024_08_08第六版博客发布.md.tWXh1HV4.lean.js",revision:null},{url:"assets/博客_index.md.B7Xdf9pL.js",revision:null},{url:"assets/博客_index.md.B7Xdf9pL.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.SOCPZcDl.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.SOCPZcDl.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.CxFd9gt5.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.CxFd9gt5.lean.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.BVePXNV2.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.BVePXNV2.lean.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.mWCF9cem.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.mWCF9cem.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.CYl1OJaw.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.CYl1OJaw.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.BaaHDkDa.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.BaaHDkDa.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.BWuZNGAX.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.BWuZNGAX.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.BMupChgg.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.BMupChgg.lean.js",revision:null},{url:"assets/笔记_index.md.BMS_9XkG.js",revision:null},{url:"assets/笔记_index.md.BMS_9XkG.lean.js",revision:null},{url:"assets/笔记_Python_Python入门.md.BljALKty.js",revision:null},{url:"assets/笔记_Python_Python入门.md.BljALKty.lean.js",revision:null},{url:"assets/笔记_Python_Python基础.md.eKD6-O6q.js",revision:null},{url:"assets/笔记_Python_Python基础.md.eKD6-O6q.lean.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.BSkioJ86.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.BSkioJ86.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.DoiV1tCV.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.DoiV1tCV.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.C9oYS4Qi.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.C9oYS4Qi.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.BC86RbRk.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.BC86RbRk.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.3SB07qEN.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.3SB07qEN.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.EMJCw3u2.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.EMJCw3u2.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.D7Hs6u9G.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.D7Hs6u9G.lean.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.Cc_qyXOB.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.Cc_qyXOB.lean.js",revision:null},{url:"assets/笔记_入门_01起步.md.-C7yzqBV.js",revision:null},{url:"assets/笔记_入门_01起步.md.-C7yzqBV.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.zhiPhQ-G.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.zhiPhQ-G.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.BOfwgMf7.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.BOfwgMf7.lean.js",revision:null},{url:"assets/笔记_杂项_mima.md.otpIhdFu.js",revision:null},{url:"assets/笔记_杂项_mima.md.otpIhdFu.lean.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.DkrYGxnq.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.DkrYGxnq.lean.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.CwvKxCBS.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.CwvKxCBS.lean.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.hwViPU7Q.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.hwViPU7Q.lean.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md.CJLoKzg_.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md.CJLoKzg_.lean.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.CJi562Tf.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.CJi562Tf.lean.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.zkAJMAka.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.zkAJMAka.lean.js",revision:null},{url:"assets/笔记_计算机网络_index.md.DIqf1EtG.js",revision:null},{url:"assets/笔记_计算机网络_index.md.DIqf1EtG.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.BnK_-YEH.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.BnK_-YEH.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.Bxnq7LhP.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.Bxnq7LhP.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.CnU0mqXf.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.CnU0mqXf.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.BobdzF6g.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.BobdzF6g.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.BMeiSbsM.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.BMeiSbsM.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.DEY8CjeP.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.DEY8CjeP.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.cy_yyEbY.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.cy_yyEbY.lean.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.DXB_COAo.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.DXB_COAo.lean.js",revision:null},{url:"docs/index.html",revision:"f92d5fc617b53100b1a7764f633126b5"},{url:"favicon.ico",revision:"d5b32211da730deb16993b42a2f53f2c"},{url:"hengan/print.html",revision:"2bf332b199e30970c47298edef05e911"},{url:"hengan/share.html",revision:"b57c0e5f7ee1bc6971c51a5585e7e094"},{url:"icons/2024-1.png",revision:"cef68213709b2aaf990f47242bc46c14"},{url:"icons/2024-2.png",revision:"0c3486d1c7e99cc3b821b7cd8d5aa4bc"},{url:"icons/chatgpt.png",revision:"d52a7c4a482f1f35612241396c01d8d8"},{url:"icons/cnblogs.svg",revision:"9cf1175f8413d681d95c7cc02bc07828"},{url:"icons/es6.svg",revision:"a8c0674b51460d0e001c0d094cbf4c6a"},{url:"icons/jquery.svg",revision:"d363aa3485f2c5969ec35f5244bc5baa"},{url:"icons/json-cn.ico",revision:"73abdbe6f011f89cfa85447d8810c99e"},{url:"icons/koa.svg",revision:"0a55e7b8b060858ad9a2c6d0eff2b6f8"},{url:"icons/nodejs.svg",revision:"44a234015b8737a059c50901835a213a"},{url:"icons/pixiv.png",revision:"ca406e28983076988e9c0306881fe212"},{url:"icons/taro.svg",revision:"f418f25c1eb2c64ac59338aa6c6f22f8"},{url:"icons/twitter.svg",revision:"1be47a681202ef9b91ee0278dbd163ac"},{url:"images/pwa-120x120.png",revision:"d768ed45466e7c58cfef0dd946ce13e9"},{url:"images/pwa-192x192.png",revision:"2c6d9f5c1a5d9297e334101762859b1b"},{url:"images/pwa-512x512.png",revision:"2148f599081176f72cc315d04b9c7cb8"},{url:"index.html",revision:"5d91deb45518d9b7c30f2209bce97404"},{url:"logo.png",revision:"711c445a59ecf03e12cf2b23a6b340e3"},{url:"mouse/nomouse.css",revision:"44ccaf2010691f28de1029973eb05fd2"},{url:"mouse/pointer.js",revision:"d7f2b94ab8de7f804ed47284d734ad6d"},{url:"nav.html",revision:"56387d3aa0e98dc27eb1a973c943ffea"},{url:"nav/计算机网络/index.html",revision:"116a833eb58c4865aaac198ec254fabf"},{url:"nav/运维/index.html",revision:"da815475e6d8133aae6f9429e917c99f"},{url:"registerSW.js",revision:"f022f974699b0f53e06537d7f1b9b996"},{url:"static.png",revision:"560a842f29b7a8946b8afa75ad8f71c5"},{url:"博客/2024/02/10第二版博客搭建完成.html",revision:"5b29896140bbbbdc51b0a59670185d05"},{url:"博客/2024/02/11新年快乐.html",revision:"e49141b8550ee227ea7e01e4d5f5c9a1"},{url:"博客/2024/05/05第三版博客搭建完成.html",revision:"1d0de70f5941cebcc63fbedcae897a7d"},{url:"博客/2024/05/11第四版博客新题性.html",revision:"316734afcc30f7ca25d080680c5d9da6"},{url:"博客/2024/05/23第五版博客发布完成.html",revision:"f867f8cdc65a8536fcd57ddee0a945a7"},{url:"博客/2024/05/26HA综合布线.html",revision:"d71f12d33419beff80ea7c8ffa94f132"},{url:"博客/2024/05/29打印机共享.html",revision:"24331b4fc018d6fb6a45da2161a99958"},{url:"博客/2024/06/02性能优化.html",revision:"42ed03a3b9f882efb8075bac9a3dced6"},{url:"博客/2024/06/03Excel大小优化.html",revision:"97c7096f96ecea0d35e0c85cacc56b46"},{url:"博客/2024/06/10更好的svg集成.html",revision:"6b39e7ea2c0e544d5cc04838bb16c772"},{url:"博客/2024/06/17商业报告模板.html",revision:"43cc162d45aedd5a6900a16020204186"},{url:"博客/2024/07/21快速开发流程.html",revision:"ca5657b38187719ec5fa8e67b1e4b2e3"},{url:"博客/2024/08/08第六版博客发布.html",revision:"7295f14d9610b670e426d2c2c68361c0"},{url:"博客/index.html",revision:"bcc9d1aa58133c2fa2bd37b6dfd65391"},{url:"未标题-12.png",revision:"b56057d80e74ab95f2f32f0b9f0efb6f"},{url:"未标题-14.png",revision:"58e6fcba55e68af18dc56f2e18ba55d4"},{url:"未标题-15.png",revision:"cdd4ed3494056b724444e791557f1a45"},{url:"未标题-5.png",revision:"9fb013948cdbd9bd717e531f11425011"},{url:"笔记/C++进阶/Linux系统编程.html",revision:"9179149f0cbb25116b5967799e59199b"},{url:"笔记/C++进阶/Linux系统编程2.html",revision:"33e9f1a3ee5b87a72c64882085e19698"},{url:"笔记/C++进阶/多进程.html",revision:"32a8279c6f58ebb82e4d45dd5d62feb3"},{url:"笔记/C++进阶/线程.html",revision:"7cb17f46bbbaebf97a8d3c1bbb857c3b"},{url:"笔记/CPP基础/CPP基础-1.html",revision:"85b1b44f555e43677efffdfb115ea3c1"},{url:"笔记/CPP基础/CPP基础-2.html",revision:"e6daa0888eab7ed6612a33cab5ebd177"},{url:"笔记/EnergyPlus/入门.html",revision:"977f411e2077e7f63e187e7fa3f18600"},{url:"笔记/EnergyPlus/安装EnergyPlus环境.html",revision:"39218e23c07a31e4883b85f1124df32a"},{url:"笔记/index.html",revision:"7114c15c91994bc29c698db8e9f9b97f"},{url:"笔记/Python/Python入门.html",revision:"f1432f5f309f0a948c20ec8b71ea8040"},{url:"笔记/Python/Python基础.html",revision:"bb8715b88674ec3e04033b8f878a8470"},{url:"笔记/Python/Python基础2.html",revision:"9a13f138649137f6b1b0f41d3579b480"},{url:"笔记/Sinergym项目/gym互联网相关资料.html",revision:"3d28ec929a787a0b7744464a3818cb9b"},{url:"笔记/Sinergym项目/sinergym学习.html",revision:"e36fe48aed7e9d8f71373082655322f6"},{url:"笔记/Sinergym项目/sinergym论文.html",revision:"4c847e6a4b9c1206fa6cde3abffc6b38"},{url:"笔记/Sinergym项目/强化学习bilibili/强化学习1.html",revision:"8e67c6dcf33582ae5996f4fe84148649"},{url:"笔记/UE4虚幻/UE4CPP-1.html",revision:"cb953780b0e495fc3c49db487a9785db"},{url:"笔记/UE4虚幻/UE4CPP-2.html",revision:"c2f96af265ab3628056bf737c842dedb"},{url:"笔记/VitePress进阶/vitepress进阶教程.html",revision:"87574ff7b57b33e4d7c444497b339ab9"},{url:"笔记/入门/01起步.html",revision:"ecec69336e241358689a90af0e50b0b7"},{url:"笔记/大型园区网络实战设计/1.园区网概述.html",revision:"1307680cce0a604154bcb47b7b719bab"},{url:"笔记/大型园区网络实战设计/2.路由交换设计.html",revision:"736499a2b7c0b2d680b64c090f4bee84"},{url:"笔记/杂项/mima.html",revision:"2b0220f0918dcbf68f86311f648e0622"},{url:"笔记/杂项/snapd软件.html",revision:"1aece79d80f7fd30f0c611d34929b517"},{url:"笔记/杂项/ubuntu安装软件教程.html",revision:"220aca42513a2b4e7cf7d6df3a669586"},{url:"笔记/杂项/如何用Python绘制焓湿图.html",revision:"d6b0ceeed38779811708f649bf088c30"},{url:"笔记/杂项/安装linux 的 nodejs需要注意的问题.html",revision:"db58a120d0bb206786515411085a45c0"},{url:"笔记/杂项/安装ubuntu版本的idea教程.html",revision:"419cf3af9a3785748a7b374f8488c072"},{url:"笔记/杂项/解压软件.html",revision:"b475600ce0b921713e09dfc42662a2e2"},{url:"笔记/计算机网络/index.html",revision:"c31c67a7fa1bf3c8dd6aa2895447dee2"},{url:"笔记/计算机网络/桌面运维/index.html",revision:"4082dafc5253e85f950ce6ee80fb6d9f"},{url:"笔记/计算机网络/桌面运维/SAP安装教程.html",revision:"a346c881e358b52a5e2ef10b8476d573"},{url:"笔记/计算机网络/桌面运维/局域网文件共享.html",revision:"db907c0c76e5fd2d3753c221a65276e1"},{url:"笔记/计算机网络/桌面运维/微信清理工具.html",revision:"314525fe9824118ae70c403770d09417"},{url:"笔记/计算机网络/桌面运维/普通打印机共享.html",revision:"541ed0de4d6f6688e99eba0e6f7ff633"},{url:"笔记/计算机网络/桌面运维/磁盘空间清理.html",revision:"943c82722fe849fff0cfc57cceb0b894"},{url:"笔记/计算机网络/桌面运维/网络打印机.html",revision:"ddec2848442c4f17337e7b5ac91250ea"},{url:"笔记/计算机网络/网工.html",revision:"17d0fcbfd16e4f3c8a40ab3f3db5438a"},{url:"manifest.webmanifest",revision:"c31de5c647bce949e625f404760425a6"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new s.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
