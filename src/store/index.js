import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import page from "@/store/modules/page";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    page
  },
  // getters
})
