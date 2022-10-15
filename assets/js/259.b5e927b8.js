(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{758:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"feign-失败降级未生效和超时配置优先级问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feign-失败降级未生效和超时配置优先级问题"}},[s._v("#")]),s._v(" Feign 失败降级未生效和超时配置优先级问题")]),s._v(" "),a("h3",{attrs:{id:"一、问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、问题"}},[s._v("#")]),s._v(" 一、问题：")]),s._v(" "),a("p",[s._v("生产环境"),a("strong",[s._v("服务A")]),s._v(" 通过feign调用 "),a("strong",[s._v("服务B")]),s._v("，服务A报警信息如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.alicbin.com/img/20220101210357.png",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("详细分析发现问题")])]),s._v(" "),a("p",[s._v("（1）服务A调用服务B失败，未触发声明的失败降级操作")]),s._v(" "),a("p",[s._v("（2）同时配置ribbon和feign超时时间，优先级问题：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('feign:\n  client:\n    config:\n      pay-service: # 对服务提供者（优先级高）：填对应服务提供者名称，\n                         # 对所有提供者(优先级低)：固定"default"\n        connectTimeout: 3000 # 连接超时时间单位ms\n        readTimeout: 8000  # 读取超时时间单位ms\nribbon:\n  ReadTimeout: 60000 #ribbon连接超时\n  ConnectTimeout: 60000 #ribbon读取超时\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"二、解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、解决"}},[s._v("#")]),s._v(" 二、解决：")]),s._v(" "),a("p",[a("strong",[s._v("针对上述问题(1) (2)通过源码debug分析得出结论分别如下")]),s._v("：")]),s._v(" "),a("p",[s._v("（1）Feign降级生效配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("feign:\n  hystrix:\n    enabled: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("（2）超时时间("),a("strong",[s._v("feign****的优先级高于ribbon")]),s._v(")：")]),s._v(" "),a("p",[a("strong",[s._v("同时配置ribbon和feign。feign会覆盖ribbon，详细代码见 LoadBalancerFeignClient类的如下方法")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Response")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Options")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URI")]),s._v(" asUri "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" URI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" clientName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" asUri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URI")]),s._v(" uriWithoutHost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cleanUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" clientName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FeignLoadBalancer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RibbonRequest")]),s._v(" ribbonRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FeignLoadBalancer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RibbonRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uriWithoutHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IClientConfig")]),s._v(" requestConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClientConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" clientName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lbClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clientName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeWithLoadBalancer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ribbonRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            requestConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClientException")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findIOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("io "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("第10行 Request.Options 为feign设置超时时间属性。会首先feign超时时间构造IClientConfig")]),s._v(" "),a("p",[s._v("第11行首先 lbClient(clientName)构造RetryableFeignLoadBalancer对象**，然后executeWithLoadBalancer方法中会重新注入上一步生成的IClientConfig**")]),s._v(" "),a("p",[s._v("**所以*"),a("em",[s._v("feign*"),a("em",[s._v("会覆盖ribbon的配置，优先级更高")])])]),s._v(" "),a("h3",{attrs:{id:"三、源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、源码分析"}},[s._v("#")]),s._v(" 三、源码分析：")]),s._v(" "),a("p",[s._v("知其然并知其所以然，Feign相关的主要流程（重点类和重要方法）总结如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.alicbin.com/img/20220101210303.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"原文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/mxmbk/p/11895963.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"相关扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展"}},[s._v("#")]),s._v(" 相关扩展")]),s._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-3",staticStyle:{"--randomColor":"var(--bodyBg)"},attrs:{href:"https://blog.csdn.net/niemingming/article/details/116795221",target:"_blank"}},[a("div",[a("p",{staticClass:"name"},[s._v("feign+hystrix超时")]),s._v(" "),a("p",{staticClass:"desc"},[s._v("feign+hystrix相关超时时间配置问题")])])])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" feign+hystrix超时\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'feign+hystrix相关超时时间配置问题'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//blog.csdn.net/niemingming/article/details/116795221 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run --name seata-server  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8091")]),s._v(":8091 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SEATA_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.53")]),s._v(".143.240 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SEATA_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8091")]),s._v("  seataio/seata-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);