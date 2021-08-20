(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{441:function(t,v,s){"use strict";s.r(v);var a=s(32),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cs144"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cs144"}},[t._v("#")]),t._v(" CS144")]),t._v(" "),s("h2",{attrs:{id:"四层网络模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四层网络模型"}},[t._v("#")]),t._v(" 四层网络模型")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108142107078.png",alt:"image-20210814210718978"}})]),t._v(" "),s("p",[t._v("区别于课堂上所学习的OSI七层网络模型，这里使用的是简化的4层。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108142130178.png",alt:"image-20210814213008112"}})]),t._v(" "),s("p",[t._v("其中网络层较为特殊，它必须使用"),s("strong",[t._v("IP(Internet Protocol)协议")]),t._v("，IP协议具有以下特点：")]),t._v(" "),s("ol",[s("li",[t._v("IP提供尽力而为的数据传递服务")]),t._v(" "),s("li",[t._v("IP数据包可能会丢失可能会乱序，即它本身不保证数据的可靠性")])]),t._v(" "),s("p",[t._v("为了保证数据的可靠性，需要IP的上层协议，即传输层协议，最为常见的就是"),s("strong",[t._v("TCP(Transmission Control Protocol)协议")]),t._v("，TCP/IP的意思就是应用程序同时使用了TCP协议和IP协议。")]),t._v(" "),s("p",[t._v("TCP是可靠传输的，它弥补了IP的缺陷。")]),t._v(" "),s("p",[t._v("分层的网络模型充分体现了"),s("strong",[t._v("关注分离")]),t._v("的设计思想，将整个网络连接拆分为多个对等层之间的连接，其优势在后续有提及。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108142127612.png",alt:"image-20210814212727474"}})]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"ip服务模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip服务模型"}},[t._v("#")]),t._v(" IP服务模型")]),t._v(" "),s("p",[t._v("如图，数据在四层网络模型中采取嵌套的方式传递："),s("img",{attrs:{src:"http://img.gxyhero.top/img/202108142134411.png",alt:"image-20210814213445365"}})]),t._v(" "),s("p",[t._v("即上层的数据报会被封装在下层数据报的数据部分。接下来详细说说IP协议的四个特点：")]),t._v(" "),s("ol",[s("li",[t._v('数据采用独立的数据报形式"逐跳"路由')]),t._v(" "),s("li",[t._v("不可靠，数据可能会丢失，而且IP不会通知这一行为")]),t._v(" "),s("li",[t._v("尽力，不到万不得已的情况IP不会轻易抛弃数据")]),t._v(" "),s("li",[t._v("无连接，因为每个数据包是独立的，所以数据包的到达也是无顺序的")])]),t._v(" "),s("p",[t._v("为什么IP被设计得如此简单？")]),t._v(" "),s("ol",[s("li",[t._v("简单、快捷、维护成本更低")]),t._v(" "),s("li",[t._v("端到端通信原则，"),s("strong",[t._v("where possible , implement features in the end host")])]),t._v(" "),s("li",[t._v("允许上层建立更多样得服务，如TCP、UDP")]),t._v(" "),s("li",[t._v("对下层几乎没有要求，甚至可以建立在信鸽上")])]),t._v(" "),s("p",[t._v("这是一个典型的IPv4数据包结构：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108142203537.png",alt:"image-20210814220336468"}})]),t._v(" "),s("p",[t._v("值得注意的是以下几个字段：")]),t._v(" "),s("ol",[s("li",[t._v("Flags和Fragment Offset，它们用于数据包的分割，因为IP携带的数据长度有限")]),t._v(" "),s("li",[t._v("TTL，防止数据包沿回路无限传递")]),t._v(" "),s("li",[t._v("Checksum 确保"),s("strong",[t._v("IP首部")]),t._v("的准确")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"数据包的一生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据包的一生"}},[t._v("#")]),t._v(" 数据包的一生")]),t._v(" "),s("p",[t._v("本节通过以下三种软件/命令分析数据包的一生：")]),t._v(" "),s("ol",[s("li",[t._v("通过wireshake分析传输层")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("tracert")]),t._v("分析网络层")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("route print")]),t._v("查看本地路由表分析链路层")])]),t._v(" "),s("img",{staticStyle:{zoom:"150%"},attrs:{src:"http://img.gxyhero.top/img/202108150031281.png",alt:"image-20210815003111245"}}),t._v(" "),s("p",[t._v("如图，截取的是TCP建立连接的三次握手报文，这里常问的问题就是：")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("为什么TCP建立连接需要三次握手？")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n根本原因与上一节的IP有关，因为TCP是建立在IP之上的协议，而IP本身是不可靠的。TCP需要在这样一个不可靠的信道中建立可靠连接，就需要通信双方都确认，即理论上需要四步：\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" client向serve确认是否可以通信？\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" serve向client回复\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" serve向client确认是否可以通信？\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" client回复serve\n\n将第二步与第三步相结合，就是TCP三次握手。\n")])])]),s("p",[t._v("那么数据是如何从本机192.168.2.209传输到14.215.177.38的呢？")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("tracert")]),t._v("命令可以看到详细的过程：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108150100007.png",alt:"image-20210815010046973"}})]),t._v(" "),s("p",[t._v("可以看到数据包经过了11个hop到达目标地址。")]),t._v(" "),s("p",[t._v("每一跳都是由所在路由器/主机的路由表来控制，通过"),s("code",[t._v("route print")]),t._v("指令可以查看本机路由表：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108150112836.png",alt:"image-20210815011220797"}})]),t._v(" "),s("p",[t._v("第一条为缺省路由，第二条第三条均为本地环路，第四条为本地广播路由。")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("127.0.0.1和localhost的区别")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 同样是指向本机，在调试的时候常用localhost。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" localhost跟域名很像。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" localhost不走网卡，而127.0.0.1则需要经过网卡和防火墙，这两者是非同源的。\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"三个原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个原理"}},[t._v("#")]),t._v(" 三个原理")]),t._v(" "),s("p",[t._v("三个原理分别是：")]),t._v(" "),s("ol",[s("li",[t._v("数据包交换原理")]),t._v(" "),s("li",[t._v("分层原理")]),t._v(" "),s("li",[t._v("封装原理")])]),t._v(" "),s("h3",{attrs:{id:"数据包交换原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据包交换原理"}},[t._v("#")]),t._v(" 数据包交换原理")]),t._v(" "),s("p",[t._v("数据包的交换是"),s("strong",[t._v("简单的")]),t._v("，它体现在路由器无需记住每一个数据流的状态，只需要关注转发每一个独立的数据包。")]),t._v(" "),s("p",[t._v("这里提及了一个过时的概念**“源路由”**，即不依赖转发表而在最初就将路由路径设定好，这个方案已经被废弃，因为安全问题，源可以控制整个路由路径这是非常危险的。")]),t._v(" "),s("p",[t._v("数据包的交换是"),s("strong",[t._v("高效的")]),t._v("，它采取"),s("strong",[t._v("统计复用")]),t._v("的方式按需地分配信道资源。")]),t._v(" "),s("h3",{attrs:{id:"分层原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层原理"}},[t._v("#")]),t._v(" 分层原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.gxyhero.top/img/202108150206401.png",alt:"image-20210815020627326"}})]),t._v(" "),s("p",[t._v("分层原理具有如下几个特点：")]),t._v(" "),s("ol",[s("li",[t._v("模块化，更方便管理维护")]),t._v(" "),s("li",[t._v("定义明确的服务，每层都为上一层提供了明确的服务")]),t._v(" "),s("li",[t._v("复用，可以在已有的层基础上编写上层")]),t._v(" "),s("li",[t._v("关注分离，每层只需关注自己的工作，而不需要关注其他层工作的具体实现")]),t._v(" "),s("li",[t._v("持续提高")])]),t._v(" "),s("p",[t._v("但是分层也有缺点，表现在跨越层来提高性能不方便。")]),t._v(" "),s("p",[t._v("以C语言编程为例：")]),t._v(" "),s("p",[t._v("linux上下文切换程序集，为ARM编写的代码仅适用于ARM，想要在其他架构上使用就需要重新编写新的汇编代码，这样跨层的性能提升不再独立于下次，极大限制了编程的灵活性。")])])}),[],!1,null,null,null);v.default=_.exports}}]);