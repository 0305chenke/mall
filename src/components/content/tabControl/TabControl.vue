<template>
  <div class="tabControl">
    <div v-for="(item, key) in title" :key="key" :class="{active: key === currentIndex}" @click="itemClick(key)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
   data() {
      return {
        currentIndex: 0
      }
   },
   props: {
     title: {
       type: Array,
       default() {
         return []
       }
     }
   },
   activated() {
   },
   methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
   }
}
</script>

<style>
  .tabControl {
    display: flex;
    text-align: center;
    height: 43px;
    line-height: 43px;
    background-color: #fff;
  }
  .tabControl div {
    flex: 1;
  }

  .active {
    color: rgb(236, 89, 89);
  }

  .tabControl span {
    padding: 3px;
  } 

  .active  span {
    border-bottom: 3px solid rgb(236, 89, 89);
  }

</style>