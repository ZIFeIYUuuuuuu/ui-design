# 拖拽高频更新走小范围渲染

`technique/map-emil-building-a-drawer-component-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Drag gesture](https://emilkowal.ski/ui/building-a-drawer-component)

**案例或原则（UI Lab 的来源笔记）**　作者在较长列表中观察拖拽卡顿，通过避免大量内容随手势更新减轻开销。

## UI Lab 扩写与适用边界

**适用条件**　抽屉、面板和图库滑动等连续事件

**如何应用**　将每帧位置变动限制在实际运动层，拖动期间同时验证滚动、焦点和长列表。

**代价**　把状态移出渲染路径后要额外同步最终状态与取消操作。

**库中反例或不适用场景**　每个 pointermove 重渲染完整抽屉树并读取全局布局。

[返回行为走查与对照](drag-panel.md)
