<template>
  <div class="goods">
     <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>
<script>
import  GoodsListItem from './GoodsListItem'

export default {
    components: {
       GoodsListItem
   },
   data() {
      return {
      }
   },
   props: {
      goods: {
         type: Array,
         default() {
            return []
         }
      }
   },
   activated() {
   }
}
</script>

<style>
   .goods {
      display: flex;
      flex-wrap: wrap;
   }
</style>