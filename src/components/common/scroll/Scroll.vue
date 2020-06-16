<template>
  <div class="wrepper" ref="wrepper">
    <div class="content">
      <slot></slot>
    </div>
  </div> 
</template>
<script>
import BScroll from 'better-scroll'

export default {
   data() {
      return {
        scroll: null
      }
   },
   props: {
       probeType: {
         type: Number,
         default: 0
       },
       pullUpLoad: {
         type:Boolean,
         default: false
       }
   },
   activated() {
   },
   mounted() {
     this.scroll = new BScroll(this.$refs.wrepper, {
       click: true,
       probeType: this.probeType,
       pullUpLoad: this.pullUpLoad
     })

    //  监听页面滚动
    this.scroll.on('scroll', (position)=>{
      this.$emit('scroll', position)
    })

    // 监听上拉事件
    this.scroll.on('pullingUp', ()=>{
      this.$emit('pullingUp')
    })
   },
   methods: {
     goTop(x, y) {
       this.scroll.scrollTo(x, y, 500)
     }
   }
}
</script>

<style>
</style>