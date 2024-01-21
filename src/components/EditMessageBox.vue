<script>
import { Picker } from "emoji-mart-vue";
export default {
  name: "EditMessageBox",
  components: { //注册组件，不能全局挂载
    Picker
  },
  data() {
    return {

    }
  },
  computed:{
    message(){
      return this.$store.state.user.message
    },
    userinfo() {
      return this.$store.state.user.user;
    },
    target(){
      return this.$store.state.user.currentContactTarget
    }
  },

  methods: {
    sendMsg(message) {
      let msg = {
        fromId: this.userinfo.ID, // 发送者
        targetId:this.target.ID, // 接收者
        type: this.target.isGroup?2:1, // 发送类型  群聊、(广播)、私聊
        media:1,// 消息类型  文字1、图片2、音频3
        content:message, // 消息内容
        pic:"",
        url:"",
        desc:"",
        amount:0// 其他数字统计
      }
      this.$store.dispatch("user/sendMessage",msg)
      this.$store.dispatch("message/addNewMessage",{
        message:{...msg},
        target:{...this.$store.state.user.currentContactTarget}
      })
      message = ''
    },
    addEmoji(e){
      this.$store.state.user.message += e.native;
    },
  },

}
</script>

<template>
  <div class="emb-main">
    <div class="emb-top">
      <div class="emb-op-box">
        <el-tooltip content="表情">
          <el-popover
              placement="bottom"
              width="200"
              trigger="click">
            <picker :include="['people','Smileys']" :showSearch="false" :showPreview="false" :showCategories="false" @select="addEmoji" />
            <div slot="reference" class="iconfont emb-op">&#xe601;</div>
          </el-popover>
        </el-tooltip>
        <el-tooltip content="截图">
          <div class="iconfont emb-op">&#xe611;</div>
        </el-tooltip>
        <el-tooltip content="文件">
          <div class="iconfont emb-op">&#xe600;</div>
        </el-tooltip>
        <el-tooltip content="图片">
          <div class="iconfont emb-op">&#xe67f;</div>
        </el-tooltip>
        <el-tooltip content="窗口抖动">
          <div class="iconfont emb-op">&#xe8cc;</div>
        </el-tooltip>
        <el-tooltip content="红包">
          <div class="iconfont emb-op">&#xe8b0;</div>
        </el-tooltip>
        <el-tooltip content="语音消息">
          <div class="iconfont emb-op">&#xe8c0;</div>
        </el-tooltip>
      </div>
      <el-tooltip content="聊天记录">
        <div class="iconfont emb-op">&#xe621;</div>
      </el-tooltip>
    </div>
    <div class="emb-content">
<!--      TODO:回车发送消息-->
      <el-input type="textarea" :autosize="{minRows:2}" v-model="$store.state.user.message"
                placeholder="输入消息..."
                style="flex: 1;white-space: pre-wrap;max-height: 100%; overflow-y: auto;"></el-input>
    </div>
    <div class="emb-footer">
      <el-dropdown split-button type="primary" @click="sendMsg(message)" trigger="click" :disabled="message===''">
        发送
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>按 Enter 键发送消息</el-dropdown-item>
          <el-dropdown-item>按 Ctrl + Enter 键发送消息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.emb-main {
  padding: 10px 0;
  height: 100%;
}

.emb-op-box {
  display: flex;
  justify-content: left;
  gap: 20px;
}

.emb-top {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.emb-op {
  transition: .3s;
  font-size: 24px;

  &:hover {
    color: rgb(0, 144, 255);
  }
}

.emb-content {
  height: 60%;
  max-height: 60%;
  display: flex;
  margin: 10px;

  & /deep/ .el-textarea__inner {
    border: none;
  }
}

.emb-footer {
  display: flex;
  justify-content: right;
}
.emoji-mart[data-v-7bc71df8] {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 420px;
  color: #ffffff !important;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: #fff;
}
</style>