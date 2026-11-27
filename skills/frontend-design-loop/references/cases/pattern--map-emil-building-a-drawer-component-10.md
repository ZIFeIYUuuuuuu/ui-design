# 抽屉停点提供稳定的层级位置

`pattern/map-emil-building-a-drawer-component-10` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Snap points](https://emilkowal.ski/ui/building-a-drawer-component)

**案例或原则（UI Lab 的来源笔记）**　作者说明抽屉可固定于多个可操作高度，而释放行为受拖拽位置和速度影响。

## UI Lab 扩写与适用边界

**适用条件**　地图详情或内容面板需要预览、展开等状态时

**如何应用**　定义有序停点，按速度和位置决策，给键盘用户同等切换入口。

**代价**　更多状态使方向判断和键盘逻辑复杂，窄屏需适配内容高度。

**库中反例或不适用场景**　多档抽屉每次激活自动跳过半展开状态且没有恢复入口。

[返回行为走查与对照](drag-panel.md)
