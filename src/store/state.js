import {loadFavorite,loadPlay} from "../common/js/cache";

const state = {
  musicList:{},
  singer:{},
  playing:{},
  fullScreen:{},
  playList:{},
  palyHistory:loadPlay(),
  favoriteList:loadFavorite()
}

export default state
