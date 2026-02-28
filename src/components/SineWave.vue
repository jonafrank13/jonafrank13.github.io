<template>
  <canvas ref="waves"></canvas>
</template>

<script>
/**
 * Due credit to https://github.com/sdras/three-vue-pattern
 * @sdras
 * https://sarah.dev
 * original author : Sarah Drasner
 * modified by : Jona Frank
 */
import { defineComponent, ref, onMounted } from 'vue'
import * as SineWaves from 'sine-waves'

export default defineComponent({
  name: 'SineWave',

  setup () {
    const waves = ref(null)

    function initWaves () {
      new SineWaves({
        el: waves.value,
        speed: 20,
        ease: 'SineInOut',
        wavesWidth: '50%',
        waves: [
          { timeModifier: 3, lineWidth: 2, amplitude: -75, wavelength: 25 },
          { timeModifier: 2, lineWidth: 2, amplitude: -50, wavelength: 30 },
          { timeModifier: 1, lineWidth: 2, amplitude: -30, wavelength: 30 },
          { timeModifier: 3, lineWidth: 1, amplitude: 40, wavelength: 40 },
          { timeModifier: 0.5, lineWidth: 1, amplitude: -60, wavelength: 60 },
          { timeModifier: 1.3, lineWidth: 1, amplitude: -40, wavelength: 40 }
        ],
        resizeEvent: function () {
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
          gradient.addColorStop(0, 'rgba(25, 255, 255, 0)')
          gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)')
          gradient.addColorStop(1, 'rgba(255, 255, 25, 0')
          var index = -1
          var length = this.waves.length
          while (++index < length) {
            this.waves[index].strokeStyle = gradient
          }
          index = undefined
          length = undefined
          gradient = undefined
        }
      })
    }

    onMounted(() => {
      initWaves()
    })

    return { waves }
  }
})
</script>

<style lang="scss" scoped>
canvas {
  height: 175px;
  margin: auto;
  display: block;
}
</style>
