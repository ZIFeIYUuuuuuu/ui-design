# 分别调整组件文字与内距

`principle/book-independent-sizing` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　相对尺寸不能缩放（Refactoring UI，印刷页 79） · 相对尺寸不能缩放（Refactoring UI，印刷页 82）

**案例或原则（UI Lab 的来源笔记）**　标题和正文、按钮内距与字号可独立调整，不强求固定倍数。

**为什么这样做**　整体等比缩放会造成小按钮过紧、大按钮过松。

## UI Lab 扩写与适用边界

**适用条件**　响应式组件、多尺寸变体

**库中反例或不适用场景**　有本来就需等比例的图形或媒体

[返回行为走查与对照](scan.md)
