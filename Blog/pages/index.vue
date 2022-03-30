<template>
  <div class="homepost">
    <PostPg />
    <HomeFooter/>
  </div>
</template>

<script>
import PostPg from "./posts/index.vue";
import HomeFooter from '../components/Home/HomeFooter.vue'
export default {
  name: "IndexPage",
  components: {
    PostPg,
    HomeFooter
  },
};
</script>
