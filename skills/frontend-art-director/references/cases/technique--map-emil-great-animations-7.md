# 过渡允许即时反向输入

`technique/map-emil-great-animations-7` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Great animations are interruptible](https://emilkowal.ski/ui/great-animations)

**案例或原则（UI Lab 的来源笔记）**　作者用连续开合演示可打断动画，并指出 CSS transition 能从中途重新定目标。

## UI Lab 扩写与适用边界

**适用条件**　菜单、抽屉和浮层需要快速反向切换时

**如何应用**　为正在关闭和重新打开提供有效事件，从当前画面采样进度，不依赖动画结束释放操作。

**代价**　业务提交与过渡中断应使用不同生命周期。

**库中反例或不适用场景**　快速按下 Escape 后弹窗仍过一秒才开始关闭。

[返回行为走查与对照](interrupt.md)
