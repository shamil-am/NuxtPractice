<template>
  <PostDetail :singlePost="singlePost"/>
</template>

<script>
import PostDetail from "../../../components/post/PostDetail.vue";
export default {
  components: {
    PostDetail,
  },

  asyncData(context, callback) {
    // paramsi alirig deye burda fetch ede bilerik sonra callback.
    // console.log(context.params.id);
    callback(null, {
      singlePost: {
        id: context.params.id,
        title: "Demo Mount",
        description: "lorem lorem lorem ",
        countries: ["China", "Nepal"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg",
      },
    });
  },
};
</script>