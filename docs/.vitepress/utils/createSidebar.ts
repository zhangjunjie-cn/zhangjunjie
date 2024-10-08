export enum MY_TAB {
  BLOG = "/博客/",
  NOTE = "/笔记/",
}
export interface IItems {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: IItems[];
}
export interface ISideBar {
  [MY_TAB.BLOG]: IItems[];
  [MY_TAB.NOTE]: IItems[];
}

//你需要直接copy sidebar.ts 的内容。

export function createSidebar() {
  const res: ISideBar = {
    "/博客/":[
      {
        text: "2024年",
        collapsed: false,
        collapsible: true,

        // 与首页的最新博客相互关联
        items:[
          {
            text: "8月",
            items: [
              { text: "08 -> 第六版博客发布", link: "/博客/2024/08/18第六版博客发布" },
            ]
          },
          {
            text:"6月",
            items:[
              {text:"03 -> Excel文件大小优化",link:"/博客/2024/06/03Excel大小优化"},  
              {text:"02 -> 性能优化",link:"/博客/2024/06/02性能优化"}, 
            ]
          },
          {
            text:"5月",
            items:[
              {text:"29 -> 打印机共享",link:"/博客/2024/05/29打印机共享"},
              {text:"26 -> HA综合布线",link:"/博客/2024/05/26HA综合布线"},
              {text:"23 -> 第五版博客发布完成",link:"/博客/2024/05/23第五版博客发布完成"},
              {text:"11 -> 第四版博客新题性🎉🎉",link:"/博客/2024/05/11第四版博客新题性"},
              {text:"05 -> 第三版博客搭建完成",link:"/博客/2024/05/05第三版博客搭建完成"},         
              
            ]
          },
          {
            text:"2月",
            items:[
              {text:"11 -> 新年快乐！！🎉🎉",link:"/博客/2024/02/11新年快乐"},
              {text:"10 -> 第二版博客搭建完成",link:"/博客/2024/02/10第二版博客搭建完成"},
              // {text:"10 -> 第二版博客搭建完成",link:"/博客/2024/02/10第二版博客搭建完成"},
              
            ]
          },
          
        ]
      }
    ].map((item, i) => (!i ? item : { ...item, collapsed: true })),

  };
  return res;
}

// TODO 可以只做2023目录之后的自动生成脚本
/*import { readdir } from "fs/promises";

interface IItem {
	text: string;
	link: string;
}

export async function createSidebar(path: string, prefix: string) {
	const result = [];
	// 只会有两级,三级目录
	// 有目录的地方就不需要管md文件
	try {
		const firstLevelDir = await readdir(path);
		for (const firstItem of firstLevelDir) {
			// const firstItemDir = `${prefix}${firstItem}/`;
      if(!firstItem.endsWith('.md')) {
        const secondLevelDir = await readdir(`${path}${firstItem}/`)
        const resultItem = {
          text: firstItemText,
          link: firstItemDir,
          collapsed: false,
          items: [] as IItem[],
        };
        for(const secondItem of secondLevelDir) {

        }
      }


			const firstItemText = firstItem.substring(0, firstItem.length - 3); // 去除.md后缀
			const resultItem = {
				text: firstItemText,
				link: firstItemDir,
				collapsed: false,
				items: [] as IItem[],
			};
			// 简易地判断是否有三级目录
			if (firstItem.endsWith(".md")) {
				if (firstItem !== "index.md") {
					resultItem.items.push({
						text: firstItemText,
						link: firstItemDir + firstItem,
					});
				}
			} else {
			}
		}
	} catch (err) {
		console.error(err);
	}
}

createSidebar("./docs/博客/", "/博客/");
*/
