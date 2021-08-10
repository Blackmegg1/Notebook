# JS习题册
### :star:(Importance):skull:(Danger）

3. ```js
   alert(Number(null));
   alert(Number(undefined));
   alert(Boolean(" "));
   ```

   :star:

   
   
4. ```js
   let oranges = '2';
   let apples = '3';
   alert(apples+oranges);
   alert(+apples++oranges);
   ```

   :star:

   
   
5. ```js
   let counter = 0;
   ++counter;
   counter++;
   alert(counter);
   ```

   :star::star:

   
   
6. ```js
   ""+1+0=??;
   ""-1+0=??;
   "$"+1+2=??;
   "   -9 "+5=??;
   "   -2"-1=??;
   " \t \n"-2=??;
   ```

   :star::star:

   
   
7. ```js
   undefined == null;
   undefined === null;
   ```

   :star:

   

   **:exclamation: ||找第一个真值，&&找第一个假值**
   
8. ```js
   alert(null || 0 || 1);
   alert(null || undefined || 0 || "    " || -3);
   ```

   :star:

   
   
9. ```js
   true || alert("print");
   alert(alert(1) || 2 || alert(3));
   alert(alert(1) && alert(2));
   alert(null || (2 && 3) || 4);
   ```

   :star::star::skull:

   

   **:exclamation: ??找第一个已定义的值（不是 null 和 defined）**
   
10. ```js
    let user;
    alert(user ?? "default");
    let height = 0;
    alert(height || 100);
    alert(height ?? 100);
    ```

    :star:
    
    
    
11. ```js
    //区分函数声明与函数表达式，并说出他们的区别
    function sayHI(){};
    let sayHi=function(){};
    ```

    :star::star::star:
    
    
    
12. ```js
    //什么是回调函数？什么是匿名函数？请举例
    ```

    :star::star::star:

    

13. ```js
    let age-16;
    if(age<18){
        function welcome(){
            alert("hello")
        }
    }
    else {
        function welcome(){
            alert("bye")
        }
    }
    welcome();
    //上述代码可以正确执行吗？如果不能原因是什么？该怎么修改？
    //什么时候用函数声明或函数表达式？
    ```

    :star::star::skull:

    

14. ```js
    let ask = (question, yes, no) => confirm(question)?yes():no();
    ask(
            "yes or no?",
            () => { alert("yes!"); },
            () => { alert("no!"); }
        );
    ```

    :star:

    

15. ```js
    //列举出js变量的8种数据类型并预测以下语句
    typeof null ==??;
    typeof function(){}==??;
    ```

    :star::star:

    

16. ```js
    //遇到一行中有较长的字符串，如何将它拆分成多行？
    ```

    :star:

    

17. ```js
    //解释以下代码
    i = i ? i < 0 ? Math.max(0, len + i):i:0;
    ```

    :star::star:

    

18. ```js
    let user = {};
    //下面两个语句各代表什么含义？
    user[name]="gxy";
    user["name"]="tg";
    ```

    :star::star:

    

19. ```js
    //写一个判断对象是否含有属性的函数isEmpty(obj)
    //写一个判断对象是否含有特定属性的函数haveProp(obj, prop)
    ```

    :star:

    

    :exclamation:**赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址”，换句话说就是对该对象的“引用”。**

20. ```js
    let a = {};
    let b = a;
    let c = {};
    
    alert( a == b);
    alert( a === b);
    alert( a == c);
    ```

    :star:

    

21. ```js
    //对象的深克隆与浅克隆有什么区别？
    //手写一个深克隆。可以参考lodash中的_cloneDeep(obj)
    function cloneDeep(obj){}
    ```

    :star::star::star::skull::skull:

    

22. ```js
    //解释什么是可达性？它与js的回收机制有什么关系？
    //以一个家庭对象为例，画出他们缠上的内存结构，进行一定的操作，阐述什么样的对象会被从内存中删除
    function marry(man, woman) {
    	woman.husband = man;
        man.wife = woman;
        
        return {
            father: man,
            mother: woman,
        }
    }
    
    let family = marry(
    	{ name: "jesse"},
    	{ name: "lilis"}   
    );
    ```

    :star::star::star::skull:

    

    **:exclamation:设置 `this` 的规则不考虑对象定义,只有调用那一刻才重要**

23. ```js
    let user = {
    	name: "gxy",
    	age: 12,
    	sayHi() {
    	alert(user.name);
    	},
    	sayHello() {
    	alert(this.name);
    	},
    }
    //比较user中的两个方法，他们实现的功能相同，哪一个更加更好？为什么？
    ```

    :star::star:

    

24. ```js
    function makeUser() {
        return {
            name: "gxy",
            ref: this,
        };
    }
    
    let user = makeUser();
    alert( user.ref.name );
    //结果是什么?为什么会这样?怎么改才能输出gxy?
    ```

    :star::star::skull:

    

25. ```js
    //补全A()和B(),实现下列语句
    function A() {}
    function B() {}
    let a = new A();
    let b = new B();
    alert( a == b)
    ```

    :star::star:

    

26. ```js
    //以下code是什么意义？使用这种语法有什么弊端？
    alert ( user?.grade1?.name?.existing )
    ```

    :star:

    

27. ```js
    let id = Symbol("id");
    alert(id);
    alert(id.toString());
    alert(id.description);
    ```

    :star::star:
    
    
    
28. ```js
    //解释为什么 0.1 + 0.2 != 0.3 
    //试着用n.toFixed()实现上述表达式
    //还有什么方法可以实现？
    ```

    :star::star::star::skull:

    

29. ```js
    //解释下列语句区别，哪个更好？
    let n = Number(1);
    let n = new Number(1);
    typeof n;
    ```

    :star:

    

30. ```js
    let str = "Hello";
    str.test = 5;
    alert(str.test);
    //这说明了原始类型与对象之间有何关系？
    ```

    :star:

    

31. ```js
    alert(1.35.toFixed(1));//1.4
    alert(6.35.toFixed(1));//6.3
    //解释以上情况，并试着让其正确舍入
    ```

    :star::star:

    :link:[28](#T28)

    

32. ```js
    let i = 0;
    while (i != 10) {
    i += 0.2;
    }
    //这个循环不会结束，为什么？
    ```

    :star::star:

    

33. ```js
    //基于Math.random()写一个随机生成范围整数的测试函数Math.randomInteger(min ,max, n)
    //其中n为生成随机数的个数，要求统计输出所有随机情况，以便证明随机性(注意区间长度)
    
    simulateAndCount(2,4,10000);
    //输出案例
    2:3368
    3:3275
    4:3357
    
    //答案在 myCode/justCode/142
    ```

    :star::star::star::skull::skull:
    
    
    
34. ```js
    //使用str.indexOf()方法输出所有匹配项位置
    //注意indexOf()大小写敏感,怎么办？
    //使用按位非技巧 ~
    let str = "'As sly as a fox, as strong as an ox"
    let target = "as"
    ```

    :star:

    

35. ```js
    //输入数字求和
    //输入非数字，空字符串，点击取消按钮时，闻讯结束
    //计算返回所有数组项之和
    
    //答案在 mycode/justCode/169
    ```

    :star:

    

36. ```js
    //求最大子数组
    //要求时间复杂度O(n)
    ```

    :star::star:

    

37. ```js
    //arr.map()与arr.forEach()的区别
    //如何快速创建一个数组的副本？	
    ```

    :star:

    

38. ```js
    //创建一个构造函数，以创建“可扩展”的calculator对象
    //案例如下
    let powerCalc = new Calculator;
    powerCalc.addMethod("**", (a, b) => a ** b);
    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
    
    //答案在justCode/236
    ```

    :star: :skull::skull:

    

39. ```js
    //JavaScript现代教程的数组方法这章尤为精彩，推荐多次练习！！！！
    // https://zh.javascript.info/array-methods
    ```

    :star::star::star::skull::skull::skull:
    
    
    
40. ```js
    //为range添加一个Symbol.iterator方法，它会返回一个迭代器 —— 一个有next方法的对象
    //next方法的返回结果格式一定是{done: Boolean, value: any}
    
    //justCode/370
    ```

    :star::star::skull:

    

41. ```js
    //Map与Object的区别是什么？
    //如何遍历一个Map所有的键？
    //如何从对象创建一个Map？反过来又需要怎么做呢？
    //Set是什么?有什么特点？
    ```

    :star::star:

    

42. ```js
    //创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组(数组去重)
    //要求unique(arr)只有一条语句
    ```

    :star:

    

43. ```js
    //什么是WeakMap？
    //举出几个用到WeakMap的案例。
    //为什么WeakMap无法被迭代？
    ```

    :star:

    

44. ```js
    //使用解构语法和Object.entires()一起遍历一个对象的键值对，这里用for_in还是for_of
    //使用已有的变量进行对象解构	附值，有一个语法的陷阱
    ```

    :star:

    

45. ```js
    //使用Date对象编写一个benchmark()
    //1.整个度量测试包应该重新运行多次
    //2.主循环增加升温环节
    // justCode/494
    ```

    :star::star::star::skull:
    
    
    
46. ```js
    let company = { // 是同一个对象，简洁起见被压缩了
            sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
            development: {
                sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
                internals: [{ name: 'Jack', salary: 1300 }]
            }
        };
    //编写sumSalaries（）对以上对象进行递归求和
    //justCode/545
    ```

    :star::star:

    

47. ```js
    // ... 这三个点可以代表些什么?
    // 在定义函数时使用和在使用函数时使用它们各有什么意义？
    ```

    :star::star:

    

48. ```js
    //谈谈你对闭包的理解
    ```

    :star::star::star::skull::skull:
    
    
    
49. ```js
    //从3个方面谈谈let 和 var 的区别，还有什么是IIFE?
    ```

    :star::star:

    

50. ```js
    //利用闭包和函数自定义属性等知识实现
    //sum(1)(2)(3) == 6;
    ```

    :star::star: 

    

51. ```js
    //如何接收从后端传过来的函数？
    //这样创建的函数有什么特别？为什么会这样?
    //谈一谈js代码的压缩吧
    ```

    :star:

    

52. ```js
    //scheduling a call有哪两种实现方式？
    //使用嵌套的setTimeout实现周期调度
    //如何做到循环的第一次没有延迟？
    ```
    
    :star::star:
    
    
    
53. ```js
    function hash() {
        alert(arguments.join())
    }
    //无法执行，为什么？
    function hash() {
    	alert( [].join.call(arguments) );
    	}
    //上述技巧被称为“方法借用”，他为什么会生效？
    ```

    :star::star:

    

54. ```js
    //请说出防抖和节流的意义
    //写出spy、delay装饰器
    //写出防抖、节流装饰器
    ```

    :star::star::star::skull::skull:

    

55. ```js
    //func.call在什么场景下会用到？
    //Map含有多个键的对象可以怎么处理？
    //apply和call的区别？
    //什么是呼叫转移？写出它的最简形式
    ```

    :star::star:

    

56. ```js
    //为user对象创建fullName访问器，可以使用get和set来传递描述符。
    let obj = {
    name: "John",
        surname: "Smith",
    };
    alert(obj.fullName);
    user.fullName = "Alice Cooper";
    //如果我希望fullName不少于4个字符，怎么写？
    ```
    
    :star::star:
    
    
    
57. ```js
    //试着解释下Prototypal inheritance
    //什么是原型链？
    //__proto__和[[Prototype]]一样吗？不一样的话有什么区别？
    ```

    :star::star: :skull:
    
    
    
58. ```js
    let obj = {};
    alert(obj.__proto__ === Object.prototype);
    alert(obj.toString === obj.__prototype.toString);
    alert(obj.toString === Object.prototype.toString);
    //预测上面语句的输出，一切内建原型的顶端是什么？
    //null和undefined的原型是什么？
    //使用原型来进行方法借用？
    ```

    :star:

    

59. ```js
    //区分__proto__ 、 prototype 、 [[Prototype]]
    ```

    :star::star::star: :skull:

    

60. ```js
    class Button {
    	constructor(value) {
            this.value = value;
        }
        click)() {
            alert(this.value);
        }
    }
    let button = new Button("hello");
    setTimeout(button.click, 1000);
    //运行以上代码会输出undefined,为什么？
    //请用三种方法解决以上问题
    ```

    :star::star::star:

    

61. ```js
    //如何在setTimeout中设置try...catch?
    ```

    :star:

    

62. ```js
    //比较Promise和callback,Promise有哪些好处？
    //解释executor, state, result, pending, 这些词在Promise中的含义及关系。
    ```

    :star::star: :skull:

    

63. ```js
    //如果浏览器不支持Promise.allSettled，如何进行polyfill?
    //顺利写出这个就算是彻底理解Promise.all和Promise.allSettled了哦
    ```

    :star::star: :skull:

    

64. ```js
    //paginated data
    ```

    :star::star::star: :skull:

65. 

    ```
    
    ```

    









