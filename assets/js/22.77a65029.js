(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{522:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"清华博客-网页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清华博客-网页"}},[s._v("#")]),s._v(" 清华博客_网页")]),s._v(" "),a("h2",{attrs:{id:"_1-需要环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-需要环境"}},[s._v("#")]),s._v(" 1.需要环境")]),s._v(" "),a("p",[s._v("mysql5.7  数据库    本机")]),s._v(" "),a("p",[s._v("redis  缓存  本机")]),s._v(" "),a("p",[s._v("Minio  本地资源存储  docker 容器")]),s._v(" "),a("p",[s._v("nginx  反向代理服务")]),s._v(" "),a("h2",{attrs:{id:"_2-创建-后台接口服务容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-后台接口服务容器"}},[s._v("#")]),s._v(" 2.创建 后台接口服务容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run --restart always --name thu-api  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19100")]),s._v(":8080/tcp -v /home/java/thu_api/app.jar:/app.jar  -v /home/java/thu_api/app_logs:/opt/logs/app_logs -v /etc/localtime:/etc/localtime  -it -d adoptopenjdk/openjdk8-openj9:jdk8u292-b10_openj9-0.26.0-centos  java -jar -Dfile.encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8 /app.jar  --server.port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-创建-minio-本地存储容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-minio-本地存储容器"}},[s._v("#")]),s._v(" 3.创建 Minio 本地存储容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_ACCESS_KEY=admin"')]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_SECRET_KEY=xxxxx"')]),s._v("  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9001")]),s._v(":9001 --name minio1    -v /home/minio:/data  -v /home/minio:/root/.minio -d -it minio/minio:latest server /data  --console-address "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9001"')]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://img.alicbin.com/img/20220420131328",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_4-项目路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目路径"}},[s._v("#")]),s._v(" 4.项目路径")]),s._v(" "),a("p",[s._v("接口jar 所在路径   /home/java/thu_api")]),s._v(" "),a("p",[s._v("管理后台页面所在路径  /home/page/thu/admin")]),s._v(" "),a("p",[s._v("网页所在路径  /home/page/thu/www")]),s._v(" "),a("p",[s._v("Nginx 配置所在路径  /www/server/panel/vhost/nginx/")]),s._v(" "),a("h4",{attrs:{id:"nginx-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件"}},[s._v("#")]),s._v(" nginx 配置文件")]),s._v(" "),a("p",[s._v("aptqs.phys.tsinghua.edu.cn.conf")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听http的80端口")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" aptqs.phys.tsinghua.edu.cn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是我们设置的域名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \tserver_name _ thu.alicbin.com;  # 这是我们设置的域名")]),s._v("\n    \t\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#接口 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      location /{ ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#          proxy_pass http://127.0.0.1:19100;  #直接")]),s._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         proxy_set_header    Host   $host:80;  #不添加这行时访问需要 域名:7001才能访问到内网的机器，如果加了就不再需要后面的端口，直接使用域名访问")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header    X-Real-IP       $remote_addr;")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_hide_header   X-Powered-By;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      }")]),s._v("\n         \n           "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /home/page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         \n\n             \n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清华项目 管理页        ")]),s._v("\n\t "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.php index.html index.htm default.php default.htm default.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /home/page/thu/www")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         \n \t "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.php index.html index.htm default.php default.htm default.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /home/page/thu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         \n    \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("邮箱发送")]),s._v(" 是通过 465端口 进行通知")])])])}),[],!1,null,null,null);t.default=e.exports}}]);