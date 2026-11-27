# 高频入口优先考虑立即反馈

`principle/map-emil-you-dont-need-animations-3` · ORIGINAL_PRACTICE · 上游复核状态 pending

**来源定位**　[Frequency of use](https://emilkowal.ski/ui/you-dont-need-animations)

**案例或原则（UI Lab 的来源笔记）**　作者以常用命令入口即时打开为例，说明用户使用越频繁，反复等待越容易造成负担。

**为什么这样做**　用任务频率与是否需要解释空间变更做决策，默认先比较瞬时状态切换。

## UI Lab 扩写与适用边界

**适用条件**　键盘高频调用、逐项浏览和实时输入

**如何应用**　用任务频率与是否需要解释空间变更做决策，默认先比较瞬时状态切换。

**代价**　即时切换效率高，复杂结构变化可能需要更短的定位提示。

**库中反例或不适用场景**　把首次 onboarding 的大幅入场复用到每次打开的命令面板。

[返回行为走查与对照](activate.md)
