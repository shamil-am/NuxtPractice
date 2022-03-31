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

// vuexContext.commit("setPosts", [
//   {
//     id: 1,
//     title: "Mount Everest",
//     description:
//       "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
//     countries: ["China", "Nepal"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg",
//   },
//   {
//     id: 2,
//     title: "Mont Blanc",
//     description:
//       "Mont Blanc is the highest mountain in the Alps and the highest in Europe west of the Caucasus peaks of Russia and Georgia. It rises 4,808 m above sea level and is ranked 11th in the world in topographic prominence.",
//     countries: ["France", "Italy"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mont-Blanc_from_Planpraz_station.jpg/600px-Mont-Blanc_from_Planpraz_station.jpg",
//   },
//   {
//     id: 3,
//     title: "Mount Kilimanjaro",
//     description:
//       "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi and Shira. It is the highest mountain in Africa and the highest single free-standing mountain in the world: 5,895 metres above sea level and about 4,900 metres above its plateau base.",
//     countries: ["Tanzania"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mont-Blanc_from_Planpraz_station.jpg/600px-Mont-Blanc_from_Planpraz_station.jpg",
//   },
//   {
//     id: 4,
//     title: "Denali",
//     description:
//       "Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet above sea level. With a topographic prominence of 20,156 feet and a topographic isolation of 4,629 miles, Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.",
//     countries: ["Alaska"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/600px-Wonder_Lake_and_Denali.jpg",
//   },
//   {
//     id: 6,
//     title: "Mount Kosciuszko",
//     description:
//       "Mount Kosciuszko is mainland Australia's highest mountain, at 2,228 metres above sea level. It is located on the Main Range of the Snowy Mountains in Kosciuszko National Park, part of the Australian Alps National Parks and Reserves in New South Wales.",
//     countries: ["Australia"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sunrise_views_from_the_summit_of_Mount_Kosciuszko%2C_Kosciuszko_National_Park_56.jpg/600px-Sunrise_views_from_the_summit_of_Mount_Kosciuszko%2C_Kosciuszko_National_Park_56.jpg",
//   },
//   {
//     id: 5,
//     title: "Aconcagua",
//     description:
//       "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in the Americas and the highest outside of Asia, being the highest in both the Southern and Western Hemispheres with a summit elevation of 6,960.8 metres.",
//     countries: ["Argentina"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aconcagua2016.jpg/600px-Aconcagua2016.jpg",
//   },
//   {
//     id: 7,
//     title: "Vinson Massif",
//     description:
//       "Vinson Massif is a large mountain massif in Antarctica that is 21 km long and 13 km wide and lies within the Sentinel Range of the Ellsworth Mountains. It overlooks the Ronne Ice Shelf near the base of the Antarctic Peninsula. The massif is located about 1,200 kilometres from the South Pole.",
//     countries: ["Antarctic"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mount_Vinson_from_NW_at_Vinson_Plateau_by_Christian_Stangl_%28flickr%29.jpg/600px-Mount_Vinson_from_NW_at_Vinson_Plateau_by_Christian_Stangl_%28flickr%29.jpg",
//   },
// ]);
