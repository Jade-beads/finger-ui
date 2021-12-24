<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'

const eventBus = new Vue()
export default {
    name: "FingerCollapse",
    props: {
        selected: {
            type: Number | String | Array,
            required: true
        },
        single: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    provide() {
        return {
            eventBus: eventBus,
            single: this.single
        }
    },
    mounted() {
        eventBus.$emit('update:selected',this.selected)
        eventBus.$on('addUpdate:selected', (name) => {
            if (typeof this.selected === 'number' || typeof this.selected === 'string') {
                // 必然是单选 single没用
                this.$emit('update:selected', name)
                this.$emit('change',name)
            }else {
                // 有可能单选 有可能多选
                if (this.single) {
                    let copy = []
                    this.$emit('update:selected', copy)
                    this.$emit('change',copy)
                }else {
                    let copy = JSON.parse(JSON.stringify(this.selected))
                    const index = copy.findIndex(v => v == name)
                    if (index !== -1) {
                        copy.splice(index,1)
                    }
                    this.$emit('update:selected', copy)
                    this.$emit('change',copy)
                }
            }
            this.$nextTick(() => {
                eventBus.$emit('update:selected',this.selected)
            })
        })
        eventBus.$on('removeUpdate:selected',(name) => {
            if (typeof this.selected === 'number' || typeof this.selected === 'string') {
                // 必然是单选 single没用
                this.$emit('update:selected', name)
                this.$emit('change',name)
            }else {
                if (this.single) {
                    let copy = [name]
                    this.$emit('update:selected', copy)
                    this.$emit('change',copy)
                }else {
                    let copy = JSON.parse(JSON.stringify(this.selected))
                    const index = copy.findIndex(v => v == name)
                    if (index === -1) {
                        copy.push(name)
                    }
                    this.$emit('update:selected', copy)
                    this.$emit('change',copy)
                }
            }
            this.$nextTick(() => {
                eventBus.$emit('update:selected',this.selected)
            })
        })
        // eventBus.$on('update:selected', (name) => {
        //     this.$emit('update:selected', name)
        //     // console.log(name)
        // })
    }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
