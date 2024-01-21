<script>
export default {
  props: {
    message: {
      required: true,
      default: {
        avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        title: "这里是名称",
        abstract: "摘要内容",
        dateTime: "2024/01/07",
        numOfUnReadMsg: 100,
      }
    }
  },
  data() {
    return {
      avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "这里是名称",
      abstract: "摘要内容",
      dateTime: "2024/01/07",
      numOfUnReadMsg: 100,
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'stick':
          this.stickAction();
          break;
        case 'unread':
          this.unreadAction();
          break;
        case 'delete':
          this.deleteAction();
          break;
        default:
          break;
      }
    },
    stickAction() {
      // 处理置顶逻辑
      console.log('执行置顶操作');
    },
    unreadAction() {
      // 处理标为未读逻辑
      console.log('执行标为未读操作');
    },
    deleteAction() {
      // 处理删除逻辑
      console.log('执行删除操作');
    },
  }
}
</script>

<template>
  <el-dropdown @command="handleCommand" style="width: 100%">
    <el-row :gutter="2" class="l-main">
      <el-col :span="4">
        <el-avatar size="large" :src=avatarUrl class="ava"></el-avatar>
      </el-col>
      <el-col :span="14" style="text-align: left">
        <h4>{{ message.name }}</h4>
        <p>{{ message.abstract }}</p>
      </el-col>
      <el-col :span="4" style="text-align: right">
        <p>{{ message.dateTime }}</p>
        <el-badge v-if="message.numOfUnReadMsg>0" :value="message.numOfUnReadMsg" :max="99" class="item"></el-badge>
      </el-col>
    </el-row>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="stick">置顶</el-dropdown-item>
      <el-dropdown-item command="unread">标为未读</el-dropdown-item>
      <el-dropdown-item command="delete">删除</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

</template>

<style scoped lang="less">
* {
  cursor: pointer;
}

.l-main {
  //border: #999999 solid;
  margin-top: 5px;
  padding: 10px 5px;

  &:hover {
    background: rgba(153, 153, 153, 0.2);
  }
}

p {
  font-size: 12px;
  margin: 4px 0;
}

.ava {
  transition: transform 1s;

  &:hover {
    animation: ava-rotate 0.75s linear infinite;
  }
}

@keyframes ava-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>