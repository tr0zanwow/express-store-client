import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    searchText:'',
    accessData:[],
    errorData:[],
    userData: []
  },
  getters:{

  },
  mutations: {
    setisAuthenticated(state,payload){
      state.isAuthenticated = payload
    },
    setUserData(state,payload){
      state.userData = payload
    },
    setSearchText(state,payload){
      state.isAuthenticated = payload
    },
    setAccessData(state,payload){
      state.userData = payload
    },
    setErrorData(state,payload){
      state.userData = payload
    }
  },
  actions: {
    
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
