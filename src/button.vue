<template>
    <button :class="{[`icon-${iconPosition}`]: true}" class="g-button"
            @click="$emit('click')">
        <f-icon v-if="icon && !loading" :name="icon" class="icon"/>
        <f-icon v-if="loading" class="loading icon" name="loading"></f-icon>
        <div class="g-button-content">
            <slot/>
        </div>
    </button>
</template>

<script>
import fIcon from './icon'

export default {
    name: "fingerButton",
    components: {
        'f-icon': fIcon
    },
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_var.scss"; // webpack 配置 scss 根目录
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .g-button-content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
  }

  &.icon-right {
    > .g-button-content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }

  .loading {
    @include spin;
  }
}
</style>
