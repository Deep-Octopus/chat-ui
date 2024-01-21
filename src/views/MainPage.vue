<template>
  <el-row :gutter="0" class="main">
    <el-col :span="1" class="col" style="border-right: rgba(153,153,153,0.2) solid 1px">
      <!--      侧边栏-->
      <side-bar-box></side-bar-box>
    </el-col>
    <el-col :span="5" class="col">
      <el-container style="max-height: 100vh">
        <!--      消息/好友列表-->
        <el-header
            style="padding: 3%;border-bottom: rgba(153,153,153,0.2) solid 1px;border-right: rgba(153,153,153,0.2) solid 1px">
          <search-box></search-box>
        </el-header>
        <el-main style="padding: 0 1px">
          <list-message v-for="(it,index) in listMsg" :message="it" :key="index" @click.native="contactWith(it)"></list-message>
        </el-main>
      </el-container>
    </el-col>
    <el-col :span="18" class="col" style="height: 100vh">
      <el-empty v-if="!$store.state.user.onContact" style="height:100% " description=" "></el-empty>
      <!--      聊天窗口-->
      <contact-box v-else></contact-box>
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
      // listMsg: [
      //   {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "老王",
      //     abstract: "摘要内容",
      //     dateTime: "2024/01/07",
      //     numOfUnReadMsg: 100,
      //   }, {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "张三",
      //     abstract: "摘要内容",
      //     dateTime: "2024/01/07",
      //     numOfUnReadMsg: 92,
      //   }, {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "21级软件工程一班班群",
      //     isGroup:true,
      //     num:88,
      //     abstract: "摘要内容",
      //     dateTime: "2024/01/07",
      //     numOfUnReadMsg: 1,
      //   }, {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "考研备考群",
      //     isGroup:true,
      //     num:88,
      //     abstract: "摘要内容",
      //     dateTime: "2024/01/07",
      //     numOfUnReadMsg: 55,
      //   }, {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "老王",
      //     abstract: "摘要内容",
      //     dateTime: "2024/01/07",
      //     numOfUnReadMsg: 100,
      //   },]
    }
  },
  computed:{
    listMsg(){
      return this.$store.state.user.listMessage
    },
    userinfo(){
      return this.$store.state.user.user
    },
    target(){
      return this.$store.state.user.currentContactTarget
    },
    websocket(){
      return this.$store.state.user.websocket
    },
    reconnectInterval(){
      return this.$store.state.user.reconnectInterval
    }, heartbeatInterval(){
      return this.$store.state.user.heartbeatInterval
    }

  },
  created() {
    this.$store.dispatch("user/getUser", {router: this.$router,callback: this.setupWebSocket})
    this.getListMessage()
  },
  methods: {
    setupWebSocket() {
      console.log(this.userinfo,"user")
      this.$store.state.user.websocket = new WebSocket("ws://localhost:8081/message/sendUserMsg?userId="+this.userinfo.ID+"&Authorization=Bearer "+window.localStorage.getItem("jwtToken")+"&Username="+this.userinfo.username); // 创建WebSocket连接
      this.websocket.onopen = this.onWebSocketOpen; // WebSocket连接打开时的处理函数
      this.websocket.onmessage = this.onWebSocketMessage; // 收到WebSocket消息时的处理函数
      this.websocket.onclose = this.onWebSocketClose; // WebSocket连接关闭时的处理函数
    },
    closeWebSocket() {
      if (this.websocket) {
        this.websocket.close(); // 关闭WebSocket连接
      }
    },
    /**
     *  WebSocket连接打开后，启动心跳检测
     */
    onWebSocketOpen() {
      console.log("WebSocket connection is open");
      this.startHeartbeat();
      // 发送初始化消息
      const initMessage = {
        type: "sub",
        topic: "/aa/bb/cc/d",
        parameter: {},
        id: "bb",
      };
      this.$store.dispatch("user/sendMessage",JSON.stringify(initMessage));
    },
    // 处理从服务器接收的消息
    onWebSocketMessage(event) {
      if (event.data) {
        // const message = event.data;
        const message = JSON.parse(event.data);
        if (this.target!=null && message.fromId == this.target.ID){
          // 消息放到当前窗口
          this.$store.dispatch("message/addNewMessage",{
            message:{...message},
            target:{...this.target},
          }).then(()=>{
            this.$store.dispatch("user/updateListMessage",{
              message:{...message}
            })
            return Promise.resolve()
          })

        }else {
          this.$store.dispatch("user/updateListMessage",{
            message:{...message}
          })
        }

      }
    },
    onWebSocketClose() {
      console.log("WebSocket connection is closed");
      this.stopHeartbeat(); // WebSocket连接关闭时，停止心跳检测
      setTimeout(this.setupWebSocket, this.reconnectInterval); // 在一定时间后重连WebSocket
    },
    // sendMessage(message) {
    //   if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
    //     let msg = {
    //       fromId: this.userinfo.ID, // 发送者
    //       TargetId:this.target.ID, // 接收者
    //       Type: this.target.isGroup?2:1, // 发送类型  群聊、(广播)、私聊
    //       Media:1,// 消息类型  文字1、图片2、音频3
    //       Content:message, // 消息内容
    //       Pic:"",
    //       Url:"",
    //       Desc:"",
    //       Amount:0// 其他数字统计
    //     }
    //     this.websocket.send(JSON.stringify(msg)); // 发送消息到WebSocket服务器
    //     this.message = ''
    //   }
    // },
    startHeartbeat() {
      this.heartbeatInterval = setInterval(() => {
        if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
          this.websocket.send(JSON.stringify({content:"ping"})); // 发送心跳消息
        }
      }, 10000); // 每10秒发送一次心跳
    },
    stopHeartbeat() {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval); // 停止心跳检测定时器
      }
    },
    getFriendList(){
      this.$store.dispatch("user/getFriends")
    },
    getGroupList(){
      this.$store.dispatch("user/getGroups")
    },
    getListMessage(){
      this.$store.dispatch("user/getListMessage")
    },
    contactWith(target){
      this.$store.state.user.onContact = true
      this.$store.state.user.currentContactTarget = {...target}
      this.$store.state.message.currentMessages = []
      this.$store.dispatch("user/getListMessage")
      this.getMessages(target)
    },
    getMessages(target){
      this.$store.dispatch("message/getMessages",{
        reqData:{
          ownerId: this.$store.state.user.user.ID,
          targetId: target.ID,
          type: target.isGroup?2:1
        },
        target:target
      })
    }
  },
  beforeDestroy() {
    this.closeWebSocket(); // 在组件销毁前关闭WebSocket连接
  },

  mounted() {
    // this.setupWebSocket(); // 创建WebSocket连接
  },

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