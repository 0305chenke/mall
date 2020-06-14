<template>
  <div class="recommend">
    <ul>
      <li v-for="(item, index) in recommend" :key="index" class="li">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   props: {
     recommend: {
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
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #aaa8a8;;
  }
 .li {
   flex: 1;
   padding: 10px;
   border-bottom: 8px solid rgb(228, 226, 226);
 }
  .li img {
    width: 100%;
  }
</style>