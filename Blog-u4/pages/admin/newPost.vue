<template>
  <AddOrEditPost role="add" @submit="savePost($event)" />
</template>

<script>
import AddOrEditPost from "../../components/post/AddOrEditPost.vue";
import axios from "axios";
export default {
  components: {
    AddOrEditPost,
  },
  methods: {
    savePost(newpost) {
      axios
        .post(
          "https://nuxtjs-blog-2666-default-rtdb.firebaseio.com/posts.json",
          newpost
        )
        .then((res) => {
          if (res.status === 200) {
            alert("saved!");
          }
        });
    },
  },
};
</script>