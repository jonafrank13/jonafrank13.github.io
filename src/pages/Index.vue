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
    <q-page-sticky position="bottom-right" :offset="[15, 15]">
      <q-fab ripple color="secondary" padding="sm" icon="add_link" direction="left" @click="vibrate();">
        <q-fab-action padding="sm" color="accent" @click="vibrate();buyMeCoffee();" icon="payments">
          <q-tooltip>Buy me coffee</q-tooltip>
        </q-fab-action>
        <q-fab-action v-if="navigator.share" padding="sm" color="warning" @click="vibrate();sharePage()" icon="ios_share">
          <q-tooltip>Share</q-tooltip>
        </q-fab-action>
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="payModel" persistent>
      <q-card style="min-width: 350px">
        <q-toolbar>
          <q-avatar :text-color="$q.dark.isActive ? 'white' : 'primary'" icon="emoji_food_beverage" />
          <q-toolbar-title>Buy me coffee!</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          <p class="text-center text-accent">Click to open the link via an app</p>
          <a title="Click to open the link via an app" :href="upiLink" target="_blank">
            <qr-code class="q-mx-auto row items-center content-center justify-center" color="#5dc855" bg-color="#1a2936" :text="upiLink"></qr-code>
          </a>
          <a class="text-warning ellipsis q-my-md q-mx-auto" target="_blank" title="Click to open the link via an app" :style="{ maxWidth: '200px', display: 'block' }" :href="upiLink">{{upiLink}}</a>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="text-center">Scan the QR code to pay via UPI (India Only)</p>
          <q-input rounded outlined v-model="amount" debounce="500" color="accent" mask="#.##" fill-mask="0" reverse-fill-mask prefix="₹">
            <template v-slot:append>
              <q-avatar text-color="white" icon="payment"></q-avatar>
            </template>
          </q-input>
          <q-input class="q-mt-md" debounce="500" rounded outlined v-model="note" color="accent">
            <template v-slot:append>
              <q-avatar text-color="white" icon="notes"></q-avatar>
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { utils } from 'src/mixins/utils'
import FooterLink from '../components/FooterLink'
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  name: 'PageIndex',
  data () {
    return {
      roles: ['Software Engineer', 'Software Consultant', 'Software Architect', 'Javascript Ninja', 'Technical Product Manager', 'Perpetual Philomath'],
      navigator: window.navigator,
      payModel: false,
      amount: '50.00',
      note: 'Enjoy your Coffee!'
    }
  },
  components: {
    VueTyper,
    FooterLink,
    'qr-code': VueQRCodeComponent
  },
  methods: {
    sharePage: function () {
      navigator.share({
        title: 'Jona Frank',
        text: 'Check out my portfolio',
        url: 'https://jonafrank13.github.io/'
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    },
    buyMeCoffee: function () {
      this.payModel = true
    }
  },
  computed: {
    upiLink: function () {
      return `upi://pay?pa=jona.mailbox@okhdfcbank&pn=jona%20frank&am=${this.amount}&tn=${this.note}&cu=INR`
    }
  },
  mounted: function () {
    window.onload = () => {
      console.log('%c Jona Frank', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
      console.log('%c Nice to see such an inquisitive person! If you liked what you see, give me a shoutout on linkedIn, Link is in my website :)', 'color: red; font-family:monospace; font-size: 20px')
      console.log('%c If you plan to copy this, please do give due credits, jona.mailbox@gmail.com', 'color: orange; font-family:monospace; font-size: 16px')

      const title = document.title
      const changeTitle = 'ʕっ•ᴥ•ʔっ Come Back!'
      let blinkId = null
      let leftCount = 0

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          leftCount++
          blink()
        } else {
          document.title = title
          clearInterval(blinkId)
          console.log(`%c You left me :: ${leftCount} time(s)! but glad you returned`, 'color: yellow; font-size: 12px')
        }
      })

      const blink = () => {
        blinkId = setInterval(() => {
          if (document.title === changeTitle) {
            document.title = title
          } else {
            document.title = changeTitle
          }
        }, 100)
      }
    }
  },
  mixins: [utils]
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
