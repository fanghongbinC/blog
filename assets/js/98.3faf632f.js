(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{599:function(t,s,e){"use strict";e.r(s);var r=e(17),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"accessors-注解详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessors-注解详解"}},[t._v("#")]),t._v(" @Accessors 注解详解")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在你的工作中，有时候可能会看到 @Accessors(chain = true) 这样的注解，他是 "),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=lombok&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("lombok"),e("OutboundLink")],1),t._v(" 插件包中的一个注解，那么它是什么意思呢")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210505.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_1-accessors-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-accessors-源码"}},[t._v("#")]),t._v(" "),e("strong",[t._v("1. @Accessors 源码")])]),t._v(" "),e("p",[t._v("我们打开 @Accessors 的"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),e("OutboundLink")],1),t._v("可以看到：")]),t._v(" "),e("p",[t._v("（1）该注解主要作用是：当属性字段在生成 getter 和 setter 方法时，做一些相关的设置。")]),t._v(" "),e("p",[t._v("（2）当它可作用于类上时，修饰类中所有字段，当作用于具体字段时，只对该字段有效。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210519.png",alt:"img"}})]),t._v(" "),e("p",[t._v("该字段共有三个属性，分别是 fluent，chain，prefix，下面我们分别来说明下，他的意思分别是什么？")]),t._v(" "),e("h3",{attrs:{id:"accessors-属性说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessors-属性说明"}},[t._v("#")]),t._v(" @Accessors 属性说明")]),t._v(" "),e("h4",{attrs:{id:"_2-1-flugroup-ent-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-flugroup-ent-属性"}},[t._v("#")]),t._v(" 2.1 flugroup，ent 属性")]),t._v(" "),e("blockquote",[e("p",[t._v("不写默认为false，当该值为 true 时，对应字段的 getter 方法前面就没有 get，setter 方法就不会有 set。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210659.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_2-2-chain-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-chain-属性"}},[t._v("#")]),t._v(" 2.2 chain 属性")]),t._v(" "),e("blockquote",[e("p",[t._v("不写默认为false，当该值为 true 时，对应字段的 setter 方法调用后，会返回当前对象。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210721.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"_2-3-prefix-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-prefix-属性"}},[t._v("#")]),t._v(" 2.3 prefix 属性")]),t._v(" "),e("blockquote",[e("p",[t._v("该属性是一个字符串数组，当该数组有值时，表示忽略字段中对应的前缀，生成对应的 getter 和 setter 方法。")])]),t._v(" "),e("p",[t._v("比如现在有 xxName 字段和 yyAge 字段，xx 和 yy 分别是 name 字段和 age 字段的前缀。")]),t._v(" "),e("p",[t._v("那么，我们在生成的 getter 和 setter 方法如下，它也是带有 xx 和 yy 前缀的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210749.png",alt:"img"}})]),t._v(" "),e("p",[t._v("如果，我们把它的前缀加到 @Accessors 的属性值中，则可以像没有前缀那样，去调用字段的 getter和 setter 方法。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.alicbin.com/img/20220519210801.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);