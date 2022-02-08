<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'FheelTabsBody',
    inject: ['eventBus']
}
</script>
<style lang="scss" scoped>
</style>

