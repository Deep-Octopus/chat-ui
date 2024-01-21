import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import message from "@/store/modules/message";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    message,
  },
  // getters
})
