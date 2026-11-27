# 在采用复杂滤镜前评估回退

`technique/map-wxad-svg-liquid-glass-5` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[相关问题](https://wxad.design/abc/svg-liquid-glass)

**案例或原则（UI Lab 的来源笔记）**　作者记录 SVG 折射模拟的兼容、像素锯齿和尺寸变化计算成本。

## UI Lab 扩写与适用边界

**适用条件**　考虑加入复杂光学效果或过滤器时

**如何应用**　从支持检测、静态背景、可读性和低性能设备体验倒推是否采用。

**代价**　复杂滤镜的视觉辨识度伴随绘制和兼容成本。

**库中反例或不适用场景**　正文的文字和主要操作依赖滤镜才能读清。

[返回行为走查与对照](interrupt.md)
