# 用固定比例和裁切管理不确定图片

`principle/book-user-media` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　小心用户上传的内容（Refactoring UI，印刷页 187） · 小心用户上传的内容（Refactoring UI，印刷页 188） · 小心用户上传的内容（Refactoring UI，印刷页 189）

**案例或原则（UI Lab 的来源笔记）**　以稳定的媒体框容纳上传图，按比例裁切。与背景相融时可考虑细弱 inset 或半透明边界。

**为什么这样做**　波动的固有比例及不确定底色会破坏网格。

## UI Lab 扩写与适用边界

**适用条件**　头像、上传图网格和产品卡

**库中反例或不适用场景**　不能切掉决定内容意义的主体或文本

[返回行为走查与对照](surface.md)
