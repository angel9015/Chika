<template lang='pug'>
    #app
        BaseLayout
            router-view
</template>

<script>
    import BaseLayout from './components/base/BaseLayout'
    export default {
        components: {
            BaseLayout
        },
        mounted () {
            console.info('App version ' + this.$store.getters.appVersion)
        }
    }
</script>

<style lang='stylus'>
    html
        height 100%
        box-sizing border-box
    *
        margin 0
        padding 0

    * *:before *:after
        box-sizing border-box

    body,html,#app
        min-height 100%
/*
    @import url('https://fonts.googleapis.com/css?family=Raleway');

    body {
        font-family: 'Raleway', sans-serif;
    }
*/
</style>
