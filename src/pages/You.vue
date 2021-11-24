<template>
  <q-page class="flex content-center flex-center contact-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About You</h4>
      <template v-if="!error && userData.region">
        <p>Hi visitor, You seem to be accessing my website from the ip address 📡 <i>{{userData.ip}}</i>, your internet service provider is <i>{{userData.org}}</i></p>
        <p>I see that you are using a <i>{{userData.device.brand}}&nbsp;{{userData.device.type}}</i>&nbsp;💻&nbsp;specifically a <i>{{userData.client.name}}</i> browser 🌐 , which is on version 🚥<i>{{userData.client.version}}</i></p>
        <p>Your OS 💿 seems to be <i>{{userData.os.name}}</i>, which is on version 🚥<i>{{userData.os.version}}</i>&nbsp;<span v-if="userData.memory">having at least <i>{{userData.memory}} GB</i> of RAM</span></p>
        <p>I sense that you are currently at &nbsp;🌎<i>{{userData.latitude}}&#176;</i> latitude and&nbsp;🌎<i>{{userData.longitude}}&#176;</i> longitude, which is around 🗺️<i>{{userData.city}},</i>&nbsp;<i>{{userData.region}},</i>&nbsp;<i>{{userData.country_name}}</i><span v-if="userData.postal"> with the 🏙 zipcode <i>{{userData.postal}}</i></span></p>
        <p>Your device's screen ↕️ height is <i>{{userData.height}}</i>&nbsp;pixels and screen ↔️ width is <i>{{userData.width}}</i>&nbsp;pixels, <span v-if="userData.mode"> Your device is currently in the <i>{{userData.mode}}</i>&nbsp;{{userData.mode === 'landscape' ? '🖥' : '📱'}}&nbsp;mode</span><span v-if="userData.angle"> and seems to be tilted at a <i>{{userData.angle}}&#176;</i>angle</span></p>
        <p v-if="userData.orientation">
          Your device's current orientation is x:&nbsp;<i>{{userData.orientation.alpha}}</i>&nbsp;y:&nbsp;<i>{{userData.orientation.beta}}</i>&nbsp;z:&nbsp;<i>{{userData.orientation.gamma}}</i>
        </p>
        <p v-if="userData.battery">
          <span>Your battery 🔋 seems to be having <i>{{Math.round(userData.battery.level*100)}}%</i>&nbsp;charge and is currently 🔌&nbsp;<i><span v-if="!userData.battery.charging">not&nbsp;</span>charging</i></span>
        </p>
        <p v-if="userData.connection">
          <span>Your network speed 🏃🏾‍♂️ seems to be around <i>{{userData.connection.downlink}}&nbsp;mbps ⚡️</i>&nbsp;which is effectively a&nbsp;<i>{{userData.connection.effectiveType}}</i>&nbsp;connection 🔗</span>
        </p>
        <p v-if="userData.referrer">
          <span>You seem to have arrived here from the website  📣 <i>{{userData.referrer}}</i>&nbsp;</span>
        </p>
        <p v-if="userData.clipboard">
          <span>You seem to have the following content copied in your clipboard 📋 "<i class="ellipsis">{{userData.clipboard}}</i>"&nbsp;</span>
        </p>
        <p>
          <span>You seem to have accessed the website in <i class="ellipsis">{{userData.incognito ? 'incognito' : 'non incognito'}} </i>mode&nbsp;</span>
        </p>
        <p>Your browser / device is set to&nbsp;<i>{{userData.darkMode ? 'dark' : 'light'}}</i>&nbsp;{{userData.darkMode ? '🌚' : '🌞'}}&nbsp;mode</p>
      </template>
      <p v-else-if="error">Seems like your browser is highly restrictive!</p>
      <q-spinner-ball v-else color="secondary" size="10em" />
    </div>
  </q-page>
</template>

<script>
import DeviceDetector from 'device-detector-js'

export default {
  name: 'You',
  data () {
    return {
      userData: {},
      error: false
    }
  },
  mounted: function () {
    const device = new DeviceDetector().parse(window.navigator.userAgent)
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const connection = window.navigator.connection
    const memory = window.navigator.deviceMemory
    const height = window.innerHeight
    const width = window.innerWidth
    const angle = window.screen?.orientation?.angle
    const mode = window.screen?.orientation?.type?.indexOf('landscape') > -1 ? 'landscape' : 'portrait'
    const referrer = window.document.referrer

    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
      this.userData = { ...data, ...device, connection, memory, height, width, angle, mode, darkMode: isDark, referrer }
      window.addEventListener('deviceorientation', this.handleOrientation, true)
      window.addEventListener('orientationchange', this.handleScreenOrientation, false)
      window.navigator.getBattery().then(data => {
        this.$set(this.userData, 'battery', data)
      })
      navigator.clipboard.readText().then(txt => {
        this.$set(this.userData, 'clipboard', txt)
      })
    }).catch((e) => {
      this.error = true
      console.error('Seems like ajax requests are blocked')
    })

    const fs = window.RequestFileSystem || window.webkitRequestFileSystem
    if (fs) {
      fs(window.TEMPORARY, 100, (fs) => {
        this.$set(this.userData, 'incognito', false)
      }, (err) => {
        console.info(err)
        this.$set(this.userData, 'incognito', true)
      })
    } else {
      this.$set(this.userData, 'incognito', true)
    }
  },
  methods: {
    handleOrientation: function (event) {
      const alpha = Number(event.alpha).toFixed(2)
      const beta = Number(event.beta).toFixed(2)
      const gamma = Number(event.gamma).toFixed(2)
      this.$set(this.userData, 'orientation', { alpha, beta, gamma })
    },
    handleScreenOrientation: function () {
      const height = window.innerHeight
      const width = window.innerWidth
      const angle = window.screen?.orientation?.angle
      const mode = window.screen?.orientation?.type?.indexOf('landscape') > -1 ? 'landscape' : 'portrait'

      this.$set(this.userData, 'height', height)
      this.$set(this.userData, 'width', width)
      this.$set(this.userData, 'angle', angle)
      this.$set(this.userData, 'mode', mode)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleOrientation)
  }
}
</script>
<style lang="scss" scoped>
.content {
  border: 1px solid;
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  min-height: 450px;
  min-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  i {
    color: $secondary;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
