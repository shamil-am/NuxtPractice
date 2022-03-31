<template>
  <AddOrEditPost role="edit" :postfromprop="loadedPost" />
</template>

<script>
import AddOrEditPost from "../../../components/post/AddOrEditPost.vue";
export default {
  components: {
    AddOrEditPost,
  },
  data() {
    return {
      // in a period we pass static
      loadedPost: {
        id: 1,
        title: "Mount Everest",
        description:
          "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
        countries: ["China", "Nepal"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg",
      },
    };
  },
};
</script>