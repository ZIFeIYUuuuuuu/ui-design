# 比较图保持像素空间一致

`technique/map-emil-the-magic-of-clip-path-4` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Comparison Sliders](https://emilkowal.ski/ui/the-magic-of-clip-path)

**案例或原则（UI Lab 的来源笔记）**　作者使用裁切改变比较图的可见比例，避免上下图各自缩放或重新排版。

## UI Lab 扩写与适用边界

**适用条件**　前后对照需要共享同一个坐标系时

**如何应用**　重合相同比例的媒体层，让滑块值控制裁切而语义仍由独立值表达。

**代价**　重叠要求图片配准，也会新增绘制与辅助输入设计。

**库中反例或不适用场景**　两张来源图的取景不同却允许用户把位移解读为真实变化。

[返回行为走查与对照](manipulate.md)
