# 统一文字背后的局部对比

`principle/book-image-contrast` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　文字需要一致的对比度（Refactoring UI，印刷页 176） · 文字需要一致的对比度（Refactoring UI，印刷页 177） · 文字需要一致的对比度（Refactoring UI，印刷页 179）

**案例或原则（UI Lab 的来源笔记）**　可尝试遮罩、减小图片亮暗跨度、乘法着色，必要时用文字阴影补偿。

**为什么这样做**　同一图片的亮暗区可能同时破坏同一文字颜色的辨识。

## UI Lab 扩写与适用边界

**适用条件**　Hero 和图片卡叠文

**库中反例或不适用场景**　主体会被遮挡时改用独立文字面或重新裁图

[返回行为走查与对照](surface.md)
