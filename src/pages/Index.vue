<template>
  <q-page class="flex row flex-center justify-center content-center front-page q-pa-sm">
    <div class="col-12 img-container"><div class="img-box"></div></div>
    <h6 class="text-secondary col-12 text-bold text-center q-mb-none txt-shadow">Howdy from</h6>
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
      roles: ['Principal Software Engineer', 'Javascript Ninja', 'Technical Software Architect', 'Technical Product Manager', 'Perpetual Philomath']
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
.img-container {
  height: 200px;
  width: 200px;
  position: relative;
  border: 5px solid white;
  transform: rotate(0deg);
  border-radius: 15%;
  margin: auto;
  animation: mould 5s linear infinite;
}
.img-box {
  height: 200px;
  width: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 20%;
  border: 5px solid white;
  background-color: #eff1ea;
  transform: rotate(45deg);
  animation: mould 5s linear infinite;
  box-shadow: -5px 5px 50px 0px rgba(0,0,0,0.8);
}
.img-box::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url('/statics/JONA.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  transform: rotate(-45deg) scale(1.38) translate3d(8px, 5px, 0);
}
.img-container::after, .img-container::before {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: spread 25s linear infinite;
  box-shadow: -5px 5px 50px 0px rgba(0,0,0,0.8);
}

@keyframes spread {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 800% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes mould {
  0% {
    border-radius: 0;
  }
  25% {
    border-radius: 10%;
  }
  50% {
    border-radius: 20%;
  }
  75% {
    border-radius: 10%;
  }
  100% {
    border-radius: 0;
  }
}

.img-container::after, .img-container::before {
  filter: blur(50px);
}
</style>
