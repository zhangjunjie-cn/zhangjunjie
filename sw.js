if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-a7491250"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"3ca4050b7a608c8ad0a32290389abb67"},{url:"assets/app.3B3-Ujg7.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.D4S06u0X.js",revision:null},{url:"assets/chunks/framework.DhOjAug6.js",revision:null},{url:"assets/chunks/index.BNnYFWcz.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.DK7zZLtw.js",revision:null},{url:"assets/docs_index.md.Djv1Bs6w.js",revision:null},{url:"assets/docs_index.md.Djv1Bs6w.lean.js",revision:null},{url:"assets/hengan_360net.md.DNVOu7I7.js",revision:null},{url:"assets/hengan_360net.md.DNVOu7I7.lean.js",revision:null},{url:"assets/hengan_dns.md.BVo4lrnV.js",revision:null},{url:"assets/hengan_dns.md.BVo4lrnV.lean.js",revision:null},{url:"assets/hengan_net-error.md.nkEW9ymT.js",revision:null},{url:"assets/hengan_net-error.md.nkEW9ymT.lean.js",revision:null},{url:"assets/hengan_netlink.md.NNhBBwDz.js",revision:null},{url:"assets/hengan_netlink.md.NNhBBwDz.lean.js",revision:null},{url:"assets/hengan_print.md.5FneI6QA.js",revision:null},{url:"assets/hengan_print.md.5FneI6QA.lean.js",revision:null},{url:"assets/hengan_sap.md.Do2xcLE6.js",revision:null},{url:"assets/hengan_sap.md.Do2xcLE6.lean.js",revision:null},{url:"assets/hengan_share.md.CXyF4zlc.js",revision:null},{url:"assets/hengan_share.md.CXyF4zlc.lean.js",revision:null},{url:"assets/hengan_studio.md.DRKruUmW.js",revision:null},{url:"assets/hengan_studio.md.DRKruUmW.lean.js",revision:null},{url:"assets/image.CPMGMrSV.png",revision:null},{url:"assets/index.md.DTQOgsyN.js",revision:null},{url:"assets/index.md.DTQOgsyN.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/nav_计算机网络_index.md.C4EtsKov.js",revision:null},{url:"assets/nav_计算机网络_index.md.C4EtsKov.lean.js",revision:null},{url:"assets/nav_运维_index.md.Blh4Qv0d.js",revision:null},{url:"assets/nav_运维_index.md.Blh4Qv0d.lean.js",revision:null},{url:"assets/nav.md.DdBEbZv6.js",revision:null},{url:"assets/nav.md.DdBEbZv6.lean.js",revision:null},{url:"assets/style.SjhLxtVh.css",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.BlZZlJpS.js",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.BlZZlJpS.lean.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.frK8Z5XU.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.frK8Z5XU.lean.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.D4eVmS8p.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.D4eVmS8p.lean.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.CeTocurK.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.CeTocurK.lean.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.B-_JWDZc.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.B-_JWDZc.lean.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.aW6sEraJ.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.aW6sEraJ.lean.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.DRyVV5lw.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.DRyVV5lw.lean.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.D4XTS15z.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.D4XTS15z.lean.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.WdP4G7ed.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.WdP4G7ed.lean.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.B12mvJvF.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.B12mvJvF.lean.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.C0giyY8g.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.C0giyY8g.lean.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.BR6C_6_C.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.BR6C_6_C.lean.js",revision:null},{url:"assets/博客_2024_08_18第六版博客发布.md.DKNwszbJ.js",revision:null},{url:"assets/博客_2024_08_18第六版博客发布.md.DKNwszbJ.lean.js",revision:null},{url:"assets/博客_index.md.Bh4fIByz.js",revision:null},{url:"assets/博客_index.md.Bh4fIByz.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.L_sV6fld.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.L_sV6fld.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.BzWnnJ_I.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.BzWnnJ_I.lean.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.BvEZkpaf.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.BvEZkpaf.lean.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.CrqNpiJT.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.CrqNpiJT.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.CxzXdTrs.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.CxzXdTrs.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.BMZp9rDO.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.BMZp9rDO.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.tyU-c0Kw.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.tyU-c0Kw.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.CvzKPa1t.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.CvzKPa1t.lean.js",revision:null},{url:"assets/笔记_index.md.BjISJqg6.js",revision:null},{url:"assets/笔记_index.md.BjISJqg6.lean.js",revision:null},{url:"assets/笔记_Python_Python入门.md.CjPj55Uw.js",revision:null},{url:"assets/笔记_Python_Python入门.md.CjPj55Uw.lean.js",revision:null},{url:"assets/笔记_Python_Python基础.md.DCtswhco.js",revision:null},{url:"assets/笔记_Python_Python基础.md.DCtswhco.lean.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.S74f9TYa.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.S74f9TYa.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.BG72VVQM.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.BG72VVQM.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.KtSxjHpE.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.KtSxjHpE.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.BLn9-jQM.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.BLn9-jQM.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.C8jTopU9.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.C8jTopU9.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.CG_gPVLO.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.CG_gPVLO.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.C9986Yrp.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.C9986Yrp.lean.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.fQPU9rRx.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.fQPU9rRx.lean.js",revision:null},{url:"assets/笔记_入门_01起步.md.BdpLyj0i.js",revision:null},{url:"assets/笔记_入门_01起步.md.BdpLyj0i.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.Dm3QueOW.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.Dm3QueOW.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.j4t_5Zs2.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.j4t_5Zs2.lean.js",revision:null},{url:"assets/笔记_杂项_mima.md.D8bgaWVs.js",revision:null},{url:"assets/笔记_杂项_mima.md.D8bgaWVs.lean.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.B0hRfxcf.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.B0hRfxcf.lean.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.C19z3SaV.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.C19z3SaV.lean.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.LfgfBeoK.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.LfgfBeoK.lean.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md._a3BWMQm.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md._a3BWMQm.lean.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.zArWSgnf.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.zArWSgnf.lean.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.BloTqouv.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.BloTqouv.lean.js",revision:null},{url:"assets/笔记_计算机网络_index.md.B9PklO4m.js",revision:null},{url:"assets/笔记_计算机网络_index.md.B9PklO4m.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.Bg9N-6sB.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.Bg9N-6sB.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.BbgLOPqo.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.BbgLOPqo.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.kKtmOJ7V.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.kKtmOJ7V.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.RU-CDkcq.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.RU-CDkcq.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.DQaTCFoo.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.DQaTCFoo.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.DqhejvC9.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.DqhejvC9.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.BILlZFQ-.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.BILlZFQ-.lean.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.BOD-RmIp.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.BOD-RmIp.lean.js",revision:null},{url:"docs/index.html",revision:"407998ff05c8e55036a513bf3d678f46"},{url:"favicon.ico",revision:"1786f94c4ded09536352e6d4593a250c"},{url:"favicon1.ico",revision:"d5b32211da730deb16993b42a2f53f2c"},{url:"hengan/360net.html",revision:"e90abb3dc06f79acb14662c610b004af"},{url:"hengan/dns.html",revision:"850fcec72140164c7f07ad0cc42fc2c8"},{url:"hengan/net-error.html",revision:"08ca7fa079c42ea24d71a138f159e7c1"},{url:"hengan/netlink.html",revision:"b1007326f2206c82e232e601f01956c6"},{url:"hengan/print.html",revision:"ef720af9313a4b4d440333110e220037"},{url:"hengan/sap.html",revision:"e1e59de240562f7d19ad5f22245a1030"},{url:"hengan/share.html",revision:"ae64d736e84b54873a8adcb401c270fa"},{url:"hengan/studio.html",revision:"dca8b6cf08537dd8fa628c375a311dde"},{url:"icons/2024-1.png",revision:"cef68213709b2aaf990f47242bc46c14"},{url:"icons/2024-2.png",revision:"0c3486d1c7e99cc3b821b7cd8d5aa4bc"},{url:"icons/chatgpt.png",revision:"d52a7c4a482f1f35612241396c01d8d8"},{url:"icons/cnblogs.svg",revision:"9cf1175f8413d681d95c7cc02bc07828"},{url:"icons/es6.svg",revision:"a8c0674b51460d0e001c0d094cbf4c6a"},{url:"icons/jquery.svg",revision:"d363aa3485f2c5969ec35f5244bc5baa"},{url:"icons/json-cn.ico",revision:"73abdbe6f011f89cfa85447d8810c99e"},{url:"icons/koa.svg",revision:"0a55e7b8b060858ad9a2c6d0eff2b6f8"},{url:"icons/nodejs.svg",revision:"44a234015b8737a059c50901835a213a"},{url:"icons/pixiv.png",revision:"ca406e28983076988e9c0306881fe212"},{url:"icons/taro.svg",revision:"f418f25c1eb2c64ac59338aa6c6f22f8"},{url:"icons/twitter.svg",revision:"1be47a681202ef9b91ee0278dbd163ac"},{url:"images/pwa-120x120.png",revision:"d768ed45466e7c58cfef0dd946ce13e9"},{url:"images/pwa-192x192.png",revision:"2c6d9f5c1a5d9297e334101762859b1b"},{url:"images/pwa-512x512.png",revision:"2148f599081176f72cc315d04b9c7cb8"},{url:"index.html",revision:"0296b7305cf80be98d287e83f5e45a18"},{url:"logo.png",revision:"711c445a59ecf03e12cf2b23a6b340e3"},{url:"mouse/nomouse.css",revision:"44ccaf2010691f28de1029973eb05fd2"},{url:"mouse/pointer.js",revision:"d7f2b94ab8de7f804ed47284d734ad6d"},{url:"nav.html",revision:"4d684f095e97b8c46886b797cfc1e1b8"},{url:"nav/计算机网络/index.html",revision:"469655fabdf73be729cb52357ace6029"},{url:"nav/运维/index.html",revision:"f0531659690e9e62eaa6247a97c32a58"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static.png",revision:"560a842f29b7a8946b8afa75ad8f71c5"},{url:"博客/2024/02/10第二版博客搭建完成.html",revision:"8558661c9a9b41175f1369a6317cdedb"},{url:"博客/2024/02/11新年快乐.html",revision:"7b63df68aa24ef143cd69f741bc45176"},{url:"博客/2024/05/05第三版博客搭建完成.html",revision:"659f2758ef899ddc5f7955090d344b18"},{url:"博客/2024/05/11第四版博客新题性.html",revision:"ad11a5ed6a3ab970d0659ae69b475ddc"},{url:"博客/2024/05/23第五版博客发布完成.html",revision:"a363fdd73b617bfe4ce4965b2ddbdc59"},{url:"博客/2024/05/26HA综合布线.html",revision:"d71e287061064bc6b76c273b254aac41"},{url:"博客/2024/05/29打印机共享.html",revision:"55280ec2bf61da17583df76753ebf0a6"},{url:"博客/2024/06/02性能优化.html",revision:"309b8019b52736480f5eff0961554667"},{url:"博客/2024/06/03Excel大小优化.html",revision:"039c5da94f1e180f80854e587dcfd368"},{url:"博客/2024/06/10更好的svg集成.html",revision:"4899bc2e4b2c20fa44d13aa8f1ec0901"},{url:"博客/2024/06/17商业报告模板.html",revision:"3041a93f53cc2da7b967ce1f4412322b"},{url:"博客/2024/07/21快速开发流程.html",revision:"4c2eaa73bd60e901a434d001829e9c72"},{url:"博客/2024/08/18第六版博客发布.html",revision:"7c4409f82d6e7e3ae3eb698ab81c47b7"},{url:"博客/index.html",revision:"47cccc485fa25474544cc336da38b74e"},{url:"未标题-12.png",revision:"b56057d80e74ab95f2f32f0b9f0efb6f"},{url:"未标题-14.png",revision:"58e6fcba55e68af18dc56f2e18ba55d4"},{url:"未标题-15.png",revision:"cdd4ed3494056b724444e791557f1a45"},{url:"未标题-5.png",revision:"9fb013948cdbd9bd717e531f11425011"},{url:"笔记/C++进阶/Linux系统编程.html",revision:"6b364563bc0f3ffeaae1116e2b19f9c6"},{url:"笔记/C++进阶/Linux系统编程2.html",revision:"51fd1c91751beccabac1bcc2dc7cf613"},{url:"笔记/C++进阶/多进程.html",revision:"8c0e0bfa7920c6ee452119f4464db7ff"},{url:"笔记/C++进阶/线程.html",revision:"ff136e8277924376b2f81f145c23b4c8"},{url:"笔记/CPP基础/CPP基础-1.html",revision:"ae70bfdeb225f15bd0a31ed9cbe64a7d"},{url:"笔记/CPP基础/CPP基础-2.html",revision:"9eb4bf52949561518764ea1c8e13be95"},{url:"笔记/EnergyPlus/入门.html",revision:"2fa6609a577e658de783fc3d66ac6bfb"},{url:"笔记/EnergyPlus/安装EnergyPlus环境.html",revision:"949708569094da9acfabd7c011be0c80"},{url:"笔记/index.html",revision:"bdff7f91c58fe140b26ea4805bffe5fd"},{url:"笔记/Python/Python入门.html",revision:"92d770fd74755d49b3826d8774f74b50"},{url:"笔记/Python/Python基础.html",revision:"6459713775067664500f87eff46acba8"},{url:"笔记/Python/Python基础2.html",revision:"1d25a0c94a768eb660268c72b3651363"},{url:"笔记/Sinergym项目/gym互联网相关资料.html",revision:"61e62e563b1472e0d54be2358e66f7be"},{url:"笔记/Sinergym项目/sinergym学习.html",revision:"562dee297aa200b94d9af1a22b210c49"},{url:"笔记/Sinergym项目/sinergym论文.html",revision:"145c25428001d1ce7e5f027ca8537867"},{url:"笔记/Sinergym项目/强化学习bilibili/强化学习1.html",revision:"61c3ed9c5f38a945aec6422780cd7a28"},{url:"笔记/UE4虚幻/UE4CPP-1.html",revision:"2a8a81b2b0e5653d484433b1e547da5c"},{url:"笔记/UE4虚幻/UE4CPP-2.html",revision:"88d9d42cb154b4068c7d118f200c9a57"},{url:"笔记/VitePress进阶/vitepress进阶教程.html",revision:"d961b31c2c76f0bffbdcdaa7b7a1b1b2"},{url:"笔记/入门/01起步.html",revision:"b291e4491f3a4996949a854630fb0b51"},{url:"笔记/大型园区网络实战设计/1.园区网概述.html",revision:"c728d7cf2f841452f24e273f61c97490"},{url:"笔记/大型园区网络实战设计/2.路由交换设计.html",revision:"9d633a575c7dc1caed9a746726e98073"},{url:"笔记/杂项/mima.html",revision:"fcf74198b43e4ff932891b45e0beebde"},{url:"笔记/杂项/snapd软件.html",revision:"cbca4555d0e030e34eb0643ef9fc004a"},{url:"笔记/杂项/ubuntu安装软件教程.html",revision:"7b1892cb6e6a7a607630d319d6c3e818"},{url:"笔记/杂项/如何用Python绘制焓湿图.html",revision:"f26772b26c703bd61ed047ed9353dd57"},{url:"笔记/杂项/安装linux 的 nodejs需要注意的问题.html",revision:"c471d6b836d1c303a17343b0432201bc"},{url:"笔记/杂项/安装ubuntu版本的idea教程.html",revision:"7d058a734c5a55bd1628d36ea3aec5c7"},{url:"笔记/杂项/解压软件.html",revision:"f65e4e13bfec73f2f1581a38082a97ef"},{url:"笔记/计算机网络/index.html",revision:"a8223527b17be31aab29ba4c5e1dd613"},{url:"笔记/计算机网络/桌面运维/index.html",revision:"b4c807dda6f65cf16d8daa6a376e13b7"},{url:"笔记/计算机网络/桌面运维/SAP安装教程.html",revision:"c53b0115cc4643284bea5b8e371a855f"},{url:"笔记/计算机网络/桌面运维/局域网文件共享.html",revision:"fb74066b0472bb89b551aac912771478"},{url:"笔记/计算机网络/桌面运维/微信清理工具.html",revision:"a9f9068490e8764e179a5459502ae3c2"},{url:"笔记/计算机网络/桌面运维/普通打印机共享.html",revision:"6b7c46817f13d05d8773b3036f47d48e"},{url:"笔记/计算机网络/桌面运维/磁盘空间清理.html",revision:"3139a9b9ff8d9f901148ae281d1eb6d1"},{url:"笔记/计算机网络/桌面运维/网络打印机.html",revision:"8411ec854a0124a4c4e237ae35d8fdee"},{url:"笔记/计算机网络/网工.html",revision:"667ee40c2c9abb6cbcdd48c6c4295111"},{url:"manifest.webmanifest",revision:"53770b3706f69cec0e8a38fa5ab89711"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new s.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
