---
Router: Router 导航路由
---
# Router 导航路由

## 在线配置
<ClientOnly>
<ams-config name="router" type="block"/>
</ClientOnly>

## 结构

```js
export interface Route {
  path: string, // 路由地址
  name: string, // 路由名
  block?: string, // 渲染block名
  redirect?: string, // 重定向地址
  children?: Array<Route>, // 子路由
  meta?: {
    icon?: string, // 对应的图标：参考http://element-cn.eleme.io/#/zh-CN/component/icon，如 'info' 对应 'el-icon-info'
    hasMenu?: boolean, // 是否显示导航菜单面包屑，默认true
    hidden?: boolean, // 是否在左侧导航菜单显示，默认false
    roles?: Array<string>, // 路由权限角色，data内包含对应的角色才可见改路由
    noRedirect?: boolean, // 对应面包屑是否禁用跳转，默认为false
  }
}
export interface RouterBlock {
    type: 'router',
    router: {
      mode?: "hash" | "history" | "abstract",
      base?: "string", // 更多选项参考：https://router.vuejs.org/zh/api/#linkexactactiveclass
      showMenu?: true | false,   // 默认为true, false时隐藏所有路由菜单  0.8.6+支持
      routes: Array<Route>,
      defaultBreadcrumb: true // 默认为true，会把首个route作为默认首页加到所有面包屑，设置为false禁用此行为， 0.7.5+支持
    },
    data?: {
      roles?: Array<string> // 当前用户权限角色，用户需要包含路由要求的roles权限才能看到对应菜单
    },
    on?: {
    // 这里可以在生成router实例时注册事件，如beforeEach，详见 [ Router 实例方法 ](https://router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)
    }
}
```
## slotBlocks 配置

### 菜单头部slot block

配置子block的slot为`menuTop`，可以插入在菜单头部

``` js {7}
blocks: {
    title1: {
        type: 'title',
        options: {
            title: '主标题'
        },
        slot: 'menuTop'
    }
}
```

### 菜单底部slot block

配置子block的slot为`menuTop`，可以插入在菜单头部

``` js {7}
blocks: {
    title2: {
        type: 'title',
        options: {
            title: '主标题'
        },
        slot: 'menuBottom'
    }
}
```

### 导航的位置slot block

配置子block的slot为`nav`，可以插入在导航的位置

``` js {7}
blocks: {
    title3: {
        type: 'title',
        options: {
            title: '主标题'
        },
        slot: 'nav'
    }
}
```
 

## 示例
![router](../assets/block-router.png)

## 示例代码
<<< @/fe/.vuepress/components/block/router/block.js