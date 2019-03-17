// vue实现搜索显示历史搜索记录,采用插件-good-storage
import storage from 'good-storage'

const PLAY_KEY = '_play_'
const PLAY_MAX_LENGTH = 200

const FAVORITE_KEY = '_FAVORITE_'
const FAVORITE_MAX_LENGTH = 200

/*插入方法     arr存储的数据  val传入存储的值  compare前后比较的函数  maxlen存入的最大值*/
function insertArray(arr, val, compare, maxLen){
   const index = arr.findIndex(compare)
  if(index === 0){
     return
  }
  if(index>0){
     arr.splice(index,1)
  }
  arr.unshift(val)
  if(maxLen && maxLen<arr.length){
     arr.pop()
  }
}

export function loadPlay(){
  return storage.get(PLAY_KEY, [])
}

export function loadFavorite(){
  return storage.get(FAVORITE_KEY, [])
}
