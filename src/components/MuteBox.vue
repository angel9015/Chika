<template  lang="pug">
    sui-container(text v-if="getMuteState").box.up-4
        h2(is="sui-header") This experience is best enjoyed with sound
        p Closing this box will unmute the video
        sui-button(positive basic content="Close" v-on:click="unmute")
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'MuteBox',
        computed: {
            ...mapGetters(['getMuteState'])
        },
        methods: {
            unmute: function (event) {
                this.muteState(false)
            },
            ...mapActions(['muteState'])
        }
    }
</script>

<style lang="stylus" scoped>
    .box
        position absolute
        top 0
        color rgba(0,0,0,.6)
        background-color: #cacbcd
        padding 3em
        margin: 25px 4vw 0 0
        display: inline-block
        &:last-child
            margin-right: 0
        &:first-child
            margin-left: 2.5vw
        &.up-4
            box-shadow: 0 16px 28px 0 rgba(0,0,0,0.22), 0 25px 55px 0 rgba(0,0,0,0.21)
            transform: translateY(-16px)
        h2
            color rgba(0,0,0,.6)
    .button
        float right
    p
        float left
</style>
