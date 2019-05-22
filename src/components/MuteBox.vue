<template  lang="pug">
    sui-modal(v-bind:open="getMuteState" basic=true aligned="top" animation="fly down" size="standard")
        .modal
            sui-container(text).box
                h2(is="sui-header") This experience is best enjoyed with sound
                sui-modal-description.desc(v-if='!getMobileDetect')
                    p Closing this box will unmute the video
                sui-button(positive basic floated="right" v-on:click.native="unmute" class="modal-action" @mouseover="hover = 'shake'" @mouseleave="hover = ''")
                    md-volume-high-icon(v-if="hover || !getMobileDetect" w="16" h="16").icon
                    md-volume-mute-icon(v-if="!hover && getMobileDetect" w="16" h="16" animate="shake").icon
                    p Unmute
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import MdVolumeHighIcon from 'vue-ionicons/dist/md-volume-high'
    import MdVolumeMuteIcon from 'vue-ionicons/dist/md-volume-mute'
    export default {
        name: 'MuteBox',
        components: { MdVolumeMuteIcon, MdVolumeHighIcon },
        data () {
            return {
                hover: undefined
            }
        },
        computed: {
            ...mapGetters(['getMuteState', 'getMobileDetect'])
        },
        mounted: function () {
            this.$nextTick(function () {
                const Md = require('mobile-detect')
                this.MobileDetect(new Md(navigator.userAgent).mobile())
            })
        },
        methods: {
            unmute: function () {
                if (this.muteState) {
                    this.$ga.event('video', 'unmuted')
                    this.muteState(false)
                }
            },
            ...mapActions(['muteState', 'MobileDetect'])
        }
    }
</script>

<style lang="stylus" scoped>
    .true
        display false
    .false
        display block
    .box
        padding 2em 0
        color rgba(0,0,0,.6)
        transition: color 0.4s ease-out
        h2
            color rgba(0,0,0,.6)
        //fixes weird displacement of the button
        @media only screen and (max-width: 991px) and (min-width: 768px)
            width: auto!important
        //mobile swag
        @media only screen and (max-width: 768px)
            color rgba(255,255,255,.6)
            h2
                color rgba(255,255,255,.6)
                padding-bottom 1em
            .desc
                display none;
    .modal
        background: #cacbcd
        padding 2em
        transition background 0.6s ease, box-shadow 0.2s ease-in-out
        box-shadow: 0 16px 28px 0 rgba(0,0,0,0.22), 0 25px 55px 0 rgba(0,0,0,0.21)
        @media only screen and (max-width: 768px)
            background: none
            box-shadow: none
    .icon
        padding 0.1em
    .modal-action
        transform: translateY(-16px)
        p
            float right
</style>
