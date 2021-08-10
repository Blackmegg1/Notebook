# 防抖、节流和RAF

## 什么是防抖、节流？

**防抖**和**节流**是两个十分相似但不同的概念，它们都用于控制一段时间内函数调用的次数。

当我们的函数对DOM事件响应时，**防抖**和**节流**效果更加明显。需要注意的是，**防抖**和**节流**并没有控制DOM事件的触发频率，他们只是在事件发生与函数被调用这个过程中充当了一个缓冲层。

## 为什么需要防抖？

以常见的**sroll**（滚动）事件为例：

[https://codepen.io/dcorb/pen/PZOZgB](https://codepen.io/dcorb/pen/PZOZgB)

执行上述代码，我们会发现滚动事件的触发频率非常高，可能只是轻轻拖动了下滚动条就触发了20次事件。事实上在手机上，滚动事件触发的频率会更高，这么高频事件触发无疑大大增加了事件处理函数的压力。

![image-20210322172132353](http://img.gxyhero.top/img/202108101729568.png)

## 仔细聊聊防抖：

用一句话概况：**防抖允许我们将一组同一函数的触发序列合并为一次触发，即多化一**。

> The Debounce technique allow us to “group” multiple sequential calls in a single one.

![debounce](http://img.gxyhero.top/img/202108101730772.png)

观察上图，比较原生事件触发与带**防抖**的事件触发机制。需要注意的是**即使事件并不是连续触发的，也会被合并为一次触发**（当然不能间隔太久，这个gap可以自定，后面会说到）。

有一个较为形象的**类比**：想象你现在处在一个电梯中，就在电梯门即将关闭的时候，一个人进来了，电梯不得不延迟升降，打开门让它进来，然后快关闭时又来了一个人，电梯门又开了……虽然这样推迟了电梯的升降，但是却让电梯的空间得以被充分利用。

[https://codepen.io/dcorb/pen/KVxGqN](https://codepen.io/dcorb/pen/KVxGqN)

打开这个链接试着在Trigger area中拖动鼠标，你能清晰看到，防抖通过**合并**，大大减少了事件触发的次数。（这里强调了合并，因为就像一开始说的那样，防抖并没有改变事件触发的频率，它只是帮我们整理了一下）

## 前沿(immediate)触发

我们发现上面的**防抖**总在事件停止“抽搐”后才触发函数，这样有时对体验影响很大，为什么不能让函数立即被触发呢？就好像没有使用**防抖**时的那样。事实上，在`underscore.js`中，这个选项被称为**immediate**。下面是前沿触发防抖的例子：

[https://codepen.io/dcorb/pen/GZWqNV](https://codepen.io/dcorb/pen/GZWqNV)

对比之前的可以发现，函数的触发处在序列的前沿了。

![debounce-leading](http://img.gxyhero.top/img/202108101730878.png)

## 防抖实现

**防抖**这个概念最早在2009年由John Hann在他的文章中提出：

> http://unscriptable.com/2009/03/20/debouncing-javascript-methods/

目前**underscore.js**和**Lodash**中都有实现防抖，虽然它们具体实现的方式不同，但是接口无疑都是一样的。

**Lodash**为**防抖**和**节流**增加了更多的细节，如上文提及的**immediate**选项已经被替换为**leading**(前沿)和 **trailing**（后沿）供程序员选择，**默认情况下采用后沿触发防抖**。

## 防抖实例

#### 改变窗口大小

当我们调整窗口大小时，不可避免地会触发大量调整事件，此时采用**后沿触发防抖**，因为我们只在意窗口最后地大小，我们并不在意中途发生了什么。

[https://codepen.io/dcorb/pen/XXPjpd](https://codepen.io/dcorb/pen/XXPjpd)

![image-20210322190202267](http://img.gxyhero.top/img/202108101730649.png)

### 带有自动提交AJAX请求的输入框中

通过**防抖**避免用户在未输入内容前触发AJAX请求，在这里我们仍采用**后沿触发防抖**。

[https://codepen.io/dcorb/pen/mVGVOL](https://codepen.io/dcorb/pen/mVGVOL)

一个相似的案例是用户在注册账号时，通过防抖来提示用户什么时候达到了**最短密码长度**。

## 节流

用一句话概况：**使用节流我们可以保证函数在一段时间内执行次数不超过一次**。

一个形象的**类比**是机场的安检系统，它一段时间只允许一个人去安检，无论有多少人隔一段时间只准一个人通过安检。

与**防抖**相似，我们也可以在**Lodash**和**underscore.js**中找到节流的实现。

## 节流实例

### 无限下拉

这是一个非常常见的案例，在很多网页中都有使用，想要实现无限下拉需要在用户下拉时检测距离底部还有多远，如果接近底部了，就发送一个AJAX请求获取更多数据来填充网页。

在这个案例中**防抖**技术就显得不那么合适了，我们显然不希望用户不断下拉导致页面始终不更新的情况发生。使用**节流**我们确保不断地检查距底部的长度，而由不会造成太大负载。

[https://codepen.io/dcorb/pen/eJLMxa](https://codepen.io/dcorb/pen/eJLMxa)

## 如何使用防抖、节流以及一些小坑

相较于自己手写**防抖节流**或者从其他blog上复制过来，更推荐使用**Lodash**中现成的实现，引入模块的方式如下：

```
npm i -g lodash-cli
lodash include=debounce,throttle
```

注意空格。

一个常犯的使用错误就是多次调用**防抖**：

```js
//错误调用
$(window).on('scroll',function(){
_.debounce(doSomething,300);
})
//正确调用
$(window).on('scroll',_.debounce(doSomething,200))
```

## requestAnimationFrame(请求动画帧)

```js
let cancel=window.requestAnimationFrame(callback);//callback为下次重绘前更新动画帧所用函数
window.cancelAnimationFrame(cancel)//取消回调函数
```

**rAF**是另一种限制函数调用速度的方式，它有点类似`_.throttle(doSomething,16)`但是它具有更高的保真性，因为它是浏览器为了高准确性而提供的原生API。我们可以使用**rAF**去替代**throttle**，替换时考虑以下优缺点：

优势：

- **rAF**表现为60fps,但它的内部会制定最优的渲染策略。
- 简单地使用标准的API，不用担心后续的维护问题。

劣势：

- **rAF**的开始\取消需要人为控制，不像**防抖节流**那样内部实现好。
- 如果浏览器标签没用运作，那么rAF也不会运作。
- 需要考虑低版本浏览器的兼容问题。
- **rAF**不支持node.js

按照经验来看，**rAF**适用于涉及重计算元素位置的绝大部分情况，如绘画或对动画元素直接操作。对于处理AJAX请求或者增删某个类（涉及css动画）时使用**防抖节流**效果更好，因为你可以达到60fps以上。

需要注意的是，**Lodash**和**underscore**都不包含**rAF**，因为在浏览器直接调用就已经足够了。

## 总结

- **防抖**：允许我们将一组同一函数的触发序列合并为一次触发，即多化一。
- **节流**：保证函数在一段时间内执行次数不超过一次。
- **请求动画帧**：节流的替代品，当你的js涉及计算及重渲染时效果更好。

## 参考文章

> https://css-tricks.com/debouncing-throttling-explained-examples/#resize-example

