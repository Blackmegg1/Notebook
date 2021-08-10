# An annoying pitfall about Git 

## 刚开始使用github和git时，你可能会按以下（错误）步骤操作：

创建一个仓库，命名，描述，然后添加README和license。

![image-20210320163549926](http://img.gxyhero.top/img/202108101731821.png)

<u>这里我们注意最后一句话</u>：

![image-20210320163815342](http://img.gxyhero.top/img/202108101732686.png)

github告诉我们它将会为我们的新仓库创建**main**作为默认的branch。

然后我们的新仓库就创建好了，同时，我们希望在本地也创建一个文件夹与这个仓库建立联系，这样我们就可以在本机的command使用git直接向远程仓库commit我们的代码，而不用打开github。

![image-20210320164307599](http://img.gxyhero.top/img/202108101732475.png)

这里我在d盘创建了一个example文件夹作为本地仓库的载体（默认git已经安装并配置好了），

![image-20210320164412913](http://img.gxyhero.top/img/202108101732067.png)

执行 `git init` 指令在这个文件夹创建了一个仓库。

![image-20210320164758304](http://img.gxyhero.top/img/202108101733352.png)

随后我在example文件夹中创建一个新文件hello world.txt，现在我希望commit本次更改到我刚刚创建好的github仓库，首先我复制了我远程仓库的地址：

![image-20210320164932154](http://img.gxyhero.top/img/202108101732160.png)

执行`git remote add ... ......`指令与远程仓库的建立连接：

![image-20210320165044155](http://img.gxyhero.top/img/202108101733456.png)

然后`git add .`提交到缓冲区，`git commit -m "..."`提交commit，一切**看起来那么顺利**，只需最后**git push** 就愉快的结束了。

![image-20210320165428327](http://img.gxyhero.top/img/202108101733542.png)

这里我们还记得github为我们创建的默认分支**main**，我们push到这个分支。

糟糕的部分来了：

```
error: src refspec main does not match any
```

![image-20210320165628338](http://img.gxyhero.top/img/202108101733563.png)

## 接下来我们分析上面步骤错误的原因：

1. **mian** 和 **master** 

   你可能已经注意到了，在我们每次使用git指令时，git都在一直用蓝色的字提示我们当前处在一个叫**master**的分支：

   ![image-20210320170106554](http://img.gxyhero.top/img/202108101733574.png)

这是git为我们创建的默认分支，而在上述过程中我们完全无视了这一点，我们只关心github上的那个**main**分支，至于为什么它们的默认分支不同，github给出的解释是：

> GitHub is working on replacing the term "master" on its service with a neutral term like "main" to avoid any unnecessary references to slavery

github觉得**master**有点slavery那味。

所以原因就是github的仓库中没有**master**这个分支，我们本地的仓库没有**main**分支，那好办，我们将本地仓库的**master**分支改名为**main**分支，它们不就统一了？

<img src="http://img.gxyhero.top/img/202108101733045.png" alt="image-20210320171047682" style="zoom:150%;" />

执行`git branch -m master main`，可以看到**master**已经被成功改为**main**了，如此，我们继续push就不会有什么问题了吧？

![image-20210320171245755](http://img.gxyhero.top/img/202108101733562.png)

2. **! [rejected]        main -> main (non-fast-forward)**

这个问题解释起来很简单，还记得我们创建仓库时添加到README和license吗？<u>在github仓库的**main**分支中有这两个文件，而在我们本地的仓库并没有这两个文件</u>，如果我们执行这次commit，那么可能导致这两个文件丢失。

接下来你有以下几个解决方案：**下列代码中的example为远程仓库名称**

1. 无视警告，README和license我不要了。

   ```
   git push --force
   ```

   执行以上指令强行提交。

2. 试着获取远程仓库的初始提交( initial commit)，就是README和license这两个文件的commit，在此基础上 rebase commit。但是这种方法可能有点棘手，不如暴力提交简单。

   ```
   git fetch example //获取初始提交
   git rebase example/mian 
   ```

3. 试着合并初始提交与你的提交,这也是我**最推荐的方法**：

   ```
   git fetch example
   git merge --allow-unrelated-histories example/main
   ```

   首先执行`git fetch example` 获取初始提交

   ![image-20210320175151028](http://img.gxyhero.top/img/202108101733586.png)

   然后执行`git merge --allow-unrelated-histories example/main`合并，之后会进入这样一个文件，提示我们为本次提交加一些信息备注，我们很清楚我们在做什么，所以按两下ESC键，输入**:wq**（注意有冒号，这是UNIX保存的命令），回车

![image-20210320174948306](http://img.gxyhero.top/img/202108101734964.png)

可以看到本地的git仓库已经与远程仓库合并了，README和license也可以在本地仓库找到了。

![image-20210320175828773](http://img.gxyhero.top/img/202108101734169.png)

![image-20210320175837987](http://img.gxyhero.top/img/202108101734358.png)

最后我们`git push example main`

![image-20210320175910525](http://img.gxyhero.top/img/202108101734273.png)

![image-20210320175927561](http://img.gxyhero.top/img/202108101734607.png)

终于提交成功了，泪目！！！！

## 真确的使用方式：

github创建仓库后使用`git clone`指令clone到本地。

## 参考文章：

> https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux
