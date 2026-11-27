# 相邻工具共享提示层和短宽限

`pattern/map-wxad-springen-16` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[工具提示 Tooltip](https://wxad.design/abc/springen)

**案例或原则（UI Lab 的来源笔记）**　示例保留离开后的短窗口，移入相邻按钮时沿用浮层和位置反馈。

## UI Lab 扩写与适用边界

**适用条件**　紧邻且语义一致的工具提示组

**如何应用**　首次进入允许意图延迟，组内切换更新锚点和可访问描述，退出或 Escape 清理。

**代价**　已有内容如果切换太慢，可能让描述与触发器错配。

**库中反例或不适用场景**　在屏幕两端不相关的工具之间强制共享一个飞行提示。

[返回行为走查与对照](browse-targets.md)
