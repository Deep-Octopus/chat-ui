<script>
export default {
  props:{
    isGroup:{
      required: false,
      default: false
    },
    message: {
      required: true,
      default: {
        avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        name: "张三",
        content: "内容",
        type:"",
        dateTime: "2024/01/07",
        tags:[
          {
            display:"success",
            value:"管理员",
          },{
            display:"danger",
            value:"龙王",
          },
        ]
      }
    }
  },
  data(){
    return{
      avaUrl:"",
    }
  }
}
</script>

<template>
<div class="mb-main" :style="`flex-direction: ${message.bias==='left'?'row':'row-reverse'};`">
  <div>
    <el-avatar size="large" :shape="'circle'" :src="message.avatarUrl"></el-avatar>
  </div>
  <div class="mb-info" :style="`align-items: ${message.bias==='left'?'flex-start':'flex-end'};`">
    <div v-if="isGroup" class="name-box" :style="`flex-direction: ${message.bias==='left'?'row':'row-reverse'};`">
      <div>{{message.name}}</div>
      <el-tag v-for="(tag,index) in message.tags" :key="index" :type="tag.display" size="mini" effect="dark" style="margin: 0 5px;">{{tag.value}}</el-tag>
    </div>
    <div class="mb-content" style="text-align: left">{{message.content}}</div>
  </div>
</div>
</template>

<style scoped lang="less">
.mb-main{
  width: 100%;
  display: flex;
  //justify-content: left;
  margin: 10px 0;
}
.mb-content{
  //width: 100%;
  color: white;
  margin: 5px 0;
  background: #1482f0;
  border-radius: 8px;
  padding: 8px;
}
.name-box{
  display: flex;
}
.mb-info{
  width: 80%;
  margin: 3px;
  display: flex;
  flex-direction: column;
}
</style>