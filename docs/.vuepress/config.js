import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

const navbar = [
    {
		text: '💻 编程开发',
		children: [
			{
			  text: '🔥 编程语言 · 核心文档',
			  children: [
				{ text: 'Python · 语法基础', link: '/programming/language/python.md' },
				{ text: 'Python · 常用模块', link: '/programming/language/python-module.md' },
				{ text: 'Go · 语言语法', link: '/programming/language/go.md' },
				{ text: 'Go · 常用模块', link: '/programming/language/go-module.md' },
				{ text: 'SQL · 数据库查询', link: '/programming/language/sql.md' },
			  ]
			}
		]
    }
]

export default defineUserConfig({
	bundler: viteBundler(),
	lang: 'zh-CN',
	title: 'VVFock3r Docs',
	description: 'VVFock3r Docs',
	head: [['link', { rel: 'icon', href: '/favicon.png' }]],

	/* 主题配置 */
	theme: defaultTheme({
		logo: '/logo.png',
		navbar: navbar,
		sidebarDepth: 3,
		lastUpdated: true,
		lastUpdatedText: '最近更新',
		contributors: true,
		contributorsText: '作者',
		themePlugins: { 'prismjs': false},
	}),	

	/* 插件配置 */
	plugins: [
		prismjsPlugin({
			lineNumbers: false,
		}),
	],
})