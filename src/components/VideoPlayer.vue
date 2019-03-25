<template lang='pug'>
    video(autoplay="autoplay" v-bind:muted="getMuteState" style="width:100%" loop="loop" onended="var v=this;setTimeout(function(){v.play()},300)" ref="video" )
        source(src="//stream.chika.dance/output.webm" type="video/webm")
        source(src="//stream.chika.dance/output.mp4")

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'VideoPlayer',
        computed: {
            ...mapGetters(['getMuteState'])
        },
        mounted: function () {
            this.$nextTick(function () {
                // If autoplay got blocked, start playing the video muted
                if (this.$refs.video.paused) {
                    try {
                        this.$refs.video.muted = true
                        this.$refs.video.play()
                        this.muteState(true)
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
        },
        methods: {
            ...mapActions(['muteState'])
        }
    }
</script>

<style lang="stylus" scoped>
    video
        background black
        object-fit contain
        height 100vh
        width 100vw
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
</style>
