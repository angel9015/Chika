<template lang='pug'>
    .ap-layout
        keep-alive
            Sidebar
        VideoPlayer
        main
            slot
</template>

<script>
    import Sidebar from '../Sidebar'
    import VideoPlayer from '../VideoPlayer'
    export default {
        name: 'BaseLayout',
        components: {
            VideoPlayer,
            Sidebar
        }
    }
</script>

<style lang='stylus' scoped>

    .ap-layout
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
