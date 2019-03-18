<template>
<div class="singer" ref="singer">
  <listview :data="this.singers"></listview>
</div>
</template>

<script>
    import Listview from "../../base/listview";
    import {getSingers} from "../../api/singers";
    import Singer from './../../common/js/singer';

    const pinyin = require('pinyin')
    const HOT_NAME = '热门'
    const HOT_SINGERS = 10
    export default {
        name: 'singer',
      components: {Listview},
      data(){
          return{
            singers:[]
          }
      },
      created(){
        this._getSingers()
      },
      methods:{
          _getSingers(){
            getSingers().then((res) => {
              if(res.data.code === 200) {
                let s = res.data.artists
                s.map((item) => {
                  let py = pinyin(item.name[0],{
                    style:pinyin.STYLE_FIRST_LETTER
                  })
                  item.initial = py[0][0].toUpperCase()
                })
                this.singers = this._normalizeSinger(s)
              }
            })
          },
          _normalizeSinger(list){
              let map={
                hot:{
                  title:HOT_NAME,
                  items:[]
                }
              }
              list.forEach((item,index) => {
                if(index < HOT_SINGERS){
                  map.hot.items.push(new Singer({
                    id:item.id,
                    name:item.name,
                    avatar:item.img1v1Url,
                    aliaName:item.alias.join('/')
                  }))
                }
                const key = item.initial
                if (!map[key]) {
                  map[key] = {
                    title: key,
                    items: []
                  }
                }
                map[key].items.push(new Singer({
                  id: item.id,
                  name: item.name,
                  avatar: item.img1v1Url,
                  aliaName: item.alias[0]
                }))
              })

            let hot = []
            let ret = []
            for (const key in map) {
                 let val = map[key]
                 if (val.title.match(/[A-Z]/)) {
                 ret.push(val)
               } else if (val.title === HOT_NAME) {
                  hot.push(val)
                 }
            }
           ret.sort((a, b) => {
              return a.title.charCodeAt(0) - b.title.charCodeAt(0)
           })
          return hot.concat(ret)
          }
        }
    }
</script>

<style lang="scss" scoped>
.singer{
  height: 100%;
  width: 100%;
  bottom: 0;
}
</style>
