<template>
  <div class="col-12 col-md-6 col-lg-3 mb-3">
    <div class="card">
      <img :src="post.image" class="card-img-top" :alt="post.title" />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.description }}
        </p>
        <div class="admin-actions" v-if="isAdmin">
          <a href="#" class="btn btn-secondary">Edit</a>
          <a href="#" class="btn btn-danger">X</a>
        </div>
        <a href="#" class="btn btn-primary" v-else @click.prevent="$router.push(`/posts/${post.id}`)">Preview</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
    },
    post: Object,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid rebeccapurple;
}
.card img {
  height: 200px ;
}
.card .card-text {
  height: 5rem;
  overflow-y: scroll;
}
</style>