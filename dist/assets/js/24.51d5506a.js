(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{385:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("vc-img",{attrs:{url:"https://v1.vuepress.vuejs.org/hero.png",size:"sm"}}),e._v(" "),s("h1",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[e._v("#")]),e._v(" VuePress")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://vitepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitepress"),s("OutboundLink")],1),e._v(" may be the better alternative in near future. It's better for build up & Hot module reloading. Vuepress has its issues with Webpack.")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://v1.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),s("OutboundLink")],1),e._v(" is a Single Page Application (SPA) composed of two parts:")]),e._v(" "),s("ol",[s("li",[e._v("A "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimalistic static site generator"),s("OutboundLink")],1),e._v(" with a Vue "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("theming system"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin API"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("A "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default theme"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("It uses "),s("code",[e._v("markdown-it")]),e._v(" to convert markdown to html.")])]),e._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" create vuepress-site "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("optionalDirectoryName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("h2",{attrs:{id:"folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[e._v("#")]),e._v(" Folder structure")]),e._v(" "),s("p",[e._v("Only "),s("code",[e._v("components")]),e._v(" & "),s("code",[e._v("styles")]),e._v(" folder is installed by default. Rest we can create if needed.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("\n├── docs/src\n    ├── .vuepress\n        ├── components          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("preinstalled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        ├── theme\n        │   └── Layout.vue\n        ├── public\n        ├── styles              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("preinstalled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        │   ├── index.styl\n        │   └── palette.styl\n        ├── templates\n        │   ├── dev.html\n        │   └── ssr.html\n        ├── config.js           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("preinstalled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        └── enhanceApp.js       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("preinstalled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("Ref - "),s("a",{attrs:{href:"https://vuepress.vuejs.org/config",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress.vuejs.org/config"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("Config file - "),s("code",[e._v(".vuepress/config,js")])]),e._v(" "),s("li",[s("code",[e._v("#")]),e._v(", "),s("code",[e._v("##")]),e._v(" & "),s("code",[e._v("###")]),e._v(" markdown tags are converted into "),s("code",[e._v("h1")]),e._v(", "),s("code",[e._v("h2")]),e._v(" & "),s("code",[e._v("h3")]),e._v(" respectively.")]),e._v(" "),s("li",[e._v("Store assets in same folder as markdown file which calls - "),s("code",[e._v("![An image](./i.png)")]),e._v(" "),s("ul",[s("li",[e._v("Better to store on cloud/free image hosting sites")])])])]),e._v(" "),s("h2",{attrs:{id:"markdown-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extensions"}},[e._v("#")]),e._v(" Markdown Extensions")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("README.md")]),e._v(" is converted to "),s("code",[e._v("index.html")])]),e._v(" "),s("li",[e._v("Url for "),s("code",[e._v("docs/src/foo/README.md")]),e._v(" can be"),s("code",[e._v("localhost/foo/")])]),e._v(" "),s("li",[e._v("Url for "),s("code",[e._v("docs/src/foo/bar.md")]),e._v(" can be"),s("code",[e._v("localhost/foo/bar.html")])]),e._v(" "),s("li",[e._v("Emoji "),s("code",[e._v(":tada:")]),e._v(" - 🎉")]),e._v(" "),s("li",[e._v("Table Of Content - "),s("code",[e._v("[[toc]]")])])]),e._v(" "),s("ul",[s("li",[e._v("Custom containers "),s("strong",[s("code",[e._v("warning, danger, tip, details")])]),e._v(" with title")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[e._v("::: warning Mytitle\nThis is a warning.\n:::\n")])])]),s("ul",[s("li",[e._v("Syntax highlighting is achieved by "),s("strong",[e._v("Prism")])]),e._v(" "),s("li",[e._v("Code snippets - Import code from files - "),s("code",[e._v("<<< @/foo.css")]),e._v(" where "),s("code",[e._v("@ is process.cwd()")]),e._v(" current working directory.\n"),s("ul",[s("li",[s("code",[e._v("process.cwd")]),e._v(" is nothing but the directory where the process "),s("code",[e._v("npm run dev")]),e._v(" starts.")]),e._v(" "),s("li",[s("code",[e._v("docs/package.json")]),e._v(" is imported as "),s("code",[e._v("<<< @/package.json")]),e._v(" from anywhere.")])])])]),e._v(" "),s("h2",{attrs:{id:"using-vue-in-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown"}},[e._v("#")]),e._v(" Using Vue in Markdown")]),e._v(" "),s("ul",[s("li",[e._v("access Browser / DOM APIs in "),s("code",[e._v("beforeMount()")]),e._v(" or "),s("code",[e._v("mounted()")]),e._v(" hooks.")]),e._v(" "),s("li",[e._v("Conversion flow - "),s("code",[e._v("Markdown -> html(by markdownit) -> Vue component -> Webpack -> Html")])]),e._v(" "),s("li",[e._v("Can use this in markdown")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[e._v("{{ 2 + 2 }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("span")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("i in 3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("{{ i }} "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n{{ $page }}\n")])])]),s("ul",[s("li",[e._v("Escape vue code using")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[e._v("::: v-pre\n{{ $page }}\n:::\n\nOR\n\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[e._v("md")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-md"}},[e._v("{{ $page }}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("```")])]),e._v("\n")])])]),s("ul",[s("li",[e._v("Component in "),s("code",[e._v(".vuepress/components")]),e._v(" are registered automatically\n"),s("ul",[s("li",[s("code",[e._v(".vuepress/components/Foo.vue")]),e._v(" -> "),s("code",[e._v("<Foo/>")])]),e._v(" "),s("li",[s("code",[e._v(".vuepress/components/Foo/Bar.vue")]),e._v(" -> "),s("code",[e._v("<Foo-Bar/>")])])])]),e._v(" "),s("li",[e._v("Preprocessor in components\n"),s("ul",[s("li",[e._v("Sass - add "),s("code",[e._v("yarn add -D sass-loader node-sass")])]),e._v(" "),s("li",[e._v("Stylus - already added and used by Vuepress")])])])]),e._v(" "),s("h2",{attrs:{id:"frontmatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[e._v("#")]),e._v(" Frontmatter")]),e._v(" "),s("ul",[s("li",[e._v("Always at top with predefined (or custom) variables")]),e._v(" "),s("li",[e._v("Predefined variables - "),s("strong",[s("code",[e._v("title, lang, description, layout, permalink, meta. metaTitle, canonicalUrl")])])]),e._v(" "),s("li",[e._v("Predefined variables (theme) - "),s("strong",[s("code",[e._v("navbar, sidebar, prev, next, search, tags")])])])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e._v("title: hello\ndescription: This is hello world")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\nTitle is {{ $frontmatter.title }}\n")])])]),s("h2",{attrs:{id:"permalinks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permalinks"}},[e._v("#")]),e._v(" Permalinks")]),e._v(" "),s("ul",[s("li",[e._v("A permanent link is good for blogs")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[e._v("title: Hello World\npermalink: /hello-world")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n")])])]),s("h2",{attrs:{id:"global-computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-computed"}},[e._v("#")]),e._v(" Global Computed")]),e._v(" "),s("ul",[s("li",[s("strong",[s("code",[e._v("$site, $page, $lang, $frontmatter, $localePath, $title, $description, $themeConfig")])])]),e._v(" "),s("li",[e._v("Can use this in theme files or in markdown")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);