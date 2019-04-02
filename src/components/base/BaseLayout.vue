<template lang='pug'>
    .ap-layout
        //i-toast
        VideoPlayer
        MuteBox
        main
            slot
</template>

<script>
    import VideoPlayer from '../VideoPlayer'
    import MuteBox from '../MuteBox'
    import IToast from '../iToast'
    export default {
        name: 'BaseLayout',
        components: {
            IToast,
            VideoPlayer,
            MuteBox
        }
    }
</script>

<style lang='stylus' scoped>

    .ap-layout
        background black
        box-sizing: border-box
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        justify-content: flex-start
        align-content: stretch
        align-items: flex-start
        overflow hidden

    main
        box-sizing: border-box
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-content: center
        align-items: center
</style>
