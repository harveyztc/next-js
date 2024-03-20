## react fiber
# 切片算法


为了使react渲染过程中可以被中断，将控制权交给浏览器，可以让位给高优先级任务，浏览器空闲之后恢复渲染

对于计算量比较大的js或者dom计算，避免卡顿，而是按照帧数有规律的渲染

、、、javascript




、、、


### 如何判断是否有高优先级任务？

当前js运行环境其实没有办法判断

约定合理的一个执行事件， 当当前任务超出合理的执行事件时，任务仍然没有完成，中断当前任务，将控制权交还给浏览器

每秒60帧， 1000ms/60f = 16ms

requestIdleCallback(callback, timeout)

使浏览器在**有空的时**间执行任务

一帧需要完成的任务
* 处理用户输入
* js
* **`requestAnimation的调用`**（TODO）
* 布局layout
* 绘制paint


react 通过**messageChanel**模拟实现 requestIdleCallback

* timeout超时后是否一定执行callback？

react 定了5个优先级


* Immediate 高优先级，马上执行
* UserBlocking 用户交互结果 需要及时反馈
* Normal 不需要立即感受到变化，比如网络请求
* Low 可以延后，但是需要执行
* Idle 可以无限期延后







