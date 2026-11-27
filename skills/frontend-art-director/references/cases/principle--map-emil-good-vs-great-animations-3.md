# 曲线要匹配进入和在场移动

`principle/map-emil-good-vs-great-animations-3` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Use the right easing](https://emilkowal.ski/ui/good-vs-great-animations)

**案例或原则（UI Lab 的来源笔记）**　作者用已在画面的对象解释加速然后减速，常见的进入场景则优先考虑快速响应。

**为什么这样做**　对比同距离与时长下的起步时间和落点感，减少动态偏好下移除位移。

## UI Lab 扩写与适用边界

**适用条件**　需要为元素进入、退出和屏内位移定义不同曲线

**如何应用**　对比同距离与时长下的起步时间和落点感，减少动态偏好下移除位移。

**代价**　强曲线会让长距离对象速度突变；具体形状还需可视验证。

**库中反例或不适用场景**　在用户点击后用迟缓起步曲线让短菜单感觉没有响应。

[返回行为走查与对照](interrupt.md)
