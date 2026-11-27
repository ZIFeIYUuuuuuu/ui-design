# 堆叠 Toast

`pattern/stacked-toast` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Stacking toasts](https://emilkowal.ski/ui/building-a-toast-component) · [Animations](https://emilkowal.ski/ui/building-a-toast-component) · [Swiping](https://emilkowal.ski/ui/building-a-toast-component) · [Expanding toasts](https://emilkowal.ski/ui/building-a-toast-component) · [The big little details](https://emilkowal.ski/ui/building-a-toast-component)

**案例或原则（UI Lab 的来源笔记）**　用固定通知区域叠放多条反馈，以位置和缩放表达深度。

**为什么这样做**　堆叠压缩占用，展开保留阅读路径。过渡可重定向，隐藏标签页暂停计时。

**实际要解决的问题**　多个反馈快速到达时，旧项会被重排，用户也可能来不及阅读。

**预期效果**　反馈可以连续到达和撤除，用户仍能识别、展开或关闭各项。

## UI Lab 扩写与适用边界

**适用条件**　连续保存或提交反馈。

**前提**　可关闭或查看的重要消息有持续可达的路径。

**代价**　堆叠时部分正文暂不可见。

**库中反例或不适用场景**　阻塞错误、必须读完或确认的信息。

**实现成本**　协调进入、展开、倒计时暂停、拖拽、离场与移除。

**结构限制**　按 ID 保持项的身份，展开时基于各项实际高度。

**性能风险**　同一帧中重复测量和写入会冲击快速入列。

**无障碍注意项**　仅靠悬停展开会排除键盘与触屏。批量播报可能打断读屏。

[返回行为走查与对照](update.md)
