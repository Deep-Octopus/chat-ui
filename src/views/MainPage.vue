<template>
    <el-row :gutter="0" class="main">
      <el-col :span="1" class="col" style="border-right: rgba(153,153,153,0.2) solid 1px">
          <!--      侧边栏-->
        <side-bar-box></side-bar-box>
      </el-col>
      <el-col :span="5" class="col">
        <el-container style="max-height: 100vh">
          <!--      消息/好友列表-->
          <el-header style="padding: 3%;border-bottom: rgba(153,153,153,0.2) solid 1px;border-right: rgba(153,153,153,0.2) solid 1px">
            <search-box></search-box>
          </el-header>
          <el-main style="padding: 0 1px">
            <list-message v-for="(it,index) in listMsg" :message="it" :key="index"></list-message>
          </el-main>
        </el-container>
      </el-col>
      <el-col :span="18" class="col">
          <!--      聊天窗口-->
          <contact-box></contact-box>
      </el-col>
    </el-row>
</template>
<script>

import ContactBox from "@/components/ContactBox.vue";
import SearchBox from "@/components/SearchBox.vue";
import ListMessage from "@/components/ListMessage.vue";
import SideBarBox from "@/components/SideBarBox.vue";

export default {
  name: "MainPage",
  components: {SideBarBox, ListMessage, SearchBox, ContactBox},
  data() {
    return {
      listMsg:[
        {
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "老王",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 100,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "张三",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 92,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "21级软件工程一班班群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 1,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考研备考群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 55,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "老王",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 100,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "张三",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 92,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "21级软件工程一班班群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 1,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考研备考群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 55,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "老王",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 100,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "张三",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 92,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "21级软件工程一班班群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 1,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考研备考群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 55,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "老王",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 100,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "张三",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 92,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "21级软件工程一班班群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 1,
        },{
          avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title: "考研备考群",
          abstract: "摘要内容",
          dateTime: "2024/01/07",
          numOfUnReadMsg: 55,
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}

.col {
  //border: #1482f0 solid;
  height: 100%;
}
</style>