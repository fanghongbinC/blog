(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{548:function(s,a,t){"use strict";t.r(a);var e=t(17),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux简单的vpn-创建方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux简单的vpn-创建方法"}},[s._v("#")]),s._v(" Linux简单的VPN 创建方法")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("blockquote",[t("p",[s._v("简单的VPN 创建   服务器必须是"),t("strong",[s._v("国外")]),s._v("的或者"),t("strong",[s._v("香港")]),s._v("的。一般取最近的（香港）\n实际只是利用服务端和客户端都安装好shadowsocks 软件,让他们之间创建一条加密的虚拟通道,以便绕开GFW（中国防火墙）的拦截。")])]),s._v(" "),t("h2",{attrs:{id:"第一种-使用直接使用服务器创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-使用直接使用服务器创建"}},[s._v("#")]),s._v(" 第一种 使用直接使用服务器创建")]),s._v(" "),t("blockquote",[t("p",[s._v("(我使用的系统centOS)")])]),s._v(" "),t("h3",{attrs:{id:"安装服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端"}},[s._v("#")]),s._v(" 安装服务端")]),s._v(" "),t("p",[s._v("先下载python 的资源包管理工具 pip")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\n")])])]),t("h4",{attrs:{id:"安装-pip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-pip"}},[s._v("#")]),s._v(" 安装 pip")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("python get-pip.py\n")])])]),t("h4",{attrs:{id:"安装-好影梭软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-好影梭软件"}},[s._v("#")]),s._v(" 安装 好影梭软件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("pip install shadowsocks\n")])])]),t("h4",{attrs:{id:"编辑被配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑被配置文件"}},[s._v("#")]),s._v(" 编辑被配置文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("vim /etc/shadowsocks.json\n")])])]),t("p",[s._v("//配置文件内容可如下 切记填写的内容 定下使用手机或电脑用vpn需要用到   实际操作不要把注释加上去")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('{\n"server":"172.31.9.57",      //服务器ip  如果是虚拟专用网络 使用内网ip\n"server_port": 1080,         //服务端ip 如果是有安全组策略（如：阿里云）的记得要 允许开启该端口\n                             //尽量TCP和UDP 都开启（毕竟有些软件需要UDP）\n"password":"abc",            //密码 使用 vpn\n"timeout": 600,              // 设置个超时 是毫秒还是秒啊。。。 有点忘记了\n"method": "aes-256-cfb"      //加密方式\n}\n')])])]),t("h4",{attrs:{id:"启动服务端的影梭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务端的影梭"}},[s._v("#")]),s._v(" 启动服务端的影梭")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("ssserver -c /etc/shadowsocks.json -d start \n")])])]),t("p",[s._v("//下面的是关闭的影梭的方法,需要的时候调用")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("//ssserver -c /etc/shadowsocks.json -d stop \n")])])]),t("p",[s._v("接来下来是")]),s._v(" "),t("h2",{attrs:{id:"第二种-docker-创建vpn-的方法也是使用shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种-docker-创建vpn-的方法也是使用shadowsocks"}},[s._v("#")]),s._v(" 第二种 Docker 创建VPN 的方法也是使用shadowsocks")]),s._v(" "),t("p",[s._v("直接在在"),t("strong",[s._v("安装了docker")]),s._v(" 的服务器上创建新容器即可 操作如下\n//拉取 shadowsocks的镜像\ndocker pull oddrationale/docker-shadowsocks\n//拉取完成 后直接运行镜像生成新的容器 不需要填写配置文件 直接在生成容器时就进行配置了")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("docker run -d -p 12345:12345 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 12345 -k welcome -m aes-256-cfb\n")])])]),t("p",[t("strong",[s._v("下面这一条是加上upd 端口映射的")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("docker run -d -p 12345:12345  -p 12345:12345/udp oddrationale/docker-shadowsocks -s 0.0.0.0 -p 12345 -k welcome -m aes-256-cfb\n")])])]),t("blockquote",[t("p",[s._v("-d参数允许 docker 常驻后台运行\n-p来指定要映射的端口，这里端口号统一保持一致即可。例如：12345  注意这其实跟第一方法1080一样 也需要在安全策略中开启该端口\n-s服务器 IP 地址，不用动\n-k后面设置你的 VPN 的密码，比如：welcome\n-m指定加密方式")])]),s._v(" "),t("p",[s._v("//查看容器是否已成功运行起来了。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("docker ps \n")])])]),t("p",[s._v("手机或电脑上使用的软件 "),t("a",{attrs:{href:"https://github.com/shadowsocks",target:"_blank",rel:"noopener noreferrer"}},[s._v("shadowsocks"),t("OutboundLink")],1),s._v(" GitHub下载 各个版本都有\n接下来的是"),t("strong",[s._v("电脑上的shadowsocks")]),s._v(" 截图\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190507234828935.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjc5NDE2Nw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v(" "),t("strong",[s._v("接下来的是手机版本")]),s._v(" "),t("img",{attrs:{src:"http://img.alicbin.com/img/20220203233248.png",alt:"image-20220203233248825"}}),s._v("\n进行配置\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190508000454411.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjc5NDE2Nw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[t("strong",[s._v("需要强调的服务器有安全组策略")]),s._v("(如阿里云)需要允许 "),t("strong",[s._v("服务器端口")]),s._v("才可以如上边的12345 和1080 如果还需要UDP也需要一并允许")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img.alicbin.com/img/20220203233308.jpeg",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);