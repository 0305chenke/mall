<template>
  <div class="toTop">
     <el-button icon="el-icon-top" circle class="top"></el-button>  
  </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>

<style>
  .top {
    position: fixed;
    right: 8px;
    bottom: 60px;
    z-index: 222;
  }
</style>