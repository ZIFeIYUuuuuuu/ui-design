# 主次清晰的工具栏按钮

`recipe/toolbar-button` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　[1. Use color and weight to create hierarchy instead of size](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [7. Not every button needs a background color](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [悬浮填充 HoverFill](https://wxad.design/abc/springen) · [共享背景](https://wxad.design/abc/springen) · [作为轻量卡片](https://wxad.design/abc/springen) · [作为轻量输入框](https://wxad.design/abc/springen) · [标签页 Tabs](https://wxad.design/abc/springen)

**UI Lab 归纳或组合方案**　工作区工具栏同时有一个主要命令和多个同级次要命令。

**原条目中的触发场景**　工作区工具栏同时有一个主要命令和多个同级次要命令。

**为什么这样做**　先建立视觉优先级，再只给语义相邻的次要操作编组。

**实际要解决的问题**　同级次要按钮连续切换时需要反馈，同时主要命令需要持续可识别。

**预期效果**　主要命令在静态状态清楚可见，次要组内反馈连续。

## UI Lab 扩写与适用边界

**适用条件**　有明确主命令且多个等价次操作的工具栏。

**前提**　有明确的操作排序和风险语义。

**如何应用**　先用静态填充分出主次。仅在语义连续的次要组内移动单一背景层；跨组、键盘或减弱动效使用各自独立的状态。

**代价**　跨组过渡会掩盖命令边界。

**库中反例或不适用场景**　大量离散命令或全部操作同等重要。

**实现成本**　原生按钮变体加组内测量和中断式过渡。

**结构限制**　同级操作的背景层和主要、危险操作隔离。

**性能风险**　避免给每个按钮分别维护跟随层。

**无障碍注意项**　键盘焦点样式独立于悬停。

[返回行为走查与对照](choose-action.md)
