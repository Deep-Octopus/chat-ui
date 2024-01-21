<template>
  <el-container class="contact-main">
    <el-header
        style="border-bottom: rgba(153,153,153,0.2) solid 1px;display: flex;justify-content: space-between;gap: 5px;padding: 17px 20px">
      <div style="display: flex;justify-content: left">
        <div style="width: fit-content;font-size: 20px;font-weight: bold">{{ target.name }}</div>
        <div v-if="!target.isGroup"
             :style="`margin:9px;border-radius: 50%;background: ${target.online?'green':'red'};height:10px;width:10px`">
        </div>
        <div v-else>({{ target.num }})</div>
      </div>
      <div class="top-right">
        <el-tooltip content="语音通话">
          <div class="iconfont op">&#xe659;</div>
        </el-tooltip>
        <el-tooltip content="视频通话">
          <div class="iconfont op">&#xe6c9;</div>
        </el-tooltip>
        <el-tooltip content="屏幕共享">
          <div class="iconfont op">&#xe746;</div>
        </el-tooltip>
        <el-tooltip content="远程协助">
          <div class="iconfont op">&#xe626;</div>
        </el-tooltip>
        <el-tooltip content="发起群聊">
          <div class="iconfont op">&#xe662;</div>
        </el-tooltip>
        <el-tooltip content="更多">
          <div class="iconfont op">&#xe602;</div>
        </el-tooltip>
      </div>
    </el-header>
    <el-row :gutter="0" style="height: 91.8%;">
      <el-col :span="18" style="height: 100%;">
        <el-main id="msgMain" style="height: 70%;border-right: rgba(153,153,153,0.21) solid 1px">
          <message-content></message-content>
        </el-main>
        <el-footer
            style="height:30%;border-top: rgba(153,153,153,0.2) solid 1px;border-right: rgba(153,153,153,0.21) solid 1px">
          <edit-message-box></edit-message-box>
        </el-footer>
      </el-col>
      <el-col :span="6">预留</el-col>
    </el-row>

  </el-container>

</template>
<script>

import MessageContent from "@/components/MessageContent.vue";
import EditMessageBox from "@/components/EditMessageBox.vue";

export default {
  name: "ContactBox",
  components: {EditMessageBox, MessageContent},
  computed: {
    target() {
      return this.$store.state.user.currentContactTarget
    },
    messages(){
      return this.$store.state.message.currentMessages
    }
  },
  mounted() {
    document.getElementById("msgMain").scrollTop = document.getElementById("msgMain").scrollHeight
  },
  data() {
    return {
      // target: {
      //   title: "21级软件工程一班",
      //   online: true,
      // }
    }
  },
}

</script>

<style scoped lang="less">
.contact-main {
  height: 100vh;
  border-left: rgba(153, 153, 153, 0.2) solid 1px;
  //display: flex;
  //flex-direction: column;
}

.top-right {
  cursor: pointer;
  display: flex;
  justify-content: right;
  gap: 20px;

}

.op {
  font-size: 24px;
  font-weight: bold;
  transition: .3s;

  &:hover {
    color: #1482f0;
    transform: scale(1.1);
  }
}
</style>