<script>
export default {
  data() {
    return {
      avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      state:"",//听歌状态。。。
    }
  },
  computed:{
    userinfo(){
      return this.$store.state.user.user
    }
  }
}
</script>

<template>
  <el-container class="side-main">
    <el-header class="side-col" style="padding: 7px 13px">
      <el-popover
          placement="bottom"
          :title="userinfo.name"
          width="200"
          trigger="click">
        <div>
          {{userinfo}}
        </div>
        <el-avatar slot="reference" :size="'large'" :shape="'circle'" :src="avatarUrl"></el-avatar>
      </el-popover>

    </el-header>
    <el-main class="side-col" style="padding: 8px">
      <div class="iconfont mode">&#xe719;</div>
      <div class="iconfont mode">&#xe88d;</div>
      <div class="iconfont mode">&#xe666;</div>
      <div class="iconfont mode">&#xe612;</div>
      <div class="iconfont mode">&#xe64c;</div>
      <div class="iconfont mode">&#xe6cf;</div>
    </el-main>
    <el-footer class="side-col side-footer" style="padding: 8px">
      <div class="iconfont mode">&#xe624;</div>
      <div class="iconfont mode">&#xe619;</div>
      <div class="iconfont mode">&#xe600;</div>
      <div class="iconfont mode">&#xe643;</div>
    </el-footer>
  </el-container>
</template>

<style scoped lang="less">
.side-main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.side-col {
  //border: #1482f0 solid;
  height: 100%;
  &:nth-child(2) {
    flex: 6;
  }

  &:nth-child(3) {
    flex: 3;
  }
}
.mode{
  padding: 18px 0;
  cursor: pointer;
  border-radius: 30%;
  &:hover{
    background: rgba(153, 153, 153, 0.3);
  }
}
.side-footer{
  //向下对齐
}
</style>