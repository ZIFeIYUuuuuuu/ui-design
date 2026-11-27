# 用慢放定位状态衔接失败

`technique/map-wxad-interactive-design-in-ai-13` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[1. 用录屏的方式调试](https://wxad.design/abc/interactive-design-in-ai)

**案例或原则（UI Lab 的来源笔记）**　作者以录屏慢放找出跳帧、时序错位和关键帧的状态断层。

## UI Lab 扩写与适用边界

**适用条件**　交互在正常速度下只能感到模糊的不自然时

**如何应用**　从同一操作起点拍开始、途中和结束，标注用户输入时间并检查计算样式。

**代价**　单帧截图缺少时间证据，录屏还需保留设备和视口信息。

**库中反例或不适用场景**　只对比打开后的静止画面，直接认定快速反向也能顺畅。

[返回行为走查与对照](interrupt.md)
