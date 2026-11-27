# 紧凑工作台中的可操作卡片

`recipe/compact-action-card` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　[1. Use color and weight to create hierarchy instead of size](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [7. Not every button needs a background color](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886) · [悬浮填充 HoverFill](https://wxad.design/abc/springen) · [共享背景](https://wxad.design/abc/springen) · [作为轻量卡片](https://wxad.design/abc/springen) · [作为轻量输入框](https://wxad.design/abc/springen) · [标签页 Tabs](https://wxad.design/abc/springen)

**UI Lab 归纳或组合方案**　多个相邻卡片都是可进入的条目，默认视觉需要克制。

**原条目中的触发场景**　多个相邻卡片都是可进入的条目，默认视觉需要克制。

**为什么这样做**　用内容层级表达信息，用更弱的共享背景表达指针目标。组合跨文章，需在卡片的实际尺寸下试验。

**实际要解决的问题**　密集列表里的卡片既要容易区分，又不能因悬停使标题和图像晃动。

**预期效果**　组内反馈可见，内容的阅读位置稳定。

## UI Lab 扩写与适用边界

**适用条件**　用途一致的紧凑列表卡片。

**前提**　静态层级可读，确认主入口和二级操作。

**如何应用**　先区分标题和辅助信息，再从较小的缩放幅度试起；只改变装饰层，键盘可单独操作内嵌命令。

**代价**　大间距、跨行或异高时过渡容易跳跃。

**库中反例或不适用场景**　独立内容卡、跨行密集网格、含复杂嵌套操作。

**实现成本**　为卡片几何、换行和失焦建立回退。

**结构限制**　只有同一用途和明确主入口的相邻卡片可共用背景。

**性能风险**　图片加载后需要更新几何，避免反复在绘制间读取。

**无障碍注意项**　嵌套操作不能被整卡链接盖住；保留独立焦点。

[返回行为走查与对照](choose-action.md)
