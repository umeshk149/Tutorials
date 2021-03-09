(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{376:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tailwindcss-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss-core"}},[t._v("#")]),t._v(" TailwindCss (core)")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Creator's Twitter Confession")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://twitter.com/adamwathan/status/1226511611592085504?lang=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),a("OutboundLink")],1),t._v("\nDon't ever use "),a("code",[t._v("@apply bg-red-100;")]),t._v(" in "),a("code",[t._v(".css")]),t._v(" files. use only in "),a("code",[t._v('class="bg-red-100"')])])]),t._v(" "),a("h2",{attrs:{id:"utility-first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utility-first"}},[t._v("#")]),t._v(" Utility First")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("pros")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("No css. Use pre existing classes")])]),t._v(" "),a("li",[a("p",[t._v("No time waste on creating classnames")])]),t._v(" "),a("li",[a("p",[t._v("css stops growing")])]),t._v(" "),a("li",[a("p",[t._v("More productivity")])]),t._v(" "),a("li",[a("p",[t._v("saves time")]),t._v(" "),a("ul",[a("li",[t._v("Type "),a("code",[t._v("flex")]),t._v(" instead of "),a("code",[t._v(".foo{ display:flex; }")])]),t._v(" "),a("li",[t._v("Type "),a("code",[t._v("pt-0")]),t._v(" instead of "),a("code",[t._v(".foo{ padding-top: 0; }")])])])]),t._v(" "),a("li",[a("p",[t._v("Responsive")])]),t._v(" "),a("li",[a("p",[t._v("Pseudo classes "),a("code",[t._v("[Hover, focus, etc]")])])]),t._v(" "),a("li",[a("p",[t._v("Components - Using repeated classes combination")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @apply bg-red-300 w-full p-4 rounded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Use custom prefix to identify easily in html*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".cc-btn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OR")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$prefix")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cc-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cc = custom css")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("."),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("#{$prefix}")]),t._v("btn ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//o/p:  .cc-btn {...}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"pseudo-class-variant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-class-variant"}},[t._v("#")]),t._v(" Pseudo class variant")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("All utility classes dont have all Pseudo classes due to file size.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Pseudo Classes */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" focus|hover|disabled|active|visited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Use this*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" group-hover|focus-within "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Use this*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" first-child|last-child|odd-child|even-child "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Avoid it. Better use core css with @apply */")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Usage : "),a("code",[t._v("hover:bg-color-blue-600")]),t._v(" , "),a("code",[t._v("focus:text-white")])])]),t._v(" "),a("li",[a("p",[t._v("Usage (responsive) : "),a("code",[t._v("md:hover:w-3")])])]),t._v(" "),a("li",[a("p",[t._v("Default config - "),a("a",{attrs:{href:"https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"add-base-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-base-styles"}},[t._v("#")]),t._v(" Add base styles")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Base = Global = Beginning of stylesheet")])]),t._v(" "),a("li",[a("p",[t._v("Uses "),a("code",[t._v("Normalize.css")]),t._v(" and some more initial setup.")])]),t._v(" "),a("li",[a("p",[t._v("Named as "),a("strong",[t._v("Preflight")]),t._v(" - "),a("a",{attrs:{href:"https://unpkg.com/tailwindcss@1.1.2/dist/base.css",target:"_blank",rel:"noopener noreferrer"}},[t._v("link to base.css"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Add Custom styles")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Proxima Nova"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/fonts/proxima-nova/400-regular.woff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"woff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-2xl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nh2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @apply text-xl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"extracting-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extracting-components"}},[t._v("#")]),t._v(" Extracting components")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Reuse code as components - [ Css OR Vuejs/Reactjs ]")])]),t._v(" "),a("li",[a("p",[t._v("Css Components")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Use "),a("code",[t._v("@apply")])])]),t._v(" "),a("li",[a("p",[t._v("Cannot use "),a("code",[t._v("hover: , focus: , {screen}")]),t._v(" in "),a("code",[t._v("@apply")]),t._v(". So use normal "),a("code",[t._v(".fclass:hover")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Responsive classes are not created.")])]),t._v(" "),a("li",[a("p",[t._v("Use "),a("code",[t._v("@responsive")]),t._v(" if it's required.")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[t._v("@tailwind components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Css components */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-green ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" bg-green-400 text-white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n."),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("btn-green")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" bg-green-200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@screen")]),t._v(" md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-green ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @apply inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n@tailwind utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"adding-new-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-utilities"}},[t._v("#")]),t._v(" Adding new utilities")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@responsive")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*gives sm:rotate-0, md:rotate-0, etc*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@variants")]),t._v(" hover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*focus takes precedence over hover.*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".rotate-0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".rotate-90")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".rotate-180")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("180deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),a("blockquote",[a("p",[t._v("Configuration - "),a("a",{attrs:{href:"https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tailwind.config.js"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colors"}},[t._v("#")]),t._v(" Colors")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*tailwind.config.js*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("theme:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("colors:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var(--color-primary)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* :root {  --color-primary: #121547;  } */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("secondary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#5c6ac4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"variants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variants"}},[t._v("#")]),t._v(" Variants")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("variants"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'responsive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hover'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);