<template lang='pug'>
        BaseSection
            MuteBox
</template>

<script>
    import MuteBox from '../components/MuteBox'
    export default {
        name: 'Overview',
        components: { MuteBox }
    }
</script>

<style lang='stylus' scoped>

    .ui-component
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;

    .sidebar-area
        width 238px
        padding 3em

    .ui-overview
        padding: 1em 2em
        width: 100%
        margin 0 auto
        max-width: 1100px
        height: 100vh
</style>
