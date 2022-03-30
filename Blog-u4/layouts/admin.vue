<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>