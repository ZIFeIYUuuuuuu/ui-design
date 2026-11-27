# 拖拽时直接更新抽屉 transform

`technique/direct-drawer-transform` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Drag gesture](https://emilkowal.ski/ui/building-a-drawer-component)

**案例或原则（UI Lab 的来源笔记）**　页面内容较多时，在被拖拽的容器上直接更新位移以减少变量继承引起的样式计算。

## UI Lab 扩写与适用边界

**代价**　验证目标设备帧率，并在手势结束时清理内联样式。

此条没有单列反例；行为入口中的对照属于教学推导。

[返回行为走查与对照](drag-panel.md)
