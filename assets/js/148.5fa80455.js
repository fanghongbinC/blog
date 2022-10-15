(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{647:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"generate-date-生成日期-统计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-date-生成日期-统计"}},[t._v("#")]),t._v(" generate_date_生成日期_统计")]),t._v(" "),n("h2",{attrs:{id:"_1、generate-date-作用-用于解决查询-历史统计-时没数据的时候-日期依旧显示-为0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、generate-date-作用-用于解决查询-历史统计-时没数据的时候-日期依旧显示-为0"}},[t._v("#")]),t._v(" 1、generate_date 作用 用于解决查询 历史统计 时没数据的时候 日期依旧显示 为0")]),t._v(" "),n("blockquote",[n("p",[t._v("生成日期_统计_储存")])]),t._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('DELIMITER //\nCREATE  PROCEDURE `generate_date`(x_start BIGINT,x_end BIGINT,x_unit varchar(20))\nbegin \n\t\t\t# 作用 用于解决 查询历史统计时 没数据的时候 日期依旧显示 为 0\n\t\t\t# 调用  \tcall generate_date(1600557199,UNIX_TIMESTAMP(now()),\'MONTH\'); DAY 天 MONTH 月  YEAR 年 然后查询   select * from tem_date;   \n\t\t  # 会 生成的到一个临时表 tem_date 用于查询统计的 进行左联\n\t\tdeclare result int default 0;\n\t\tdeclare var_count int default 0;\n\t\t\n\t\tDROP TABLE IF EXISTS `tem_date`; #删除上次可能存在的临时表\n\t\tcreate temporary table tem_date(id int AUTO_INCREMENT primary key,date timestamp NULL DEFAULT CURRENT_TIMESTAMP  \n\t)Engine=InnoDB default charset utf8;\n\t\n\t\n\tCASE x_unit\n\tWHEN "DAY" THEN\n\t\t SELECT TIMESTAMPDIFF(DAY,DATE_FORMAT(FROM_UNIXTIME(x_start) , "%Y-%m-%d %H:%i:%S"),DATE_FORMAT(FROM_UNIXTIME(x_end), "%Y-%m-%d %H:%i:%S"))  into var_count; \n\tWHEN "MONTH" THEN\n    SELECT TIMESTAMPDIFF(MONTH,DATE_FORMAT(FROM_UNIXTIME(x_start) , "%Y-%m-%d %H:%i:%S"),DATE_FORMAT(FROM_UNIXTIME(x_end), "%Y-%m-%d %H:%i:%S")) into  var_count; \n\tset var_count=var_count+1;\n\tWHEN "YEAR" THEN\n    SELECT TIMESTAMPDIFF(YEAR,DATE_FORMAT(FROM_UNIXTIME(x_start) , "%Y-%m-%d %H:%i:%S"),DATE_FORMAT(FROM_UNIXTIME(x_end), "%Y-%m-%d %H:%i:%S"\n)) into  var_count; \n\tset var_count=var_count+1;\n\tELSE\n\tset var_count=0;\n\tEND CASE;\n\n\n\t\n\tWHILE  var_count >= 0 DO\n\t\tCASE x_unit\n\t\tWHEN \'DAY\' THEN\n\t\t\tinsert into tem_date() values(null,date_add(FROM_UNIXTIME(x_start),interval var_count DAY));\n\t\tWHEN \'MONTH\' THEN\n\t\t\tinsert into tem_date() values(null,date_add(FROM_UNIXTIME(x_start),interval var_count MONTH));\n\t\tWHEN \'YEAR\' THEN\n\t\t\tinsert into tem_date() values(null,date_add(FROM_UNIXTIME(x_start),interval var_count YEAR));\n\t\tELSE\n\t\tset var_count=var_count;\n\t\tEND CASE;\n\t\t set var_count= var_count-1;\n\n  END WHILE;\n\t\t\nend\n  //\nDELIMITER ;\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br")])]),n("h5",{attrs:{id:"一、使用如下或-不间断的-含0-的日期统计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、使用如下或-不间断的-含0-的日期统计"}},[t._v("#")]),t._v(" 一、使用如下或 不间断的 含0 的日期统计")]),t._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('- 以下是整个测试 查询, 直接全部运行 一下代码即可\n\n-- 第一步 定义变量  mybatis 调用时 这些就是对应的参数了 \n set @x_unit="Day";  #查询 分组类型 按 日 Day  月 MONTH 年 YEAR\n set @x_start=1630557199;  #筛选的 开始时间戳 10位\n set @x_end=UNIX_TIMESTAMP(now());    #筛选的 结束时间戳 10位\n\n-- 第二  调用存储过程 生成 临时日期表\n call generate_date(@x_start,@x_end,@x_unit);   \n \n --  select * from tem_date;  #查询  生成的临时表的数据\n \n--  第三部查询 查询 统计 每天/每月/每年 的注册人数   查询的是user_info 根据 create_time 进行分组\nselect date_format(td.date, if(@x_unit = "DAY","%m-%d",if(@x_unit = "MONTH","%m","%Y"))) as "date" ,IFNULL(tt.count,0) as "count" \n from tem_date as td left join (\n  select date_format(create_time, if(@x_unit = "DAY","%Y-%m-%d",if(@x_unit = "MONTH","%Y-%m","%Y"))) as "date",\n\tcount(1)  as count \n from user_info  where  \n UNIX_TIMESTAMP(create_time) BETWEEN @x_start  and @x_end\n group by \n date_format(create_time, if(@x_unit = "DAY","%Y-%m-%d",if(@x_unit = "MONTH","%Y-%m","%Y")))\n ) tt on  date_format(td.date, if(@x_unit = "DAY","%Y-%m-%d",if(@x_unit = "MONTH","%Y-%m","%Y"))) =  tt.date\n order by td.date asc;\n-- 代码结束\n#得到结果 如 不间断 日期 和 统计(即使为0也会出现)\n#      11-22\t0\n#      11-23\t0\n#      11-24\t1\n#      11-25\t0\n#      11-26\t0\n#      11-27\t0\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])]),n("h5",{attrs:{id:"二、-默认没有-统计数为-0-统计列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、-默认没有-统计数为-0-统计列表"}},[t._v("#")]),t._v(" 二、 默认没有 统计数为 0 统计列表")]),t._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('--  下面这方法是应用于 忽视0 的日期 所以刻意不需要 先创建临时表\n select date_format(create_time, if(@x_unit = "DAY","%m-%d",if(@x_unit = "MONTH","%m","%Y")))as "date",\n\tcount(1)  as count \n from user_info  where  \n \n UNIX_TIMESTAMP(create_time) BETWEEN @x_start  and @x_end\n group by \n date_format(create_time, if(@x_unit = "DAY","%Y-%m-%d",if(@x_unit = "MONTH","%Y-%m","%Y")))\n ORDER BY create_time asc\n# 不需要使用到  存储过程 generate_date\n# 得到结果 如 间断 日期 和 统计(为0即不出现)\n#   11-07\t5\n#   11-10\t4\n#   11-16\t2\n#   11-21\t1\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h4",{attrs:{id:"查看-是否是今天"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看-是否是今天"}},[t._v("#")]),t._v(" 查看 是否是今天")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("  TO_DAYS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TO_DAYS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("blockquote",[n("h5",{attrs:{id:"作者-洪斌-http-blogs-alicbin-com"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作者-洪斌-http-blogs-alicbin-com"}},[t._v("#")]),t._v(" 作者：@洪斌  http://blogs.alicbin.com")])])])}),[],!1,null,null,null);s.default=e.exports}}]);