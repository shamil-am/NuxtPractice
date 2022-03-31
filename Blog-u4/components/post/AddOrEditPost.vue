<template>
  <div class="row">
    <div class="col-12 col-md-4 offset-md-4">
      <h1 v-if="role == 'edit'" class="text-center">Edit post</h1>
      <h1 v-else class="text-center">New post</h1>
      <form class="bg bg-warning p-3 mt-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Post Title</label>
          <input class="form-control" v-model="post.title" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Image URL</label>
          <input class="form-control" v-model="post.image" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Description</label>
          <textarea class="form-control" v-model="post.description" />
        </div>
        <button
          type="submit"
          class="btn btn-light"
          @click.prevent="$router.go(-1)"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-dark" @click.prevent="submitPost">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: null,
        title: null,
        image: null,
        description: null,
      },
    };
  },
  props: {
    role: {
      type: String,
      required: true,
    },
    postfromprop: {
      type: Object,
    },
  },
  methods: {
    submitPost() {
      this.$emit("submit", this.post);
    },
  },
  created() {
    this.post = this.postfromprop
      ? this.postfromprop
      : {
          id: new Date().getTime(),
          title: null,
          image: null,
          description: null,
        };
  },
};
</script>