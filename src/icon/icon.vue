<template>
    <svg class="f-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
    name: 'FingerIcon',
    props: ['name']
}
</script>
<style lang="scss" scoped>
.f-icon {width: 1em; height: 1em; }
</style>
