<template  lang="pug">
    .box.up-4
        h1 This experience is best enjoyed with sound
        p Closing this box will unmute the video
</template>

<script>
    export default {
        name: 'MuteBox'
    }
</script>

<style lang="stylus" scoped>
    .box
        position absolute
        top 0
        background-color: #1e2430
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
</style>
