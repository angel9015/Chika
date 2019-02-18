import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    env: process.env,
    muted: undefined
  },
  getters: {
    appBuild: (state) => {
      return state.env.NODE_ENV === 'development' ? 'dev' : state.env.NODE_ENV === 'production' ? 'build' : 'weird'
    },
    appVersion: (state) => {
      return state.env.VERSION
    },
    getMuteState: (state) => {
      return state.muted
    },
  },
  mutations: {
    changeMuteState (state, commit) {
      state.muted = commit
    }
  },
  actions: {
    muteState (state, payload) {
      state.commit('changeMuteState', payload)
    }
  }
})
