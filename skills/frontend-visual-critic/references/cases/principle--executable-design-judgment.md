# 把设计判断写成可执行规则

`principle/executable-design-judgment` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Transferring taste](https://emilkowal.ski/ui/agents-with-taste) · [动画词汇表](https://wxad.design/abc/facing-agents-and-designers) · [讨论与走查](https://wxad.design/abc/facing-agents-and-designers)

**案例或原则（UI Lab 的来源笔记）**　Emil 用意图到参数的规则与缓动决策树传递判断。设计垂点把词汇、真实案例和带元素定位的预览走查连起来。

**为什么这样做**　先写意图和状态变化，再给有边界的参数、反例及观察得到的验收标准。

**实际要解决的问题**　形容词和数值孤立出现时，Agent 难以判定在新情境中该用哪条规则。

**预期效果**　同一规则既能指导执行，也能解释何时应当走静态回退。

## UI Lab 扩写与适用边界

**适用条件**　可以重复评估的交互与设计语言。

**前提**　说明项目目标、当前基线和评审人。

**代价**　模板过细会把样例参数固化。

**库中反例或不适用场景**　团队尚未形成判断，且缺少真实任务反馈。

**实现成本**　维护规则条件、正反例、预览和版本记录。

**结构限制**　把产品的决定与平台可移植规则分开。

**性能风险**　把 will-change 通用化会给渲染资源带来压力。

**无障碍注意项**　动效规则需要相应的触屏、键盘和减弱动效验收。

[返回行为走查与对照](evaluate.md)
