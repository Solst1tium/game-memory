import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  pokemones: [],
  },
  mutations: {
    GET_POKEMON(state, poke) {
      state.pokemones.push(poke)
      state.pokemones.push(poke)
    },
    CLEAN_OBJECT(state) {
      state.pokemones = []
    },
  },

  actions: {
    getPokes({commit}){
      commit('CLEAN_OBJECT')
      for (var i = 1; i <= 6; i++){
        axios.get('https://pokeapi.co/api/v2/pokemon/' + i).then ((response) => {
          commit('GET_POKEMON', response.data)
        })
      }   
    },   
  }    
})
