<template>
    <div class="collapseItem">
        <div class="title" @click="toggle" :data-name="name">
            {{title}}
        </div>
        <div class="content" ref="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "FingerCollapseItem",
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
            open:false
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
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
    min-height: 32px; display: flex; align-items: center; padding: 0 8px;
    background: lighten($grey, 8%);
  }
  &:first-child {
    > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
  }
  &:last-child {
    > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
  }
  > .content { padding: 8px; }

}
</style>
