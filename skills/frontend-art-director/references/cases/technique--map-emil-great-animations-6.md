# 用实际帧数据检查布局与绘制

`technique/map-emil-great-animations-6` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Great animations are performant](https://emilkowal.ski/ui/great-animations)

**案例或原则（UI Lab 的来源笔记）**　作者讨论 transform、opacity 与掉帧案例，指出页面繁重时必须考虑主线程负载。

## UI Lab 扩写与适用边界

**适用条件**　同时发生页面加载或多个可见预览时

**如何应用**　先测长任务和帧间隔，再减小布局读写范围，针对硬件与浏览器验证。

**代价**　仅修改属性名不保证合成，复杂裁切仍可能带来绘制开销。

**库中反例或不适用场景**　计算样式出现 transform 就把流畅度标记为通过。

[返回行为走查与对照](interrupt.md)
