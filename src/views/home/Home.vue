<template>
   <div>
      <nav-bar><slot  class="navbar" slot="center">购物街</slot></nav-bar>
      <home-swiper :banner="banner"/>
      <children-swiper :recommend="recommend"/>
   </div>
</template>
<script>
import  NavBar from '../../components/NavTab'
import HomeSwiper from './HomeSwiper'
import ChildrenSwiper from './childrenSwiper'

import {getHomeData} from '../../network/home'
export default {
   components: {
      NavBar,
      HomeSwiper,
      ChildrenSwiper
   },
   data() {
      return {
         banner: [],
         recommend: []
      }
   },
   activated() {
   },
   created() {
      getHomeData().then(res=>{
         this.banner = res.data.data.banner.list
         console.log(this.banner);
         
         this.recommend = res.data.data.recommend.list
      })
   }
}
</script>

<style>
   .navbar {
      background-color: #FF8E96;
      color: #fff;
   }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .lbImg {
     height: 200px;
     width: 100%;
  }
</style>