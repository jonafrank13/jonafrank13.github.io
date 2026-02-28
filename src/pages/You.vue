<template>
  <q-page class="flex content-center flex-center contact-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About You</h4>
      <template v-if="!error && userData.region">
        <p>Hi visitor, You seem to be accessing my website from the ip address 📡 <i>{{userData.ip}}</i>, your internet service provider is <i>{{userData.org}}</i></p>
        <p>I see that you are using a <i>{{userData.device?.brand}}&nbsp;{{userData.device?.type}}</i>&nbsp;💻&nbsp;specifically a <i>{{userData.client?.name}}</i> browser 🌐 , which is on version 🚥<i>{{userData.client?.version}}</i></p>
        <p>Your OS 💿 seems to be <i>{{userData.os?.name}}</i>, which is on version 🚥<i>{{userData.os?.version}}</i>&nbsp;<span v-if="userData.memory">having at least <i>{{userData.memory}} GB</i> of RAM</span></p>
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

        <!-- NEW FEATURES -->
        <p v-if="userData.cpuCores">
          Your device has <i>{{userData.cpuCores}}</i> logical CPU core{{userData.cpuCores > 1 ? 's' : ''}} 🧠 available to the browser
        </p>
        <p v-if="userData.language">
          Your browser's primary language 🗣️ is set to <i>{{userData.language}}</i><span v-if="userData.languages && userData.languages.length > 1">, and you also have <i>{{userData.languages.slice(1).join(', ')}}</i> as fallback language{{userData.languages.length > 2 ? 's' : ''}}</span>
        </p>
        <p v-if="userData.timezone">
          Your device's timezone 🕐 is <i>{{userData.timezone}}</i>
        </p>
        <p v-if="userData.pixelRatio">
          Your display has a pixel ratio of <i>{{userData.pixelRatio}}x</i> 🖥️ — {{userData.pixelRatio >= 2 ? 'looks like a high-DPI / Retina display!' : 'a standard resolution display'}}
        </p>
        <p v-if="userData.colorDepth">
          Your screen supports <i>{{userData.colorDepth}}-bit</i> 🎨 color depth, with an available resolution of <i>{{userData.availWidth}} × {{userData.availHeight}}</i> pixels (excluding taskbar/dock)
        </p>
        <p>
          Your browser reports that you are currently <i>{{userData.isOnline ? 'online 🟢' : 'offline 🔴'}}</i>
        </p>
        <p v-if="userData.pointerType">
          Your primary input device seems to be a <i>{{userData.pointerType}}</i> {{userData.pointerType === 'touch' ? '👆' : userData.pointerType === 'pen' ? '✏️' : '🖱️'}}<span v-if="userData.canHover !== null">, and your device <i>{{userData.canHover ? 'supports' : 'does not support'}}</i> hovering</span>
        </p>
        <p v-if="userData.maxTouchPoints !== null && userData.maxTouchPoints !== undefined">
          Your device supports up to <i>{{userData.maxTouchPoints}}</i> simultaneous touch point{{userData.maxTouchPoints !== 1 ? 's' : ''}} 🤚
        </p>
        <p v-if="userData.doNotTrack !== null">
          Your Do Not Track 🚫 preference is set to <i>{{userData.doNotTrack === '1' ? 'enabled' : userData.doNotTrack === '0' ? 'disabled' : 'unspecified'}}</i>
        </p>
        <p>
          Cookies 🍪 are <i>{{userData.cookiesEnabled ? 'enabled' : 'disabled'}}</i> in your browser
        </p>
        <p v-if="userData.reducedMotion !== null">
          You have <i>{{userData.reducedMotion ? 'enabled' : 'not enabled'}}</i> the reduced motion ♿ accessibility preference
        </p>
        <p v-if="userData.highContrast !== null">
          You have <i>{{userData.highContrast ? 'enabled' : 'not enabled'}}</i> the high contrast ⚡ accessibility preference
        </p>
        <p v-if="userData.pageLoadTime">
          This page loaded in approximately <i>{{userData.pageLoadTime}} ms</i> ⏱️ on your device
        </p>
        <p v-if="userData.canvasFingerprint">
          Your browser's unique canvas fingerprint 🖼️ hash is <i>{{userData.canvasFingerprint}}</i>
        </p>
        <p v-if="userData.webglVendor || userData.webglRenderer">
          Your GPU 🎮 is reported as <i>{{userData.webglRenderer}}</i> by <i>{{userData.webglVendor}}</i>
        </p>
        <p v-if="userData.weather">
          The current weather 🌤️ near your location is <i>{{userData.weather.temperature}}°C</i> with <i>{{userData.weather.description}}</i> and wind speed of <i>{{userData.weather.windspeed}} km/h</i> 💨
        </p>
      </template>
      <p v-else-if="error">Seems like your browser is highly restrictive!</p>
      <q-spinner-ball v-else color="secondary" size="10em" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import DeviceDetector from 'device-detector-js'

// WMO weather code descriptions
const WMO_CODES = {
  0: 'clear sky', 1: 'mainly clear', 2: 'partly cloudy', 3: 'overcast',
  45: 'foggy', 48: 'icy fog', 51: 'light drizzle', 53: 'moderate drizzle',
  55: 'dense drizzle', 61: 'slight rain', 63: 'moderate rain', 65: 'heavy rain',
  71: 'slight snow', 73: 'moderate snow', 75: 'heavy snow', 77: 'snow grains',
  80: 'slight showers', 81: 'moderate showers', 82: 'violent showers',
  85: 'slight snow showers', 86: 'heavy snow showers', 95: 'thunderstorm',
  96: 'thunderstorm with slight hail', 99: 'thunderstorm with heavy hail'
}

function getCanvasFingerprint () {
  try {
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 50
    const ctx = canvas.getContext('2d')
    ctx.textBaseline = 'top'
    ctx.font = '14px Arial'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    ctx.fillText('BrowserFingerprint', 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
    ctx.fillText('BrowserFingerprint', 4, 17)
    const data = canvas.toDataURL()
    // Simple hash
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      hash = ((hash << 5) - hash) + data.charCodeAt(i)
      hash |= 0
    }
    return Math.abs(hash).toString(16).toUpperCase()
  } catch (e) {
    return null
  }
}

function getWebGLInfo () {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return { vendor: null, renderer: null }
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    if (ext) {
      return {
        vendor: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
        renderer: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)
      }
    }
    return {
      vendor: gl.getParameter(gl.VENDOR),
      renderer: gl.getParameter(gl.RENDERER)
    }
  } catch (e) {
    return { vendor: null, renderer: null }
  }
}

function getPointerType () {
  if (window.matchMedia('(pointer: coarse)').matches) return 'touch'
  if (window.matchMedia('(pointer: fine)').matches) return 'mouse'
  if (window.matchMedia('(pointer: none)').matches) return 'none'
  return 'unknown'
}

export default defineComponent({
  name: 'You',

  setup () {
    const userData = reactive({})
    const error = ref(false)

    function handleOrientation (event) {
      const alpha = Number(event.alpha).toFixed(2)
      const beta = Number(event.beta).toFixed(2)
      const gamma = Number(event.gamma).toFixed(2)
      userData.orientation = { alpha, beta, gamma }
    }

    function handleScreenOrientation () {
      userData.height = window.innerHeight
      userData.width = window.innerWidth
      userData.angle = window.screen?.orientation?.angle
      userData.mode = window.screen?.orientation?.type?.indexOf('landscape') > -1 ? 'landscape' : 'portrait'
    }

    onMounted(() => {
      const device = new DeviceDetector().parse(window.navigator.userAgent)
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const connection = window.navigator.connection
      const memory = window.navigator.deviceMemory
      const height = window.innerHeight
      const width = window.innerWidth
      const angle = window.screen?.orientation?.angle
      const mode = window.screen?.orientation?.type?.indexOf('landscape') > -1 ? 'landscape' : 'portrait'
      const referrer = window.document.referrer

      // New browser API features
      const cpuCores = window.navigator.hardwareConcurrency || null
      const language = window.navigator.language || null
      const languages = window.navigator.languages ? Array.from(window.navigator.languages) : []
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null
      const pixelRatio = window.devicePixelRatio || null
      const colorDepth = window.screen.colorDepth || null
      const availWidth = window.screen.availWidth || null
      const availHeight = window.screen.availHeight || null
      const isOnline = window.navigator.onLine
      const pointerType = getPointerType()
      const canHover = window.matchMedia('(hover: hover)').matches
      const maxTouchPoints = window.navigator.maxTouchPoints ?? null
      const doNotTrack = window.navigator.doNotTrack ?? null
      const cookiesEnabled = window.navigator.cookieEnabled
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const highContrast = window.matchMedia('(prefers-contrast: more)').matches
      const canvasFingerprint = getCanvasFingerprint()
      const { vendor: webglVendor, renderer: webglRenderer } = getWebGLInfo()

      // Page load time
      let pageLoadTime = null
      try {
        const perf = window.performance
        if (perf && perf.timing) {
          const t = perf.timing
          pageLoadTime = t.loadEventEnd - t.navigationStart
          if (pageLoadTime <= 0) pageLoadTime = null
        } else if (perf && perf.getEntriesByType) {
          const nav = perf.getEntriesByType('navigation')[0]
          if (nav) pageLoadTime = Math.round(nav.loadEventEnd)
        }
      } catch (e) {}

      fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
        Object.assign(userData, {
          ...data,
          ...device,
          connection,
          memory,
          height,
          width,
          angle,
          mode,
          darkMode: isDark,
          referrer,
          // New features
          cpuCores,
          language,
          languages,
          timezone,
          pixelRatio,
          colorDepth,
          availWidth,
          availHeight,
          isOnline,
          pointerType,
          canHover,
          maxTouchPoints,
          doNotTrack,
          cookiesEnabled,
          reducedMotion,
          highContrast,
          canvasFingerprint,
          webglVendor,
          webglRenderer,
          pageLoadTime
        })

        window.addEventListener('deviceorientation', handleOrientation, true)
        window.addEventListener('orientationchange', handleScreenOrientation, false)

        window.navigator.getBattery().then(data => {
          userData.battery = data
        }).catch(() => {})

        navigator.clipboard.readText().then(txt => {
          userData.clipboard = txt
        }).catch(() => {})

        // Fetch weather using open-meteo (free, no API key)
        if (data.latitude && data.longitude) {
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true`)
            .then(res => res.json())
            .then(weatherData => {
              if (weatherData.current_weather) {
                const cw = weatherData.current_weather
                userData.weather = {
                  temperature: cw.temperature,
                  windspeed: cw.windspeed,
                  description: WMO_CODES[cw.weathercode] || 'unknown conditions'
                }
              }
            }).catch(() => {})
        }
      }).catch((e) => {
        error.value = true
        console.error('Seems like ajax requests are blocked')
      })

      const fs = window.RequestFileSystem || window.webkitRequestFileSystem
      if (fs) {
        fs(window.TEMPORARY, 100, () => {
          userData.incognito = false
        }, (err) => {
          console.info(err)
          userData.incognito = true
        })
      } else {
        userData.incognito = true
      }
    })

    onBeforeUnmount(() => {
      window.removeEventListener('deviceorientation', handleOrientation)
      window.removeEventListener('orientationchange', handleScreenOrientation)
    })

    return { userData, error }
  }
})
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
