<template lang='pug'>
    .i-toast(@mouseover="hover = 'beat'" @mouseleave="hover = ''")
        md-information-circle-outline-icon(w="30" h="30" v-bind:animate="hover" root-class='icon')
</template>

<script>
    import MdInformationCircleOutlineIcon from 'vue-ionicons/dist/md-information-circle-outline'
    export default {
        name: 'iToast',
        data () {
            return {
                hover: undefined
            }
        },
        components: { MdInformationCircleOutlineIcon }
    }
</script>

<style lang="stylus" scoped>
    .i-toast
        position fixed
        bottom 0
        right 0
        color: rgba(255,255,255,0.75)
        padding 1em
        z-index 2
    .icon
        pointer-events: none
</style>
