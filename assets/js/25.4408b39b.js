(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{452:function(s,t,a){"use strict";a.r(t);var n=a(32),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础知识"}},[s._v("#")]),s._v(" JavaScript基础知识")]),s._v(" "),a("h2",{attrs:{id:"数据与变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据与变量"}},[s._v("#")]),s._v(" 数据与变量")]),s._v(" "),a("p",[s._v("3种定义变量方式，按照使用优先级排序：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("const")])]),s._v(" "),a("li",[a("code",[s._v("let")])]),s._v(" "),a("li",[a("code",[s._v("var")])])]),s._v(" "),a("p",[a("code",[s._v("const")]),s._v("和"),a("code",[s._v("let")]),s._v("区别："),a("code",[s._v("const")]),s._v("声明的变量不可被修改。值得的注意的是，当使用"),a("code",[s._v("const")]),s._v("声明一个对象时，对象的属性是可以增删改的，如下面的语句是合法的：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sexy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'man'")]),s._v("\n")])])]),a("p",[a("code",[s._v("let")]),s._v("和"),a("code",[s._v("var")]),s._v("的区别：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("var")]),s._v("没有块级作用域，它只有全局作用域和函数作用域")]),s._v(" "),a("li",[a("code",[s._v("var")]),s._v("允许重复声明")]),s._v(" "),a("li",[a("code",[s._v("var")]),s._v("没有暂时性死区，它声明的变量会在函数开始时就被处理")]),s._v(" "),a("li",[a("code",[s._v("IIFE")]),s._v("立即调用函数表达式，程序员为解决"),a("code",[s._v("var")]),s._v("没有块级作用域的方法")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("8种数据类型：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("number")]),s._v("，在"),a("code",[s._v("±(2^53-1)")]),s._v("范围内的任何数字")]),s._v(" "),a("li",[a("code",[s._v("bigint")]),s._v("，任意长度整数")]),s._v(" "),a("li",[a("code",[s._v("string")]),s._v("，任意长度字符串")]),s._v(" "),a("li",[a("code",[s._v("boolean")]),s._v("，true/false")]),s._v(" "),a("li",[a("code",[s._v("null")]),s._v("，未知")]),s._v(" "),a("li",[a("code",[s._v("undefined")]),s._v("，未定义")]),s._v(" "),a("li",[a("code",[s._v("symbol")]),s._v("，唯一的标识符")]),s._v(" "),a("li",[a("code",[s._v("object")]),s._v("，复杂数据结构")])]),s._v(" "),a("p",[s._v("可以通过运算符"),a("code",[s._v("typeof")]),s._v("快速进行数据类型检验：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// “object”这里是JS的一个历史遗留问题")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "number"')]),s._v("\n")])])]),a("hr"),s._v(" "),a("p",[a("code",[s._v("number")]),s._v("使用64位的格式IEEE-754存储，1位储存符号，11位储存小数点位置，52位用来储存数值，因此会产生精度丢失问题：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[s._v("有两种方法解决这个问题：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true ")]),s._v("\n")])])]),a("p",[a("code",[s._v("number")]),s._v("中两个特殊的数值：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("Infinity")]),s._v(" 和 "),a("code",[s._v("-Infinity")])]),s._v(" "),a("li",[a("code",[s._v("NaN")])])]),s._v(" "),a("p",[s._v("通过特定的函数进行判断")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isFinite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Infinity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false，可用于判断是否为常规数字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])])]),a("hr"),s._v(" "),a("p",[a("code",[s._v("bigint")]),s._v("提供了对任意长度整数的支持")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bigint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sameBigint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//两种方式创建bigint")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//error，bigint不支持一元加法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false，与常规数字不严格相等")]),s._v("\n")])])]),a("hr"),s._v(" "),a("p",[a("code",[s._v("string")]),s._v("字符串不可更改")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hi"')]),s._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//error")]),s._v("\n")])])]),a("p",[s._v("字符串常用方法")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Interface"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//转小写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am fine"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fine"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查找子字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stringify"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//tr，获取子字符串，左闭右开")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);