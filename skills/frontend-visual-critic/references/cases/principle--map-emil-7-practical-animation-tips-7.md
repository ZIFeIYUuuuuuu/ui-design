# 时长由任务频率和对象决定

`principle/map-emil-7-practical-animation-tips-7` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[6. Keep your animations fast](https://emilkowal.ski/ui/7-practical-animation-tips)

**案例或原则（UI Lab 的来源笔记）**　作者强调交互动效应保持短促，通过比较快慢判断等待感。

**为什么这样做**　用实际输入事件到可见反馈的间隔验收，分开反馈和形状收尾时间。

## UI Lab 扩写与适用边界

**适用条件**　普通产品界面的局部状态变更

**如何应用**　用实际输入事件到可见反馈的间隔验收，分开反馈和形状收尾时间。

**代价**　给复杂大对象套同一短时长会出现视觉跳变。

**库中反例或不适用场景**　为所有动效统一极短或极长值，忽略用途与行程。

[返回行为走查与对照](activate.md)
