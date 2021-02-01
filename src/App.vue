<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.windowObj = window
export default {
  name: 'App'
}
</script>
