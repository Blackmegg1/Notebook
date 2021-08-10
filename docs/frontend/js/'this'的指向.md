# 'this'的指向

 首先是James k nelson 在他的博客中提到的 the 5 rules of `this`:

1. When a function is called as a method of an object, e.g. `obj.someFunction()`, the value of `this` within that function will be the object on which it was called.
2. When a function is called using its `call()` or `apply()` methods. the value of `this` inside the function is provided as the first argument to `call()` or `apply()`.
3. When a function is called by itself (i.e. without a leading `.`), the value of `this` will either be `undefined` in strict mode, or the global object (e.g. `window`) outside of strict mode. But you're probably in strict mode, so it's probably going to be `undefined`.
4. You can use a function's **bind** method to return a version of a function where `this` will always equal the first argument to `bind`.
5. The value of `this` within an **arrow function** will always equal the value of this at the time the function was created.



接下来我根据我的理解来翻译上述5个规则：

1. 当一个函数作为一个对象方法被调用时，函数内部`this`的值就是调用函数的那个对象。
2. 当一个函数被`call()`或者`apply()`方法调用时，函数内部`this`的值为`call()`或`apply()`方法所提供的第一个参数。
3. 当一个函数被它自身调用时（即没有以`.`开头）`this`的值在严格模式下为`undefined`在非严格模式下为全局对象（如`window`）。
4. 使用**bind**方法可以返回一个`this`值总是等于**bind**所提供的第一个参数的“函数新版本”。
5. `箭头函数`中的`this`值将反映创建它的函数中的`this`值。（箭头函数没有`this`因此它会去外部词法环境查找）



**Beware：**

`setTimeout()`中第一个参数传递的是函数本身，因此`setTimeout(obj.method, ms)`中，`setTimeout`并没有链接到obj对象，所以这里相当于它自身调用，`this = undefined`.

