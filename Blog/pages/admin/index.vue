<template>
  <div class="row">
    <div
      class="
        col-12 col-md-2
        offset-md-5
        admin-header
        d-flex
        justify-content-center
        flex-column
        my-3
      "
    >
      <nuxt-link tag="a" to="admin/new-post" class="btn btn-secondary"
        >Add new post</nuxt-link
      >
    </div>
    <PostList :isAdmin="isAdmin" />
  </div>
</template>

<script>
import PostList from "../../components/post/PostList.vue";
export default {
  layout: "admin",
  components: {
    PostList,
  },
  data() {
    return {
      isAdmin: true,
    };
  },
};
</script>