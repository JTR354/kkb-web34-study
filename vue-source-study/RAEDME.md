# 源码分析

## 1. 学习方法

- 记录关键文件 (作用)
- 记录文件路径

- 从问题触发 initState

- 抓住一条线分析



## 2.目标
1. Vue 批量异步更新
2. VDOM diff

批量 异步 event loop

宏任务 间隙 微任务
http://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly


切入点 set
记录关键方法  nextTick

放任务

nextTick 
概念: 批量 异步 更新 策略
作用: 访问dom最新的值
工作 数据变化  watcher入队 异步冲刷 watcher.run
实践: 最新的DOM熟悉,宽高等 


diff 组件只要一个watcher, 比对path 更新


patchVnode 属性,文本,子节点


为啥不 replace ???