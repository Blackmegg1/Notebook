# JavaScript基础知识

## 数据与变量

3种定义变量方式，按照使用优先级排序：

1. `const `
2. `let`
3. `var`

`const`和`let`区别：`const`声明的变量不可被修改。值得的注意的是，当使用`const`声明一个对象时，对象的属性是可以增删改的，如下面的语句是合法的：

```js
const obj = {name:'gxy', age:'20'}
obj.age = 21
obj.sexy = 'man'
```

`let `和`var`的区别：

1. `var`没有块级作用域，它只有全局作用域和函数作用域
2. `var`允许重复声明
3. `var`没有暂时性死区，它声明的变量会在函数开始时就被处理
4. `IIFE`立即调用函数表达式，程序员为解决`var`没有块级作用域的方法

------

8种数据类型：

1. `number`，在`±(2^53-1)`范围内的任何数字
2. `bigint`，任意长度整数
3. `string`，任意长度字符串
4. `boolean`，true/false
5. `null`，未知
6. `undefined`，未定义
7. `symbol`，唯一的标识符
8. `object`，复杂数据结构

可以通过运算符`typeof`快速进行数据类型检验：

```js
typeof null // “object”这里是JS的一个历史遗留问题
typeof NaN // "number"
```



------

`number`使用64位的格式IEEE-754存储，1位储存符号，11位储存小数点位置，52位用来储存数值，因此会产生精度丢失问题：

```js
0.1 + 0.2 === 0.3 // false
```

有两种方法解决这个问题：

```js
+(0.1 + 0.2).toFixed(1) === 0.3 // true
(0.1 * 10 + 0.2 * 10)/10 === 0.3 //true 
```

`number`中两个特殊的数值：

1. `Infinity` 和 `-Infinity`
2. `NaN`

通过特定的函数进行判断

```js
isFinite("Infinity") //false，可用于判断是否为常规数字
isNaN("str") //true
```



------

`bigint`提供了对任意长度整数的支持

```js
const bigint = 123456n
const sameBigint = Bigint("123456n") //两种方式创建bigint
alert(+bigint) //error，bigint不支持一元加法
alert(1 === 1n) //false，与常规数字不严格相等
```

------

`string`字符串不可更改

```js
let str = "Hi"
str[0] = 'h' //error
```

字符串常用方法

```js
"Interface".toLowerCase() //转小写
"i am fine".includes("fine") //查找子字符串
"stringify".slice(1,3) //tr，获取子字符串，左闭右开
```

------

`symbol`用于表示唯一的标识符，通过`Symbol()`函数创建

```js
let id1 = Symbol("id") //可以为每个symbol设置description属性
let id2 = Symbol("id")
id1 === id2 //false，每个symbol被创建后就是独一无二的
```

可以使用`symbol`创建不会被第三方访问的**隐藏属性**

```js
const obj = {name:"gxy"}
let age = Symbol("age")
obj[age] = 20 //使用Symbol作属性区别于使用字符串
```

这样创建的属性很难被访问到：

![image-20210823171553081](http://img.gxyhero.top/img/202108231716422.png)

也不会在`for...in`循环中被遍历到：

![image-20210823172311799](http://img.gxyhero.top/img/202108231723827.png)

JavaScript中也内置了许多系统Symbol，如常见的`Symbol.iterator`和`Symbol.toPrimitive`

从技术上Symbol 不是 100% 隐藏的。可以通过以下两种方式访问到

```js
Object.getOwnPropertySymbols(obj)
Reflect.ownKeys(obj)
```

![image-20210823174724062](http://img.gxyhero.top/img/202108231747095.png)

