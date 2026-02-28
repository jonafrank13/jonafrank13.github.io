<template>
  <span class="typewriter">
    <span class="typed-text">{{ displayText }}</span>
    <span class="caret" :class="{ blink: !isTyping }">|</span>
  </span>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'

export default defineComponent({
  name: 'TypeWriter',
  props: {
    text: {
      type: [Array, String],
      required: true
    },
    typeDelay: {
      type: Number,
      default: 70
    },
    eraseDelay: {
      type: Number,
      default: 30
    },
    preTypeDelay: {
      type: Number,
      default: 70
    },
    preEraseDelay: {
      type: Number,
      default: 2000
    },
    repeat: {
      type: Number,
      default: Infinity
    }
  },
  setup (props) {
    const displayText = ref('')
    const isTyping = ref(false)
    let timeoutId = null
    let currentIndex = 0
    let repeatCount = 0

    const texts = Array.isArray(props.text) ? props.text : [props.text]

    function typeText (text, charIndex, callback) {
      if (charIndex <= text.length) {
        isTyping.value = true
        displayText.value = text.substring(0, charIndex)
        timeoutId = setTimeout(() => {
          typeText(text, charIndex + 1, callback)
        }, props.typeDelay)
      } else {
        isTyping.value = false
        timeoutId = setTimeout(callback, props.preEraseDelay)
      }
    }

    function eraseText (text, charIndex, callback) {
      if (charIndex >= 0) {
        isTyping.value = true
        displayText.value = text.substring(0, charIndex)
        timeoutId = setTimeout(() => {
          eraseText(text, charIndex - 1, callback)
        }, props.eraseDelay)
      } else {
        isTyping.value = false
        timeoutId = setTimeout(callback, props.preTypeDelay)
      }
    }

    function cycle () {
      const text = texts[currentIndex % texts.length]
      typeText(text, 0, () => {
        eraseText(text, text.length, () => {
          currentIndex++
          if (props.repeat === Infinity || repeatCount < props.repeat) {
            if (currentIndex >= texts.length) {
              repeatCount++
            }
            cycle()
          }
        })
      })
    }

    onMounted(() => {
      timeoutId = setTimeout(cycle, props.preTypeDelay)
    })

    onBeforeUnmount(() => {
      if (timeoutId) clearTimeout(timeoutId)
    })

    return { displayText, isTyping }
  }
})
</script>

<style lang="scss" scoped>
.typewriter {
  display: inline;
}
.typed-text {
  color: $warning;
  word-break: break-word;
}
.caret {
  color: $secondary;
  font-weight: 100;
  animation: none;
}
.caret.blink {
  animation: blink 0.7s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
