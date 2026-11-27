# 浮层从真实触发位置生长

`principle/map-emil-good-vs-great-animations-2` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Origin-aware animations](https://emilkowal.ski/ui/good-vs-great-animations)

**案例或原则（UI Lab 的来源笔记）**　作者以菜单与触发按钮的关系说明缩放锚点应指向来源，并指出中间起始点会削弱联系。

**为什么这样做**　根据实际放置侧和箭头位置设置 transform-origin，翻转后同步更新。

## UI Lab 扩写与适用边界

**适用条件**　触发器旁的弹出元素有明确定点时

**如何应用**　根据实际放置侧和箭头位置设置 transform-origin，翻转后同步更新。

**代价**　远程触发、无固定锚点或边界翻转需要回退。

**库中反例或不适用场景**　菜单在按钮上方翻转后，动画仍从离按钮最远的上边生长。

[返回行为走查与对照](open-overlay.md)
