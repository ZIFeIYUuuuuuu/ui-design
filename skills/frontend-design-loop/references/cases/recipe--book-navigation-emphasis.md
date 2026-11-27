# Navigation 当前项

`recipe/book-navigation-emphasis` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　通过取消强调来强调（Refactoring UI，印刷页 39） · 并非每个链接都需要颜色（Refactoring UI，印刷页 109） · 用重点边框增添色彩（Refactoring UI，印刷页 195） · 用重点边框增添色彩（Refactoring UI，印刷页 196） · 不要只依赖颜色（Refactoring UI，印刷页 146） · 不要只依赖颜色（Refactoring UI，印刷页 147） · 并非所有元素都一样（Refactoring UI，印刷页 30） · 并非所有元素都一样（Refactoring UI，印刷页 31） · 尺寸并不代表一切（Refactoring UI，印刷页 32） · 尺寸并不代表一切（Refactoring UI，印刷页 33） · 语义是次要的（Refactoring UI，印刷页 52） · 语义是次要的（Refactoring UI，印刷页 54） · 装饰您的背景（Refactoring UI，印刷页 198） · 装饰您的背景（Refactoring UI，印刷页 199） · 灰色不一定是灰色（Refactoring UI，印刷页 139） · 灰色不一定是灰色（Refactoring UI，印刷页 140） · 预先确定您的色调（Refactoring UI，印刷页 129） · 预先确定您的色调（Refactoring UI，印刷页 131）

**UI Lab 归纳或组合方案**　导航项全部突出，难判断当前页和任务路径。

**原条目中的触发场景**　导航项全部突出，难判断当前页和任务路径。

**为什么这样做**　弱化其余项，给当前位置少量形状、边线或字重线索。

**实际要解决的问题**　同等视觉重量让当前位置和可用路径不易区分。

**预期效果**　当前项及焦点可快速分辨。

## UI Lab 扩写与适用边界

**适用条件**　导航项全部突出，难判断当前页和任务路径。

**前提**　区分真实导航链接、局部 Tabs 与焦点状态。

**如何应用**　维持布局，以边线和明显字形标识当前项并控制其余项；Tabs 原语仅应用其选择语义，页面导航使用 aria-current。

**代价**　过度弱化会使其他链接难发现。

**库中反例或不适用场景**　关键导航不能靠 hover 揭示。

**实现成本**　复用现有组件原语并检查真实状态和宽度。

**结构限制**　区分真实导航链接、局部 Tabs 与焦点状态。

**无障碍注意项**　非颜色线索、可见键盘焦点和适当的状态属性。

[返回行为走查与对照](navigate.md)
