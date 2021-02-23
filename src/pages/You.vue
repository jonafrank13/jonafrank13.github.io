<template>
  <q-page class="flex content-center flex-center contact-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About You</h4>
      <template v-if="userData.region">
        <p>
          <span>Hi , It seems like you are accessing the my website from a the ip address 📡 <i>{{userData.ip}}</i>, your internet service provider is <i>{{userData.org}}</i></span><br>
          <span>I see that you are using a <i>{{userData.device.brand}}&nbsp;{{userData.device.type}}</i>&nbsp;💻&nbsp;specifically a <i>{{userData.client.name}}</i> browser 🌐 , which is on version 🚥<i>{{userData.client.version}}</i></span><br>
          <span>Your OS 💿 seems to be <i>{{userData.os.name}}</i>, which is on version 🚥<i>{{userData.os.version}}</i>&nbsp;<span v-if="userData.memory">having at least {{userData.memory}} GB of RAM.</span></span><br>
          <span>I sense that you are currently at &nbsp;🌎<i>{{userData.latitude}}&#176;</i> latitude &amp; <i>{{userData.longitude}}&#176;</i> longitude, which is around 🗺️<i>{{userData.city}},</i>&nbsp;<i>{{userData.region}},</i>&nbsp;<i>{{userData.country_name}}</i><span v-if="userData.postal"> with the zipcode <i>{{userData.postal}}</i></span></span><br>
        </p>
        <p v-if="userData.orientation">
          Your device's current orientation is x:&nbsp;<i>{{userData.orientation.alpha}}</i>&nbsp;y:&nbsp;<i>{{userData.orientation.beta}}</i>&nbsp;z:&nbsp;<i>{{userData.orientation.gamma}}</i>
        </p>
        <p v-if="userData.battery">
          <span>Your battery 🔋 seems to be having <i>{{Math.round(userData.battery.level*100)}}%</i>&nbsp;charge and is currently 🔌&nbsp;<i><span v-if="!userData.battery.charging">not</span>&nbsp;charging</i></span>
        </p>
        <p v-if="userData.connection">
          <span>Your network speed 💨 seems to be around <i>{{userData.connection.downlink}}&nbsp;mbps</i>&nbsp;which is effectively a&nbsp;<i>{{userData.connection.effectiveType}}</i>&nbsp;connection 🔗</span>
        </p>
        <p>Your browser / device is set to&nbsp;<i>{{userData.darkMode ? 'dark 🌚' : 'light 🌞'}}</i>&nbsp;mode</p>
      </template>
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
      userData: {}
    }
  },
  mounted: function () {
    const device = new DeviceDetector().parse(window.navigator.userAgent)
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const connection = navigator.connection
    const memory = navigator.deviceMemory
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
      this.userData = { ...data, ...device, connection, memory, darkMode: isDark }
      window.addEventListener('deviceorientation', this.handleOrientation, true)
      window.navigator.getBattery().then(data => {
        this.$set(this.userData, 'battery', data)
      })
      console.log(this.userData)
    })
  },
  methods: {
    handleOrientation: function (event) {
      const alpha = Number(event.alpha).toFixed(2)
      const beta = Number(event.beta).toFixed(2)
      const gamma = Number(event.gamma).toFixed(2)
      this.$set(this.userData, 'orientation', { alpha, beta, gamma })
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleOrientation)
  }
}
</script>
<style lang="scss" scoped>
.content {
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  i {
    color: $secondary;
    font-size: 15px;
  }
}
</style>
