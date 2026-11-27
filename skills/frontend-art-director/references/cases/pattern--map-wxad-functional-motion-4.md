# 值重叠时合并范围提示

`pattern/map-wxad-functional-motion-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[状态合并：Slider](https://wxad.design/abc/functional-motion)

**案例或原则（UI Lab 的来源笔记）**　当双滑块的两个提示挤到一起时，用一个提示呈现完整区间，空间足够再分开。

## UI Lab 扩写与适用边界

**适用条件**　两个值共同定义一个范围且需要同时阅读时

**如何应用**　比较视觉气泡占位并设置进入、退出阈值差；保持两个输入的独立可访问值。

**代价**　视觉合并需要防抖，区间单位和次序仍需明确。

**库中反例或不适用场景**　对两个无关数值复用一个提示，使用户误认它们组成区间。

[返回行为走查与对照](manipulate.md)
