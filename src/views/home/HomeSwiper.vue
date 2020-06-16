<template>
 <div class="block">
      <el-carousel  height="200px">
        <el-carousel-item v-for="(item, key) in banner" :key="key" arrow="always">
          <a :href="item.link">
            <img :src="item.image" alt="" class="lbImg">
          </a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   props: {
     banner: {
       type: Array,
       default() {
         return[]
       }
     }
   },
   activated() {
   }
}
</script>

<style>
  
  .lbImg {
     height: 100%;
     width: 100%;
  }

</style>