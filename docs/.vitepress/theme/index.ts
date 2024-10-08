import { h, watch,onMounted, nextTick } from "vue";
import { useData, EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";

// import { createMediumZoomProvider } from "./composables/useMediumZoom";
import { defineComponent, inject } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { setup } from '@css-render/vue3-ssr'
import { useRoute } from 'vitepress'

import MNavLinks from "./components/MNavLinks.vue";
import ArticleMetadata from "./components/ArticleMetadata.vue";
// import AlanViteComponent from "@xiaomh/vue3-alan-vite-component";

import "vitepress-markdown-timeline/dist/theme/index.css";

// import vitepressBackToTop from 'vitepress-plugin-back-to-top'
// import 'vitepress-plugin-back-to-top/dist/style.css'

// import "@xiaomh/vue3-alan-vite-component/lib/style.css";

//白昼切换布局
import MLayout from './components/MLayout.vue'
import x from "./composables/echarts"
import "./styles/index.scss";

import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";

import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // import method
import 'vitepress-plugin-codeblocks-fold/style/index.css'; // import style

import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import {
	initFirstScreen,
	destructionObserver,
	animateFn,
} from '../utils/animatePlusgin'

if (typeof window !== "undefined") {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  /* 删除浏览器中的缓存 */
  if ("caches" in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key);
        })
      );
    });
  }
}

let homePageStyle: HTMLStyleElement | undefined;

//naive ui
///naive ui



export default {
  extends: DefaultTheme,  


  // 滚动进入动画
  setup() {
		const route = useRoute()
		onMounted(() => {
			initFirstScreen()
			animateFn()
		})
		watch(
			() => route.path,
			() =>
				nextTick(() => {
					destructionObserver()
					initFirstScreen()
					animateFn()
				})
		)
	},




  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    // 代码区域折叠
    const route = useRoute();
    //当 defaultAllFold 设置为 true （即默认所有页面折叠）时，当前页面第一、二、三个代码块强制不折叠
    codeblocksFold({ route, frontmatter }, true, 400);

    //naive ui
    const { Layout } = DefaultTheme

    const CssRenderStyle = defineComponent({
      setup () {
        const collect = inject('css-render-collect')
        return {
          style: collect()
        }
      },
      render () {
        return h('css-render-style', {
          innerHTML: this.style
        })
      }
    })

    const VitepressPath = defineComponent({
      setup () {
        const route = useRoute()
        return () => {
          return h('vitepress-path', null, [route.path])
        }
      }
    })

    const NaiveUIProvider = defineComponent({
      render () {
        return h(
          NConfigProvider,
          { abstract: true, inlineThemeDisabled: true },
          {
            default: () => [
              h(Layout, null, { default: this.$slots.default?.() }),
              import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
            ]
          }
        )
      }
    })
    


    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    //DefaultTheme.Layout
    return h(MLayout, props);
  },

  
  

  async enhanceApp({ app, router }: EnhanceAppContext) {

    app.use(NolebaseInlineLinkPreviewPlugin);
    // createMediumZoomProvider(app, router);

    app.component("MNavLinks", MNavLinks);
    // app.component("MyLayout", MyLayout);
    // app.component("CustomLayout", CustomLayout);
    app.component("ArticleMetadata", ArticleMetadata); //作者来源
    // app.use(AlanViteComponent);
    app.provide("DEV", process.env.NODE_ENV === "development");

    //ECharts
    app.component('Test', x);

    //阅读窗格
    app.use(NolebaseEnhancedReadabilitiesPlugin);

    app.use(NolebaseGitChangelogPlugin);

    

    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true }
      );
    };

    //naive ui
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    };


    //live2D
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E7%AC%A6%E7%8E%84/%E7%AC%A6%E7%8E%84.model3.json',

            //https://raw.githubusercontent.com/<用户名>/<仓库名>/<分支名>/<文件路径>

            // path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/zhangjunjie-cn/live2d-model/main/%E7%AC%A6%E7%8E%84/%E7%AC%A6%E7%8E%84.model3.json',
            position: [-20, 60],
            mobilePosition: [80, 80],
            scale: 0.047,
            mobileScale: 0.06,
            stageStyle: {
              height: 450,
            },
            mobileStageStyle: {
              height: 370,
              width: 400,
            },
          }
        ]
      });
    }

    // vitepressBackToTop({
    //   // default
    //   threshold:300
    // })
  },




  
};

if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}

