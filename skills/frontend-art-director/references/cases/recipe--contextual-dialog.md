# 保留触发上下文的确认对话框

`recipe/contextual-dialog` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　[1. Use color and weight to create hierarchy instead of size](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [7. Not every button needs a background color](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [价值一：服务功能](https://wxad.design/abc/functional-motion) · [Frequency of use](https://emilkowal.ski/ui/you-dont-need-animations) · [点击来源放大](https://wxad.design/abc/spross) · [Anatomy](https://emilkowal.ski/ui/building-a-drawer-component)

**UI Lab 归纳或组合方案**　需要在当前页面对低频、具有明确入口的操作二次确认。

**原条目中的触发场景**　需要在当前页面对低频、具有明确入口的操作二次确认。

**为什么这样做**　为明确可见的触发点使用克制的变换原点，高频或减弱动效场景即时呈现。

**实际要解决的问题**　低频确认时用户应理解从哪个操作进入，又不能让重复操作变慢。

**预期效果**　对话框语义和注意力移动明确，并保留安全的操作路径。

## UI Lab 扩写与适用边界

**适用条件**　可见触发控件发起的低频确认。

**前提**　标题、描述、关闭和焦点回归都能独立运行。

**如何应用**　指针从可见触发位置展开；键盘可用触发器中心，无稳定锚点或减弱动效则即时出现。外观动画与焦点进入、返回独立。

**代价**　反复播放或错位的原点会分散注意。

**库中反例或不适用场景**　快捷搜索、后台触发、无稳定触发点。

**实现成本**　处理键盘激活、触发点移除与焦点回退。

**结构限制**　语义层、焦点管理与外观层分开。

**性能风险**　一次读取开始时的几何，避免逐帧读取。

**无障碍注意项**　依赖动画传递关键信息会遗漏减弱动效用户。

[返回行为走查与对照](open-overlay.md)
