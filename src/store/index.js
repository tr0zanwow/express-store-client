import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import router from '../router'

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
      router.push("/")
    },
    setUserData(state,payload){
      state.userData = payload
    },
    setSearchText(state,payload){
      state.searchText = payload
    },
    setAccessData(state,payload){
      state.accessData = payload
    },
    setErrorData(state,payload){
      state.errorData = payload
    }
  },
  actions: {
    
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
