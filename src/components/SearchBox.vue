<script>
export default {
  name:"SearchBox"
}
</script>

<template>
<el-row :gutter="2" class="s-main">
  <el-col :span="18" class="input">
    <el-input prefix-icon="el-icon-search" placeholder="搜索" ></el-input>
  </el-col>
  <el-col :span="4" offset="2" class="btn">
    <el-button type="primary"><i class="el-icon-plus"></i></el-button>
  </el-col>
</el-row>
</template>

<style scoped lang="less">
.s-main{
  //border: #999999 solid;
}
</style>