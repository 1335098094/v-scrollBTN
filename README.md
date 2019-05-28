# v-scrollbtn

> 一个 Vue.js 的菜单按钮，可以拖动，且只会在屏幕的左右侧


## 安装步骤

npm i v-scrollbtn -s

# 使用示例

`<v-scrollbtn></v-scrollbtn>`

#自定义标题

`<v-scrollbtn text="首页"></v-scrollbtn>`

#自定义图标

```
<v-scrollbtn :text="text">
      <img slot="icon" src="./index.png"/>
</v-scrollbtn>
```
#自定义图标大小 默认60*60

```
<v-scrollbtn :text="text" itemWidth="80" itemHeight="80">
      <img slot="icon" src="./index.png"/>
</v-scrollbtn>
```