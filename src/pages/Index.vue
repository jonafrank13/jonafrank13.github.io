<template>
  <q-page class="flex row flex-center justify-center content-center front-page q-pa-sm">
    <div class="img-box col-12"></div>
    <h6 class="text-secondary col-12 text-bold text-center q-mb-none">Howdy from</h6>
    <h4 class="text-accent col-12 text-center text-bold q-mb-none q-mt-none">___ Jona Frank ___</h4>
    <h6 class="text-secondary col-12 text-bold text-center q-my-sm">I am a
      <vue-typer
        :text='roles'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='30'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='smooth'
      ></vue-typer>
    </h6>
    <footer-link />
  </q-page>
</template>

<script>
import { VueTyper } from 'vue-typer'
import FooterLink from '../components/FooterLink'
export default {
  name: 'PageIndex',
  data () {
    return {
      roles: ['Polyglot Full-Stack Web Developer', 'Javascript Geek', 'Technical Solution Architect', 'Product Manager', 'Perpetual Philomath']
    }
  },
  components: {
    VueTyper,
    FooterLink
  }
}
</script>
<style lang="scss" scoped>
.front-page {
  position: relative;
}
.img-box {
  height: 200px;
  width: 200px;
  position: relative;
  border: 5px solid white;
  transform: rotate(45deg);
  overflow: hidden;
  border-radius: 20%;
}
.img-box::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url('/statics/jona.png') no-repeat;
  background-size: cover;
  background-position: center;
  transform: rotate(-45deg) scale(1.5);
}
</style>
