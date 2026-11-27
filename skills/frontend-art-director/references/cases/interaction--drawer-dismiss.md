# 抽屉滚动与拖拽仲裁

`interaction/drawer-dismiss` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Scrolling](https://emilkowal.ski/ui/building-a-drawer-component) · [Snap points](https://emilkowal.ski/ui/building-a-drawer-component) · [Background animation](https://emilkowal.ski/ui/building-a-drawer-component) · [Drag gesture](https://emilkowal.ski/ui/building-a-drawer-component) · [Inputs](https://emilkowal.ski/ui/building-a-drawer-component) · [滑动交互](https://wxad.design/abc/drawer) · [连接](https://wxad.design/abc/drawer)

**案例或原则（UI Lab 的来源笔记）**　Vaul 先让内容滚动，到顶后短暂阻止拖动，避免惯性意外关层。可选停靠点和快速甩动决定释放去向。设计垂点另外从越界和释放方向理解拖动分支。

**原条目中的触发场景**　用户在可滚动抽屉中向下拖动。

**为什么这样做**　用滚动边界和短暂冷却交接手势；用距离及释放速度区分复位、停靠和关闭。

**实际要解决的问题**　一条下拉手势可能意味着继续滚动，也可能意味着拖动面板。

**预期效果**　避免惯性滚动到顶就误关，仍保留熟悉的甩动关闭路径。

## UI Lab 扩写与适用边界

**适用条件**　移动端需要原生感的表单或分档浏览。

**前提**　按目标设备测量滚动与指针冲突。

**如何应用**　technique/direct-drawer-transform

**代价**　冷却对极快的刻意下拉有延迟。

**库中反例或不适用场景**　主要交互本身依赖纵向手势，或误关会丢数据。

**实现成本**　处理滚动祖先、阈值、速度、取消、输入键盘以及焦点。

**结构限制**　内容滚动与面板位移是独立层。

**性能风险**　在长内容上每帧修改继承性变量可能触发后代重算。

**无障碍注意项**　保留明确关闭控件，拖动或动画不可成为唯一途径。

[返回行为走查与对照](drag-panel.md)
