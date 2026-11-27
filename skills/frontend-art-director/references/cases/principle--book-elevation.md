# 阴影要与相对高程一致

`principle/book-elevation` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　利用阴影表达海拔高度（Refactoring UI，印刷页 158） · 利用阴影表达海拔高度（Refactoring UI，印刷页 159） · 利用阴影表达海拔高度（Refactoring UI，印刷页 160）

**案例或原则（UI Lab 的来源笔记）**　按钮、Dropdown、模态和拖起条目采用不同的层次，按下可降层。

**为什么这样做**　阴影帮助表达谁在前面以及状态变化。

## UI Lab 扩写与适用边界

**适用条件**　多个表面及浮层同时存在

**库中反例或不适用场景**　书中五级是示例；视觉高程不自动改变 z-index 和语义

[返回行为走查与对照](surface.md)
