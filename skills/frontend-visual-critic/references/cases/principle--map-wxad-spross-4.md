# 浮层避让容器边界

`principle/map-wxad-spross-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[自动翻转与偏移](https://wxad.design/abc/spross)

**案例或原则（UI Lab 的来源笔记）**　作者显示浮层翻转主轴、沿另一轴偏移，箭头同步回指目标。

**为什么这样做**　用实际落点决定 transform-origin，箭头和内容采用同一定位结果。

## UI Lab 扩写与适用边界

**适用条件**　贴近视口和滚动容器边缘的临时浮层

**如何应用**　用实际落点决定 transform-origin，箭头和内容采用同一定位结果。

**代价**　浮层切侧时若运动强调过强会显得跳动，复杂容器需真实测试。

**库中反例或不适用场景**　使用触发器的固定下方位置，窄屏把主要动作截断。

[返回行为走查与对照](open-overlay.md)
