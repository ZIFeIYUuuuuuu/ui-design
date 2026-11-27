# 调明度时同时观察色彩强度

`principle/book-preserve-chroma` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　不要让亮度扼杀饱和度（Refactoring UI，印刷页 133） · 不要让亮度扼杀饱和度（Refactoring UI，印刷页 136）

**案例或原则（UI Lab 的来源笔记）**　HSL 两端显色弱，可适度补偿饱和度或小幅旋转色相，并用实际样本比较。

**为什么这样做**　相同 HSL 数字不保证同样的视觉感受。

## UI Lab 扩写与适用边界

**适用条件**　主色深浅层和品牌状态

**库中反例或不适用场景**　不要让不同语义色因旋转混淆，检查色域与对比

[返回行为走查与对照](read-state.md)
