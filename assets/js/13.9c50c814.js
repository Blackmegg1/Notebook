(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{440:function(t,s,a){"use strict";a.r(s);var v=a(32),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cs144"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cs144"}},[t._v("#")]),t._v(" CS144")]),t._v(" "),a("h2",{attrs:{id:"四层网络模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四层网络模型"}},[t._v("#")]),t._v(" 四层网络模型")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108142107078.png",alt:"image-20210814210718978"}})]),t._v(" "),a("p",[t._v("区别于课堂上所学习的OSI七层网络模型，这里使用的是简化的4层。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108142130178.png",alt:"image-20210814213008112"}})]),t._v(" "),a("p",[t._v("其中网络层较为特殊，它必须使用"),a("strong",[t._v("IP(Internet Protocol)协议")]),t._v("，IP协议具有以下特点：")]),t._v(" "),a("ol",[a("li",[t._v("IP提供尽力而为的数据传递服务")]),t._v(" "),a("li",[t._v("IP数据包可能会丢失可能会乱序，即它本身不保证数据的可靠性")])]),t._v(" "),a("p",[t._v("为了保证数据的可靠性，需要IP的上层协议，即传输层协议，最为常见的就是"),a("strong",[t._v("TCP(Transmission Control Protocol)协议")]),t._v("，TCP/IP的意思就是应用程序同时使用了TCP协议和IP协议。")]),t._v(" "),a("p",[t._v("TCP是可靠传输的，它弥补了IP的缺陷。")]),t._v(" "),a("p",[t._v("分层的网络模型充分体现了"),a("strong",[t._v("关注分离")]),t._v("的设计思想，将整个网络连接拆分为多个对等层之间的连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108142127612.png",alt:"image-20210814212727474"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"ip服务模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip服务模型"}},[t._v("#")]),t._v(" IP服务模型")]),t._v(" "),a("p",[t._v("如图，数据在四层网络模型中采取嵌套的方式传递："),a("img",{attrs:{src:"http://img.gxyhero.top/img/202108142134411.png",alt:"image-20210814213445365"}})]),t._v(" "),a("p",[t._v("即上层的数据报会被封装在下层数据报的数据部分。接下来详细说说IP协议的四个特点：")]),t._v(" "),a("ol",[a("li",[t._v('数据采用独立的数据报形式"逐跳"路由')]),t._v(" "),a("li",[t._v("不可靠，数据可能会丢失，而且IP不会通知这一行为")]),t._v(" "),a("li",[t._v("尽力，不到万不得已的情况IP不会轻易抛弃数据")]),t._v(" "),a("li",[t._v("无连接，因为每个数据包是独立的，所以数据包的到达也是无顺序的")])]),t._v(" "),a("p",[t._v("为什么IP被设计得如此简单？")]),t._v(" "),a("ol",[a("li",[t._v("简单、快捷、维护成本更低")]),t._v(" "),a("li",[t._v("端到端通信原则，"),a("strong",[t._v("where possible , implement features in the end host")])]),t._v(" "),a("li",[t._v("允许上层建立更多样得服务，如TCP、UDP")]),t._v(" "),a("li",[t._v("对下层几乎没有要求，甚至可以建立在信鸽上")])]),t._v(" "),a("p",[t._v("这是一个典型的IPv4数据包结构：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108142203537.png",alt:"image-20210814220336468"}})]),t._v(" "),a("p",[t._v("值得注意的是以下几个字段：")]),t._v(" "),a("ol",[a("li",[t._v("Flags和Fragment Offset，它们用于数据包的分割，因为IP携带的数据长度有限")]),t._v(" "),a("li",[t._v("TTL，防止数据包沿回路无限传递")]),t._v(" "),a("li",[t._v("Checksum 确保"),a("strong",[t._v("IP首部")]),t._v("的准确")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"数据包的一生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据包的一生"}},[t._v("#")]),t._v(" 数据包的一生")]),t._v(" "),a("p",[t._v("本节通过以下三种软件/命令分析数据包的一生：")]),t._v(" "),a("ol",[a("li",[t._v("通过wireshake分析传输层")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("tracert")]),t._v("分析网络层")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("route print")]),t._v("查看本地路由表分析链路层")])]),t._v(" "),a("img",{staticStyle:{zoom:"150%"},attrs:{src:"http://img.gxyhero.top/img/202108150031281.png",alt:"image-20210815003111245"}}),t._v(" "),a("p",[t._v("如图，截取的是TCP建立连接的三次握手报文，这里常问的问题就是：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("为什么TCP建立连接需要三次握手？")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n根本原因与上一节的IP有关，因为TCP是建立在IP之上的协议，而IP本身是不可靠的。TCP需要在这样一个不可靠的信道中建立可靠连接，就需要通信双方都确认，即理论上需要四步：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" client向serve确认是否可以通信？\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" serve向client回复\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" serve向client确认是否可以通信？\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" client回复serve\n\n将第二步与第三步相结合，就是TCP三次握手。\n")])])]),a("p",[t._v("那么数据是如何从本机192.168.2.209传输到14.215.177.38的呢？")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("tracert")]),t._v("命令可以看到详细的过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108150100007.png",alt:"image-20210815010046973"}})]),t._v(" "),a("p",[t._v("可以看到数据包经过了11个hop到达目标地址。")]),t._v(" "),a("p",[t._v("每一跳都是由所在路由器/主机的路由表来控制，通过"),a("code",[t._v("route print")]),t._v("指令可以查看本机路由表：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.gxyhero.top/img/202108150112836.png",alt:"image-20210815011220797"}})]),t._v(" "),a("p",[t._v("第一条为缺省路由，第二条第三条均为本地环路，第四条为本地广播路由。")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("127.0.0.1和localhost的区别")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 同样是指向本机，在调试的时候常用localhost。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" localhost跟域名很像。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" localhost不走网卡，而127.0.0.1则需要经过网卡和防火墙，这两者是非同源的。\n")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);