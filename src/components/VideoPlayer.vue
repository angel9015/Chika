<template lang='pug'>
    video(autoplay="autoplay" v-bind:muted="getMuteState" style="width:100%" title="Kaguya-Sama Wa Kokurasetai - 03 ED" loop="loop" onended="var v=this;setTimeout(function(){v.play()},300)" ref="video" )
        source(src="http://olympus.elkia.club/output.webm" type="video/webm")
        source(src="http://olympus.elkia.club/output.mp4")
        img(alt="Kaguya-Sama Wa Kokurasetai - 03 ED" src="../assets/Kaguya-Sama_Wa_Kokurasetai_-_03_ED.jpg" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser")

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
