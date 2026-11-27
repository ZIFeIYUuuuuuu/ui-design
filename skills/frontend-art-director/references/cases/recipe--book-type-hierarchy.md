# Typography 层级

`recipe/book-type-hierarchy` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　建立类型标度（Refactoring UI，印刷页 88） · 建立类型标度（Refactoring UI，印刷页 93） · 基线，非中心（Refactoring UI，印刷页 102） · 基线，非中心（Refactoring UI，印刷页 103） · 基线，非中心（Refactoring UI，印刷页 104） · 控制生产线长度（Refactoring UI，印刷页 99） · 控制生产线长度（Refactoring UI，印刷页 101） · 线高成正比（Refactoring UI，印刷页 105） · 线高成正比（Refactoring UI，印刷页 106） · 尺寸并不代表一切（Refactoring UI，印刷页 32） · 尺寸并不代表一切（Refactoring UI，印刷页 33） · 并非所有元素都一样（Refactoring UI，印刷页 30） · 并非所有元素都一样（Refactoring UI，印刷页 31） · 语义是次要的（Refactoring UI，印刷页 52） · 语义是次要的（Refactoring UI，印刷页 54） · 无障碍并不一定意味着丑陋（Refactoring UI，印刷页 142） · 文字需要一致的对比度（Refactoring UI，印刷页 176） · 文字需要一致的对比度（Refactoring UI，印刷页 177） · 文字需要一致的对比度（Refactoring UI，印刷页 179）

**UI Lab 归纳或组合方案**　产品标题、正文和状态信息字号过多且阅读不稳。

**原条目中的触发场景**　产品标题、正文和状态信息字号过多且阅读不稳。

**为什么这样做**　定义少量文本角色，按视觉重要性决定尺寸、字重和行高。

**实际要解决的问题**　无统一文字角色，标题与文案争夺空间。

**预期效果**　阅读连续，文本层级可扩展。

## UI Lab 扩写与适用边界

**适用条件**　产品标题、正文和状态信息字号过多且阅读不稳。

**前提**　收集真实中英混排、用户缩放和主题。

**如何应用**　落地 heading/body/meta 角色；混字号单行考虑 align-items: baseline；正文宽度用实际语言测试，避免照搬英文经验。

**代价**　把角色硬绑定单一数值会损失跨语言弹性。

**库中反例或不适用场景**　代码与数据列需独立的字体和宽度策略。

**实现成本**　复用现有组件原语并检查真实状态和宽度。

**结构限制**　收集真实中英混排、用户缩放和主题。

**无障碍注意项**　语义级别保持正确，放大后内容可读且无截断。

[返回行为走查与对照](scan.md)
