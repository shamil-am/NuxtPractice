import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const response = await axios.get(
          "https://nuxtjs-blog-2666-default-rtdb.firebaseio.com/posts.json"
        );
        if (response.statusText !== "OK") return;
        let dataObjFromDb = response.data;
        let postsArr = [];
        for (let key in dataObjFromDb) {
          postsArr.push({ id: key, ...dataObjFromDb[key] });
        }
        vuexContext.commit("setPosts", postsArr);
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      _getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;

