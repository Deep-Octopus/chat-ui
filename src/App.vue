<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script setup>
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 引入 Element UI 的基础样式 */
//@import '~element-ui/packages/theme-chalk/src/base.scss';

/* 修改滚动条的样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

/* 如果需要兼容 Firefox */
/* 此样式可能会根据浏览器版本和操作系统有所不同 */
/* 最好在实际项目中进行测试和调整 */
/* 确保在需要兼容 Firefox 的情况下添加这些样式 */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(153, 153, 153, 0.3) #f5f5f5;
}
</style>