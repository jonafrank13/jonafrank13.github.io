<template>
  <div class="custom-cursor">
    <div
      class="custom-cursor__circle"
      :style="circleStyle"
      ref="customCursorCircle"
    ></div>
    <div
      class="custom-cursor__dot"
      :style="dotStyle"
      ref="customCursorDot"
    ></div>
  </div>
</template>

<script>
/**
 * Due credit to https://github.com/hermanwikner/vue-custom-cursor
 * @hermanwikner
 * original author : Herman Wikner
 * modified by : Jona Frank
 */
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'CustomCursor',

  props: {
    targets: Array,
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number
  },

  setup (props) {
    const customCursorCircle = ref(null)
    const customCursorDot = ref(null)
    const circleStyle = ref(null)
    const dotStyle = ref(null)
    let scale = 1

    function customCursor (e) {
      const x = e.clientX
      const y = e.clientY

      const circle = customCursorCircle.value
      const dot = customCursorDot.value

      if (circle) {
        const circlePosX = x - circle.clientWidth / 2
        const circlePosY = y - circle.clientWidth / 2

        if (
          (props.targets.length > 0 &&
            props.targets.includes(e.target.tagName?.toLowerCase?.())) ||
          props.targets.includes(e.target.className?.toLowerCase?.())
        ) {
          scale = props.hoverSize
          circleStyle.value = { borderColor: props.circleColorHover }
          dotStyle.value = { backgroundColor: props.dotColorHover }
        } else {
          scale = 1
          circleStyle.value = { borderColor: props.circleColor }
          dotStyle.value = { backgroundColor: props.dotColor }
        }

        circle.style.transform = `translate(${circlePosX}px,${circlePosY}px) scale(${scale})`
      }

      if (dot) {
        const dotPosX = x - dot.clientWidth / 2
        const dotPosY = y - dot.clientHeight / 2
        dot.style.transform = `translate(${dotPosX}px,${dotPosY}px)`
      }
    }

    onMounted(() => {
      window.addEventListener('mousemove', customCursor)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', customCursor)
    })

    return {
      customCursorCircle,
      customCursorDot,
      circleStyle,
      dotStyle
    }
  }
})
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);
$radius: 34px;

.custom-cursor {
  cursor: none;
  pointer-events: none;
}
.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: $radius;
  height: $radius;
  transform: translate(-100%, -100%);
  transition: transform 0.5s $ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-cursor__circle::before {
  content: '';
  width: $radius;
  height: $radius;
  border: 1px solid #2f2f2f;
  border-radius: 50%;
  border-color: inherit;
  position: absolute;
  animation: romould 2s linear infinite;
}

.custom-cursor__circle::after {
  content: '';
  width: calc(#{$radius} / 1.5);
  height: calc(#{$radius} / 1.5);
  border: 1px solid #FB8C00;
  border-radius: 50%;
  animation: romould 2s linear infinite;
  animation-direction: reverse;
  animation-delay: 1s;
}

.custom-cursor__dot {
  position: fixed;
  cursor: none;
  top: 1px;
  left: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #2f2f2f;
  transform: translate(-100%, -100%);
  transition: transform 0.01s $ease;
}

@keyframes romould {
  0% { border-radius: 0; transform: rotate(0deg) scale(0.5); }
  25% { border-radius: 25%; transform: rotate(72deg) scale(0.75); }
  50% { border-radius: 50%; transform: rotate(144deg) scale(1.25); }
  75% { border-radius: 25%; transform: rotate(216deg) scale(0.75); }
  100% { border-radius: 0; transform: rotate(360deg) scale(0.5); }
}
</style>
