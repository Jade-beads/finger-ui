<template>
    <div class="collapseItem" :class="classess">
        <div class="title" @click="toggle" :data-name="name">
            <span class="title-icon" :class="classess">
                <f-icon name="right"></f-icon>
            </span>
            <span class="title-text">{{title}}</span>
        </div>
<!--        <transition @before-enter="beforeEnter"-->
<!--                    @enter="enter"-->
<!--                    @leave="leave" :css="false">-->
        <collapse-transition>
            <div
                    class="collapse-content-wrapper"
                    ref="content"
                    v-show="open"
                    :aria-hidden="!open"
            >
                <div class="collapse-content-context">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import CollapseTransition from "./collapse-transition.js";
export default {
    name: "FingerCollapseItem",
    components: {CollapseTransition},
    props:{
        name:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
    },
    inject:['eventBus','single'],
    data() {
        return{
            open:false,
            currentHeight:0,
        }
    },
    computed:{
      classess () {
          return {['is-open']:this.open}
      }
    },
    mounted() {
        // 判断当前的item 需不需要展开
        this.eventBus.$on('update:selected',(name) => {
            if (typeof name === 'number' || typeof name === 'string') {
                this.open = name === this.name
            }else if (Array.isArray(name)){
                if (this.single) {
                    this.open = name[0] === this.name
                }else {
                    this.open = name.indexOf(this.name) >= 0
                }
            }
        })
    },
    methods:{
        toggle: function () {
            if (this.open) {
                // console.log('true',this.name)
                this.eventBus.$emit('addUpdate:selected', this.name)
            } else {
                // console.log('false',this.name)
                this.eventBus.$emit('removeUpdate:selected',this.name)
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import "../../styles/_var.scss";
$grey: #ddd;
$border-radius: 4px;
//.site-menu-sub {
//  padding: 0px;
//}
//.sub-menu-enter-active,
//.sub-menu-leave-active {
//  transition: all .3s ease;
//  height: 35px; /* 这里70px为menu-one子菜单的高度 */
//}
//.sub-menu-enter,
//.sub-menu-leave-to
//{
//  opacity: 0;
//  height: 0px;
//}
//.slide-down-enter {
//  transition: all 250ms;
//}
//.slide-down-enter-active {
//  animation: slide-down 2s;
//}
//.slide-down-leave-active {
//  animation: slide-down 2s;
//}
//@keyframes slide-down {
//  0% {
//    height: 0;
//  }
//  100% {
//    height: auto;
//  }
//}
//.slide-down-enter-active,.slide-down-leave-active {
//  transition: all 300ms linear;
//}
//.slide-down-enter,.slide-down-leave-to {
//  height: 0;
//}
.collapseItem {
  > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
    min-height: 32px; display: flex; align-items: center; padding: 0 8px;
    background: lighten($grey, 8%);
    > .title-icon {
      fill: $color;
      flex-shrink: 1;
      transition: all 250ms;
      > /deep/ .f-icon {
        transform: scale(.7);
      }
      &.is-open {
        transition: all 250ms;
          transform: rotate(90deg);
      }
    }
    > .title-text {
      font-size: $font-size;
      color: $color;
      cursor: pointer;
    }
  }
  &:first-child {
    > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
  }
  &:last-child {
    > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
  }
  > .collapse-content-wrapper {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
    > .collapse-content-context {
      padding: 5px;
      font-size: $font-size;
    }
  }
}

</style>
