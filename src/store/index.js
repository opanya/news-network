import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      id: '9',
      name: ''
    }
  },
  mutations: {
    setUID(state, id){
      state.userData.id = id;
      console.log('UserId was set to ' + id);
    },
    setName(state, n){
      state.userData.name = n;
    }
  }
})
