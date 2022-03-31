<template>
    <PostList :posts="fetchedPosts" />
</template>

<script>
import PostList from "../../components/post/PostList.vue";
export default {
  components: {
    PostList,
  },
  data() {
    return {
      // fetchedPosts: [],
    };
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters._getPosts;
    },
  },
};
</script>



