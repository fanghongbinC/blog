(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{678:function(a,s,t){"use strict";t.r(s);var n=t(17),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"向一个数组中插入元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向一个数组中插入元素"}},[a._v("#")]),a._v(" 向一个数组中插入元素")]),a._v(" "),t("p",[a._v("向一个数组中插入元素是平时很常见的一件事情。你可以使用push在数组尾部插入元素,可以用unshift在数组头部插入元素,也可以用splice在数组中间插入元素。")]),a._v(" "),t("p",[a._v("但是这些已知的方法，并不意味着没有更加高效的方法。让我们接着往下看……")]),a._v(" "),t("h2",{attrs:{id:"向数组结尾添加元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向数组结尾添加元素"}},[a._v("#")]),a._v(" 向数组结尾添加元素")]),a._v(" "),t("p",[a._v("向数组结尾添加元素用push()很简单，但下面有一个更高效的方法")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" arr2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\narr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\narr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\narr2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("两种方法都是修改原始数组。不信？看看"),t("a",{attrs:{href:"http://jsperf.com/push-item-inside-an-array",target:"_blank",rel:"noopener noreferrer"}},[a._v("jsperf"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"手机上的效率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手机上的效率"}},[a._v("#")]),a._v(" 手机上的效率")]),a._v(" "),t("h4",{attrs:{id:"android-v4-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-v4-2-2"}},[a._v("#")]),a._v(" Android (v4.2.2)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr.push(6);")]),a._v(" and "),t("em",[a._v("arr[arr.length] = 6;")]),a._v(" 性能相同 // 3 319 694 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 比其他两个方法慢50.61%")])]),a._v(" "),t("h4",{attrs:{id:"chrome-mobile-v33-0-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-mobile-v33-0-0"}},[a._v("#")]),a._v(" Chrome Mobile (v33.0.0)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" // 6 125 975 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.push(6);")]),a._v(" 慢66.74%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢87.63%")])]),a._v(" "),t("h4",{attrs:{id:"safari-mobile-v9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safari-mobile-v9"}},[a._v("#")]),a._v(" Safari Mobile (v9)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" // 7 452 898 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.push(6);")]),a._v(" 慢40.19%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢49.78%")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("最快的为\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 平均 5 632 856 ops/sec")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢35.64%")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" arr2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢62.67%")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"桌面上的效率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桌面上的效率"}},[a._v("#")]),a._v(" 桌面上的效率")]),a._v(" "),t("h4",{attrs:{id:"chrome-v48-0-2564"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-v48-0-2564"}},[a._v("#")]),a._v(" Chrome (v48.0.2564)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" // 21 602 722 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.push(6);")]),a._v(" 慢61.94%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢87.45%")])]),a._v(" "),t("h4",{attrs:{id:"firefox-v44"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firefox-v44"}},[a._v("#")]),a._v(" Firefox (v44)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr.push(6);")]),a._v(" // 56 032 805 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" 慢0.52%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢87.36%")])]),a._v(" "),t("h4",{attrs:{id:"ie-v11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ie-v11"}},[a._v("#")]),a._v(" IE (v11)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" // 67 197 046 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.push(6);")]),a._v(" 慢39.61%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢93.41%")])]),a._v(" "),t("h4",{attrs:{id:"opera-v35-0-2066-68"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opera-v35-0-2066-68"}},[a._v("#")]),a._v(" Opera (v35.0.2066.68)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" // 30 775 071 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.push(6);")]),a._v(" 慢71.60%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢83.70%")])]),a._v(" "),t("h4",{attrs:{id:"safari-v9-0-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safari-v9-0-3"}},[a._v("#")]),a._v(" Safari (v9.0.3)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr.push(6);")]),a._v(" // 42 670 978 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr[arr.length] = 6;")]),a._v(" 慢0.80%")]),a._v(" "),t("li",[t("em",[a._v("arr2 = arr.concat([6]);")]),a._v(" 慢76.07%")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("最快的为\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 平均42 345 449 ops/sec")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢34.66%")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" arr2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢85.79%")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"向数组的头部添加元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向数组的头部添加元素"}},[a._v("#")]),a._v(" 向数组的头部添加元素")]),a._v(" "),t("p",[a._v("现在我们试着向数组的头部添加元素：")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\narr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unshift")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("这里有一些小区别，unshift操作的是原始数组，concat返回一个新数组，参考"),t("a",{attrs:{href:"http://jsperf.com/unshift-item-inside-an-array",target:"_blank",rel:"noopener noreferrer"}},[a._v("jsperf"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"手机上的效率-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手机上的效率-2"}},[a._v("#")]),a._v(" 手机上的效率 :")]),a._v(" "),t("h4",{attrs:{id:"android-v4-2-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-v4-2-2-2"}},[a._v("#")]),a._v(" Android (v4.2.2)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 1 808 717 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢97.85%")])]),a._v(" "),t("h4",{attrs:{id:"chrome-mobile-v33-0-0-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-mobile-v33-0-0-2"}},[a._v("#")]),a._v(" Chrome Mobile (v33.0.0)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 1 269 498 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢99.86%")])]),a._v(" "),t("h4",{attrs:{id:"safari-mobile-v9-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safari-mobile-v9-2"}},[a._v("#")]),a._v(" Safari Mobile (v9)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" // 3 250 184 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" 慢33.67%")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("最快的为\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 平均4 972 622 ops/sec")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unshift")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢64.70%")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"桌面上的效率-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桌面上的效率-2"}},[a._v("#")]),a._v(" 桌面上的效率")]),a._v(" "),t("h4",{attrs:{id:"chrome-v48-0-2564-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-v48-0-2564-2"}},[a._v("#")]),a._v(" Chrome (v48.0.2564)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 2 656 685 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢96.77%")])]),a._v(" "),t("h4",{attrs:{id:"firefox-v44-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firefox-v44-2"}},[a._v("#")]),a._v(" Firefox (v44)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 8 039 759 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢99.72%")])]),a._v(" "),t("h4",{attrs:{id:"ie-v11-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ie-v11-2"}},[a._v("#")]),a._v(" IE (v11)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 3 604 226 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢98.31%")])]),a._v(" "),t("h4",{attrs:{id:"opera-v35-0-2066-68-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opera-v35-0-2066-68-2"}},[a._v("#")]),a._v(" Opera (v35.0.2066.68)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" // 4 102 128 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" 慢97.44%")])]),a._v(" "),t("h4",{attrs:{id:"safari-v9-0-3-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safari-v9-0-3-2"}},[a._v("#")]),a._v(" Safari (v9.0.3)")]),a._v(" "),t("ol",[t("li",[t("em",[a._v("arr.unshift(0);")]),a._v(" // 12 356 477 ops/sec")]),a._v(" "),t("li",[t("em",[a._v("[0].concat(arr);")]),a._v(" 慢15.17%")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("最快的为\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("concat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 平均6 032 573 ops/sec")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unshift")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 慢78.65%")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"向数组中间添加元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向数组中间添加元素"}},[a._v("#")]),a._v(" 向数组中间添加元素")]),a._v(" "),t("p",[a._v("使用splice可以简单的向数组中间添加元素，这也是最高效的方法。")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" items "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'one'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'two'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'three'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'four'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nitems"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("splice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("我在许多浏览器和系统中进行了测试，结果都是相似的。希望这条小知识可以帮到你，也欢迎大家自行测试。")])])}),[],!1,null,null,null);s.default=r.exports}}]);