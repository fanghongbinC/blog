(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{667:function(s,t,n){"use strict";n.r(t);var e=n(17),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"this-function-has-none-of-deterministic-no-sql-or-reads-sql-data-in-its-de-错误解决办法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-function-has-none-of-deterministic-no-sql-or-reads-sql-data-in-its-de-错误解决办法"}},[s._v("#")]),s._v(" This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its de 错误解决办法")]),s._v(" "),n("blockquote",[n("p",[s._v("这是我们开启了bin-log, 我们就必须指定我们的函数是否是\n1 DETERMINISTIC 确定性的\n2 NO SQL 没有SQl语句，当然也不会修改数据\n3 READS SQL DATA 只是读取数据，当然也不会修改数据\n4 MODIFIES SQL DATA 要修改数据\n5 CONTAINS SQL 包含了SQL语句")])]),s._v(" "),n("p",[s._v("其中在function里面，只有 DETERMINISTIC, NO SQL 和 READS SQL DATA 被支持。如果我们开启了 bin-log, 我们就必须为我们的function指定一个参数。")]),s._v(" "),n("p",[s._v("在MySQL中创建函数时出现这种错误的解决方法：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" log_bin_trust_function_creators"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("TRUE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);