<template>
   <div id="home">
      <nav-bar><slot class="navbar" slot="center">购物街</slot></nav-bar>
      <to-top @click.native="toTop" v-show="isShow"></to-top>
      <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="scroll" :pull-up-load = "true" @pullingUp = "getmore">
         <home-swiper class="home-swiper" :banner="banner"/>
         <children-swiper :recommend="recommend" />
         <hot/>
         <tab-control :title="['流行', '新款', '精选']" class="tabControl" @tabClick="tabClick"/>
         <goods-list :goods="goods[goodsType].list"/>
      </scroll>
   </div>
</template>
<script>
import  NavBar from '../../components/common/navTab/NavTab'
import HomeSwiper from './HomeSwiper'
import ChildrenSwiper from './childrenSwiper'
import Hot from './Hot'
import ToTop from '../../components/content/toTop/ToTop'

import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'

import {getHomeData, getHomeGoods} from '../../network/home'
import Scroll  from "../../components/common/scroll/Scroll";
export default {
   components: {
      NavBar,
      HomeSwiper,
      ChildrenSwiper,
      Hot,
      TabControl,
      GoodsList,
      Scroll,
      ToTop
   },
   data() {
      return {
         banner: [],
         recommend: [],
         goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []}
         },
         goodsType: 'pop',
         isShow: false
      }
   },
   activated() {
   },
   created() {
      this.getHomeData()
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
   },
   methods: {
      // 事件监听
      tabClick(index) {
         if(index === 0) {
            this.goodsType = 'pop'
         } else if(index === 1) {
            this.goodsType = 'new'
         } else {
            this.goodsType = 'sell'
         } 
      },
      toTop() {
         this.$refs.scroll.goTop(0, 0)
      },
      scroll(position) {
         this.isShow = (-position.y) > 800
         
      },
      getmore() {
         this.getHomeGoods(this.goodsType)
         this.$refs.scroll.scroll.finishPullUp()

         // 更新页面  重新计算滑动高度
         this.$refs.scroll.scroll.refresh()
      },
      // 网络请求
      getHomeData() {
         getHomeData().then(res=>{
         this.banner = res.data.data.banner.list
         this.recommend = res.data.data.recommend.list
      })
      },
      getHomeGoods(type) {
         const page = this.goods[type].page + 1
         getHomeGoods(type, page).then(res=> {
            this.goods[type].list.push(...res.data.data.list)
            this.goods[type].page += 1
            // this.$refs.scroll.scroll.refresh()
         })
      }
   }
}
</script>

<style scoped>
   .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #FF8E96;
      color: #fff;
      z-index: 22;
   }
   .home-swiper {
      margin-top: 44px;
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


  .tabControl {
     position: sticky;
     top: 43px;
  }

   #home {
      position: relative;
      height: 100vh;
   }
   .scroll {
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
      /* height: 100%; */
   }
</style>