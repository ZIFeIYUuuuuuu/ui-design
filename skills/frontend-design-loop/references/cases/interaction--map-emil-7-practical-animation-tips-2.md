# 按下即时响应，业务结果另行反馈

`interaction/map-emil-7-practical-animation-tips-2` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[1. Scale your buttons](https://emilkowal.ski/ui/7-practical-animation-tips)

**案例或原则（UI Lab 的来源笔记）**　作者以按钮缩放和其它即时线索说明界面应及时承接操作。

**原条目中的触发场景**　有明确激活行为、且即时反馈能降低不确定性时

## UI Lab 扩写与适用边界

**适用条件**　有明确激活行为、且即时反馈能降低不确定性时

**如何应用**　将 pointer active 与提交状态拆开，触控、键盘和减少动态时仍提供可见反馈。

**代价**　图标或触区过小，明显缩放会削弱阅读或目标稳定性。

**库中反例或不适用场景**　按钮在服务器失败后还继续显示已保存。

[返回行为走查与对照](activate.md)
