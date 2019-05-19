<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: 'scroll',
        props:{
          probeType:{
            type:Number,
            default:1
          },
          /**
           * 点击列表是否派发click事件
           */
          click:{
            type:Boolean,
            default:true
          },
          /**
           * 列表的数据
           */
          data:{
            type:Array,
            default:null
          },
          /**
           * 是否派发滚动事件
           */
          listenScroll: {
            type: Boolean,
            default: false
          },
          /**
           * 是否派发滚动到底部的事件，用于上拉加载
           */
          pullup: {
            type: Boolean,
            default: false
          },
          /**
           * 当数据更新后，刷新scroll的延时。
           */
          refreshDelay:{
            type:Number,
            default:20
          }
        },
       mounted(){
          setTimeout(() => {
            this._initScroll()
          })
       },
      watch:{
         data(){
          setTimeout(() => {
            this.refresh()
          },this.refreshDelay)
        }
      },
       methods:{
        _initScroll(){
          this.$nextTick(() => {
            if(!this.$refs.wrapper){
              return
            }
            // better-scroll初始化
            this.scroll = new BScroll(this.$refs.wrapper,{
              probeType:this.probeType,
              click:this.click
            })
          })
          if(this.listenScroll){
            let _this=this
            this.scroll.on('scroll',(pos)=> {
              _this.$emit('scroll',pos)
            })
          }
          if (this.pullup) {
            this.scroll.on('scrollEnd', () => {
              if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                this.$emit('scrollToEnd')
              }
            })
          }
        },
         enable () {
           // 代理better-scroll的enable方法
           this.scroll && this.scroll.enable()
         },
         disable () {
           // 代理better-scroll的disable方法
           this.scroll && this.scroll.disable()
         },
         refresh () {
           // 代理better-scroll的refresh方法
           this.scroll && this.scroll.refresh()
         },
         scrollTo () {
           // 代理better-scroll的scrollTo方法
           this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
         },
         scrollToElement () {
           // 代理better-scroll的scrllToElement方法
           this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
         }
       },
    }
</script>

<style scoped>

</style>
