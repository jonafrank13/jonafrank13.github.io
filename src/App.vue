<template>
  <router-view />
  <custom-cursor
    v-if="$q.platform.is.desktop"
    :targets="['img', 'a', 'button', 'i', 'svg']"
    :circle-color="'#5dc855'"
    :circle-color-hover="'#fff'"
    :dot-color="'#ed3833'"
    :dot-color-hover="'#5dc855'"
    :hover-size="1.8"
  />
</template>

<script>
import { defineComponent } from 'vue'
import CustomCursor from 'components/CustomCursor.vue'

export default defineComponent({
  name: 'App',
  components: {
    CustomCursor
  }
})
</script>

<style>
body { cursor: none }
aside { cursor: auto }
</style>
