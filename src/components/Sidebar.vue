<template lang="pug">
    sui-grid.tets
        sui-grid-column(:width="6")
            sui-menu(fluid vertical tabular)
                sui-button(compact
                    icon="pause"
                    label-position="left"
                    content="Pause")
</template>

<script>
    export default {
        name: 'TabularMenuExample',
        data () {
            return {
                items: ['Overview', 'Stats'],
                active: 'Overview'
            }
        },
        methods: {
            isActive (name) {
                return this.active === name
            },
            select (name) {
                this.active = name
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .item
        width:100%
        color rgba(0,0,0,.6)
        background-color: #cacbcd
</style>
