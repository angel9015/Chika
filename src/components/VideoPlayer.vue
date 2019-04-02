<template lang='pug'>
    video(ref="video" autoplay="autoplay" loop="loop" v-bind:muted="getMuteState" @onended="endedVideo"    @canplaythrough="setPlayable"    @getPlayable="playVideo"    @ontimeupdate="progressVideo"
    v-bind:controls='getMobileDetect')
        source(src="//stream.chika.dance/output.webm" type="video/webm" )
        source(src="//stream.chika.dance/output.mp4")

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'VideoPlayer',
        data: function () {
            return {
                video: {}
            }
        },
        computed: {
            ...mapGetters(['getMuteState', 'getPlayable', 'getMobileDetect'])
        },
        mounted: function () {
            this.$nextTick(function () {
                // Bind the video to data
                this.video = this.$refs.video
                this.$ga.event('video', 'mounted')
            })
        },
        methods: {
            progressVideo: function (ab) {
                console.log('hi')
                console.log(ab)
            },
            playVideo: function () {
                this.$refs.video.play()
            },
            endedVideo: function () {
                this.$ga.event('video', 'ended')

                // loop
                setTimeout(function () {
                    this.playVideo()
                }, 300)
            },
            setPlayable: function () {
                this.playable(true)
            },
            ...mapActions(['muteState', 'playable'])
        }
    }
</script>

<style lang="stylus" scoped>
    video
        transition: all 0.6s ease-out
        background black
        object-fit contain
        height 100vh
        width 100vw
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        @media only screen and (max-width: 768px)
            object-fit cover

</style>
