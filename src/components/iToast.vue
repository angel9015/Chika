<template lang='pug'>
    .container
        .i-toast(@mouseover="hover = 'beat'" @mouseleave="hover = ''")
            sui-button(primary basic floated="right" v-bind:class="{ mini: !getMuteState }").button-m
                md-information-circle-outline-icon(w="16" h="16" v-bind:animate="hover" root-class='icon' v-bind:class="{ dismissed: !getMuteState }").icon-m
                p(v-if="getMuteState") About
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import MdInformationCircleOutlineIcon from 'vue-ionicons/dist/md-information-circle-outline'
    import MdInformationCircleIcon from 'vue-ionicons/dist/md-information-circle'
    export default {
        name: 'iToast',
        data () {
            return {
                hover: undefined
            }
        },
        computed: {
            ...mapGetters(['getMuteState', 'getMobileDetect'])
        },
        components: { MdInformationCircleIcon, MdInformationCircleOutlineIcon }
    }
</script>

<style lang="stylus" scoped>
    .dismissed
        margin 0!important
    .i-toast
        display: block
        position fixed
        top 0
        right 0
        padding 1em
        z-index 2000

    .icon-m
        padding 0.1em
        transform scale(1)
        transition all 0.6s ease-out
    .button-m:hover
        .icon-m
            font-weight bold
            transform scale(1.2)
    .button-m
        transition all 0.4s ease-out
        margin .5em!important
        p
            float right
    .icon
        pointer-events: none
</style>
