<template>
  <AddOrEditPost
    role="edit"
    :postfromprop="loadedPost"
    @submit="updatePost($event)"
  />
</template>

<script>
import AddOrEditPost from "../../../components/post/AddOrEditPost.vue";
import axios from "axios";
export default {
  components: {
    AddOrEditPost,
  },
  async asyncData(context) {
    const response = await axios.get(
      `https://nuxtjs-blog-2666-default-rtdb.firebaseio.com/posts/${context.params.id}.json`
    );
    if (response.statusText !== "OK") return;
    return {
      loadedPost: response.data,
    };
  },
  methods: {
    async updatePost(updatedPost) {
      const response = await axios.put(
        `https://nuxtjs-blog-2666-default-rtdb.firebaseio.com/posts/${this.$route.params.id}.json`,
        updatedPost
      );
      if (response.statusText !== "OK") return;
      this.$router.push("/");
    },
  },
};
</script>