<template>
  <div class="goodsListItem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <p>{{goodsItem.title}}</p>
      <span class="price"><i>￥</i>{{goodsItem.price}}</span>
      <span class="cfav"><i class="el-icon-star-on"></i>{{goodsItem.cfav}}</span>
    </a>
  </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   props: {
     goodsItem: {
       type: Object,
       default() {
         return []
       }
     }
   }
}
</script>

<style>
  .goodsListItem {
    width: 48%;
    padding: 1%;
  }
  .goodsListItem img {
    width: 100%;
    border-radius: 5px;
  }
  .price {
    color: rgb(236, 47, 47);
  }

  .cfav {
    margin-left: 20px;
  }

  .goodsListItem p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    font-size: 14px;
  }
</style>