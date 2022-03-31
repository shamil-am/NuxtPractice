<template>
  <PostDetail :singlePost="singlePost" />
</template>

<script>
import PostDetail from "../../../components/post/PostDetail.vue";
import axios from "axios";
export default {
  components: {
    PostDetail,
  },
  async asyncData({ params }) {
    const resp=await axios
      .get(
        `https://nuxtjs-blog-2666-default-rtdb.firebaseio.com/posts/${params.id}.json`
      );
    return {
      singlePost: resp.data
    };
  },
};
</script>