if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-a7491250"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"12bf07ee3b39b7800787221fa34abdad"},{url:"8dd7a1cccc979328e9ca030c9fe44038.txt",revision:"512d042eadfa13f49ba74487a95d8c49"},{url:"assets/app.COb96Pyw.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.BWP3vn-U.js",revision:null},{url:"assets/chunks/framework.nzW5GSPc.js",revision:null},{url:"assets/chunks/index.BNnYFWcz.js",revision:null},{url:"assets/chunks/theme.GRHhWIjV.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.CZkWY8a6.js",revision:null},{url:"assets/docs_index.md.DQsjKF5-.js",revision:null},{url:"assets/docs_index.md.DQsjKF5-.lean.js",revision:null},{url:"assets/hengan_360net.md.IpO2KOEJ.js",revision:null},{url:"assets/hengan_360net.md.IpO2KOEJ.lean.js",revision:null},{url:"assets/hengan_dns.md.BYMKw64w.js",revision:null},{url:"assets/hengan_dns.md.BYMKw64w.lean.js",revision:null},{url:"assets/hengan_host.md.Cbv4J4Eh.js",revision:null},{url:"assets/hengan_host.md.Cbv4J4Eh.lean.js",revision:null},{url:"assets/hengan_net-error.md.YobKgV9c.js",revision:null},{url:"assets/hengan_net-error.md.YobKgV9c.lean.js",revision:null},{url:"assets/hengan_netlink.md.f8ESh2x-.js",revision:null},{url:"assets/hengan_netlink.md.f8ESh2x-.lean.js",revision:null},{url:"assets/hengan_print.md.DpCCJCni.js",revision:null},{url:"assets/hengan_print.md.DpCCJCni.lean.js",revision:null},{url:"assets/hengan_sap.md.BC4RDya6.js",revision:null},{url:"assets/hengan_sap.md.BC4RDya6.lean.js",revision:null},{url:"assets/hengan_share.md.-58lcFiG.js",revision:null},{url:"assets/hengan_share.md.-58lcFiG.lean.js",revision:null},{url:"assets/hengan_studio.md.mWIAJtU7.js",revision:null},{url:"assets/hengan_studio.md.mWIAJtU7.lean.js",revision:null},{url:"assets/image.CPMGMrSV.png",revision:null},{url:"assets/index.md.BvTyp6pW.js",revision:null},{url:"assets/index.md.BvTyp6pW.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/nav_计算机网络_index.md.MsXFfxJL.js",revision:null},{url:"assets/nav_计算机网络_index.md.MsXFfxJL.lean.js",revision:null},{url:"assets/nav_运维_index.md.ALFlCics.js",revision:null},{url:"assets/nav_运维_index.md.ALFlCics.lean.js",revision:null},{url:"assets/nav.md.DkI_xYD3.js",revision:null},{url:"assets/nav.md.DkI_xYD3.lean.js",revision:null},{url:"assets/style.BINBYDzr.css",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.CNJbZiNP.js",revision:null},{url:"assets/博客_2024_02_10第二版博客搭建完成.md.CNJbZiNP.lean.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.BK77Zg0L.js",revision:null},{url:"assets/博客_2024_02_11新年快乐.md.BK77Zg0L.lean.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.BClaptPg.js",revision:null},{url:"assets/博客_2024_05_05第三版博客搭建完成.md.BClaptPg.lean.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.D3KmDWln.js",revision:null},{url:"assets/博客_2024_05_11第四版博客新题性.md.D3KmDWln.lean.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.DrKVZznx.js",revision:null},{url:"assets/博客_2024_05_23第五版博客发布完成.md.DrKVZznx.lean.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.BJPF0uYX.js",revision:null},{url:"assets/博客_2024_05_26HA综合布线.md.BJPF0uYX.lean.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.BUX7ZUJX.js",revision:null},{url:"assets/博客_2024_05_29打印机共享.md.BUX7ZUJX.lean.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.BIOwytJQ.js",revision:null},{url:"assets/博客_2024_06_02性能优化.md.BIOwytJQ.lean.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.CigpU3ol.js",revision:null},{url:"assets/博客_2024_06_03Excel大小优化.md.CigpU3ol.lean.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.Rp2msPWv.js",revision:null},{url:"assets/博客_2024_06_10更好的svg集成.md.Rp2msPWv.lean.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.V-oWO8gK.js",revision:null},{url:"assets/博客_2024_06_17商业报告模板.md.V-oWO8gK.lean.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.By6KYMyu.js",revision:null},{url:"assets/博客_2024_07_21快速开发流程.md.By6KYMyu.lean.js",revision:null},{url:"assets/博客_2024_08_18第六版博客发布.md.tFZLXtuL.js",revision:null},{url:"assets/博客_2024_08_18第六版博客发布.md.tFZLXtuL.lean.js",revision:null},{url:"assets/博客_index.md.DoTsRUhe.js",revision:null},{url:"assets/博客_index.md.DoTsRUhe.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.BdI3UlV2.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程.md.BdI3UlV2.lean.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.BxMRM8r9.js",revision:null},{url:"assets/笔记_C__进阶_Linux系统编程2.md.BxMRM8r9.lean.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.DA59xjUP.js",revision:null},{url:"assets/笔记_C__进阶_多进程.md.DA59xjUP.lean.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.BrzVsyva.js",revision:null},{url:"assets/笔记_C__进阶_线程.md.BrzVsyva.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.EY26_gMH.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-1.md.EY26_gMH.lean.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.CUb-mE7_.js",revision:null},{url:"assets/笔记_CPP基础_CPP基础-2.md.CUb-mE7_.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.CJTHA4Ab.js",revision:null},{url:"assets/笔记_EnergyPlus_入门.md.CJTHA4Ab.lean.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.D-KyGUkQ.js",revision:null},{url:"assets/笔记_EnergyPlus_安装EnergyPlus环境.md.D-KyGUkQ.lean.js",revision:null},{url:"assets/笔记_index.md.b_wnn8jX.js",revision:null},{url:"assets/笔记_index.md.b_wnn8jX.lean.js",revision:null},{url:"assets/笔记_Python_Python入门.md.DMoVZoBt.js",revision:null},{url:"assets/笔记_Python_Python入门.md.DMoVZoBt.lean.js",revision:null},{url:"assets/笔记_Python_Python基础.md.D_86hF0o.js",revision:null},{url:"assets/笔记_Python_Python基础.md.D_86hF0o.lean.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.DfgCPYWs.js",revision:null},{url:"assets/笔记_Python_Python基础2.md.DfgCPYWs.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.B708EriE.js",revision:null},{url:"assets/笔记_Sinergym项目_gym互联网相关资料.md.B708EriE.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.l_oAep4K.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym学习.md.l_oAep4K.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.DInqiMUs.js",revision:null},{url:"assets/笔记_Sinergym项目_sinergym论文.md.DInqiMUs.lean.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.BJ0T42AT.js",revision:null},{url:"assets/笔记_Sinergym项目_强化学习bilibili_强化学习1.md.BJ0T42AT.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.NQF1sxov.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-1.md.NQF1sxov.lean.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.CzhbqQgS.js",revision:null},{url:"assets/笔记_UE4虚幻_UE4CPP-2.md.CzhbqQgS.lean.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.gOXbYeBt.js",revision:null},{url:"assets/笔记_VitePress进阶_vitepress进阶教程.md.gOXbYeBt.lean.js",revision:null},{url:"assets/笔记_入门_01起步.md.Czisro-H.js",revision:null},{url:"assets/笔记_入门_01起步.md.Czisro-H.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.Bqno-8kH.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_1.园区网概述.md.Bqno-8kH.lean.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.Dqbx8LTr.js",revision:null},{url:"assets/笔记_大型园区网络实战设计_2.路由交换设计.md.Dqbx8LTr.lean.js",revision:null},{url:"assets/笔记_杂项_mima.md.kbVgkbrG.js",revision:null},{url:"assets/笔记_杂项_mima.md.kbVgkbrG.lean.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.b60j2nsT.js",revision:null},{url:"assets/笔记_杂项_snapd软件.md.b60j2nsT.lean.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.CstZ_5Ax.js",revision:null},{url:"assets/笔记_杂项_ubuntu安装软件教程.md.CstZ_5Ax.lean.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.BBEgPWaS.js",revision:null},{url:"assets/笔记_杂项_如何用Python绘制焓湿图.md.BBEgPWaS.lean.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md.C26LtBaQ.js",revision:null},{url:"assets/笔记_杂项_安装linux 的 nodejs需要注意的问题.md.C26LtBaQ.lean.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.U9-ib4Ph.js",revision:null},{url:"assets/笔记_杂项_安装ubuntu版本的idea教程.md.U9-ib4Ph.lean.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.D5K9-upo.js",revision:null},{url:"assets/笔记_杂项_解压软件.md.D5K9-upo.lean.js",revision:null},{url:"assets/笔记_计算机网络_index.md.DSqvEMzI.js",revision:null},{url:"assets/笔记_计算机网络_index.md.DSqvEMzI.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.QULwMQiR.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_index.md.QULwMQiR.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.DWbcM-pa.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_SAP安装教程.md.DWbcM-pa.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.DnL_wyxh.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_局域网文件共享.md.DnL_wyxh.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.BHp_3uXL.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_微信清理工具.md.BHp_3uXL.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.6c5g2g-K.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_普通打印机共享.md.6c5g2g-K.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.D0lFxxIq.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_磁盘空间清理.md.D0lFxxIq.lean.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.Bc9UUiJj.js",revision:null},{url:"assets/笔记_计算机网络_桌面运维_网络打印机.md.Bc9UUiJj.lean.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.BcM1aMu8.js",revision:null},{url:"assets/笔记_计算机网络_网工.md.BcM1aMu8.lean.js",revision:null},{url:"docs/index.html",revision:"1b1069e31e621b9cd9e3cf0caf3ffa4c"},{url:"favicon.ico",revision:"1786f94c4ded09536352e6d4593a250c"},{url:"favicon1.ico",revision:"d5b32211da730deb16993b42a2f53f2c"},{url:"hengan/360net.html",revision:"69c79e20e89e7d1c77fc51d10031c69c"},{url:"hengan/dns.html",revision:"5b415d5077f9f0455530a8eee054b92e"},{url:"hengan/host.html",revision:"1060fa68fded930d6b96ecfd71b0c095"},{url:"hengan/net-error.html",revision:"6e71c828df7e021a5958d133921154f9"},{url:"hengan/netlink.html",revision:"607b77dd3008110c599f0c061b82cdee"},{url:"hengan/print.html",revision:"062635ff86c0611830b8f13873a88d8c"},{url:"hengan/sap.html",revision:"4291531120c6084b715e5213ec48624d"},{url:"hengan/share.html",revision:"584f3f4a10baea4213df27db11cb681a"},{url:"hengan/studio.html",revision:"e41c01edfd131719ec92b4bd0f5534d2"},{url:"icons/2024-1.png",revision:"cef68213709b2aaf990f47242bc46c14"},{url:"icons/2024-2.png",revision:"0c3486d1c7e99cc3b821b7cd8d5aa4bc"},{url:"icons/chatgpt.png",revision:"d52a7c4a482f1f35612241396c01d8d8"},{url:"icons/cnblogs.svg",revision:"9cf1175f8413d681d95c7cc02bc07828"},{url:"icons/es6.svg",revision:"a8c0674b51460d0e001c0d094cbf4c6a"},{url:"icons/jquery.svg",revision:"d363aa3485f2c5969ec35f5244bc5baa"},{url:"icons/json-cn.ico",revision:"73abdbe6f011f89cfa85447d8810c99e"},{url:"icons/koa.svg",revision:"0a55e7b8b060858ad9a2c6d0eff2b6f8"},{url:"icons/nodejs.svg",revision:"44a234015b8737a059c50901835a213a"},{url:"icons/pixiv.png",revision:"ca406e28983076988e9c0306881fe212"},{url:"icons/taro.svg",revision:"f418f25c1eb2c64ac59338aa6c6f22f8"},{url:"icons/twitter.svg",revision:"1be47a681202ef9b91ee0278dbd163ac"},{url:"images/pwa-120x120.png",revision:"d768ed45466e7c58cfef0dd946ce13e9"},{url:"images/pwa-192x192.png",revision:"2c6d9f5c1a5d9297e334101762859b1b"},{url:"images/pwa-512x512.png",revision:"2148f599081176f72cc315d04b9c7cb8"},{url:"index.html",revision:"a0b46169a2933b6f36735ac71f01efdb"},{url:"logo.png",revision:"711c445a59ecf03e12cf2b23a6b340e3"},{url:"mouse/nomouse.css",revision:"44ccaf2010691f28de1029973eb05fd2"},{url:"mouse/pointer.js",revision:"d7f2b94ab8de7f804ed47284d734ad6d"},{url:"nav.html",revision:"296640a1b2b50603d3237d8e63301404"},{url:"nav/计算机网络/index.html",revision:"0bd4b4ada08ef94d1d534b348329d44d"},{url:"nav/运维/index.html",revision:"05be5f1857603b08efc5d49358131c8a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static.png",revision:"560a842f29b7a8946b8afa75ad8f71c5"},{url:"博客/2024/02/10第二版博客搭建完成.html",revision:"020079e40aaf9f1ea4c6a17c95b03af7"},{url:"博客/2024/02/11新年快乐.html",revision:"31cc47e2f5041e8f13998b4854b3e19e"},{url:"博客/2024/05/05第三版博客搭建完成.html",revision:"176d305b2e6bf971765a7a223e06995b"},{url:"博客/2024/05/11第四版博客新题性.html",revision:"1e7018473dafd64865b57ce2b0fe3a86"},{url:"博客/2024/05/23第五版博客发布完成.html",revision:"e49fe67aafaedeae5755bd39d28adf77"},{url:"博客/2024/05/26HA综合布线.html",revision:"788be311c2188fabd320fb68785de5c3"},{url:"博客/2024/05/29打印机共享.html",revision:"c22df585548372de5e8e29e57133aa03"},{url:"博客/2024/06/02性能优化.html",revision:"8533956a1844f4a74009e9adb69ea072"},{url:"博客/2024/06/03Excel大小优化.html",revision:"469c359e62670c8c0f65cf0ef65d0e02"},{url:"博客/2024/06/10更好的svg集成.html",revision:"b4f76377e8c78b85f5470e5d50e03937"},{url:"博客/2024/06/17商业报告模板.html",revision:"aded8e60222d97b603a517ebc9e9c5f5"},{url:"博客/2024/07/21快速开发流程.html",revision:"0b5161d8801b1f7f3692233a656262be"},{url:"博客/2024/08/18第六版博客发布.html",revision:"0712c47c994e1eb405780c9832277b20"},{url:"博客/index.html",revision:"d31d7a93a176d7360086431a2e0d3408"},{url:"未标题-12.png",revision:"b56057d80e74ab95f2f32f0b9f0efb6f"},{url:"未标题-14.png",revision:"58e6fcba55e68af18dc56f2e18ba55d4"},{url:"未标题-15.png",revision:"cdd4ed3494056b724444e791557f1a45"},{url:"未标题-5.png",revision:"9fb013948cdbd9bd717e531f11425011"},{url:"笔记/C++进阶/Linux系统编程.html",revision:"21a17e5c85c1c44f98721ee71b88915d"},{url:"笔记/C++进阶/Linux系统编程2.html",revision:"129cff053c250100ee9f2e10ba993438"},{url:"笔记/C++进阶/多进程.html",revision:"069fb92475e96a0814e298f2ce8a7fc9"},{url:"笔记/C++进阶/线程.html",revision:"735d95a2f9773568a261f5408d598aa6"},{url:"笔记/CPP基础/CPP基础-1.html",revision:"a6e8081e35799af22635fe48a79266ea"},{url:"笔记/CPP基础/CPP基础-2.html",revision:"6cd00a42b1359a3abff13fee0a529adf"},{url:"笔记/EnergyPlus/入门.html",revision:"429f815b64d60db7817d73999e261dc1"},{url:"笔记/EnergyPlus/安装EnergyPlus环境.html",revision:"c8464f7bb66a7dafd96095574f59306b"},{url:"笔记/index.html",revision:"a8a557cdc0914bba7084433f789f0395"},{url:"笔记/Python/Python入门.html",revision:"0a3924d4d43760ae828c5866b24387ca"},{url:"笔记/Python/Python基础.html",revision:"5a20fe332f9cd636145ddef65991e171"},{url:"笔记/Python/Python基础2.html",revision:"60874d8c6227e32a6092fe9d7246699c"},{url:"笔记/Sinergym项目/gym互联网相关资料.html",revision:"047cee859c1d6fe005c8ca22e832dd07"},{url:"笔记/Sinergym项目/sinergym学习.html",revision:"d2517b83662c26b56f0833592b3265cc"},{url:"笔记/Sinergym项目/sinergym论文.html",revision:"21779d4989ec9047c92fcd3383a9621f"},{url:"笔记/Sinergym项目/强化学习bilibili/强化学习1.html",revision:"287f3c5ab5501459b29b169bbd895b51"},{url:"笔记/UE4虚幻/UE4CPP-1.html",revision:"ba6bebca81774d7c74e7001d54f7e212"},{url:"笔记/UE4虚幻/UE4CPP-2.html",revision:"ae880ced743796d4a3dd1748f478723c"},{url:"笔记/VitePress进阶/vitepress进阶教程.html",revision:"c36c64d022bd0a38f59c2820872535af"},{url:"笔记/入门/01起步.html",revision:"a5cd86a874dcc08c59cf4dcb5aab6fa8"},{url:"笔记/大型园区网络实战设计/1.园区网概述.html",revision:"ac2520f9562e38698e2a71692259f26b"},{url:"笔记/大型园区网络实战设计/2.路由交换设计.html",revision:"758fa81dbd810ac289de19182e73825d"},{url:"笔记/杂项/mima.html",revision:"88cf0f8351bfaa77c7791def04bc279f"},{url:"笔记/杂项/snapd软件.html",revision:"25b4e149764db68bd2f5675aeedcd46a"},{url:"笔记/杂项/ubuntu安装软件教程.html",revision:"613e93bef084ff6a7804e2c9c190a52c"},{url:"笔记/杂项/如何用Python绘制焓湿图.html",revision:"e0f8f7873e2aabfad411b9fc933e47df"},{url:"笔记/杂项/安装linux 的 nodejs需要注意的问题.html",revision:"8d60b5383a6ea327d36b257564a6d34f"},{url:"笔记/杂项/安装ubuntu版本的idea教程.html",revision:"3dcfbffa9bcc9dda339900b411faf845"},{url:"笔记/杂项/解压软件.html",revision:"db52ec239133d664d76a68433c9a4f76"},{url:"笔记/计算机网络/index.html",revision:"74c05a3cab0ae28076554fba7135647b"},{url:"笔记/计算机网络/桌面运维/index.html",revision:"40aa0b915536b0f328cc1375c70f2f9e"},{url:"笔记/计算机网络/桌面运维/SAP安装教程.html",revision:"2d3755e09c8ee328fe838546a2aaf311"},{url:"笔记/计算机网络/桌面运维/局域网文件共享.html",revision:"f8e0cde8085ecc1c4a4d0aa62cf5fdc9"},{url:"笔记/计算机网络/桌面运维/微信清理工具.html",revision:"e19fb79c3d626e59e1f2e61b89580a50"},{url:"笔记/计算机网络/桌面运维/普通打印机共享.html",revision:"ce78b6aa1dfd33161c2ebd41a3c5e681"},{url:"笔记/计算机网络/桌面运维/磁盘空间清理.html",revision:"9c1ba563e91c9237b644f2606067670d"},{url:"笔记/计算机网络/桌面运维/网络打印机.html",revision:"95810c967e4f40df3907ae5822e103db"},{url:"笔记/计算机网络/网工.html",revision:"090162b889e3ea1ecc2795ecc5735927"},{url:"manifest.webmanifest",revision:"53770b3706f69cec0e8a38fa5ab89711"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new s.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
