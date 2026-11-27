# 相邻工具提示首次延迟、后续立即

`interaction/map-emil-7-practical-animation-tips-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[3. Don’t delay subsequent tooltips](https://emilkowal.ski/ui/7-practical-animation-tips)

**案例或原则（UI Lab 的来源笔记）**　作者建议首个 tooltip 延迟防误触，之后在已经开启的组内即时显示。

**原条目中的触发场景**　密集工具栏的连续浏览

## UI Lab 扩写与适用边界

**适用条件**　密集工具栏的连续浏览

**如何应用**　为组保留状态和短宽限，键盘焦点能触发提示并用 Escape 关闭。

**代价**　把宽限跨组共用会出现不相关内容；触屏不能只靠悬停。

**库中反例或不适用场景**　每个提示都重复完整入场，用户连续横扫看不到任何描述。

[返回行为走查与对照](browse-targets.md)
