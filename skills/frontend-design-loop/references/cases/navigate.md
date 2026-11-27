# 切换视图、展开列表，从卡片进详情再返回

只选能解释当前选择的一条。以下走查与判断分支为本次移植的教学例题，可按产品任务调整。

**怎么走**　在列表中途进详情，再返回；核对原对象、焦点、滚动和筛选。中途反向一次。

**怎样根据现场选择**　上下文已经保留则无需追加动效；丢失原对象先恢复状态；只有共享实体的起止位置清晰时再比较连续过渡。

## 选一张案例卡

- [卡片到详情保持图像身份](principle--map-wxad-wxad-21.md)
- [放大后仍是同一个可操作对象](principle--map-wxad-wxad12-3.md)
- [用边界显明折叠面板的展开](principle--map-wxad-springen2-4.md)
- [把界面修改绑定到选中的对象](principle--map-wxad-figma-make-5.md)
- [用画面指向建立对话所指](principle--map-wxad-small-p-3.md)
- [导航当前态](quality-rule--book-active-nav.md)
- [Navigation 当前项](recipe--book-navigation-emphasis.md)
