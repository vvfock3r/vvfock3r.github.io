# VuePress 指北

## 介绍

**本文档所使用的版本**

* `OS`：`Windows 10`
* `Nodejs`：`v24.12.0`
* `VuePress`：`2.0.0-rc.26`

**VuePress文档**

官方文档：[https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)

代码高亮：[https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html](https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html)

<br />

## 安装

参考：[https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#依赖环境](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E4%BE%9D%E8%B5%96%E7%8E%AF%E5%A2%83)

```bash
# (1) 创建并进入一个新目录
C:\Users\VVFock3r\Desktop> mkdir document && cd document

# (2) 初始化项目
C:\Users\VVFock3r\Desktop\document> git init
Initialized empty Git repository in C:/Users/VVFock3r/Desktop/document/.git/

C:\Users\VVFock3r\Desktop\document> npm init  # 一路回车, 后期根据实际情况修改

# (3) 安装VuePress
npm install -D vuepress@next  # 安装 vuepress
npm install -D sass-embedded  # 安装 Sass 编译器
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next  # 安装打包工具和主题

# (4) 在package.json中修改脚本命令(scripts部分)，完整的package.json如下：
{
  "name": "document",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "@vuepress/bundler-vite": "^2.0.0-rc.26",
    "@vuepress/theme-default": "^2.0.0-rc.121",
    "sass-embedded": "^1.96.0",
    "vuepress": "^2.0.0-rc.26"
  }
}


# (5) 创建 docs 目录（用于存放Markdown文档）和.vuepress目录（存放所有vuepress相关文件）
C:\Users\VVFock3r\Desktop\document> mkdir docs && cd docs
C:\Users\VVFock3r\Desktop\document> mkdir .vuepress

# (6) 创建 VuePress 配置文件 docs/.vuepress/config.js
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})

# (7) 创建 .gitignore 文件
node_modules
docs/.vuepress/.temp
docs/.vuepress/.cache
docs/.vuepress/dist
.idea

# (8) 创建第一篇文档
C:\Users\VVFock3r\Desktop\document> echo # Hello VuePress > docs/README.md

# (9) 启动内置开发服务器
C:\Users\VVFock3r\Desktop\document> npm run docs:dev

> document@1.0.0 docs:dev
> vuepress dev docs

√ Initializing and preparing data - done in 101ms

  vite v7.1.12 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.96.10:8080/
  ➜  Network: http://192.168.126.1:8080/
  ➜  Network: http://192.168.248.1:8080/
```

<br />

## 配置

### 语言和标题

`docs/.vuepress/config.js`

```javascript
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: 'zh-CN',
  title: '在线文档',
  description: '在线文档',
})
```

<br />

### 布局宽度调整

`docs/.vuepress/styles/index.scss`

```javascript
:root {
  /* 侧边栏宽度 */
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  
  /* 内容区域宽度 */
  --content-width: 85%;
}
```

<br />

### 添加导航栏

`docs/.vuepress/config.js`

```javascript
const navbar = [
    {
		text: '编程开发',
		children: [
			{
			  text: '🔥 编程语言 · 核心文档',
			  children: [
				{ text: 'Python · 语法基础', link: '/programming/language/python.md' },
				{ text: 'Python · 常用模块', link: '/programming/language/python-module.md' },
				{ text: 'Go · 语言语法', link: '/programming/language/go.md' },
				{ text: 'Go · 常用模块', link: '/programming/language/go-module.md' },
				{ text: 'SQL · 数据库查询', link: '/program/language/sql.md' },
			  ]
			}
		]
    }
]

export default defineUserConfig({
	theme: defaultTheme({
		navbar: navbar,
	}),
})
```

<br />

### 代码去掉行号

`docs/.vuepress/config.js`

::: warning 注意事项

配置参数需要写到`plugins`位置中，否则不生效。

但是这样会会WARN日志，原因是默认主题已经加载`plugins`插件了，相当于总共加载了两次该插件，后加载的配置（我们的）会覆盖前面的（主题的）配置。

虽然不影响使用，但是为了不打印WARN日志，所以我们在主题中关闭 `prismjs`插件

:::

```javascript
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

export default defineUserConfig({
  theme: defaultTheme({
	navbar: navbar,	
	themePlugins: { 'prismjs': false},
  }),
  plugins: [
    prismjsPlugin({
      lineNumbers: false,
    }),
  ],
})
```

<br />

### 配置 Favicon

`docs/.vuepress/config.js`

```javascript
export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
})
```

图片文件路径： `docs/.vuepress/public/favicon.png`

<br />

### 配置 Logo

`docs/.vuepress/config.js`

```javascript
export default defineUserConfig({
  theme: defaultTheme({
	logo: '/logo.png',
  }),
})
```

图片文件路径： `docs/.vuepress/public/logo.png`

<br />

### 配置导航

**1、配置左侧导航提取标题深度**

`docs/.vuepress/config.js`

```javascript
export default defineUserConfig({
  theme: defaultTheme({
	sidebarDepth: 4, // 提取 h2 ~ h5
  }),
})
```

<br />

### 优化代码选项卡

`docs/.vuepress/styles/index.scss`

```SAS
:root {
  /* 代码选项卡消除左右上角的空隙 */
  .vp-code-tabs .vp-code-tab {    
    --code-border-radius: 0 0 6px 6px;
  }
}
```

<br />

### 关闭左侧导航

可以在某篇markdown文档中单独关闭左侧导航

```md
---
sidebar: false
---
```

<br />

### 设置页面样式

**1、页面添加一个类**

```md
---
pageClass: meta-bottom-right
---
```

**2、`docs/.vuepress/styles/index.scss`中设置样式（注意不是写在:root { }中的）**

```css
/* 调整 最近更新/作者 位置 */
.meta-bottom-right {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
}
```

<br />

### 设置表格宽度

**`docs/.vuepress/styles/index.scss`中设置样式（注意不是写在:root { }中的）**

```css
/* 设置表格占满整个宽度, 并且列等分宽度 */
table {
  display: table;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  text-align: center;
}
```

<br />

## 用法

### 提示容器

文档：[https://ecosystem.vuejs.press/zh/themes/default/markdown.html#提示容器](https://ecosystem.vuejs.press/zh/themes/default/markdown.html#提示容器)

**语法：**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: info
这是一个信息
:::

::: important
这是一个重要信息
:::

::: note
这是一个备注
:::

::: details
这是一个 details 标签
:::
```

**效果**

::: tip

这是一个提示

:::

::: warning

这是一个警告

:::

::: danger

这是一个危险警告

:::

::: info

这是一个信息

:::

::: important

这是一个重要信息

:::

::: note

这是一个备注

:::

::: details

这是一个 details 标签

:::

<br />

### 普通选项卡

文档：[https://ecosystem.vuejs.press/zh/themes/default/markdown.html#选项卡](https://ecosystem.vuejs.press/zh/themes/default/markdown.html#选项卡)

**语法**

````md
::: tabs

@tab 选项卡 1

这是选项卡 1 的内容。

```js
console.log('你好，VuePress!')
```

@tab 选项卡 2

这是选项卡 2 的内容。

- 列表项 1
- 列表项 2
- 列表项 3

:::
````

**效果**

::: tabs

@tab 选项卡 1

这是选项卡 1 的内容。

```js
console.log('你好，VuePress!')
```

@tab 选项卡 2

这是选项卡 2 的内容。

- 列表项 1
- 列表项 2
- 列表项 3

:::

<br />

### 代码选项卡

文档：[https://ecosystem.vuejs.press/zh/themes/default/markdown.html#代码选项卡](https://ecosystem.vuejs.press/zh/themes/default/markdown.html#代码选项卡)

**语法**

````md
::: code-tabs

@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```

:::
````

**效果**

::: code-tabs

@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```

:::

<br />

### 高亮指定行

**语法**

````typescript
```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuepress.vuejs.org/images/hero.png',
  }),
})
```
````

**效果**

```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuepress.vuejs.org/images/hero.png',
  }),
})
```

<br />

### 行间距调整

::: important

Markdown语法写法差异到值渲染效果不一致，可以查看下方两个列表的不同效果

Markdown编辑器中可能看不出区别，<span style="color: red;">可以将内容拷贝到文本编辑器（比如Notepad++）中查看差异 或 修改</span>

:::

**列表1：大行间距**

* 1

* 2

* 3

**列表2：小行间距**

* 1
* 2
* 3

<hr />

```md
**列表1：大行间距**

* 1

* 2

* 3
```

```md
**列表2：小行间距**

* 1
* 2
* 3
```



<br />

## 部署

### 方式一：Github Pages

文档：[https://docs.github.com/en/pages](https://docs.github.com/en/pages)

::: tip 思路

1、按照Github Pages要求的名称创建仓库，比如 `vvfock3r.github.io`

2、编写一个Action，用于将VuePress构建后的静态资源文件推送到本仓库的`gh-pages`分支

3、Github Pages使用内置的Action（pages-build-deployment）将我们的`gh-pages`分支资源部署为静态网站

4、网站访问地址：`https://<用户名>.github.io/`

:::

**1.新建一个仓库，要求如下：**

* 仓库名称必须是：**`GitHub用户名.github.io`**
* 仓库必须是公开的（`Public`）

<br />

**2.正常提交我们的VuePress文档**

```shel
git add *
git commit -m "first commit"
git push
```

<br />

**3.编写一个Github Action工作流，用于将VuePress打包后的静态资源推送到另一个分支上去**

::: details 项目根目录下创建 .github/workflows 目录

```bash
C:\Users\VVFock3r\Desktop\vvfock3r.github.io> mkdir .github
C:\Users\VVFock3r\Desktop\vvfock3r.github.io> cd .github
C:\Users\VVFock3r\Desktop\vvfock3r.github.io\.github> mkdir workflows
```

:::

::: details 创建Action文件：build-vuepress-and-push-to-branch.yml（文件名可以任意命名）

```yaml
name: build-vuepress-and-push-to-branch

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 24

      - run: npm ci
      - run: npm run docs:build

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist
          publish_branch: gh-pages
```

:::

提交完后会执行我们的Action，将VuePress打包后的静态资源放到仓库的 `gh-pages` 分支上

<br />

**4.设置Github Pages参数**

点击仓库上面`Settings` -> 左侧的`Pages`， `Build and deployment` 部分的参数设置如下：

* `Source`：选择部署站点的来源，默认是`Deploy from a branch`（从分支拉取页面文件来部署），不需要修改
* `Branch`：分支选择 `gh-pages`，根目录选择 `/root`

以上设置完成后点击 `Save`，再随便做一次提交，然后等待Github帮我们自动部署个人网站

<br />

**5.浏览器访问测试：`https://<用户名>.github.io/`**

<br />

**6.删除Github上中间提交步骤中执行报错的Action，看起更干净！**

















