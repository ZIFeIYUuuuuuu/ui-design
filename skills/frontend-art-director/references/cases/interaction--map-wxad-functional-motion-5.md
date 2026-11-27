# 区分按下预反馈和真实选中

`interaction/map-wxad-functional-motion-5` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[细致的交互反馈：Checkbox / Switch](https://wxad.design/abc/functional-motion)

**案例或原则（UI Lab 的来源笔记）**　案例将手指或指针仍按住时的局部变化与最终控件状态区分。

**原条目中的触发场景**　需要让按钮、开关的即时反馈和提交结果独立时

## UI Lab 扩写与适用边界

**适用条件**　需要让按钮、开关的即时反馈和提交结果独立时

**如何应用**　视觉按压随按下与松手切换，状态更新遵循激活或取消规则。

**代价**　强烈按压会被误认成操作已经完成。

**库中反例或不适用场景**　请求还在等待时用成功色永久标记选中。

[返回行为走查与对照](activate.md)
