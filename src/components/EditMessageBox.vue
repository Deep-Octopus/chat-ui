<script>
export default {
  name: "EditMessageBox",
  data() {
    return {
      message:"",
    }
  },
  methods:{
    sendMsg(){

    },
  }
}
</script>

<template>
  <div class="emb-main">
    <div class="emb-top">
      <div class="emb-op-box">
        <el-tooltip content="表情">
          <div class="iconfont emb-op">&#xe601;</div>
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
      <el-input type="textarea" :autosize="{minRows:2}" v-model="message" placeholder="输入消息..." style="flex: 1;white-space: pre-wrap;max-height: 100%; overflow-y: auto;"></el-input>
    </div>
    <div class="emb-footer">
      <el-dropdown split-button type="primary" @click="sendMsg" trigger="click">
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
.emb-top{
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
.emb-content{
  height: 70%;
  max-height: 75%;
  display: flex;
  margin: 10px;
  &/deep/.el-textarea__inner{
    border: none;
  }
}
.emb-footer{
  display: flex;
  justify-content: right;
}

</style>