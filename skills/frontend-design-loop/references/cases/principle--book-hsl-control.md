# 选择能解释色相、饱和度和明度的表示

`principle/book-hsl-control` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　摒弃十六进制，采用 HSL（Refactoring UI，印刷页 119） · 摒弃十六进制，采用 HSL（Refactoring UI，印刷页 120）

**案例或原则（UI Lab 的来源笔记）**　HSL 适合表达变体调节，但相等 L 未必等感知亮度。

**为什么这样做**　按维度调整比比较无关联的 Hex 数字更容易讨论。

## UI Lab 扩写与适用边界

**适用条件**　色彩系统编辑和渐变调节

**库中反例或不适用场景**　别把历史浏览器描述用作现在的色彩能力清单

[返回行为走查与对照](read-state.md)
