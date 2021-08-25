# 前端面试高频

## [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

![image-20210825145321738](http://img.gxyhero.top/img/202108251453838.png)

题目本身不难，有两点需要注意：

1. 什么是二叉树的中序遍历
2. 给的输入示例是什么意思

这里的中序是针对根节点来说，即根节点处在遍历过程的中间，顺序是左根右。

给的输入示例是二叉树的层次遍历结果。

方法一，迭代：

```js
function inorderTraversal(root) {
    const stack = [];
    const result = [];
    while (root || stack.length) {
        stack.push(root);
        root = root.left;
        while(root) {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    return result
}
```

维护一个存储节点的栈，按左根右的顺序压栈弹栈即可。注意外层循环的条件，栈为空。



方法二，递归：

```js
var inorderTraversal = function (root) {
    const result = [];
    const traversal = function (root) {
        if(!root) {
            return;
        }
        traversal(root.left);
        result.push(root.val);
        traversal(root.right);
    }
    traversal(root);
    return result;
};
```

递归法代码更为简单，控制好回溯条件为空结点即可。



## [300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

给你一个整数数组`nums` ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

![image-20210825151150945](http://img.gxyhero.top/img/202108251511989.png)

本题使用**动态规划**较为简单，故以本题为例介绍动态规划的一般解法。

方法一，动态规划：

- 状态定义：`dp[i]`表示`nums`前`i`个数字构成数组的最长序列长度
- 初始状态：`dp[i]`所有元素置为1
- 状态转移方程：`dp[i] = max(dp[j]) + 1`其中`0 <= j < i`且`nums[i] > nums[j]`
- 返回值：`max(dp[])`

```js
var lengthOfLIS = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    const dp = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    return Math.max(...dp);
};
```



方法二，贪心+二分查找：

