import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileDetect: undefined,
    videoPlayer: {
      muted: undefined,
      controls: false
    }
  },
  getters: {
    getMuteState: (state) => {
      return state.videoPlayer.muted
    },
    getMobileDetect: (state) => {
      return state.mobileDetect
    },
    checkControls: (state) => {
      return state.videoPlayer.controls
    }
  },
  mutations: {
    changeMuteState (state, commit) {
      state.videoPlayer.muted = commit
    },
    changeMobileDetect (state, commit) {
      state.mobileDetect = commit
    }
  },
  actions: {
    muteState (state, payload) {
      state.commit('changeMuteState', payload)
    },
    MobileDetect (state, payload) {
      state.commit('changeMobileDetect', payload)
    }
  }
})
