import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoPlayer: {
      muted: undefined,
      controls: false
    }
  },
  getters: {
    getMuteState: (state) => {
      return state.videoPlayer.muted
    },
    checkControls: (state) => {
      return state.videoPlayer.controls
    }
  },
  mutations: {
    changeMuteState (state, commit) {
      state.videoPlayer.muted = commit
    }
  },
  actions: {
    muteState (state, payload) {
      state.commit('changeMuteState', payload)
    }
  }
})
