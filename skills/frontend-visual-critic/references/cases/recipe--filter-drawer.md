# 承载筛选子流程的抽屉

`recipe/filter-drawer` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　[价值一：服务功能](https://wxad.design/abc/functional-motion) · [桌面端 Drawer](https://wxad.design/abc/drawer) · [Scrolling](https://emilkowal.ski/ui/building-a-drawer-component) · [Snap points](https://emilkowal.ski/ui/building-a-drawer-component) · [Background animation](https://emilkowal.ski/ui/building-a-drawer-component) · [Drag gesture](https://emilkowal.ski/ui/building-a-drawer-component) · [Inputs](https://emilkowal.ski/ui/building-a-drawer-component) · [滑动交互](https://wxad.design/abc/drawer) · [连接](https://wxad.design/abc/drawer) · [Anatomy](https://emilkowal.ski/ui/building-a-drawer-component)

**UI Lab 归纳或组合方案**　在保留列表上下文的同时编辑可能需要多步的筛选条件。

**原条目中的触发场景**　在保留列表上下文的同时编辑可能需要多步的筛选条件。

**为什么这样做**　采用状态清晰的内页过渡。将 Vaul 的手势仲裁用于移动承载层，桌面悬浮是独立选择。

**实际要解决的问题**　完成多步筛选时需要保留原列表和步骤关系，也要避免滚动误关。

**预期效果**　切换筛选步骤时方向清楚，未提交内容在异常手势下仍受到保护。

## UI Lab 扩写与适用边界

**适用条件**　有第二步筛选且要维持列表上下文。

**前提**　明确提交、返回、取消和未保存策略。

**如何应用**　以 Dialog primitive 管理焦点；移动端先滚动，到顶且冷却结束后才交接手势。释放后按距离、方向、速度和未保存状态选择关闭或复位；多步内容用内层位移交代方向。

**代价**　键盘、滚动和惯性边界提高实现复杂度。

**库中反例或不适用场景**　单步简单选项或需要独立路由的长流程。

**实现成本**　独立处理桌面尺寸、移动输入、滚动仲裁、关闭和状态保护。

**结构限制**　页面、外层尺寸、内层步骤和滚动容器分层。

**性能风险**　长列表拖动优先验证 transform 的帧时间。

**无障碍注意项**　手势与 Escape、按钮应走同一退出策略。

[返回行为走查与对照](drag-panel.md)
