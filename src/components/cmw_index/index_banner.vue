<template>
  <div class="hello">
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
  name: 'index_banner',
  props: {
  
  },
   data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.hello{
  width: 100%;
  height: 200px;
}
</style>
