import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileDetect: undefined,
    videoPlayer: {
      muted: true,
      controls: false,
      playable: undefined
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
    },
    getPlayable: (state) => {
      return state.videoPlayer.playable
    }
  },
  mutations: {
    changeMuteState (state, commit) {
      state.videoPlayer.muted = commit
    },
    changeMobileDetect (state, commit) {
      state.mobileDetect = commit
    },
    changePlayable (state, commit) {
      state.videoPlayer.playable = commit
    }
  },
  actions: {
    muteState (state, payload) {
      state.commit('changeMuteState', payload)
    },
    playable (state, payload) {
      state.commit('changePlayable', payload)
    },
    MobileDetect (state, payload) {
      state.commit('changeMobileDetect', payload)
    }
  }
})
