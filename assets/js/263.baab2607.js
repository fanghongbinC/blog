(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{761:function(t,a,r){"use strict";r.r(a);var _=r(17),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mq简介以及架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mq简介以及架构图"}},[t._v("#")]),t._v(" MQ简介以及架构图")]),t._v(" "),r("h2",{attrs:{id:"一、什么是mq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是mq"}},[t._v("#")]),t._v(" 一、什么是MQ")]),t._v(" "),r("p",[t._v("原文")]),t._v(" "),r("p",[t._v("Message Query（MQ），消息队列中间件，很多初学者认为，MQ通过消息的发送和接受来实现程序的异步和解耦，mq主要用于异步操作，这个不是mq的真正目的，只不过是mq的应用，mq真正的目的是为了通讯。他屏蔽了复杂的通讯协议，像常用的dubbo，http协议都是同步的。")]),t._v(" "),r("p",[t._v("这两种协议很难实现双端通讯，A调用B,B也可以主动调用A，而且不支持长连接。mq做的就是在这些协议上构建一个简单协议——生产者、消费者模型，mq带给我们的不是底层的通讯协议，而是更高层次的通讯模型。他定义了两个对象：发送数据的叫做生产者，接受消息的叫做消费者，我们可以无视底层的通讯协议，我们可以自己定义生产者消费者。")]),t._v(" "),r("h2",{attrs:{id:"二、mq的架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、mq的架构图"}},[t._v("#")]),t._v(" 二、MQ的架构图")]),t._v(" "),r("h3",{attrs:{id:"_1、传统电商服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、传统电商服务架构"}},[t._v("#")]),t._v(" 1、传统电商服务架构")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/f776cf15645e497a896f21a73a1ea7bc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3RlcmJlbkExOA==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),t._v(" "),r("p",[t._v("根据上图我们可以看出，传统的订单服务架构是串行的，即当执行完业务1后才会执行业务2，当执行完最后一个业务的时候才会开始逐层返回成功信息，最终返回给客户端。\n当这套流程的业务很多的情况，可能会需要大量的时间来完成整套业务逻辑，导致效率差，吞吐量小。\n同时，若存在两个业务之间交互时出现网络波动的情况，则会导致整个服务都失效，耦合度太高。\n但同时这套逻辑相对简单，非常好实现维护，容易排查错误。")]),t._v(" "),r("h3",{attrs:{id:"_2、mq电商服务架构图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、mq电商服务架构图"}},[t._v("#")]),t._v(" 2、MQ电商服务架构图")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/953d8c279f914c7599084384338a281a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3RlcmJlbkExOA==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),t._v(" "),r("p",[t._v("根据上图可以看出，基于MQ的电商服务是根据创建订单的消息是否传入消息队列（MQ）中来判断是否下单成功的，与后续业务无关，消息队列会在后续分别将订单消息传入各个业务当中去，保证逻辑的完整性。\n由于消息队列作为类似一个中间件的存在出现，使得整个逻辑框架的耦合度大大降低，并且可以快速的执行订单，吞吐量加大，效率高。\n但是缺点在于，这套逻辑多应用于高并发的业务中，需要应用分布式事务解决方案，相较于传统逻辑框架更复杂，维护起来工作量大。")]),t._v(" "),r("h2",{attrs:{id:"什么是事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是事务"}},[t._v("#")]),t._v(" 什么是事务？")]),t._v(" "),r("h3",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),r("p",[t._v("例如：在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序。\n特性\n事务是恢复和并发控制的基本单位。")]),t._v(" "),r("p",[t._v("事务应该具有4个属性：原子性、一致性、隔离性、持久性。这四个属性通常称为ACID特性。")]),t._v(" "),r("p",[t._v("原子性（atomicity）。一个事务是一个不可分割的工作单位，事务中包括的操作要么都做，要么都不做。\n一致性（consistency）。事务必须是使数据库从一个一致性状态变到另一个一致性状态。一致性与原子性是密切相关的。\n隔离性（isolation）。一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。\n持久性（durability）。持久性也称永久性（permanence），指一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。接下来的其他操作或故障不应该对其有任何影响。\n事务类型")]),t._v(" "),r("h2",{attrs:{id:"mq的两种流派"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mq的两种流派"}},[t._v("#")]),t._v(" MQ的两种流派")]),t._v(" "),r("h3",{attrs:{id:"_1-有broker的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-有broker的"}},[t._v("#")]),t._v(" 1,有broker的")]),t._v(" "),r("p",[t._v("broker是什么，可以理解为是一个中转站。生产者将消息发送给他就结束自己的任务了，broker将消息主动推送给消费者（具体的将消息推送到哪个队列，或者说消费者主动请求）")]),t._v(" "),r("p",[t._v("重topic\n必须要有topic")]),t._v(" "),r("p",[t._v("kafka：全球消息处理性能最快的一款mq")]),t._v(" "),r("p",[t._v("rocket：阿里内部的一个大神根据kafka的执行原理手写的，性能与kafka差不多，但是功能上比kafka要多，比如说顺序消费。")]),t._v(" "),r("p",[t._v("轻topic\n可以没有topic，topic只是一种中转模式")]),t._v(" "),r("p",[t._v("rabbitmq")]),t._v(" "),r("h3",{attrs:{id:"_2-无broker的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-无broker的"}},[t._v("#")]),t._v(" 2,无broker的")]),t._v(" "),r("p",[t._v("zeromq：没有使用broker，是直接使用socket进行通信。")]),t._v(" "),r("p",[t._v("socket主要用于即时通讯，socket是长连接，轮询")]),t._v(" "),r("p",[t._v("如何解决消息堆积问题：")]),t._v(" "),r("p",[t._v("1、增加消费者")]),t._v(" "),r("p",[t._v("2、限流（先过滤一部分请求）")])])}),[],!1,null,null,null);a.default=s.exports}}]);