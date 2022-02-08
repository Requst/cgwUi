# 快递开始

#### 安装组件库

```bash
npm i cgw-ui
```

#### 引用组件库

>在 main.js 中引用组件库
```javascript
// 全部引入
import 'cgw-ui/dist/css/index.css'
import MUI from 'cgw-ui'
Vue.use(MUI)

// 按需要引入
import 'cgw-ui/dist/css/index.css'
import { Card } from 'cgw-uic'
Vue.use(Card)
```