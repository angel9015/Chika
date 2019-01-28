<template>
    <main>
        <button v-if="muted" v-on:click="volumeRiser">Unmute</button>
        <video id="dance" src="https://upload.moe/files/kmlktm.mp4" autoplay loop muted></video>
    </main>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: function () {
            return {
                muted: true
            }
        },
        methods: {
            volumeRiser () {
                this.$data.muted = false
                setTimeout(function () {
                    let vid = document.getElementById('dance')
                    console.log('clicked')
                    vid.muted = false
                    vid.volume = 0.2

                    let counter = 0
                    const interval = setInterval(function () {
                        counter++
                        let vid = document.getElementById('dance')
                        // rise volume
                        vid.volume += 0.02
                        console.log('riseup')
                        if (counter === 30) {
                            console.log('unmuted')
                            clearInterval(interval)
                        }
                    }, 100)
                }, 300)
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    video
        width:100%
        min-height:100%
        position absolute
        top:0
        left:0
        z-index 4
    button
        position absolute
        z-index 500
</style>
