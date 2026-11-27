# 通知堆用索引表达前后层级

`pattern/map-emil-building-a-toast-component-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Stacking toasts](https://emilkowal.ski/ui/building-a-toast-component)

**案例或原则（UI Lab 的来源笔记）**　作者按堆叠顺序计算间距与缩放，较前通知决定堆叠的视觉基准。

## UI Lab 扩写与适用边界

**适用条件**　多条暂态通知需要保留历史且避免遮住正文

**如何应用**　分离折叠堆、展开队列和实时公告，按实际高度计算展开位置。

**代价**　动画堆提高密度，但持久错误与主要操作仍需可访问入口。

**库中反例或不适用场景**　把必须处理的长表单错误全部堆到瞬时通知后排。

[返回行为走查与对照](update.md)
