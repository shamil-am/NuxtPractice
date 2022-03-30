<template>
  <div class="post-list row my-3">
    <Post v-for="post in posts" :key="post.id" :isAdmin="isAdmin" :post="post"/>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post,
  },
  props: {
    isAdmin: Boolean,
    posts: Array,
  },
};
</script>