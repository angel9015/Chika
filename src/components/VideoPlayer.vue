<template lang='pug'>
    video(controls="controls"  autoplay="autoplay" poster="../assets/Kaguya-Sama_Wa_Kokurasetai_-_03_ED.jpg" style="width:100%" title="Kaguya-Sama Wa Kokurasetai - 03 ED" loop="loop" onended="var v=this;setTimeout(function(){v.play()},300)")
        source(src="../assets/Kaguya-Sama_Wa_Kokurasetai_-_03_ED.webm" type="video/webm")
        source(src="../assets/Kaguya-Sama_Wa_Kokurasetai_-_03_ED.mp4")
        img(alt="Kaguya-Sama Wa Kokurasetai - 03 ED" src="../assets/Kaguya-Sama_Wa_Kokurasetai_-_03_ED.jpg" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser")

</template>

<script>
    export default {
        name: 'VideoPlayer'
    }
</script>

<style lang="stylus" scoped>
    video
        background black
        object-fit cover
        height 100vh
        width 100vw
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
</style>
