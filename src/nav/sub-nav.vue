<template>
    <div class="f-sub-nav" :class="{active, vertical}" v-click-outside="close">
        <span class="f-sub-nav-label" @click="onClick">
            <slot name="title"></slot>
            <span class="f-sub-nav-icon" :class="{open, vertical}">
                <f-icon name="right"></f-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition
                @enter="enter"
                @leave="leave"
                @after-leave="afterLeave"
                @after-enter="afterEnter"
            >
                <div class="f-sub-nav-popover" v-show="open" :class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="f-sub-nav-popover" v-show="open">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
import ClickOutside from '../click-outside'
import FIcon from '../icon/icon.vue'
export default {
    components: { FIcon },
    directives: { ClickOutside },
    name: "FingerSubNav",
    inject: ['root', 'vertical'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            open: false,
        }
    },
    computed: {
        active () {
            return this.root.namePath.indexOf(this.name) >= 0 ? true : false
        }
    },
    methods: {
        enter (el, done) {
            let { height } = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterEnter (el) {
            el.style.height = 'auto'
        },
        leave: function (el, done) {
            let { height } = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterLeave: function (el) {
            el.style.height = 'auto'
        },
        onClick () {
            this.open = !this.open
        },
        close () {
            this.open = false
        },
        updateNamePath () {
            this.root.namePath.unshift(this.name)
            if (this.$parent.updateNamePath) {
                this.$parent.updateNamePath()
            } else {
                // this.root.namePath = []
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/_var.scss';
.f-sub-nav {
    position: relative;
    &:not(.vertical) {
        &.active {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $blue;
                width: 100%;
            }
        }
    }
    &-label {
        padding: 10px 20px;
        display: block;
    }
    &-icon {
        display: none;
    }
    &-popover {
        transition: height 250ms;
        background: white;
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 4px;
        white-space: nowrap;
        box-shadow: 0 0 3px fade_out(black, 0.8);
        border-radius: $border-radius;
        font-size: $font-size;
        color: $light-color;
        min-width: 8em;
        z-index: 9;
        &.vertical {
            position: static;
            border-radius: 0;
            border: none;
            box-shadow: none;
            overflow: hidden;
        }
    }
}
.f-sub-nav .f-sub-nav {
    &.active {
        &::after {
            display: none;
        }
    }
    .f-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
    .f-sub-nav-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .f-sub-nav-icon {
        transition: transform 250ms;
        display: inline-flex;
        margin-left: 1em;
        svg {
            fill: $light-color;
        }
        &.vertical {
            transform: rotate(90deg);
            &.open {
                transform: rotate(270deg);
            }
        }
        &.open {
            transform: rotate(180deg);
        }
    }
}
</style>