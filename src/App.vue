<template>
  <div id="q-app">
    <router-view />
    <custom-cursor
    v-if="$q.platform.is.desktop"
    :targets="['img', 'a', 'button', 'i', 'svg']"
    :circleColor="'#5dc855'"
    :circleColorHover="'#fff'"
    :dotColor="'#ed3833'"
    :dotColorHover="'#5dc855'"
    :hoverSize="1.8"
  ></custom-cursor>
  </div>
</template>

<script>
import Vue from 'vue'
import CustomCursor from 'components/CustomCursor'

Vue.prototype.windowObj = window
export default {
  name: 'App',
  components: {
    CustomCursor
  }
}
</script>
<style>
#q-app { cursor: none }
aside { cursor: auto }
</style>
