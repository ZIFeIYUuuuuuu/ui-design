# Card 间距与深度

`recipe/book-card-spacing-depth` · PRINCIPLE_DERIVED · 上游复核状态 pending

**来源定位**　网格被高估了（Refactoring UI，印刷页 72） · 网格被高估了（Refactoring UI，印刷页 78） · 相对尺寸不能缩放（Refactoring UI，印刷页 79） · 相对尺寸不能缩放（Refactoring UI，印刷页 82） · 避免模棱两可的间距（Refactoring UI，印刷页 83） · 避免模棱两可的间距（Refactoring UI，印刷页 84） · 基线，非中心（Refactoring UI，印刷页 102） · 基线，非中心（Refactoring UI，印刷页 103） · 基线，非中心（Refactoring UI，印刷页 104） · 即使是平面设计也可以有深度（Refactoring UI，印刷页 167） · 即使是平面设计也可以有深度（Refactoring UI，印刷页 168） · 减少边框（Refactoring UI，印刷页 206） · 减少边框（Refactoring UI，印刷页 209） · 不必填满整个屏幕（Refactoring UI，印刷页 65） · 不必填满整个屏幕（Refactoring UI，印刷页 70） · 建立间距和尺寸系统（Refactoring UI，印刷页 60） · 建立间距和尺寸系统（Refactoring UI，印刷页 64） · 利用阴影表达海拔高度（Refactoring UI，印刷页 158） · 利用阴影表达海拔高度（Refactoring UI，印刷页 159） · 利用阴影表达海拔高度（Refactoring UI，印刷页 160） · 阴影有两个部分（Refactoring UI，印刷页 163） · 阴影有两个部分（Refactoring UI，印刷页 164） · 阴影有两个部分（Refactoring UI，印刷页 166） · 控制生产线长度（Refactoring UI，印刷页 99） · 控制生产线长度（Refactoring UI，印刷页 101） · 线高成正比（Refactoring UI，印刷页 105） · 线高成正比（Refactoring UI，印刷页 106）

**UI Lab 归纳或组合方案**　桌面卡片挤到手机时比例失衡，或列表边框过重。

**原条目中的触发场景**　桌面卡片挤到手机时比例失衡，或列表边框过重。

**为什么这样做**　为媒体、正文和操作各分配最适宽度，用局部间距和表面表达关系。

**实际要解决的问题**　比例跟随视口和字体一同变形，阅读顺序变差。

**预期效果**　卡片在窄屏可重新排列，在宽屏保持稳定。

## UI Lab 扩写与适用边界

**适用条件**　桌面卡片挤到手机时比例失衡，或列表边框过重。

**前提**　用真实长内容和异比例图片核对。

**如何应用**　设置内容导向 max-width 与可缩宽度，在窄屏重排图片及操作；让字号和 padding 独立，混字号标题与同排动作按基线对齐，先用表面差和间距比较边框减少后的结果。

**代价**　独立尺寸增加响应式状态，浅色深度需要实测。

**库中反例或不适用场景**　本就必须共享严格列宽的比较网格不宜逐卡变体。

**实现成本**　复用现有组件原语并检查真实状态和宽度。

**结构限制**　用真实长内容和异比例图片核对。

**无障碍注意项**　清楚区分卡片主链接与嵌套按钮，保留焦点和读序。

[返回行为走查与对照](surface.md)
