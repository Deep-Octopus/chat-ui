<script>
import MessageBubble from "@/components/MessageBubble.vue";

export default {
  name:"MessageContent",
  components: {MessageBubble},
  data(){
    return{
      // messages:[
      //   {
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "我来啦",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "张三",
      //     bias:"right",
      //     content: "你好哇",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "张三",
      //     bias:"right",
      //     content: "消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容\n",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容容消息内容消息内容消息内容消息内容消息内容消息内容\n消息",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容容消息内容消息内容消息内容消息内容消息内容消息内容\n消息",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "张三",
      //     bias:"right",
      //     content: "摘要内容",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容\n消息",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容容消息内容消息内容消息内容消息内容消息内容消息内容\n消息容消息内容消息内容消息内容消息内容消息内容消息内容\n消息内容消息内容消息内容容消息内容消息内容消息内容消息内容消息内容消息内容\n消息",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },{
      //     avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //     name: "敢敢",
      //     bias:"left",
      //     content: "拜拜",
      //     type:"",
      //     dateTime: "2024/01/07",
      //     tags:[
      //       {
      //         display:"success",
      //         value:"管理员",
      //       },{
      //         display:"danger",
      //         value:"龙王",
      //       },
      //     ]
      //   },
      // ]
    }
  },
  computed:{
    messages(){
      return this.$store.state.message.currentMessages
    },
    target(){
      return this.$store.state.user.currentContactTarget
    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<template>
<div id="msgBox">
 <message-bubble :is-group="target.isGroup" v-for="(msg,index) in messages" :message="msg" :key="index"></message-bubble>
</div>
</template>

<style scoped lang="less">

</style>