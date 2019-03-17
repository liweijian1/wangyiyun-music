import * as types from './mutations-type'
const mutations={
  [types.SET_MUSIC_LIST](state,musicList){
    state.musicList = musicList
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
}

export default mutations
