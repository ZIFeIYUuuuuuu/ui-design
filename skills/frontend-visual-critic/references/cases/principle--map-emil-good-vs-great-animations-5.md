# 装饰性指针反馈可以用弹簧插值

`principle/map-emil-good-vs-great-animations-5` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Spring-based interactions](https://emilkowal.ski/ui/good-vs-great-animations)

**案例或原则（UI Lab 的来源笔记）**　作者在装饰图形比较直接跟随与弹簧插值，说明功能性读数仍可能需要即时。

**为什么这样做**　将原始指针和表现层弹簧分离；重新移动时从当前值和速度继续。

## UI Lab 扩写与适用边界

**适用条件**　指针让装饰表面渐近调整时

**如何应用**　将原始指针和表现层弹簧分离；重新移动时从当前值和速度继续。

**代价**　弹簧有追随延迟；用户在读精确坐标时不能加同样滞后。

**库中反例或不适用场景**　用装饰弹簧对实际交易读数插值。

[返回行为走查与对照](browse-targets.md)
