# 模拟惯性滚动要验证低帧率

`technique/map-wxad-scroll-mock-6` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[模拟存在的问题](https://wxad.design/abc/scroll-mock)

**案例或原则（UI Lab 的来源笔记）**　作者报告 transform 模拟在低电量降帧时会卡顿，手感也与原生滚动有差异。

## UI Lab 扩写与适用边界

**适用条件**　只有产品结构确实要求模拟滚动时

**如何应用**　用真机检查中断、长列表、滚动边界和省电场景，再对比原生机制。

**代价**　自实现需要承担滚动、键盘、性能和辅助技术责任。

**库中反例或不适用场景**　常规长文页拿自写 transform 全面替换原生滚动。

[返回行为走查与对照](manipulate.md)
